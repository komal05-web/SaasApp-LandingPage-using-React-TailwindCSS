import React from "react";
import { ChevronRight } from "lucide-react";
import {
  brand1,
  brand2,
  brand3,
  screenshot1,
  dotHero,
  element1,
  brand4,
} from "@/exports/images";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <section className="relative z-10 flex flex-col items-center pt-32">
        <img
          src={element1}
          className="absolute inset-0 w-full h-full object-cover -z-10"
          alt=""
        />

        {/* Badge */}
        <div className="relative mb-6">
          <span className="bg-[#181A20] px-5 py-1 border border-[#0BA5EC] font-medium 2xl:text-sm lg:text-sm text-xs text-[#0BA5EC] blur-sm rounded-full absolute inset-0">
            Introducing Shore
          </span>
          <span className="bg-[#181A20] px-5 py-1 border border-[#0BA5EC] font-medium 2xl:text-sm lg:text-sm text-xs text-[#0BA5EC] rounded-full relative">
            Introducing Shore
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-center text-white font-semibold 2xl:text-7xl lg:text-6xl text-4xl 2xl:leading-[5rem] capitalize mt-10 px-4">
          Revolutionize your HR and <br className="2xl:block lg:block hidden" />
          payroll operations
        </h1>

        <p className="text-gray-300 2xl:text-lg lg:text-lg text-sm text-center mt-5">
          Simplify workforce management, stay compliant, and boost employee{" "}
          <br className="2xl:block lg:block hidden" />
          satisfaction with our all-in-one HR and payroll software.
        </p>
        <button className="flex items-center bg-gradient-to-r from-[#0bece4] via-blue-500 to-pink-500 text-white font-medium py-3 px-6 rounded-full hover:opacity-90 transition-opacity mt-5">
          Start Your Journey
        </button>

        <p className="text-gray-300 2xl:text-lg lg:text-lg text-sm text-center 2xl:mt-8 lg-mt-8 lg:mt-9 mt-4 z-1">Trusted by industry-leading organization worldwide </p>
        <div class="mt-4 grid 2xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 item-center 2xl:gap-[4rem] lg:gap-[4rem]">
          <img src={brand1} alt="Brand 1" className="w-28 h-auto mx-auto" />
          <img src={brand2} alt="Brand 2" className="w-28 h-auto mx-auto" />
          <img src={brand3} alt="Brand 3" className="w-28 h-auto mx-auto" />
          <img src={brand4} alt="Brand 4" className="w-28 h-auto mx-auto" />
        </div>

        <img src={dotHero} className="absolute 2xl:top-[17rem] lg:top-[14rem] 2xl:w-[85%] object-contain"/>
        <div className="2xl:block lg:block hidden absolute bg-[#27317c6b] h-[10rem] w-[40rem] blur-[5rem] 2xl:top-[45rem] lg:top-[40rem] top-[35rem] left-1/2 transform -translate-x-1/2 rounded-full"></div> 
        <img src={screenshot1} className="object-cover 2xl:mt-[5rem] lg:mt-[3rem] mt-[2rem] border border-[#1b1c21] rounded-xl z-1"/>
      </section>

    </div>
  );
};

export default Hero;
