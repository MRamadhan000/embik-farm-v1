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

    return (
        <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 pt-24 pb-20 min-h-[80vh] flex items-center overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://embikfarm.com/heroBg.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>

            {/* Background decorative elements with parallax */}
            <div 
                className="absolute top-20 right-10 w-32 h-32 bg-green-400 rounded-full opacity-30 blur-3xl transition-transform duration-1000 ease-out z-10"
                style={{ 
                    transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                    opacity: isLoaded ? 0.3 : 0
                }}
            ></div>
            <div 
                className="absolute bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out delay-300 z-10"
                style={{ 
                    transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                    opacity: isLoaded ? 0.2 : 0
                }}
            ></div>
            <div 
                className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-300 rounded-full opacity-25 blur-2xl transition-all duration-1000 ease-out delay-500 z-10"
                style={{ 
                    transform: `translateY(${parallaxSlow * 1.5}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                    opacity: isLoaded ? 0.25 : 0
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-20">

                {/* === CENTER CONTENT === */}
                <div 
                    className={`w-full max-w-4xl flex flex-col items-center text-center space-y-8 transition-all duration-1000 ease-out ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                    style={{ transform: `translateY(${parallaxOffset}px)` }}
                >

                    {/* Badge */}
                    <div 
                        className={`inline-flex items-center px-6 py-3 bg-green-500/20 text-white text-sm font-semibold rounded-full border border-green-300/40 shadow-sm transition-all duration-700 delay-200 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        100% Murni & Berkualitas
                    </div>

                    {/* Primary heading */}
                    <div className="space-y-6">
                        <h1 
                            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${
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
                            className={`text-xl sm:text-2xl text-green-100 leading-relaxed max-w-3xl mx-auto transition-all duration-800 delay-600 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        >
                            Kami menghadirkan susu kambing murni langsung dari peternakan kami,
                            diproses higienis tanpa bahan pengawet untuk kesehatan keluarga Anda.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div 
                        className={`flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg mx-auto transition-all duration-800 delay-700 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                        }`}
                    >
                        <Link
                            href="/order"
                            className="group relative px-10 py-4 bg-white text-green-800 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto text-center"
                        >
                            Pesan Sekarang
                        </Link>

                        <Link
                            href="/product"
                            className="px-10 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-green-800 transition-all duration-300 w-full sm:w-auto text-center"
                        >
                            Lihat Produk
                        </Link>
                    </div>

                    {/* Social proof */}
                    <div 
                        className={`flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 transition-all duration-800 delay-900 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                        }`}
                    >
                        <div className="flex flex-col items-center">
                            <div className="flex items-center space-x-2">
                                <span className="text-3xl font-bold">347+</span>
                                <span className="text-base">Pelanggan</span>
                            </div>
                            <span className="text-sm text-green-200">Puas dengan produk kami</span>
                        </div>

                        <div className="hidden sm:block w-px h-16 bg-green-300/40"></div>

                        <div className="flex flex-col items-center">
                            <div className="flex items-center space-x-1">
                                {Array(5).fill(0).map((_, i) => (
                                    <svg 
                                        key={i} 
                                        className={`w-6 h-6 text-yellow-300 transition-all duration-300 ${
                                            isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                        }`}
                                        style={{ transitionDelay: `${1000 + (i * 100)}ms` }}
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                                    </svg>
                                ))}
                                <span className="text-base font-semibold ml-2">5.0</span>
                            </div>
                            <span className="text-sm text-green-200">Rating tertinggi</span>
                        </div>

                        <div className="hidden sm:block w-px h-16 bg-green-300/40"></div>

                        <div className="flex flex-col items-center">
                            <div className="flex items-center space-x-2">
                                <span className="text-3xl font-bold">24/7</span>
                                <span className="text-base">Support</span>
                            </div>
                            <span className="text-sm text-green-200">Siap melayani Anda</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
