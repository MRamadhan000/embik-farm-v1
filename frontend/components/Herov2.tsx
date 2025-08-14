'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Trigger animation on component mount
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        // Handle scroll animation
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate parallax values
    const parallaxOffset = scrollY * 0.5;
    const parallaxSlow = scrollY * 0.3;
    const parallaxFast = scrollY * 0.7;

    return (
        <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 pt-24 pb-20 min-h-[70vh] flex items-center overflow-hidden text-white">
            {/* Background decorative elements with parallax */}
            <div 
                className="absolute top-20 right-10 w-32 h-32 bg-green-400 rounded-full opacity-30 blur-3xl transition-transform duration-1000 ease-out"
                style={{ 
                    transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                    opacity: isLoaded ? 0.3 : 0
                }}
            ></div>
            <div 
                className="absolute bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out delay-300"
                style={{ 
                    transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                    opacity: isLoaded ? 0.2 : 0
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">

                {/* === LEFT CONTENT === */}
                <div 
                    className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 transition-all duration-1000 ease-out ${
                        isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                    }`}
                    style={{ transform: `translateY(${parallaxOffset}px)` }}
                >

                    {/* Badge */}
                    <div 
                        className={`inline-flex items-center px-4 py-2 bg-green-500/20 text-white text-sm font-semibold rounded-full border border-green-300/40 shadow-sm transition-all duration-700 delay-200 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        100% Murni & Berkualitas
                    </div>

                    {/* Primary heading */}
                    <div className="space-y-4">
                        <h1 
                            className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                        >
                            <span className="block">Susu Kambing</span>
                            <span 
                                className={`block text-green-200 transition-all duration-800 delay-500 ${
                                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            >
                                Segar & Berkualitas
                            </span>
                        </h1>

                        <p 
                            className={`text-lg sm:text-xl text-green-100 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-800 delay-600 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        >
                            Kami menghadirkan susu kambing murni langsung dari peternakan kami,
                            diproses higienis tanpa bahan pengawet untuk kesehatan keluarga Anda.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div 
                        className={`flex flex-col sm:flex-row items-center gap-6 w-full max-w-lg mx-auto lg:mx-0 transition-all duration-800 delay-700 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                        }`}
                    >
                        <Link
                            href="/order"
                            className="group relative px-8 py-4 bg-white text-green-800 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto text-center"
                        >
                            Pesan Sekarang
                        </Link>

                        <Link
                            href="/product"
                            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-green-800 transition-all duration-300 w-full sm:w-auto text-center"
                        >
                            Lihat Produk
                        </Link>
                    </div>

                    {/* Social proof */}
                    <div 
                        className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-4 transition-all duration-800 delay-900 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                        }`}
                    >
                        <div className="flex flex-col items-center sm:items-start">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold">347+</span>
                                <span className="text-sm">Pelanggan</span>
                            </div>
                            <span className="text-xs text-green-200">Puas dengan produk kami</span>
                        </div>

                        <div className="hidden sm:block w-px h-12 bg-green-300/40"></div>

                        <div className="flex flex-col items-center sm:items-start">
                            <div className="flex items-center space-x-1">
                                {Array(5).fill(0).map((_, i) => (
                                    <svg 
                                        key={i} 
                                        className={`w-5 h-5 text-yellow-300 transition-all duration-300 delay-${1000 + (i * 100)} ${
                                            isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                        }`} 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                                    </svg>
                                ))}
                                <span className="text-sm font-semibold ml-1">5.0</span>
                            </div>
                            <span className="text-xs text-green-200">Rating tertinggi</span>
                        </div>
                    </div>
                </div>

                {/* === RIGHT CONTENT (Image) === */}
                <div 
                    className={`w-full lg:w-1/2 flex justify-center lg:justify-end relative transition-all duration-1000 ease-out delay-300 ${
                        isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                    }`}
                    style={{ transform: `translateY(${-parallaxOffset}px)` }}
                >

                    {/* Multiple Background decorations */}
                    <div 
                        className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-green-600/20 rounded-3xl transition-all duration-1000 delay-500"
                        style={{ 
                            transform: `rotate(6deg) scale(${isLoaded ? 1.05 : 0.8}) translateY(${parallaxSlow}px)`,
                            opacity: isLoaded ? 1 : 0
                        }}
                    ></div>
                    <div 
                        className="absolute inset-0 bg-gradient-to-tl from-green-300/10 to-green-500/15 rounded-3xl transition-all duration-1000 delay-600"
                        style={{ 
                            transform: `rotate(-3deg) scale(${isLoaded ? 1.1 : 0.8}) translateY(${parallaxSlow * 0.8}px)`,
                            opacity: isLoaded ? 1 : 0
                        }}
                    ></div>
                    <div 
                        className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-700/10 rounded-3xl transition-all duration-1000 delay-700"
                        style={{ 
                            transform: `rotate(2deg) scale(${isLoaded ? 1.15 : 0.8}) translateY(${parallaxSlow * 1.2}px)`,
                            opacity: isLoaded ? 1 : 0
                        }}
                    ></div>

                    {/* Main image container */}
                    <div 
                        className={`relative bg-white p-4 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 z-10 ${
                            isLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                        }`}
                        style={{ 
                            transitionDelay: '800ms',
                            transform: `translateY(${parallaxOffset * 0.5}px) ${isLoaded ? 'scale(1)' : 'scale(0.75)'}`
                        }}
                    >
                        <Image
                            src="/images/hero-susu-kambing.png"
                            alt="Produk Susu Kambing Embik Farm - Segar dan Berkualitas Tinggi"
                            width={500}
                            height={500}
                            className="rounded-2xl shadow-lg"
                            priority
                        />

                        {/* Main floating badge */}
                        <div 
                            className={`absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 z-20 transition-all duration-700 delay-1000 ${
                                isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`}
                            style={{ transform: `rotate(12deg) translateY(${parallaxFast * 0.3}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}` }}
                        >
                            <span className="text-sm font-bold">Fresh!</span>
                        </div>
                    </div>

                    {/* === Floating Ornaments (z-20) === */}

                    {/* Top Left - Organic Badge */}
                    <div 
                        className={`absolute -top-6 -left-8 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-green-100 transform -rotate-6 hover:rotate-0 transition-all duration-700 delay-1100 z-20 ${
                            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                        style={{ transform: `rotate(-6deg) translateY(${parallaxFast * 0.4}px) ${isLoaded ? '' : 'translateY(-16px)'}` }}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-bold text-green-700">100% Organic</span>
                        </div>
                    </div>

                    {/* Top Right - Quality Badge */}
                    <div 
                        className={`absolute -top-2 -right-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-2 rounded-xl shadow-lg transform rotate-12 hover:-rotate-6 transition-all duration-700 delay-1200 z-20 ${
                            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                        style={{ transform: `rotate(12deg) translateY(${parallaxFast * 0.2}px) ${isLoaded ? '' : 'translateY(-16px)'}` }}
                    >
                        <div className="text-center">
                            <div className="text-xs font-bold">PREMIUM</div>
                            <div className="text-xs">Quality</div>
                        </div>
                    </div>

                    {/* Left Middle - Farm Fresh */}
                    <div 
                        className={`absolute top-16 -left-12 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-gray-100 transform -rotate-3 hover:rotate-3 transition-all duration-700 delay-1300 z-20 ${
                            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transform: `rotate(-3deg) translateY(${parallaxFast * 0.6}px) ${isLoaded ? '' : 'translateX(-16px)'}` }}
                    >
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                            </svg>
                            <span className="text-xs font-medium text-gray-700">Farm Fresh</span>
                        </div>
                    </div>

                    {/* Right Middle - Healthy Badge */}
                    <div 
                        className={`absolute top-20 -right-8 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full shadow-lg transform rotate-6 hover:-rotate-6 transition-all duration-700 delay-1400 z-20 ${
                            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transform: `rotate(6deg) translateY(${parallaxFast * 0.3}px) ${isLoaded ? '' : 'translateX(16px)'}` }}
                    >
                        <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-bold">Healthy</span>
                        </div>
                    </div>

                    {/* Bottom Left - Natural Badge */}
                    <div 
                        className={`absolute bottom-6 -left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-green-100 transform rotate-3 hover:-rotate-3 transition-all duration-700 delay-1500 z-20 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transform: `rotate(3deg) translateY(${parallaxFast * 0.5}px) ${isLoaded ? '' : 'translateY(16px)'}` }}
                    >
                        <div className="text-center">
                            <div className="text-lg font-bold text-green-600">100%</div>
                            <div className="text-xs text-gray-600">Natural</div>
                        </div>
                    </div>

                    {/* Bottom Right - Best Seller */}
                    <div 
                        className={`absolute bottom-2 -right-10 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-2 rounded-2xl shadow-lg transform -rotate-12 hover:rotate-6 transition-all duration-700 delay-1600 z-20 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transform: `rotate(-12deg) translateY(${parallaxFast * 0.4}px) ${isLoaded ? '' : 'translateY(16px)'}` }}
                    >
                        <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                            </svg>
                            <span className="text-sm font-bold">Terlaris</span>
                        </div>
                    </div>

                    {/* Additional decorative elements */}

                    {/* Floating particles dengan animasi delay */}
                    <div 
                        className={`absolute top-8 left-4 w-2 h-2 bg-green-300/60 rounded-full animate-ping transition-all duration-700 delay-1700 ${
                            isLoaded ? 'opacity-60' : 'opacity-0'
                        }`}
                        style={{ transform: `translateY(${parallaxFast * 0.8}px)` }}
                    ></div>
                    <div 
                        className={`absolute top-32 right-8 w-1.5 h-1.5 bg-yellow-300/60 rounded-full animate-pulse transition-all duration-700 delay-1800 ${
                            isLoaded ? 'opacity-60' : 'opacity-0'
                        }`}
                        style={{ transform: `translateY(${parallaxFast * 0.6}px)` }}
                    ></div>
                    <div 
                        className={`absolute bottom-16 left-8 w-2.5 h-2.5 bg-blue-300/60 rounded-full animate-bounce transition-all duration-700 delay-1900 ${
                            isLoaded ? 'opacity-60' : 'opacity-0'
                        }`}
                        style={{ transform: `translateY(${parallaxFast * 0.4}px)` }}
                    ></div>
                    <div 
                        className={`absolute bottom-32 right-4 w-1 h-1 bg-pink-300/60 rounded-full animate-ping transition-all duration-700 delay-2000 ${
                            isLoaded ? 'opacity-60' : 'opacity-0'
                        }`}
                        style={{ transform: `translateY(${parallaxFast * 0.7}px)` }}
                    ></div>

                    {/* Additional floating info cards dengan staggered animation */}

                    {/* Vitamin Rich */}
                    <div 
                        className={`absolute top-48 -left-8 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg border border-yellow-100 transform rotate-6 hover:-rotate-6 transition-all duration-700 delay-2100 z-20 ${
                            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transform: `rotate(6deg) translateY(${parallaxFast * 0.5}px) ${isLoaded ? '' : 'translateX(-16px)'}` }}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-gray-700">Kaya Vitamin</span>
                        </div>
                    </div>

                    {/* No Preservatives */}
                    <div 
                        className={`absolute top-64 -right-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-full shadow-lg transform -rotate-6 hover:rotate-6 transition-all duration-700 delay-2200 z-20 ${
                            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transform: `rotate(-6deg) translateY(${parallaxFast * 0.3}px) ${isLoaded ? '' : 'translateX(16px)'}` }}
                    >
                        <span className="text-xs font-bold">No Preservatives</span>
                    </div>

                    {/* Calcium Rich */}
                    <div 
                        className={`absolute bottom-24 -left-10 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-2xl shadow-lg border border-blue-100 transform -rotate-6 hover:rotate-6 transition-all duration-700 delay-2300 z-20 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transform: `rotate(-6deg) translateY(${parallaxFast * 0.6}px) ${isLoaded ? '' : 'translateY(16px)'}` }}
                    >
                        <div className="flex items-center space-x-1">
                            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-medium text-gray-700">Tinggi Kalsium</span>
                        </div>
                    </div>

                    {/* Trusted Brand */}
                    <div 
                        className={`absolute bottom-48 -right-14 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-2 rounded-xl shadow-lg transform rotate-12 hover:-rotate-12 transition-all duration-700 delay-2400 z-20 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transform: `rotate(12deg) translateY(${parallaxFast * 0.4}px) ${isLoaded ? '' : 'translateY(16px)'}` }}
                    >
                        <div className="text-center">
                            <div className="text-xs font-bold">TRUSTED</div>
                            <div className="text-xs">Brand</div>
                        </div>
                    </div>

                    {/* Background glow effects dengan parallax */}
                    <div 
                        className={`absolute top-12 left-12 w-24 h-24 bg-green-300/20 rounded-full blur-2xl animate-pulse transition-all duration-1000 delay-2500 ${
                            isLoaded ? 'opacity-20' : 'opacity-0'
                        }`}
                        style={{ transform: `translateY(${parallaxSlow * 1.2}px)` }}
                    ></div>
                    <div 
                        className={`absolute bottom-12 right-12 w-32 h-32 bg-blue-300/15 rounded-full blur-2xl animate-pulse transition-all duration-1000 delay-2600 ${
                            isLoaded ? 'opacity-15' : 'opacity-0'
                        }`}
                        style={{ 
                            animationDelay: '1s',
                            transform: `translateY(${parallaxSlow * 0.8}px)` 
                        }}
                    ></div>
                    <div 
                        className={`absolute top-32 right-32 w-20 h-20 bg-yellow-300/20 rounded-full blur-2xl animate-pulse transition-all duration-1000 delay-2700 ${
                            isLoaded ? 'opacity-20' : 'opacity-0'
                        }`}
                        style={{ 
                            animationDelay: '2s',
                            transform: `translateY(${parallaxSlow * 1.5}px)` 
                        }}
                    ></div>

                </div>
            </div>
        </section>
    );
};

export default Hero;