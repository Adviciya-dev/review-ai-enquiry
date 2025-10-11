"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/landing/vilvex.png",
    alt: "Vilvex Cables",
    width: 186,
    height: 62,
  },
  {
    src: "/landing/gos.jpg",
    alt: "GOS Services",
    width: 162,
    height: 60,
  },
  {
    src: "/landing/sanitube.jpg",
    alt: "Sanitube",
    width: 183,
    height: 53,
  },
  {
    src: "/landing/pimins.png",
    alt: "Pimins.Ai",
    width: 159,
    height: 60,
  },
  {
    src: "/landing/veda.jpg",
    alt: "Veda Guru",
    width: 174,
    height: 77,
  },
  {
    src: "/landing/arabia.png",
    alt: "Pet Arabia",
    width: 174,
    height: 94,
  },
];

export default function ClientsSection() {
  return (
    <section className="my-16">
      <h2 className="text-2xl font-medium mb-8 text-center italic">
        Our Major Clients
      </h2>
      <div className="relative flex overflow-hidden">
        <motion.div
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none gap-1.5 pr-1.5"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {logos.map((logo) => (
                <div
                  key={logo.alt}
                  className="bg-white grid place-items-center w-[188px] h-[84px] flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="flex-none"
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
