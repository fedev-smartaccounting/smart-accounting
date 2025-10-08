import React from "react";
import { motion } from "framer-motion";
import At from "@/assets/icons/QuestionsSection/at.svg";
import Human from "@/assets/icons/QuestionsSection/human.svg";
import QuestionMark from "@/assets/icons/QuestionsSection/questionmark.svg";

function QuestionSection() {
  const questionItems = [
    {
      icon: QuestionMark,
      title: "Got Any Questions?",
      description:
        "Contact us. We're here to help — ask us anything, anytime, confidently.",
    },
    {
      icon: At,
      title: "Make An Appointment",
      description:
        "Schedule a personalized session to simplify your financial journey today.",
    },
    {
      icon: Human,
      title: "Sign up to stay smart.",
      description:
        "Join our platform and get insights to grow your financial knowledge.",
    },
  ];
  //COMMENT- for animation effects
  /*<motion.div
        initial={{ opacity: 0, y: 0 }} // start invisible and below
        whileInView={{ opacity: 1, y: 0 }} // animate when in view
        viewport={{ once: true, amount: 0.3 }} // trigger once when 30% is visible
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold">Ready to take the next step?</h1>
        <p className="mt-4 max-w-[450px] text-gray-700">
          Whether you're launching a business, organizing your finances, or
          simply looking for clarity — we're here to help. Let's build something
          meaningful, together.
        </p>
        <button className="mt-6 px-6 sm:px-8 py-2.5 border-2 border-black rounded-full text-black hover:bg-[#36cdfe] hover:border-[#36cdfe] hover:text-white transition-all duration-200">
          View Services
        </button>
      </motion.div> */

  return (
    <div className="w-full pb-10 pt-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 lg:ml-10">
        {/* Left Column */}
        <div className=" lg:border-r lg:border-black lg:pr-8 xl:pr-12 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center mb-5 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6px font-bold leading-tight  max-w-[400px]">
            Ready to take the next step?
          </h1>
          <p className="max-w-[450px] mt-4 text-sm sm:text-md  md:text-lg text-gray-700">
            Whether you're launching a business, organizing your finances, or
            simply looking for clarity — we're here to help. Let's build
            something meaningful, together.
          </p>
          <button className="mt-6 px-10 sm:px-8 py-3.5 sm:py-3 border-2 border-black rounded-full text-black text-sm sm:text-base md:text-lg font-medium hover:bg-[#36cdfe] hover:border-[#36cdfe] hover:text-white active:scale-95 transition-all duration-200">
            View Services
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:pl-8 xl:pl-12">
          {questionItems.map((item, index) => (
            <QuestionItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function QuestionItem({ icon, title, description }) {
  return (
    <div className="flex items-start sm:items-center gap-4 sm:gap-6 group cursor-pointer">
      {/* Icon Container */}
      <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 p-4 sm:p-5 flex items-center justify-center bg-white rounded-[15px] shadow-[0_0_10px_3px_rgba(173,216,230,0.45),0_0_30px_8px_rgba(173,216,230,0.25)] transition-shadow duration-500 ease-in-out flex-shrink-0 group-hover:shadow-[0_0_15px_5px_rgba(54,205,254,0.6),0_0_40px_12px_rgba(54,205,254,0.4)]">
        <img
          src={icon}
          alt={title}
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 transition-[filter] duration-500 ease-in-out [filter:brightness(0)_saturate(100%)] group-hover:[filter:invert(64%)_sepia(98%)_saturate(2395%)_hue-rotate(162deg)_brightness(101%)_contrast(101%)]"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1 sm:gap-2">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-rubik transition-colors duration-500 ease-in-out group-hover:text-[#36cdfe]">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ease-in-out group-hover:text-[#36cdfe]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default QuestionSection;
