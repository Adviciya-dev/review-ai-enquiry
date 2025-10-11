import Image from "next/image";
import React from "react";

const socials = [
  {
    src: "landing/facebook.svg",
    alt: "facebook",
    width: 15,
    height: 15,
    link: "https://www.facebook.com/adviciya",
  },
  {
    src: "landing/instagram.svg",
    alt: "instagram",
    width: 15,
    height: 15,
    link: "https://www.instagram.com/adviciya.solutions/",
  },
  {
    src: "landing/linkedin.svg",
    alt: "linkedin",
    width: 13,
    height: 13,
    link: "https://www.linkedin.com/company/adviciya/",
  },
  // {
  //   src: "landing/youtube.svg",
  //   alt: "youtube",
  //   width: 16,
  //   height: 12,
  //   link: "",
  // },
  // {
  //   src: "landing/telegram.svg",
  //   alt: "telegram",
  //   width: 15,
  //   height: 13,
  //   link: "",
  // },
];

export default function FooterSection() {
  return (
    <section className="bg-[#2D2D2D] text-white pt-6 pb-10 flex flex-col items-center justify-center">
      <div className="flex items-center gap-7 justify-center mb-9">
        <Image
          src={"/landing/adviciya_logo.svg"}
          width={111}
          height={78}
          title="Adviciya"
          alt="Adviciya logo"
        />
        <Image
          src={"/landing/reviuai_logo.svg"}
          width={113}
          height={74}
          title="Reviu.ai"
          alt="Reviu.Ai logo"
        />
      </div>
      <div>
        <h2 className="text-2xl font-medium mb-4">
          Let&apos;s Build the
          <br />
          Future Together
        </h2>
        <a
          href="tel:+917736677715"
          className="flex items-center gap-2 text-2xl font-medium hover:underline focus:outline-none"
        >
          <Image
            src={"/landing/phone.svg"}
            width={20}
            height={20}
            alt="Phone"
          />
          +91 77366-77715
        </a>
      </div>

      <div className="text-center mb-10 mt-5">
        {/* Websites */}
        <div className="flex items-center gap-4 font-medium text-[10px]">
          <a
            href="https://www.adviciya.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.adviciya.com
          </a>
          <span>|</span>
          <a
            href="https://reviuai.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            www.reviuai.com
          </a>
        </div>
      </div>

      <div className="w-full border border-[#383838]" />

      {/* Socials */}
      <div className="flex justify-center gap-2.5 my-6">
        {socials.map((item) => (
          <a
            href={item.link}
            target="_blank"
            key={item.src}
            className="rounded-full bg-white grid place-items-center w-8 h-8"
          >
            <Image
              src={item.src}
              alt={item.alt}
              height={item.height}
              width={item.width}
              title={item.alt}
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs text-[#8F9FA3] text-center font-manrope">
        © 2025 — Copyright All Rights reserved
      </p>
    </section>
  );
}
