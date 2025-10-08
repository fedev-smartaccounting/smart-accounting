import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, ChevronDown } from "lucide-react";
import logoimage from "../assets/images/logoimage.png";

// ============ CONSTANTS ============
const NAV_LINKS = [
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    subLinks: [
      { name: "Accounting and Business Support", href: "#" },
      { name: "Business Startup Services", href: "#" },
      {
        name: "Continued ITIN and individual and Business Tax Return",
        href: "#",
      },
      { name: "Pricing", href: "#" },
      { name: "Payment", href: "#" },
    ],
  },
  { name: "Sign-in", href: "#" },
];

const LANGUAGES = [
  { code: "EN", name: "English" },
  { code: "ES", name: "Español" },
];

// ============ COMPONENTS ============

// NavLink with animated underline
const NavLink = ({ href, children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block text-white hover:text-gray-300 text-base lg:text-lg font-medium transition-colors duration-200"
    >
      {children}
      <span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#28a5d3] transition-transform duration-300 ease-out origin-center"
        style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
      />
    </a>
  );
};

// Language selector dropdown
const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const handleSelect = (code) => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-[#00d4ff] transition-colors"
        aria-label="Select language"
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
          {/* Backdrop to close dropdown */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown menu */}
          <div className="absolute top-full right-0 mt-5 bg-white rounded-tr-2xl rounded-bl-xl rounded-br-2xl shadow-lg overflow-hidden z-20 min-w-[100px]">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
                  selectedLang === lang.code
                    ? "bg-[#36cdfe] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Contact button (desktop & mobile variants)
const ContactButton = ({ isMobile = false, onClick }) => (
  <a
    href="#"
    onClick={onClick}
    className={`px-4 py-2 border-2 border-white rounded-full text-white font-medium hover:bg-white transition duration-200 ${
      isMobile
        ? "block w-full text-center text-base hover:text-[#2ab3e6]"
        : "hidden sm:flex px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg hover:text-black active:bg-[#36cdfe] active:border-[#36cdfe] active:text-white"
    }`}
  >
    Contact
  </a>
);

// Hamburger menu toggle button
const MenuToggleButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="md:hidden bg-transparent border-2 border-white rounded-full p-2 hover:bg-[#2ab3e6] hover:border-[#2ab3e6] transition duration-300"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <svg
      className="h-6 w-6 text-white"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {isOpen ? (
        <path d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
);

// Desktop navigation item with dropdown support
const DesktopNavItem = ({ link }) => (
  <li className="relative group">
    <NavLink href={link.href}>{link.name}</NavLink>

    {link.subLinks && (
      <>
        {/* Invisible bridge prevents dropdown from closing when moving mouse from link to menu */}
        <div className="absolute left-0 top-full h-5 w-full" />

        {/* Dropdown submenu */}
        <ul className="absolute left-0 top-full mt-5 border border-[#36cdfe] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-out z-20">
          {link.subLinks.map((sub) => (
            <li key={sub.name}>
              <a
                href={sub.href}
                className="block px-4 py-2 text-gray-700 hover:text-[#36cdfe] hover:bg-gray-100 rounded-md whitespace-nowrap transition-colors"
              >
                {sub.name}
              </a>
            </li>
          ))}
        </ul>
      </>
    )}
  </li>
);

// Mobile menu sidebar
const MobileMenu = ({ isOpen, onClose }) => (
  <>
    {/* Sidebar */}
    <div
      className={`fixed top-0 right-0 h-screen max-sm:w-[220px] w-[300px] bg-[#28a5d3] transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6">
        {/* Close button */}
        <button
          onClick={onClose}
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

        {/* Mobile navigation links */}
        <ul className="space-y-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-white hover:text-gray-200 text-lg font-medium transition duration-200"
                onClick={onClose}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <ContactButton isMobile onClick={onClose} />
          </li>
        </ul>
      </div>
    </div>

    {/* Backdrop overlay */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />
    )}
  </>
);

// ============ MAIN COMPONENT ============
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
            alt="Company Logo"
            className="h-12 sm:h-14 md:h-16 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link) => (
            <DesktopNavItem key={link.name} link={link} />
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <LanguageDropdown />
          <ContactButton />
          <MenuToggleButton
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </nav>
  );
}

export default Navbar;
