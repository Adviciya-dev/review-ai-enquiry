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

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Header/Contact Section - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Quick Contact
          </span>
          <div className="flex items-center gap-2">
            <img src="/contact-icon.svg" alt="Contact" className="w-6 h-5" />
            <img src="/chat-icon.svg" alt="Chat" className="w-6 h-5" />
          </div>
        </div>
      </div>

      {/* Add padding top to account for fixed header */}
      <div className="pt-14">
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
      </div>
    </main>
  );
}
