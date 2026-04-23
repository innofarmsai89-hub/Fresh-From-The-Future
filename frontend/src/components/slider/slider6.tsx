import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Slider6: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/soulfoods.png"
          alt="Soul Foods Store"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[95%] 2xl:max-w-[1800px] mx-auto h-full flex items-center px-6 md:px-10 lg:px-16">
        
        {/* Text Content */}
        <div className="w-full lg:w-[65%] flex flex-col justify-center">
          
          <span className="block text-[#DCBC88] font-bold tracking-[0.18em] text-[14px] md:text-[20px] mb-4 uppercase">
            Now Available In-Store
          </span>

          <h1 className="font-bold text-[36px] md:text-[52px] lg:text-[64px] leading-[1.1] text-white mb-6 drop-shadow-lg">
            Now Available at<br />
            <span className="text-[#DCBC88]">Soul Foods</span> Store
          </h1>

          <p className="font-spartan font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[160%] text-white/90 mb-8 max-w-[700px]">
            Pick up our premium hydroponically grown greens — harvested hours before they reach the shelves — now at Soul Foods. Experience AI-optimized, pesticide-free freshness near you.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about-us#soul-foods-collection">
              <button className="bg-[#DCBC88] text-[#2b3d09] px-8 py-3 rounded-full text-[16px] md:text-[18px] font-bold hover:bg-white transition-all shadow-lg hover:scale-105">
                Explore Collection
              </button>
            </Link>
            <Link href="/our-produces">
              <button className="border border-[#DCBC88] text-[#DCBC88] px-8 py-3 rounded-full text-[16px] md:text-[18px] font-medium hover:bg-[#DCBC88] hover:text-[#2b3d09] transition-all">
                Our Produce
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider6;
