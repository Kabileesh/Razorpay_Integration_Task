import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentInfo } from "../../store/slices/paymentSlice";
import { getOrderState, orderPlacement } from "../../store/slices/orderSlice";

const Bill = () => {
  const deliveryCharge = 12;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderDetails = useSelector(getOrderState);

  const discount = orderDetails.amount * 0.15;
  const taxes = orderDetails.amount * 0.05;
  const totalPrice = orderDetails.amount - discount + taxes + deliveryCharge;

  const placeOrderHandler = async () => {
    const orderInfo = await dispatch(orderPlacement(orderDetails));

    const order = {
      amount: totalPrice * 100,
      currency: "INR",
      receipt: orderInfo.payload.orderDetails._id,
    };

    dispatch(addPaymentInfo(order));
    navigate("/payment");
  };

  return (
    <div className="flex flex-col items-center mb-8 mx-8 mt-4">
      <div className="flex w-full max-w-[359px] items-stretch justify-between gap-5">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-neutral-700 text-xl font-black leading-5 tracking-normal whitespace-nowrap">
            Summary
          </div>
          <div className="bg-rose-600 w-1/2 flex shrink-0 h-[3px] flex-col rounded-2xl" />
          <div className="text-zinc-500 text-base leading-5 tracking-normal whitespace-nowrap mt-12 max-md:mt-10">
            Subtotal
          </div>
          <div className="text-zinc-500 text-base leading-5 tracking-normal whitespace-nowrap mt-6">
            Discount
          </div>
          <div className="text-zinc-500 text-base leading-5 tracking-normal whitespace-nowrap mt-6">
            Delivery Fee
          </div>
          <div className="text-zinc-500 text-base leading-5 tracking-normal whitespace-nowrap mt-6">
            Taxes
          </div>
          <div className="text-neutral-700 text-lg font-black leading-5 tracking-normal whitespace-nowrap mt-9">
            Total
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col text-right items-center mt-16 self-end max-md:mt-10">
          <div className="text-neutral-700 text-base leading-5 tracking-normal self-stretch whitespace-nowrap">
            ₹{orderDetails.amount}
          </div>
          <div className="text-blue-400 text-base leading-5 tracking-normal self-stretch whitespace-nowrap mt-6">
            - ₹{discount}
          </div>
          <div className="text-neutral-700 text-base leading-5 tracking-normal self-stretch whitespace-nowrap mt-6">
            ₹{deliveryCharge}
          </div>
          <div className="text-neutral-700 text-base leading-5 tracking-normal self-stretch whitespace-nowrap mt-6">
            ₹{taxes}
          </div>
          <div className="text-neutral-700 text-lg font-black leading-5 tracking-normal self-stretch whitespace-nowrap mt-9">
            ₹ {totalPrice}
          </div>
        </div>
      </div>
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4"
        onClick={placeOrderHandler}
      >
        Place Order
      </button>
    </div>
  );
};

export default Bill;
