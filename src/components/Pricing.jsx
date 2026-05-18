import React from "react";
import { Camera, AlignRight, X, ChevronRight, LogIn, Check } from "lucide-react";
import { brand1, brand2, brand3, brand4, screenshot1, dotHero, dotIntegrations, dotPricing, integration1, integration2, integration3, integration4, integration5, integration6 } from "../exports/images";

const Pricing = () => {
    return (
        <section className="2xl:px-[5rem] lg:px-[2rem] px-[1rem] 2xl:py-[2rem] lg:py-[2rem] py-[1rem]">
            <div className="bg-[#071925] relative border-2 border-[#1D2C37] flex flex-col items-center 2xl:py-[6rem] lg:py-[4rem] py-[2rem] 2xl:px-[7rem] lg:px-[5rem] px-[0.5rem] rounded-3xl">
                <span className="px-5 py-1 border border-[#0BA5EC] bg-[#182934] font-medium 2xl:text-sm lg:text-sm text-xs text-[#0BA5EC] rounded-full">Pricing</span>
                <h1 className="text-center text-white font-semibold 2xl:text-5xl lg:text-4xl text-2xl 2xl:leading-[3.5rem] capitalize mt-6">
                    Plans that scale with your  growth
                </h1>
                <p className="text-gray-300 2xl:text-lg lg:text-lg text-sm text-center mt-2">
                    Transparent pricing, zero hidden fees. <br className="2xl:block lg:block hidden" /> Everything you need to power your HR and payroll.
                </p>

                <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 2xl:gap-7 lg:gap-5 gap-6 w-full mt-[4rem] z-1">
                    <div className="border border-[#1D2C37] bg-[#142531] rounded-2xl p-8 w-full">
                        <div className="border-b border-[#243744] pb-[1.5rem]">
                            <p className="text-gray-300 font-medium text-lg">Starter</p>
                            <div className="flex items-center gap-6 mt-5">
                                <h2 className="font-semibold text-white text-5xl">$10</h2>
                                <p className="text-gray-300 font-medium text-lg">per user</p>
                            </div>
                        </div>
                        <button className="w-full border-2 border-[#243744] bg-[#23323C] py-3 rounded-full font-medium text-white mt-5 cursor-pointer hover:bg-red-400 transition-all duration-300">Get Started</button>
                        <p className="text-gray-300 font-medium mt-[2rem]">Starter plan includes:</p>
                        <div className="flex items-start gap-2 mt-6">
                            <Check className="text-gray-300" strokeWidth="3" />
                            <p className="text-white font-medium">Fast, reliable payroll</p>
                        </div>
                        <div className="flex items-start gap-2 mt-4">
                            <Check className="text-gray-300" strokeWidth="3" />
                            <p className="text-white font-medium">Core HR management</p>
                        </div>
                        <div className="flex items-start gap-2 mt-4">
                            <Check className="text-gray-300" strokeWidth="3" />
                            <p className="text-white font-medium">Self-service employee portal</p>
                        </div>
                        <div className="flex items-start gap-2 mt-4">
                            <Check className="text-gray-300" strokeWidth="3" />
                            <p className="text-white font-medium">Regular compliance updates</p>
                        </div>
                    </div>

                    <div className="border border-[#0BA5EC] bg-[#142531] rounded-2xl p-8 w-full">
                        <div className="border-b border-[#243744] pb-[1.5rem]">
                            <p className="text-gray-300 font-medium text-lg">Pro</p>
                            <div className="flex items-center gap-6 mt-5">
                                <h2 className="font-semibold text-white text-5xl">$20</h2>
                                <p className="text-gray-300 font-medium text-lg">per user</p>
                            </div>
                        </div>
                        <button className="w-full bg-[#0BA5EC] py-3 rounded-full font-medium text-white mt-5 cursor-pointer hover:bg-red-400 transition-all duration-300">Select Plan</button>
                        <p className="text-gray-300 font-medium mt-[2rem]">Everything in Starter, plus:</p>
                        <div className="flex items-start gap-2 mt-6">
                            <Check className="text-[#0BA5EC]" strokeWidth="3" />
                            <p className="text-white font-medium">Advanced HR features</p>
                        </div>
                        <div className="flex items-start gap-2 mt-4">
                            <Check className="text-[#0BA5EC]" strokeWidth="3" />
                            <p className="text-white font-medium">Automated workflows</p>
                        </div>
                        <div className="flex items-start gap-2 mt-4">
                            <Check className="text-[#0BA5EC]" strokeWidth="3" />
                            <p className="text-white font-medium">Expanded compliance coverage</p>
                        </div>
                        <div className="flex items-start gap-2 mt-4">
                            <Check className="text-[#0BA5EC]" strokeWidth="3" />
                            <p className="text-white font-medium">Priority support</p>
                        </div>
                    </div>

                    <div className="border border-[#1D2C37] bg-[#0BA5EC] rounded-2xl p-8 w-full">
                        <div className="border-b border-white pb-[1.5rem]">
                            <p className="text-white font-medium text-lg">Enterprise</p>
                            <h2 className="font-medium text-white text-5xl mt-5">Custom</h2>
                        </div>
                        <button className="w-full bg-white py-3 rounded-full text-black mt-5 cursor-pointer hover:bg-red-400 transition-all duration-300">Contact Us</button>
                        <p className="text-gray-300 font-medium mt-[2rem]">Everything in Pro, plus:</p>
                        <div className="flex items-start gap-2 mt-6">
                            <Check className="text-green-500" strokeWidth="3" />
                            <p className="text-white font-medium">Dedicated account manager</p>
                        </div>
                        <div className="flex items-start gap-2 mt-4">
                            <Check className="text-green-500" strokeWidth="3" />
                            <p className="text-white font-medium">Custom integrations</p>
                        </div>
                        <div className="flex items-start gap-2 mt-4">
                            <Check className="text-green-500" strokeWidth="3" />
                            <p className="text-white font-medium">Full compliance services</p>
                        </div>
                        <div className="flex items-start gap-2 mt-4">
                            <Check className="text-green-500" strokeWidth="3" />
                            <p className="text-white font-medium">Onboarding & implementation support</p>
                        </div>
                    </div>
                </div>
                <img src={dotPricing} alt="" className="absolute bottom-0" />
            </div>
        </section>
    );
};

export default Pricing;
