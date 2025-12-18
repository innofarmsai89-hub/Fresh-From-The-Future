"use client"; // <--- THIS LINE FIXES THE RUNTIME ERROR

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

// --- Component 1: Subscription Banner ---
const SubscriptionBanner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden font-spartan">
      <div className="absolute inset-0 z-0">
        <img
          src="images/subscription/subs-bg.png"
          alt="Fresh arugula leaves background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 w-[90%] max-w-5xl rounded-[30px] overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c1a]/85 via-[#2f5e32]/75 to-[#1a3c1a]/85 backdrop-blur-md"></div>
        <div className="relative z-20 px-6 py-16 md:py-24 flex flex-col items-center text-center space-y-2">
          <h1 className="text-white text-4xl md:text-[48px] font-bold leading-none tracking-normal drop-shadow-sm">
            Subscription
          </h1>
          <p className="text-[#d4c596] text-xl md:text-3xl font-bold tracking-wide drop-shadow-sm">
            Be part of something exciting.
          </p>
        </div>
      </div>
      <div className="absolute z-30 bottom-[20%] md:bottom-[28%]">
        <button className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-base py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95">
          Explore Our Produce
        </button>
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

  // Helper to open WhatsApp
  const handleEnquire = (planTitle: string) => {
    const phoneNumber = '919220309252'; 
    
    // Multi-line message using template literals
    const text = `Hi, I’m really impressed with Fresh From the Future’s products and the technology you use to grow them. I’m interested in the ${planTitle} and would love to know more details.`;

    // encodeURIComponent handles the new lines and special characters automatically
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 font-spartan">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-[#3c5922] text-4xl md:text-5xl font-bold mb-4">
            Flexible Subscription Plans
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            We offer flexible subscription options — designed for kitchen efficiency & menu consistency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-[#efe5d3] rounded-2xl p-8 shadow-md flex flex-col items-center justify-center min-h-[220px] transition-transform hover:-translate-y-1"
            >
              <h3 className="text-[#3c5922] text-3xl md:text-4xl font-bold leading-tight">
                {plan.title}
              </h3>
              <p className="text-[#3c5922] text-xl md:text-2xl font-medium mb-8">
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
        <div className="text-left md:text-center text-gray-700 space-y-6 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
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
    <section className="w-full bg-white py-16 px-4 md:px-8 font-spartan border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[#3c5922] text-4xl md:text-5xl font-bold mb-3">
            Subscription Form
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Complete the form and get access to your chosen plan instantly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end">
            <img 
              src="images/subscription/laptop.png" 
              alt="Laptop displaying subscription form" 
              className="w-full max-w-md md:max-w-lg object-contain drop-shadow-xl"
            />
          </div>
          <div className="text-left space-y-6">
            <h3 className="text-black text-3xl md:text-4xl font-bold leading-tight">
              Subscribe to the Future of Possibilities
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Click the link below to open the subscription form.
              <br />
              Fill in your details, submit, and your journey with us begins.
            </p>
            <div className="pt-2">
              <Link 
                href="https://forms.gle/m85z2D9wJxeB7b9N6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-bold text-lg underline decoration-2 underline-offset-4 hover:text-[#3c5922] transition-colors break-all"
              >
                https://forms.gle/m85z2D9wJxeB7b9N6
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Component 4: Newsletter Section ---
const NewsletterSection = () => {
  return (
    <section className="w-full pb-20 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto relative rounded-[30px] overflow-hidden h-[316px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
              <Image 
                  src="/images/contact/subscribe-bg.png" 
                  alt="Newsletter Background" 
                  fill 
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-[#404A3D] opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1250px] px-6 lg:px-16 gap-8">
              <div className="text-center lg:text-left">
                  <h2 className="font-spartan font-bold text-[36px] lg:text-[54px] text-white leading-[1.1] lg:leading-[60px] mb-1">
                      Subscribe to our newsletter
                  </h2>
                  <p className="font-spartan font-normal text-[16px] lg:text-[20px] text-white leading-[34px]">
                      Stay in the loop — fresh updates delivered to your inbox.
                  </p>
              </div>
              <div className="bg-white rounded-[62px] p-[5px] pl-8 flex w-full max-w-[600px] h-[75px] shadow-lg items-center">
                  <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="flex-grow bg-transparent text-[#1E1E1E] placeholder-[#ACACAC] font-open-sans font-normal text-[20px] focus:outline-none"
                  />
                  <button className="bg-[#3D550C] text-white font-open-sans font-semibold text-[20px] md:text-[24px] px-10 h-full rounded-[62px] hover:bg-[#2e3b09] transition-colors shadow-md">
                      Subscribe
                  </button>
              </div>
          </div>
      </div>
    </section>
  );
};

// --- Final Page Export ---
export default function SubscriptionPage() {
  return (
    <main className={`flex flex-col w-full min-h-screen bg-white ${spartan.variable} ${openSans.variable}`}>
      <SubscriptionBanner />
      <SubscriptionPlans />
      <SubscriptionForm />
      <NewsletterSection />
    </main>
  );
}