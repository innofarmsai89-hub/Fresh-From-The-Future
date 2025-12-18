import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { League_Spartan } from 'next/font/google';

// --- Font Configuration ---
const spartan = League_Spartan({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan' 
});

// --- Data Constants ---
const trends = [
  {
    category: "LEAFY GREENS",
    title: "Green Leaf Lettuce",
    image: "/images/home/leaf-lettuce.png", 
    link: "#"
  },
  {
    category: "BABY GREENS",
    title: "Spinach",
    image: "/images/home/spinach.png", 
    link: "#"
  },
  {
    category: "MICROGREENS",
    title: "Arugula",
    image: "/images/home/arugula.png", 
    link: "#"
  },
  {
    category: "SPECIALTY HERBS & RARE CROPS",
    title: "Thai Basil",
    image: "/images/home/thai-basil.png", 
    link: "#"
  }
];

const features = [
    {
      icon: "/images/home/Leaf-icon.png",
      title: "INNOFarmsXOS",
      subtitle: "AI-Powered Freshness",
      desc: "Climate, nutrients, and light controlled to the micron — ensuring unwavering flavor, crunch & color."
    },
    {
      icon: "/images/home/globe.png",
      title: "Global SOPs",
      subtitle: "UAE & Singapore Model Farms",
      desc: "Hygiene, bio-security & operations modeled on our UAE and Singapore facilities for world-class standards."
    },
    {
      icon: "/images/home/Cocktail.png",
      title: "Bar Program",
      subtitle: "Bar Botanica Collection",
      desc: "Botanicals, edible flowers & micro-herbs curated for progressive cocktails & bar programs."
    },
    {
      icon: "/images/home/EmptyTrash.png",
      title: "Zero-Waste",
      subtitle: "Pantry & Preservation",
      desc: "Dehydrated micro powders, herb salts & infused oils crafted from surplus crops for a zero-waste kitchen."
    },
    {
      icon: "/images/home/ChefHat.png",
      title: "Co-Created with Chefs",
      subtitle: "Exclusive Signature Mixes",
      desc: "Monthly rotating blends designed in collaboration with India’s leading chefs — exclusive to your kitchen."
    }
];

// --- Helper Components ---

