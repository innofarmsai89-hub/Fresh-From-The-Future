"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/getInTouch";

export default function AboutUs() {
  // --- State for FAQ Accordion ---
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const glassStyle = {
  background: `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.045) 77.08%, rgba(70, 144, 213, 0) 100%)`,
  backdropFilter: "blur(40px)",
  WebkitBackdropFilter: "blur(40px)", // Safari support
  backgroundBlendMode: "overlay, normal",
  border: "1px solid rgba(255, 255, 255, 0.2)",
};
  // --- Data Constants ---
  // --- Data Constants ---
  const feedbacks = [
    {
      name: "Bricks and Beans",
      image: "/images/about/feedback-1.png",
      review:
        "Exceptional greens! Noticeably fresher, brighter, and better textured than whatever we’ve used before.",
    },
    {
      name: "The Big Tree",
      image: "/images/about/feedback-2.png",
      review:
        "The leaf quality is outstanding. Stays crisp longer, plates beautifully, and tastes incredibly clean.",
    },
    {
      name: "Wine Company",
      image: "/images/about/feedback-3.png",
      review:
        "These are the freshest, best-tasting greens I’ve ever received. The traceability is next-level — it shows the whole crop journey and even the environmental impact.",
    },
    {
      name: "Cafe Soul Garden",
      image: "/images/about/feedback-4.png",
      review:
        "These greens elevate our pizzas, visually stunning and full of freshness that stands out even after baking.",
    },
    {
      name: "Laidback Cafe",
      image: "/images/about/feedback-5.png",
      review:
        "Excellent freshness and quality - these greens clearly stand above regular suppliers.",
    },
    {
      name: "Le Meridien",
      image: "/images/about/feedback-6.png",
      review:
        "Consistently superior quality that meets our high standards. Visual appeal and texture that delights our guests.",
    },
  ];

  const faqs = [
    {
      question: "How is the produce grown in your lab?",
      answer:
        "We use hydroponic and advanced precision farming techniques, powered by INNOFarms.AI. Every plant is nurtured under exact nutrient, light, and temperature conditions, ensuring the highest quality and freshness year-round.",
    },
    {
      question: "Are your products safe and pesticide-free?",
      answer:
        "Yes, our controlled environment agriculture ensures that all produce is 100% pesticide-free, protected from pests and pollutants without the use of harmful chemicals.",
    },
    {
      question:
        "Do you supply only to restaurants and hotels, or can individuals order as well?",
      answer:
        "While our primary focus is premium HoReCa partners, we also offer subscription boxes for individual connoisseurs who appreciate chef-grade quality at home.",
    },
    {
      question: "How do you ensure the produce stays fresh after harvest?",
      answer:
        "Our hyper-local model means harvest happens hours before delivery. We use temperature-controlled logistics to maintain the 'living fresh' quality right to your doorstep.",
    },
    {
      question:
        "What makes Fresh From The Future’s produce different from regular?",
      answer:
        "Unlike regular produce, ours is AI-optimized for flavor and nutrition. It is cleaner, fresher (harvested same-day), and offers unique chef-curated varieties not found in traditional markets.",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden bg-white">
     {/* --- 1. Hero Section (Glassmorphism) --- */}
<section className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center overflow-hidden gap-8">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/about/about-bg.png"
      alt="About Us Leafy Background"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Glass Container (Button Removed) */}
  <div
    className="relative z-10 w-[90%] max-w-[1277px] min-h-[180px] rounded-[30px] flex flex-col items-center justify-center text-center px-6 py-10"
    style={{
      background: `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)`,
      backdropFilter: "blur(40px)",
      WebkitBackdropFilter: "blur(40px)",
      backgroundBlendMode: "overlay, normal",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    }}
  >
    <h1 className="font-spartan font-bold text-[36px] md:text-[48px] leading-[54px] text-white mb-2 drop-shadow-md">
      About Us
    </h1>
    {/* Removed mb-8 to reduce empty space at bottom of glass since button is gone */}
    <h2 className="font-spartan font-bold text-[20px] md:text-[32px] leading-[1.4] text-[#DCBC88] drop-shadow-sm">
      The Future of Farming, Delivered Fresh
    </h2>
  </div>

  {/* Button (Moved Outside) */}
  <Link
    href="/our-produces"
    className="relative z-10 bg-white text-[#3D550C] font-outfit font-medium text-[16px] md:text-[18px] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
  >
    Explore Our Produce
  </Link>
</section>

      {/* --- 2. Main Content (About & Pod) --- */}
      <section className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] flex flex-col gap-32">
          {/* Part A: About Fresh From The Future */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col order-2 lg:order-1 max-w-[654px]">
              <h2 className="font-spartan font-bold text-[40px] lg:text-[54px] leading-[1.1] lg:leading-[60px] text-[#3D550C] mb-8">
                About <br className="hidden lg:block" />
                Fresh From The Future
              </h2>
              <div className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E] space-y-8 max-w-[621px]">
                <p>
                  Fresh From The Future is a premium HoReCa produce brand
                  offering beyond-organic hydroponic leafy greens, microgreens,
                  and edible flowers. Powered by INNOFarms.AI, our produce is
                  grown in a fully controlled, AI-enabled, and traceable
                  environment that ensures unmatched purity, consistency, and
                  freshness.
                </p>
                <p>
                  Designed on advanced Singapore and UAE precision farming
                  models, our state-of-the-art facility in Gurugram enables us
                  to deliver hyper-local, hyper-fresh, and completely
                  pesticide-free produce.
                </p>
                <p>
                  Every leaf is cultivated with precision, sustainability, and
                  transparency—crafted to meet the highest standards of chefs,
                  restaurants, and culinary professionals.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[500px] lg:h-[700px] rounded-[30px] overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/images/about/about-2.png"
                alt="Chef Plating Fresh Greens"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Part B: The INNOGrowPod */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col order-1">
              <div className="relative w-full h-[400px] lg:h-[550px] rounded-[30px] overflow-hidden mb-6 bg-gray-50">
                <Image
                  src="/images/about/about-3.png"
                  alt="INNOGrowPod AI Farming Unit"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="pl-4">
                <h4 className="font-spartan font-bold text-[20px] leading-[34px] text-[#1E1E1E] mb-1">
                  Nespresso of Vertical Farming
                </h4>
                <p className="font-spartan font-normal text-[16px] lg:text-[20px] leading-[34px] text-[#1E1E1E] opacity-80">
                  — elegant, smart, traceable, and profitable.
                </p>
              </div>
            </div>
            <div className="flex flex-col order-2 max-w-[621px]">
              <h2 className="font-spartan font-bold text-[40px] lg:text-[54px] leading-[1.1] lg:leading-[60px] text-[#3D550C] mb-8">
                The INNOGrowPod™
              </h2>
              <div className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E] space-y-6">
                <p>
                  We provide the INNOGrowPod™, an AI-powered on-site farming
                  unit for premium kitchens, enabling chefs to grow fresh,
                  high-quality produce directly in their restaurants.
                </p>
                <p>
                  This ensures superior flavor, sustainability, and control over
                  ingredients from seed to plate. These pods are available in
                  varied sizes from mini to max.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. AI Precision Lab Section --- */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-[40px] lg:text-[54px] leading-[1.1] text-[#3D550C] mb-4">
              Inside Our AI-Powered Precision Lab
            </h2>
            <p className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E]">
              AI-driven precision growing for unmatched freshness and purity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-[30px] overflow-hidden shadow-lg group">
              <Image
                src="/images/about/inside-1.png"
                alt="Glass Lab"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-[30px] overflow-hidden shadow-lg group">
              <Image
                src="/images/about/inside-2.png"
                alt="Top Down Greens"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-[30px] overflow-hidden shadow-lg group">
              <Image
                src="/images/about/inside-3.png"
                alt="Grow Shelves"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="font-spartan font-normal text-[20px] leading-[34px] text-[#1E1E1E] space-y-8 text-center md:text-left">
            <p>
              Our produce is grown with absolute precision in a fully
              controlled, AI-driven environment that operates 24/7. Inside our
              state-of-the-art lab, every leaf and microgreen is nurtured under
              strict monitoring to ensure unmatched freshness, purity, and
              beyond-organic quality.
            </p>
            <p>
              Free from pesticides and external contaminants, our controlled
              ecosystem allows us to maintain perfect conditions
              year-round—delivering consistently superior, hyper-fresh produce
              crafted to meet the highest standards of chefs and HoReCa
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* --- 4. Feedback Section --- */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-[40px] lg:text-[54px] leading-[1.1] text-[#3D550C] mb-4">
              Feedback from Visionary Chefs
            </h2>
            <p className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E]">
              Hear how chefs praise our innovative flavors and inspiring
              service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {feedbacks.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Image Container with Hover Effect */}
                <div className="relative w-full aspect-[393/208] rounded-[10px] overflow-hidden mb-6 shadow-md group cursor-default">
                  {/* Background Image - Slower Zoom (1000ms) */}
                  <Image
                    src={item.image}
                    alt={`${item.name} Feedback`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  />

                  {/* Hover Overlay - Slower Fade (700ms) */}
                  <div
                    className="absolute inset-0 bg-[#DCBC88] bg-opacity-95 flex items-center justify-center p-6 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                  >
                    {/* Review Text - Updated to exact design specs */}
                    <p
                      className="font-spartan font-normal text-[18px] leading-[34px] tracking-normal text-[#1E1E1E] text-center 
                                            translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out delay-100"
                    >
                      {item.review}
                    </p>
                  </div>
                </div>

                <h3 className="font-spartan font-bold text-[24px] lg:text-[30px] leading-[34px] text-[#3D550C] text-center">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. FAQ Section --- */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="max-w-[1258px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-[40px] lg:text-[54px] leading-[1.1] text-[#3D550C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E]">
              Quick insights into how our AI-driven, pesticide-free farming
              works.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className={`
                              rounded-[10px] cursor-pointer transition-all duration-300 overflow-hidden
                              ${
                                isOpen
                                  ? "bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                                  : "bg-[#DCBC88] hover:bg-[#d4b075]"
                              }
                          `}
                >
                  <div className="flex items-center justify-between px-8 py-6 lg:h-[90px]">
                    <h3 className="font-outfit font-bold text-[18px] lg:text-[24px] leading-[30px] text-[#1E1E1E]">
                      {index + 1}. {faq.question}
                    </h3>
                    <div className="shrink-0 ml-4">
                      {isOpen ? (
                        <FiChevronUp className="w-7 h-7 text-[#1E1E1E]" />
                      ) : (
                        <FiChevronDown className="w-7 h-7 text-[#1E1E1E]" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "max-h-[300px] opacity-100 pb-8"
                        : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    <div className="border-t border-[#DCBC88] mb-6 w-full opacity-30"></div>
                    <p className="font-outfit font-normal text-[18px] lg:text-[24px] leading-[30px] text-[#313638]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 6. Contact Form Section --- */}
      <ContactSection />


    </main>
  );
}
