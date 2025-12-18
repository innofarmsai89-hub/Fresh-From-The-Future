import React from 'react';
import Image from 'next/image';
import { League_Spartan } from 'next/font/google';

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan',
});

const ChefMixesPage = () => {
  return (
    <main className={`w-full min-h-screen bg-white ${spartan.variable} font-spartan`}>
      
      {/* --- Section 1: Banner --- */}
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chef-mixes/chef-mixes-bg.png"
            alt="Chef Mixes Background - Kale and leafy greens"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Glassmorphism Card */}
        <div className="relative z-10 w-[95%] max-w-[1280px] rounded-[20px] overflow-hidden shadow-xl">
          
          {/* Blur/Gradient Layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c1a]/85 via-[#3A5A30]/75 to-[#1a3c1a]/85 backdrop-blur-md"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center py-12 md:py-14 px-4">
            <h1 className="text-white text-4xl md:text-[54px] font-bold leading-tight mb-2 drop-shadow-md">
              Chef Mixes
            </h1>
            <p className="text-[#d4c596] text-lg md:text-[26px] font-bold tracking-wide drop-shadow-md">
              Crafted Blends, Bursting with Flavor
            </p>
          </div>
        </div>

        {/* Floating CTA Button */}
        <div className="absolute z-30 bottom-[15%] md:bottom-[20%]">
          <button className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-lg py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95">
            Get Samples
          </button>
        </div>

      </div>

      {/* --- Section 2: Coming Soon Text --- */}
      <div className="w-full bg-white py-24 md:py-32 flex justify-center items-center">
        <h2 className="text-[#3c5922] text-4xl md:text-6xl font-bold tracking-tight text-center">
          Coming soon!
        </h2>
      </div>

    </main>
  );
};

export default ChefMixesPage;