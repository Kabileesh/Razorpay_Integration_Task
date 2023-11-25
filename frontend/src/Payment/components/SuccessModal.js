import { useNavigate } from "react-router-dom";
import SuccessIcon from "../icons/SuccessIcon";

const SuccessModal = (props) => {
  const navigate = useNavigate();

  const successHandler = () => {
    navigate("/");
  };

  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 overflow-x-hidden overflow-y-auto"
    >
      <div className="relative w-full max-w-md bg-white dark:bg-gray-700 rounded-lg shadow">
        <div className="relative flex-col bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex flex-col items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <SuccessIcon />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Payment Success
            </h3>
          </div>
          <div className="flex flex-col items-center p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Order has been placed successfully
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Order ID: {props.order_id}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Total Amount: ₹ {props.amount / 100}.00
            </p>
          </div>
          <div className="flex justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-1.5 pb-2 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
              onClick={successHandler}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
