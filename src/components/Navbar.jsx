import React, { useState } from "react";
import logoimage from "../assets/images/logoimage.png";
import { Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const handleLanguageSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-[#00d4ff] transition-colors"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{selectedLang}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-5 bg-white rounded-tr-2xl rounded-bl-xl rounded-br-2xl shadow-lg overflow-hidden z-20 min-w-[100px]">
            <button
              onClick={() => handleLanguageSelect("EN")}
              className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
                selectedLang === "EN"
                  ? "bg-[#36cdfe] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageSelect("ES")}
              className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
                selectedLang === "ES"
                  ? "bg-[#36cdfe] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Español
            </button>
          </div>
        </>
      )}
    </div>
  );
};

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "#" },
    { name: "Sign-in", href: "#" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#2A3688]">
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-40 py-4 sm:py-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logoimage}
            alt="logo"
            className="h-12 sm:h-14 md:h-16 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-white hover:text-gray-300 text-base lg:text-lg font-medium transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Language Dropdown */}
          <LanguageDropdown />

          {/* Contact Button - Hidden on mobile, visible on sm and up */}
          <button className="hidden sm:flex px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 border-2 border-white rounded-full text-white text-sm sm:text-base md:text-lg font-medium hover:bg-white hover:text-black active:bg-[#36cdfe] active:border-[#36cdfe] active:text-white transition duration-200">
            Contact
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-transparent border-2 rounded-full p-2 hover:bg-[#2ab3e6] hover:border-[#2ab3e6] transition duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-white transition duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen max-sm:w-[220px] w-[300px] bg-[#28a5d3] transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="mb-8 text-white hover:text-gray-200"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="space-y-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block text-white hover:text-gray-200 text-lg font-medium transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#"
                className="block w-full text-center px-4 py-2 border-2 border-white rounded-full text-white text-base font-medium hover:bg-white hover:text-[#2ab3e6] transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
