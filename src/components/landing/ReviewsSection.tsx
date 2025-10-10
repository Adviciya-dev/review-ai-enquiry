import React from "react";

export default function ReviewsSection() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/reviews-bg.png')",
        }}
      />

      <div className="relative max-w-md mx-auto px-4">
        {/* Google Rating Section */}
        <div className="bg-white rounded-lg p-6 mb-4 shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-[#34A853] rounded-full"></div>
                <div className="w-3 h-3 bg-[#34A853] rounded-full"></div>
                <div className="w-3 h-3 bg-[#34A853] rounded-full"></div>
              </div>
              <p className="text-xs text-gray-500 mb-1">Google Rating</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-orange-500">4.9</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center"
                    >
                      <span className="text-white text-xs">★</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400">See all our reviews</p>
        </div>

        {/* Trustpilot Section */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src="/trustpilot-logo.svg"
                alt="Trustpilot"
                className="h-4"
              />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-[#00B57A] rounded-full"
                  ></div>
                ))}
              </div>
            </div>
            <span className="text-xs text-gray-400">Rated 4.9/5.0</span>
          </div>

          {/* Pie Chart Placeholder */}
          <div className="flex items-center justify-between">
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="#5D5DFF"
                  stroke="none"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E0E0E0"
                  strokeWidth="2"
                  strokeDasharray="8, 100"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-800">Rank</span>
              </div>
            </div>

            <div>
              <div className="text-lg font-bold text-gray-900">235.127</div>
              <div className="flex items-center gap-1 text-xs text-[#5D5DFF]">
                <span>+5.6%</span>
                <span className="text-gray-400">vs last week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
