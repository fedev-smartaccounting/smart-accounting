import React, { useState } from "react";
import logoimage from "../assets/images/logoimage.png";
import Usericon from "../assets/icons/User.svg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Sign-in", href: "#" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-40 py-4 sm:py-6 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logoimage}
          alt="logo"
          className="h-12 sm:h-14 md:h-16 w-auto"
        />

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
          {/* User Icon Button */}
          <button className="border-2 border-white rounded-full p-2 sm:p-2.5 md:p-3 hover:bg-white hover:border-white group transition duration-300">
            <img
              src={Usericon}
              alt="User"
              className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition duration-300"
            />
          </button>

          {/* Contact Button - Hidden on small mobile */}
          <button className="hidden md:flex xs:block px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 border-2 border-white rounded-full text-white text-sm sm:text-base md:text-lg font-medium hover:bg-white hover:text-black active:bg-[#36cdfe] active:border-[#36cdfe] active:text-white transition duration-200">
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
