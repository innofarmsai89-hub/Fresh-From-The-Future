import React from "react";
import Image from "next/image";
import Link from "next/link";
import { League_Spartan } from "next/font/google";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// --- Font Configuration ---
const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spartan",
});

export default function Footer() {
  const socialLinks = [
    { Icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61584884643468" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/fresh-from-the-future/" },
    { Icon: FaInstagram, href: "https://www.instagram.com/fresh.from.the.future/" },
  ];

  return (
    <footer
      className={`w-full bg-white relative ${spartan.variable} font-spartan`}
    >
      {/* --- Top Green Bar --- */}
      {/* <div
        className="relative lg:absolute top-0 left-0 w-full 
        h-auto lg:h-[80px] xl:h-[100px] 
        bg-[#3D550C] z-10 
        py-4 sm:py-5 md:py-6 lg:py-0"
      >
        <div
          className="max-w-[1920px] mx-auto 
          px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16
          h-full flex flex-col lg:flex-row items-center justify-between 
          gap-3 sm:gap-4 md:gap-5 lg:gap-0"
        >
        
          <div
            className="font-bold 
              text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] 
              tracking-wide text-[#DCBC88] text-center lg:text-left"
          >
            BEYOND ORGANIC • TRACEABLE • HYPER-LOCAL
          </div>


          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
        
            <div className="flex items-center gap-2 sm:gap-3">
              <div
                className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px]
                      bg-white rounded-full flex items-center justify-center shadow-sm shrink-0"
              >
                <svg
                  className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] lg:w-[18px] lg:h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3D550C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span
                className="font-medium text-white tracking-wide
                      text-[13px] xs:text-[14px] sm:text-[15px]"
              >
                +91 92203 09252
              </span>
            </div>

           
            <div className="flex items-center gap-2 sm:gap-3">
              <div
                className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px]
                      bg-white rounded-full flex items-center justify-center shadow-sm shrink-0"
              >
                <svg
                  className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] lg:w-[18px] lg:h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3D550C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span
                className="font-medium text-white tracking-wide break-all sm:break-normal
                      text-[13px] xs:text-[14px] sm:text-[15px]"
              >
                Businnes@FreshfromtheFuture.com
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* --- Main Content Area --- */}
      <div
        className="max-w-[1920px] mx-auto 
        px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16
        py-6 sm:py-8 md:py-10 
        lg:pt-[100px] xl:pt-[130px]
        flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20"
      >
        {/* Left Column: Brand Info */}
        <div className="lg:w-[30%] xl:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Logo Container */}
          <div
            className="relative 
              w-[150px] h-[128px]
              xs:w-[170px] xs:h-[145px]
              sm:w-[190px] sm:h-[162px]
              md:w-[210px] md:h-[179px]
              lg:w-[200px] lg:h-[170px]
              xl:w-[240px] xl:h-[204px]
              mb-1 sm:mb-2" // CHANGED: Reduced margin from mb-4/6 to mb-1/2
          >
            <Image
              src="/images/home/company-logo.png"
              alt="Fresh From The Future"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 250px, 290px"
              priority
            />
          </div>

          {/* Description */}
          <p
            className="font-normal leading-relaxed text-[#404A3D] mb-4 sm:mb-5 md:mb-6
              text-[13px] xs:text-[14px] sm:text-[15px]
              max-w-[280px] xs:max-w-[320px] sm:max-w-[349px]"
          >
            Fresh From The Future is a premium HoReCa beyond organic Hydroponic
            Leafy, Micro Greens and edible flower produce brand powered by
            INNOFarms.AI
          </p>

          <h3
            className="font-bold text-[#404A3D] mb-3 sm:mb-4 uppercase tracking-wider
              text-[15px] xs:text-[16px] sm:text-[17px]"
          >
            Follow Us
          </h3>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-[15px] justify-center lg:justify-start">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] 
                          bg-[rgba(220,188,136,0.44)] rounded-full 
                          flex items-center justify-center 
                          hover:bg-[#DCBC88] active:bg-[#DCBC88]
                          transition-all duration-300 group
                          active:scale-95"
              >
                <social.Icon
                  className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]
                              text-[#3D550C] group-hover:text-white group-active:text-white transition-colors"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section: Headline + Links Grid */}
        <div
          className="lg:w-[70%] xl:w-[65%] flex flex-col 
          pt-0 lg:pt-4 xl:pt-8"
        >
          {/* Big Headline */}
          <h2
            className="font-bold leading-tight text-[#1E1E1E] 
              mb-6 sm:mb-8 md:mb-10 text-center lg:text-left
              text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[36px]"
          >
            India's First Premium Culinary Innovation Brand.
          </h2>

          {/* Links Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
              gap-6 sm:gap-8 text-center sm:text-left"
          >
            {/* Column 1: Useful Links */}
            <div>
              <h3
                className="font-bold text-[#404A3D] mb-3 sm:mb-4 md:mb-5 uppercase tracking-wider
                      text-[15px] xs:text-[16px] sm:text-[17px]"
              >
                Useful Link
              </h3>
              <ul className="space-y-2 sm:space-y-3 flex flex-col items-center sm:items-start">
                <li>
                  <Link
                    href="/our-produces"
                    className="font-medium text-[#1E1E1E] hover:text-[#3D550C] active:text-[#3D550C] transition-colors
                          text-[14px] xs:text-[15px] sm:text-[16px]"
                  >
                    Our Produce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chef-Mixes"
                    className="font-medium text-[#1E1E1E] hover:text-[#3D550C] active:text-[#3D550C] transition-colors
                          text-[14px] xs:text-[15px] sm:text-[16px]"
                  >
                    Chef Mixes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trace"
                    className="font-medium text-[#1E1E1E] hover:text-[#3D550C] active:text-[#3D550C] transition-colors
                          text-[14px] xs:text-[15px] sm:text-[16px]"
                  >
                    Traceability
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Home Links */}
            <div>
              <Link href="/">
                <h3
                  className="font-bold text-[#404A3D] mb-3 sm:mb-4 md:mb-5 uppercase tracking-wider
        text-[15px] xs:text-[16px] sm:text-[17px] cursor-pointer hover:opacity-75 transition-opacity"
                >
                  Home
                </h3>
              </Link>
              <ul className="space-y-2 sm:space-y-3 flex flex-col items-center sm:items-start">
                <li>
                  <Link
                    href="/about-us"
                    className="font-medium text-[#1E1E1E] hover:text-[#3D550C] active:text-[#3D550C] transition-colors
                          text-[14px] xs:text-[15px] sm:text-[16px]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chef-adv"
                    className="font-medium text-[#1E1E1E] hover:text-[#3D550C] active:text-[#3D550C] transition-colors
                          text-[14px] xs:text-[15px] sm:text-[16px]"
                  >
                    Chef Advisory Council
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-blogs"
                    className="font-medium text-[#1E1E1E] hover:text-[#3D550C] active:text-[#3D550C] transition-colors
                          text-[14px] xs:text-[15px] sm:text-[16px]"
                  >
                    Events & Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Address */}
            <div className="flex flex-col items-center sm:items-start sm:col-span-2 md:col-span-1">
              <h3
                className="font-bold text-[#404A3D] mb-3 sm:mb-4 md:mb-5 uppercase tracking-wider
                      text-[15px] xs:text-[16px] sm:text-[17px]"
              >
                Our Address
              </h3>
              <div
                className="space-y-2 sm:space-y-3 font-normal leading-relaxed text-[#404A3D] opacity-90
                      text-[13px] xs:text-[14px]
                      max-w-[280px] xs:max-w-[300px] sm:max-w-[320px]"
              >
                <p>
                  <span className="font-bold text-[#1E1E1E]">
                    Registered office:-
                  </span>{" "}
                  DLF Forum, Cybercity, Phase III, GURUGRAM, HARYANA, 122002
                </p>
                <p>
                  <span className="font-bold text-[#1E1E1E]">Farm:-</span>{" "}
                  Property number 4378P, Basement Area, Sector -23 Gurugram,
                  Haryana 122001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Copyright Bottom Bar --- */}
      <div className="border-t border-[rgba(64,74,61,0.2)] mt-4 sm:mt-6">
        <div
          className="max-w-[1920px] mx-auto 
          px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16
          py-4 sm:py-5 md:py-6 
          flex flex-col md:flex-row justify-between items-center 
          gap-3 sm:gap-4 text-center md:text-left"
        >
          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6 justify-center flex-wrap">
            <Link
              href="#"
              className="font-medium text-[#666666] hover:text-[#3D550C] active:text-[#3D550C] transition-colors
                  text-[12px] xs:text-[13px] sm:text-[14px]"
            >
              Terms & Conditions
            </Link>
            <div className="w-[1px] h-[12px] sm:h-[14px] bg-[rgba(24,26,23,0.2)]"></div>
            <Link
              href="#"
              className="font-medium text-[#666666] hover:text-[#3D550C] active:text-[#3D550C] transition-colors
                  text-[12px] xs:text-[13px] sm:text-[14px]"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Copyright Text */}
          <div
            className="font-medium text-[#666666]
              text-[12px] xs:text-[13px] sm:text-[14px]"
          >
            Copyright © 2025 , All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}