import React from 'react';
import Image from 'next/image';
import { League_Spartan, Open_Sans } from 'next/font/google';

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
});

// --- Component 1: Traceability Banner (Glass Effect) ---
const TraceabilityBanner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden font-spartan">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/traceability/trace-bg.png"
          alt="Traceability Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Glassmorphism Card 
         Updates to match previous sections:
         1. bg-[#1e3a1e]/30 with backdrop-blur-md (Consistent glass effect)
         2. rounded-[30px] (Consistent radius)
         3. border border-white/20 (Consistent edge)
         4. w-[95%] max-w-7xl (Consistent width)
         5. py-10 md:py-14 (Consistent vertical spacing)
      */}
      <div className="relative z-10 w-[95%] max-w-7xl bg-[#1e3a1e]/30 backdrop-blur-md rounded-[30px] flex flex-col items-center justify-center text-center px-6 py-10 md:py-14 shadow-2xl border border-white/20">
        
        <h1 className="text-white text-4xl md:text-[54px] font-bold leading-tight mb-2 drop-shadow-md">
          Traceability
        </h1>
        <p className="text-[#d4c596] text-lg md:text-[26px] font-bold tracking-wide drop-shadow-md mb-8 md:mb-10">
          Instant access to crop data in one scan
        </p>

        {/* Button moved INSIDE the glass container */}
        <button className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-lg py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95">
          Explore Our Produce
        </button>
      </div>

</div>
  );
};

// --- Component 2: Scan to Explore (Image Grid) ---
const ScanToExplore = () => {
  const images = [
    '/images/traceability/scan-1.png',
    '/images/traceability/scan-2.png',
    '/images/traceability/scan-3.png',
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 font-spartan">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl">
          <h2 className="text-[#3c5922] text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Scan to Explore the Crop Journey
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Enabling complete end-to-end visibility across every stage of the process.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 w-full px-2 md:px-0">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative w-full aspect-square md:aspect-[4/3] rounded-[20px] overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Image
                src={src}
                alt={`Crop journey step ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="max-w-5xl text-center">
          <p className="text-gray-700 text-base md:text-[19px] leading-relaxed md:leading-loose">
            Transparency is at the heart of Fresh From The Future. Each pack carries a Traceability QR Code that unlocks the full story of your greens; where they were grown, the seed used, when they were planted, transplanted, and harvested, how their health improved over time, and the positive environmental impact along the way.
          </p>
        </div>

      </div>
    </section>
  );
};

// --- Component 3: Unlock Transparency (Text Section) ---
// UPDATE: Increased padding to pb-48 (mobile) and pb-72 (desktop)
const UnlockTransparency = () => {
  return (
    <section className="w-full bg-white pb-48 md:pb-72 px-6 font-spartan">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
        
        {/* Top Block: Centered Heading & Subheading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[#3c5922] text-4xl md:text-5xl lg:text-[54px] font-bold mb-4 leading-tight">
            Unlock Full Crop Transparency
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            Scan the QR code to view the crop’s journey, health records, and verified farming data.
          </p>
        </div>

        {/* Bottom Block: Offset Layout (Empty Left, Text Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           {/* Left Column: Placeholder for spacing */}
           <div className="hidden md:block"></div> 

           {/* Right Column: Text Content */}
           <div className="text-center md:text-left">
              <h3 className="text-black text-2xl md:text-3xl font-bold mb-3 leading-tight">
                Your Crop Story in One Scan!
              </h3>
              <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
                Watch the full journey—from seed to harvest—with real-time health data and detailed insights.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};

// --- Component 4: Newsletter Section ---
const NewsletterSection = () => {
  return (
    <section className="w-full pb-20 px-6 font-spartan">
      <div className="max-w-[1440px] mx-auto relative rounded-[30px] overflow-hidden h-[316px] flex items-center justify-center">
          
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
              <Image 
                  src="/images/contact/subscribe-bg.png" 
                  alt="Newsletter Background" 
                  fill 
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-[#404A3D] opacity-50"></div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1250px] px-6 lg:px-16 gap-8">
              
              {/* Left Text */}
              <div className="text-center lg:text-left">
                  <h2 className="font-bold text-[36px] lg:text-[54px] text-white leading-[1.1] lg:leading-[60px] mb-1">
                      Subscribe to our newsletter
                  </h2>
                  <p className="font-normal text-[16px] lg:text-[20px] text-white leading-[34px]">
                      Stay in the loop — fresh updates delivered to your inbox.
                  </p>
              </div>

              {/* Right Input Group */}
              <div className="bg-white rounded-[62px] p-[5px] pl-8 flex w-full max-w-[600px] h-[75px] shadow-lg items-center">
                  <input 
                      type="email" 
                      placeholder="Email Address" 
                      className={`flex-grow bg-transparent text-[#1E1E1E] placeholder-[#ACACAC] ${openSans.variable} font-open-sans font-normal text-[20px] focus:outline-none`}
                  />
                  <button className={`bg-[#3D550C] text-white ${openSans.variable} font-open-sans font-semibold text-[20px] md:text-[24px] px-10 h-full rounded-[62px] hover:bg-[#2e3b09] transition-colors shadow-md`}>
                      Subscribe
                  </button>
              </div>

          </div>
      </div>
    </section>
  );
};

// --- Final Page Export ---
export default function TraceabilityPage() {
  return (
    <main className={`flex flex-col w-full min-h-screen bg-white ${spartan.variable} ${openSans.variable}`}>
      <TraceabilityBanner />
      <ScanToExplore />
      <UnlockTransparency />
      <NewsletterSection />
    </main>
  );
}