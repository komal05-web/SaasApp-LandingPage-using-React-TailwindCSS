import React from "react";
import { Camera, AlignRight, X, ChevronRight, LogIn } from "lucide-react";
import { brand1, brand2, brand3, brand4, screenshot1, dotHero, dotIntegrations, integration1, integration2, integration3, integration4, integration5, integration6 } from "../exports/images";

const Integrations = () => {
    return (
        <section className="2xl:px-[5rem] lg:px-[4rem] px-[1rem] 2xl:mt-[6rem] lg:mt-[6rem]">
            <div className="bg-[#14161B] relative border-2 border-[#1B1C21] flex flex-col items-center 2xl:py-[6rem] lg:py-[4rem] py-[3rem] 2xl:px-[10rem] rounded-3xl">
                <span className="bg-[#25262B] px-5 py-1 border border-red-400 font-medium 2xl:text-sm lg:text-sm text-xs text-red-400 rounded-full">Integrations</span>
                <h1 className="text-center text-white font-semibold 2xl:text-5xl lg:text-4xl text-2xl 2xl:leading-[3.5rem] capitalize mt-6">Connect. Sync. Grow.</h1>
                <p className="text-gray-300 2xl:text-lg lg:text-lg text-sm text-center mt-2">
                    Bring all your favorite tools together — automate tasks, <br className="2xl:block lg:block hidden" /> stay compliant, and deliver a smoother employee experience.
                </p>
                <div className="2xl:flex lg:grid lg:grid-cols-3 grid grid-cols-2 items-center gap-[4rem] mt-[4rem]">
                    <div className="bg-[#202227] flex items-center justify-center rounded-xl p-8 z-1">
                        <img src={integration1} alt="" className="object-contain h-[4rem]" />
                    </div>
                    <div className="bg-[#202227] flex items-center justify-center rounded-xl p-8 z-1">
                        <img src={integration2} alt="" className="object-contain h-[4rem]" />
                    </div>
                    <div className="bg-[#202227] flex items-center justify-center rounded-xl p-8 z-1">
                        <img src={integration3} alt="" className="object-contain h-[4rem]" />
                    </div>
                    <div className="bg-[#202227] flex items-center justify-center rounded-xl p-8 z-1">
                        <img src={integration4} alt="" className="object-contain h-[4rem]" />
                    </div>
                    <div className="bg-[#202227] flex items-center justify-center rounded-xl p-8 z-1">
                        <img src={integration5} alt="" className="object-contain h-[4rem]" />
                    </div>
                    <div className="bg-[#202227] flex items-center justify-center rounded-xl p-8 z-1">
                        <img src={integration6} alt="" className="object-contain h-[4rem]" />
                    </div>
                </div>
                <img src={dotIntegrations} alt="" className="w-full absolute bottom-2 2xl:h-[10rem] lg:h-[8rem]" />
            </div>
        </section>
    );
};

export default Integrations;
