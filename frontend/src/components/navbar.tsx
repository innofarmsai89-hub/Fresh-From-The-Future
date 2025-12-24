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
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  
  // 1. Get current path
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileSubmenuOpen(null); 
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

  // 2. LOGIC: Check if link is active
  const isActiveLink = (href: string) => {
    if (!pathname) return false;
    // Exact match (e.g. /about-us)
    if (pathname === href) return true;
    // Sub-path match (e.g. /about-us/team), avoiding false positives like /about-us-more
    if (href !== '/' && pathname.startsWith(href)) {
       const charAfter = pathname.charAt(href.length);
       if (charAfter === '/' || charAfter === '') return true;
    }
    return false;
  };
  
  const isParentActive = (items?: DropdownItem[]) => {
    return items ? items.some(item => isActiveLink(item.href)) : false;
  };

  // Mobile UX: Automatically expand submenu if on child page
  useEffect(() => {
    if (isMobileMenuOpen) {
      const activeParent = navLinks.find(link => link.dropdownItems && isParentActive(link.dropdownItems));
      if (activeParent) {
        setMobileSubmenuOpen(activeParent.name);
      }
    } else {
      setMobileSubmenuOpen(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileMenuOpen, pathname]);

  const handleMobileLinkClick = (e: React.MouseEvent, link: NavLink) => {
    if (link.hasDropdown) {
      e.preventDefault(); 
      setMobileSubmenuOpen(prev => prev === link.name ? null : link.name);
    } else {
      setIsMobileMenuOpen(false); 
    }
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

        {/* --- 2. CENTER: Navigation (Desktop) --- */}
        <div className="hidden md:flex flex-1 items-center justify-center 
          gap-2 min-[900px]:gap-4 lg:gap-5 min-[1100px]:gap-6 xl:gap-9 2xl:gap-12 min-[1750px]:gap-16
          px-0 lg:px-2 min-[1100px]:px-2
        ">
            {navLinks.map((link: NavLink, index: number) => {
                const isCurrent = isActiveLink(link.href);
                const isCurrentParent = link.dropdownItems ? isParentActive(link.dropdownItems) : false;
                const isActive = isCurrent || isCurrentParent;
                
                // 3. STYLING: UPDATED FONT SIZES (+10%)
                const linkClasses = `
                  relative flex items-center gap-0.5 lg:gap-1 leading-[100%] tracking-normal transition-colors whitespace-nowrap
                  text-[10px] min-[900px]:text-[11px] lg:text-[12.5px] min-[1100px]:text-[14.5px] xl:text-[16.5px] 2xl:text-[19px] min-[1750px]:text-[21px]
                  ${isActive ? 'text-[#E3572B] font-semibold' : 'text-[#1E1E1E] font-normal hover:text-[#E3572B]'}
                  
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:bg-[#E3572B] after:transition-all after:duration-300
                  ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `;

                if (link.dropdownItems) {
                  return (
                    <div key={index} className="relative group h-full flex items-center py-4 cursor-pointer">
                        <Link href={link.href} className={linkClasses} onClick={(e) => e.preventDefault()}>
                            {link.name}
                            <FiChevronDown 
                              className={`
                                w-[12px] h-[12px] 
                                lg:w-[14px] lg:h-[14px] 
                                min-[1100px]:w-[16px] min-[1100px]:h-[16px]
                                xl:w-[18px] xl:h-[18px] 
                                stroke-[2] transition-transform duration-300
                                ${isActive ? 'text-[#E3572B]' : 'text-[#1E1E1E] group-hover:text-[#E3572B]'}
                                group-hover:rotate-180
                              `} 
                            />
                        </Link>
                        
                        {/* Dropdown Menu */}
                        <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-[160px] lg:w-[180px] xl:w-[210px] bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden flex flex-col text-left py-2">
                            {link.dropdownItems.map((subLink, subIndex) => {
                                const isChildActive = isActiveLink(subLink.href);
                                return (
                                  <Link
                                      key={subIndex}
                                      href={subLink.href}
                                      // UPDATED DROPDOWN FONT SIZES
                                      className={`block px-4 py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-3.5 transition-colors border-b border-gray-50 last:border-0 hover:bg-[#FFF6F2] hover:text-[#E3572B]
                                        text-[12px] lg:text-[13.5px] xl:text-[15.5px]
                                        ${isChildActive ? 'text-[#E3572B] bg-[#FFF6F2] font-semibold' : 'text-[#1E1E1E] font-normal'}
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
                  rounded-[40px] border-[1.5px] transition-all whitespace-nowrap leading-[100%]
                  px-3 py-2 text-[9px] 
                  min-[900px]:px-4 min-[900px]:py-2.5 min-[900px]:text-[10px]    
                  lg:px-4 lg:py-2 lg:text-[11px] min-[1100px]:px-5 min-[1100px]:py-2.5 min-[1100px]:text-[13.5px]
                  xl:px-6 xl:py-3 xl:text-[15.5px] 
                  2xl:px-7 2xl:py-3.5 2xl:text-[18px] 
                  min-[1750px]:px-9 min-[1750px]:py-4 min-[1750px]:text-[19px]
                  ${isActiveLink('/subscription') 
                    ? 'bg-[#E3572B] text-white border-[#E3572B] font-semibold' 
                    : 'border-[#E3572B] text-[#E3572B] hover:bg-[#E3572B] hover:text-white font-medium'}
              `}>
                  Subscription Plan
              </button>
            </Link>

            <Link href="/contact-us">
              <button className={`
                  rounded-[40px] border-[1.5px] transition-all whitespace-nowrap leading-[100%]
                  px-3 py-2 text-[9px]
                  min-[900px]:px-4 min-[900px]:py-2.5 min-[900px]:text-[10px]
                  lg:px-4 lg:py-2 lg:text-[11px] min-[1100px]:px-5 min-[1100px]:py-2.5 min-[1100px]:text-[13.5px]
                  xl:px-6 xl:py-3 xl:text-[15.5px] 
                  2xl:px-7 2xl:py-3.5 2xl:text-[18px]
                  min-[1750px]:px-9 min-[1750px]:py-4 min-[1750px]:text-[19px]
                  ${isActiveLink('/contact-us') 
                    ? 'bg-[#3D550C] text-white border-[#3D550C] font-semibold' 
                    : 'border-[#3D550C] text-[#3D550C] hover:bg-[#3D550C] hover:text-white font-medium'}
              `}>
                  Contact us
              </button>
            </Link>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button 
            className="md:hidden text-[#3D550C] text-[40px] p-2"
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
        <div className="p-6 flex flex-col gap-5 overflow-y-auto h-full pb-24">
             {navLinks.map((link: NavLink, index: number) => {
                const isCurrent = isActiveLink(link.href);
                const isParent = link.dropdownItems ? isParentActive(link.dropdownItems) : false;
                const isHighlighted = isCurrent || isParent;
                const isSubmenuOpen = mobileSubmenuOpen === link.name;
                
                return (
                  <div key={index} className="flex flex-col border-b border-gray-100 pb-3">
                      {/* Parent Link / Button - Font Increased from 17px to 19px */}
                      <Link 
                          href={link.href}
                          className={`flex items-center justify-between text-[19px] leading-[100%] py-2 transition-colors
                            ${isHighlighted ? 'text-[#E3572B] font-semibold' : 'text-[#1E1E1E] font-normal hover:text-[#E3572B]'}
                          `}
                          onClick={(e) => handleMobileLinkClick(e, link)}
                      >
                          {link.name}
                          {link.hasDropdown && (
                             <FiChevronDown 
                                className={`w-7 h-7 transition-transform duration-300 
                                  ${isHighlighted ? 'text-[#E3572B]' : 'text-[#1E1E1E]'} 
                                  ${isSubmenuOpen ? 'rotate-180' : 'rotate-0'}
                                `} 
                             />
                          )}
                      </Link>
                      
                      {/* Submenu Items - Font Increased from 15px to 17px */}
                      {link.dropdownItems && (
                          <div className={`
                              flex flex-col pl-6 gap-3 border-l-2 ml-1 overflow-hidden transition-all duration-300 ease-in-out
                              ${isSubmenuOpen ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 mt-0 opacity-0'}
                              ${isHighlighted ? 'border-[#E3572B]/30' : 'border-gray-100'}
                          `}>
                              {link.dropdownItems.map((subLink, subIndex) => {
                                  const isChildActive = isActiveLink(subLink.href);
                                  return (
                                    <Link
                                        key={subIndex}
                                        href={subLink.href}
                                        className={`text-[17px] transition-colors py-1
                                          ${isChildActive 
                                            ? 'text-[#E3572B] font-semibold' 
                                            : 'text-[#555] font-normal hover:text-[#E3572B]'}
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
                {/* Mobile Buttons - Font Increased from 15px to 17px */}
                <Link href="/subscription" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className={`w-full px-5 py-3.5 rounded-[40px] border-[1.5px] text-[17px] leading-[100%] transition-all
                        ${isActiveLink('/subscription') 
                          ? 'bg-[#E3572B] text-white border-[#E3572B] font-semibold' 
                          : 'border-[#E3572B] text-[#E3572B] hover:bg-[#E3572B] hover:text-white font-medium'}
                    `}>
                        Subscription Plan
                    </button>
                </Link>
                <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className={`w-full px-5 py-3.5 rounded-[40px] border-[1.5px] text-[17px] leading-[100%] transition-all
                        ${isActiveLink('/contact-us') 
                          ? 'bg-[#3D550C] text-white border-[#3D550C] font-semibold' 
                          : 'border-[#3D550C] text-[#3D550C] hover:bg-[#3D550C] hover:text-white font-medium'}
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