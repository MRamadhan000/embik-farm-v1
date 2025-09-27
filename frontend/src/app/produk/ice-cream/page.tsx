'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Snowflake,
    Heart,
    Shield,
    Sparkles,
    Users,
    Award,
    CheckCircle,
    IceCreamIcon as IceCream2,
    Thermometer,
    Clock,
    Phone,
    Mail,
    Truck,
    Star,
    Zap,
    Refrigerator,
    Baby,
    IceCream
} from "lucide-react";

const GemikIceCreamPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [selectedFlavor, setSelectedFlavor] = useState('vanila');
    const [selectedWeight, setSelectedWeight] = useState('cup');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const parallaxOffset = scrollY * 0.5;
    const parallaxSlow = scrollY * 0.3;

    const flavors = [
        {
            name: 'vanila',
            title: 'Vanila Classic',
            color: 'from-yellow-100 to-yellow-200',
            accent: 'yellow-500',
            price: '25.000',
            originalPrice: '30.000',
            popular: true
        },
        {
            name: 'coklat',
            title: 'Chocolate Rich',
            color: 'from-amber-100 to-amber-200',
            accent: 'amber-600',
            price: '25.000',
            originalPrice: '30.000'
        },
        {
            name: 'stroberi',
            title: 'Strawberry Fresh',
            color: 'from-pink-100 to-pink-200',
            accent: 'pink-500',
            price: '25.000',
            originalPrice: '30.000'
        }
    ];

    const packages = [
        {
            weight: '500ml',
            type: 'Cup Kecil',
            price: '25.000',
            originalPrice: '30.000',
            popular: true
        },
        {
            weight: '1L',
            type: 'Cup Sedang',
            price: '45.000',
            originalPrice: '50.000'
        },
        {
            weight: '2L',
            type: 'Cup Besar',
            price: '80.000',
            special: true
        },
        {
            weight: 'Custom',
            type: 'Pesanan Khusus',
            price: 'Call'
        }
    ];

    const benefits = [
        {
            icon: <Baby className="w-8 h-8 text-blue-600" />,
            title: "Rendah laktosa, cocok untuk semua kalangan",
            description: "Formula khusus yang mudah dicerna untuk anak-anak hingga orang dewasa"
        },
        {
            icon: <Heart className="w-8 h-8 text-red-500" />,
            title: "Kaya nutrisi & Omega-3",
            description: "Diperkaya nutrisi penting dan asam lemak omega-3 untuk kesehatan optimal"
        },
        {
            icon: <Shield className="w-8 h-8 text-green-600" />,
            title: "Tanpa pengawet berbahaya",
            description: "Dibuat dengan bahan alami tanpa pengawet kimia berbahaya"
        },
        {
            icon: <Sparkles className="w-8 h-8 text-purple-600" />,
            title: "Tekstur lembut & rasa premium",
            description: "Tekstur creamy yang lembut dengan cita rasa premium yang memanjakan lidah"
        },
        {
            icon: <Users className="w-8 h-8 text-amber-700" />,
            title: "Cocok untuk gaya hidup sehat dan modern",
            description: "Pilihan sempurna untuk keluarga modern yang mengutamakan kesehatan"
        }
    ];

    const nutritionFacts = [
        {
            nutrient: "Protein",
            amount: "3g",
            per: "per 100g",
            color: "text-blue-600",
            description: "Mendukung pertumbuhan dan pemeliharaan jaringan tubuh"
        },
        {
            nutrient: "Kalsium",
            amount: "120mg",
            per: "per 100g",
            color: "text-pink-500",
            description: "Menguatkan tulang dan gigi"
        },
        {
            nutrient: "Gula",
            amount: "15g",
            per: "per 100g",
            color: "text-purple-600",
            description: "Memberikan rasa manis alami yang seimbang"
        },
        {
            nutrient: "Kalori",
            amount: "200kcal",
            per: "per 100g",
            color: "text-purple-600",
            description: "Sumber energi untuk aktivitas harian"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 pt-24 pb-20 min-h-[60vh] flex items-center overflow-hidden text-white">
                {/* Background decorative elements */}
                <div
                    className="absolute top-20 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-30 blur-3xl transition-transform duration-1000 ease-out"
                    style={{
                        transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                        opacity: isLoaded ? 0.3 : 0
                    }}
                ></div>
                <div
                    className="absolute bottom-20 left-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out delay-300"
                    style={{
                        transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                        opacity: isLoaded ? 0.2 : 0
                    }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    {/* Left Content */}
                    <div
                        className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                            }`}
                    >
                        {/* Badge */}
                        <div className={`inline-flex items-center px-4 py-2 bg-pink-500/20 text-white text-sm font-semibold rounded-full border border-pink-300/40 shadow-sm transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                            <Snowflake className="w-4 h-4 mr-2" />
                            100% Susu Kambing Segar
                        </div>

                        {/* Title */}
                        <div className="space-y-4">
                            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}>
                                <span className="block text-pink-200">Ice Cream</span>
                                <span className="block">Susu Kambing</span>
                                <span className="block text-blue-200">GEMIK</span>
                            </h1>

                            <p className={`text-lg sm:text-xl text-purple-100 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-800 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                                }`}>
                                Ice cream sehat berbahan dasar susu kambing segar yang lembut, creamy, dan rendah laktosa. Diperkaya Omega-3 untuk camilan sehat keluarga.
                            </p>
                        </div>

                        {/* Flavor Badges */}
                        <div className={`flex flex-wrap gap-3 justify-center lg:justify-start transition-all duration-800 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                                <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <span className="text-sm">Vanila</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                                <span className="text-sm">Coklat</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                                <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                                <span className="text-sm">Stroberi</span>
                            </div>
                        </div>

                        {/* Health Benefits */}
                        <div className={`flex items-center gap-6 transition-all duration-800 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            <div className="text-center">
                                <div className="flex items-center gap-1">
                                    <Heart className="w-5 h-5 text-red-400" />
                                    <span className="text-sm font-semibold">Omega-3</span>
                                </div>
                                <span className="text-xs text-purple-200">Nutrisi Sehat</span>
                            </div>
                            <div className="w-px h-8 bg-white/30"></div>
                            <div className="text-center">
                                <div className="flex items-center gap-1">
                                    <Baby className="w-5 h-5 text-blue-400" />
                                    <span className="text-sm font-semibold">Low Lactose</span>
                                </div>
                                <span className="text-xs text-purple-200">Mudah Dicerna</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Product Image */}
                    <div className={`w-full lg:w-1/2 flex justify-center lg:justify-end relative transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                        }`}>
                        <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 z-10">
                            <div className="w-96 h-96 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                {/* Ice cream illustration */}
                                <div className="text-center relative">
                                    <div className="w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <IceCream2 className="w-16 h-16 text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-purple-800">GEMIK</div>
                                    <div className="text-purple-600">Ice Cream Premium</div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-4 left-4">
                                    <Snowflake className="w-6 h-6 text-blue-300 animate-spin" style={{ animationDuration: '3s' }} />
                                </div>
                                <div className="absolute top-8 right-6">
                                    <Snowflake className="w-4 h-4 text-pink-300 animate-spin" style={{ animationDuration: '4s' }} />
                                </div>
                                <div className="absolute bottom-8 left-8">
                                    <Snowflake className="w-5 h-5 text-purple-300 animate-spin" style={{ animationDuration: '5s' }} />
                                </div>
                            </div>

                            {/* Quality Badge */}
                            <div className={`absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 z-20 transition-all duration-700 delay-1000 flex items-center gap-1 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                }`}>
                                <Award className="w-4 h-4" />
                                <span className="text-sm font-bold">Healthy!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-pink-50/50 relative overflow-hidden">
                {/* Modern background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-100 rounded-full opacity-15 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mint-100 rounded-full opacity-10 blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Modern header section */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <Award className="w-5 h-5" />
                            <span>Rasa Premium Segar</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-gray-900">Keunggulan</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-600 to-blue-800">
                                Ice Cream
                            </span>
                            <br />
                            <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-medium">
                                Kami
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Rasa premium dengan bahan segar dan kualitas terjamin untuk kesegaran dan kepuasan keluarga Indonesia
                        </p>
                    </div>

                    {/* Benefits grid with modern cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative"
                                style={{
                                    transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
                                    opacity: isLoaded ? 1 : 0,
                                    transitionDelay: `${800 + index * 150}ms`,
                                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                {/* Main card */}
                                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-4 group-hover:scale-105 border border-gray-100/50 backdrop-blur-sm overflow-hidden">
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

                                    {/* Modern icon container */}
                                    <div className="relative z-10 mb-6">
                                        <div className="relative">
                                            {/* Icon background with enhanced gradients */}
                                            <div className={`w-20 h-20 ${index === 0 ? 'bg-gradient-to-br from-mint-400 to-mint-600' :
                                                index === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                                                    index === 2 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                                                        index === 3 ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                                                            'bg-gradient-to-br from-lavender-400 to-lavender-600'
                                                } rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                                                {/* Shimmer effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                                {/* Icon */}
                                                <div className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                                    {React.cloneElement(benefit.icon, { className: "w-10 h-10 text-white" })}
                                                </div>
                                            </div>

                                            {/* Floating number indicator */}
                                            <div className={`absolute -top-2 -right-2 w-8 h-8 ${index === 0 ? 'bg-mint-500' :
                                                index === 1 ? 'bg-blue-500' :
                                                    index === 2 ? 'bg-purple-500' :
                                                        index === 3 ? 'bg-pink-500' :
                                                            'bg-lavender-500'
                                                } rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                                            {benefit.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                                            {benefit.description}
                                        </p>

                                        {/* Call-to-action hint */}
                                        <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-pink-500 rounded-full"></div>
                                            <span className="text-sm font-medium text-blue-600">Keunggulan utama</span>
                                        </div>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
                                        <div className={`h-full ${index === 0 ? 'bg-gradient-to-r from-mint-400 to-mint-600' :
                                            index === 1 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                                                index === 2 ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                                                    index === 3 ? 'bg-gradient-to-r from-pink-400 to-pink-600' :
                                                        'bg-gradient-to-r from-lavender-400 to-lavender-600'
                                            } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300`}></div>
                                    </div>
                                </div>

                                {/* Enhanced floating shadow */}
                                <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-br from-mint-200 to-mint-300' :
                                    index === 1 ? 'bg-gradient-to-br from-blue-200 to-blue-300' :
                                        index === 2 ? 'bg-gradient-to-br from-purple-200 to-purple-300' :
                                            index === 3 ? 'bg-gradient-to-br from-pink-200 to-pink-300' :
                                                'bg-gradient-to-br from-lavender-200 to-lavender-300'
                                    } rounded-3xl opacity-0 group-hover:opacity-30 transform translate-y-4 group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-pink-50 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute top-40 right-40 w-16 h-16 bg-mint-200 rounded-full opacity-25 animate-ping" style={{ animationDuration: '4s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        {/* Modern badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
                            <Zap className="w-4 h-4" />
                            <span>Nutrisi Seimbang</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            <span className="text-gray-900">Kandungan</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
                                Nutrisi Premium
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Ice cream berkualitas tinggi dengan kandungan nutrisi seimbang
                            <span className="font-semibold text-blue-600"> per 100 gram</span> untuk kenikmatan dan kesehatan
                        </p>
                    </div>

                    {/* Nutrition cards with modern design */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {nutritionFacts.map((item, index) => (
                            <div
                                key={index}
                                className="group relative"
                                style={{
                                    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                                    opacity: isLoaded ? 1 : 0,
                                    transitionDelay: `${600 + index * 150}ms`,
                                    transition: 'all 0.6s ease-out'
                                }}
                            >
                                {/* Main card */}
                                <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105 border border-gray-100 overflow-hidden">
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        {/* Icon background */}
                                        <div className="relative mb-4">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${item.color === 'text-blue-600' ? 'from-blue-400 to-blue-600' :
                                                item.color === 'text-pink-500' ? 'from-pink-400 to-pink-600' :
                                                    item.color === 'text-mint-600' ? 'from-mint-400 to-mint-600' :
                                                        'from-purple-400 to-purple-600'
                                                } rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                                                {item.nutrient === 'Protein' && <Zap className="w-8 h-8 text-white" />}
                                                {item.nutrient === 'Kalsium' && <Heart className="w-8 h-8 text-white" />}
                                                {item.nutrient === 'Gula' && <Shield className="w-8 h-8 text-white" />}
                                                {item.nutrient === 'Kalori' && <Award className="w-8 h-8 text-white" />}
                                            </div>

                                            {/* Floating indicator */}
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full flex items-center justify-center shadow-md transform group-hover:scale-125 transition-all duration-300">
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                            </div>
                                        </div>

                                        {/* Amount with modern typography */}
                                        <div className="mb-2">
                                            <div className={`text-3xl font-black ${item.color} mb-1 transform group-hover:scale-110 transition-transform duration-300`}>
                                                {item.amount}
                                            </div>
                                            <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                                                {item.per}
                                            </div>
                                        </div>

                                        {/* Nutrient name */}
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                                {item.nutrient}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs text-gray-500 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Progress bar indicator */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${item.color === 'text-blue-600' ? 'from-blue-400 to-blue-600' :
                                                item.color === 'text-pink-500' ? 'from-pink-400 to-pink-600' :
                                                    item.color === 'text-mint-600' ? 'from-mint-400 to-mint-600' :
                                                        'from-purple-400 to-purple-600'
                                                } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200`}
                                        ></div>
                                    </div>
                                </div>

                                {/* Floating shadow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-pink-200 rounded-3xl opacity-0 group-hover:opacity-20 transform translate-y-2 group-hover:translate-y-4 transition-all duration-500 -z-10 blur-xl"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom info section */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-mint-400 to-mint-600 rounded-xl flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-800">Rasa Manis Seimbang</div>
                                    <div className="text-sm text-gray-600">Cocok untuk semua usia</div>
                                </div>
                            </div>

                            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-800">Tinggi Kalsium</div>
                                    <div className="text-sm text-gray-600">Baik untuk tulang</div>
                                </div>
                            </div>

                            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-800">Kualitas Premium</div>
                                    <div className="text-sm text-gray-600">Bahan alami terbaik</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Pilihan Rasa & Ukuran</h2>
                        <p className="text-lg text-blue-600">Sesuaikan dengan selera dan kebutuhan Anda</p>
                    </div>

                    {/* Flavor Selection */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-blue-800 mb-6 text-center">Pilih Rasa Ice Cream</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {flavors.map((flavor) => (
                                <div
                                    key={flavor.name}
                                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${selectedFlavor === flavor.name ? 'ring-4 ring-blue-500' : ''
                                        } ${flavor.popular ? 'ring-2 ring-pink-400' : ''}`}
                                    onClick={() => setSelectedFlavor(flavor.name)}
                                >
                                    {flavor.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">Terpopuler</span>
                                        </div>
                                    )}
                                    <div className={`w-20 h-20 bg-gradient-to-br ${flavor.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-md`}>
                                        <IceCream className={`w-10 h-10 text-${flavor.accent}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-800 text-center mb-2">{flavor.title}</h3>
                                    <p className="text-blue-600 text-center text-sm">Rasa {flavor.name} premium yang lembut dan menyegarkan</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Package/Size Selection */}
                    <div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-6 text-center">Pilih Ukuran/Paket</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.weight}
                                    className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${selectedWeight === pkg.weight ? 'ring-4 ring-blue-500' : ''
                                        } ${pkg.popular ? 'ring-2 ring-pink-400' : ''} ${pkg.special ? 'ring-2 ring-mint-500' : ''}`}
                                    onClick={() => setSelectedWeight(pkg.weight)}
                                >
                                    {pkg.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">Terpopuler</span>
                                        </div>
                                    )}
                                    {pkg.special && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-mint-500 text-white px-4 py-1 rounded-full text-sm font-bold">Special</span>
                                        </div>
                                    )}

                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-800 mb-2">{pkg.weight}</div>
                                        <div className="text-sm text-blue-600 mb-3">{pkg.type}</div>
                                        <div className="text-2xl font-bold text-blue-600 mb-1">
                                            {pkg.price === 'Call' ? 'Hubungi Kami' : `Rp ${pkg.price}`}
                                        </div>
                                        {pkg.originalPrice && (
                                            <div className="text-sm text-gray-500 line-through mb-4">Rp {pkg.originalPrice}</div>
                                        )}

                                        <div className="space-y-2 text-sm text-blue-600 mb-6">
                                            <div className="flex items-center gap-2 justify-center">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>Segar terjamin</span>
                                            </div>
                                            <div className="flex items-center gap-2 justify-center">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>Dibuat higienis</span>
                                            </div>
                                            <div className="flex items-center gap-2 justify-center">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>Bisa antar</span>
                                            </div>
                                        </div>

                                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                            {pkg.price === 'Call' ? 'Hubungi' : 'Pilih Paket'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Process Guide - Modern Design */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-100 rounded-full opacity-40 blur-2xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-700 rounded-full text-sm font-medium mb-4">
                            <Clock className="w-4 h-4" />
                            <span>Proses Cepat & Mudah</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Cara <span className="text-blue-600">Pemesanan</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            4 langkah sederhana untuk menikmati ice cream segar berkualitas premium
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8 relative">
                        {/* Connection lines */}
                        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

                        {[
                            {
                                step: "01",
                                title: "Pemesanan",
                                desc: "Hubungi kami via WhatsApp atau telepon untuk memilih rasa dan jumlah",
                                icon: <Phone className="w-8 h-8" />,
                                color: "from-mint-400 to-mint-600",
                                bgColor: "bg-green-500"
                            },
                            {
                                step: "02",
                                title: "Konfirmasi",
                                desc: "Tentukan rasa, ukuran, dan jadwal pengambilan atau pengiriman",
                                icon: <CheckCircle className="w-8 h-8" />,
                                color: "from-blue-400 to-blue-600",
                                bgColor: "bg-blue-500"
                            },
                            {
                                step: "03",
                                title: "Proses",
                                desc: "Ice cream dibuat segar dengan bahan berkualitas sesuai pesanan Anda",
                                icon: <Thermometer className="w-8 h-8" />,
                                color: "from-purple-400 to-purple-600",
                                bgColor: "bg-purple-500"
                            },
                            {
                                step: "04",
                                title: "Pengiriman",
                                desc: "Siap diantar dalam kemasan dingin atau ambil sendiri di outlet kami",
                                icon: <Truck className="w-8 h-8" />,
                                color: "from-pink-400 to-pink-600",
                                bgColor: "bg-pink-500"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative group"
                                style={{
                                    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                                    opacity: isLoaded ? 1 : 0,
                                    transitionDelay: `${1200 + index * 200}ms`
                                }}
                            >
                                {/* Card */}
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group-hover:scale-105 border border-gray-100">
                                    {/* Background gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>

                                    {/* Step number with animated background */}
                                    <div className="relative mb-6">
                                        <div className={`w-20 h-20 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                            <div className="text-white relative z-10">
                                                {item.icon}
                                            </div>
                                        </div>
                                        {/* Floating step number */}
                                        <div className={`absolute -top-3 -right-3 w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                                            {item.step}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center relative z-10">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Progress indicator */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                                        <div
                                            className={`h-full bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                                        ></div>
                                    </div>
                                </div>

                                {/* Connector arrow (hidden on mobile) */}
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-24 -right-4 z-20">
                                        <div className="w-8 h-8 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center shadow-sm">
                                            <div className="w-0 h-0 border-l-2 border-l-blue-400 border-y-2 border-y-transparent"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Call to action */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg border border-blue-100">
                            <div className="flex items-center gap-2 text-blue-600">
                                <Clock className="w-5 h-5" />
                                <span className="font-semibold">Estimasi proses: 1-2 jam</span>
                            </div>
                            <div className="w-px h-6 bg-gray-300"></div>
                            <div className="flex items-center gap-2 text-green-600">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-semibold">Jaminan segar & lezat</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-purple-700 via-pink-700 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Siap Menikmati Ice Cream Sehat?</h2>
                    <p className="text-xl text-purple-100 mb-8">Dapatkan GEMIK sekarang dan rasakan kelezatan yang menyehatkan!</p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            Pesan Sekarang
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-800 font-semibold rounded-2xl transition-all duration-300">
                            Hubungi Kami
                        </button>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>0812-3456-7890</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>info@embikfarm.com</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GemikIceCreamPage;