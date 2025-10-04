import { Lightbulb, Brain, Users } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Embracing Innovation",
      description:
        "From AI-driven analytics to secure cloud platforms, we welcome new technology with open arms.",
    },
    {
      icon: Brain,
      title: "Community Centered",
      description:
        "Rooted in a deep commitment to uplift local communities, we're here to help you build your future.",
    },
    {
      icon: Users,
      title: "People-First Service",
      description:
        "Behind every smart tool is a team that listens, understands, and cares deeply about your goals.",
    },
  ];

  return (
    <section className="w-full bg-[#f0f9fc] py-12 sm:py-16 md:py-20 lg:py-30">
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-start">
                {/* Icon Container */}
                <div className="bg-white rounded-2xl sm:p-4 md:p-5 shadow-sm mb-6">
                  <Icon
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#1a1a1a]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#1a1a1a] text-xl sm:text-2xl md:text-2xl font-semibold mb-3 sm:mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#1a1a1a] text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
