import React from "react";
import serviceImg from "../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-[#03373D] rounded-2xl p-20 lg:mt-7 md:mt-5 mt-3 lg:mb-7 md:mb-5 mb-3">
      <div className="mb-5">
        <h1 className="font-extrabold text-4xl text-center">Our Services -</h1>
        <p className="font-medium text-[16px] text-[#DADADA] text-center">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-white p-7 rounded-2xl text-center hover:bg-[#CAEB66] cursor-pointer">
          <img
            className="mx-auto bg-gray-200 rounded-full p-2"
            src={serviceImg}
            alt=""
          />
          <h2 className="font-bold text-2xl text-[#03373D]">
            Express & Standard Delivery
          </h2>
          <p className="font-medium text-[16px] text-[#606060]">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-white p-7 rounded-2xl text-center hover:bg-[#CAEB66] cursor-pointer">
          <img
            className="mx-auto bg-gray-200 rounded-full p-2"
            src={serviceImg}
            alt=""
          />
          <h2 className="font-bold text-2xl text-[#03373D]">
            Nationwide Delivery
          </h2>
          <p className="font-medium text-[16px] text-[#606060]">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        <div className="bg-white p-7 rounded-2xl text-center hover:bg-[#CAEB66] cursor-pointer">
          <img
            className="mx-auto bg-gray-200 rounded-full p-2"
            src={serviceImg}
            alt=""
          />
          <h2 className="font-bold text-2xl text-[#03373D]">
            Fulfillment Solution
          </h2>
          <p className="font-medium text-[16px] text-[#606060]">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="bg-white p-7 rounded-2xl text-center hover:bg-[#CAEB66] cursor-pointer">
          <img
            className="mx-auto bg-gray-200 rounded-full p-2"
            src={serviceImg}
            alt=""
          />
          <h2 className="font-bold text-2xl text-[#03373D]">
            Cash on Home Delivery
          </h2>
          <p className="font-medium text-[16px] text-[#606060]">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-white p-7 rounded-2xl text-center hover:bg-[#CAEB66] cursor-pointer">
          <img
            className="mx-auto bg-gray-200 rounded-full p-2"
            src={serviceImg}
            alt=""
          />
          <h2 className="font-bold text-2xl text-[#03373D]">
            Corporate Service / Contract In Logistics
          </h2>
          <p className="font-medium text-[16px] text-[#606060]">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="bg-white p-7 rounded-2xl text-center hover:bg-[#CAEB66] cursor-pointer">
          <img
            className="mx-auto bg-gray-200 rounded-full p-2"
            src={serviceImg}
            alt=""
          />
          <h2 className="font-bold text-2xl text-[#03373D]">Parcel Return</h2>
          <p className="font-medium text-[16px] text-[#606060]">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
