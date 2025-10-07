import bilingualIcon from "@/assets/icons/bilingual.svg";
import faceIcon from "@/assets/icons/face.svg";

export default function BilingualServicesSection() {
  const services = [
    {
      icon: bilingualIcon,
      title: "Bilingual services that truly speak your language",
      description:
        "We take the time to understand your business, your background, and your goals. With respect and empathy, we offer guidance that fits—not forces.",
    },
    {
      icon: faceIcon,
      title: "Built for Small Businesses. Inspired by Heritage.",
      description:
        "Our team offers full support in English and Spanish, ensuring clarity and comfort. Because your success deserves fluency—and understanding",
    },
  ];

  return (
    <>
      {/* Top Section - White Background */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <img
                    src={service.icon}
                    alt=""
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[#1a1a1a] text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <div className="border-l-4 border-[#36cdfe] pl-4 sm:pl-5 md:pl-6">
                    <p className="text-[#1a1a1a] text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section - Light Blue Background */}
      <section className="w-full bg-[#d4f1f9] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-40">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 xl:gap-20">
            {/* Left Side - Heading */}
            <div className="w-full lg:w-1/2">
              <p className="text-[#1a1a1a] text-sm sm:text-base font-medium mb-2 sm:mb-3">
                What We Do
              </p>
              <h2 className="text-[#1a1a1a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
                Our Services
              </h2>
            </div>

            {/* Right Side - Divider and Description */}
            <div className="w-full lg:w-1/2 flex items-start gap-6 lg:gap-8">
              {/* Vertical Divider */}
              <div className="hidden lg:block w-[2px] h-24 bg-[#1a1a1a] flex-shrink-0"></div>

              {/* Description */}
              <p className="text-[#1a1a1a] text-sm sm:text-base md:text-lg leading-relaxed">
                Whether you're starting a business, trying to make sense of your
                personal finances, or planning for what's next, I'm here to help
                with the tools and guidance to move things forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
