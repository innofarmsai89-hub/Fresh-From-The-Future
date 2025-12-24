// src/app/recipeDetail/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { recipeData } from '@/data/recipeData'; 
import { League_Spartan } from 'next/font/google';
import SubscriptionBanner from '@/components/SubscriptionBanner';

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan',
});

// --- Simple Icons ---
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const BagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const DishIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.14 14.86a11.96 11.96 0 0 0-12.28 0"></path>
    <path d="M2 17h20"></path>
    <line x1="12" y1="3" x2="12" y2="5"></line>
    <path d="M12 5a7 7 0 0 1 7 7"></path>
    <path d="M12 5a7 7 0 0 0-7 7"></path>
  </svg>
);

// --- Static Params Generation ---
export async function generateStaticParams() {
  return recipeData.map((recipe) => ({
    slug: recipe.slug,
  }));
}

// --- Main Page Component ---
export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const recipe = recipeData.find((r) => r.slug === resolvedParams.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className={`w-full bg-white ${spartan.variable} font-spartan text-[#1a1a1a] pb-24`}>
      
      {/* 1. Recipe Details Section */}
      {/* UPDATED: Increased max-width to 1440px (~12% wider) */}
      <article className="max-w-[1440px] mx-auto px-6 pt-16 md:pt-20">
        
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-[56px] font-bold leading-tight text-[#3c5922] mb-6">
            {recipe.title}
          </h1>
          <p className="text-lg md:text-[20px] text-gray-600 max-w-[800px] mx-auto mb-10 leading-relaxed font-light">
            {recipe.description}
          </p>

          {/* Meta Info Row */}
          <div className="flex items-center justify-center gap-6 md:gap-12 text-xs md:text-sm font-bold tracking-widest text-[#1a1a1a] uppercase">
            <div className="flex items-center gap-2">
              <ClockIcon />
              <span>{recipe.meta.time}</span>
            </div>
            <div className="w-1 h-1 bg-black rounded-full opacity-30"></div>
            <div className="flex items-center gap-2">
              <BagIcon />
              <span>{recipe.meta.prep}</span>
            </div>
            <div className="w-1 h-1 bg-black rounded-full opacity-30"></div>
            <div className="flex items-center gap-2">
              <DishIcon />
              <span>{recipe.meta.serves}</span>
            </div>
          </div>
        </header>

        {/* Recipe Hero Image */}
        <div className="relative w-full h-[350px] md:h-[550px] rounded-[20px] overflow-hidden mb-16 shadow-md">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Instructions */}
          <section>
            <h2 className="text-3xl md:text-[42px] font-bold text-[#3c5922] mb-8">
              Instructions
            </h2>
            <div className="space-y-8 text-[17px] md:text-[19px] leading-[1.8] text-[#4a4a4a] font-light">
              {recipe.instructions.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Right Column: Ingredients & Nutrition Sidebar */}
          <aside className="space-y-6 w-full">
            
            {/* Ingredients Card */}
            <div className="bg-[#F6F1E3] rounded-[20px] p-8 md:p-10 border border-[#e8dfc8]">
              <h3 className="text-sm font-bold text-[#e06836] mb-6 uppercase tracking-widest">
                Ingredients
              </h3>
              <ul className="space-y-4 text-[17px] text-[#1a1a1a] leading-snug">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-[#1a1a1a] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="font-medium text-gray-800">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutrition Card */}
            <div className="bg-[#F6F1E3] rounded-[20px] p-8 md:p-10 border border-[#e8dfc8]">
              <h3 className="text-sm font-bold text-[#e06836] mb-1 uppercase tracking-widest">
                Nutritional Value
              </h3>
              <p className="text-xs text-gray-500 mb-6 font-medium italic">
                {recipe.nutrition.title}
              </p>
              
              <ul className="space-y-2 text-[16px] text-[#1a1a1a] font-bold mb-8">
                {recipe.nutrition.values.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
              
              <p className="text-[10px] text-gray-400 leading-tight uppercase tracking-wide border-t border-gray-300 pt-4">
                {recipe.nutrition.note}
              </p>
            </div>

          </aside>
        </div>

      </article>

      {/* 2. Subscription Banner Section */}
      {/* UPDATED: Matching the 1440px width constraint */}
      <div className="max-w-[1440px] mx-auto px-6 mt-20">
        <SubscriptionBanner />
      </div>
    </main>
  );
}