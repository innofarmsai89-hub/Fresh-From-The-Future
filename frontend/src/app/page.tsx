'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { League_Spartan, Signika } from 'next/font/google';

// Sliders
import Slider1 from '@/components/slider/slider1';
import Slider2 from '@/components/slider/slider2';
import Slider3 from '@/components/slider/slider3';
import Slider4 from '@/components/slider/slider4';
import Slider5 from '@/components/slider/slider5';

// Components
import ContactSection from '@/components/getInTouch';
import SubscriptionBanner from '@/components/SubscriptionBanner'; 

// ==========================================
// 0. CONFIGURATION
// ==========================================

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-spartan',
});

const signika = Signika({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-signika',
});

// ==========================================
// CDN IMAGE HELPER
// ==========================================
const IMAGE_BASE_URL = "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture";

const getImageUrl = (path: string) => {
  if (!path) return path;
  if (path.startsWith("/images/")) {
    const cleanedPath = path.replace("/images", "");
    return `${IMAGE_BASE_URL}${cleanedPath}`;
  }
  return path;
};

// ==========================================
// 1. DATA CONSTANTS
// ==========================================

const trends = [
  {
    category: "LEAFY GREENS",
    title: "Green Leaf Lettuce",
    image: "/images/home/leaf-lettuce.png", 
    link: "/our-produces#leafy-greens"
  },
  {
    category: "BABY GREENS",
    title: "Spinach",
    image: "/images/home/spinach.png", 
    link: "/our-produces#baby-greens"
  },
  {
    category: "MICROGREENS",
    title: "Arugula",
    image: "/images/home/arugula.png", 
    link: "/our-produces#leafy-greens" // Mapping to closest category
  },
  {
    category: "SPECIALTY HERBS & RARE CROPS",
    title: "Thai Basil",
    image: "/images/home/thai-basil.png", 
    link: "/our-produces#specialty-herbs"
  }
];

const features = [
    {
      icon: "/images/home/Leaf-icon.png",
      title: "INNOFarmsXOS",
      subtitle: "AI-Powered Freshness",
      desc: "Climate, nutrients, and light controlled to the micron — ensuring unwavering flavor, crunch & color."
    },
    {
      icon: "/images/home/globe.png",
      title: "Global SOPs",
      subtitle: "UAE & Singapore Model Farms",
      desc: "Hygiene, bio-security & operations modeled on our UAE and Singapore facilities for world-class standards."
    },
    {
      icon: "/images/home/Cocktail.png",
      title: "Bar Program",
      subtitle: "Bar Botanica Collection",
      desc: "Botanicals, edible flowers & micro-herbs curated for progressive cocktails & bar programs."
    },
    {
      icon: "/images/home/EmptyTrash.png",
      title: "Zero-Waste",
      subtitle: "Pantry & Preservation",
      desc: "Dehydrated micro powders, herb salts & infused oils crafted from surplus crops for a zero-waste kitchen."
    },
    {
      icon: "/images/home/ChefHat.png",
      title: "Co-Created with Chefs",
      subtitle: "Exclusive Signature Mixes",
      desc: "Monthly rotating blends designed in collaboration with India’s leading chefs — exclusive to your kitchen."
    }
];

const testimonials = [
    {
      name: "Bricks and Beans",
    image: "/images/home/bricks&beans.png",
      text: "Exceptional greens! noticeably fresher, brighter, and better textured than whatever we’ve used before."
    },
    {
      name: "The Big Tree",
    image: "/images/home/thebigtree.png",
      text: "The leaf quality is outstanding. Stays crisp longer, plates beautifully, and tastes incredibly clean."
    },
    {
      name: "Wine Company",
    image: "/images/home/wine-company.png",
      text: "These are the freshest, best-tasting greens I’ve ever received from any vendor. The traceability is next-level — it shows the whole crop journey and even the environmental impact."
    }
];

// ==========================================
// 2. HELPER COMPONENTS
// ==========================================

