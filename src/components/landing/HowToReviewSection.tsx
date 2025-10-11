import Image from "next/image";
import React from "react";

const reviewMethods = [
  {
    title: "NFC Card",
    description: "Tap and review instantly no apps, no hassle.",
    icon: "/landing/nfc_card.svg",
    width: 41,
    height: 38,
  },
  {
    title: "NFC Stand",
    description:
      "Place it on your counter or tables so customers can review on the spot.",
    icon: "/landing/nfc_stand.svg",
    width: 41,
    height: 41,
  },
  {
    title: "E-Mail",
    description:
      "Reach your customers in their inbox with a simple review link.",
    icon: "/landing/email.svg",
    width: 41,
    height: 38,
  },
  {
    title: "WhatsApp Business API",
    description:
      "Send review requests directly to customers where they chat the most.",
    icon: "/landing/whatsapp.svg",
    width: 36,
    height: 36,
  },
  {
    title: "QR Code",
    description:
      "Scan anywhere — receipts, posters, or packaging — and share feedback in seconds.",
    icon: "/landing/qr_code.svg",
    width: 36,
    height: 51,
  },
];

export default function HowToReviewSection() {
  return (
    <section className="my-16 px-8">
      <h2 className="text-xl font-medium mb-6 text-center">
        How to Review{"\n"}Using ReviuAI
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:max-w-[1450px] lg:flex flex-wrap lg:justify-center mx-auto">
        {reviewMethods.map((method) => (
          <div
            key={method.title}
            className="text-center lg:w-[465px] lg:min-h-full"
            style={{
              padding: "1px",
              borderRadius: "12px",
              background: "linear-gradient(180deg, #E60909 0%, #666666 100%)",
            }}
          >
            <div
              className="p-5 flex gap-5 items-start bg-black lg:h-full"
              style={{ borderRadius: "10px" }}
            >
              <Image
                src={method.icon}
                alt={""}
                role="presentation"
                width={method.width}
                height={method.height}
                className="mt-1"
              />
              <div className="flex flex-col gap-1.5 text-start">
                <h3 className="text-[20px] font-medium">{method.title}</h3>
                <p className="text-xs font-medium">{method.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
