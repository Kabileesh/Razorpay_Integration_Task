import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import OrderItem from "./OrderItem";
import { addOrderInfo } from "../../store/slices/orderSlice";

const OrdersList = () => {
  const orderItems = useMemo(
    () => ({
      "Margarita A": {
        description: "Crab & Cucumber",
        amount: 206,
        count: 2,
      },
      "Margarita B": {
        description: "Tuna & Cucumber",
        amount: 112,
        count: 1,
      },
      "Margarita C": {
        description: "Smoked salmon over rice with extra sauce",
        amount: 412,
        count: 3,
      },
    }),
    []
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const setOrderState = async () => {
      const totalPrice = Object.values(orderItems).reduce(
        (acc, item) => acc + item.amount * item.count,
        0
      );

      const orderDetails = {
        amount: totalPrice,
        customerMail: "sample@gmail.com",
        items: orderItems,
      };

      dispatch(addOrderInfo(orderDetails));
    };
    setOrderState();
  }, [orderItems, dispatch]);

  return (
    <div className="flex flex-col items-stretch mx-4 sm:mx-8 md:mx-32">
      <div className="flex w-full items-stretch justify-between gap-5 px-5">
        <div className="justify-center text-neutral-700 text-xl font-black leading-5 tracking-normal">
          Your Order
        </div>
        <button className="justify-center text-rose-600 text-sm font-black leading-5 tracking-normal whitespace-nowrap self-start">
          + Add items
        </button>
      </div>
      {Object.entries(orderItems).map(
        ([itemName, { description, amount, count }]) => {
          return (
            <OrderItem
              key={itemName}
              itemCount={count}
              itemName={itemName}
              itemDescription={description}
              amount={amount}
            />
          );
        }
      )}
    </div>
  );
};

export default OrdersList;
