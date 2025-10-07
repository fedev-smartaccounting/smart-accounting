import HeroSectionBG from "@/assets/images/HeroSectionBG.png";
import HeroRobot from "@/assets/images/HeroImage.png";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroSectionBG}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-95"
      />

      {/* Foreground Robot Image */}
      <img
        src={HeroRobot}
        alt="Hero Robot"
        className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-100"
      />

      {/* Content Container */}
      <div className="relative h-full flex items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-40">
        <div className="w-full max-w-4xl">
          {/* Heading */}
          <h1 className="text-white font-questrial">
            <span className="block text-3xl sm:text-xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              Empowering Communities
            </span>
            <span className="block text-3xl sm:text-xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              with smarter financial
            </span>
            <span className="block text-3xl sm:text-xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              solutions.
            </span>
          </h1>

          {/* Divider */}
          <div className="h-[2px] w-48 sm:w-64 md:w-80 lg:w-[500px] bg-gray-300 mt-6 sm:mt-8 md:mt-10 lg:mt-12"></div>

          {/* Description */}
          <p className="font-rubik text-white text-sm sm:text-base md:text-lg lg:text-xl mt-6 sm:mt-8 md:mt-10 max-w-xl leading-relaxed">
            Experience accounting powered by community insight, cloud agility,
            and AI precision.
          </p>

          {/* CTA Button */}
          <button className="mt-8 sm:mt-10 md:mt-12 px-8 sm:px-10 py-3 sm:py-4 border-2 border-white text-white rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-white hover:text-black active:bg-[#36cdfe] active:border-[#36cdfe] active:text-white transition duration-200 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
