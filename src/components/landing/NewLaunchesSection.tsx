import Image from "next/image";
import React from "react";

const launches = [
  {
    title: "ReviuAI",
    description:
      "ReviuAI delivers accurate unbiased and personalized reviews using AI and data driven insights helping users make smarter decisions",
    src: "/landing/laptop_right.png",
  },
  {
    title: "LeadPoppers",
    description:
      "With the integration of AI, our latest technology will help you generate genuine B2B and B2C leads. Our finder traces emails from 3-point data – first name, last name, and company name.",
    src: "/landing/laptop_left.png",
  },
  {
    title: "Digital Business Cards",
    description:
      "Create reliable, simple, and effective business cards in just 5 minutes with our NxtGen Digital Business Card platform.",
    src: "/landing/holding_phone.png",
  },
];

export default function NewLaunchesSection() {
  return (
    <section className="my-16 px-8">
      <h2 className="font-medium text-2xl text-center mb-9">
        Experience the future with our newest launch
      </h2>
      <div className="grid grid-cols-1 gap-8">
        {launches.map((launch) => (
          <div key={launch.title}>
            <Image
              src={launch.src}
              width={316}
              height={309}
              className="w-full"
              alt=""
              role="presentation"
            />
            <h3 className="text-2xl font-bold mt-2.5 mb-3 font-manrope">
              {launch.title}
            </h3>
            <p className="text-base mb-6 text-[#A7A7A7] font-normal">
              {launch.description}
            </p>
            <button className="text-base font-manrope cursor-pointer font-semibold">
              Know More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
