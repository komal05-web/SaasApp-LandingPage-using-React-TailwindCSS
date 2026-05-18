import React from "react";
import { Camera, AlignRight, X, ChevronRight, LogIn, Umbrella, DollarSign, Scale, ChartColumnIncreasing, CircleCheck, Boxes } from "lucide-react";
import { brand1, brand2, brand3, brand4, screenshot1, screenshot5, screenshot3, screenshot4, screenshot6, dotHero, dotAbout, dotAutomated } from "../exports/images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const Faqs = () => {
    const triggerClass = "transition-colors data-[state=open]:bg-[#0E2432]";

    return (
        <section className="2xl:px-[10rem] lg:px-[4rem] px-[1rem] 2xl:mt-[6rem] lg:mt-[6rem] mt-10">
            <div className="flex flex-col items-center">
                <h1 className="text-center text-white font-semibold 2xl:text-5xl lg:text-4xl text-2xl 2xl:leading-[3.5rem] capitalize mt-6">Frequently Asked Questions</h1>
                <p className="text-gray-300 2xl:text-lg lg:text-lg text-sm text-center mt-2">Still have more questions? Don’t hesitate to contact us!</p>
                <button className="flex items-center border border-[#0BA5EC] text-white text-lg font-medium px-6 py-2 mt-5 rounded-full cursor-pointer hover:bg-[#0BA5EC] transition duration-300">
                    Contact Us
                    <ChevronRight className="ml-1 font-bold" strokeWidth="3" />
                </button>

                <Accordion type="single" collapsible className="2xl:w-[70%] lg:w-[80%] w-full mt-10 text-white border border-[#1B1D21] rounded-xl">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={`${triggerClass} rounded-t-md`}>How do I get started with Shore?</AccordionTrigger>
                        <AccordionContent>
                            Getting started with Shore is quick and easy. Simply sign up for a free account using your email address or Google login. Once inside, follow our intuitive setup guide to customize your dashboard. Within minutes, you’ll be ready to manage your tasks, teams, and projects
                            more efficiently than ever before.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className={triggerClass}>Can I integrate Shore with other apps I use?</AccordionTrigger>
                        <AccordionContent>
                            Yes! Shore was built with flexibility in mind. We offer direct integrations with tools like Slack, Zapier, and Google Drive. You can automate your workflows, sync files in real time, and even create custom connections through our open API to perfectly fit your business
                            needs.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className={triggerClass}>What payment methods do you accept?</AccordionTrigger>
                        <AccordionContent>
                            We accept all major credit cards, PayPal, and bank transfers for your convenience. For larger teams and enterprises, we also support invoicing and custom billing solutions. All transactions are securely processed and comply with the latest financial security standards.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className={triggerClass}>Is there a free trial available?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely! We offer a no-commitment 14-day free trial that gives you full access to every feature Shore has to offer. No credit card is required to sign up, and you can upgrade to a paid plan at any time. Our team is also available to assist you during your trial if
                            needed.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className={triggerClass}>How secure is my data on Shore?</AccordionTrigger>
                        <AccordionContent>
                            Your security and privacy are our top priorities. Shore uses industry-leading encryption to protect your data both at rest and in transit. We are fully compliant with GDPR, and we regularly perform security audits to ensure that your information is safe with us at all
                            times.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger className={triggerClass}>Can I cancel or change my subscription anytime?</AccordionTrigger>
                        <AccordionContent>
                            Yes, you have complete control over your subscription. You can upgrade, downgrade, or cancel your plan at any time directly through your account settings. There are no hidden fees or complicated cancellation processes — just simple, flexible subscription management.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Faqs;
