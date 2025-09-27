'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Shield,
    Heart,
    Sprout,
    Users,
    Award,
    CheckCircle,
    Tractor,
    Leaf,
    Clock,
    Globe
} from "lucide-react";

const AboutPage = () => {
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

    const values = [
        {
            icon: <Heart className="w-8 h-8 text-green-600" />,
            title: "Kualitas & Kesehatan",
            description: "Menghadirkan produk kambing sehat dengan pakan alami dan proses higienis"
        },
        {
            icon: <Sprout className="w-8 h-8 text-teal-600" />,
            title: "Keberlanjutan",
            description: "Mengutamakan praktik peternakan ramah lingkungan dan berkelanjutan"
        },
        {
            icon: <Users className="w-8 h-8 text-emerald-600" />,
            title: "Pemberdayaan Komunitas",
            description: "Mendukung peternak lokal melalui kemitraan dan program investasi"
        },
        {
            icon: <Award className="w-8 h-8 text-green-600" />,
            title: "Kepuasan Pelanggan",
            description: "Memberikan pelayanan terbaik untuk kebutuhan aqiqah, kurban, dan lainnya"
        }
    ];

    const milestones = [
        { year: '2015', event: 'Embik Farm didirikan di Bogor', icon: <Tractor className="w-8 h-8" />, color: 'from-green-400 to-green-600', bgColor: 'bg-green-500' },
        { year: '2018', event: 'Luncurkan susu kambing pasteurisasi', icon: <Leaf className="w-8 h-8" />, color: 'from-teal-400 to-teal-600', bgColor: 'bg-teal-500' },
        { year: '2020', event: 'Program investasi kambing dimulai', icon: <Sprout className="w-8 h-8" />, color: 'from-emerald-400 to-emerald-600', bgColor: 'bg-emerald-500' },
        { year: '2023', event: 'Kemitraan dengan 50+ peternak lokal', icon: <Users className="w-8 h-8" />, color: 'from-lime-400 to-lime-600', bgColor: 'bg-lime-500' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-700 via-teal-700 to-emerald-800 pt-24 pb-20 min-h-[50vh] flex items-center overflow-hidden text-white">
                {/* Background decorative elements */}
                <div
                    className="absolute top-20 right-10 w-32 h-32 bg-teal-300 rounded-full opacity-30 blur-3xl transition-transform duration-1000 ease-out"
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
                            Peternakan Kualitas Premium
                        </div>

                        {/* Title */}
                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            <span className="block text-teal-200">Tentang</span>
                            <span className="block">Embik Farm</span>
                        </h1>

                        <p className={`text-lg sm:text-xl text-green-100 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-800 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            Embik Farm adalah peternakan modern di Bogor yang menyediakan kambing hidup, susu kambing, dan program investasi ternak. Kami berkomitmen pada kualitas, kesehatan, dan keberlanjutan.
                        </p>

                        {/* Quick Highlights */}
                        <div className={`grid grid-cols-2 gap-4 w-full max-w-md transition-all duration-800 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                <Heart className="w-6 h-6 text-teal-300 mx-auto mb-1" />
                                <div className="text-sm font-semibold">Produk Sehat</div>
                                <div className="text-xs text-green-200">Pakan Alami</div>
                            </div>
                            <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                <Sprout className="w-6 h-6 text-emerald-300 mx-auto mb-1" />
                                <div className="text-sm font-semibold">Berkelanjutan</div>
                                <div className="text-xs text-green-200">Ramah Lingkungan</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Farm Image */}
                    <div className={`w-full lg:w-1/2 flex justify-center lg:justify-end relative transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                        }`}>
                        <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 z-10">
                            <div className="w-96 h-96 bg-gradient-to-br from-green-100 via-teal-100 to-emerald-50 rounded-2xl flex items-center justify-center relative">
                                {/* Farm illustration */}
                                <div className="text-center relative">
                                    <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <Tractor className="w-16 h-16 text-green-700" />
                                    </div>
                                    <div className="text-2xl font-bold text-green-800">EMBIK FARM</div>
                                    <div className="text-green-600">Peternakan Modern</div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-8 left-8">
                                    <Leaf className="w-8 h-8 text-teal-400" />
                                </div>
                                <div className="absolute top-8 right-8">
                                    <Sprout className="w-6 h-6 text-green-400" />
                                </div>
                                <div className="absolute bottom-8 left-8">
                                    <Award className="w-6 h-6 text-emerald-500" />
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

            {/* Our Values Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-green-50/30 to-teal-50/50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-100 rounded-full opacity-15 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-100 rounded-full opacity-10 blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-sm font-semibold mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <Heart className="w-5 h-5" />
                            <span>Nilai Kami</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="text-gray-900">Visi &</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600">
                                Nilai Embik Farm
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Kami berdedikasi untuk menghadirkan produk berkualitas tinggi sambil mendukung komunitas dan lingkungan
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
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
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

                                    {/* Icon container */}
                                    <div className="relative z-10 mb-6">
                                        <div className="relative">
                                            <div className={`w-20 h-20 ${index === 0 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                                                index === 1 ? 'bg-gradient-to-br from-teal-400 to-teal-600' :
                                                    index === 2 ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' :
                                                        'bg-gradient-to-br from-lime-400 to-lime-600'
                                                } rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                                <div className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                                    {React.cloneElement(value.icon, { className: "w-10 h-10 text-white" })}
                                                </div>
                                            </div>
                                            <div className={`absolute -top-2 -right-2 w-8 h-8 ${index === 0 ? 'bg-green-500' :
                                                index === 1 ? 'bg-teal-500' :
                                                    index === 2 ? 'bg-emerald-500' :
                                                        'bg-lime-500'
                                                } rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                                            {value.description}
                                        </p>
                                        <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full"></div>
                                            <span className="text-sm font-medium text-green-600">Nilai utama</span>
                                        </div>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
                                        <div className={`h-full ${index === 0 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                                            index === 1 ? 'bg-gradient-to-r from-teal-400 to-teal-600' :
                                                index === 2 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' :
                                                    'bg-gradient-to-r from-lime-400 to-lime-600'
                                            } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300`}></div>
                                    </div>
                                </div>

                                {/* Floating shadow */}
                                <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-br from-green-200 to-green-300' :
                                    index === 1 ? 'bg-gradient-to-br from-teal-200 to-teal-300' :
                                        index === 2 ? 'bg-gradient-to-br from-emerald-200 to-emerald-300' :
                                            'bg-gradient-to-br from-lime-200 to-lime-300'
                                    } rounded-3xl opacity-0 group-hover:opacity-30 transform translate-y-4 group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones Section */}
            <section className="py-20 bg-gradient-to-r from-green-50 to-teal-50 relative overflow-hidden">
                <div className="absolute top-10 left-10 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-100 rounded-full opacity-40 blur-2xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-sm font-medium mb-4">
                            <Clock className="w-4 h-4" />
                            <span>Perjalanan Kami</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            <span className="text-green-600">Milestone</span> Embik Farm
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Perjalanan kami dalam membangun peternakan modern dan berkelanjutan
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8 relative">
                        {/* Connection lines */}
                        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

                        {milestones.map((milestone, index) => (
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
                                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>

                                    {/* Milestone icon and year */}
                                    <div className="relative mb-6">
                                        <div className={`w-20 h-20 ${milestone.bgColor} rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                            <div className="text-white relative z-10">
                                                {milestone.icon}
                                            </div>
                                        </div>
                                        <div className={`absolute -top-3 -right-3 w-10 h-10 ${milestone.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                                            {milestone.year}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center relative z-10">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                            {milestone.year}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {milestone.event}
                                        </p>
                                    </div>

                                    {/* Progress indicator */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                                        <div
                                            className={`h-full bg-gradient-to-r ${milestone.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
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
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-green-700 via-teal-700 to-emerald-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bergabung dengan Embik Farm</h2>
                    <p className="text-xl text-teal-100 mb-8">Jelajahi produk dan program investasi kami untuk mendukung peternakan berkelanjutan!</p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Hubungi Kami
                        </Link>
                        <Link
                            href="/products"
                            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold rounded-2xl transition-all duration-300"
                        >
                            Lihat Produk
                        </Link>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            <span>www.embikfarm.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>50+ Peternak Mitra</span>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-teal-200 text-sm">
                            💡 <strong>Tips:</strong> Tanyakan tentang program investasi ternak untuk keuntungan jangka panjang
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;