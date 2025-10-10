import React from "react";

const services = [
  {
    title: "Quality Assurance\n& Testing",
    description:
      "Rigorous testing ensures flawless, secure, and high-performing digital experiences.",
    color: "text-red-600",
  },
  {
    title: "Marketing &\nGrowth Strategies",
    description:
      "SEO, social media, performance campaigns, and content strategies to boost visibility and leads.",
    color: "text-red-600",
  },
  {
    title: "E-commerce &\nMarketplace Solutions",
    description:
      "High-performing online stores, Amazon Ads, and seller account management to maximise sales.",
    color: "text-red-600",
  },
  {
    title: "Technology &\nInnovation",
    description:
      "AI, ML, Cloud, ERP, Odoo, and IoT solutions to streamline operations and drive growth.",
    color: "text-red-600",
  },
  {
    title: "Digital Design &\nExperience",
    description:
      "Future-ready UI/UX, websites, and mobile experiences that engage and convert.",
    color: "text-red-600",
  },
  {
    title: "Brand & Creative\nSolutions",
    description:
      "Strategic consulting, impactful logos, graphics, and 2D/3D visuals to build strong brand identities.",
    color: "text-red-600",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-md mx-auto">
        {/* Who We Are Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Who we are
          </h2>

          <p className="text-gray-600 text-sm leading-8 mb-24 text-justify px-4">
            Adviciya is a creative solutions company specialising in brand
            consulting, design innovation, and technology & AI-driven strategies
            — helping you elevate your brand and achieve sustainable digital
            business growth. We help businesses find the right solutions,
            considering their business goals, target audience, and industry
            trends to make an impact in the digital sphere and maximise ROI.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Innovative Solutions in
            <br />
            Branding, Design, Technology & AI Transformation
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <h3
                  className={`text-base font-bold mb-2 ${service.color} whitespace-pre-line`}
                >
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600 leading-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
