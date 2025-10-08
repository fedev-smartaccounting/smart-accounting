import React from "react";
import ReadyToTakeTheNextStep from "@/assets/images/ReadyToTakeTheNextStep.png";
import Cloud from "@/assets/images/Cloud.png";
import { ChevronUp } from "lucide-react";

function RobotSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Side - Robot Image (Natural Size) */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <img
              src={ReadyToTakeTheNextStep}
              alt="Friendly robot with clipboard"
              className="max-w-full h-auto w-auto"
              style={{ maxHeight: "500px" }}
            />
          </div>

          {/* Right Side - Cloud Logo and Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full lg:w-auto">
            {/* Cloud Logo */}
            <div className="flex justify-center">
              <img
                src={Cloud}
                alt="Cloud analytics logo"
                className="max-w-full h-auto w-auto"
                style={{ maxHeight: "200px" }}
              />
            </div>

            {/* Back to Top Button */}
            <div className="flex cursor-pointer flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-5 lg:gap-7 group">
              <p className="text-sm sm:text-base cursor-pointer md:text-lg text-neutral-400 group-hover:text-[#36cdfe] transition-colors duration-300 ease-in-out whitespace-nowrap">
                Back to top
              </p>
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 rounded-full shadow-lg hover:shadow-xl bg-white border-2 border-gray-200 group-hover:border-[#36cdfe] group-hover:text-[#36cdfe] transition-all duration-300 ease-in-out active:scale-95"
                aria-label="Scroll to top"
              >
                <ChevronUp className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RobotSection;
