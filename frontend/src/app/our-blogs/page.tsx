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

// --- Data for Blog Posts ---
const blogPosts = [
    {
      id: 1,
      image: '/images/blog/exp.png', // Path kept unchanged
      category: 'FOOD CROPS',
      date: 'MARCH 28, 2024',
      title: 'What technology is used in vertical farming?',
    },
    {
      id: 2,
      image: '/images/blog/exp.png',
      category: 'FOOD CROPS',
      date: 'MARCH 28, 2024',
      title: 'What technology is used in vertical farming?',
    },
    {
      id: 3,
      image: '/images/blog/exp.png',
      category: 'FOOD CROPS',
      date: 'MARCH 28, 2024',
      title: 'What technology is used in vertical farming?',
    },
];

// --- Component: Latest Feature Section (Watering Can) ---
const LatestFeatureSection = () => {
  return (
    // Added mt-12 md:mt-20 for top margin
    <section className="w-full bg-white py-16 md:py-20 px-6 mt-12 md:mt-20">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Top Centered Headings */}
        <div className="text-center mb-16 space-y-2">
           <h2 className="text-[#3c5922] text-4xl md:text-[54px] font-bold leading-tight">
             Explore Our Latest Blogs
           </h2>
           <p className="text-gray-600 text-lg md:text-xl font-medium">
             Insights, tips, and stories to inspire every culinary journey
           </p>
        </div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <div className="relative w-full h-[350px] md:h-[500px] rounded-[30px] overflow-hidden shadow-lg">
            <Image
              src="/images/blog/blog-ut.png" // Path kept unchanged
              alt="Watering plants"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col items-start space-y-6">
            <h3 className="text-[#3c5922] text-3xl md:text-[48px] font-bold leading-[1.1]">
              Explore Our Latest Blogs
            </h3>
            <p className="text-gray-600 text-base md:text-[18px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Eu vulputate odio lacinia facilisis magna mollis arcu ornare viverra. Et pretium adipiscing auctor mauris sollicitudin non id integer sed. A in ut id vulputate in nulla tortor laoreet vel. Nulla velit dignissim quisque blandit enim nibh aliquet quis hendrerit.
            </p>
            
            {/* Button */}
            <button className="flex items-center gap-2 bg-[#3D550C] hover:bg-[#2e3b09] text-white font-semibold px-8 py-3 rounded-full transition-all mt-4 group">
              Learn More 
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Component: Blog Grid (Updated Style) ---
const BlogGridSection = () => {
  return (
    // CHANGED: 'mrgin-top-12' -> 'mt-24' (matches pb-24 for balanced spacing)
    <section className="w-full bg-white pb-24 px-6 mt-24">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group flex flex-col gap-4">
              
              {/* Card Image Container */}
              <div className="relative w-full h-[300px] rounded-[24px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <span className="text-[#3c5922] text-xs font-bold tracking-wider uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-3 px-2">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold tracking-wide uppercase">
                  <Calendar size={14} className="text-[#3c5922]" />
                  {post.date}
                </div>
                
                {/* Title & Action Row */}
                <div className="flex justify-between items-start gap-4">
                   <h3 className="text-[#2D2D2D] text-2xl font-bold leading-tight flex-1 group-hover:text-[#3c5922] transition-colors">
                     {post.title}
                   </h3>
                   
                   {/* Yellow Circle Button */}
                   <button className="flex-shrink-0 w-10 h-10 bg-[#E8D968] rounded-full flex items-center justify-center text-[#3c5922] transition-transform group-hover:rotate-45">
                      <ArrowUpRight size={20} strokeWidth={2.5} />
                   </button>
                </div>
              </div>

            </div>
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
      
<<<<<<< HEAD
      {/* --- Section 1: Banner (Height Reduced) --- */}
<div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
  
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/blog/blog-bg.png"
      alt="Red lettuce background"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Glassmorphism Card */}
  <div className="relative z-10 w-[90%] max-w-[1000px] rounded-[20px] overflow-hidden shadow-xl mt-[-20px]">
    
    {/* Blur/Gradient Layer - Reddish/Brown tones */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#2b1d1d]/85 via-[#452b2b]/75 to-[#2b1d1d]/85 backdrop-blur-md"></div>

    {/* Content */}
    <div className="relative z-20 flex flex-col items-center justify-center text-center py-10 md:py-14 px-4">
      <h1 className="text-white text-3xl md:text-[50px] font-bold leading-tight mb-2 drop-shadow-md">
        Our Blogs
      </h1>
      <p className="text-[#d4c596] text-base md:text-[24px] font-bold tracking-wide drop-shadow-md mt-1">
        Read the latest culinary stories from experts
      </p>
    </div>
  </div>

  {/* Floating CTA Button */}
  <div className="absolute z-30 bottom-[10%] md:bottom-[12%]">
    <button className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-lg py-3 px-8 md:px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95">
      Explore Our Produce
    </button>
  </div>

</div>
=======
      {/* --- Section 1: Banner --- */}
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog/blog-bg.png" // Path kept unchanged
            alt="Red lettuce background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Glassmorphism Card */}
        <div className="relative z-10 w-[95%] max-w-[1280px] rounded-[20px] overflow-hidden shadow-xl">
          
          {/* Blur/Gradient Layer - Reddish/Brown tones */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b1d1d]/85 via-[#452b2b]/75 to-[#2b1d1d]/85 backdrop-blur-md"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center py-16 md:py-20 px-4">
            <h1 className="text-white text-4xl md:text-[64px] font-bold leading-tight mb-2 drop-shadow-md">
              Our Blogs
            </h1>
            <p className="text-[#d4c596] text-lg md:text-[32px] font-bold tracking-wide drop-shadow-md mt-2">
              Read the latest culinary stories from experts
            </p>
          </div>
        </div>

        {/* Floating CTA Button */}
        <div className="absolute z-30 bottom-[15%] md:bottom-[20%]">
          <button className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-xl py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95">
            Explore Our Produce
          </button>
        </div>
      </div>
>>>>>>> origin/main

      {/* --- Section 2: Latest Feature (Watering Can) --- */}
      <LatestFeatureSection />

      {/* --- Section 3: Blog Grid --- */}
      <BlogGridSection />

    </main>
  );
};

export default BlogPage;