// UPDATED: Added 'link' prop to accept specific hash URLs
function ProductCard({ title, image, link }: { title: string, image: string, link: string }) {
    return (
       <div className="relative w-[280px] h-[388px] group">
            <div className="absolute top-0 left-0 w-[280px] h-[364px] bg-[#FFF9F1] border border-[rgba(249,192,106,0.42)] rounded-[10px] box-border overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[271px] rounded-t-[10px] overflow-hidden">
                     <Image
                        src={getImageUrl(image)}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                </div>
                <div className="absolute top-[288px] w-full text-center px-4">
                    <h3 className="font-bold text-[22px] text-[#3D550C] leading-[29px]">
                        {title}
                    </h3>
                </div>
            </div>
            
            {/* Dynamic Link used here */}
            <Link 
                href={link} 
                className="absolute top-[340px] left-1/2 -translate-x-1/2 w-[134px] h-[48px] bg-[#3D550C] rounded-[10px] shadow-[0px_6px_12px_rgba(249,192,106,0.22)] flex items-center justify-center text-white font-bold text-[16px] transition-all hover:bg-[#2e4009] hover:shadow-lg z-10"
            >
                View Now
            </Link>
        </div>
    )
}

function StepCard({ number, text, image }: { number: string, text: string, image: string }) {
    return (
        <div className="relative h-full">
            {/* Badge */}
            <div className="absolute -top-[35px] left-1/2 -translate-x-1/2 w-[70px] h-[70px] bg-[#E3572B] rounded-full flex items-center justify-center z-10 shadow-lg">
                <span className="font-bold text-white text-[32px] font-spartan">{number}</span>
            </div>

            <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[20px] overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                {/* Image Area */}
                <div className="w-full h-[220px] relative shrink-0">
                    <Image 
                        src={getImageUrl(image)} 
                        alt={`Step ${number}`} 
                        fill 
                        className="object-cover" 
                    />
                </div>

                {/* Text Area */}
                <div className="px-6 pt-6 pb-8 flex-grow">
                   <p className="font-spartan font-medium text-[18px] leading-[100%] tracking-normal text-[#3D550C] text-left">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

function TechCard({ feature }: { feature: { icon: string, title: string, subtitle: string, desc: string } }) {
  return (
    <div className="bg-[#EFE6D5] rounded-[20px] p-8 min-h-[240px] flex flex-col items-start text-left hover:shadow-lg transition-shadow duration-300 font-spartan">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-[54px] h-[54px] bg-[#3D550C] rounded-full flex items-center justify-center shrink-0 shadow-sm">
          <div className="relative w-[28px] h-[28px]">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
                src={getImageUrl(feature.icon)} 
                alt={feature.title} 
                className="w-full h-full object-contain invert brightness-0 filter" 
             />
          </div>
        </div>
        <h3 className="font-bold text-[24px] md:text-[26px] text-[#404A3D] leading-tight">
            {feature.title}
        </h3>
      </div>

      <div className="flex flex-col gap-2">
          <h4 className="font-bold text-[18px] text-[#1E1E1E] leading-tight">
            {feature.subtitle}
          </h4>

          <p className="font-medium text-[17px] leading-[1.6] text-[#404A3D]/90">
            {feature.desc}
          </p>
      </div>
    </div>
  );
}

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================

export default function HomePage() {
  // --- Slider State & Logic ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Slider1, Slider2, Slider3, Slider4, Slider5];
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 5000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [currentSlide, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main className={`${spartan.variable} font-spartan w-full overflow-x-hidden bg-white`}>
    
     {/* --- HERO SECTION WITH SLIDER --- */}
     <section className="relative w-full h-auto">
        {React.createElement(slides[currentSlide])}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ease-in-out ${
                index === currentSlide
                  ? 'w-4 h-4 bg-[#3D550C] scale-110' 
                  : 'w-4 h-4 bg-[#EAEAEA] hover:bg-[#d1d1d1]'
              }`}
            ></button>
          ))}
        </div>
      </section>

    {/* --- Why Are We Different --- */}
    <section className="py-24 max-w-[1440px] mx-auto px-6 font-spartan">
      <div className="text-center mb-20">
        <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-6 leading-none">
          Why are we different?
        </h2>
        <p className="text-[28px] md:text-[36px] text-[#1E1E1E] font-medium leading-tight">
          Engineered freshness for culinary excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center min-h-[420px] justify-center transition-all duration-300 hover:brightness-95 hover:shadow-xl cursor-pointer">
          <div className="w-[130px] h-[130px] mb-8 relative">
            <Image src={getImageUrl("/images/home/coffee-beans.png")} alt="Non GMO" fill className="object-contain" />
          </div>
          <h3 className="font-bold text-[32px] text-[#3D550C] mb-4 leading-[1.1]">
            Non GMO & <br />Pesticide Free
          </h3>
          <p className="text-[20px] text-[#1E1E1E] leading-relaxed">
            Only the best-quality seeds were sown, promising a rich harvest.
          </p>
        </div>

        <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center min-h-[420px] justify-center transition-all duration-300 hover:brightness-95 hover:shadow-xl cursor-pointer">
          <div className="w-[130px] h-[130px] mb-8 relative">
            <Image src={getImageUrl("/images/home/badge.png")} alt="Standard" fill className="object-contain" />
          </div>
          <h3 className="font-bold text-[32px] text-[#3D550C] mb-4 leading-[1.1]">
            UAE & Singapore<br />Grade Farming
          </h3>
          <p className="text-[20px] text-[#1E1E1E] leading-relaxed">
            Used AI & IOT SAAS technology by award winning INNOFarms Platform
          </p>
        </div>

        <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center min-h-[420px] justify-center transition-all duration-300 hover:brightness-95 hover:shadow-xl cursor-pointer">
          <div className="w-[130px] h-[130px] mb-8 relative">
            <Image src={getImageUrl("/images/home/hyper-local.png")} alt="Hyper Local" fill className="object-contain" />
          </div>
          <h3 className="font-bold text-[32px] text-[#3D550C] mb-4 leading-[1.1]">
            Hyper-Local
          </h3>
          <p className="text-[20px] text-[#1E1E1E] leading-relaxed">
            From harvest-to-kitchen in under 24 hours for unmatched freshness.
          </p>
        </div>

        <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center min-h-[420px] justify-center transition-all duration-300 hover:brightness-95 hover:shadow-xl cursor-pointer">
          <div className="w-[130px] h-[130px] mb-8 relative">
            <Image src={getImageUrl("/images/home/con-qual.png")} alt="Quality" fill className="object-contain" />
          </div>
          <h3 className="font-bold text-[32px] text-[#3D550C] mb-4 leading-[1.1]">
            Consistent Quality
          </h3>
          <p className="text-[20px] text-[#1E1E1E] leading-relaxed">
            Uniform taste, texture, and appearance 365 days a year.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
        <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center min-h-[420px] justify-center transition-all duration-300 hover:brightness-95 hover:shadow-xl cursor-pointer">
          <div className="mb-8 w-[130px] h-[130px] relative">
            <Image src={getImageUrl("/images/home/traceability.png")} alt="Traceability" fill className="object-contain" />
          </div>
          <h3 className="font-bold text-[32px] text-[#3D550C] mb-4 leading-[1.1]">
            Traceability
          </h3>
          <p className="text-[20px] text-[#1E1E1E] leading-relaxed">
            Full crop traceability from seed to harvest via QR code.
          </p>
        </div>

        <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center min-h-[420px] justify-center transition-all duration-300 hover:brightness-95 hover:shadow-xl cursor-pointer">
          <div className="mb-8 w-[130px] h-[130px] relative">
            <Image src={getImageUrl("/images/home/custom-crop.png")} alt="Custom Crop" fill className="object-contain" />
          </div>
          <h3 className="font-bold text-[32px] text-[#3D550C] mb-4 leading-[1.1]">
            Custom Crop<br />Requests
          </h3>
          <p className="text-[20px] text-[#1E1E1E] leading-relaxed">
            Grown specifically to match your menu and seasonal needs.
          </p>
        </div>

        <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center min-h-[420px] justify-center transition-all duration-300 hover:brightness-95 hover:shadow-xl cursor-pointer">
          <div className="mb-8 w-[130px] h-[130px] relative">
            <Image src={getImageUrl("/images/home/no-middlemen.png")} alt="No Middlemen" fill className="object-contain" />
          </div>
          <h3 className="font-bold text-[32px] text-[#3D550C] mb-4 leading-[1.1]">
            No Middlemen
          </h3>
          <p className="text-[20px] text-[#1E1E1E] leading-relaxed">
            Direct from our controlled environment farm to your kitchen.
          </p>
        </div>
      </div>

      <div className="mt-20 text-center max-w-5xl mx-auto">
        <p className="text-[26px] text-[#1E1E1E] font-medium mb-3">Where technology meets taste, every leaf perfected.</p>
        <h2 className="font-bold text-[48px] text-[#3D550C]">Join Us Today!</h2>
      </div>
    </section>  

      {/* --- The Greens Leading the Trend --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 bg-white">
        <div className="text-center mb-16">
          <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">
            The Greens Leading The Trend
          </h2>
          <p className="text-lg md:text-xl text-[#1E1E1E] opacity-80">
            The freshest, crunchiest varieties shaping today’s culinary trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trends.map((item, index) => (
           <div key={index} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-[3/4] rounded-[30px] overflow-hidden mb-6 bg-gray-100">
                <Image
                  src={getImageUrl(item.image)}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col items-start px-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5B8C51]"></span>
                  <span className="text-[12px] font-bold tracking-widest text-[#999999] uppercase">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-bold text-[24px] text-[#3D550C] mb-4 leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section> 

      {/* --- Testimonials Section --- */}
      <section className="py-20 bg-[#FDFDFD]">
          <div className="text-center mb-16">
            <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-6 leading-tight">
                Feedback from Visionary Chefs
            </h2>
            <p className="text-[24px] md:text-[32px] text-[#1E1E1E] font-medium leading-normal">
                Hear how chefs praise our innovative flavors and inspiring service.
            </p>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-full max-w-[393px] h-[220px] bg-gray-200 rounded-[16px] mb-6 relative overflow-hidden shadow-md">
                    <Image 
                      src={getImageUrl(item.image)} 
                      alt={item.name} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#dfc490] flex items-center justify-center p-6 
                                    translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100
                                    transition-all duration-500 ease-in-out">
                      <p className="text-[#1E1E1E] text-[18px] md:text-[20px] font-medium leading-relaxed text-center font-spartan">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-bold text-[24px] text-[#3D550C] group-hover:text-[#dfc490] transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>
              ))}
          </div>
      </section>

      {/* --- Technology Cultivates Taste --- */}
      <section className="py-24 max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">
              Where Technology Cultivates Taste
            </h2>
            <p className="text-lg md:text-[22px] text-[#1E1E1E] max-w-4xl mx-auto font-medium">
              Every leaf, every microgreen, every flower — grown with precision, data, and a chef’s vision.
            </p>
          </div>

          <div className="flex flex-col gap-8 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {features.slice(0, 3).map((feature, idx) => (
                <TechCard key={idx} feature={feature} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-2/3 mx-auto w-full">
              {features.slice(3, 5).map((feature, idx) => (
                <TechCard key={idx} feature={feature} />
              ))}
            </div>
          </div>

       {/* Subscription Plans Banner */}
        <SubscriptionBanner />
      </section>

      {/* --- Trace Your Crop’s Journey --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 bg-white font-spartan">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">
            Trace Your Crop’s Journey
          </h2>
          <p className="text-xl text-[#1E1E1E] font-medium opacity-80">
            Track your produce effortlessly. Just scan the QR code to unlock your crop's journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="relative w-full h-[380px] rounded-[30px] overflow-hidden group">
            <Image 
              src={getImageUrl("/images/home/trace-1.png")} 
              alt="Hydroponic Farm Rows" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="relative w-full h-[380px] rounded-[30px] overflow-hidden group">
            <Image 
              src={getImageUrl("/images/home/trace-2.png")} 
              alt="Chef Scanning QR Code" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="relative w-full h-[380px] rounded-[30px] overflow-hidden group">
             <Image 
              src={getImageUrl("/images/home/trace-3.png")} 
              alt="Traceability App View" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full text-left">
          <p className="font-normal text-[20px] leading-[34px] tracking-[0] text-[#1E1E1E] mb-6 font-spartan">
            Your Crop Box comes with a QR code designed for complete transparency. Once scanned, it takes you to a dynamic Traceability Page where you can follow the crop’s lifecycle—from planting conditions and farm specifics to crop monitoring data, sustainability certifications, and harvest information.
          </p>
          <p className="font-normal text-[20px] leading-[34px] tracking-[0] text-[#1E1E1E] font-spartan">
            Explore a live impact snapshot, check product descriptions, and view every milestone of the crop journey. With one quick scan, you gain full access to the story behind your produce, backed by real-time farm insights.
          </p>
        </div>
      </section>

      {/* --- Our Produce Categories (UPDATED LINKS) --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
              <Link href="/our-produces">
                <h3 className="font-bold text-[#404A3D] mb-4 sm:mb-5 md:mb-6 uppercase tracking-wider text-[16px] xs:text-[17px] sm:text-[18px] cursor-pointer hover:opacity-75 transition-opacity">
                    Our Produce
                </h3>
              </Link>
              <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">Our Produce Categories</h2>
              <p className="text-xl text-[#1E1E1E] font-medium">Premium greens, harvested for flavor, consistency, and culinary excellence.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
              {/* These now point to specific sections via hash links */}
              <ProductCard title="Leafy Greens" image="/images/home/leafy-greens.png" link="/our-produces#leafy-greens" />
              <ProductCard title="Baby Greens" image="/images/home/baby-greens.png" link="/our-produces#baby-greens" />
              <ProductCard title="Specialty Herbs" image="/images/home/speciality-herbs.png" link="/our-produces#specialty-herbs" />
              <ProductCard title="Edible Flowers" image="/images/home/edible-flowers.png" link="/our-produces#edible-flowers" />
              
              {/* These link to the main page or general sections */}
              <ProductCard title="Microgreens" image="/images/home/micro-greens.png" link="/our-produces" />
              <ProductCard title="Customized" image="/images/home/customized.png" link="/our-produces" />
          </div>
      </section>

      {/* --- How You Get Our Greens --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-4">
              <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">
                  How You Get Our Greens
              </h2>
              <p className="text-xl text-[#1E1E1E] font-medium opacity-80">
                  Grown smart. Picked fresh. Delivered green.
              </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <StepCard 
                  number="1" 
                  text="Choose the product that best fits your needs." 
                  image="/images/home/getGreens1.png" 
              />
              <StepCard 
                  number="2" 
                  text="Contact us directly or via WhatsApp for selecting the subscription plan." 
                  image="/images/home/getGreens2.png" 
              />
              <StepCard 
                  number="3" 
                  text="Fill the subscription form after discussing with our executive to proceed with shopping." 
                  image="/images/home/getGreens3.png" 
              />
              <StepCard 
                  number="4" 
                  text="Our team will harvest your order in the same day and deliver to ensure the products arrive fresh." 
                  image="/images/home/getGreens4.png" 
              />
          </div>
      </section>

      <ContactSection />
      
    </main>
  );
}