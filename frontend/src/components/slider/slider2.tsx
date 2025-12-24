import React from 'react';
import Link from 'next/link';
import { League_Spartan } from 'next/font/google';

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-spartan',
});

const Slider2: React.FC = () => {
  // WhatsApp Configuration
  // Using generic country code 91 (India) since the number format matches, 
  // but you can adjust if needed.
  const phoneNumber = '919220309252'; 
  const message = encodeURIComponent('Requesting to book a chef');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className={`${spartan.variable} font-sans`}>
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/slider/slider2-bg.png')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          {/* Main Heading with Beige Background */}
          <div className="bg-[#D4C5A0]/60 backdrop-blur-sm px-8 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-10 rounded-lg shadow-2xl mb-8 max-w-7xl w-full">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight"
              style={{ 
                color: '#4A5A2A',
                fontFamily: 'var(--font-spartan)'
              }}
            >
              Where quality meets culinary
              <br />
              intelligence to shape the future of food.
            </h1>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            
            {/* WhatsApp Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base sm:text-lg inline-block text-center"
              style={{ fontFamily: 'var(--font-spartan)' }}
            >
              Book A Chef Tasting
            </a>

            {/* Internal Next.js Link */}
            <Link
              href="/about-us"
              className="bg-white text-gray-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base sm:text-lg inline-block text-center"
              style={{ fontFamily: 'var(--font-spartan)' }}
            >
              Learn More About Us
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider2;