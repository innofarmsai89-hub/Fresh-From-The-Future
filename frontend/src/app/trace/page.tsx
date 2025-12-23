'use client'; // Required for useState/useRef

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { League_Spartan, Open_Sans } from 'next/font/google';
import SubscriptionBanner from '@/components/SubscriptionBanner';

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

  {/* Glassmorphism Card */}
  <div 
    className="relative z-10 w-[95%] max-w-[1280px] rounded-[30px] flex flex-col items-center justify-center text-center py-12 md:py-14 px-4 shadow-xl"
    style={{
      background: `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)`,
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      backgroundBlendMode: 'overlay, normal',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}
  >
    {/* Content */}
    <h1 className="text-white text-4xl md:text-[54px] font-bold leading-tight mb-2 drop-shadow-md">
      Traceability
    </h1>
    <p className="text-[#d4c596] text-lg md:text-[26px] font-bold tracking-wide drop-shadow-md">
      Instant access to crop data in one scan
    </p>
  </div>

  {/* Floating CTA Button */}
  <div className="absolute z-30 bottom-[15%] md:bottom-[20%]">
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
        
        <div className="text-center mb-12 max-w-4xl">
          <h2 className="text-[#3c5922] text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Scan to Explore the Crop Journey
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Enabling complete end-to-end visibility across every stage of the process.
          </p>
        </div>

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

        <div className="max-w-5xl text-center">
          <p className="text-gray-700 text-base md:text-[19px] leading-relaxed md:leading-loose">
            Transparency is at the heart of Fresh From The Future. Each pack carries a Traceability QR Code that unlocks the full story of your greens; where they were grown, the seed used, when they were planted, transplanted, and harvested, how their health improved over time, and the positive environmental impact along the way.
          </p>
        </div>

      </div>
    </section>
  );
};

// --- Component 3: Unlock Transparency (Video with Play/Pause) ---
const UnlockTransparency = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Initial Autoplay Setup
  useEffect(() => {
    if (videoRef.current) {
      // Browsers require muted=true for autoplay
      videoRef.current.muted = true; 
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented by browser:", error);
          setIsPlaying(false);
        });
      }
    }
  }, []);

  // Handle Play/Pause Toggle
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full bg-white py-20 md:py-32 px-6 font-spartan">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[#3c5922] text-3xl md:text-5xl lg:text-[54px] font-bold mb-6 leading-tight">
            Unlock Full Crop Transparency
          </h2>
          <p className="text-gray-600 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Scan the QR code to view the crop’s journey, health records, and verified farming data.
          </p>
        </div>

        {/* Content Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
           
           {/* Left: Phone Mockup */}
           <div className="flex justify-center md:justify-end">
             {/* Phone Container */}
             <div 
               className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-black rounded-[3rem] border-[8px] md:border-[12px] border-black shadow-2xl overflow-hidden ring-1 ring-gray-900/10 cursor-pointer group"
               onClick={togglePlay}
             >
                {/* Video Element */}
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-[2.2rem]"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/images/traceability/DemoVideo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>

                {/* --- Play/Pause Overlay --- */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  
                  {/* Show PLAY button if paused */}
                  {!isPlaying && (
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-full border border-white/30 transition-all transform scale-100 opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}

                  {/* Show PAUSE button on Hover ONLY if playing */}
                  {isPlaying && (
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-full border border-white/30 transition-all transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-32 bg-black rounded-b-2xl z-10 pointer-events-none"></div>
             </div>
           </div> 

           {/* Right: Text */}
           <div className="text-center md:text-left">
              <h3 className="text-black text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Your Crop Story in One Scan!
              </h3>
              <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
                Watch the full journey—from seed to harvest—with real-time health data and detailed insights.
              </p>
              
              {/* Optional: Status Text */}
              <p className="text-sm text-[#3c5922] font-bold uppercase tracking-widest opacity-80">
                {isPlaying ? "▶ Now Playing" : "⏸ Video Paused"}
              </p>
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
      <div className="px-4 md:px-8 pb-12">
        <SubscriptionBanner />
      </div>
    </main>
  );
}