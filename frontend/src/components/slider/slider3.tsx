import React from 'react';
import { League_Spartan } from 'next/font/google';
import Link from 'next/link';

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-spartan',
});

const Slider3: React.FC = () => {
  return (
    <div className={`${spartan.variable} font-sans`}>
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/slider/slider3-bg.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex h-full items-center justify-end px-4 sm:px-6 lg:px-16 xl:px-24">
          
          {/* Text & Button Wrapper - Centered Content, Positioned Right */}
          <div className="flex flex-col items-center text-center max-w-2xl mt-[-5%]"> {/* Added negative margin to pull slightly up away from salad if needed */}
            
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              style={{ 
                fontFamily: 'var(--font-spartan)',
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
              }}
            >
              Harvesting
            </h1>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
              style={{ 
                fontFamily: 'var(--font-spartan)',
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
              }}
            >
              Excellence Together
            </h1>

            {/* Call-to-Action Button */}
            <Link
              href="/our-produces"
              className="bg-white text-[#4A5D23] font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base sm:text-lg inline-block"
              style={{ fontFamily: 'var(--font-spartan)' }}
            >
              Explore Our Produce
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Slider3;