function ProductCard({ title, image }: { title: string, image: string }) {
    return (
        <div className="relative w-[280px] h-[388px] group">
            <div className="absolute top-0 left-0 w-[280px] h-[364px] bg-[#FFF9F1] border border-[rgba(249,192,106,0.42)] rounded-[10px] box-border overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[271px] rounded-t-[10px] overflow-hidden">
                     <Image 
                        src={image} 
                        alt={title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105" 
                     />
                </div>
                <div className="absolute top-[288px] w-full text-center px-4">
                    <h3 className="font-bold text-[22px] text-[#3D550C] leading-[29px]">
                        {title}
                    </h3>
                </div>
            </div>
            <button className="absolute top-[340px] left-1/2 -translate-x-1/2 w-[134px] h-[48px] bg-[#3D550C] rounded-[10px] shadow-[0px_6px_12px_rgba(249,192,106,0.22)] flex items-center justify-center text-white font-bold text-[16px] transition-all hover:bg-[#2e4009] hover:shadow-lg z-10">
                View Now
            </button>
        </div>
    )
}

function TechCard({ feature }: { feature: any }) {
  return (
    <div className="rounded-[10px] p-8 min-h-[217px] flex flex-col justify-center relative hover:shadow-lg transition-shadow duration-300 border border-[#F9C06A]/30"
         style={{ background: 'rgba(220, 188, 136, 0.44)' }}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-[54px] h-[54px] bg-[#3D550C] rounded-full flex items-center justify-center shrink-0 shadow-sm">
          <div className="relative w-[30px] h-[30px]">
             {/* Using simple img tag for icons if Next Image causes issues with SVGs/local files without width/height */}
             <img 
                src={feature.icon} 
                alt={feature.title} 
                className="w-full h-full object-contain invert brightness-0 filter" 
             />
          </div>
        </div>
        <div>
            <h3 className="font-bold text-[24px] text-[#404A3D] leading-[30px]">
            {feature.title}
            </h3>
             <span className="text-[14px] text-[#3D550C] font-bold uppercase tracking-wider block md:hidden mt-1">
                {feature.subtitle}
             </span>
        </div>
      </div>
      <h4 className="hidden md:block font-bold text-[15px] text-[#3D550C] uppercase tracking-wide mb-2">
        {feature.subtitle}
      </h4>
      <p className="font-medium text-[16px] md:text-[18px] leading-[26px] text-[#1E1E1E]">
        {feature.desc}
      </p>
    </div>
  );
}

function StepCard({ number, text, image }: { number: string, text: string, image: string }) {
    return (
        <div className="relative pt-12 h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[73px] h-[69px] bg-[#E3572B] rounded-full flex items-center justify-center z-10 shadow-lg">
                <span className="font-bold text-white text-[32px]">{number}</span>
            </div>
            <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[10px] p-6 pt-16 flex flex-col items-center text-center h-full hover:shadow-md transition-shadow">
                <div className="w-full h-[180px] relative rounded-[10px] overflow-hidden mb-6 bg-white">
                    <Image src={image} alt={`Step ${number}`} fill className="object-contain p-4" />
                </div>
                <p className="font-medium text-[16px] text-[#3D550C] leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

// --- Main Page Component ---

export default function HomePage() {
  return (
    <main className={`${spartan.variable} font-spartan w-full overflow-x-hidden bg-white`}>
    
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[700px] md:h-[850px] flex items-center overflow-hidden">
        
        {/* --- LAYER 1: Background Image & Gradient --- */}
        <div className="absolute inset-0 z-0">
             <Image 
                src="/images/home/hero-bg.png" 
                alt="Background Texture" 
                fill 
                className="object-cover" 
                priority
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* --- LAYER 2: Content Container --- */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 xl:px-0 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-20 lg:pt-0">
          
          {/* Left Side: Text Content */}
          <div className="max-w-[800px] flex flex-col text-center lg:text-left items-center lg:items-start">
              <span className="text-[#DCBC88] font-bold tracking-widest text-sm md:text-base mb-4 uppercase">
                Beyond Organic • Traceable • Hyper-Local
              </span>
              <h1 className="font-bold text-[40px] md:text-[64px] leading-[1.1] text-white mb-6">
                India’s First Premium Culinary Innovation Brand.
              </h1>
              
              <p className="font-medium text-[16px] md:text-[20px] leading-[160%] text-white/90 mb-10 max-w-2xl">
                Ultra-premium, chef-focused, AI-powered & traceable fresh produce — grown under UAE/Singapore-grade precision farming technology by INNOFarms.AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="border-2 border-[#DCBC88] text-[#DCBC88] px-8 py-3 rounded-full text-[16px] font-bold hover:bg-[#DCBC88] hover:text-[#3D550C] transition-all">
                  Book A Chef Tasting
                </button>
                <button className="border-2 border-[#DCBC88] text-[#DCBC88] px-8 py-3 rounded-full text-[16px] font-bold hover:bg-[#DCBC88] hover:text-[#3D550C] transition-all">
                  Explore Our Produce
                </button>
              </div>
              
              <h3 className="font-bold text-[24px] md:text-[32px] text-white">
                Ready to Elevate Your Ingredients?
              </h3>
          </div>

          {/* Right Side: Hero Image (Chef Hand) */}
          <div className="hidden lg:block w-[400px] h-[550px] relative shrink-0 rounded-[40px] overflow-hidden ml-10 shadow-2xl border-4 border-white/10">
             <Image 
                src="/images/home/heroImage.png" 
                alt="Chef Sprinkling Greens" 
                fill 
                className="object-cover"
                priority
             />
          </div>

        </div>
      </section>

      {/* --- Why Are We Different? --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">Why are we different?</h2>
            <p className="text-xl text-[#1E1E1E] font-medium">Engineered freshness for culinary excellence.</p>
        </div>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Card 1 - Highlighted */}
            <div className="bg-[#DCBC88]/30 rounded-[30px] p-8 flex flex-col items-center text-center h-[280px] justify-center border border-[#DCBC88]/50">
                <div className="w-[80px] h-[80px] mb-4 relative">
                   <Image src="/images/home/coffee-beans.png" alt="Non GMO" fill className="object-contain" />
                </div>
                <h3 className="font-bold text-[22px] text-[#3D550C] mb-2 leading-tight">Non GMO & <br/>Pesticide Free</h3>
                <p className="text-[14px] text-[#1E1E1E] leading-relaxed">Only the best-quality seeds were sown, promising a rich harvest.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center h-[280px] justify-center hover:shadow-md transition-shadow">
                 <div className="w-[80px] h-[80px] mb-4 relative">
                   <Image src="/images/home/badge.png" alt="Standard" fill className="object-contain" />
                </div>
                <h3 className="font-bold text-[22px] text-[#3D550C] mb-2 leading-tight">UAE & Singapore<br/>Grade Farming</h3>
                <p className="text-[14px] text-[#1E1E1E] leading-relaxed">Used AI & IOT SAAS technology by award winning INNOFarms Platform</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center h-[280px] justify-center hover:shadow-md transition-shadow">
                <div className="w-[80px] h-[80px] mb-4 relative">
                   <Image src="/images/home/hyper-local.png" alt="Hyper Local" fill className="object-contain" />
                </div>
                <h3 className="font-bold text-[22px] text-[#3D550C] mb-2 leading-tight">Hyper-Local</h3>
                <p className="text-[14px] text-[#1E1E1E] leading-relaxed">From harvest-to-kitchen in under 24 hours for unmatched freshness.</p>
            </div>

            {/* Card 4 */}
             <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center h-[280px] justify-center hover:shadow-md transition-shadow">
                <div className="w-[80px] h-[80px] mb-4 relative">
                   <Image src="/images/home/con-qual.png" alt="Quality" fill className="object-contain" />
                </div>
                <h3 className="font-bold text-[22px] text-[#3D550C] mb-2 leading-tight">Consistent Quality</h3>
                <p className="text-[14px] text-[#1E1E1E] leading-relaxed">Uniform taste, texture, and appearance 365 days a year</p>
            </div>
        </div>

        {/* ROW 2 - Centered 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center h-[280px] justify-center hover:shadow-md transition-shadow">
                <div className="mb-4 w-[80px] h-[80px] relative">
                    <Image src="/images/home/traceability.png" alt="Traceability" fill className="object-contain" />
                </div>
                <h3 className="font-bold text-[22px] text-[#3D550C] mb-2 leading-tight">Traceability</h3>
                <p className="text-[14px] text-[#1E1E1E] leading-relaxed">Full crop traceability from seed to harvest via QR code.</p>
            </div>

            <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center h-[280px] justify-center hover:shadow-md transition-shadow">
                <div className="mb-4 w-[80px] h-[80px] relative">
                    <Image src="/images/home/custom-crop.png" alt="Custom Crop" fill className="object-contain" />
                </div>
                <h3 className="font-bold text-[22px] text-[#3D550C] mb-2 leading-tight">Custom Crop<br/>Requests</h3>
                <p className="text-[14px] text-[#1E1E1E] leading-relaxed">Grown specifically to match your menu and seasonal needs.</p>
            </div>

            <div className="bg-[#FFF9F1] border border-[#F9C06A]/40 rounded-[30px] p-8 flex flex-col items-center text-center h-[280px] justify-center hover:shadow-md transition-shadow">
                <div className="mb-4 w-[80px] h-[80px] relative">
                    <Image src="/images/home/no-middlemen.png" alt="No Middlemen" fill className="object-contain" />
                </div>
                <h3 className="font-bold text-[22px] text-[#3D550C] mb-2 leading-tight">No Middlemen</h3>
                <p className="text-[14px] text-[#1E1E1E] leading-relaxed">Direct from our controlled environment farm to your kitchen.</p>
            </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
             <p className="text-xl text-[#1E1E1E] font-medium mb-2">Where technology meets taste, every leaf perfected.</p>
             <h2 className="font-bold text-[36px] text-[#3D550C]">Join Us Today!</h2>
        </div>
      </section>

      {/* --- The Greens Leading the Trend --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 bg-white">
        <div className="text-center mb-16">
          <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">
            The Greens Leading The Trend
          </h2>
          <p className="text-lg md:text-xl text-[#1E1E1E] opacity-80">
            The freshest, crunchiest varieties shaping today’s culinary trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trends.map((item, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-square rounded-[30px] overflow-hidden mb-6 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col items-start px-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5B8C51]"></span>
                  <span className="text-[12px] font-bold tracking-widest text-[#999999] uppercase">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-bold text-[24px] text-[#3D550C] mb-4 leading-tight">
                  {item.title}
                </h3>

                <Link href={item.link}>
                  <button className="bg-[#DCBC88] hover:bg-[#cbb082] transition-colors rounded-[10px] px-6 py-2.5 flex items-center gap-2">
                    <span className="font-bold text-[15px] text-[#404A3D]">
                      Peek Inside
                    </span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="stroke-[#404A3D] mt-0.5">
                      <path d="M1 11L11 1M11 1H3M11 1V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="py-20 bg-[#FDFDFD]">
          <div className="text-center mb-16">
            <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">Feedback from Visionary Chefs</h2>
            <p className="text-xl text-[#1E1E1E] font-medium">Hear how chefs praise our innovative flavors and inspiring service.</p>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                  <div className="w-full max-w-[393px] h-[220px] bg-gray-200 rounded-[16px] mb-6 relative overflow-hidden shadow-md">
                      <Image src="/images/home/bricks&beans.png" alt="Chef" fill className="object-cover"/>
                  </div>
                  <h3 className="font-bold text-[24px] text-[#3D550C]">Bricks and Beans</h3>
              </div>
               <div className="flex flex-col items-center">
                  <div className="w-full max-w-[393px] h-[220px] bg-gray-200 rounded-[16px] mb-6 relative overflow-hidden shadow-md">
                     <Image src="/images/home/thebigtree.png" alt="Chef" fill className="object-cover"/>
                  </div>
                  <h3 className="font-bold text-[24px] text-[#3D550C]">The Big Tree</h3>
              </div>
               <div className="flex flex-col items-center">
                  <div className="w-full max-w-[393px] h-[220px] bg-gray-200 rounded-[16px] mb-6 relative overflow-hidden shadow-md">
                     <Image src="/images/home/wine-company.png" alt="Chef" fill className="object-cover"/>
                  </div>
                  <h3 className="font-bold text-[24px] text-[#3D550C]">Wine Company</h3>
              </div>
          </div>
      </section>

      {/* --- Technology Cultivates Taste --- */}
      <section className="py-24 max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">
              Where Technology Cultivates Taste
            </h2>
            <p className="text-lg md:text-xl text-[#1E1E1E] max-w-3xl mx-auto font-medium">
              Every leaf, every microgreen, every flower — grown with precision, data, and a chef’s vision.
            </p>
          </div>

          <div className="flex flex-col gap-6 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {features.slice(0, 3).map((feature, idx) => (
                <TechCard key={idx} feature={feature} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-2/3 mx-auto w-full">
              {features.slice(3, 5).map((feature, idx) => (
                <TechCard key={idx} feature={feature} />
              ))}
            </div>
          </div>

          {/* Newsletter Banner */}
           <div className="w-full relative rounded-[30px] overflow-hidden h-[300px] flex items-center justify-center bg-[#404A3D]">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/contact/subscribe-bg.png" 
                        alt="Newsletter Background" 
                        fill 
                        className="object-cover opacity-40 mix-blend-overlay"
                    />
                </div>
  
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1100px] px-6 gap-8">
                    
                    <div className="text-center lg:text-left text-white">
                        <h2 className="font-bold text-[36px] md:text-[48px] leading-tight mb-2">
                            Subscribe to our newsletter
                        </h2>
                        <p className="font-medium text-[18px] opacity-90">
                            Stay in the loop — fresh updates delivered to your inbox.
                        </p>
                    </div>
  
                    <div className="bg-white rounded-full p-2 pl-6 flex w-full max-w-[500px] h-[65px] shadow-lg items-center">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="flex-grow bg-transparent text-[#1E1E1E] placeholder-gray-400 font-medium text-[16px] focus:outline-none"
                        />
                        <button className="bg-[#3D550C] text-white font-bold text-[16px] px-8 h-full rounded-full hover:bg-[#2e3b09] transition-colors">
                            Subscribe
                        </button>
                    </div>
  
                </div>
            </div>
      </section>

     {/* --- Trace Your Crop’s Journey --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 bg-white">
        
        <div className="text-center mb-12">
          <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">
            Trace Your Crop’s Journey
          </h2>
          <p className="text-xl text-[#1E1E1E] font-medium opacity-80">
            Track your produce effortlessly. Just scan the QR code to unlock your crop's journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Image 1 */}
          <div className="relative w-full h-[320px] rounded-[30px] overflow-hidden group">
            <Image 
              src="/images/home/trace-1.png" 
              alt="Hydroponic Farm Rows" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Image 2 */}
          <div className="relative w-full h-[320px] rounded-[30px] overflow-hidden group">
            <Image 
              src="/images/home/trace-2.png" 
              alt="Chef Scanning QR Code" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Image 3 */}
          <div className="relative w-full h-[320px] rounded-[30px] overflow-hidden group">
             <Image 
              src="/images/home/trace-3.png" 
              alt="Traceability App View" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto text-center md:text-left">
          <p className="font-medium text-[18px] md:text-[20px] leading-[1.6] text-[#1E1E1E] mb-6">
            Your Crop Box comes with a QR code designed for complete transparency. Once scanned, it takes you to a dynamic Traceability Page where you can follow the crop’s lifecycle—from planting conditions and farm specifics to crop monitoring data, sustainability certifications, and harvest information.
          </p>
          <p className="font-medium text-[18px] md:text-[20px] leading-[1.6] text-[#1E1E1E]">
            Explore a live impact snapshot, check product descriptions, and view every milestone of the crop journey. With one quick scan, you gain full access to the story behind your produce, backed by real-time farm insights.
          </p>
        </div>

      </section>


      {/* --- Our Produce Categories --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">Our Produce Categories</h2>
              <p className="text-xl text-[#1E1E1E] font-medium">Premium greens, harvested for flavor, consistency, and culinary excellence.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
              <ProductCard title="Leafy Greens" image="/images/home/leafy-greens.png" />
              <ProductCard title="Baby Greens" image="/images/home/baby-greens.png" />
              <ProductCard title="Microgreens" image="/images/home/micro-greens.png" />
              <ProductCard title="Specialty Herbs" image="/images/home/speciality-herbs.png" />
              <ProductCard title="Edible Flowers" image="/images/home/edible-flowers.png" />
              <ProductCard title="Customized" image="/images/home/customized.png" />
          </div>
      </section>

      {/* --- How You Get Our Greens --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-4">How You Get Our Greens</h2>
              <p className="text-xl text-[#1E1E1E] font-medium">Grown smart. Picked fresh. Delivered green.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <StepCard number="1" text="Choose the product that best fits your needs." image="/images/home/getGreens1.png" />
              <StepCard number="2" text="Contact us directly or via WhatsApp for selecting the subscription plan." image="/images/home/getGreens2.png" />
              <StepCard number="3" text="Fill the subscription form after discussing with our executive." image="/images/home/getGreens3.png" />
              <StepCard number="4" text="Our team will harvest your order in the same day and deliver." image="/images/home/getGreens4.png" />
          </div>
      </section>


      {/* --- Contact Form Section --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 mb-20">
          <div className="bg-white rounded-[40px] shadow-[0px_4px_30px_rgba(0,0,0,0.05)] p-8 md:p-16 relative border border-[#EAEAEA]">
             <div className="text-center mb-12">
                <h2 className="font-bold text-[40px] md:text-[54px] text-[#3D550C] mb-3">Get in Touch</h2>
                <p className="text-lg md:text-xl text-[#1E1E1E] font-medium">We’d love to hear from you—whether it’s a question, feedback, or collaboration.</p>
             </div>

             <div className="max-w-5xl mx-auto">
                 <h3 className="font-bold text-[32px] text-[#404A3D] mb-8">Send a message</h3>
                 <form className="flex flex-col gap-6">
                     
                     {/* Top Row: Name & Email */}
                     <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="w-full">
                             <input type="text" placeholder="Your Name *" className="w-full h-[60px] border border-[#8C9E78] rounded-[12px] px-6 text-lg font-medium text-[#404A3D] placeholder-[#404A3D]/60 focus:outline-none focus:border-[#3D550C]" />
                        </div>
                        <div className="w-full">
                             <input type="email" placeholder="Your Email *" className="w-full h-[60px] border border-[#8C9E78] rounded-[12px] px-6 text-lg font-medium text-[#404A3D] placeholder-[#404A3D]/60 focus:outline-none focus:border-[#3D550C]" />
                        </div>
                     </div>

                     {/* Middle Row: Subject & Phone */}
                     <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="w-full">
                             <input type="text" placeholder="Subject" className="w-full h-[60px] border border-[#8C9E78] rounded-[12px] px-6 text-lg font-medium text-[#404A3D] placeholder-[#404A3D]/60 focus:outline-none focus:border-[#3D550C]" />
                        </div>
                        <div className="w-full">
                             <input type="tel" placeholder="Phone" className="w-full h-[60px] border border-[#8C9E78] rounded-[12px] px-6 text-lg font-medium text-[#404A3D] placeholder-[#404A3D]/60 focus:outline-none focus:border-[#3D550C]" />
                        </div>
                     </div>

                     {/* Message Area */}
                     <div>
                         <textarea className="w-full h-[150px] border border-[#8C9E78] rounded-[12px] p-6 text-lg font-medium text-[#404A3D] placeholder-[#404A3D]/60 focus:outline-none focus:border-[#3D550C] resize-none" placeholder="Message..."></textarea>
                     </div>

                     {/* Submit Button */}
                     <div className="mt-4">
                        <button className="bg-[#3D550C] text-white px-10 py-4 rounded-[40px] font-bold text-[18px] flex items-center gap-3 hover:bg-[#2e4009] transition-all shadow-lg">
                            Submit Now
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="stroke-white">
                                <path d="M1 13L13 1M13 1H3M13 1V11" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                     </div>
                 </form>
             </div>
          </div>
      </section>
      
    </main>
  );
}