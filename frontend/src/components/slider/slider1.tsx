import Image from "next/image";
import Link from "next/link";
import React from "react";

const Slider1 = () => {
  return (
    // CHANGED: Height is now h-[80vh] to match Slider2
    // Added min-h-[600px] to ensure content fits on short screens (laptops)
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-bg.png"
          alt="Background Texture"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/25 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[95%] 2xl:max-w-[1800px] mx-auto h-full flex items-center justify-between px-6 md:px-10 lg:px-16">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          
          <span className="block text-[#DCBC88] font-bold tracking-[0.18em] text-[16px] md:text-[32px] mb-3 uppercase">
            Beyond Organic•Traceable•Hyper-Local
          </span>

          <h1 className="font-bold text-[36px] md:text-[48px] lg:text-[54px] leading-[1.15] text-white mb-4">
            India’s First Premium Culinary Innovation Brand.
          </h1>

          <p className="font-spartan font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[160%] text-white/90 mb-6 max-w-[800px]">
            Ultra-premium, chef-focused, AI-powered & traceable fresh produce —
            grown under UAE/Singapore-grade precision farming technology by{" "}
            <span className="font-bold text-white">INNOFarms.AI</span>. Perfect
            for chefs, hoteliers, restaurateurs, and premium buyers who demand
            uncompromising quality and refined culinary excellence.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://wa.me/919220309252?text=Hello,%20I%20would%20like%20to%20book%20a%20chef%20tasting."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-[#DCBC88] text-[#DCBC88] px-8 py-3 rounded-full text-[16px] md:text-[18px] font-medium hover:bg-[#DCBC88] hover:text-[#2b3d09] transition-all">
                Book A Chef Tasting
              </button>
            </a>

            <Link href="/our-produces">
              <button className="border border-[#DCBC88] text-[#DCBC88] px-8 py-3 rounded-full text-[16px] md:text-[18px] font-medium hover:bg-[#DCBC88] hover:text-[#2b3d09] transition-all">
                Explore Our Produce
              </button>
            </Link>
          </div>

          <h3 className="font-semibold text-[24px] md:text-[32px] text-white">
            Ready to Elevate Your Ingredients?
          </h3>
        </div>

        {/* Right Side: Hero Image */}
        <div className="hidden lg:flex w-[40%] justify-end">
          <div className="relative w-[340px] h-[480px] rounded-[30px] overflow-hidden shadow-2xl border border-white/20">
            <Image
              src="/images/home/heroImage.png"
              alt="Chef Sprinkling Greens"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider1;