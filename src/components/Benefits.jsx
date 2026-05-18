import React from "react";
import { ChevronRight, DollarSign, ChartColumnIncreasing, Boxes } from "lucide-react";
import { screenshot5, screenshot3, screenshot4, dotAutomated } from "../exports/images";

const Benefits = () => {
    return (
        <section className="2xl:px-[10rem] lg:px-[4rem] px-[1rem] py-[5rem]">

            {/* Section 1 — Hero Row */}
            <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center gap-[3rem]">
                <div className="flex flex-col 2xl:items-start lg:items-start items-center">
                    <h1 className="2xl:text-start lg:text-start text-center text-white font-semibold 2xl:text-5xl lg:text-4xl text-2xl 2xl:leading-[3.5rem] lg:leading-[3rem] leading-[2rem] capitalize">
                        Power up your HR team <br /> with smarter solutions
                    </h1>
                    <p className="text-gray-300 2xl:text-lg lg:text-sm text-sm 2xl:py-5 lg:py-5 py-4 2xl:text-start lg:text-start text-center">
                        Streamline workflows, minimize errors, and boost employee satisfaction — all in one platform.
                    </p>
                    <button className="flex items-center border border-[#0BA5EC] text-white text-base font-medium px-6 py-2 rounded-full cursor-pointer hover:bg-[#0BA5EC] transition duration-300">
                        Learn More
                        <ChevronRight className="ml-1" strokeWidth="3" />
                    </button>
                </div>
                <div className="flex justify-center">
                    <img src={screenshot5} alt="HR Dashboard" className="w-full max-w-[520px] rounded-2xl object-contain" />
                </div>
            </div>

            {/* Section 2 — 3 Feature Cards */}
            <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-[2.5rem] 2xl:mt-[5rem] lg:mt-[4rem] mt-[3rem]">

                <div className="flex flex-col items-start">
                    <div className="w-[4rem] h-[4rem] rounded-xl bg-[#0d1f2d] border border-[#1D2C37] flex items-center justify-center mb-4">
                        <DollarSign className="text-[#0BA5EC]" strokeWidth="2.5" size="28" />
                    </div>
                    <h4 className="font-semibold text-white 2xl:text-xl lg:text-lg text-[18px]">Effortless payroll processing</h4>
                    <p className="text-gray-300 2xl:text-[17px] lg:text-sm text-sm text-start py-3">
                        Automate salary calculations, tax deductions, and payouts with pinpoint accuracy.
                    </p>
                </div>

                <div className="flex flex-col items-start">
                    <div className="w-[4rem] h-[4rem] rounded-xl bg-[#0d1f2d] border border-[#1D2C37] flex items-center justify-center mb-4">
                        <ChartColumnIncreasing className="text-[#0BA5EC]" strokeWidth="2.5" size="28" />
                    </div>
                    <h4 className="font-semibold text-white 2xl:text-xl lg:text-lg text-[18px]">Real-time performance insights</h4>
                    <p className="text-gray-300 2xl:text-[17px] lg:text-sm text-sm text-start py-3">
                        Track employee engagement, performance metrics, and trends to make smarter decisions.
                    </p>
                </div>

                <div className="flex flex-col items-start">
                    <div className="w-[4rem] h-[4rem] rounded-xl bg-[#0d1f2d] border border-[#1D2C37] flex items-center justify-center mb-4">
                        <Boxes className="text-[#0BA5EC]" strokeWidth="2.5" size="28" />
                    </div>
                    <h4 className="font-semibold text-white 2xl:text-xl lg:text-lg text-[18px]">Streamlined compliance tracking</h4>
                    <p className="text-gray-300 2xl:text-[17px] lg:text-sm text-sm text-start py-3">
                        Stay audit-ready with automatic updates on labor laws, contracts, and certifications.
                    </p>
                </div>

            </div>

            {/* Section 3 — Automate Row */}
            <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center gap-[4rem] 2xl:mt-[7rem] lg:mt-[6rem] mt-[4rem]">

                {/* Left — stacked screenshots */}
                <div className="relative 2xl:order-1 lg:order-1 order-2" style={{ height: "480px" }}>

                    {/* Glow */}
                    <div className="absolute top-[2rem] left-[2rem] w-[60%] h-[3rem] bg-[#0BA5EC] blur-2xl opacity-40 z-0" />

                    {/* Dot pattern background */}
                    <img
                        src={dotAutomated}
                        alt=""
                        className="absolute top-0 left-0 w-[58%] h-full object-cover opacity-50 z-0"
                    />

                    {/* Top card — Payment processed notification */}
                    <img
                        src={screenshot3}
                        alt="Payment processed"
                        className="absolute top-0 left-0 w-[55%] border border-[#0BA5EC] rounded-2xl z-20 shadow-lg"
                    />

                    {/* Bottom card — Payment details */}
                    <img
                        src={screenshot4}
                        alt="Payment details"
                        className="absolute bottom-0 left-0 w-[72%] rounded-2xl z-10 shadow-xl mt-10"
                    />

                </div>

                {/* Right — text */}
                <div className="flex flex-col 2xl:items-start lg:items-start items-center 2xl:order-2 lg:order-2 order-1">
                    <h1 className="2xl:text-start lg:text-start text-center text-white font-semibold 2xl:text-5xl lg:text-4xl text-2xl 2xl:leading-[3.5rem] lg:leading-[3rem] leading-[2rem] capitalize">
                        Automate tasks. <br /> Amplify results.
                    </h1>
                    <p className="text-gray-300 2xl:text-lg lg:text-sm text-sm 2xl:py-5 lg:py-5 py-4 2xl:text-start lg:text-start text-center">
                        Free up valuable time by automating administrative work and focusing on what matters most — your people.
                    </p>
                    <button className="flex items-center border border-[#0BA5EC] text-white text-base font-medium px-6 py-2 rounded-full cursor-pointer hover:bg-[#0BA5EC] transition duration-300">
                        Learn More
                        <ChevronRight className="ml-1" strokeWidth="3" />
                    </button>
                </div>

            </div>

        </section>
    );
};

export default Benefits;