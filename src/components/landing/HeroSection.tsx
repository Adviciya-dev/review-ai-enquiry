import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-end pb-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto px-4 text-center">
        <h1 className="text-4xl font-normal text-white leading-tight mb-16">
          Smarter Reviews,{"\n"}Stronger Business
        </h1>

        {/* Know More Button */}
        <button className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-30 transition-all duration-300">
          Know More
        </button>
      </div>
    </section>
  );
}
