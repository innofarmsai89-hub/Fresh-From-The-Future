// src/app/recipes/page.tsx
import React from 'react';
import Image from 'next/image';
import { League_Spartan } from 'next/font/google';
import Link from "next/link";
// IMPORT the shared data so slugs match perfectly
import { recipeData } from '@/data/recipeData'; 

const IMAGE_BASE_URL = "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture";

const getImageUrl = (path: string) => {
  if (!path) return path;
  if (path.startsWith("/images/")) {
    const cleanedPath = path.replace("/images", "");
    return `${IMAGE_BASE_URL}${cleanedPath}`;
  }
  return path;
};

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan',
});

// --- Component: Recipe Grid Section ---
const RecipeGridSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 overflow-hidden">
      
      {/* Background Image for the Section */}
      <div className="absolute inset-0 -z-10">
         <Image 
            src={getImageUrl("/images/recipes/r-bg.png")}
            alt="Background" 
            fill 
            className="object-cover opacity-20"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40"></div>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
            <h2 className="text-[#3c5922] text-3xl md:text-[48px] font-bold leading-tight drop-shadow-sm">
                Top Recipes You Can't Miss
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium">
                Delicious dishes that are easy to make and perfect for every occasion
            </p>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {recipeData.map((recipe) => (
            
            <div 
              key={recipe.id} 
              className="
                flex flex-col 
                rounded-[30px] overflow-hidden 
                transition-all duration-300
                group
                bg-[#F3E9D2]/60
                backdrop-blur-[12px]
                border border-white/50
                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                hover:bg-[#F3E9D2]/80
                hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                hover:scale-[1.02]
              "
            >
              
              {/* Card Image */}
              <div className="relative w-full h-[250px] md:h-[280px] overflow-hidden">
                <Image
                  src={typeof recipe.image === 'string' ? getImageUrl(recipe.image) : recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                
                {/* Title */}
                <h3 className="text-[#1a1a1a] text-2xl font-bold leading-tight mb-3">
                  {recipe.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-8 flex-grow">
                  {recipe.description}
                </p>
                
                {/* Footer: Meta & Button */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1a1a1a]/10">
                  
                  {/* Left: Meta Info */}
                  <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-[#1a1a1a] uppercase opacity-80">
                    {recipe.meta.time} • {recipe.meta.prep}
                  </span>
                  
                  {/* Right: View Recipe Button */}
                  <Link href={`/recipeDetail/${recipe.slug}`}>
                    <button className="
                      border border-[#1a1a1a] rounded-full px-6 py-2 
                      text-[11px] md:text-xs font-bold tracking-widest uppercase
                      text-[#1a1a1a] 
                      hover:bg-[#1a1a1a] hover:text-[#F3E9D2] 
                      transition-colors
                      cursor-pointer
                    ">
                      View Recipe
                    </button>
                  </Link>

                </div>
              </div>
            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

// --- Component: Chef Advisory Council Section ---
const ChefAdvisorySection = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6 bg-[#f5f5f0]">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Main Header */}
        <div className="text-center mb-4">
          <h2 className="text-[#3c5922] text-3xl md:text-[48px] font-bold leading-tight mb-2">
            Join Our Chef Advisory Council
          </h2>
          <p className="text-[#1a1a1a] text-lg md:text-xl font-normal">
            Collaborate, Innovate, and Elevate Culinary Excellence
          </p>
        </div>

        {/* Content Grid: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <h3 className="text-[#3c5922] text-3xl md:text-[40px] font-bold leading-tight">
              Community of culinary experts
            </h3>
            
            <div className="space-y-6 text-[#1a1a1a]">
              <p className="text-base md:text-lg leading-relaxed">
                Become a part of our Chef Advisory Council, a vibrant community of culinary experts dedicated to shaping the future of flavors. Share your unique insights, influence the creation of innovative products, and collaborate with fellow chefs to inspire kitchens everywhere.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                Together, we drive culinary excellence, spark new ideas, and elevate the art of cooking for chefs and food lovers alike.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-[350px] md:h-[400px] rounded-[20px] overflow-hidden shadow-lg">
            <Image
              src={getImageUrl("/images/recipes/chef-council.jpg")}
              alt="Chef Advisory Council"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Become a Council Member Section */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-[#3c5922] text-3xl md:text-[40px] font-bold leading-tight">
            Become a Council Member
          </h3>
          <p className="text-[#1a1a1a] text-lg md:text-xl font-normal">
            Fill out the form below and share your culinary expertise with us.
          </p>
          
          <p className="text-[#1a1a1a] text-base md:text-lg leading-relaxed max-w-[900px] mx-auto mt-6">
            Fill out the form below to apply and become a valued member of our Chef Advisory Council. Share your expertise and help us create extraordinary culinary experiences together.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <a 
              href="https://forms.gle/Mu3SSRhR8trpMGxQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#3c5922] hover:bg-[#2d4419] text-white font-bold text-base md:text-lg py-4 px-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Apply Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Main Page Component ---
const RecipesPage = () => {
  return (
    <main className={`w-full min-h-screen bg-white ${spartan.variable} font-spartan`}>
      
      {/* --- Section 1: Hero Banner --- */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center overflow-hidden gap-8">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl("/images/recipes/r-bg.png")}
            alt="Recipes Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Glassmorphism Card */}
        <div 
          className="relative z-10 w-[95%] max-w-[1280px] rounded-[30px] flex flex-col items-center justify-center text-center py-16 md:py-20 px-4 shadow-xl"
          style={{
            background: `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)`,
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            backgroundBlendMode: 'overlay, normal',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <h1 className="text-white text-4xl md:text-[64px] font-bold leading-tight mb-2 drop-shadow-md">
            Top 6 Must-Try Recipes
          </h1>
          <p className="text-[#d4c596] text-lg md:text-[32px] font-bold tracking-wide drop-shadow-md mt-2">
            Flavors you'll love
          </p>
        </div>

        {/* Button */}
        <div className="relative z-10">
          <Link 
            href="/our-produces"
            className="bg-white hover:bg-gray-100 text-[#1a3c1a] font-bold text-sm md:text-xl py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            Explore Our Produce
          </Link>
        </div>

      </div>

      {/* --- Section 2: Recipe Grid Section --- */}
      <RecipeGridSection />

      {/* --- Section 3: Chef Advisory Council --- */}
      <ChefAdvisorySection />

    </main>
  );
};

export default RecipesPage;