'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const RootHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="bg-[#F5F5F5] text-black">
      {/* Top Announcement Bar */}
      <div className="bg-[#FFD8D9] flex justify-center items-center py-2 px-2">
        <p className="text-xs text-center md:text-left">
          CHECK OUT OUR NEW LAUNCHES WITH ALL PRODUCTS RESTOCK!! || Delivery within 10-15 days || Customer Care: +880 1796-071324
        </p>
      </div>

      {/* Main Header */}
      <div className="max-w-full py-3 md:py-5 px-4 md:px-16 ">
        <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 text-lg">
            <a href="#" >Home</a>
            <a href="#services" >Services</a>
            <a href="#about" >About Us</a>
            <a href="#contact" >Contact</a>
          </nav>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <p className="text-2xl font-bold cursor-pointer">Tailwind</p>
            </Link>
          </div>

          

          {/* Get in Touch Button */}
          <div className="hidden md:flex space-x-10 text-lg">
          <div className="flex justify-start">
          <form className="flex flex-col md:flex-row gap-3" >
            <div className="flex items-center">
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search for Category, Brand, Name"
                  className="w-full px-3 py-[6px] rounded-l border-2 border-[#E10101] focus:outline-none focus:border-[#E10101] pr-10"
               
                />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <IoMdCloseCircleOutline className="text-slate-300 h-[20px] w-[20px]" />
                  </button>
              </div>
              <button type="submit" className="bg-[#E10101] text-white rounded-r px-3 md:px-4 py-1 md:py-2">
                Search
              </button>
            </div>

          </form>
        </div>
            <a href="#contact" className="hover:text-gray-300 transition-all">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 text-lg">
            <a href="#" className="block hover:text-gray-300 transition-all">Home</a>
            <a href="#services" className="block hover:text-gray-300 transition-all">Services</a>
            <a href="#about" className="block hover:text-gray-300 transition-all">About Us</a>
            <a href="#contact" className="block hover:text-gray-300 transition-all">Contact</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RootHeader;
