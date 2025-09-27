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
            icon: <Phone className="w-8 h-8 text-green-600" />,
            title: "Telepon/WhatsApp",
            description: "Hubungi kami langsung untuk konsultasi cepat",
            detail: "+62 812-3456-7890",
            action: "Hubungi Sekarang",
            link: "tel:+6281234567890"
        },
        {
            icon: <Mail className="w-8 h-8 text-teal-600" />,
            title: "Email",
            description: "Kirim pertanyaan atau pesanan melalui email",
            detail: "info@embikfarm.com",
            action: "Kirim Email",
            link: "mailto:info@embikfarm.com"
        },
        {
            icon: <MapPin className="w-8 h-8 text-emerald-600" />,
            title: "Lokasi",
            description: "Kunjungi farm kami untuk melihat langsung",
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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div
                        className={`space-y-6 transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                    >
                        {/* Badge */}
                        <div className={`inline-flex items-center px-4 py-2 bg-green-500/20 text-white text-sm font-semibold rounded-full border border-green-300/40 shadow-sm transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Kami Siap Membantu
                        </div>

                        {/* Title */}
                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            <span className="block text-teal-200">Hubungi</span>
                            <span className="block">Embik Farm</span>
                        </h1>

                        <p className={`text-lg sm:text-xl text-green-100 leading-relaxed max-w-3xl mx-auto transition-all duration-800 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            Kami siap menjawab pertanyaan Anda tentang daging kambing, susu kambing, kambing hidup, atau program investasi. Hubungi kami sekarang!
                        </p>

                        {/* Quick Contact Buttons */}
                        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-800 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            <a
                                href="tel:+6281234567890"
                                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <Phone className="w-4 h-4 inline-block mr-2" />
                                Hubungi via Telepon
                            </a>
                            <a
                                href="mailto:info@embikfarm.com"
                                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold rounded-2xl transition-all duration-300"
                            >
                                <Mail className="w-4 h-4 inline-block mr-2" />
                                Kirim Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Methods Section */}
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
                            <Send className="w-5 h-5" />
                            <span>Cara Menghubungi Kami</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="text-gray-900">Kontak</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600">
                                Embik Farm
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Pilih cara yang paling nyaman untuk menghubungi tim kami dan dapatkan respon cepat
                        </p>
                    </div>

                    {/* Contact Methods Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
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
                                                    'bg-gradient-to-br from-emerald-400 to-emerald-600'
                                                } rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                                <div className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                                    {React.cloneElement(method.icon, { className: "w-10 h-10 text-white" })}
                                                </div>
                                            </div>
                                            <div className={`absolute -top-2 -right-2 w-8 h-8 ${index === 0 ? 'bg-green-500' :
                                                index === 1 ? 'bg-teal-500' :
                                                    'bg-emerald-500'
                                                } rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                                            {method.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-base mb-4 group-hover:text-gray-700 transition-colors duration-300">
                                            {method.description}
                                        </p>
                                        <p className="text-lg font-semibold text-green-600 mb-6">{method.detail}</p>
                                        <a
                                            href={method.link}
                                            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
                                        >
                                            {method.action}
                                        </a>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
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
                                    } rounded-3xl opacity-0 group-hover:opacity-30 transform translate-y-4 group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-gradient-to-r from-green-50 to-teal-50 relative overflow-hidden">
                <div className="absolute top-10 left-10 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-100 rounded-full opacity-40 blur-2xl"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-sm font-medium mb-4">
                            <MessageCircle className="w-4 h-4" />
                            <span>Kirim Pesan Anda</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            <span className="text-green-600">Formulir</span> Kontak
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Isi formulir di bawah ini untuk pertanyaan, pesanan, atau informasi lebih lanjut
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100/50 backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Masukkan nama Anda"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Masukkan email Anda"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Pesan
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Tulis pesan Anda di sini..."
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? (
                                        <span className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5" />
                                            Pesan Terkirim
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <Send className="w-5 h-5" />
                                            Kirim Pesan
                                        </span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Response Time Info */}
                    <div className="text-center mt-12">
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg border border-green-100">
                            <div className="flex items-center gap-2 text-green-600">
                                <Clock className="w-5 h-5" />
                                <span className="font-semibold">Respon cepat dalam 1-2 jam</span>
                            </div>
                            <div className="w-px h-6 bg-gray-300"></div>
                            <div className="flex items-center gap-2 text-teal-600">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-semibold">Layanan 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-green-700 via-teal-700 to-emerald-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Siap Terhubung dengan Embik Farm?</h2>
                    <p className="text-xl text-teal-100 mb-8">Kami di sini untuk membantu Anda dengan produk dan layanan terbaik!</p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="tel:+6281234567890"
                            className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Hubungi Sekarang
                        </a>
                        <a
                            href="mailto:info@embikfarm.com"
                            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold rounded-2xl transition-all duration-300"
                        >
                            Kirim Email
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>+62 812-3456-7890</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>info@embikfarm.com</span>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-teal-200 text-sm">
                            💡 <strong>Tips:</strong> Untuk pertanyaan mendesak, hubungi kami via WhatsApp untuk respon lebih cepat
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;