import cloud from "@/assets/icons/cloud.svg";
import community from "@/assets/icons/community.svg";
import speak from "@/assets/icons/speak.svg";
import circleline from "@/assets/images/circleline.png";
import circleline2 from "@/assets/images/circleline2.png";

export default function AccountingHero() {
  const features = [
    {
      icon: speak,
      alt: "speak",
      text: "AI-Driven Insights",
      iconSize: "h-13 w-13",
    },
    {
      icon: cloud,
      alt: "cloud",
      text: "Built on Cloud Tech",
      iconSize: "h-13 w-13",
    },
    {
      icon: community,
      alt: "community",
      text: "Community-Powered",
      iconSize: "h-15 w-15",
    },
  ];

  return (
    <div className="relative  pb-35 bg-gray-50 overflow-hidden">
      {/* Network Background - Left Side */}
      <img
        src={circleline2}
        alt=""
        className="absolute left-1 w-auto max-md:hidden  top-[-9%] object-contain"
        style={{ zIndex: 0 }}
      />

      {/* Network Background - Right Side */}
      <img
        src={circleline}
        alt=""
        className="absolute right-1 top-[-10%] w-auto object-contain"
        style={{ zIndex: 0 }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Feature Pills */}
        <div className="flex justify-center items-center max-md:flex-col  gap-15 pt-12 pb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center    rounded-2xl gap-5 px-6 py-3.5"
            >
              <div className="w-20 h-20 border-1 rounded-2px shadow-2xl rounded-2xl bg-gray-50 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className={feature.iconSize}
                />
              </div>
              <span className="text-gray-900  tracking-wide font-[500] text-lg text-questrial">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="flex justify-center">
          <div className="w-150 h-0.5 bg-gradient-to-r from-transparent via-neutral-600 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="text-center mt-40 max-w-4xl mx-auto">
          <p className="text-black text-2xl font-semibold mb-4 tracking-wide">
            Who are we
          </p>
          <h1 className="text-6xl font-questrial text-black mb-6 tracking-wide leading-tight">
            The future Of Accounting
            <br />
            Powered By AI
          </h1>
          <p className="text-gray-800 text-base font-[500] max-w-xl mx-auto leading-relaxed">
            Smart Accounting was built with a vision: to transform financial
            services into a tool for community empowerment.
          </p>
        </div>
      </div>
    </div>
  );
}
