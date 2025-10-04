import React from "react";
import HeroSections from "../sections/LandingPageSection/HeroSections";
import Navbar from "../components/Navbar";
import WHoareweSection from "../sections/LandingPageSection/WhoareweSection";
import MeetSection from "../sections/LandingPageSection/MeetSection";
import FeaturesSection from "../sections/LandingPageSection/FeatureSection";
import CommunitySection from "@/sections/LandingPageSection/CommunitySection";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSections />
      <WHoareweSection />
      <MeetSection />
      <FeaturesSection />
      <CommunitySection />
    </div>
  );
}

export default LandingPage;
