"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LEFT - Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              L
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-800 tracking-tight leading-tight">
                Embik Farm
              </span>
              <span className="text-xs text-green-600 font-medium -mt-0.5">
                Fresh & Natural
              </span>
            </div>
          </div>

          {/* MIDDLE - Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-600 text-sm font-semibold hover:text-green-700 transition-all duration-300 py-2 px-1 group"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-600 to-green-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* RIGHT - CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <Link
              href="/kerja-sama"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 border border-green-600"
            >
              Kerja Sama
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="bg-white/98 backdrop-blur-sm border-t border-gray-100 shadow-lg">
          <div className="flex flex-col p-4 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 text-sm font-semibold hover:text-green-700 hover:bg-green-50 px-4 py-3 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: isOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <Link
                href="/kerja-sama"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-lg font-semibold text-sm text-center block shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Kerja Sama
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;