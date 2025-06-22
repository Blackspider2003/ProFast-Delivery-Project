import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import customerImg from '../assets/customer-top.png'

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Awlad Hossin",
      role: "Senior Product Designer",
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
    },
    {
      id: 2,
      name: "Rasel Ahamed",
      role: "CTO",
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
    },
    {
      id: 3,
      name: "Nasir Uddin",
      role: "CEO",
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
    },
    {
      id: 4,
      name: "Tamim Khan",
      role: "Marketing Manager",
      text: "Since using Posture Pro, I feel more confident and pain-free during long hours at work. It's a game-changer!"
    }
  ];

  return (
    <section className="bg-gray-50 rounded-2xl py-16 px-4 md:px-20 lg:mt-7 md:mt-5 mt-3 lg:mb-7 md:mb-5 mb-3">
      {/* Header Section with IMAGE */}
      <div className="text-center mb-12">
        <img
          src={customerImg} // 🔁 Replace with your image path
          alt="Shipping Icon"
          className="h-14 mx-auto mb-4 animate-bounce"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          What our customers are sayings
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 3 } }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="pb-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="h-full bg-white rounded-xl shadow-md px-6 py-8 transition-all duration-300 transform hover:scale-[1.02]">
              <FaQuoteLeft className="text-teal-600 text-2xl mb-4" />
              <p className="text-gray-700 text-sm mb-6">{testimonial.text}</p>
              <hr className="border-gray-300 mb-4" />
              <div className="text-left">
                <h4 className="text-md font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
