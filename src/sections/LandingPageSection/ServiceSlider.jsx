import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bookkeeping from "@/assets/images/homepageImages/slider/bookkeeping.jpg";
import businessimage from "@/assets/images/homepageImages/slider/business.png";
import salestax from "@/assets/images/homepageImages/slider/salestax.png";
import IndividualTax from "@/assets/images/homepageImages/slider/individualTaxIMG.png";
import BusinessLicense from "@/assets/images/homepageImages/slider/BusinessLicense.png";
import Tin from "@/assets/images/homepageImages/slider/ContinuedTIN.png";
import PayrollServices from "@/assets/images/homepageImages/slider/PayrollServices.png";

export default function ServicesCarouselSection() {
  const scrollContainerRef = useRef(null);
  const services = [
    {
      //title: "Bookkeeping",
      description:
        "Organized financial records, reconciliations, and expense tracking for clarity.",
      image: bookkeeping,
    },
    {
      //title: "New Business Setup Services",
      description:
        "Guidance through entity formation, registration, and startup compliance essentials.",
      image: businessimage,
    },
    {
      //title: "Sales Tax Services",
      description:
        "Timely preparation and submission of monthly or quarterly sales taxes.",
      image: salestax,
    },
    {
      //title: "Individual and Business Tax",
      description:
        "Accurate filing and compliance for personal and corporate tax obligations.",
      image: IndividualTax,
    },
    {
      //title: "Business Licensing",
      description:
        "We help to secure proper permits and licenses to legally operate your business.",
      image: BusinessLicense,
    },
    {
      // title: "Continued ITIN",
      description:
        "Support renewing or maintaining your Individual Taxpayer Identification Number efficiently.",
      image: Tin,
    },
    {
      // title: "Payroll Services",
      description:
        "Streamlined employee payments, tax withholdings, and payroll reporting solutions.",
      image: PayrollServices,
    },
  ];
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = 340;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="w-full bg-[#f5f5f5] py-12 sm:py-16 md:py-20 rounded-2xl lg:py-24">
      <div className="relative px-6 sm:px-8 md:px-12 lg:px-16 xl:px-50">
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 sm:left-4 md:left-6 lg:left-8 xl:left-30 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 sm:right-4 md:right-6 lg:right-8 xl:right-30 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-xl hover:bg-gray-50 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[280px] cursor-pointer bg-white rounded-2xl overflow-hidden snap-center flex flex-col border border-transparent hover:border-sky-400 hover:shadow-[0_0_20px_3px_rgba(56,189,248,0.5)] transition-all duration-300"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-50 sm:h-44 md:h-60 overflow-hidden rounded-2xl bg-gray-200">
                <img
                  src={service.image}
                  // alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white text-lg sm:text-xl font-semibold text-center">
                    {service.title}
                  </h3>
                </div>
              </div>
              {/* Content */}
              <div className="p-5 sm:p-6 bg-white flex-grow">
                <p className="text-[#161616] h-20 text-md sm:text-md leading-relaxed text-center mb-5 min-h-[60px]">
                  {service.description}
                </p>
                <button className="w-full py-2.5 px-5 border-2 border-[#1a1a1a] rounded-full text-[#1a1a1a] cursor-pointer text-sm md:text-lg font-medium transition-colors duration-300 hover:border-sky-400 hover:text-sky-400">
                  Learn more
                </button>
              </div>
              {/* Bottom Cyan Accent */}
              <div className="h-2 bg-[#36cdfe]"></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
