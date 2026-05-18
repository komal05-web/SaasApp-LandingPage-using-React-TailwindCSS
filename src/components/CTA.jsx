import React from "react";
import { Camera, AlignRight, X, ChevronRight, LogIn, Umbrella, DollarSign, Scale, ChartColumnIncreasing, CircleCheck, Boxes } from "lucide-react";
import { brand1, brand2, brand3, brand4, screenshot1, dotHero, dotFooter, dotIntegrations, integration1, integration2, integration3, integration4, integration5, integration6 } from "../exports/images";

const CTA = () => {
    return (
        <section className="2xl:px-[5rem] lg:px-[4rem] px-[1rem] 2xl:mt-[6rem] lg:mt-[6rem] mt-[3rem]">
            <div className="bg-[#14161B] relative border-2 border-[#1B1C21]  2xl:py-[6rem] lg:py-[4rem] py-[3rem] 2xl:px-0 lg:px-0 px-[1rem]  rounded-3xl">
                <img src={dotFooter} alt="" className="absolute top-0 w-full h-full" />
                <div className="z-1 flex flex-col items-center">
                    <h1 className="text-center text-white font-semibold 2xl:text-5xl lg:text-4xl text-2xl 2xl:leading-[3.5rem] capitalize mt-6">
                        Supercharge <br /> your HR and payroll today
                    </h1>
                    <p className="text-gray-300 2xl:text-lg lg:text-lg text-sm text-center mt-2">
                        Join the growing community of businesses simplifying their HR processes. <br className="2xl:block lg:block hidden" /> Easy setup, smarter workflows, and better results — all in one platform.
                    </p>
                    <div className="flex items-center gap-6 2xl:mt-8 lg:mt-[2rem] mt-6">
                        <button className="flex items-center bg-[#0BA5EC] text-white 2xl:text-lg lg:text-lg text-sm whitespace-nowrap font-medium px-6 py-2 rounded-full cursor-pointer hover:bg-red-400 transition duration-300">
                            Get started
                            <ChevronRight className="ml-1 font-bold" strokeWidth="3" />
                        </button>
                        <button className="flex items-center bg-[#222E37] text-white 2xl:text-lg lg:text-lg text-sm whitespace-nowrap font-medium px-6 2xl:py-2 lg:py-2 py-3 rounded-full cursor-pointer hover:bg-red-400 transition duration-300">Book a demo</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
