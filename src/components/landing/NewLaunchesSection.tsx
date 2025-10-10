import React from "react";

const launches = [
  {
    title: "ReviuAI",
    description:
      "ReviuAI delivers accurate unbiased and personalized reviews using AI and data driven insights helping users make smarter decisions",
    bgColor: "bg-white",
    textColor: "text-gray-800",
    hasKnowMore: true,
  },
  {
    title: "LeadPoppers",
    description:
      "With the integration of AI, our latest technology will help you generate genuine B2B and B2C leads. Our finder traces emails from 3-point data – first name, last name, and company name.",
    bgColor: "bg-gray-200",
    textColor: "text-gray-800",
    hasKnowMore: true,
  },
  {
    title: "Digital Business Cards",
    description:
      "Create reliable, simple, and effective business cards in just 5 minutes with our NxtGen Digital Business Card platform._",
    bgColor: "bg-red-400",
    textColor: "text-white",
    hasKnowMore: true,
  },
];

export default function NewLaunchesSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-md mx-auto">
        {launches.map((launch, index) => (
          <div key={index} className="mb-12 last:mb-0">
            {/* Background Container */}
            <div
              className={`${launch.bgColor} rounded-2xl p-6 ${
                index === 2 ? "max-w-sm mx-auto" : "w-full"
              }`}
            >
              {/* Content */}
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-4 ${launch.textColor}`}>
                  {launch.title}
                </h3>
                <p
                  className={`text-sm leading-5 mb-6 ${launch.textColor} opacity-80`}
                >
                  {launch.description}
                </p>
                {launch.hasKnowMore && (
                  <button
                    className={`${
                      launch.textColor === "text-white"
                        ? "bg-white text-gray-800"
                        : "bg-gray-800 text-white"
                    } px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity`}
                  >
                    Know More
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
