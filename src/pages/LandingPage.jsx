import React from "react";
import HeroSections from "../sections/LandingPageSection/HeroSections";
import Navbar from "../components/Navbar";
import WHoareweSection from "../sections/LandingPageSection/WhoareweSection";
import MeetSection from "../sections/LandingPageSection/MeetSection";
import FeaturesSection from "../sections/LandingPageSection/FeatureSection";
import CommunitySection from "@/sections/LandingPageSection/CommunitySection";
import BilingualServicesSection from "../sections/LandingPageSection/ServicesSection";
import ServiceSlider from "../sections/LandingPageSection/ServiceSlider";
import CloudAccesibilitySection from "../sections/LandingPageSection/CloudAccesibilitySection";
import TestimonialsSection from "@/sections/LandingPageSection/TestimonialsSection";
import TestimonialsSlider from "../sections/LandingPageSection/TestimonialsSlider";
import QuestionSection from "../sections/LandingPageSection/QuestionSection";
import RobotSection from "../sections/LandingPageSection/RobotSection";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSections />
      <WHoareweSection />
      <MeetSection />
      <FeaturesSection />
      <CommunitySection />
      <BilingualServicesSection />
      <ServiceSlider />
      <CloudAccesibilitySection />
      <TestimonialsSection />
      <TestimonialsSlider />
      <QuestionSection />
      <RobotSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
