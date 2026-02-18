import React from 'react';
import { notFound } from 'next/navigation';
import { League_Spartan } from 'next/font/google';
import Link from 'next/link';
import {
  Star,
  Utensils,
  Activity,
  Leaf,
  Droplet,
  Zap,
  Heart,
  ArrowLeft
} from 'lucide-react';

import { produceData } from '@/data/produceData';

const IMAGE_BASE_URL = "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture";

const getImageUrl = (path: string) => {
  if (!path) return path;
  if (path.startsWith("/images/")) {
    const cleanedPath = path.replace("/images", "");
    return `${IMAGE_BASE_URL}${cleanedPath}`;
  }
  return path;
};

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Generate static params for all produce items
export async function generateStaticParams() {
  return produceData.map((product) => ({
    slug: product.slug,
  }));
}

// Helper to get random related products
const getRelatedProducts = (currentId: number) => {
  const otherProducts = produceData.filter((p) => p.id !== currentId);
  return otherProducts.sort(() => 0.5 - Math.random()).slice(0, 3);
};

// ==========================================
// NUTRITION CARD COMPONENT
// ==========================================
const NutritionCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="flex items-center gap-3 bg-[#e8ead5] border border-[#c9cdb8] rounded-xl px-4 py-3 shadow-sm w-full transition-transform hover:scale-[1.02]">
    <div className="w-10 h-10 rounded-full bg-[#5a6e3c] flex items-center justify-center text-white flex-shrink-0">
      <Icon size={18} strokeWidth={2.5} />
    </div>
    <div className="flex flex-col">
      <span className="text-[#5a6e3c] font-bold text-[10px] uppercase tracking-wider opacity-90 mb-0.5">
        {label}
      </span>
      <span className="text-[#2a401a] font-bold text-base leading-none">
        {value}
      </span>
    </div>
  </div>
);

export default async function NutrientDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = produceData.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  const relatedProducts = getRelatedProducts(product.id);

  return (
    <div className={`w-full min-h-screen bg-white ${spartan.className} pb-20`}>
      
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-10">
        <Link href="/our-produces" className="inline-flex items-center gap-2 text-[#3f5f26] font-semibold hover:underline group">
          <div className="w-8 h-8 rounded-full bg-[#f0f4e6] flex items-center justify-center group-hover:bg-[#d4dcb8] transition-colors border border-[#d4dcb8]">
             <ArrowLeft size={16} /> 
          </div>
          <span className="text-sm uppercase tracking-wide">Back to Produce</span>
        </Link>
      </div>

      {/* 1. Header / Title Section */}
      <div className="container mx-auto px-6 py-12 text-center max-w-4xl">
        <h1 className="text-[#2a401a] text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          {product.title}
        </h1>
        <p className="text-[#6b6b6b] text-lg md:text-xl font-light leading-relaxed">
          {product.description}
        </p>
        
        {/* Star Rating */}
        <div className="flex justify-center gap-1.5 mt-6 text-[#facc15]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} fill="currentColor" stroke="none" />
          ))}
        </div>
      </div>

      {/* 2. Main Content Grid (Image + Nutrition) */}
      <div className="container mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">
          
          {/* Left: Product Image */}
          <div className="w-full lg:w-[40%]">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] relative">
              <img 
                src={getImageUrl(product.image)} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Nutrition Info */}
          <div className="w-full lg:w-[55%]">
            {product.nutrition ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                <NutritionCard icon={Utensils} label="Calories" value={product.nutrition.calories} />
                <NutritionCard icon={Activity} label="Protein" value={product.nutrition.protein} />
                <NutritionCard icon={Leaf} label="Fiber" value={product.nutrition.fiber} />
                <NutritionCard icon={Droplet} label="Vitamin A" value={product.nutrition.vitaminA} />
                <NutritionCard icon={Zap} label="Vitamin K" value={product.nutrition.vitaminK} />
                <NutritionCard icon={Heart} label="Folate" value={product.nutrition.folate} />
              </div>
            ) : (
              <div className="bg-[#f0f4e6] rounded-3xl p-16 text-center border border-[#d4dcb8]">
                <Leaf className="w-16 h-16 text-[#8c9e78] mx-auto mb-4" />
                <p className="text-[#3f5f26] text-2xl font-medium">Detailed nutrition information coming soon.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* 3. Related Products Section */}
      <div className="container mx-auto px-6 max-w-7xl">
        <h3 className="text-[#3f5f26] text-3xl md:text-4xl font-bold mb-10 text-left">
          You may also be interested in the following
        </h3>
        
        <div className="flex flex-wrap justify-start gap-8">
          {relatedProducts.map((related) => (
            <div key={related.id} className="flex-shrink-0 w-[300px] md:w-[360px] relative group select-none">
              <Link href={`/nutrients/${related.slug}`} className="block">
                <div className="w-full">
                  
                  {/* Title Above Image */}
                  <h4 className="text-[#e06836] text-xl font-bold mb-4 leading-tight">
                    {related.title}
                  </h4>

                  {/* Image Container with Button */}
                  <div className="relative">
                    <div className="w-full h-64 rounded-[24px] overflow-hidden bg-gray-100 shadow-lg">
                      <img 
                        src={getImageUrl(related.image)} 
                        alt={related.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Button Overlay at Bottom Center */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
                      <span className="bg-[#e06836] text-white text-base font-semibold py-3 px-10 rounded-full shadow-xl whitespace-nowrap group-hover:bg-[#c95b2e] transition-colors inline-block">
                        Nutrition Info
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}