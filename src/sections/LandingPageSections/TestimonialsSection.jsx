import cloud from "@/assets/icons/cloud.svg";
import community from "@/assets/icons/community.svg";
import speak from "@/assets/icons/speak.svg";
import circleline from "@/assets/images/circleline.png";
import circleline2 from "@/assets/images/circleline2.png";
import TestimonalImg1 from "@/assets/images/homepageImages/TestimonialsSection/TestimonialsIMG.png";
import TestimonalImg2 from "@/assets/images/homepageImages/TestimonialsSection/TestimonialsIMG2.png";

export default function AccountingHero() {
  return (
    <div className="relative py-10 sm:py-16 md:py-20 lg:py-24 pb-20 sm:pb-28 md:pb-36 lg:pb-40 bg-gray-50 overflow-hidden">
      {/* Network Background - Left Side */}
      <img
        src={TestimonalImg1}
        alt=""
        className="absolute left-0 sm:left-1 md:left-2 top-0 h-[60%] sm:h-[70%] md:h-[80%] lg:h-full w-auto max-md:hidden object-contain opacity-80 md:opacity-100"
        style={{ zIndex: 0 }}
      />

      {/* Network Background - Right Side */}
      <img
        src={TestimonalImg2}
        alt=""
        className="absolute right-0 sm:right-1 md:right-2 top-10 sm:top-12 md:top-15 lg:top-20 h-[50%] sm:h-[60%] md:h-[70%] lg:h-auto w-auto max-sm:hidden object-contain opacity-80 md:opacity-100"
        style={{ zIndex: 0 }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Hero Content */}
        <div className="text-center mt-20 sm:mt-28 md:mt-36 lg:mt-40 max-w-4xl mx-auto">
          <p className="text-black text-base sm:text-lg md:text-xl lg:text-3xl font-bold mb-3 sm:mb-4 tracking-wide">
            Our Impact
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-questrial text-black mb-4 sm:mb-5 md:mb-6 tracking-wide leading-tight px-4 sm:px-0">
            Stories From Our
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Community
          </h1>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg font-[500] max-w-sm sm:max-w-md md:max-w-xl mx-auto leading-relaxed px-4 sm:px-6 md:px-0">
            Smart Accounting was built with a vision: to transform financial
            services into a tool for community empowerment.
          </p>
        </div>
      </div>

      
    </div>
  );
}
