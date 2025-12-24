import React from 'react';
import { League_Spartan } from 'next/font/google';

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-spartan',
});

const Slider4: React.FC = () => {
  return (
    <div className={`${spartan.variable} font-sans`}>
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/slider/slider4-bg.png')",
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default Slider4;