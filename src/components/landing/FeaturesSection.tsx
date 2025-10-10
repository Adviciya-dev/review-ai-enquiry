import React from "react";

const features = [
  "Smart Review Requests",
  "AI-Powered Responses",
  "Reputation Protection",
  "Image Sharing for Reviews",
  "Centralised Dashboard",
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm text-center min-h-[80px] flex items-center justify-center"
            >
              <p className="text-gray-800 text-sm font-medium leading-tight">
                {feature.includes("\n")
                  ? feature.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br />}
                      </span>
                    ))
                  : feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
