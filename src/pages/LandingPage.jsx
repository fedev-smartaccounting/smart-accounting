import React from "react";
import HeroSections from "../sections/LandingPageSections/HeroSections";
import WHoareweSection from "../sections/LandingPageSections/WhoareweSection";
import MeetSection from "../sections/LandingPageSections/MeetSection";
import FeaturesSection from "../sections/LandingPageSections/FeatureSection";
import CommunitySection from "@/sections/LandingPageSections/CommunitySection";
import BilingualServicesSection from "../sections/LandingPageSections/ServicesSection";
import ServiceSlider from "../sections/LandingPageSections/ServiceSlider";
import CloudAccesibilitySection from "../sections/LandingPageSections/CloudAccesibilitySection";
import TestimonialsSection from "@/sections/LandingPageSections/TestimonialsSection";
import TestimonialsSlider from "../sections/LandingPageSections/TestimonialsSlider";
import QuestionSection from "../sections/LandingPageSections/QuestionSection";
import RobotSection from "../sections/LandingPageSections/RobotSection";

function LandingPage() {
  return (
    <div>
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
    </div>
  );
}

export default LandingPage;
