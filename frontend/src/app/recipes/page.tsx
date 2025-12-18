import React from 'react';
import Image from 'next/image';
import { League_Spartan } from 'next/font/google';

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan',
});

// --- Sample Data for Recipes ---
// Updated to match the fields shown in your screenshot (Prep time, servings, etc.)
const recipeData = [
  {
    id: 1,
    image: '/images/recipes/rp-1.png', 
    title: 'Kale Caesar Salad',
    description: 'A fresh and hearty salad made with tender massaged kale, tossed in a tangy Caesar-style dressing.',
    meta: '10 MIN • EASY PREP • 2-3 SERVES',
  },
  {
    id: 2,
    image: '/images/recipes/rp-2.png',
    title: 'Lettuce Wraps with Chicken',
    description: 'Light, crisp lettuce leaves filled with savory chicken and colorful vegetables.',
    meta: '15 MIN • EASY PREP • 2-3 SERVES',
  },
  {
    id: 3,
    image: '/images/recipes/rp-2.png', // Repeating images as requested
    title: 'Garlic Stir-Fried Bok Choy',
    description: 'A simple yet flavorful dish where bok choy is quickly stir-fried with garlic for a warm, savory finish.',
    meta: '7 MIN • EASY PREP • 2-3 SERVES',
  },
  {
    id: 4,
    image: '/images/recipes/rp-1.png',
    title: 'Garlic Sautéed Spinach',
    description: 'A simple and nourishing dish where fresh spinach is lightly sautéed with garlic and olive oil.',
    meta: '5 MIN • EASY PREP • 2 SERVES',
  },
  {
    id: 5,
    image: '/images/recipes/rp-2.png',
    title: 'Arugula Lemon Parmesan Salad',
    description: 'A fresh and zesty salad made with peppery arugula, bright lemon dressing.',
    meta: '8 MIN • EASY PREP • 2 SERVES',
  },
  {
    id: 6,
    image: '/images/recipes/rp-2.png',
    title: 'Viola Garden Salad',
    description: 'A visually stunning salad featuring delicate viola flowers paired with fresh greens and a light honey-lemon dressing.',
    meta: '10 MIN • EASY PREP • 2-3 SERVES',
  },
];

// --- Component: Recipe Grid Section (Redesigned) ---
const RecipeGridSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
            <h2 className="text-[#3c5922] text-3xl md:text-[48px] font-bold leading-tight">
                Top Recipes You Can’t Miss
            </h2>
            <p className="text-gray-500 text-lg md:text-xl">
                Delicious dishes that are easy to make and perfect for every occasion
            </p>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {recipeData.map((recipe) => (
            // Beige Card Container
            <div 
              key={recipe.id} 
              className="flex flex-col bg-[#F3E9D2] rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              
              {/* Card Image */}
              <div className="relative w-full h-[250px] md:h-[280px]">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
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
                <div className="flex items-center justify-between mt-auto">
                  
                  {/* Left: Meta Info */}
                  <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-[#1a1a1a] uppercase">
                    {recipe.meta}
                  </span>
                  
                  {/* Right: View Recipe Button */}
                  <button className="border border-[#1a1a1a] rounded-full px-6 py-2 text-[11px] md:text-xs font-bold tracking-widest text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F3E9D2] transition-colors uppercase">
                    View Recipe
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
const RecipesPage = () => {
  return (
    <main className={`w-full min-h-screen bg-white ${spartan.variable} font-spartan`}>
      
      {/* --- Section 1: Hero Banner --- */}
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/recipes/r-bg.png"
            alt="Recipes Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Glassmorphism Card */}
        <div className="relative z-10 w-[95%] max-w-[1280px] rounded-[20px] overflow-hidden shadow-xl">
          
          {/* Blur/Gradient Layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c1a]/85 via-[#2f4f2f]/75 to-[#1a3c1a]/85 backdrop-blur-md"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center py-16 md:py-20 px-4">
            <h1 className="text-white text-4xl md:text-[64px] font-bold leading-tight mb-2 drop-shadow-md">
              Top 6 Must-Try Recipes
            </h1>
            <p className="text-[#d4c596] text-lg md:text-[32px] font-bold tracking-wide drop-shadow-md mt-2">
              Flavors you’ll love
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

      {/* --- Section 2: Recipe Grid Section (Redesigned) --- */}
      <RecipeGridSection />

    </main>
  );
};

export default RecipesPage;