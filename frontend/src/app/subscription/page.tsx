"use client";
import React from 'react';
import Link from 'next/link';
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

// --- Component 1: Subscription Banner (Hero) ---
const Subscription = () => {
  return (
    // Added flex-col and gap-8 to stack card and button
    <div className="relative w-full h-[400px] md:h-[500px] flex flex-col items-center justify-center overflow-hidden font-spartan gap-8">
      
      {/* Background Image - Converted to Next/Image with 'fill' */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/subscription/subs-bg.png" // Added leading slash
          alt="Fresh arugula leaves background"
          fill
          priority // Loads this image immediately as it's above the fold
          className="object-cover"
        />
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-[95%] max-w-7xl bg-[#1e3a1e]/30 backdrop-blur-md rounded-[30px] flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 shadow-2xl border border-white/20">
        
        <h1 className="text-white text-3xl md:text-[48px] font-bold leading-none tracking-normal drop-shadow-sm mb-4">
          Subscription
        </h1>
        
        <p className="text-[#d4c596] text-lg md:text-3xl font-bold tracking-wide drop-shadow-sm">
          Be part of something exciting.
        </p>
        
      </div>

      {/* Button - MOVED OUTSIDE THE CARD */}
      <div className="relative z-10">
        <Link href="/our-produces">
          <button className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-base py-3 px-8 md:px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95">
            Explore Our Produce
          </button>
        </Link>
      </div>

    </div>
  );
};

// --- Component 2: Subscription Plans ---
const SubscriptionPlans = () => {
  const plans = [
    { title: 'Trial Plan', duration: '2-4 Weeks' },
    { title: 'Starter Plan', duration: '3 Months' },
    { title: 'Pro Plan', duration: '6 Months' },
  ];

  const handleEnquire = (planTitle: string) => {
    const phoneNumber = '919220309252';
    const text = `Hi, I’m really impressed with Fresh From the Future’s products and the technology you use to grow them. I’m interested in the ${planTitle} and would love to know more details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 font-spartan">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12 md:mb-20">
          <h2 className="text-[#3c5922] text-3xl md:text-5xl font-bold mb-4">
            Flexible Subscription Plans
          </h2>
          <p className="text-gray-600 text-base md:text-xl font-medium max-w-3xl mx-auto px-4 leading-relaxed">
            We offer flexible subscription options — designed for kitchen efficiency & menu consistency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-24">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-[#efe5d3] rounded-2xl p-8 md:p-10 shadow-md flex flex-col items-center justify-center min-h-[240px] transition-transform hover:-translate-y-1"
            >
              <h3 className="text-[#3c5922] text-2xl md:text-4xl font-bold leading-tight mb-2">
                {plan.title}
              </h3>
              <p className="text-[#3c5922] text-lg md:text-2xl font-medium mb-8">
                {plan.duration}
              </p>
              <button 
                onClick={() => handleEnquire(plan.title)}
                className="bg-[#3c5922] hover:bg-[#2a4016] text-white text-lg font-bold py-3 px-10 rounded-full shadow transition-colors w-full max-w-[200px]"
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-left md:text-center text-gray-700 space-y-6 text-base md:text-lg leading-relaxed max-w-4xl mx-auto px-2">
          <p>
            Click Enquire Now or reach out to us directly via Call or WhatsApp to understand which subscription plan suits your needs. Our executive will assess your requirements and recommend the best plan for you.
          </p>
          <p>
            Once you've finalized the plan, simply fill out the subscription form below to proceed with your order.<br className="hidden md:block" />
            We harvest your produce on the same day of delivery, ensuring you receive the freshest greens every time.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Component 3: Subscription Form ---
const SubscriptionForm = () => {
  return (
    <section className="w-full bg-white pt-16 md:pt-24 pb-12 md:pb-20 px-4 md:px-8 font-spartan border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[#3c5922] text-3xl md:text-5xl font-bold mb-3">
            Subscription Form
          </h2>
          <p className="text-gray-600 text-base md:text-xl font-medium px-2">
            Complete the form and get access to your chosen plan instantly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex justify-center md:justify-end">
            {/* Converted to Next/Image for better handling */}
            <Image 
              src="/images/subscription/laptop.png" // Added leading slash
              alt="Laptop displaying subscription form" 
              width={600} // Provide rough dimensions for aspect ratio
              height={450} 
              className="w-full max-w-md md:max-w-lg object-contain drop-shadow-xl"
            />
          </div>
          <div className="text-left space-y-6 md:pl-4">
            <h3 className="text-black text-2xl md:text-4xl font-bold leading-tight">
              Subscribe to the Future of Possibilities
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Click the link below to open the subscription form.
              <br />
              Fill in your details, submit, and your journey with us begins.
            </p>
            <div className="pt-2">
              <Link 
                href="https://forms.gle/m85z2D9wJxeB7b9N6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#3c5922] hover:bg-[#2e4a1a] text-white font-bold text-base md:text-lg py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Fill the Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Component 4: Subscription Banner (Local) ---
const SubscriptionBanner = () => {
  return (
    <div className="w-full relative rounded-[30px] overflow-hidden h-[260px] flex items-center group cursor-pointer shadow-lg mt-12 mb-12 max-w-[1440px] mx-auto bg-[#404A3D] font-spartan">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
            src="/images/contact/subscribe-bg.png" // Ensure this exists in public/images/contact/
            alt="Subscription Background" 
            fill 
            className="object-cover" 
        />
        <div className="absolute inset-0 bg-[#8e946c] opacity-85 mix-blend-multiply"></div>
      </div>

      {/* Content Container - Justify Center */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 gap-6 md:gap-12">
        
        {/* Icon Circle */}
        <div className="w-[64px] h-[64px] md:w-[120px] md:h-[120px] bg-[#d8bc8f] rounded-full flex items-center justify-center shrink-0 shadow-md border border-[#c5a675]">
            <div className="relative w-[40px] h-[40px] md:w-[64px] md:h-[64px]">
                <Image 
                    src="/images/home/Vector.png" // Ensure this exists in public/images/home/
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

// --- Final Page Export ---
export default function SubscriptionPage() {
  return (
    <main className={`flex flex-col w-full min-h-screen bg-white ${spartan.variable} ${openSans.variable}`}>
      <Subscription />
      <SubscriptionPlans />
      <SubscriptionForm />
      
      <div className="px-4 md:px-8 pb-12">
        <SubscriptionBanner />
      </div>
    </main>
  );
}