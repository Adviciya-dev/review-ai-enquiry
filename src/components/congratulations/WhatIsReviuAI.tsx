import React from "react";

const features = [
  "Smart Review Requests",
  "AI-Powered Responses",
  "Reputation Protection",
  "Image Sharing for Reviews",
  "Centralised Dashboard",
];

export default function WhatIsReviuAI() {
  return (
    <section className="my-14 px-8 flex flex-col items-center justify-center">
      <div className="max-w-md lg:max-w-4xl lg:text-center mx-auto">
        <h2 className="text-2xl font-medium mb-6 italic">What is ReviuAI?</h2>

        <p className="text-[20px] leading-[40px] font-extralight">
          ReviuAI is an AI-powered Google Review System that helps your business
          stand out online. By suggesting keyword-rich, authentic reviews, it
          enhance your online presence, boosts visibility, and builds stronger
          customer trust.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 lg:text-center font-medium text-[21px] pt-10 gap-8">
        {features.map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>
    </section>
  );
}
