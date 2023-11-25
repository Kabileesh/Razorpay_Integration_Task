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

    // <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg mb-8 flex items-center justify-center">
    //   <div className="place-content-center">
    //     <h2 className="text-2xl text-center font-bold mb-4">Your Orders</h2>
    //     {Object.entries(orderItems).map(([itemName, price]) => {
    //       return <OrderItem key={itemName} itemName={itemName} price={price} />;
    //     })}
    //     <button
    //       type="button"
    //       className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
    //     >
    //       Add More Items
    //     </button>
    //   </div>
    // </div>
  );
};

export default OrdersList;
