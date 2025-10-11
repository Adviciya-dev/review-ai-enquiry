import React from "react";

const services = [
  {
    title: "Quality Assurance\n& Testing",
    description:
      "Rigorous testing ensures flawless, secure, and high-performing digital experiences.",
  },
  {
    title: "Marketing &\nGrowth Strategies",
    description:
      "SEO, social media, performance campaigns, and content strategies to boost visibility and leads.",
  },
  {
    title: "E-commerce &\nMarketplace Solutions",
    description:
      "High-performing online stores, Amazon Ads, and seller account management to maximise sales.",
  },
  {
    title: "Technology &\nInnovation",
    description:
      "AI, ML, Cloud, ERP, Odoo, and IoT solutions to streamline operations and drive growth.",
  },
  {
    title: "Digital Design &\nExperience",
    description:
      "Future-ready UI/UX, websites, and mobile experiences that engage and convert.",
  },
  {
    title: "Brand & Creative\nSolutions",
    description:
      "Strategic consulting, impactful logos, graphics, and 2D/3D visuals to build strong brand identities.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="my-16 px-8">
      {/* Who We Are Section */}
      <div className="mb-10 lg:max-w-4xl lg:mx-auto">
        <h2 className="text-2xl font-medium mb-5 text-center italic">
          Who we are
        </h2>

        <p className="text-[20px] leading-[39px] font-extralight text-justify lg:text-center">
          Adviciya is a creative solutions company specialising in brand
          consulting, design innovation, and technology & AI-driven strategies —
          helping you elevate your brand and achieve sustainable digital
          business growth. We help businesses find the right solutions,
          considering their business goals, target audience, and industry trends
          to make an impact in the digital sphere and maximise ROI.
        </p>
      </div>

      {/* Services Section */}
      <div>
        <h2 className="text-2xl font-medium mb-5 text-center">
          Innovative Solutions in <br className="hidden lg:block" /> Branding,
          Design, Technology & AI Transformation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:max-w-4xl lg:mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] py-3 px-6 flex flex-col gap-2.5 rounded-2xl"
            >
              <h3 className="text-base font-bold whitespace-pre-line text-[#DA2020]">
                {service.title}
              </h3>
              <p className="text-sm font-medium italic">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
