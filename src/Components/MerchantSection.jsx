import React from "react";
import locationImg from "../assets/location-merchant.png";


const MerchantSection = () => {
  return (
    <div className="bg-[#03373D] bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat rounded-2xl lg:p-9">
      <div className="hero-content flex-col lg:flex-row-reverse lg:flex-1">
        <img src={locationImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="lg:flex-1">
          <h1 className="text-4xl font-extrabold">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h1>
          <p className="py-6 text-[16px] font-normal text-[#DADADA] lg:w-[500px]">
            We offer the lowest delivery charge with  the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex lg:flex-row md:flex-col flex-col gap-4 items-center">
            <button className="btn bg-[#CAEB66] text-[#1F1F1F] font-bold rounded-4xl">
              Become a Merchant
            </button>
            <button className="btn btn-outline hover:bg-[#CAEB66] hover:text-[#1F1F1F] rounded-4xl lg:ml-5 font-bold">
              Earn with Profast Couriert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSection;
