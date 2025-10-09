"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Italianno } from "next/font/google";

// Load Italianno font for heading
const italianno = Italianno({ subsets: ['latin'], weight: '400' });

export default function CongratulationsPage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className={`${italianno.className} text-6xl mb-6`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        Congratulations!
      </motion.h1>

      <motion.p
        className="text-[16px] font-inter italic font-medium leading-[100%] tracking-[0%] text-center mb-6 px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        Thank you for choosing ReviuAI. <br />
        We will notify via WhatsApp & Email once the account is ready
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
      >
        <Link
          href="/"
          className="bg-[#F43C3C] text-black px-6 py-3 rounded-full hover:bg-gray-300 transition font-medium"
        >
          Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
}
