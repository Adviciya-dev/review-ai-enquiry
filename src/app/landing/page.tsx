import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsReviuAI from "@/components/landing/WhatIsReviuAI";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import OnlinePresenceSection from "@/components/landing/OnlinePresenceSection";
import HowToReviewSection from "@/components/landing/HowToReviewSection";
import AdviciyaSolutions from "@/components/landing/AdviciyaSolutions";
import WhoWeAre from "@/components/landing/WhoWeAre";
import NewLaunchesSection from "@/components/landing/NewLaunchesSection";
import ClientsSection from "@/components/landing/ClientsSection";
import FooterSection from "@/components/landing/FooterSection";
import Header from "@/components/landing/Header";

export default function LandingPage() {
  return (
    <main className="min-h-screen relative bg-black">
      <Header />
      <HeroSection />
      <WhatIsReviuAI />
      <FeaturesSection />
      <ReviewsSection />
      <OnlinePresenceSection />
      <HowToReviewSection />
      <AdviciyaSolutions />
      <WhoWeAre />
      <NewLaunchesSection />
      <ClientsSection />
      <FooterSection />
    </main>
  );
}
