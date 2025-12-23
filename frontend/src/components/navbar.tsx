'use client';
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

  const isActiveLink = (href: string) => pathname === href;
  
  const isParentActive = (items?: DropdownItem[]) => {
    return items ? items.some(item => pathname === item.href) : false;
  };

  return (
    <nav className={`w-full bg-white relative z-50 shadow-sm ${spartan.variable} font-spartan`}>
      
      {/* LAYOUT CONTAINER */}
      <div className="max-w-[1920px] mx-auto w-full px-4 md:px-2 lg:px-4 min-[1100px]:px-6 xl:px-12 
        h-[90px] md:h-[100px] lg:h-[130px] xl:h-[150px] 2xl:h-[170px] 
        flex items-center justify-between transition-all duration-300"
      >
        
        {/* --- 1. LEFT: Logo --- */}
        <Link 
          href="/" 
          className="relative block shrink-0 transition-all duration-300
          w-[88px] h-[88px]
          md:w-[98px] md:h-[98px] min-[900px]:w-[105px] min-[900px]:h-[105px]
          lg:w-[122px] lg:h-[122px] min-[1100px]:w-[124px] min-[1100px]:h-[124px]
          xl:w-[146px] xl:h-[146px] 
          min-[1750px]:w-[166px] min-[1750px]:h-[166px]"
        >
           <Image 
             src="/images/home/company-logo.png" 
             alt="Fresh From The Future" 
             fill 
             className="object-contain"
             sizes="(max-width: 768px) 90px, (max-width: 1200px) 130px, 160px"
             priority
           />
        </Link>

        {/* --- 2. CENTER: Navigation --- */}
        <div className="hidden md:flex flex-1 items-center justify-center 
          gap-2 min-[900px]:gap-4 lg:gap-5 min-[1100px]:gap-6 xl:gap-9 2xl:gap-12 min-[1750px]:gap-16
          px-0 lg:px-2 min-[1100px]:px-2
        ">
            {navLinks.map((link: NavLink, index: number) => {
                const isCurrent = isActiveLink(link.href);
                const isCurrentParent = link.dropdownItems ? isParentActive(link.dropdownItems) : false;
                
                // ADDED: Underline effect using 'after:' pseudo-element
                // The underline is red (#E3572B), 1.5px high, and transitions width from 0 to full on hover.
                const linkClasses = `
                  relative flex items-center gap-0.5 lg:gap-1 font-normal leading-[100%] tracking-normal transition-colors whitespace-nowrap
                  text-[10px] min-[900px]:text-[11px] lg:text-[13px] min-[1100px]:text-[15px] xl:text-[17px] 2xl:text-[19px] min-[1750px]:text-[22px]
                  ${(isCurrent || isCurrentParent) ? 'text-[#E3572B]' : 'text-[#1E1E1E] hover:text-[#E3572B]'}
                  
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:bg-[#E3572B] after:transition-all after:duration-300
                  ${(isCurrent || isCurrentParent) ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `;

                if (link.dropdownItems) {
                  return (
                    <div key={index} className="relative group h-full flex items-center py-4">
                        <Link href={link.href} className={linkClasses}>
                            {link.name}
                            <FiChevronDown 
                              className={`
                                w-[14px] h-[14px] 
                                lg:w-4 lg:h-4 
                                min-[1100px]:w-[18px] min-[1100px]:h-[18px]
                                xl:w-5 xl:h-5 
                                stroke-[2] transition-colors 
                                ${(isCurrent || isCurrentParent) ? 'text-[#E3572B]' : 'text-[#1E1E1E] group-hover:text-[#E3572B]'}
                              `} 
                            />
                        </Link>
                        
                        <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-[180px] lg:w-[200px] xl:w-[240px] bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden flex flex-col text-left">
                            {link.dropdownItems.map((subLink, subIndex) => {
                                const isChildActive = isActiveLink(subLink.href);
                                return (
                                  <Link
                                      key={subIndex}
                                      href={subLink.href}
                                      className={`block px-4 py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-4 transition-colors font-normal border-b border-gray-50 last:border-0 hover:bg-[#F9F9F9] hover:text-[#E3572B]
                                        text-[13px] lg:text-[14px] xl:text-[16px]
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

                return (
                    <Link key={index} href={link.href} className={linkClasses}>
                        {link.name}
                    </Link>
                );
            })}
        </div>

        {/* --- 3. RIGHT: Action Buttons --- */}
        <div className="hidden md:flex items-center gap-2 lg:gap-2 min-[1100px]:gap-3 xl:gap-6 shrink-0">
            <Link href="/subscription">
              <button className={`
                  rounded-[40px] border-[1.5px] font-medium transition-all whitespace-nowrap leading-[100%]
                  px-3 py-2 text-[9px] 
                  min-[900px]:px-4 min-[900px]:py-3 min-[900px]:text-[11px]    
                  lg:px-4 lg:py-2 lg:text-[12px] min-[1100px]:px-5 min-[1100px]:py-3 min-[1100px]:text-[14px]
                  xl:px-8 xl:py-4 xl:text-[16px] 
                  2xl:px-8 2xl:py-4 2xl:text-[18px] 
                  min-[1750px]:px-10 min-[1750px]:py-5 min-[1750px]:text-[20px]
                  ${isActiveLink('/subscription') 
                    ? 'bg-[#E3572B] text-white border-[#E3572B]' 
                    : 'border-[#E3572B] text-[#E3572B] hover:bg-[#E3572B] hover:text-white'}
              `}>
                  Subscription Plan
              </button>
            </Link>

            <Link href="/contact-us">
              <button className={`
                  rounded-[40px] border-[1.5px] font-medium transition-all whitespace-nowrap leading-[100%]
                  px-3 py-2 text-[9px]
                  min-[900px]:px-4 min-[900px]:py-3 min-[900px]:text-[11px]
                  lg:px-4 lg:py-2 lg:text-[12px] min-[1100px]:px-5 min-[1100px]:py-3 min-[1100px]:text-[14px]
                  xl:px-8 xl:py-4 xl:text-[16px] 
                  2xl:px-8 2xl:py-4 2xl:text-[18px]
                  min-[1750px]:px-10 min-[1750px]:py-5 min-[1750px]:text-[20px]
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
            className="md:hidden text-[#3D550C] text-[45px] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
        >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <div className={`
          md:hidden fixed left-0 w-full bg-white shadow-xl flex flex-col 
          transition-all duration-300 ease-in-out overflow-hidden z-40
          ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}
          top-[90px] bottom-0
      `}>
        <div className="p-6 flex flex-col gap-6 overflow-y-auto h-full pb-24">
             {navLinks.map((link: NavLink, index: number) => {
                const isCurrent = isActiveLink(link.href) || (link.dropdownItems ? isParentActive(link.dropdownItems) : false);
                
                return (
                  <div key={index} className="flex flex-col border-b border-gray-100 pb-4">
                      <Link 
                          href={link.href}
                          className={`flex items-center justify-between text-[20px] font-normal leading-[100%] py-2 transition-colors
                            ${isCurrent ? 'text-[#E3572B]' : 'text-[#1E1E1E] hover:text-[#E3572B]'}
                          `}
                          onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                      >
                          {link.name}
                          {link.hasDropdown && <FiChevronDown className={`w-9 h-9 transition-colors ${isCurrent ? 'text-[#E3572B]' : 'text-[#1E1E1E]'}`} />}
                      </Link>
                      
                      {link.dropdownItems && (
                          <div className="flex flex-col pl-6 gap-4 mt-4 border-l-2 border-gray-100 ml-1">
                              {link.dropdownItems.map((subLink, subIndex) => {
                                  const isChildActive = isActiveLink(subLink.href);
                                  return (
                                    <Link
                                        key={subIndex}
                                        href={subLink.href}
                                        className={`text-[17px] font-normal transition-colors
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
            
            <div className="flex flex-col gap-4 mt-4">
                <Link href="/subscription" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className={`w-full px-5 py-4 rounded-[40px] border-[1.5px] font-medium text-[18px] leading-[100%] transition-all
                        ${isActiveLink('/subscription') 
                          ? 'bg-[#E3572B] text-white border-[#E3572B]' 
                          : 'border-[#E3572B] text-[#E3572B] hover:bg-[#E3572B] hover:text-white'}
                    `}>
                        Subscription Plan
                    </button>
                </Link>
                <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className={`w-full px-5 py-4 rounded-[40px] border-[1.5px] font-medium text-[18px] leading-[100%] transition-all
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