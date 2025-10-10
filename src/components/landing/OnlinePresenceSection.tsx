import React from "react";

export default function OnlinePresenceSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Why Your Online Presence Matters
        </h2>

        <div className="space-y-6">
          <p className="text-gray-600 text-sm leading-6">
            Your online presence is essential for making sure that your
            potential clients are reaching you.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-purple-300 rounded-full"></div>
            <p className="text-gray-500 text-sm leading-5">
              90% of customers check Google before visiting a shop or choosing a
              service.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
            <p className="text-gray-500 text-sm leading-5">
              Negative reviews can damage trust overnight.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-purple-700 rounded-full"></div>
            <p className="text-gray-500 text-sm leading-5">
              Without the right keywords, your business stays invisible.
            </p>
          </div>
        </div>

        {/* Decorative stars */}
        <div className="flex justify-center gap-4 mt-12">
          <div className="w-4 h-4 bg-yellow-400 rotate-45"></div>
          <div className="w-4 h-4 bg-yellow-400 rotate-45"></div>
          <div className="w-4 h-4 bg-yellow-400 rotate-45"></div>
        </div>
      </div>
    </section>
  );
}
