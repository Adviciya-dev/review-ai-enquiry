import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsReviuAI from "@/components/landing/WhatIsReviuAI";
import ReviewsSection from "@/components/landing/ReviewsSection";
import HowToReviewSection from "@/components/landing/HowToReviewSection";
import CtaBanner from "@/components/landing/CtaBanner";
import WhoWeAre from "@/components/landing/WhoWeAre";
import NewLaunchesSection from "@/components/landing/NewLaunchesSection";
import ClientsSection from "@/components/landing/ClientsSection";
import FooterSection from "@/components/landing/FooterSection";
import Header from "@/components/landing/Header";

export default function LandingPage() {
  return (
    <main className="min-h-screen relative bg-black text-white">
      <Header />
      <HeroSection />
      <WhatIsReviuAI />
      <ReviewsSection />
      <HowToReviewSection />
      <CtaBanner />
      <WhoWeAre />
      <NewLaunchesSection />
      <ClientsSection />
      <FooterSection />
    </main>
  );
}
