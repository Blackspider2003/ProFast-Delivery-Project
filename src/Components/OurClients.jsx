import React from "react";
import logo1 from "../assets/brands/amazon.png";
import logo2 from "../assets/brands/amazon_vector.png";
import logo3 from "../assets/brands/casio.png";
import logo4 from "../assets/brands/moonstar.png";
import logo5 from "../assets/brands/randstad.png";
import logo6 from "../assets/brands/start-people 1.png";
import logo7 from "../assets/brands/start.png";
import Marquee from "react-fast-marquee";
import CardSection from "./CardSection";
import MerchantSection from "./MerchantSection";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const OurClients = () => {
  return (
    <div className="lg:mt-7 md:mt-5 mt-3 lg:mb-7 md:mb-5 mb-3">
      <h1 className="text-[#03373D] font-extrabold text-2xl text-center mb-5">
        We've helped thousands of sales teams
      </h1>
      <Marquee pauseOnHover speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-8 flex items-center">
            <img src={logo} className="h-6 object-contain" alt="" />
          </div>
        ))}
      </Marquee>
      <div className="border border-[#03464D] border-dashed border-t lg:mt-7 md:mt-5 mt-3 lg:mb-7 md:mb-5 mb-3"></div>

      {/* Card Section */}
      <CardSection></CardSection>
      <div className="border border-[#03464D] border-dashed border-t lg:mt-7 md:mt-5 mt-3 lg:mb-7 md:mb-5 mb-3"></div>
      <MerchantSection></MerchantSection>
    </div>
  );
};

export default OurClients;
