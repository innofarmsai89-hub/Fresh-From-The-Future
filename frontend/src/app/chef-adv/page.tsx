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

// --- Component: Join Council Content (Adjusted Sizes) ---
const JoinCouncilContent = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 1. Main Header */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-[#3c5922] text-4xl md:text-[64px] font-bold mb-4 leading-[1.1]">
            Join Our Chef Advisory Council
          </h2>
          <p className="text-gray-600 text-lg md:text-[24px] font-medium">
            Collaborate, Innovate, and Elevate Culinary Excellence
          </p>
        </div>

        {/* 2. Split Layout: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-32">
          
          {/* Left Column: Text */}
          <div className="text-left space-y-8">
            <h3 className="text-[#3c5922] text-3xl md:text-[54px] font-bold leading-[1.1]">
              Community of culinary experts
            </h3>
            <div className="text-[#1E1E1E] text-base md:text-[20px] leading-[34px] font-medium space-y-8">
              <p>
                Become a part of our Chef Advisory Council, a vibrant community of
                culinary experts dedicated to shaping the future of flavors. Share your
                unique insights, influence the creation of innovative products, and
                collaborate with fellow chefs to inspire kitchens everywhere.
              </p>
              <p>
                Together, we drive culinary excellence, spark new ideas, and elevate
                the art of cooking for chefs and food lovers alike.
              </p>
            </div>
          </div>

          {/* Right Column: Chefs Image */}
          {/* Adjusted height to be more substantial relative to text */}
          <div className="relative w-full h-[400px] md:h-[600px] rounded-[30px] overflow-hidden shadow-xl">
            <Image
              src="/images/chef-adv/comm.png" 
              alt="Chefs collaborating in a kitchen"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 3. Bottom Section: Become a Member */}
        <div className="text-center max-w-5xl mx-auto space-y-8">
          <h3 className="text-[#3c5922] text-3xl md:text-[54px] font-bold leading-tight">
            Become a Council Member
          </h3>
          
          <div className="space-y-6">
             <p className="text-[#4A4A4A] text-lg md:text-[22px] font-medium">
               Fill out the form below and share your culinary expertise with us.
             </p>
             
             <p className="text-[#1E1E1E] text-base md:text-[20px] leading-[32px] max-w-4xl mx-auto">
                Fill out the form below to apply and become a valued member of our Chef Advisory Council. Share your expertise and help us create extraordinary culinary experiences together.
             </p>
             
             {/* Link */}
             <div className="pt-6">
                <Link 
                    href="https://forms.gle/Mu3SSRhR8trpMGxQ6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black font-bold text-xl md:text-[24px] underline decoration-2 underline-offset-8 hover:text-[#3c5922] transition-colors break-all"
                >
                    https://forms.gle/Mu3SSRhR8trpMGxQ6
                </Link>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Main Page Component ---
const ChefAdvisoryCouncilPage = () => {
  return (
    <main className={`w-full min-h-screen bg-white ${spartan.variable} font-spartan`}>
      
      {/* --- Section 1: Banner --- */}
      <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chef-adv/chef-adv-bg.png"
            alt="Chef Advisory Council Background"
            fill
            className="object-cover"
            priority
          />
        </div>

<<<<<<< HEAD
        {/* Glassmorphism Card 
           Updates to match "Traceability" & "Chef Mixes":
           1. bg-[#1e3a1e]/30 with backdrop-blur-md
           2. rounded-[30px] & border border-white/20
           3. w-[95%] max-w-7xl
           4. py-10 md:py-14
           5. Flex column layout to contain the button
        */}
        <div className="relative z-10 w-[95%] max-w-7xl bg-[#1e3a1e]/30 backdrop-blur-md rounded-[30px] flex flex-col items-center justify-center text-center px-6 py-10 md:py-14 shadow-2xl border border-white/20">
          
          <h1 className="text-white text-4xl md:text-[64px] font-bold leading-tight mb-2 drop-shadow-md">
            Chef Advisory Council
          </h1>
          <p className="text-[#d4c596] text-lg md:text-[32px] font-bold tracking-wide drop-shadow-md mb-8 md:mb-10 mt-2">
            Expert Guidance, Inspiring Culinary Excellence
          </p>

          {/* CTA Button moved INSIDE the glass container */}
=======
        {/* Glassmorphism Card */}
        <div className="relative z-10 w-[95%] max-w-[1280px] rounded-[20px] overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c1a]/85 via-[#3A5A30]/75 to-[#1a3c1a]/85 backdrop-blur-md"></div>
          <div className="relative z-20 flex flex-col items-center justify-center text-center py-16 md:py-20 px-4">
            <h1 className="text-white text-4xl md:text-[64px] font-bold leading-tight mb-2 drop-shadow-md">
              Chef Advisory Council
            </h1>
            <p className="text-[#d4c596] text-lg md:text-[32px] font-bold tracking-wide drop-shadow-md mt-2">
              Expert Guidance, Inspiring Culinary Excellence
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="absolute z-30 bottom-[12%] md:bottom-[18%]">
>>>>>>> origin/main
          <button className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-xl py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95">
            Explore Our Produce
          </button>
        </div>
<<<<<<< HEAD

=======
>>>>>>> origin/main
      </div>

      {/* --- Section 2: Join Council Content --- */}
      <JoinCouncilContent />

    </main>
  );
};

export default ChefAdvisoryCouncilPage;