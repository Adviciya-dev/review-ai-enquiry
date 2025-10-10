import React from "react";

export default function FooterSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* This would be a background pattern */}
      </div>

      <div className="relative max-w-md mx-auto">
        {/* Main footer content */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-8">
            Let's Build the
            <br />
            Future Together
          </h2>

          {/* Phone number */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-6">
              <img
                src="/phone-icon.svg"
                alt="Phone"
                className="w-full h-full"
              />
            </div>
            <span className="text-xl font-semibold">+91 77366-77715</span>
          </div>

          {/* Websites */}
          <div className="text-sm text-gray-300 space-y-1">
            <p>www.adviciya.com | www.reviuai.com</p>
          </div>
        </div>

        {/* Contact icons */}
        <div className="flex justify-center gap-6 mb-16">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-2xl">📧</span>
          </div>
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-2xl">📞</span>
          </div>
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-2xl">💬</span>
          </div>
        </div>

        {/* Footer logos */}
        <div className="flex justify-center gap-8 mb-8">
          {/* Footer logos would go here */}
          <span className="text-xs text-gray-400">Footer logos</span>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-400">
            © 2025 — Copyright All Rights reserved
          </p>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-700"></div>
      </div>
    </section>
  );
}
