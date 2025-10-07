const testimonials = [
  {
    quote:
      "As a bilingual entrepreneur, I finally found a team that understands both my language and my business needs.",
    name: "Carlos Silva",
    title: "CEO, Business Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Before working with this team, I felt overwhelmed by taxes and paperwork. Now I feel confident and supported.",
    name: "María Gonzales",
    title: "Small Business Owner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    quote:
      "They helped us set up smart systems that saved us thousands in our first year.",
    name: "Luis Romero",
    title: "Tech Startup Founder",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Outstanding service from start to finish. Personalized solutions that exceeded expectations.",
    name: "Sofia Martinez",
    title: "Freelance Consultant",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Their expertise in financial strategy helped my company double its profits in just one year.",
    name: "James Chen",
    title: "Import/Export Business Owner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
  {
    quote:
      "The team's professionalism and communication made the entire process stress-free.",
    name: "Ana Rodriguez",
    title: "Restaurant Owner",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop",
  },
  {
    quote:
      "I can’t recommend them enough — their insights into digital transformation are top-notch.",
    name: "Michael Johnson",
    title: "Digital Marketing Agency Owner",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop",
  },
  {
    quote:
      "They go above and beyond — I finally feel like I have a partner that truly cares about my success.",
    name: "Isabella Cruz",
    title: "E-commerce Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop",
  },
];

export default testimonials;

// footerData.js
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

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

export const CONTACTS = [
  {
    icon: Mail,
    text: "hello@smartaccounting.ai",
    href: "mailto:hello@smartaccounting.ai",
  },
  { icon: Phone, text: "+1 (719) 271-0388", href: "tel:+17192710388" },
  { icon: MapPin, text: "3775 E La Salle Street, Colorado Springs, CO 80909" },
];

export const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];
