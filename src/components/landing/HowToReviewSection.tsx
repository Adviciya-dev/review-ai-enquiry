import React from "react";

const reviewMethods = [
  {
    title: "NFC Stand",
    description:
      "Place it on your counter or tables so customers can review on the spot.",
    icon: "/nfc-icon.svg",
  },
  {
    title: "E-Mail",
    description:
      "Reach your customers in their inbox with a simple review link.",
    icon: "/email-icon.svg",
  },
  {
    title: "QR Code",
    description:
      "Scan anywhere — receipts, posters, or packaging — and share feedback in seconds.",
    icon: "/qr-icon.svg",
  },
  {
    title: "WhatsApp Business API",
    description:
      "Send review requests directly to customers where they chat the most.",
    icon: "/whatsapp-icon.svg",
  },
];

export default function HowToReviewSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
          How to Review{"\n"}Using ReviuAI
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {reviewMethods.map((method, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 rounded-2xl w-full h-32 mb-4 flex items-center justify-center">
                <div className="text-gray-500 text-sm">Method illustration</div>
              </div>
              <h3 className="text-base font-medium text-gray-800 mb-2">
                {method.title}
              </h3>
              <p className="text-xs text-gray-600 leading-4">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative NFC card at bottom */}
        <div className="mt-12 flex justify-center">
          <div className="bg-gradient-to-br from-red-200 to-red-600 rounded-lg px-6 py-3 max-w-xs">
            <div className="text-white text-center">
              <img
                src="/nfc-icon.svg"
                alt="NFC"
                className="w-8 h-10 mx-auto mb-2"
              />
              <h4 className="text-sm font-medium mb-2">NFC Card</h4>
              <p className="text-xs">
                Tap and review instantly no apps, no hassle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
