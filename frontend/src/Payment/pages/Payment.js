import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaymentState,
  razorpayInstanceCreation,
  removePaymentInfo,
} from "../../store/slices/paymentSlice";
import SuccessModal from "../components/SuccessModal";
import FailureModal from "../components/FailureModal";
import { removeOrderInfo } from "../../store/slices/orderSlice";
import LoadingSpinner from "../icons/LoadingSpinner";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const Razorpay = () => {
  const [isModalOpen, SetModalOpen] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isPaymentSuccess, setPaymentSuccess] = useState(false);
  const [isPaymentFailed, setPaymentFailed] = useState(false);

  const [order_id, setOrderId] = useState("");
  const [err_reason, setErrorReason] = useState("");
  const [amount, setAmount] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paymentDetails = useSelector(getPaymentState);

  const cancelHandler = async () => {
    SetModalOpen(false);
    navigate("/");
  };

  const displayRazorpay = async () => {
    setLoading(true);

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razropay failed to load!!");
      return;
    }

    const instanceDetails = await dispatch(
      razorpayInstanceCreation(paymentDetails)
    );

    setAmount(instanceDetails.payload.order.amount);

    const options = {
      key: process.env.REACT_APP_MY_KEY_ID,
      amount: instanceDetails.payload.order.amount,
      currency: instanceDetails.payload.order.currency,
      name: "TSX Pizzarias Pvt Ltd",
      description: "Test Transaction",
      order_id: instanceDetails.payload.order.id,
      callback_url:
        process.env.REACT_APP_BASE_URL + "/verify-razorpay-signature",
      handler: async (response) => {
        SetModalOpen(false);
        setOrderId(response.razorpay_order_id);
        await dispatch(removeOrderInfo());
        await dispatch(removePaymentInfo());
        setPaymentSuccess(true);
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);

    paymentObject.on("payment.failed", async (response) => {
      SetModalOpen(false);
      setErrorReason(response.error.description);
      await dispatch(removePaymentInfo());
      setPaymentFailed(true);
    });

    paymentObject.open();

    setLoading(false);
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div
        id="popup-modal"
        tabIndex="-1"
        className={`${
          isModalOpen ? "flex" : "hidden"
        } overflow-y-auto fixed inset-0 bg-opacity-50 overflow-x-hidden mt-36 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-slate-200 rounded-lg shadow dark:bg-gray-700">
            <div className="p-4 md:p-5 text-center">
              <h3 className="mb-5 text-lg font-normal text-black dark:text-gray-400">
                Are you sure you want to Proceed?
              </h3>
              <button
                type="button"
                className="text-white gap-4 bg-[#050708] hover:bg-[#050708]/80 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
                onClick={displayRazorpay}
              >
                {isLoading ? <><LoadingSpinner /> Proceeding...</> : "Proceed to Pay"}
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={cancelHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {isPaymentSuccess && <SuccessModal order_id={order_id} amount={amount} />}
      {isPaymentFailed && <FailureModal err_reason={err_reason} />}
    </div>
  );
};

export default Razorpay;
