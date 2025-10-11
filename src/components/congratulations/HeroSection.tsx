"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const images = [
  "/congratulations/banner3.png",
  "/congratulations/banner1.png",
  "/congratulations/banner2.png",
];

const contents = [
  {
    title: "Congratulations",
    button: null,
    subtext:
      "Thank you for choosing ReviuAI,\nWe will notify via WhatsApp & Email once the account is ready",
  },
  {
    title: "Smarter Reviews,\nStronger Business",
    button: { text: "Know More", bgColor: "#322558" },
    subtext: null,
  },
  {
    title: "Redefining Business Growth in the Digital Age",
    button: { text: "Know More", bgColor: "#CA3737" },
    subtext: null,
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const positionClass = `px-8 pt-8 md:absolute md:px-0 md:pt-0 md:top-1/2 md:-translate-y-1/2 z-40 ${
    activeIndex === 0
      ? "md:left-1/2 md:-translate-x-1/2 md:max-w-[900px]"
      : "md:left-[60%] md:max-w-[550px]"
  }`;

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-[300px] sm:h-[400px] lg:h-[600px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                objectPosition: "10% 100%",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={positionClass}
      >
        <h1
          className={`text-[32px] lg:text-[56px] leading-none italic font-medium mb-4 text-white ${
            activeIndex === 1
              ? "text-[#BFBAE6]"
              : activeIndex === 0
              ? "text-center"
              : "text-left"
          }`}
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          {contents[activeIndex].title}
        </h1>

        {contents[activeIndex].button && (
          <a
            href="http://reviuai.com/"
            target="_blank"
            className="py-3 px-9 w-max hover:opacity-80 cursor-pointer rounded-full transition-all duration-300 mt-2 block"
            style={{
              backgroundColor: contents[activeIndex].button.bgColor,
              boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {contents[activeIndex].button.text}
          </a>
        )}

        {contents[activeIndex].subtext && (
          <p
            className="text-base italic text-center lg:text-3xl"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            {contents[activeIndex].subtext}
          </p>
        )}
      </motion.div>
    </section>
  );
}
