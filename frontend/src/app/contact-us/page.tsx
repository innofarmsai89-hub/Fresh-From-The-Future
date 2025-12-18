'use client';

import React from 'react';
import Image from 'next/image';
// Install react-icons if needed: npm install react-icons
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function ContactUsPage() {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/contact/contact-bg.png" 
            alt="Contact Us Leafy Background" 
            fill 
            className="object-cover"
            priority 
          />
        </div>

        {/* Glassmorphism Card */}
        <div 
          className="relative z-10 w-[90%] max-w-[1277px] min-h-[222px] rounded-[30px] flex flex-col items-center justify-center text-center px-6 py-12 gap-6"
          style={{
            background: `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)`,
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            backgroundBlendMode: 'overlay, normal',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="flex flex-col items-center gap-2">
              <h1 className="font-spartan font-bold text-[40px] md:text-[48px] leading-[54px] text-white drop-shadow-md">
                Contact Us
              </h1>
              <h2 className="font-spartan font-bold text-[24px] md:text-[36px] leading-[1.2] md:leading-[40px] text-[#DCBC88] text-center max-w-[90%] drop-shadow-sm">
                Have questions or orders? Get in touch with us today.
              </h2>
          </div>
          <button className="bg-white text-[#3D550C] font-outfit font-bold text-[16px] md:text-[18px] px-10 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg mt-4">
            Get Samples
          </button>
        </div>
      </section>

      {/* --- 2. Get In Touch Section --- */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[60px]">
            
            {/* --- ADDED: Section Header --- */}
            <div className="text-center mb-16">
                <h2 className="font-spartan font-bold text-[42px] lg:text-[54px] leading-[60px] text-[#3D550C] mb-2">
                    Get in Touch
                </h2>
                <p className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E]">
                    We’re just a message away — reach out anytime.
                </p>
            </div>

            {/* Split Content: Image + Form */}
            <div className="flex flex-col lg:flex-row gap-0 rounded-[10px] overflow-hidden shadow-xl">
                
                {/* Left Side: Image */}
                <div className="lg:w-[45%] h-[500px] lg:h-auto relative">
                    <Image 
                        src="/images/contact/git-1.png" 
                        alt="Burrata Caprese" 
                        fill 
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Form (Dark Green) */}
                <div className="lg:w-[55%] bg-[#3D550C] p-10 lg:p-16 flex flex-col justify-center">
                    
                    {/* Header Text */}
                    <div className="mb-10">
                        <h4 className="font-montserrat font-bold text-[20px] lg:text-[24px] leading-[29px] text-white/80 uppercase mb-2">
                            We're Here for You
                        </h4>
                        <h2 className="font-montserrat font-bold text-[28px] lg:text-[32px] leading-[39px] text-white uppercase">
                            Contact us and tell us how we can assist!
                        </h2>
                        {/* Little white dash */}
                        <div className="w-[30px] h-[4px] bg-white mt-4"></div>
                    </div>

                    {/* Form Fields */}
                    <form className="flex flex-col gap-8">
                        
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label className="font-open-sans font-normal text-[18px] text-white">Full Name</label>
                            <input 
                                type="text" 
                                className="bg-transparent border-b-[2px] border-white text-white text-[18px] focus:outline-none focus:border-[#DCBC88] pb-1 transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="font-open-sans font-normal text-[18px] text-white">Email</label>
                            <input 
                                type="email" 
                                className="bg-transparent border-b-[2px] border-white text-white text-[18px] focus:outline-none focus:border-[#DCBC88] pb-1 transition-colors"
                            />
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-2">
                            <label className="font-open-sans font-normal text-[18px] text-white">Subject</label>
                            <input 
                                type="text" 
                                className="bg-transparent border-b-[2px] border-white text-white text-[18px] focus:outline-none focus:border-[#DCBC88] pb-1 transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="font-open-sans font-normal text-[18px] text-white">Tell us your message</label>
                            <textarea 
                                rows={1}
                                className="bg-transparent border-b-[2px] border-white text-white text-[18px] focus:outline-none focus:border-[#DCBC88] pb-1 resize-none transition-colors"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-[#DCBC88] h-[60px] rounded-[10px] mt-6 flex items-center justify-center font-montserrat font-bold text-[18px] text-[#1E1E1E] hover:bg-[#cbb082] transition-colors">
                            Let’s get started!
                        </button>

                    </form>
                </div>
            </div>
        </div>
      </section>

      {/* --- 3. Contact Info Cards --- */}
      <section className="w-full pb-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-[60px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Phone Card */}
                  <div className="border border-[#3D550C] rounded-[10px] p-8 flex flex-col justify-center h-[203px] relative bg-white group hover:shadow-lg transition-shadow">
                      <div className="absolute top-8 left-8">
                          <FiPhone className="w-8 h-8 text-[#E3572B]" /> 
                      </div>
                      <h3 className="font-outfit font-normal text-[32px] text-black text-center mb-2 mt-2">
                          Phone Number
                      </h3>
                      <p className="font-outfit font-normal text-[24px] text-black text-center">
                          +91 92203 09252
                      </p>
                  </div>

                  {/* Email Card */}
                  <div className="border border-[#3D550C] rounded-[10px] p-8 flex flex-col justify-center h-[203px] relative bg-white group hover:shadow-lg transition-shadow">
                      <div className="absolute top-8 left-8">
                          <FiMail className="w-8 h-8 text-[#E3572B]" />
                      </div>
                      <h3 className="font-outfit font-normal text-[32px] text-black text-center mb-2 mt-2">
                          Email
                      </h3>
                      <div className="text-center font-outfit font-normal text-[16px] md:text-[18px] text-black leading-tight space-y-1">
                          <p>Orders@FreshfromtheFuture.com (To Order)</p>
                          <p>Chefs@FreshfromtheFuture.com (For Chefs Connect)</p>
                          <p>Hello@FreshfromtheFuture.com (For Support)</p>
                      </div>
                  </div>

                  {/* Social Network Card */}
                  <div className="border border-[#3D550C] rounded-[10px] p-8 flex flex-col justify-center h-[203px] relative bg-white group hover:shadow-lg transition-shadow">
                      <div className="absolute top-8 left-8">
                          <FiMail className="w-8 h-8 text-[#E3572B]" /> 
                      </div>
                      <h3 className="font-outfit font-normal text-[32px] text-black text-center mb-4 mt-2">
                          Social Network
                      </h3>
                      <div className="flex items-center justify-center gap-8">
                          <div className="flex items-center gap-2">
                              <FaInstagram className="w-6 h-6 text-[#3D550C]" />
                              <span className="font-outfit text-[24px] text-black">Instagram</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <FaLinkedinIn className="w-6 h-6 text-[#3D550C]" />
                              <span className="font-outfit text-[24px] text-black">linkedin</span>
                          </div>
                      </div>
                  </div>

                  {/* Offices Card */}
                  <div className="border border-[#3D550C] rounded-[10px] p-8 flex flex-col justify-center h-[203px] relative bg-white group hover:shadow-lg transition-shadow">
                      <div className="absolute top-8 left-8">
                          <FiMail className="w-8 h-8 text-[#E3572B]" />
                      </div>
                      <h3 className="font-outfit font-normal text-[32px] text-black text-center mb-2 mt-2">
                          Offices
                      </h3>
                      <div className="text-center">
                          <p className="font-outfit font-semibold text-[16px] md:text-[18px] leading-[1.4] text-black max-w-[80%] mx-auto">
                              <span className="font-bold">Registered office:</span> DLF Forum, Cybercity, Phase III, GURUGRAM, HARYANA, 122002
                          </p>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* --- 4. Subscribe Section --- */}
      {/* --- 4. Subscribe Section --- */}
      <section className="w-full pb-20 px-6">
          <div className="max-w-[1440px] mx-auto relative rounded-[30px] overflow-hidden h-[316px] flex items-center justify-center">
              
              {/* --- Background Layer --- */}
              <div className="absolute inset-0 z-0">
                  {/* Image */}
                  <Image 
                      src="/images/contact/subscribe-bg.png" 
                      alt="Newsletter Background" 
                      fill 
                      className="object-cover"
                  />
                  {/* Overlay: #404A3D at 50% Opacity (from CSS) */}
                  <div className="absolute inset-0 bg-[#404A3D] opacity-50"></div>
              </div>

              {/* --- Content Layer --- */}
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1250px] px-6 lg:px-16 gap-8">
                  
                  {/* Left Text */}
                  <div className="text-center lg:text-left">
                      {/* Spartan, 700, 54px, 60px Line Height */}
                      <h2 className="font-spartan font-bold text-[36px] lg:text-[54px] text-white leading-[1.1] lg:leading-[60px] mb-1">
                          Subscribe to our newsletter
                      </h2>
                      {/* Spartan, 400, 20px, 34px Line Height */}
                      <p className="font-spartan font-normal text-[16px] lg:text-[20px] text-white leading-[34px]">
                          Stay in the loop — fresh updates delivered to your inbox.
                      </p>
                  </div>

                  {/* Right Input Group */}
                  {/* Container: White, Rounded 62px */}
                  <div className="bg-white rounded-[62px] p-[5px] pl-8 flex w-full max-w-[600px] h-[75px] shadow-lg items-center">
                      <input 
                          type="email" 
                          placeholder="Email Address" 
                          className="flex-grow bg-transparent text-[#1E1E1E] placeholder-[#ACACAC] font-open-sans font-normal text-[20px] focus:outline-none"
                      />
                      <button className="bg-[#3D550C] text-white font-open-sans font-semibold text-[20px] md:text-[24px] px-10 h-full rounded-[62px] hover:bg-[#2e3b09] transition-colors shadow-md">
                          Subscribe
                      </button>
                  </div>

              </div>
          </div>
      </section>

    </main>
  );
}