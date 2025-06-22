import React from "react";
import bookingImg from "../assets/bookingIcon.png";

const HowItWorks = () => {
  return (
    <div className="lg:mt-7 md:mt-5 mt-3 lg:mb-7 md:mb-5 mb-3">
      <h1 className="font-extrabold text-3xl text-[#03373D] mb-5">How it works</h1>
     <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                 <div className="bg-white p-7 rounded-2xl">
        <img src={bookingImg} alt="" />
        <h2 className="font-bold text-xl text-[#03373D]">Booking Pick & Drop</h2>
        <p className="font-medium text-[16px] text-[#606060]">
          From personal packages to business shipments — we deliver on time,
          every time.
        </p>
      </div>
                 <div className="bg-white p-7 rounded-2xl">
        <img src={bookingImg} alt="" />
        <h2 className="font-bold text-xl text-[#03373D]">Cash On Delivery</h2>
        <p className="font-medium text-[16px] text-[#606060]">
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>
                 <div className="bg-white p-7 rounded-2xl">
        <img src={bookingImg} alt="" />
        <h2 className="font-bold text-xl text-[#03373D]">Delivery Hub</h2>
        <p className="font-medium text-[16px] text-[#606060]">
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>
                 <div className="bg-white p-7 rounded-2xl">
        <img src={bookingImg} alt="" />
        <h2 className="font-bold text-xl text-[#03373D]">Booking SME & Corporate</h2>
        <p className="font-medium text-[16px] text-[#606060]">
         From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>
     </div>
    </div>
  );
};

export default HowItWorks;
