'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { League_Spartan } from 'next/font/google';
import { Calendar, ArrowUpRight } from 'lucide-react';

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan',
});

// --- Blog Data ---
const blogPosts = [
    {
      id: 1,
      image: '/images/blog/blog-01.png', 
      date: '15TH SEPTEMBER 2025',
      title: 'INNOFarms.AI Launches GrowSmartRobotics at GVF 2025 Dubai',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7389654887459979265',
    },
    {
      id: 2,
      image: '/images/blog/blog-02.png', 
      date: '18TH DECEMBER 2025',
      title: 'INNOFarms.AI\'s integrated agri-tech ecosystem aims to revolutionise sustainable food production',
      url: 'https://igrownews.com/innofarms-ai-latest-news/',
    },
    {
      id: 3,
      image: '/images/blog/blog-03.png', 
      date: '18TH AUGUST 2025',
      title: 'From Crop Planning to Retail Shelf: Closing the Loop in Indoor Vertical Farming.',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7363147900987572225',
    },
];

const IMAGE_BASE_URL = "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture";

const getImageUrl = (path: string) => {
  if (!path) return path;
  if (path.startsWith("/images/")) {
    const cleanedPath = path.replace("/images", "");
    return `${IMAGE_BASE_URL}${cleanedPath}`;
  }
  return path;
};

// --- Component: Section Heading ---
// --- Component: Section Heading ---
const SectionHeading = () => (
  <div className="text-center mt-16 md:mt-24 mb-8 md:mb-12 space-y-6 px-6">
      <h2 className="text-[#3D550C] text-5xl md:text-[64px] font-bold leading-snug">
        Explore Our Latest Blogs
      </h2>
      <p className="text-[#6F7775] text-xl md:text-[22px] font-normal max-w-2xl mx-auto leading-relaxed">
        Insights, tips, and stories to inspire every culinary journey
      </p>
  </div>
);

// --- Component: Latest Feature Section ---
const LatestFeatureSection = () => {
  return (
    <section className="w-full bg-white pb-0 px-6 pt-0">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <div className="relative w-full h-[400px] md:h-[550px] rounded-[30px] overflow-hidden shadow-sm">
            <Image
              src={getImageUrl("/images/blog/blog.png")} 
              alt="Revolutionizing AgriTech"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col items-start space-y-8">
            <h3 className="text-[#3D550C] text-3xl md:text-[48px] font-medium leading-[1.15]">
              Revolutionizing AgriTech: The Vision Behind the AWS for Agriculture
            </h3>
            <div className="space-y-6 text-[#6F7775] text-base md:text-[18px] leading-relaxed">
              <p>
                At InnoFarms.AI, we believe the future of agriculture lies at the intersection of intelligence, innovation, and integration. Farming has always been the backbone of human civilization — yet, in an era defined by data and digital transformation, it remains one of the least digitized sectors.
              </p>
              <p>
                Our vision is to change that.
                Just as Amazon Web Services (AWS) transformed how businesses build and scale in the digital economy, InnoFarms.AI aims to become the “AWS for Agriculture” — the foundational digital infrastructure that empowers farmers, agribusinesses, and governments to build intelligent, scalable, and sustainable agricultural solutions.
              </p>
            </div>
            
            {/* Button */}
            <a 
              href="https://www.linkedin.com/feed/update/urn:li:activity:7389654887459979265" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#3D550C] hover:bg-[#2e3b09] text-white font-semibold px-8 py-4 rounded-full transition-all mt-4 group"
            >
              Learn More 
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Component: Blog Grid Section ---
const BlogGridSection = () => {
  return (
    // KEPT: mt-40 md:mt-64 (Large gap preserved)
    <section className="w-full bg-white pb-24 px-6 mt-40 md:mt-64">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-6 cursor-pointer"
            >
              
              {/* Card Image Container */}
              <div className="relative w-full h-[300px] md:h-[340px] rounded-[24px] overflow-hidden bg-gray-100">
                <Image
                  src={getImageUrl(post.image)}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Action Button Overlay */}
                <div className="absolute bottom-5 right-5 w-12 h-12 bg-[#3D550C] rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
                    <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-3">
                {/* Date */}
                {/* CHANGED: font-semibold -> font-medium (Lighter weight) */}
                <div className="flex items-center gap-2 text-[#9DA4A2] text-sm font-medium tracking-wider uppercase">
                  <Calendar size={16} />
                  {post.date}
                </div>
                
                {/* Title (Description) */}
                {/* CHANGED: font-bold -> font-medium (Significantly reduced weight) */}
                <h3 className="text-[#2D2D2D] text-2xl md:text-[26px] font-medium leading-[1.3] group-hover:text-[#3D550C] transition-colors">
                  {post.title}
                </h3>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
};  

// --- Main Page Component ---
const BlogPage = () => {
  return (
    <main className={`w-full min-h-screen bg-white ${spartan.variable} font-spartan`}>
      
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center overflow-hidden gap-8">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl("/images/blog/blog-bg.png")}
            alt="Red lettuce background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Glassmorphism Title Card */}
        <div className="relative z-10 w-[95%] max-w-7xl bg-[#1e3a1e]/30 backdrop-blur-md rounded-[30px] flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 shadow-2xl border border-white/20">
          <h1 className="text-white text-3xl md:text-[50px] font-bold leading-tight mb-4 drop-shadow-md">
            Our Blogs
          </h1>
          <p className="text-[#d4c596] text-base md:text-[24px] font-bold tracking-wide drop-shadow-md">
            Read the latest culinary stories from experts
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative z-10">
          <Link href="/our-produces">
            <button className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-lg py-3 px-8 md:px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95">
              Explore Our Produce
            </button>
          </Link>
        </div>
      </div>

      {/* 2. Combined Heading & Feature Section */}
      <div>
        <SectionHeading />
        <LatestFeatureSection />
      </div>

      {/* 3. Blog Grid Section */}
      <BlogGridSection />

    </main>
  );
};

export default BlogPage;