import Image from "next/image";
import React from "react";

const items = [
  "90% of customers check Google before visiting a shop or choosing a service.",
  "Negative reviews can damage trust overnight.",
  "Without the right keywords, your business stays invisible.",
];

export default function ReviewsSection() {
  return (
    <section className="my-16 flex flex-col lg:flex items-center gap-x-10">
      <Image
        src={"/landing/reviews.png"}
        className="w-full h-full"
        width={500}
        height={392}
        alt="trustpilot rating 4.9/5.0, google rating 4.9/5.0"
      />

      <div className="max-w-md px-8 flex flex-col gap-4">
        <h2 className="text-[32px] font-medium">
          Why Your Online Presence Matters
        </h2>
        <p className="font-light text-base">
          Your online presence is essential for making sure that your potential
          clients are reaching you.
        </p>
        <ul className="flex flex-col gap-6">
          {items.map((item) => (
            <li className="flex items-start gap-3" key={item}>
              <Image
                src={"/landing/star.svg"}
                width={19}
                height={17}
                alt="star"
                role="presentation"
                className="pt-1"
              />
              <p className="text-[#B1B9FF] font-light text-base">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
