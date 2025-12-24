import React from 'react';
import { League_Spartan } from 'next/font/google';
import Link from 'next/link';

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-spartan',
});

const Slider5: React.FC = () => {
  return (
    <div className={`${spartan.variable} font-sans`}>
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/slider/slider5-bg.png')",
          }}
        >
          {/* Light overlay if needed */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        {/* Content Container - Aligned Top-Right */}
        <div className="relative z-10 flex h-full items-start justify-end pt-20 md:pt-32 px-4 sm:px-6 lg:px-16 xl:px-24">
          
          {/* Text & Button Wrapper */}
          {/* CHANGED: Removed 'max-w-xl' so the text isn't forced to wrap */}
          <div className="flex flex-col items-center text-center lg:mr-20"> 
            
            {/* Main Heading */}
            {/* CHANGED: Added 'whitespace-nowrap' to force single line */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wide whitespace-nowrap"
              style={{ 
                color: '#4A5D23', 
                fontFamily: 'var(--font-spartan)',
                textShadow: '0px 2px 4px rgba(255,255,255,0.5)' 
              }}
            >
              Tap. Scan. Discover.
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

export default Slider5;