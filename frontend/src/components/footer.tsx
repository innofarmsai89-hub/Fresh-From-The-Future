import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { League_Spartan } from 'next/font/google'; 
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan',
});

export default function Footer() {
  
  const socialLinks = [
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaXTwitter, href: "#" },
    { Icon: FaLinkedinIn, href: "#" },
    { Icon: FaInstagram, href: "#" }
  ];

  return (
    <footer className={`w-full bg-white relative ${spartan.variable} font-spartan`}> 
      
      {/* --- Top Green Bar --- 
          UPDATED: 'relative' on mobile, 'absolute' on large screens (lg).
          This prevents overlap issues on mobile when text wraps.
      */}
      <div className="relative lg:absolute top-0 left-0 w-full h-auto lg:h-[120px] bg-[#3D550C] z-10 py-8 lg:py-0">
        <div className="max-w-[1440px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
            
            {/* Tagline */}
            <div className="font-bold text-[18px] md:text-[24px] tracking-wide text-[#DCBC88] text-center lg:text-left">
                BEYOND ORGANIC • TRACEABLE • HYPER-LOCAL
            </div>

            {/* Contact Details */}
            <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-center">
                {/* Phone */}
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D550C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                       </svg>
                    </div>
                    <span className="font-medium text-[15px] text-white tracking-wide">
                        +91 92203 09252
                    </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D550C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <span className="font-medium text-[15px] text-white tracking-wide break-all md:break-normal">
                        Hello@FreshfromtheFuture.com
                    </span>
                </div>
            </div>
        </div>
      </div>

      {/* --- Main Content Area --- 
          UPDATED: Adjusted padding-top (pt) to handle the absolute positioning on desktop 
          while keeping natural flow on mobile.
      */}
      <div className="max-w-[1440px] mx-auto px-6 py-12 lg:py-16 lg:pt-[180px] flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Column: Brand Info */}
        <div className="lg:w-[30%] flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Logo */}
            <div className="relative w-[180px] h-[150px] md:w-[206px] md:h-[176px] mb-4 -ml-0 lg:-ml-6">
                <Image 
                    src="/images/home/company-logo.png" 
                    alt="Fresh From The Future"
                    fill
                    className="object-contain"
                />
            </div>
            
            {/* Description */}
            <p className="font-normal text-[16px] leading-[26px] text-[#404A3D] mb-8 max-w-[349px]">
                Fresh From The Future is a premium HoReCa beyond organic Hydroponic Leafy, Micro Greens and edible flower produce brand powered by INNOFarms.AI
            </p>

            {/* Social Icons */}
            <div className="flex gap-[15px] justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                    <Link 
                        key={index} 
                        href={social.href} 
                        className="w-[40px] h-[40px] bg-[rgba(220,188,136,0.44)] rounded-full flex items-center justify-center hover:bg-[#DCBC88] transition-all duration-300 group"
                    >
                        <social.Icon 
                            className="w-[18px] h-[18px] text-[#3D550C] group-hover:text-white transition-colors" 
                        />
                    </Link>
                ))}
            </div>
        </div>

        {/* Right Section: Headline + Links Grid */}
        <div className="lg:w-[70%] flex flex-col pt-0 lg:pt-12">
            
            {/* Big Headline */}
            <h2 className="font-bold text-[28px] md:text-[40px] leading-[1.2] text-[#1E1E1E] mb-12 text-center lg:text-left">
                India’s First Premium Culinary Innovation Brand.
            </h2>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                
                {/* Column 1: Useful Links */}
                <div>
                    <h3 className="font-bold text-[18px] text-[#404A3D] mb-6 uppercase tracking-wider">
                        Useful Link
                    </h3>
                    <ul className="space-y-4 flex flex-col items-center md:items-start">
                        <li><Link href="#" className="font-medium text-[18px] text-[#1E1E1E] hover:text-[#3D550C] transition-colors">Our Produce</Link></li>
                        <li><Link href="#" className="font-medium text-[18px] text-[#1E1E1E] hover:text-[#3D550C] transition-colors">Chef Mixes</Link></li>
                        <li><Link href="#" className="font-medium text-[18px] text-[#1E1E1E] hover:text-[#3D550C] transition-colors">Traceability</Link></li>
                    </ul>
                </div>

                {/* Column 2: Home Links */}
                <div>
                    <h3 className="font-bold text-[18px] text-[#404A3D] mb-6 uppercase tracking-wider">
                        Home
                    </h3>
                    <ul className="space-y-4 flex flex-col items-center md:items-start">
                        <li><Link href="#" className="font-medium text-[18px] text-[#1E1E1E] hover:text-[#3D550C] transition-colors">About Us</Link></li>
                        <li><Link href="#" className="font-medium text-[18px] text-[#1E1E1E] hover:text-[#3D550C] transition-colors">Chef Advisory Council</Link></li>
                        <li><Link href="#" className="font-medium text-[18px] text-[#1E1E1E] hover:text-[#3D550C] transition-colors">Events & Blogs</Link></li>
                    </ul>
                </div>

                {/* Column 3: Address */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-[18px] text-[#404A3D] mb-6 uppercase tracking-wider">
                        Our Address
                    </h3>
                    <div className="space-y-4 font-normal text-[15px] leading-[24px] text-[#404A3D] opacity-90 max-w-[320px]">
                        <p>
                            <span className="font-bold text-[#1E1E1E]">Registered office:-</span> DLF Forum, Cybercity, Phase III, GURUGRAM, HARYANA, 122002
                        </p>
                        <p>
                            <span className="font-bold text-[#1E1E1E]">Farm:-</span> Property number 4378P, Basement Area, Sector -23 Gurugram, Haryana 122001
                        </p>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- Copyright Bottom Bar --- */}
      <div className="border-t border-[rgba(64,74,61,0.2)] mt-8">
        <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            
            {/* Links */}
            <div className="flex items-center gap-6 justify-center">
                <Link href="#" className="font-medium text-[14px] text-[#666666] hover:text-[#3D550C] transition-colors">Terms & Conditions</Link>
                <div className="w-[1px] h-[14px] bg-[rgba(24,26,23,0.2)]"></div>
                <Link href="#" className="font-medium text-[14px] text-[#666666] hover:text-[#3D550C] transition-colors">Privacy Policy</Link>
            </div>

            {/* Copyright Text */}
            <div className="font-medium text-[14px] text-[#666666]">
                Copyright © 2024 , All Rights Reserved.
            </div>

        </div>
      </div>
    </footer>
  );
}