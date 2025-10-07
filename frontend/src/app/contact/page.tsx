'use client'

import React, { FormEvent, useEffect, useState, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    CheckCircle,
    Send,
    Users,
    Award,
    Shield
} from "lucide-react";

const ContactPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const contactMethods = [
        {
            icon: Phone,
            title: "Telepon/WhatsApp",
            description: "Hubungi kami langsung untuk konsultasi cepat",
            detail: "+62 812-3456-7890",
            action: "Hubungi Sekarang",
            link: "tel:+6281234567890"
        },
        {
            icon: Mail,
            title: "Email",
            description: "Kirim pertanyaan atau pesanan melalui email",
            detail: "info@embikfarm.com",
            action: "Kirim Email",
            link: "mailto:info@embikfarm.com"
        },
        {
            icon: MapPin,
            title: "Lokasi",
            description: "Kunjungi farm kami untuk melihat langsung peternakan kami",
            detail: "Jl. Raya Peternakan No. 123, Bogor",
            action: "Lihat Peta",
            link: "https://maps.google.com"
        }
    ];

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-700 via-teal-700 to-emerald-800 pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh] flex items-center overflow-hidden text-white">
                {/* Background decorative elements - Responsif */}
                <div
                    className="absolute top-10 sm:top-20 right-6 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-teal-300 rounded-full opacity-30 blur-2xl sm:blur-3xl transition-transform duration-1000 ease-out"
                    style={{
                        transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                        opacity: isLoaded ? 0.3 : 0
                    }}
                ></div>
                <div
                    className="absolute bottom-10 sm:bottom-20 left-6 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-green-300 rounded-full opacity-20 blur-2xl sm:blur-3xl transition-all duration-1000 ease-out delay-300"
                    style={{
                        transform: `translateY(${parallaxSlow}px) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                        opacity: isLoaded ? 0.2 : 0
                    }}
                ></div>

                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center relative z-10">
                    <div
                        className={`space-y-4 sm:space-y-6 transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                    >
                        {/* Badge */}
                        <div className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/20 text-white text-xs sm:text-sm font-semibold rounded-full border border-green-300/40 shadow-sm transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                            <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2" />
                            Kami Siap Membantu
                        </div>

                        {/* Title */}
                        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            <span className="block text-teal-200">Hubungi</span>
                            <span className="block">Embik Farm</span>
                        </h1>

                        <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-green-100 leading-relaxed max-w-3xl mx-auto px-4 transition-all duration-800 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            Kami siap menjawab pertanyaan Anda tentang daging kambing, susu kambing, kambing hidup, atau program investasi. Hubungi kami sekarang!
                        </p>

                        {/* Quick Contact Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 transition-all duration-800 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            <a
                                href="tel:+6281234567890"
                                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                            >
                                <Phone className="w-3 sm:w-4 h-3 sm:h-4 inline-block mr-1.5 sm:mr-2" />
                                Hubungi via Telepon
                            </a>
                            <a
                                href="mailto:info@embikfarm.com"
                                className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base"
                            >
                                <Mail className="w-3 sm:w-4 h-3 sm:h-4 inline-block mr-1.5 sm:mr-2" />
                                Kirim Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Methods Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-green-50/30 to-teal-50/50 relative overflow-hidden">
                {/* Background decorative elements - Responsif */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-green-100 rounded-full opacity-20 blur-2xl sm:blur-3xl"></div>
                    <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-56 sm:w-96 h-56 sm:h-96 bg-teal-100 rounded-full opacity-15 blur-2xl sm:blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-64 h-40 sm:h-64 bg-emerald-100 rounded-full opacity-10 blur-2xl sm:blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <Send className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
                            <span>Cara Menghubungi Kami</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                            <span className="text-gray-900">Kontak</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600">
                                Embik Farm
                            </span>
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                            Pilih cara yang paling nyaman untuk menghubungi tim kami dan dapatkan respon cepat
                        </p>
                    </div>

                    {/* Contact Methods Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {contactMethods.map((method, index) => {
                            const IconComponent = method.icon;
                            return (
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
                                    <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:scale-105 border border-gray-100/50 backdrop-blur-sm overflow-hidden">
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl sm:rounded-3xl"></div>

                                        {/* Icon container */}
                                        <div className="relative z-10 mb-4 sm:mb-6 flex justify-center">
                                            <div className="relative">
                                                {/* Main icon container - Perfect centering */}
                                                <div className={`w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 ${index === 0 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                                                    index === 1 ? 'bg-gradient-to-br from-teal-400 to-teal-600' :
                                                        'bg-gradient-to-br from-emerald-400 to-emerald-600'
                                                    } rounded-xl sm:rounded-2xl shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                                                    
                                                    {/* Shimmer effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                                    
                                                    {/* Icon - Absolutely centered */}
                                                    <div className="absolute inset-0 flex items-center justify-center z-10 transform group-hover:scale-110 transition-transform duration-300">
                                                        <IconComponent className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white" />
                                                    </div>
                                                </div>
                                                
                                                {/* Number badge */}
                                                <div className={`absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 ${index === 0 ? 'bg-green-500' :
                                                    index === 1 ? 'bg-teal-500' :
                                                        'bg-emerald-500'
                                                    } rounded-full flex items-center justify-center text-white text-sm sm:text-base lg:text-lg font-bold shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                                                    {index + 1}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center">
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                                                {method.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors duration-300">
                                                {method.description}
                                            </p>
                                            <p className="text-sm sm:text-base lg:text-lg font-semibold text-green-600 mb-4 sm:mb-6 break-all">{method.detail}</p>
                                            <a
                                                href={method.link}
                                                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 text-xs sm:text-sm lg:text-base"
                                            >
                                                {method.action}
                                            </a>
                                        </div>

                                        {/* Bottom accent line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-100 rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
                                            <div className={`h-full ${index === 0 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                                                index === 1 ? 'bg-gradient-to-r from-teal-400 to-teal-600' :
                                                    'bg-gradient-to-r from-emerald-400 to-emerald-600'
                                                } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300`}></div>
                                        </div>
                                    </div>

                                    {/* Floating shadow */}
                                    <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-br from-green-200 to-green-300' :
                                        index === 1 ? 'bg-gradient-to-br from-teal-200 to-teal-300' :
                                            'bg-gradient-to-br from-emerald-200 to-emerald-300'
                                        } rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-3 sm:group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-50 to-teal-50 relative overflow-hidden">
                <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-green-100 rounded-full opacity-30 blur-2xl sm:blur-3xl"></div>
                <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-teal-100 rounded-full opacity-40 blur-xl sm:blur-2xl"></div>

                <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                            <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                            <span>Kirim Pesan Anda</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                            <span className="text-green-600">Formulir</span> Kontak
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            Isi formulir di bawah ini untuk pertanyaan, pesanan, atau informasi lebih lanjut
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100/50 backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="text-black w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                        placeholder="Masukkan nama Anda"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="text-black w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                        placeholder="Masukkan email Anda"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                    Pesan
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="text-black w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none"
                                    placeholder="Tulis pesan Anda di sini..."
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                                            Pesan Terkirim
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                                            Kirim Pesan
                                        </span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Response Time Info */}
                    <div className="text-center mt-8 sm:mt-10 lg:mt-12">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-green-100">
                            <div className="flex items-center gap-1.5 sm:gap-2 text-green-600">
                                <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
                                <span className="font-semibold text-xs sm:text-sm lg:text-base">Respon cepat dalam 1-2 jam</span>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-teal-600">
                                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                                <span className="font-semibold text-xs sm:text-sm lg:text-base">Layanan 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-700 via-teal-700 to-emerald-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Siap Terhubung dengan Embik Farm?</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-teal-100 mb-6 sm:mb-8 px-4">Kami di sini untuk membantu Anda dengan produk dan layanan terbaik!</p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center px-4">
                        <a
                            href="tel:+6281234567890"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                        >
                            Hubungi Sekarang
                        </a>
                        <a
                            href="mailto:info@embikfarm.com"
                            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base"
                        >
                            Kirim Email
                        </a>
                    </div>

                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
                            <span>+62 812-3456-7890</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
                            <span className="break-all">info@embikfarm.com</span>
                        </div>
                    </div>

                    <div className="mt-4 sm:mt-6 text-center">
                        <p className="text-teal-200 text-xs sm:text-sm px-4">
                            💡 <strong>Tips:</strong> Untuk pertanyaan mendesak, hubungi kami via WhatsApp untuk respon lebih cepat
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;