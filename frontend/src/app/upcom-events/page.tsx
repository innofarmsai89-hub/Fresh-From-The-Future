import React from 'react';
import Image from 'next/image';
import { League_Spartan } from 'next/font/google';

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan',
});

// --- Data for Event Images ---
const eventImages = [
  '/images/upcom/f-1.png',
  '/images/upcom/f-2.png',
  '/images/upcom/f-3.png',
];

const UpcomingEventsPage = () => {
  return (
    <main className={`w-full min-h-screen bg-white ${spartan.variable} font-spartan`}>
      
      {/* --- Section 1: Hero Banner --- */}
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/upcom/bg.png" // Purple flowers background
            alt="Upcoming Events Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Glassmorphism Card */}
        <div className="relative z-10 w-[95%] max-w-[1280px] rounded-[20px] overflow-hidden shadow-xl">
          
          {/* Blur/Gradient Layer */}
          {/* Using a dark green/neutral gradient to ensure text readability over the colorful background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c1a]/85 via-[#2f4f2f]/75 to-[#1a3c1a]/85 backdrop-blur-md"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center py-16 md:py-20 px-4">
            <h1 className="text-white text-4xl md:text-[64px] font-bold leading-tight mb-2 drop-shadow-md">
              Upcoming Events
            </h1>
            <p className="text-[#d4c596] text-lg md:text-[32px] font-bold tracking-wide drop-shadow-md mt-2">
              Stay Inspired, Join the Experience
            </p>
          </div>
        </div>

        {/* Floating CTA Button */}
        <div className="absolute z-30 bottom-[15%] md:bottom-[20%]">
          <button className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-xl py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95">
            Explore Our Produce
          </button>
        </div>
      </div>

      {/* --- Section 2: Content Body --- */}
      <section className="w-full bg-white py-16 md:py-24 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
          
          {/* Coming Soon Block */}
          <div className="mb-16 md:mb-24 space-y-4">
            <h2 className="text-[#3c5922] text-4xl md:text-[54px] font-bold">
              Coming soon!
            </h2>
            <p className="text-[#4A4A4A] text-lg md:text-xl font-medium">
              Stay tuned for the official announcement of the event date and time.
            </p>
          </div>

          {/* Chef Circle Header */}
          <div className="mb-12 space-y-2">
            <h2 className="text-[#3c5922] text-3xl md:text-[48px] font-bold leading-tight">
              Fresh From The Future – Chef Circle
            </h2>
            <p className="text-[#4A4A4A] text-lg md:text-xl font-medium">
              Experience, Learn, and Celebrate Culinary Moments
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-12">
            {eventImages.map((src, index) => (
              <div key={index} className="relative w-full h-[250px] md:h-[350px] rounded-[24px] overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Chef Event ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Description Text */}
          <div className="max-w-5xl mx-auto">
            <p className="text-[#4A4A4A] text-base md:text-[18px] leading-relaxed md:leading-loose">
              We’re building a community where chefs can meet, learn, taste, and innovate together. 
              <span className="font-bold text-black"> Chef Circle</span> is our monthly chef-only meetup designed to introduce our premium hydroponic greens while encouraging open conversations around flavour, sustainability, and kitchen needs. Think of it as a creative space where chefs connect—and fresh ideas grow.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default UpcomingEventsPage;