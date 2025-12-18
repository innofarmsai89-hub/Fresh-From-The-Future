'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { League_Spartan } from 'next/font/google'; 
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

// --- Types ---
interface DropdownItem {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spartan',
});

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "About Us", href: "/about-us" },
    { name: "Our Produce", href: "/our-produces" },
    { name: "Chef Mixes", href: "/chef-Mixes" },
    { name: "Traceability", href: "/trace" },
    { name: "Chef Advisory Council", href: "/chef-adv" },
    { 
      name: "Events & Blogs", 
      href: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Blogs", href: "/our-blogs" },
        { name: "Events", href: "/upcom-events" },
        { name: "Recipes", href: "/recipes" },
      ]
    },
  ];

  // Helper to determine if a link is active
  const isActiveLink = (href: string) => pathname === href;
  
  // Helper to determine if a parent with dropdown is active
  const isParentActive = (items?: DropdownItem[]) => {
    return items ? items.some(item => pathname === item.href) : false;
  };

  return (
    <nav className={`w-full bg-white relative z-50 shadow-sm ${spartan.variable} font-spartan`}>
      
      {/* Navbar Container 
         Height: h-[100px] on small mobile, h-[120px] on tablet, h-[150px] on desktop
      */}
      <div className="w-full px-6 md:px-12 h-[100px] md:h-[120px] lg:h-[150px] flex items-center justify-between transition-all duration-300">
        
        {/* --- 1. LEFT: Logo --- */}
        <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px] shrink-0 transition-all duration-300">
          <Link href="/">
             <Image 
               src="/images/home/company-logo.png" 
               alt="Fresh From The Future" 
               fill 
               className="object-contain"
               priority
             />
          </Link>
        </div>

        {/* --- 2. CENTER: Desktop Navigation --- */}
        <div className="hidden xl:flex flex-1 items-center justify-center gap-6 2xl:gap-12">
            {navLinks.map((link: NavLink, index: number) => {
                
                // --- RENDER DROPDOWN (Desktop) ---
                if (link.dropdownItems) {
                  const isCurrentParent = isParentActive(link.dropdownItems);

                  return (
                    <div key={index} className="relative group h-full flex items-center">
                        <Link 
                            href={link.href}
                            className={`flex items-center gap-2 text-[20px] 2xl:text-[22px] font-medium leading-[100%] tracking-normal transition-colors whitespace-nowrap py-4
                              ${isCurrentParent ? 'text-[#E3572B]' : 'text-[#1E1E1E] group-hover:text-[#E3572B]'}
                            `}
                        >
                            {link.name}
                            <FiChevronDown 
                              className={`w-5 h-5 stroke-[2] transition-colors ${isCurrentParent ? 'text-[#E3572B]' : 'text-[#1E1E1E] group-hover:text-[#E3572B]'}`} 
                            />
                        </Link>
                        
                        {/* Dropdown Menu Panel */}
                        <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-[240px] bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden flex flex-col text-left">
                            {link.dropdownItems.map((subLink, subIndex) => {
                                const isChildActive = isActiveLink(subLink.href);
                                return (
                                  <Link
                                      key={subIndex}
                                      href={subLink.href}
                                      className={`block px-6 py-4 text-[18px] transition-colors font-medium border-b border-gray-50 last:border-0 hover:bg-[#F9F9F9] hover:text-[#E3572B]
                                        ${isChildActive ? 'text-[#E3572B]' : 'text-[#1E1E1E]'}
                                      `}
                                  >
                                      {subLink.name}
                                  </Link>
                                );
                            })}
                        </div>
                    </div>
                  );
                }

                // --- RENDER STANDARD LINK (Desktop) ---
                const isCurrent = isActiveLink(link.href);

                return (
                    <Link 
                        key={index}
                        href={link.href}
                        className={`flex items-center gap-1.5 text-[20px] 2xl:text-[22px] font-medium leading-[100%] tracking-normal transition-colors whitespace-nowrap
                          ${isCurrent ? 'text-[#E3572B]' : 'text-[#1E1E1E] hover:text-[#E3572B]'}
                        `}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </div>

        {/* --- 3. RIGHT: Desktop Action Buttons --- */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
            <Link href="/subscription">
              <button className={`px-5 py-3 2xl:px-6 2xl:py-3 rounded-[40px] border-[1.5px] font-medium text-[18px] 2xl:text-[20px] leading-[100%] transition-all whitespace-nowrap
                  ${isActiveLink('/subscription') 
                    ? 'bg-[#E3572B] text-white border-[#E3572B]' 
                    : 'border-[#E3572B] text-[#E3572B] hover:bg-[#E3572B] hover:text-white'}
              `}>
                  Subscription Plan
              </button>
            </Link>

            <Link href="/contact-us">
              <button className={`px-5 py-3 2xl:px-6 2xl:py-3 rounded-[40px] border-[1.5px] font-medium text-[18px] 2xl:text-[20px] leading-[100%] transition-all whitespace-nowrap
                  ${isActiveLink('/contact-us') 
                    ? 'bg-[#3D550C] text-white border-[#3D550C]' 
                    : 'border-[#3D550C] text-[#3D550C] hover:bg-[#3D550C] hover:text-white'}
              `}>
                  Contact us
              </button>
            </Link>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button 
            className="xl:hidden text-[#3D550C] text-4xl md:text-5xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
        >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <div className={`
          xl:hidden absolute left-0 w-full bg-white border-t border-gray-100 shadow-lg flex flex-col 
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}
          top-[100px] md:top-[120px]
      `}>
        {/* Scrollable Container */}
        <div className="p-6 flex flex-col gap-6 max-h-[calc(100vh-100px)] overflow-y-auto">
             {navLinks.map((link: NavLink, index: number) => {
                const isCurrent = isActiveLink(link.href) || isParentActive(link.dropdownItems);
                
                return (
                  <div key={index} className="flex flex-col border-b border-gray-100 pb-2">
                      <Link 
                          href={link.href}
                          className={`flex items-center justify-between text-[20px] md:text-[22px] font-medium leading-[100%] py-2 transition-colors
                            ${isCurrent ? 'text-[#E3572B]' : 'text-[#1E1E1E] hover:text-[#E3572B]'}
                          `}
                          onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                      >
                          {link.name}
                          {link.hasDropdown && <FiChevronDown className={`w-6 h-6 transition-colors ${isCurrent ? 'text-[#E3572B]' : 'text-[#1E1E1E]'}`} />}
                      </Link>
                      
                      {/* Mobile Sub-menu Items - Always Visible if parent has dropdown */}
                      {link.dropdownItems && (
                          <div className="flex flex-col pl-6 pb-2 gap-3 mt-2 border-l-2 border-gray-100 ml-1">
                              {link.dropdownItems.map((subLink, subIndex) => {
                                  const isChildActive = isActiveLink(subLink.href);
                                  return (
                                    <Link
                                        key={subIndex}
                                        href={subLink.href}
                                        className={`text-[17px] md:text-[18px] font-medium transition-colors
                                          ${isChildActive ? 'text-[#E3572B]' : 'text-[#555] hover:text-[#E3572B]'}
                                        `}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {subLink.name}
                                    </Link>
                                  );
                              })}
                          </div>
                      )}
                  </div>
                );
            })}
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-4 mt-2 pb-8">
                <Link href="/subscription" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className={`w-full px-5 py-3.5 rounded-[40px] border-[1.5px] font-medium text-[20px] leading-[100%] transition-all
                        ${isActiveLink('/subscription') 
                          ? 'bg-[#E3572B] text-white border-[#E3572B]' 
                          : 'border-[#E3572B] text-[#E3572B] hover:bg-[#E3572B] hover:text-white'}
                    `}>
                        Subscription Plan
                    </button>
                </Link>
                <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className={`w-full px-5 py-3.5 rounded-[40px] border-[1.5px] font-medium text-[20px] leading-[100%] transition-all
                        ${isActiveLink('/contact-us') 
                          ? 'bg-[#3D550C] text-white border-[#3D550C]' 
                          : 'border-[#3D550C] text-[#3D550C] hover:bg-[#3D550C] hover:text-white'}
                    `}>
                        Contact us
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </nav>
  );
}