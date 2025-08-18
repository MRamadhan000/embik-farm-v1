'use client'

import React, { useEffect, useState, useRef } from 'react';

const AboutUs: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Mouse tracking for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Typewriter effect for title
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Tentang Embik Farm';

  useEffect(() => {
    if (isVisible && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, displayText]);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-16 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-emerald-200/40 rounded-full animate-bounce transition-all duration-1000 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
                transform: `translate(${mousePosition.x * (i + 1) * 5}px, ${mousePosition.y * (i + 1) * 5}px)`,
              }}
            />
          ))}
        </div>

        {/* Main background blobs with mouse parallax */}
        <div
          className={`absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-emerald-100/30 to-lime-100/20 rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-x-32 -translate-y-32 opacity-0'
          }`}
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) ${
              isLoaded ? 'translate(0, 0)' : 'translate(-8rem, -8rem)'
            }`,
          }}
        />
        
        <div
          className={`absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-lime-100/30 to-emerald-100/20 rounded-full blur-3xl transition-all duration-1000 ease-out delay-200 ${
            isLoaded ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-32 translate-y-32 opacity-0'
          }`}
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) ${
              isLoaded ? 'translate(0, 0)' : 'translate(8rem, 8rem)'
            }`,
          }}
        />

        {/* Geometric shapes */}
        <div
          className={`absolute top-1/4 right-1/4 w-4 h-4 border-2 border-emerald-300/50 rotate-45 transition-all duration-2000 ${
            isVisible ? 'rotate-[405deg] opacity-100' : 'rotate-45 opacity-0'
          }`}
        />
        <div
          className={`absolute bottom-1/3 left-1/5 w-6 h-6 border border-lime-400/50 rounded-full transition-all duration-1500 delay-300 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content with enhanced animations */}
          <div>
            {/* Typewriter Title */}
            <h1
              ref={titleRef}
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-800 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {displayText}
              <span className="text-emerald-600 inline-block hover:scale-105 transition-transform duration-300">
                {displayText.includes('Embik Farm') && (
                  <span className="relative">
                    <span className="absolute -inset-1 bg-emerald-100 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">Embik Farm</span>
                  </span>
                )}
              </span>
              {isVisible && displayText.length < fullText.length && (
                <span className="animate-pulse text-emerald-600">|</span>
              )}
            </h1>

            {/* Animated paragraph with reveal effect */}
            <div className="overflow-hidden">
              <p
                className={`text-base sm:text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-800 ease-out delay-200 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <span className="relative">
                  <span className={`absolute inset-0 bg-emerald-200 transition-all duration-1000 delay-500 ${
                    isVisible ? 'translate-x-full' : 'translate-x-0'
                  }`} />
                  <span className="relative">
                    Embik Farm adalah peternakan kambing premium yang berdedikasi menghasilkan susu kambing murni dan produk turunannya yang sehat, segar, dan berkualitas tinggi. Kami percaya kesehatan dimulai dari asupan alami dan bergizi.
                  </span>
                </span>
              </p>
            </div>

            {/* Enhanced Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className={`group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="relative">
                    <h2 className="text-xl font-semibold text-emerald-600 mb-2 group-hover:text-emerald-700 transition-all duration-300 transform group-hover:scale-105">
                      ✨ Nilai Kami
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Kualitas, kejujuran, dan keberlanjutan adalah pilar utama kami dalam setiap proses produksi.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/5 to-lime-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="relative">
                    <h2 className="text-xl font-semibold text-emerald-600 mb-2 group-hover:text-emerald-700 transition-all duration-300 transform group-hover:scale-105">
                      🎯 Misi Kami
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Menyediakan produk susu kambing yang menyehatkan, terjangkau, dan bermanfaat bagi masyarakat luas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Stats */}
            <div className={`mt-8 grid grid-cols-3 gap-4 transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {[
                { number: '5+', label: 'Tahun' },
                { number: '100+', label: 'Kambing' },
                { number: '500+', label: 'Pelanggan' }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`text-2xl font-bold text-emerald-600 transition-all duration-700 group-hover:scale-125 ${
                    isVisible ? 'animate-bounce' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms`, animationDuration: '2s' }}>
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-emerald-600 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Enhanced Image Section */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'
            }`}
          >
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-lime-600 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-rotate-1 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1577900077483-6c798b0a8760?auto=format&fit=crop&w=1000&q=80"
                  alt="Embik Farm - Premium Goat Milk Production"
                  className="w-full h-[400px] sm:h-[450px] object-cover transition-transform duration-700 hover:scale-110"
                />
                
                {/* Overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Enhanced Animated Badge */}
            <div
              className={`absolute -bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-100 px-6 py-3 flex items-center gap-4 transition-all duration-800 ease-out hover:shadow-xl hover:-translate-y-2 group ${
                isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-ping" />
              </div>
              <div>
                <span className="block text-emerald-600 text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                  100%
                </span>
                <span className="block text-gray-600 text-sm font-medium">
                  Susu Kambing Murni
                </span>
              </div>
            </div>

            {/* Floating action button */}
            <button 
              className={`absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <span className="text-lg">❤️</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutUs);