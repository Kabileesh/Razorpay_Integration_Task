import React from "react";
import ClockIcon from "../icons/ClockIcon";

const Header = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 object-cover brightness-50"
        style={{
          backgroundImage: `url(/images/finalPicture.png)`,
          opacity: 0.8,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      ></div>
      <div className="flex flex-col justify-center mb-4 pl-7 pr-7 mx-auto relative">
        <h1 className="justify-center text-3xl md:text-4xl p-4 mt-8 text-white text-center text-base font-extrabold leading-4 tracking-wider uppercase mt-2.5">
          TSX PIZZERIAS
        </h1>
        <div className="self-stretch w-auto text-center flex items-stretch justify-between gap-1 mt-4">
          <div className="justify-center text-white text-xs font-extrabold leading-3 tracking-wider uppercase border-[color:var(--sec,#4F4F4F)] bg-black grow pl-4 pr-auto py-3 rounded-lg border-[0.912px] border-solid max-md:pl-2.5">
            Delivery
          </div>
          <div className="justify-center text-black text-xs leading-3 tracking-wider uppercase border-[color:var(--sec,#4F4F4F)] bg-neutral-200 grow items-center pl-4 pr-auto py-3 rounded-lg border-[0.912px] border-solid">
            PICK UP
          </div>
        </div>
        <div className="self-center flex w-full max-w-[192px] items-stretch mt-8 max-md:justify-center">
          <ClockIcon />
          <div className="text-white text-center text-sm font-bold leading-3 tracking-tight mb-2 ml-2">
            Delivered In : 25 mins
          </div>
        </div>
        <div className="text-white text-center text-lg font-bold leading-3 tracking-tight self-center whitespace-nowrap mt-2.5 mb-5">
          Menu Hours: 10:00 AM to 11:00 PM
        </div>
      </div>
    </div>
  );
};

export default Header;
