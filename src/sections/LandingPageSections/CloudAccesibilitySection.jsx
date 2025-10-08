import React from "react";
import cloudAccesibilityIMG from "@/assets/images/homepageImages/cloudAccesibility/cloudAccesibility.png";
import Group from "@/assets/images/homepageImages/cloudAccesibility/Group.png";

export default function ResponsiveImageSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-52">
      <div className="relative flex justify-center overflow-hidden rounded-lg h-[400px] sm:h-[450px] md:h-[500px]">
        <img
          src={cloudAccesibilityIMG}
          alt="Cloud Accessibility"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto min-w-full object-cover"
        />
        <div className="absolute inset-0 flex max-md:flex-col items-center md:items-start justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-16 md:pt-20">
          {/* Text Section */}
          <div className="max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg text-left">
            <h2 className="text-white text-center md:text-left font-rubik font-bold text-3xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 md:mb-4">
              Cloud Accessibility
            </h2>
            <p className="text-white text-center md:text-left font-questrial text-lg lg:text-lg leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-10">
              Secure, encrypted access to your financials from any device — so
              you're always in control, wherever you are.
            </p>
            {/* Button */}
            <div className="flex justify-center md:justify-start mt-6 md:mt-10">
              <button className="sm:px-15 px-15 md:px-15 py-4 sm:py-2.5 md:py-3 border-2 border-white rounded-full text-white text-md sm:text-sm md:text-base font-medium hover:bg-white hover:text-black active:bg-[#36cdfe] active:border-[#36cdfe] active:text-white transition duration-200">
                Join Now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={Group}
              alt="Group"
              className="w-25 md:w-32 lg:w-40 xl:w-40 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
