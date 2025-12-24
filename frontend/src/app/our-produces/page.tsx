"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { League_Spartan } from 'next/font/google';

// ==========================================
// 0. CONFIGURATION & HELPERS
// ==========================================

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const generateSlug = (title: string) => 
  title.toLowerCase()
    .replace(/’/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

interface ProduceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

// ==========================================
// 1. HERO SECTION
// ==========================================
const ProduceSection = () => {
  return (
  <section className="relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden gap-8">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <img
      src="/images/ourProduce/Op-bg.png"
      alt="Fresh produce background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Glass Container (Width Increased) */}
  <div
    className="relative z-10 w-[95%] max-w-7xl rounded-[30px] px-6 py-16 text-center shadow-lg"
    style={{
      background: `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)`,
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      backgroundBlendMode: 'overlay, normal',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}
  >
    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
      Our Produces
    </h2>
    <p className="text-[#e8e0b5] text-lg md:text-2xl font-medium tracking-wide drop-shadow-sm">
      Every crop cultivated with care, freshness, and precision.
    </p>
  </div>

  {/* Button (Moved Outside & WhatsApp Logic Added) */}
  <a
    href="https://wa.me/919220309252?text=Hello%2C%20I%20would%20like%20to%20request%20samples."
    target="_blank"
    rel="noopener noreferrer"
    className="relative z-10 bg-white text-[#1a3c1e] hover:bg-gray-100 transition-colors duration-300 font-semibold py-3 px-8 rounded-full shadow-md text-lg cursor-pointer"
  >
    Get Samples
  </a>
</section>
  );
};

// ==========================================
// 2. SHARED CARD COMPONENT (UPDATED)
// ==========================================
const ProduceCard = ({ item }: { item: ProduceItem }) => {
  const slug = generateSlug(item.title);
  
  // Logic: Check if the item is the "Specialty Chef’s Mix"
  const isCustomMix = item.title.includes("Specialty Chef’s Mix");

  return (
    <div className="flex-shrink-0 w-[290px] md:w-[320px] h-[500px] relative group select-none snap-start">
      <div className="w-full bg-[#ede4d3] rounded-[30px] p-5 pb-8 relative h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
        
        {/* Image */}
        <div className="w-full h-52 flex-shrink-0 rounded-[20px] overflow-hidden mb-6 bg-[#e0d8c8]">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="px-1 mb-12 flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3f5f26]"></span>
            <span className="text-[#3f5f26] text-xs font-bold uppercase tracking-wider">
              {item.category}
            </span>
          </div>
          <h3 className="text-[#e06836] text-2xl md:text-3xl font-bold mb-3 leading-tight line-clamp-2">
            {item.title}
          </h3>
          <p className="text-[#6b6b6b] text-base leading-relaxed line-clamp-4">
            {item.description}
          </p>
        </div>

        {/* Nutrition Button - HIDDEN for Custom Mix */}
        {!isCustomMix && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
              <Link href={`/nutrients/${slug}`}>
                <button className="bg-[#e06836] text-white text-sm font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#c95b2e] transition-colors whitespace-nowrap">
                    Nutrition Info
                </button>
              </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 3. REUSABLE CAROUSEL COMPONENT
// ==========================================

interface CarouselSectionProps {
  title: string;
  subtitle: string;
  items: ProduceItem[];
  hasTopBorder?: boolean;
}

const CarouselSection = ({ title, subtitle, items, hasTopBorder = false }: CarouselSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Calculate pages on mount and resize
  useEffect(() => {
    const calculatePages = () => {
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.clientWidth;
        // Card width (320) + gap (24) = 344px approximately
        const itemWidth = 344;
        const itemsPerPage = Math.floor(containerWidth / itemWidth) || 1;
        const pages = Math.ceil(items.length / itemsPerPage);
        setTotalPages(pages);
      }
    };

    calculatePages();
    window.addEventListener('resize', calculatePages);
    return () => window.removeEventListener('resize', calculatePages);
  }, [items.length]);

  // Handle scroll event to update active dot based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      
      const pageIndex = Math.round(scrollLeft / containerWidth);
      setActivePage(pageIndex);
    }
  };

  // Scroll to specific page window when dot is clicked
  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const targetScroll = pageIndex * container.clientWidth;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setActivePage(pageIndex);
    }
  };

  return (
    <section className={`w-full ${hasTopBorder ? 'border-t border-gray-100 pt-20' : ''} pb-12`}>
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-[#3f5f26] text-5xl md:text-6xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-[#6b6b6b] text-xl font-light">
          {subtitle}
        </p>
      </div>

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-6 px-8 md:px-16 pb-12 pt-4 snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <ProduceCard key={item.id} item={item} />
        ))}
        <div className="w-8 flex-shrink-0" />
      </div>

      {/* Dots Navigation (Pages) */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`transition-all duration-300 rounded-full ${
                activePage === index 
                  ? 'w-4 h-4 bg-[#3f5f26]' // Active: Dark Green
                  : 'w-4 h-4 bg-[#e0e0e0] hover:bg-[#c0c0c0]' // Inactive: Light Gray
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

// ==========================================
// 4. DATA
// ==========================================

const leafyGreensData: ProduceItem[] = [
  { id: 1, category: "LEAFY GREENS", title: "Specialty Chef’s Mix (Custom)", description: "A wholesome mix of leafy greens combining crunch, color, and refreshing aroma.", image: "/images/ourProduce/Lg-mix.png" },
  { id: 2, category: "LEAFY GREENS", title: "Romaine Lettuce", description: "Crisp, sturdy leaves with a mild, refreshing flavor.", image: "/images/ourProduce/Lg-romlet.png" },
  { id: 3, category: "LEAFY GREENS", title: "Kale", description: "Nutrient-dense leafy green with a hearty, earthy taste.", image: "/images/ourProduce/Lg-kale.png" },
  { id: 4, category: "LEAFY GREENS", title: "Red Leaf Lettuce", description: "Tender leaves with a slightly sweet, delicate flavor.", image: "/images/ourProduce/Lg-redleaf.png" },
  { id: 5, category: "LEAFY GREENS", title: "Green Leaf Lettuce", description: "Soft, leafy texture with a mild and fresh taste.", image: "/images/ourProduce/Lg-greenleaf.png" },
  { id: 6, category: "LEAFY GREENS", title: "Basil", description: "Aromatic herb with a sweet, peppery fragrance and vibrant flavor.", image: "/images/ourProduce/Lg-basil.png" },
  { id: 7, category: "LEAFY GREENS", title: "Butter Head Lettuce", description: "A soft, tender leafy green with a mild, buttery flavor, perfect for fresh salads and wraps.", image: "/images/ourProduce/Lg-butterhead.png" },
  { id: 8, category: "LEAFY GREENS", title: "Bok Choy", description: "A crisp, nutritious leafy green with juicy stalks and tender leaves, commonly used in stir-fries and soups.", image: "/images/ourProduce/Lg-bokChoy.png" },
  { id: 9, category: "LEAFY GREENS", title: "Arugula", description: "Peppery, distinctive leaves that add a spicy kick to salads.", image: "/images/ourProduce/Lg-mix.png" },
  { id: 10, category: "LEAFY GREENS", title: "Swiss Chard", description: "Large, tender leaves with colorful stalks and a mild, sweet flavor.", image: "/images/ourProduce/Lg-kale.png" }
];

const babyGreensData: ProduceItem[] = [
  { id: 1, category: "LEAFY GREENS", title: "Specialty Chef’s Mix (Custom)", description: "A wholesome mix combining earthy spinach, hearty kale, and zesty sorrel vein leaf.", image: "/images/ourProduce/Bg-mix.png" },
  { id: 2, category: "LEAFY GREENS", title: "Spinach", description: "Soft, nutrient-rich leaves with a mild, earthy flavor.", image: "/images/ourProduce/Bg-Spinach.png" },
  { id: 3, category: "LEAFY GREENS", title: "Baby Kale", description: "Hearty, dark green leaves packed with bold, earthy taste.", image: "/images/ourProduce/Bg-babykale.png" },
  { id: 4, category: "LEAFY GREENS", title: "Sorrel Vein Leaf", description: "Bright, tangy leaves with a refreshing, lemony bite.", image: "/images/ourProduce/Bg-sorrel.png" }
];

const specialtyHerbsData: ProduceItem[] = [
  { id: 1, category: "SPECIALTY HERBS", title: "Specialty Chef’s Mix (Custom)", description: "Aromatic leafy and specialty herbs with fresh, tangy, and fragrant flavors.", image: "/images/ourProduce/Sp-mix.png" },
  { id: 2, category: "SPECIALTY HERBS", title: "Thai Basil", description: "A fragrant specialty herb with a spicy, anise-like flavor, widely used in Southeast Asian cuisine.", image: "/images/ourProduce/Sp-thaibasil.png" },
  { id: 3, category: "SPECIALTY HERBS", title: "Dill", description: "A delicate specialty herb with feathery leaves and a fresh, slightly tangy flavor, ideal for seafood and dressings.", image: "/images/ourProduce/Sp-Dilli.png" },
  { id: 4, category: "SPECIALTY HERBS", title: "Lemon Balm", description: "A refreshing specialty herb with a gentle lemon aroma, commonly used in teas and wellness blends.", image: "/images/ourProduce/Sp-lemon.png" },
  { id: 5, category: "SPECIALTY HERBS", title: "Sorrel", description: "A vibrant specialty herb with tender leaves and a sharp, lemony taste, perfect for soups and sauces.", image: "/images/ourProduce/Sp-sorrel.png" },
  { id: 6, category: "SPECIALTY HERBS", title: "Italian Basil", description: "A classic specialty herb with sweet, aromatic leaves, essential in Italian and Mediterranean dishes.", image: "/images/ourProduce/Sp-italian.png" },
];

const edibleFlowersData: ProduceItem[] = [
  { id: 1, category: "EDIBLE FLOWERS", title: "Specialty Chef’s Mix (Custom)", description: "Vibrant edible flowers with delicate, tangy, and slightly sweet flavors.", image: "/images/ourProduce/Ef-mix.png" },
  { id: 2, category: "EDIBLE FLOWERS", title: "Nasturtium", description: "Bright, peppery edible flowers with a spicy, tangy taste, perfect for salads and garnishes.", image: "/images/ourProduce/Ef-nasturtium.png" },
  { id: 3, category: "EDIBLE FLOWERS", title: "Viola", description: "Delicate edible flowers with a mild, slightly sweet flavor, often used for garnishes and desserts.", image: "/images/ourProduce/Ef-viola.png" },
  { id: 4, category: "EDIBLE FLOWERS", title: "Marigold Petals", description: "Colorful edible petals with a slightly citrusy, mildly bitter flavor, ideal for decoration and flavoring dishes.", image: "/images/ourProduce/Ef-mari.png" }
];

// ==========================================
// 5. STATIC SECTIONS
// ==========================================

const CustomOrderSection = () => {
  return (
    <section className="w-full border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-[#3f5f26] text-5xl md:text-6xl font-bold mb-6">
          Customized – on special order
        </h2>
        <p className="text-[#6b6b6b] text-xl font-light mb-16">
          Grown with precision for unmatched flavor and quality.
        </p>
        <p className="text-gray-600 text-xl md:text-2xl leading-relaxed mx-auto max-w-5xl text-justify md:text-center font-light">
          From cultivation to harvest and delivery, we meticulously grow, hand-pick, and package each order to cater to your unique crop requirements. To facilitate the timely customized production and delivery of your desired varieties of specialty herbs, rare crops, and edible flowers, please provide 15 to 30 days' advance notice of your needs.
        </p>
      </div>
    </section>
  );
};

const GetInTouchSection = () => {
  return (
    <section className="w-full border-t border-gray-100 pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-[#3f5f26] text-5xl md:text-6xl font-bold mb-4">
          Get in Touch
        </h2>
        <p className="text-[#6b6b6b] text-xl font-light mb-16">
          We’d love to hear from you—whether it’s a question, feedback, or collaboration.
        </p>

        <div className="w-full max-w-5xl mx-auto text-left">
          <h3 className="text-[#3e4f30] text-3xl font-bold mb-6 pl-1">
            Send a message
          </h3>
          <form className="space-y-6">
            <div className="w-full">
              <textarea 
                rows={6} 
                className="w-full p-4 border border-[#8c9e78] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3f5f26] resize-none text-gray-700 text-lg"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name *" className="w-full p-4 border border-[#8c9e78] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3f5f26] text-gray-700 text-lg" />
              <input type="email" placeholder="Your Email *" className="w-full p-4 border border-[#8c9e78] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3f5f26] text-gray-700 text-lg" />
              <input type="text" placeholder="Subject" className="w-full p-4 border border-[#8c9e78] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3f5f26] text-gray-700 text-lg" />
              <input type="tel" placeholder="Phone" className="w-full p-4 border border-[#8c9e78] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3f5f26] text-gray-700 text-lg" />
            </div>
            <div className="mt-8">
              <button type="button" className="bg-[#3f5f26] hover:bg-[#2f471d] text-white text-lg font-semibold py-4 px-8 rounded-full flex items-center gap-2 transition-colors shadow-lg">
                Submit Now
                <ArrowUpRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. MAIN PAGE EXPORT
// ==========================================
export default function OurProducePage() {
  return (
    <div className={`flex flex-col w-full bg-white gap-24 ${spartan.className}`}>
      <ProduceSection />
      
      {/* 1. Leafy Greens */}
      <CarouselSection 
        title="Leafy Greens"
        subtitle="Grown with precision for unmatched flavor and quality."
        items={leafyGreensData}
        hasTopBorder={false}
      />

      {/* 2. Baby Greens */}
      <CarouselSection 
        title="Baby Greens"
        subtitle="Grown with precision for unmatched flavor and quality."
        items={babyGreensData}
        hasTopBorder={true}
      />

      <CustomOrderSection />

      {/* 3. Specialty Herbs */}
      <CarouselSection 
        title="Specialty Herbs & Rare Crops"
        subtitle="Grown with precision for unmatched flavor and quality."
        items={specialtyHerbsData}
        hasTopBorder={true}
      />

      {/* 4. Edible Flowers */}
      <CarouselSection 
        title="Edible Flowers"
        subtitle="Grown with precision for unmatched flavor and quality."
        items={edibleFlowersData}
        hasTopBorder={true}
      />

      <GetInTouchSection />
    </div>
  );
}