import React from 'react';
import deliveryImg from "../assets/safe-delivery.png";
import deliveryImg2 from "../assets/live-tracking.png";

const CardSection = () => {
                return (
                                <div>
                                                <div className="lg:mt-7 md:mt-5 mt-3 lg:mb-7 md:mb-5 mb-3 bg-gray-50 rounded-xl p-6 md:p-10 flex flex-col md:flex-row lg:items-center items-center md:items-start gap-8 shadow-sm">
        {/* Illustration with right dashed border */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-end relative md:pr-8">
          <img
            src={deliveryImg2}
            alt="Live Parcel Tracking Illustration"
            className="w-[190px] h-[190px]"
          />
          <div className="hidden md:block absolute right-0 top-0 h-full border-r-2 border-dashed border-gray-300" />
        </div>

        {/* Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="font-extrabold text-[#03373D] text-2xl mb-2">
            Live Parcel Tracking
          </h2>
          <p className="font-medium text-[16px] text-[#606060]">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment’s journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="lg:mt-7 md:mt-5 mt-3 lg:mb-7 md:mb-5 mb-3 bg-gray-50 rounded-xl p-6 md:p-10 flex flex-col md:flex-row lg:items-center items-center md:items-start gap-8 shadow-sm">
        {/* Illustration with right dashed border */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-end relative md:pr-8">
          <img
            src={deliveryImg}
            alt="Live Parcel Tracking Illustration"
            className="w-[190px] h-[190px]"
          />
          <div className="hidden md:block absolute right-0 top-0 h-full border-r-2 border-dashed border-gray-300" />
        </div>

        {/* Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="font-extrabold text-[#03373D] text-2xl mb-2">
            100% Safe Delivery
          </h2>
          <p className="font-medium text-[16px] text-[#606060]">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="lg:mt-7 md:mt-5 mt-3 lg:mb-7 md:mb-5 mb-3 bg-gray-50 rounded-xl p-6 md:p-10 flex flex-col md:flex-row lg:items-center items-center md:items-start gap-8 shadow-sm">
        {/* Illustration with right dashed border */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-end relative md:pr-8">
          <img
            src={deliveryImg2}
            alt="Live Parcel Tracking Illustration"
            className="w-[190px] h-[190px]"
          />
          <div className="hidden md:block absolute right-0 top-0 h-full border-r-2 border-dashed border-gray-300" />
        </div>

        {/* Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="font-extrabold text-[#03373D] text-2xl mb-2">
            24/7 Call Center Support
          </h2>
          <p className="font-medium text-[16px] text-[#606060]">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
                                </div>
                );
};

export default CardSection;