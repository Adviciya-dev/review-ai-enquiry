import React from "react";
import HeroSection from "@/components/congratulations/HeroSection";
import WhatIsReviuAI from "@/components/congratulations/WhatIsReviuAI";
import ReviewsSection from "@/components/congratulations/ReviewsSection";
import HowToReviewSection from "@/components/congratulations/HowToReviewSection";
import CtaBanner from "@/components/congratulations/CtaBanner";
import WhoWeAre from "@/components/congratulations/WhoWeAre";
import NewLaunchesSection from "@/components/congratulations/NewLaunchesSection";
import ClientsSection from "@/components/congratulations/ClientsSection";
import FooterSection from "@/components/congratulations/FooterSection";
import Header from "@/components/congratulations/Header";

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
