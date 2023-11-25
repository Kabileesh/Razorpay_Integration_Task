const OrderItem = (props) => {
  return (
    <div className="flex w-full items-stretch justify-between gap-8 mt-7 pb-5 px-5">
      <div className="flex justify-between gap-2">
        <div className="text-white text-center h-fit text-base leading-5 tracking-normal whitespace-nowrap bg-rose-600 aspect-square items-stretch px-2 md:px-1.5 py-1 rounded max-md:pr-0">
          {props.itemCount}
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="justify-center text-neutral-700 text-base italic leading-5 tracking-normal">
            {props.itemName}
          </div>
          <div className="justify-center flex-col text-zinc-500 text-xs leading-5 tracking-normal">
            {props.itemDescription}
          </div>
        </div>
      </div>
      <div className="text-neutral-700 text-right text-base leading-5 tracking-normal grow whitespace-nowrap self-start">
        ₹{props.amount * props.itemCount}
      </div>
    </div>
  );
};

export default OrderItem;
