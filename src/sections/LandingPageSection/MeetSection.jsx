import robot1 from "@/assets/images/robot1.png";

export default function meetSection() {
  return (
    <section className="w-full bg-[#d4f1f9] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-70">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Tag */}
            <p className="text-[#1a1a1a] sm:text-sm md:text-base lg:text-2xl font-semibold mb-3 sm:mb-4">
              Designed For Growth
            </p>

            {/* Heading */}
            <h2 className="text-[#1a1a1a] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4 sm:mb-5 md:mb-6">
              Meet Smart
              <br />
              Accounting AI
            </h2>

            {/* Underline */}
            <div className="flex justify-center">
              <div className="h-[1px] w-2/3 sm:w-3/4 md:w-4/5 lg:w-[600px] bg-[#1a1a1a] mb-4 sm:mb-5 md:mb-6"></div>
            </div>

            {/* Description */}
            <p className="text-[#1a1a1a] text-sm sm:text-base md:text-lg leading-relaxed max-w-full lg:max-w-md xl:max-w-lg">
              Smart Accounting AI is a forward-thinking accounting firm based in
              Denver, Colorado, where we combine artificial intelligence and
              cloud-based tools to simplify financial management.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src={robot1}
              alt="Smart Accounting AI Robot"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
