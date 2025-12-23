"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { League_Spartan } from 'next/font/google';

// Initialize the font locally for this component
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const SubscriptionBanner = () => {
  return (
    <div className={`w-full relative rounded-[30px] overflow-hidden h-[260px] flex items-center group cursor-pointer shadow-lg mt-12 bg-[#404A3D] ${spartan.className}`}>

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
            src="/images/contact/subscribe-bg.png" 
            alt="Subscription Background" 
            fill 
            className="object-cover" 
        />
        {/* Overlay with opacity to tint the image dark green */}
        <div className="absolute inset-0 bg-[#8e946c] opacity-85 mix-blend-multiply"></div>
      </div>

      {/* Content Container 
          CHANGED: justify-start -> justify-center 
          This moves the Icon and Button group to the center/right of the banner 
      */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 gap-6 md:gap-12">
        
        {/* Icon Circle */}
        <div className="w-[64px] h-[64px] md:w-[120px] md:h-[120px] bg-[#d8bc8f] rounded-full flex items-center justify-center shrink-0 shadow-md border border-[#c5a675]">
            <div className="relative w-[40px] h-[40px] md:w-[64px] md:h-[64px]">
                <Image 
                    src="/images/home/Vector.png" 
                    alt="Hand with plant icon" 
                    fill 
                    className="object-contain"
                />
            </div>
        </div>

        {/* White Button / Link */}
        <Link href="/subscription" className="w-full md:w-auto z-20">
            <div className="bg-white h-[90px] md:h-[130px] w-full md:w-auto rounded-[30px] flex items-center justify-center px-8 md:px-24 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                <span className="font-bold text-[22px] md:text-[40px] text-[#3D550C] text-center whitespace-nowrap">
                    Click to explore the subscription Plans
                </span>
            </div>
        </Link>

      </div>
    </div>
  );
};

export default SubscriptionBanner;