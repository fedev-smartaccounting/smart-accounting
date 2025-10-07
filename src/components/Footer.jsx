import React from "react";
import FooterLogo from "@/assets/images/footerlogo.png";
import { SECTIONS, CONTACTS, SOCIALS } from "../contents/FooterContent";

const HIGHLIGHT = "#98F7CD";

export default function Footer() {
  const taglines = ["Empowered by AI.", "Guided by People"];

  return (
    <footer className="bg-[#1F2226] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <img src={FooterLogo} alt="FooterLogo" />
            </div>

            {/* Taglines */}
            {/* Taglines */}
            <div className="mb-10">
              {" "}
              {/* Add bottom margin here */}
              {taglines.map((text, idx) => (
                <h2
                  key={text}
                  className={`text-2xl lg:text-3xl text-[${HIGHLIGHT}]`}
                >
                  {text}
                </h2>
              ))}
            </div>

            {/* Contact info */}
            {CONTACTS.map(({ icon: Icon, text, href }, idx) => (
              <a
                key={idx}
                href={href || "#"}
                className={`flex items-center gap-3 hover:text-[${HIGHLIGHT}] transition-colors`}
              >
                <Icon
                  className={`w-5 h-5 text-[${HIGHLIGHT}] mt-${
                    idx === 2 ? "0.5" : "0"
                  }`}
                />
                <span className="text-[15px]">{text}</span>
              </a>
            ))}
          </div>

          {SECTIONS.map(({ title, links }) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 cursor-pointer text-[#98f7cd]">
                {title}
              </h3>
              <ul className="space-y-3 flex flex-col gap-3">
                {links.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`text-md text-gray-300 hover:text-[${HIGHLIGHT}] transition-colors`}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social icons */}
          <div className="lg:col-span-2 flex lg:justify-end gap-4 lg:gap-3 items-start">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`text-[${HIGHLIGHT}] hover:text-white transition-colors`}
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8 lg:my-10"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-white">
          © 2025 Smart Accounting AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
