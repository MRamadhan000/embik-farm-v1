"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/products" },
    { label: "About Us", href: "/about-us" },
    { label: "Kontak", href: "/contact" },
  ];

  // ✅ Function untuk smooth scroll
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('kerja-sama');
    if (section) {
      const navbarHeight = 64; // h-16 = 64px
      const targetPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false); // Close mobile menu if open
    }
  };
  
  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* LEFT - Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-200">
                {!logoError ? (
                  <img
                    src="/images/logo.jpg"
                    alt="Embik Farm Logo"
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={() => {
                      console.error('Logo failed to load');
                      setLogoError(true);
                    }}
                    onLoad={() => {
                      console.log('Logo loaded successfully');
                    }}
                  />
                ) : (
                  // Fallback logo jika gambar gagal load
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">EF</span>
                  </div>
                )}
              </div>
              <span className="font-bold text-xl text-gray-800 tracking-tight group-hover:text-green-700 transition-colors duration-200">
                Embik Farm
              </span>
            </Link>

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
              <a
                href="#kerja-sama"
                onClick={scrollToSection}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 border border-green-600 cursor-pointer"
              >
                Kerja Sama
              </a>
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
        <div 
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-2'
          }`}
        >
          <div className="bg-white/98 backdrop-blur-sm border-b border-gray-100 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-gray-700 text-sm font-semibold hover:text-green-700 hover:bg-green-50 px-4 py-3 rounded-lg transition-all duration-200 transform hover:translate-x-1 ${
                      isOpen 
                        ? 'animate-slideInLeft opacity-100' 
                        : 'opacity-0'
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={{
                      animationDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 mt-3 border-t border-gray-100">
                  <a
                    href="#kerja-sama"
                    onClick={scrollToSection}
                    className={`bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-lg font-semibold text-sm text-center block shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${
                      isOpen 
                        ? 'animate-slideInLeft opacity-100' 
                        : 'opacity-0'
                    }`}
                    style={{
                      animationDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms'
                    }}
                  >
                    Kerja Sama
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SPACER untuk mencegah content tertutup navbar */}
      <div className="h-16"></div>

      {/* Custom CSS untuk animasi */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;