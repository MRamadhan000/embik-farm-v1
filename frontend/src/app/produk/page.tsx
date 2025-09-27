'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    Milk,
    Package,
    Tractor,
    IceCream,
    CheckCircle,
    Star,
    Award,
    Shield,
    Leaf,
} from "lucide-react";

const ProductsPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollY, setScrollY] = useState(0);

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

    const products = [
        {
            name: 'susu-kambing',
            title: 'Susu Kambing',
            description: 'Susu kambing pasteurisasi segar, kaya nutrisi, dan mudah dicerna untuk kesehatan keluarga.',
            icon: <Milk className="w-12 h-12 text-blue-600" />,
            color: 'from-blue-100 to-indigo-100',
            accent: 'blue-600',
            link: '/produk/susu-kambing',
            popular: true
        },
        {
            name: 'daging-segar',
            title: 'Daging Segar',
            description: 'Daging kambing segar berkualitas tinggi, higienis, dan siap masak untuk hidangan lezat.',
            icon: <Package className="w-12 h-12 text-purple-600" />,
            color: 'from-purple-100 to-violet-100',
            accent: 'purple-600',
            link: '/produk/daging-segar'
        },
        {
            name: 'kambing-hidup',
            title: 'Kambing Hidup',
            description: 'Kambing hidup sehat untuk aqiqah, kurban, atau investasi ternak dengan pakan alami.',
            icon: <Tractor className="w-12 h-12 text-amber-600" />,
            color: 'from-amber-100 to-orange-100',
            accent: 'amber-600',
            link: '/produk/kambing-hidup'
        },
        {
            name: 'ice-cream',
            title: 'Es Krim Susu Kambing',
            description: 'Es krim lembut berbahan susu kambing asli, rendah lemak, dan penuh cita rasa.',
            icon: <IceCream className="w-12 h-12 text-pink-600" />,
            color: 'from-pink-100 to-rose-100',
            accent: 'pink-600',
            link: '/produk/ice-cream'
        },
        {
            name: 'kohemax',
            title: 'Kohemax',
            description: 'Pupuk organik berkualitas tinggi dari kotoran kambing, ramah lingkungan untuk pertanian produktif.',
            icon: <Leaf className="w-16 h-16 text-green-600" />,
            link: '/produk/kohemax',
            stockMax: 1
        }
    ];

    const highlights = [
        {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: "Kualitas Terjamin",
            description: "Semua produk dijamin segar, sehat, dan diproses secara higienis"
        },
        {
            icon: <Star className="w-8 h-8 text-purple-600" />,
            title: "Rasa Alami",
            description: "Cita rasa autentik tanpa bahan pengawet buatan"
        },
        {
            icon: <Award className="w-8 h-8 text-amber-600" />,
            title: "Produk Lokal",
            description: "Mendukung peternak lokal dengan kemitraan berkelanjutan"
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-pink-600" />,
            title: "Pilihan Beragam",
            description: "Beragam produk untuk kebutuhan kuliner dan investasi"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-700 via-purple-700 to-amber-700 pt-24 pb-20 min-h-[50vh] flex items-center overflow-hidden text-white">
                {/* Background decorative elements */}
                <div
                    className="absolute top-20 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-3xl transition-transform duration-1000 ease-out"
                    style={{
                        transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                        opacity: isLoaded ? 0.3 : 0
                    }}
                ></div>
                <div
                    className="absolute bottom-20 left-10 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out delay-300"
                    style={{
                        transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                        opacity: isLoaded ? 0.2 : 0
                    }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div
                        className={`space-y-6 transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                    >
                        {/* Badge */}
                        <div className={`inline-flex items-center px-4 py-2 bg-blue-500/20 text-white text-sm font-semibold rounded-full border border-blue-300/40 shadow-sm transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                            <Award className="w-4 h-4 mr-2" />
                            Produk Premium Embik Farm
                        </div>

                        {/* Title */}
                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            <span className="block text-blue-200">Jelajahi</span>
                            <span className="block">Produk Kami</span>
                        </h1>

                        <p className={`text-lg sm:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto transition-all duration-800 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            Dari susu kambing segar hingga es krim lezat, Embik Farm menghadirkan produk berkualitas untuk kebutuhan kuliner dan investasi Anda.
                        </p>

                        {/* Quick Highlights */}
                        <div className={`flex flex-wrap gap-3 justify-center transition-all duration-800 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm">
                                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                                <span>Susu Kambing</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm">
                                <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                                <span>Daging Segar</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm">
                                <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
                                <span>Kambing Hidup</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm">
                                <div className="w-3 h-3 bg-pink-300 rounded-full"></div>
                                <span>Es Krim</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100 rounded-full opacity-15 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-100 rounded-full opacity-10 blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <Star className="w-5 h-5" />
                            <span>Produk Unggulan</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="text-gray-900">Produk</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600">
                                Embik Farm
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Pilih produk berkualitas tinggi yang sesuai dengan kebutuhan Anda, dari kuliner hingga investasi
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
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
                                <Link href={product.link}>
                                    <div className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-4 group-hover:scale-105 border border-gray-100/50 backdrop-blur-sm overflow-hidden ${product.popular ? 'ring-2 ring-blue-400' : ''}`}>
                                        {/* Gradient overlay on hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}></div>

                                        {/* Product badge */}
                                        {product.popular && (
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">Terpopuler</span>
                                            </div>
                                        )}

                                        {/* Icon container */}
                                        <div className="relative z-10 mb-6">
                                            <div className="relative">
                                                <div className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                                    <div className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                                        {React.cloneElement(product.icon, { className: `w-12 h-12 text-${product.accent}` })}
                                                    </div>
                                                </div>
                                                <div className={`absolute -top-2 -right-2 w-8 h-8 bg-${product.accent} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                                                    {index + 1}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                                                {product.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                                                {product.description}
                                            </p>
                                            <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                                                <span className="text-sm font-medium text-blue-600">Lihat Detail</span>
                                            </div>
                                        </div>

                                        {/* Bottom accent line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
                                            <div className={`h-full bg-gradient-to-r ${product.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300`}></div>
                                        </div>
                                    </div>

                                    {/* Floating shadow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-3xl opacity-0 group-hover:opacity-30 transform translate-y-4 group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}></div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-100 rounded-full opacity-40 blur-2xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-700 rounded-full text-sm font-medium mb-4">
                            <CheckCircle className="w-4 h-4" />
                            <span>Keunggulan Produk</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Mengapa Memilih <span className="text-blue-600">Produk Kami</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Produk Embik Farm dirancang untuk kualitas, kesehatan, dan kepuasan pelanggan
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((highlight, index) => (
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
                                    <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-blue-50 to-indigo-50' :
                                        index === 1 ? 'from-purple-50 to-violet-50' :
                                            index === 2 ? 'from-amber-50 to-orange-50' :
                                                'from-pink-50 to-rose-50'
                                        } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>

                                    {/* Icon and number */}
                                    <div className="relative mb-6">
                                        <div className={`w-20 h-20 ${index === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                                            index === 1 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                                                index === 2 ? 'bg-gradient-to-br from-amber-400 to-amber-600' :
                                                    'bg-gradient-to-br from-pink-400 to-pink-600'
                                            } rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                            <div className="text-white relative z-10">
                                                {highlight.icon}
                                            </div>
                                        </div>
                                        <div className={`absolute -top-3 -right-3 w-10 h-10 ${index === 0 ? 'bg-blue-500' :
                                            index === 1 ? 'bg-purple-500' :
                                                index === 2 ? 'bg-amber-500' :
                                                    'bg-pink-500'
                                            } rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center relative z-10">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {highlight.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {highlight.description}
                                        </p>
                                    </div>

                                    {/* Progress indicator */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                                        <div
                                            className={`h-full bg-gradient-to-r ${index === 0 ? 'from-blue-400 to-blue-600' :
                                                index === 1 ? 'from-purple-400 to-purple-600' :
                                                    index === 2 ? 'from-amber-400 to-amber-600' :
                                                        'from-pink-400 to-pink-600'
                                                } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                                        ></div>
                                    </div>
                                </div>

                                {/* Floating shadow */}
                                <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-br from-blue-200 to-blue-300' :
                                    index === 1 ? 'bg-gradient-to-br from-purple-200 to-purple-300' :
                                        index === 2 ? 'bg-gradient-to-br from-amber-200 to-amber-300' :
                                            'bg-gradient-to-br from-pink-200 to-pink-300'
                                    } rounded-3xl opacity-0 group-hover:opacity-30 transform translate-y-4 group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-700 via-purple-700 to-amber-700 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Temukan Produk Favorit Anda!</h2>
                    <p className="text-xl text-blue-100 mb-8">Jelajahi susu kambing, daging segar, kambing hidup, atau es krim kami untuk pengalaman kuliner terbaik.</p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Hubungi Kami
                        </Link>
                        <Link
                            href="/produk/susu-kambing"
                            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold rounded-2xl transition-all duration-300"
                        >
                            Lihat Susu Kambing
                        </Link>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            <span>Produk Premium</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>Kualitas Terjamin</span>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-blue-200 text-sm">
                            💡 <strong>Tips:</strong> Coba es krim susu kambing kami untuk sensasi rasa baru!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;