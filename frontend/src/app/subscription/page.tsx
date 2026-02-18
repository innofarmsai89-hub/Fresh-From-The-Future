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

const IMAGE_BASE_URL = "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture";

const getImageUrl = (path: string) => {
  if (!path) return path;
  if (path.startsWith("/images/")) {
    const cleanedPath = path.replace("/images", "");
    return `${IMAGE_BASE_URL}${cleanedPath}`;
  }
  return path;
};

// --- Component 1: Subscription Banner (Hero) ---
const Subscription = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex flex-col items-center justify-center overflow-hidden font-spartan gap-8">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImageUrl("/images/subscription/subs-bg.png")}
          alt="Fresh arugula leaves background"
          fill
          priority 
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

      {/* Button */}
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
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-[#3c5922] text-3xl md:text-5xl font-bold mb-4">
            Flexible Subscription Plans
          </h2>
          <p className="text-gray-600 text-base md:text-xl font-medium max-w-3xl mx-auto px-4 leading-relaxed">
            We offer flexible subscription options — designed for kitchen efficiency & menu consistency.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-24 text-center">
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

        {/* Bottom Description */}
        <div className="text-left text-gray-700 space-y-6 text-base md:text-lg leading-relaxed w-full">
          <p>
            Click Enquire Now or reach out to us directly via Call or WhatsApp to understand which subscription plan suits your needs. Our executive will assess your requirements and recommend the best plan for you.
          </p>
          <p>
            Once you've finalized the plan, simply fill out the subscription form below to proceed with your order.
            We harvest your produce on the same day of delivery, ensuring you receive the freshest greens every time.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Component 3: Subscription Form (UPDATED WITH BUTTON) ---
const SubscriptionForm = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-spartan border-t border-gray-100">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-[#3c5922] text-4xl md:text-[54px] font-bold leading-tight">
            Subscription Form
          </h2>
          <p className="text-[#4A4A4A] text-lg md:text-[22px] font-normal">
            Complete the form and get access to your chosen plan instantly.
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Left: Laptop Image */}
          <div className="relative w-full flex justify-center md:justify-end">
            <div className="relative w-full max-w-[650px] aspect-[4/3]">
                <Image 
                  src={getImageUrl("/images/subscription/laptop.png")}
                  alt="Subscription Form on Laptop" 
                  fill
                  className="object-contain drop-shadow-2xl" 
                />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col items-start text-left space-y-6">
            <h3 className="text-black text-3xl md:text-[42px] font-bold leading-[1.2]">
              Subscribe to the Future of Possibilities
            </h3>
            
            <div className="space-y-6 text-[#2D2D2D] text-lg md:text-[20px] leading-relaxed font-normal">
              <p>
                Click the link below to open the subscription form.
                <br className="hidden lg:block" />
                Fill in your details, submit, and your journey with us begins.
              </p>
              
              {/* Button Link */}
              <div className="block pt-2">
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
      </div>
    </section>
  );
};

// --- Component 4: Subscription Banner ---
const SubscriptionBanner = () => {
  return (
    <div 
      className={`
        w-full relative rounded-[20px] md:rounded-[30px] overflow-hidden 
        min-h-[220px] md:h-[260px] 
        flex items-center 
        group cursor-pointer shadow-lg 
        bg-[#404A3D] font-spartan
      `}
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
            src={getImageUrl("/images/contact/subscribe-bg.png")}
            alt="Subscription Background" 
            fill 
            className="object-cover" 
        />
        <div className="absolute inset-0 bg-[#8e946c] opacity-85 mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-4 sm:px-6 md:px-16 py-8 md:py-0 gap-6 md:gap-12">
        
        {/* Icon Circle */}
        <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-[#d8bc8f] rounded-full flex items-center justify-center shrink-0 shadow-md border border-[#c5a675] transition-transform duration-300 group-hover:scale-105">
            <div className="relative w-[45px] h-[45px] md:w-[64px] md:h-[64px]">
                <Image 
                    src={getImageUrl("/images/home/Vector.png")}
                    alt="Hand with plant icon" 
                    fill 
                    className="object-contain"
                />
            </div>
        </div>

        {/* White Button / Link */}
        <Link href="/subscription" className="w-full sm:w-auto z-20 flex justify-center">
            <div 
              className="
                bg-white 
                w-full sm:w-auto max-w-[90%] md:max-w-none
                min-h-[70px] md:h-[130px] 
                rounded-[20px] md:rounded-[30px] 
                flex items-center justify-center 
                px-6 py-4 md:px-16 lg:px-24 
                shadow-2xl transition-transform duration-300 hover:scale-[1.02]
              "
            >
                <span 
                  className="
                    font-bold 
                    text-[18px] sm:text-[22px] md:text-[30px] lg:text-[40px] 
                    text-[#3D550C] text-center 
                    leading-tight md:leading-normal
                    whitespace-normal md:whitespace-nowrap
                  "
                >
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
      
      {/* Banner Container */}
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 pb-12 mt-12 mb-12">
        <SubscriptionBanner />
      </div>
    </main>
  );
}