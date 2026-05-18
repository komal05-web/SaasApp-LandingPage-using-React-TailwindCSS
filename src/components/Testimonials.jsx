import React from "react";
import { brand1, brand2, brand3, brand4, screenshot1, dotHero, dotIntegrations, dotTestimonials, dotPricing, integration1, integration2, integration3, integration4, integration5, integration6, avatar10, avatar08, avatar07, avatar02, avatar03 } from "../exports/images";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            avatar: avatar10,
            fullname: "Alex Joy",
            jobPosition: "Senior Frontend Engineer, Desphixs ♾️",
            review: "Switching to Shore was a game-changer. The platform is fast, reliable, and thoughtfully built. It fits seamlessly into our workflow and has helped us move faster than ever.",
        },

        {
            id: 2,
            avatar: avatar02,
            fullname: "Destiny Franks",
            jobPosition: "CEO, Desphixs ♾️",
            review: "Shore has redefined how we operate. From its clean interface to its incredible speed, everything feels effortless. It’s rare to find tools that just work — Shore does.",
        },

        {
            id: 3,
            avatar: avatar03,
            fullname: "Praise Daniel",
            jobPosition: "Product Intern, Desphixs ♾️",
            review: "As an intern, getting started with Shore was refreshingly simple. The intuitive design made onboarding fast, and the performance makes it a platform you actually want to use daily.",
        },
    ];

    return (
        <section className="2xl:px-[5rem] lg:px-[4rem] px-[1rem] 2xl:mt-[6rem] lg:mt-[6rem]">
            <div className="bg-[#14161B] relative border-2 border-[#1B1C21] flex flex-col items-center 2xl:py-[6rem] lg:py-[4rem] py-[3rem] 2xl:px-[10rem] rounded-3xl">
                <span className="bg-[#25262B] px-5 py-1 border border-red-400 font-medium 2xl:text-sm lg:text-sm text-xs text-red-400 rounded-full">
                    What People Say
                </span>
                <h1 className="text-center text-white font-semibold 2xl:text-5xl lg:text-4xl text-2xl 2xl:leading-[3.5rem] capitalize mt-6">
                    See how Shore powers success
                </h1>

                <Carousel className="relative z-1 w-full max-w-3xl 2xl:mt-10 lg:mt-10">
                    <CarouselContent>
                        {reviews.map((item, index) => (
                            <CarouselItem key={index}>
                                <div className="flex 2xl:flex-row lg:flex-row flex-col items-center gap-[2rem] 2xl:bg-[#111317] lg:bg-[#111317] bg-transparent 2xl:px-[3rem] lg:px-[3rem] px-[1rem] py-[4rem] 2xl:border lg:border border-[#1B1D21] rounded-xl">
                                    <div className="relative w-fit">
                                        <div className="absolute bg-[#0BA5EC] blur-[0.6rem] w-full h-full"></div>
                                        <div className="">
                                            <img src={item.avatar} alt="" className="relative border-5 border-[#1F2127] z-1 rounded-xl object-contain" />
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <h3 className="font-semibold text-xl text-white mt-5">{item.fullname}</h3>
                                        <p className="text-gray-300 text-sm">{item.jobPosition}</p>
                                        <p className="text-white mt-6">
                                            {item.review}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <img src={dotTestimonials} alt="" className="absolute w-full bottom-0" />
            </div>
        </section>
    );
};

export default Testimonials;
