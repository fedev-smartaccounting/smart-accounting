// FooterContent.jsx
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

// Footer sections with links
export const SECTIONS = [
  {
    title: "About",
    links: [
      { text: "Our History", href: "/history" },
      { text: "Our Team", href: "/team" },
      { text: "Our Values", href: "/values" },
    ],
  },
  {
    title: "Cloud",
    links: [
      { text: "Login", href: "/login" },
      { text: "Create Account", href: "/signup" },
      { text: "Subscribe", href: "/subscribe" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Support", href: "/support" },
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
    ],
  },
];

// Contact info
export const CONTACTS = [
  {
    icon: Mail,
    text: "hello@smartaccounting.ai",
    href: "mailto:hello@smartaccounting.ai",
  },
  { icon: Phone, text: "+1 (719) 271-0388", href: "tel:+17192710388" },
  { icon: MapPin, text: "3775 E La Salle Street, Colorado Springs, CO 80909" },
];

// Social media icons
export const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];
