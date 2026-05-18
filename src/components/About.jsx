import React from "react";
import {
  screenshot2,
  dotAbout,
} from "@/exports/images";
import {
  ChartColumnIncreasing,
  CheckCircle,
  DollarSign,
  DollarSignIcon,
  Scale,
  Umbrella,
} from "lucide-react";

const About = () => {
  return (
    <section className="relative z-10 flex flex-col items-center pt-20">
      <div className="relative mb-6">
        <span className="bg-[#181A20] px-5 py-1 border border-[#0BA5EC] font-medium 2xl:text-sm lg:text-sm text-xs text-[#0BA5EC] blur-sm rounded-full absolute inset-0">
          Introducing Shore
        </span>
        <span className="bg-[#181A20] px-5 py-1 border border-[#0BA5EC] font-medium 2xl:text-sm lg:text-sm text-xs text-[#0BA5EC] rounded-full relative">
          Introducing Shore
        </span>
      </div>

      <h1 className="text-center text-white font-semibold 2xl:text-5xl lg:text-5xl text-4xl 2xl:leading-[5rem] capitalize mt-10 px-4">
        Your Complete Solution For Modern
        <br className="2xl:block lg:block hidden" />
        HR Management
      </h1>

      <p className="text-gray-300 2xl:text-lg lg:text-lg text-sm text-center mt-5">
        Automated payroll, safeguard sensitive data, and gain actionable
        insights to empower your <br className="2xl:block lg:block hidden" />
        workforce and drive business success with our all-in-one HR software.
      </p>
      <div className="relative flex justify-center 2xl:py-[4.5rem] lg:py-[2.5rem] py-[2rem] 2xl:px-[16rem] lg:px-[12rem] px-[4rem] border border-[#1B1C21] rounded-2xl">
        <img src={dotAbout} alt="" className="absolute top-0" />
        <img
          src={screenshot2}
          alt=""
          className="object-contain lg:h-[18rem] h-[16rem]"
        />

        <span className="absolute 2xl:top-[6.5rem] lg:top-[6.7rem] top-[5rem] 2xl:left-[13rem] lg:left-[9rem] left-1 flex items-center bg-[#14161B] px-3 py-2 border border-[#1F2125] text-white font-medium text-sm rounded-lg">
          <DollarSign
            className="mr-1 text-[#0ba5ec]"
            strokeWidth={4}
            size={15}
          />
          Payroll
        </span>
        <span className="absolute 2xl:top-[6.5rem] lg:top-[6.7rem] top-[5rem] 2xl:right-[13rem] lg:right-[7.5rem] right-1 flex items-center bg-[#14161B] px-3 py-2 border border-[#1F2125] text-white font-medium text-sm rounded-lg">
          <Scale className="mr-1 text-[#0ba5ec]" strokeWidth={4} size={15} />
          Compliance
        </span>
        <span className="absolute 2xl:top-[19rem] lg:top-[15rem] top-[13rem] 2xl:left-[12rem] lg:left-[9rem] left-1 flex items-center bg-[#14161B] px-3 py-2 border border-[#1F2125] text-white font-medium text-sm rounded-lg">
          <Umbrella className="mr-1 text-[#0ba5ec]" strokeWidth={4} size={15} />
          Time-off
        </span>
        <span className="absolute 2xl:top-[19rem] lg:top-[15rem] top-[13rem] 2xl:right-[12rem] lg:right-[9rem] right-1 flex items-center bg-[#14161B] px-3 py-2 border border-[#1F2125] text-white font-medium text-sm rounded-lg">
          <ChartColumnIncreasing
            className="mr-1 text-[#0ba5ec]"
            strokeWidth={4}
            size={15}
          />
          Analytics
        </span>
        <span className="absolute 2xl:top-[6.5rem] lg:top-[6.7rem] top-[5rem] 2xl:left-[13rem] lg:left-[9rem] left-1 flex items-center bg-[#14161B] px-3 py-2 border border-[#1F2125] text-white font-medium text-sm rounded-lg">
          <DollarSign
            className="mr-1 text-[#0ba5ec]"
            strokeWidth={4}
            size={15}
          />
          Payroll
        </span>
        <span className="absolute 2xl:top-[6.5rem] lg:top-[6.7rem] top-[5rem] 2xl:left-[13rem] lg:left-[9rem] left-1 flex items-center bg-[#14161B] px-3 py-2 border border-[#1F2125] text-white font-medium text-sm rounded-lg">
          <DollarSign
            className="mr-1 text-[#0ba5ec]"
            strokeWidth={4}
            size={15}
          />
          Payroll
        </span>
      </div>
      <ul className="flex items-center 2xl:flex-row lg:flex-row flex-col 2xl:gap-10 lg:gap-10 gap-6 mt-10">
        <li className="text-gray-300 2xl:text-lg lg:text-lg text-sm">
         <CheckCircle className="inline mr-2 text-[#0ba5ec]" strokeWidth={4} size={20} />
          Unified Employee Database
        </li>
        <li className="text-gray-300 2xl:text-lg lg:text-lg text-sm">
          <CheckCircle className="inline mr-2 text-[#0ba5ec]" strokeWidth={4} size={20} />
          Robust Compliance Management
        </li>
        <li className="text-gray-300 2xl:text-lg lg:text-lg text-sm">
          <CheckCircle className="inline mr-2 text-[#0ba5ec]" strokeWidth={4} size={20} />
          Efficient Time-off Tracking
        </li>
      </ul>
    </section>
  );
};

export default About;
