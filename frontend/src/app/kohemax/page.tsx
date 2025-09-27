'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Shield,
    Zap,
    Heart,
    Scale,
    Award,
    CheckCircle,
    Leaf,
    Users,
    Clock,
    Phone,
    Mail,
    Star,
    Package,
    Sprout,
    Truck,
    Calendar
} from "lucide-react";

const KohemaxPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [selectedType, setSelectedType] = useState('granul');
    const [selectedPackage, setSelectedPackage] = useState('5kg');

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

    const types = [
        {
            name: 'granul',
            title: 'Granul KOHEMAX',
            description: 'Pupuk organik dalam bentuk butiran untuk aplikasi merata',
            color: 'from-green-100 to-lime-100',
            accent: 'green-600',
            popular: true
        },
        {
            name: 'cair',
            title: 'Cair KOHEMAX',
            description: 'Pupuk cair untuk penyiraman langsung, cepat meresap',
            color: 'from-blue-100 to-cyan-100',
            accent: 'blue-600'
        },
        {
            name: 'serbuk',
            title: 'Serbuk KOHEMAX',
            description: 'Pupuk serbuk untuk pencampuran tanah intensif',
            color: 'from-amber-100 to-yellow-100',
            accent: 'amber-600'
        }
    ];

    const packages = [
        { weight: '1kg', price: '20.000', originalPrice: '25.000', type: 'Hobi Berkebun' },
        { weight: '5kg', price: '90.000', originalPrice: '110.000', type: 'Kebun Kecil', popular: true },
        { weight: '25kg', price: '400.000', originalPrice: '450.000', type: 'Pertanian Skala Besar' },
        { weight: 'custom', price: 'Call', originalPrice: '', type: 'Pesanan Khusus', special: true }
    ];

    const benefits = [
        {
            icon: <Leaf className="w-8 h-8 text-green-600" />,
            title: "Meningkatkan kesuburan tanah",
            description: "Mengembalikan nutrisi alami untuk pertumbuhan tanaman optimal"
        },
        {
            icon: <Sprout className="w-8 h-8 text-blue-600" />,
            title: "Memperbaiki struktur tanah",
            description: "Menjaga kelembaban dan memperbaiki tekstur tanah"
        },
        {
            icon: <Zap className="w-8 h-8 text-purple-600" />,
            title: "Kaya unsur hara NPK & mikro",
            description: "Mengandung NPK (1,0:0,5:1,5) plus Ca & Mg untuk tanaman sehat"
        },
        {
            icon: <Shield className="w-8 h-8 text-lime-600" />,
            title: "Ramah lingkungan",
            description: "Fermentasi dengan EM4 mengurangi bau dan limbah"
        },
        {
            icon: <Users className="w-8 h-8 text-amber-600" />,
            title: "Cocok untuk berbagai tanaman",
            description: "Ideal untuk sayuran, buah, padi, dan tanaman perkebunan"
        }
    ];

    const nutritionFacts = [
        { nutrient: 'Nitrogen (N)', amount: '1.0%', color: 'text-green-600', per: '100g' },
        { nutrient: 'Fosfor (P)', amount: '0.5%', color: 'text-blue-600', per: '100g' },
        { nutrient: 'Kalium (K)', amount: '1.5%', color: 'text-lime-600', per: '100g' },
        { nutrient: 'Kalsium & Magnesium', amount: 'Traces', color: 'text-amber-600', per: '100g' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-amber-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-700 via-lime-700 to-amber-800 pt-24 pb-20 min-h-[60vh] flex items-center overflow-hidden text-white">
                {/* Background decorative elements */}
                <div
                    className="absolute top-20 right-10 w-32 h-32 bg-lime-300 rounded-full opacity-30 blur-3xl transition-transform duration-1000 ease-out"
                    style={{
                        transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                        opacity: isLoaded ? 0.3 : 0
                    }}
                ></div>
                <div
                    className="absolute bottom-20 left-10 w-40 h-40 bg-green-300 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out delay-300"
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
                        <div className={`inline-flex items-center px-4 py-2 bg-green-500/20 text-white text-sm font-semibold rounded-full border border-green-300/40 shadow-sm transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                            <Shield className="w-4 h-4 mr-2" />
                            100% Organik & Ramah Lingkungan
                        </div>

                        {/* Title */}
                        <div className="space-y-4">
                            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}>
                                <span className="block text-lime-200">Pupuk Organik</span>
                                <span className="block">KOHEMAX</span>
                            </h1>

                            <p className={`text-lg sm:text-xl text-green-100 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-800 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                                }`}>
                                Pupuk organik fermentasi berbahan kotoran kambing, dolomit, serabut kelapa, dan EM4. Kaya nutrisi, ramah lingkungan, dan bebas bau menyengat.
                            </p>
                        </div>

                        {/* Quality Highlights */}
                        <div className={`grid grid-cols-2 gap-4 w-full max-w-md transition-all duration-800 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                <Zap className="w-6 h-6 text-lime-300 mx-auto mb-1" />
                                <div className="text-sm font-semibold">NPK Tinggi</div>
                                <div className="text-xs text-green-200">1,0:0,5:1,5</div>
                            </div>
                            <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                <Heart className="w-6 h-6 text-amber-300 mx-auto mb-1" />
                                <div className="text-sm font-semibold">Ramah Lingkungan</div>
                                <div className="text-xs text-green-200">Bebas bau</div>
                            </div>
                        </div>

                        {/* Usage Badges */}
                        <div className={`flex flex-wrap gap-3 justify-center lg:justify-start transition-all duration-800 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm">
                                <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                                <span>Sayuran</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm">
                                <div className="w-3 h-3 bg-lime-300 rounded-full"></div>
                                <span>Buah</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm">
                                <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
                                <span>Perkebunan</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Product Image */}
                    <div className={`w-full lg:w-1/2 flex justify-center lg:justify-end relative transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                        }`}>
                        <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 z-10">
                            <div className="w-96 h-96 bg-gradient-to-br from-green-100 via-lime-100 to-amber-50 rounded-2xl flex items-center justify-center relative">
                                {/* Product illustration */}
                                <div className="text-center relative">
                                    <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-lime-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <Sprout className="w-16 h-16 text-green-700" />
                                    </div>
                                    <div className="text-2xl font-bold text-green-800">KOHEMAX</div>
                                    <div className="text-green-600">Pupuk Organik Premium</div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-8 left-8">
                                    <Leaf className="w-8 h-8 text-lime-400" />
                                </div>
                                <div className="absolute top-8 right-8">
                                    <Sprout className="w-6 h-6 text-green-400" />
                                </div>
                                <div className="absolute bottom-8 left-8">
                                    <Award className="w-6 h-6 text-amber-500" />
                                </div>
                            </div>

                            {/* Quality Badge */}
                            <div className={`absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 z-20 transition-all duration-700 delay-1000 flex items-center gap-1 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                }`}>
                                <Award className="w-4 h-4" />
                                <span className="text-sm font-bold">Premium!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nutrition Facts - Modern Design */}
            <section className="py-20 bg-gradient-to-br from-green-50 via-lime-50 to-amber-50 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-24 h-24 bg-lime-200 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute top-40 right-40 w-16 h-16 bg-amber-200 rounded-full opacity-25 animate-ping" style={{ animationDuration: '4s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        {/* Modern badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-lime-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
                            <Zap className="w-4 h-4" />
                            <span>Nutrisi Lengkap</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            <span className="text-gray-900">Kandungan</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">
                                Nutrisi Premium
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Pupuk organik KOHEMAX dengan kandungan nutrisi optimal
                            <span className="font-semibold text-green-600"> per 100 gram</span> untuk tanaman sehat
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
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-lime-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        {/* Icon background */}
                                        <div className="relative mb-4">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${item.color === 'text-green-600' ? 'from-green-400 to-green-600' :
                                                item.color === 'text-blue-600' ? 'from-blue-400 to-blue-600' :
                                                    item.color === 'text-lime-600' ? 'from-lime-400 to-lime-600' :
                                                        'from-amber-400 to-amber-600'
                                                } rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                                                {item.nutrient === 'Nitrogen (N)' && <Zap className="w-8 h-8 text-white" />}
                                                {item.nutrient === 'Fosfor (P)' && <Heart className="w-8 h-8 text-white" />}
                                                {item.nutrient === 'Kalium (K)' && <Shield className="w-8 h-8 text-white" />}
                                                {item.nutrient === 'Kalsium & Magnesium' && <Award className="w-8 h-8 text-white" />}
                                            </div>

                                            {/* Floating indicator */}
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-lime-400 rounded-full flex items-center justify-center shadow-md transform group-hover:scale-125 transition-all duration-300">
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
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                                                {item.nutrient}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs text-gray-500 leading-relaxed">
                                                {item.nutrient === 'Nitrogen (N)' && 'Meningkatkan pertumbuhan daun'}
                                                {item.nutrient === 'Fosfor (P)' && 'Mendukung perkembangan akar'}
                                                {item.nutrient === 'Kalium (K)' && 'Meningkatkan ketahanan tanaman'}
                                                {item.nutrient === 'Kalsium & Magnesium' && 'Memperkuat struktur tanaman'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Progress bar indicator */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${item.color === 'text-green-600' ? 'from-green-400 to-green-600' :
                                                item.color === 'text-blue-600' ? 'from-blue-400 to-blue-600' :
                                                    item.color === 'text-lime-600' ? 'from-lime-400 to-lime-600' :
                                                        'from-amber-400 to-amber-600'
                                                } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200`}
                                        ></div>
                                    </div>
                                </div>

                                {/* Floating shadow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-lime-200 rounded-3xl opacity-0 group-hover:opacity-20 transform translate-y-2 group-hover:translate-y-4 transition-all duration-500 -z-10 blur-xl"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom info section */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-800">Ramah Lingkungan</div>
                                    <div className="text-sm text-gray-600">Bebas bau menyengat</div>
                                </div>
                            </div>

                            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-lime-600 rounded-xl flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-800">Tinggi Nutrisi</div>
                                    <div className="text-sm text-gray-600">NPK & mikroelemen</div>
                                </div>
                            </div>

                            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-800">Kualitas Premium</div>
                                    <div className="text-sm text-gray-600">Fermentasi EM4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 via-green-50/30 to-lime-50/50 relative overflow-hidden">
                {/* Modern background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-lime-100 rounded-full opacity-15 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-100 rounded-full opacity-10 blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Modern header section */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-lime-500 text-white rounded-full text-sm font-semibold mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <Award className="w-5 h-5" />
                            <span>Kualitas Premium Terjamin</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-gray-900">Keunggulan</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-lime-600 to-green-800">
                                Pupuk KOHEMAX
                            </span>
                            <br />
                            <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-medium">
                                Embik Farm
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Pupuk organik premium untuk kesuburan tanah dan pertumbuhan tanaman optimal
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
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-lime-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

                                    {/* Modern icon container */}
                                    <div className="relative z-10 mb-6">
                                        <div className="relative">
                                            {/* Icon background with enhanced gradients */}
                                            <div className={`w-20 h-20 ${index === 0 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                                                index === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                                                    index === 2 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                                                        index === 3 ? 'bg-gradient-to-br from-lime-400 to-lime-600' :
                                                            'bg-gradient-to-br from-amber-400 to-amber-600'
                                                } rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                                                {/* Shimmer effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                                {/* Icon */}
                                                <div className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                                    {React.cloneElement(benefit.icon, { className: "w-10 h-10 text-white" })}
                                                </div>
                                            </div>

                                            {/* Floating number indicator */}
                                            <div className={`absolute -top-2 -right-2 w-8 h-8 ${index === 0 ? 'bg-green-500' :
                                                index === 1 ? 'bg-blue-500' :
                                                    index === 2 ? 'bg-purple-500' :
                                                        index === 3 ? 'bg-lime-500' :
                                                            'bg-amber-500'
                                                } rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                                            {benefit.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                                            {benefit.description}
                                        </p>

                                        {/* Call-to-action hint */}
                                        <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-lime-500 rounded-full"></div>
                                            <span className="text-sm font-medium text-green-600">Keunggulan utama</span>
                                        </div>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
                                        <div className={`h-full ${index === 0 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                                            index === 1 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                                                index === 2 ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                                                    index === 3 ? 'bg-gradient-to-r from-lime-400 to-lime-600' :
                                                        'bg-gradient-to-r from-amber-400 to-amber-600'
                                            } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300`}></div>
                                    </div>
                                </div>

                                {/* Enhanced floating shadow */}
                                <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-br from-green-200 to-green-300' :
                                    index === 1 ? 'bg-gradient-to-br from-blue-200 to-blue-300' :
                                        index === 2 ? 'bg-gradient-to-br from-purple-200 to-purple-300' :
                                            index === 3 ? 'bg-gradient-to-br from-lime-200 to-lime-300' :
                                                'bg-gradient-to-br from-amber-200 to-amber-300'
                                    } rounded-3xl opacity-0 group-hover:opacity-30 transform translate-y-4 group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Options */}
            <section className="py-20 bg-gradient-to-r from-green-50 to-lime-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">Pilihan Jenis & Kemasan</h2>
                        <p className="text-lg text-green-600">Sesuaikan dengan kebutuhan pertanian Anda</p>
                    </div>

                    {/* Type Selection */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-green-800 mb-6 text-center">Pilih Jenis Pupuk</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {types.map((type) => (
                                <div
                                    key={type.name}
                                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${selectedType === type.name ? 'ring-4 ring-green-500' : ''
                                        } ${type.popular ? 'ring-2 ring-lime-400' : ''}`}
                                    onClick={() => setSelectedType(type.name)}
                                >
                                    {type.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-lime-500 text-white px-4 py-1 rounded-full text-sm font-bold">Terpopuler</span>
                                        </div>
                                    )}
                                    <div className={`w-20 h-20 bg-gradient-to-br ${type.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-md`}>
                                        <Sprout className={`w-10 h-10 text-${type.accent}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-800 text-center mb-2">{type.title}</h3>
                                    <p className="text-green-600 text-center text-sm">{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Package Selection */}
                    <div>
                        <h3 className="text-xl font-semibold text-green-800 mb-6 text-center">Pilih Kemasan</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.weight}
                                    className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${selectedPackage === pkg.weight ? 'ring-4 ring-green-500' : ''
                                        } ${pkg.popular ? 'ring-2 ring-lime-400' : ''} ${pkg.special ? 'ring-2 ring-amber-500' : ''}`}
                                    onClick={() => setSelectedPackage(pkg.weight)}
                                >
                                    {pkg.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-lime-500 text-white px-4 py-1 rounded-full text-sm font-bold">Terpopuler</span>
                                        </div>
                                    )}
                                    {pkg.special && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">Special</span>
                                        </div>
                                    )}

                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-green-800 mb-2">{pkg.weight}</div>
                                        <div className="text-sm text-green-600 mb-3">{pkg.type}</div>
                                        <div className="text-2xl font-bold text-green-600 mb-1">
                                            {pkg.price === 'Call' ? 'Hubungi Kami' : `Rp ${pkg.price}`}
                                        </div>
                                        {pkg.originalPrice && (
                                            <div className="text-sm text-gray-500 line-through mb-4">Rp {pkg.originalPrice}</div>
                                        )}

                                        <div className="space-y-2 text-sm text-green-600 mb-6">
                                            <div className="flex items-center gap-2 justify-center">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>Kualitas terjamin</span>
                                            </div>
                                            <div className="flex items-center gap-2 justify-center">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>Proses higienis</span>
                                            </div>
                                            <div className="flex items-center gap-2 justify-center">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>Bisa antar</span>
                                            </div>
                                        </div>

                                        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
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
            <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-lime-100 rounded-full opacity-40 blur-2xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-sm font-medium mb-4">
                            <Clock className="w-4 h-4" />
                            <span>Proses Cepat & Mudah</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Cara <span className="text-green-600">Pemesanan</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            4 langkah sederhana untuk mendapatkan pupuk organik KOHEMAX berkualitas
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8 relative">
                        {/* Connection lines */}
                        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

                        {[
                            {
                                step: "01",
                                title: "Pemesanan",
                                desc: "Hubungi kami via WhatsApp atau telepon untuk konsultasi kebutuhan",
                                icon: <Phone className="w-8 h-8" />,
                                color: "from-green-400 to-green-600",
                                bgColor: "bg-green-500"
                            },
                            {
                                step: "02",
                                title: "Konfirmasi",
                                desc: "Tentukan jenis pupuk, kemasan, dan jadwal pengambilan",
                                icon: <CheckCircle className="w-8 h-8" />,
                                color: "from-blue-400 to-blue-600",
                                bgColor: "bg-blue-500"
                            },
                            {
                                step: "03",
                                title: "Proses",
                                desc: "Pupuk disiapkan dengan proses fermentasi higienis",
                                icon: <Sprout className="w-8 h-8" />,
                                color: "from-lime-400 to-lime-600",
                                bgColor: "bg-lime-500"
                            },
                            {
                                step: "04",
                                title: "Pengiriman",
                                desc: "Siap diantar ke lokasi atau ambil di outlet kami",
                                icon: <Truck className="w-8 h-8" />,
                                color: "from-amber-400 to-amber-600",
                                bgColor: "bg-amber-500"
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
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
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
                                        <div className="w-8 h-8 bg-white border-2 border-green-200 rounded-full flex items-center justify-center shadow-sm">
                                            <div className="w-0 h-0 border-l-2 border-l-green-400 border-y-2 border-y-transparent"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Call to action */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg border border-green-100">
                            <div className="flex items-center gap-2 text-green-600">
                                <Clock className="w-5 h-5" />
                                <span className="font-semibold">Estimasi proses: 1-2 jam</span>
                            </div>
                            <div className="w-px h-6 bg-gray-300"></div>
                            <div className="flex items-center gap-2 text-lime-600">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-semibold">Jaminan kualitas & higienis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-green-700 via-lime-700 to-amber-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Siap Memesan Pupuk KOHEMAX?</h2>
                    <p className="text-xl text-lime-100 mb-8">Hubungi kami sekarang untuk pupuk organik berkualitas!</p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-8 py-4 bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            Pesan Sekarang
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold rounded-2xl transition-all duration-300">
                            Konsultasi Dulu
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

                    <div className="mt-6 text-center">
                        <p className="text-lime-200 text-sm">
                            💡 <strong>Tips:</strong> Untuk kebutuhan pertanian besar, konsultasikan kebutuhan Anda untuk kemasan khusus
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KohemaxPage;