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
    image: '/images/recipes/rp-2.png', 
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

// --- Component: Recipe Grid Section (Glassmorphism Added) ---
const RecipeGridSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 overflow-hidden">
      
      {/* Background Image for the Section */}
      <div className="absolute inset-0 -z-10">
         <Image 
            src="/images/recipes/r-bg.png"
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
                  src={recipe.image}
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
                    {recipe.meta}
                  </span>
                  
                  {/* Right: View Recipe Button */}
                  <button className="
                    border border-[#1a1a1a] rounded-full px-6 py-2 
                    text-[11px] md:text-xs font-bold tracking-widest uppercase
                    text-[#1a1a1a] 
                    hover:bg-[#1a1a1a] hover:text-[#F3E9D2] 
                    transition-colors
                  ">
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
              src="/images/recipes/chef-council.jpg"
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c1a]/85 via-[#2f4f2f]/75 to-[#1a3c1a]/85 backdrop-blur-md"></div>
          <div className="relative z-20 flex flex-col items-center justify-center text-center py-16 md:py-20 px-4">
            <h1 className="text-white text-4xl md:text-[64px] font-bold leading-tight mb-2 drop-shadow-md">
              Top 6 Must-Try Recipes
            </h1>
            <p className="text-[#d4c596] text-lg md:text-[32px] font-bold tracking-wide drop-shadow-md mt-2">
              Flavors you'll love
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

      {/* --- Section 2: Recipe Grid Section --- */}
      <RecipeGridSection />

      {/* --- Section 3: Chef Advisory Council --- */}
      <ChefAdvisorySection />

    </main>
  );
};

export default RecipesPage;