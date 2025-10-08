import React from "react";
import smartyworker from "@/assets/images/ComingSoonPageImages/smartyworker.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="w-full">
      <div className="text-center pt-20">
        <h2 className="text-lg md:text-xl lg:text-2xl font-rubik">
          We're Working On It
        </h2>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl md:mt-2">
          Coming Soon
        </h1>
        <p className=" md:mt-3 text-neutral-500">
          We're working hard to bring you something amazing. <br /> It'll be
          worth the wait!
        </p>
        <Link to="/">
          <button className="mt-10 py-3 px-20 border border-black rounded-4xl cursor-pointer hover:border-none hover:bg-[#36cdfe] hover:text-white transition-colors duration-300">
            Return Home
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center w-full pb-20">
        <img src={smartyworker} alt="smartyworker" />
      </div>
    </div>
  );
}

export default HeroSection;
