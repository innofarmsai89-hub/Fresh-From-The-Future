import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { League_Spartan } from 'next/font/google';

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan',
});

const IMAGE_BASE_URL = "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture";

const getImageUrl = (path: string) => {
  if (!path) return path;
  if (path.startsWith("/images/")) {
    const cleanedPath = path.replace("/images", "");
    return `${IMAGE_BASE_URL}${cleanedPath}`;
  }
  return path;
};

// --- Data for Event Images ---
const eventImages = [
  getImageUrl('/images/upcom/f-1.png'),
  getImageUrl('/images/upcom/f-2.png'),
  getImageUrl('/images/upcom/f-3.png'),
];

const UpcomingEventsPage = () => {
  return (
    <main className={`w-full min-h-screen bg-white ${spartan.variable} font-spartan`}>
      
      {/* --- Section 1: Hero Banner (Glassmorphism Applied) --- */}
      {/* Update: Added flex-col and gap-8 to stack card and button */}
      <div className="relative w-full h-[400px] md:h-[500px] flex flex-col items-center justify-center overflow-hidden gap-8">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl("/images/upcom/bg.png")} // Purple flowers background
            alt="Upcoming Events Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Glassmorphism Card 
            Styles: bg-[#1e3a1e]/30, backdrop-blur-md, border border-white/20
        */}
        <div className="relative z-10 w-[95%] max-w-7xl bg-[#1e3a1e]/30 backdrop-blur-md rounded-[30px] flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 shadow-2xl border border-white/20">
          
          <h1 className="text-white text-3xl md:text-[64px] font-bold leading-tight mb-4 drop-shadow-md">
            Upcoming Events
          </h1>
          
          <p className="text-[#d4c596] text-lg md:text-[32px] font-bold tracking-wide drop-shadow-md">
            Stay Inspired, Join the Experience
          </p>

        </div>

        {/* Button - MOVED OUTSIDE THE CARD */}
        <div className="relative z-10">
          <Link href="/our-produces">
            <button className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-xl py-3 px-8 md:px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95">
              Explore Our Produce
            </button>
          </Link>
        </div>
        
      </div>

      {/* --- Section 2: Content Body --- */}
      <section className="w-full bg-white py-16 md:py-24 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
          
          {/* --- New Events Layout --- */}
          <div className="w-full space-y-20 mb-20">
            
            {/* Upcoming Events Section */}
            <div className="space-y-12">
              <div className="inline-block px-6 py-2 bg-[#3c5922] rounded-full">
                <h2 className="text-white text-xl md:text-2xl font-bold uppercase tracking-widest">
                  Upcoming Event
                </h2>
              </div>

              <div className="flex flex-col md:flex-row bg-[#FFF9F1] rounded-[30px] overflow-hidden shadow-xl border border-[#F9C06A]/30">
                <div className="w-full md:w-[60%] relative h-[600px] md:h-[900px] overflow-hidden bg-[#fafafa]">
                  <Image
                    src="/images/LaMarche.jpeg"
                    alt="Le Marche Event"
                    fill
                    className="object-contain transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-[40%] p-8 md:p-12 text-left flex flex-col justify-center space-y-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-[#3c5922] text-3xl md:text-4xl font-bold leading-tight">
                        Soft Launch at Le Marche
                      </h3>
                      <p className="text-[#E3572B] font-bold text-lg">
                        📅 28th March 2026 | 🕔 5:00 PM – 7:00 PM
                      </p>
                    </div>
                    
                    <p className="text-[#4A4A4A] text-lg leading-relaxed">
                      Fresh From The Future invite you to an exclusive Soft Launch of beyond organic exotic fresh leafy greens & microgreens at Le Marche.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-3">
                      <p className="font-bold text-[#1E1E1E]">What awaits you:</p>
                      <ul className="list-disc list-inside text-[#4A4A4A] space-y-1 ml-2">
                        <li>Chef-led tasting & advocacy session</li>
                        <li>Discover our story & benefits, and experience beyond organic exotic greens—crafted for conscious living</li>
                      </ul>
                    </div>

                    <p className="text-[#1E1E1E] font-medium flex items-center gap-2 text-sm md:text-base">
                      📍 Le Marche, South Point Mall, Golf Course Road, Gurugram
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <button className="bg-[#3c5922] text-white px-10 py-3 rounded-full font-bold hover:bg-[#2d431a] transition-all transform hover:scale-105 shadow-md">
                      Kindly RSVP
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Events Section */}
            <div className="space-y-12">
              <div className="inline-block px-6 py-2 bg-gray-500 rounded-full">
                <h2 className="text-white text-xl md:text-2xl font-bold uppercase tracking-widest">
                  Past Event
                </h2>
              </div>

              <div className="flex flex-col md:flex-row-reverse bg-gray-50 rounded-[30px] overflow-hidden shadow-lg border border-gray-200 grayscale-[0.3] opacity-90 overflow-hidden">
                <div className="w-full md:w-[60%] relative h-[600px] md:h-[900px] bg-white">
                  <Image
                    src="/images/soulFoods.jpeg"
                    alt="Soul Foods Retail Event"
                    fill
                    className="object-contain transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-[40%] p-8 md:p-12 text-left flex flex-col justify-center space-y-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-gray-700 text-3xl md:text-4xl font-bold leading-tight">
                        Soft Launch at Soul Foods Retail
                      </h3>
                      <p className="text-gray-500 font-bold text-lg">
                        📅 21st March 2026 | 🕔 5:00 PM – 7:00 PM
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Fresh From The Future invite you to an exclusive Soft Launch of beyond organic exotic fresh leafy greens at Soul Foods Retail.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-3">
                      <p className="font-bold text-gray-700">What happened:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                        <li>Chef-led tasting & advocacy session</li>
                        <li>Discover our story & benefits, and experience beyond organic exotic greens—crafted for conscious living</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 font-medium text-sm md:text-base">
                      📍 Soul Foods Retail Store
                    </p>
                  </div>
                </div>
              </div>
            </div>

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