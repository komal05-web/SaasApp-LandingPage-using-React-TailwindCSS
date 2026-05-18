import React from "react";
import { Camera, AlignRight, X, ChevronRight, LogIn } from "lucide-react";

const SocialIcon = ({ href, children }) => (
    <a href={href} className="px-2 py-1 bg-[#0BA5EC] text-white rounded-lg flex items-center justify-center">
        {children}
    </a>
);

const Footer = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-between lg:gap-3 gap-15 border-t border-[#1D2C37] 2xl:px-[10rem] lg:px-[4rem] px-[1rem] 2xl:mt-[5rem] 2xl:py-[3rem] lg:mt-[4rem] lg:py-[3rem] mt-[3rem] py-[2rem]">
            <div>
                <div className="flex items-center gap-1">
                    <h1 className="text-white 2xl:text-4xl lg:text-3xl text-3xl font-semibold">Shore</h1>
                </div>
                <p className="text-gray-300 text-sm italic font-medium mt-1">Simplicity at its finest</p>
                <div className="flex items-center gap-3 mt-5">
                    <SocialIcon href="#">
                        {/* Facebook */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                    </SocialIcon>

                    <SocialIcon href="#">
                        {/* Instagram */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                    </SocialIcon>

                    <SocialIcon href="#">
                        {/* LinkedIn */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                    </SocialIcon>

                    <SocialIcon href="#">
                        {/* X (Twitter) */}
                        <X size={20} />
                    </SocialIcon>

                    <SocialIcon href="#">
                        {/* YouTube */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                        </svg>
                    </SocialIcon>
                </div>
            </div>

            <div>
                <h4 className="text-1xl font-bold text-white capitalize mb-2">Company</h4>
                <p><a href="#" className="text-gray-300 text-sm">About Us</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Our Team</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Careers</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Press & Media</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Privacy Policy</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Terms of Service</a></p>
            </div>

            <div>
                <h4 className="text-1xl font-bold text-white capitalize mb-2">Solutions</h4>
                <p><a href="#" className="text-gray-300 text-sm">Custom Web Development</a></p>
                <p><a href="#" className="text-gray-300 text-sm">E-commerce Solutions</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Enterprise Software</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Branding & Identity</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Social Media Marketing</a></p>
                <p><a href="#" className="text-gray-300 text-sm">AI & Automation</a></p>
            </div>

            <div>
                <h4 className="text-1xl font-bold text-white capitalize mb-2">Resources</h4>
                <p><a href="#" className="text-gray-300 text-sm">Blog & Insights</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Customer Success Stories</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Help Center</a></p>
                <p><a href="#" className="text-gray-300 text-sm">E-books & Guides</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Developer API</a></p>
                <p><a href="#" className="text-gray-300 text-sm">Partner Program</a></p>
            </div>
        </div>
    );
};

export default Footer;