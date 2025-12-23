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

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// ✅ This works in Server Components
export function generateStaticParams() {
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
  <div className="flex items-center gap-5 bg-[#dbe9c2] border border-[#a8b88d] rounded-2xl px-6 py-5 shadow-sm w-full transition-transform hover:scale-[1.01]">
    <div className="w-12 h-12 rounded-full bg-[#4a5e30] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
      <Icon size={22} strokeWidth={2.5} />
    </div>
    <div className="flex flex-col">
      <span className="text-[#3f5f26] font-extrabold text-[11px] md:text-xs uppercase tracking-widest opacity-80 mb-0.5">
        {label}
      </span>
      <span className="text-[#1a2e12] font-bold text-xl md:text-2xl leading-none">
        {value}
      </span>
    </div>
  </div>
);

// ✅ Server Component - No "use client"
export default function NutrientDetailPage({ params }: { params: { slug: string } }) {
  const product = produceData.find((p) => p.slug === params.slug);

  if (!product) {
    return notFound();
  }

  const relatedProducts = getRelatedProducts(product.id);

  return (
    <div className={`w-full min-h-screen bg-white ${spartan.className} pb-20`}>
      {/* Rest of your JSX - exactly the same */}
      
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
          <div className="w-full lg:w-[45%]">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] relative">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Nutrition Info */}
          <div className="w-full lg:w-[45%]">
            {product.nutrition ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full">
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
        <h3 className="text-[#2a401a] text-3xl md:text-4xl font-bold mb-10 text-center lg:text-left">
          You may also be interested in the following
        </h3>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-8">
          {relatedProducts.map((related) => (
            <div key={related.id} className="flex-shrink-0 w-[300px] md:w-[320px] h-[420px] relative group select-none">
              <Link href={`/nutrients/${related.slug}`} className="block h-full">
                <div className="w-full bg-[#ede4d3] rounded-[30px] p-5 pb-8 relative h-full flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  
                  <div className="w-full h-48 flex-shrink-0 rounded-[20px] overflow-hidden mb-4 bg-[#e0d8c8]">
                    <img 
                      src={related.image} 
                      alt={related.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="px-1 mb-4 flex-grow">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-[#3f5f26]"></span>
                        <span className="text-[#3f5f26] text-[10px] font-bold uppercase tracking-wider">
                          {related.category}
                        </span>
                      </div>
                    <h3 className="text-[#e06836] text-xl md:text-2xl font-bold mb-2 leading-tight line-clamp-2">
                      {related.title}
                    </h3>
                  </div>

                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
                      <span className="bg-[#e06836] text-white text-sm font-semibold py-3 px-8 rounded-full shadow-lg whitespace-nowrap group-hover:bg-[#c95b2e] transition-colors">
                          Nutrition Info
                      </span>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-[4.5rem] h-[4.5rem] pointer-events-none z-10">
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[#ede4d3] rounded-br-[30px] [mask:radial-gradient(circle_at_100%_100%,transparent_1.8rem,black_1.8rem)]"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}