import React from "react";

export default function CtaBanner() {
  return (
    <section
      className="my-16 px-8 py-10 flex flex-col gap-7 justify-center lg:items-center"
      style={{
        backgroundImage: "url(/landing/adviciya_banner.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "300px",
      }}
    >
      <p className="text-[32px] leading-[47px] font-medium lg:max-w-3xl lg:mx-auto">
        Adviciya provides complete solutions for ensuring a strong digital
        presence for your brand.
      </p>

      <button className="bg-[#CA3737] text-white w-max px-6 py-3 rounded-full text-[10px] font-medium hover:bg-red-700 transition-colors block">
        Know More
      </button>
    </section>
  );
}
