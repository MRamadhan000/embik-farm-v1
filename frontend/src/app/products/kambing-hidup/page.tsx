"use client";

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
  Sprout,
  Users,
  Clock,
  Phone,
  Mail,
  Star,
  Package,
  Tractor,
  Truck,
  Calendar,
  Leaf,
} from "lucide-react";

const KambingHidupPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedType, setSelectedType] = useState("aqiqah");
  const [selectedPackage, setSelectedPackage] = useState("standar");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const parallaxSlow = scrollY * 0.3;

  const types = [
    {
      name: "aqiqah",
      title: "Kambing Aqiqah",
      description: "Kambing sehat untuk kebutuhan aqiqah keluarga",
      color: "from-green-100 to-teal-100",
      accent: "green-600",
      popular: true,
    },
    {
      name: "kurban",
      title: "Kambing Kurban",
      description: "Kambing berkualitas untuk ibadah kurban",
      color: "from-teal-100 to-emerald-100",
      accent: "teal-600",
    },
    {
      name: "peranakan",
      title: "Kambing Peranakan",
      description: "Kambing untuk ternak dan penggemukan",
      color: "from-emerald-100 to-lime-100",
      accent: "emerald-600",
    },
  ];

  const packages = [
    {
      weight: "standar",
      price: "2.500.000",
      originalPrice: "2.800.000",
      type: "Aqiqah Standar",
    },
    {
      weight: "premium",
      price: "3.500.000",
      originalPrice: "3.900.000",
      type: "Kurban Premium",
      popular: true,
    },
    {
      weight: "investasi",
      price: "Call",
      originalPrice: "",
      type: "Investasi Kambing",
      special: true,
    },
    {
      weight: "custom",
      price: "Call",
      originalPrice: "",
      type: "Pesanan Khusus",
      special: true,
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />,
      title: "Kambing Sehat & Alami",
      description: "Dirawat dengan pakan alami untuk kualitas terbaik",
    },
    {
      icon: <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />,
      title: "Beragam Jenis & Bobot",
      description: "Pilih sesuai kebutuhan aqiqah, kurban, atau peranakan",
    },
    {
      icon: <Sprout className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />,
      title: "Program Investasi",
      description: "Bagi hasil & penggemukan dengan keuntungan menarik",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-lime-600" />,
      title: "Memberdayakan Peternak",
      description: "Mendukung peternak lokal melalui kemitraan",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />,
      title: "Cocok untuk Berbagai Kebutuhan",
      description: "Ideal untuk aqiqah, kurban, dan pengembangan ternak",
    },
  ];

  const healthFacts = [
    {
      metric: "Berat Rata-rata",
      amount: "25-35kg",
      color: "text-green-600",
      per: "Kambing",
    },
    {
      metric: "Usia",
      amount: "1-2 tahun",
      color: "text-teal-600",
      per: "Kambing",
    },
    {
      metric: "Pakan",
      amount: "100% Alami",
      color: "text-emerald-600",
      per: "Kambing",
    },
    {
      metric: "Kesehatan",
      amount: "Tersertifikasi",
      color: "text-lime-600",
      per: "Kambing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-lime-50">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-green-700 via-teal-700 to-emerald-800 pt-16 sm:pt-24 pb-12 sm:pb-20 min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden text-white">
        {/* Background decorative elements - Hidden on mobile */}
        <div
          className="hidden sm:block absolute top-20 right-10 w-32 h-32 bg-teal-300 rounded-full opacity-30 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translateY(${parallaxSlow}px) ${
              isLoaded ? "scale(1)" : "scale(0)"
            }`,
            opacity: isLoaded ? 0.3 : 0,
          }}
        ></div>
        <div
          className="hidden sm:block absolute bottom-20 left-10 w-40 h-40 bg-green-300 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out delay-300"
          style={{
            transform: `translateY(${parallaxSlow}px) ${
              isLoaded ? "scale(1)" : "scale(0)"
            }`,
            opacity: isLoaded ? 0.2 : 0,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 relative z-10">
          {/* Left Content - Mobile First */}
          <div
            className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 transition-all duration-1000 ease-out ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            {/* Badge - Mobile Responsive */}
            <div
              className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/20 text-white text-xs sm:text-sm font-semibold rounded-full border border-green-300/40 shadow-sm transition-all duration-700 delay-200 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Shield className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2" />
              Kualitas Terjamin
            </div>

            {/* Title - Mobile Responsive */}
            <div className="space-y-2 sm:space-y-4">
              <h1
                className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <span className="block text-teal-200">Kambing Hidup</span>
                <span className="block">Premium</span>
              </h1>

              <p
                className={`text-sm sm:text-lg md:text-xl text-green-100 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-800 delay-600 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                Kambing hidup berkualitas dari Embik Farm untuk aqiqah, kurban,
                dan peranakan. Program investasi penggemukan dan peranakan untuk
                keuntungan dan dukungan peternak lokal.
              </p>
            </div>

            {/* Quality Highlights - Mobile Responsive */}
            <div
              className={`grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md transition-all duration-800 delay-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
                <Zap className="w-4 sm:w-6 h-4 sm:h-6 text-teal-300 mx-auto mb-1" />
                <div className="text-xs sm:text-sm font-semibold">
                  Pakan Alami
                </div>
                <div className="text-xs text-green-200">100% Natural</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
                <Heart className="w-4 sm:w-6 h-4 sm:h-6 text-emerald-300 mx-auto mb-1" />
                <div className="text-xs sm:text-sm font-semibold">
                  Sehat & Kuat
                </div>
                <div className="text-xs text-green-200">Tersertifikasi</div>
              </div>
            </div>

            {/* Usage Badges - Mobile Responsive */}
            <div
              className={`flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start transition-all duration-800 delay-800 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-300 rounded-full"></div>
                <span>Aqiqah</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-teal-300 rounded-full"></div>
                <span>Kurban</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-300 rounded-full"></div>
                <span>Investasi</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mobile Responsive */}
          <div
            className={`w-full lg:w-1/2 flex justify-center lg:justify-end relative transition-all duration-1000 ease-out delay-300 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 z-10">
              <div className="w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-green-100 via-teal-100 to-emerald-50 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Product Image */}
                <div className="relative w-full h-full">
                  <img
                    src="/images/products/kambing-hidup.jpg"
                    alt="Kambing Hidup Premium - Embik Farm untuk Aqiqah, Kurban & Investasi"
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                    loading="eager"
                  />

                  {/* Overlay gradient for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-teal-900/30 rounded-xl sm:rounded-2xl"></div>

                  {/* Text overlay on image */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white z-10">
                    <div className="bg-gradient-to-r from-green-600/90 to-teal-600/90 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-white/20">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2">
                        <Tractor className="w-5 h-5 sm:w-6 sm:h-6" />
                        EMBIK FARM
                      </div>
                      <div className="text-xs sm:text-sm md:text-base opacity-90">
                        Kambing Hidup Premium
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Badge - Premium */}
              <div
                className={`absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-green-600 to-teal-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg transform rotate-12 z-20 transition-all duration-700 delay-1000 flex items-center gap-1 ${
                  isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <Award className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="text-xs sm:text-sm font-bold">Premium!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Facts - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        {/* Animated background elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 bg-teal-200 rounded-full opacity-30 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-40 right-40 w-16 h-16 bg-emerald-200 rounded-full opacity-25 animate-ping"
            style={{ animationDuration: "4s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            {/* Modern badge - Mobile Responsive */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
              <Zap className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Kualitas Terjamin</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-gray-900">Kualitas</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                Kambing Hidup
              </span>
            </h2>

            <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kambing hidup berkualitas tinggi dari Embik Farm
              <span className="font-semibold text-green-600">
                {" "}
                untuk aqiqah, kurban, dan investasi
              </span>
            </p>
          </div>

          {/* Health cards - Mobile Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {healthFacts.map((item, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  opacity: isLoaded ? 1 : 0,
                  transitionDelay: `${600 + index * 150}ms`,
                  transition: "all 0.6s ease-out",
                }}
              >
                {/* Main card - Mobile Responsive */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-3 group-hover:scale-105 border border-gray-100 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>

                  {/* Content - Mobile Responsive */}
                  <div className="relative z-10 text-center">
                    {/* Icon background - Mobile Responsive */}
                    <div className="relative mb-3 sm:mb-4">
                      <div
                        className={`w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-br ${
                          item.color === "text-green-600"
                            ? "from-green-400 to-green-600"
                            : item.color === "text-teal-600"
                            ? "from-teal-400 to-teal-600"
                            : item.color === "text-emerald-600"
                            ? "from-emerald-400 to-emerald-600"
                            : "from-lime-400 to-lime-600"
                        } rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}
                      >
                        {item.metric === "Berat Rata-rata" && (
                          <Scale className="w-4 sm:w-5 md:w-8 h-4 sm:h-5 md:h-8 text-white" />
                        )}
                        {item.metric === "Usia" && (
                          <Calendar className="w-4 sm:w-5 md:w-8 h-4 sm:h-5 md:h-8 text-white" />
                        )}
                        {item.metric === "Pakan" && (
                          <Sprout className="w-4 sm:w-5 md:w-8 h-4 sm:h-5 md:h-8 text-white" />
                        )}
                        {item.metric === "Kesehatan" && (
                          <Heart className="w-4 sm:w-5 md:w-8 h-4 sm:h-5 md:h-8 text-white" />
                        )}
                      </div>

                      {/* Floating indicator - Mobile Responsive */}
                      <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center shadow-md transform group-hover:scale-125 transition-all duration-300">
                        <div className="w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Amount - Mobile Responsive */}
                    <div className="mb-2">
                      <div
                        className={`text-lg sm:text-2xl md:text-3xl font-black ${item.color} mb-1 transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        {item.amount}
                      </div>
                      <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                        {item.per}
                      </div>
                    </div>

                    {/* Metric name - Mobile Responsive */}
                    <div className="space-y-1">
                      <h3 className="text-xs sm:text-sm md:text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                        {item.metric}
                      </h3>

                      {/* Description - Hidden on mobile */}
                      <p className="hidden sm:block text-xs text-gray-500 leading-relaxed">
                        {item.metric === "Berat Rata-rata" &&
                          "Ideal untuk berbagai kebutuhan"}
                        {item.metric === "Usia" &&
                          "Usia optimal untuk kesehatan"}
                        {item.metric === "Pakan" &&
                          "Pakan alami tanpa bahan kimia"}
                        {item.metric === "Kesehatan" &&
                          "Diperiksa dan tersertifikasi"}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-100 rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        item.color === "text-green-600"
                          ? "from-green-400 to-green-600"
                          : item.color === "text-teal-600"
                          ? "from-teal-400 to-teal-600"
                          : item.color === "text-emerald-600"
                          ? "from-emerald-400 to-emerald-600"
                          : "from-lime-400 to-lime-600"
                      } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200`}
                    ></div>
                  </div>
                </div>

                {/* Floating shadow effect - Hidden on mobile */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-green-200 to-teal-200 rounded-3xl opacity-0 group-hover:opacity-20 transform translate-y-2 group-hover:translate-y-4 transition-all duration-500 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>

          {/* Bottom info section - Mobile Responsive */}
          <div className="mt-10 sm:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4 sm:px-8 py-4 sm:py-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-gray-800">
                    Kualitas Terjamin
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Sehat & tersertifikasi
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 sm:h-12 bg-gray-300"></div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Heart className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-gray-800">
                    Pakan Alami
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Bebas bahan kimia
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 sm:h-12 bg-gray-300"></div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Award className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-gray-800">
                    Investasi Menguntungkan
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Bagi hasil menarik
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-green-50/30 to-teal-50/50 relative overflow-hidden">
        {/* Modern background elements - Hidden on mobile */}
        <div className="hidden sm:block absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-100 rounded-full opacity-15 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-100 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Modern header section - Mobile Responsive */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Award className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
              <span>Kualitas Premium Terjamin</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-gray-900">Keunggulan</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600">
                Kambing Hidup
              </span>
              <br />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 font-medium">
                Embik Farm
              </span>
            </h2>

            <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kambing hidup premium untuk aqiqah, kurban, dan investasi,
              mendukung peternak lokal
            </p>
          </div>

          {/* Benefits grid - Mobile Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                  opacity: isLoaded ? 1 : 0,
                  transitionDelay: `${800 + index * 150}ms`,
                  transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Main card - Mobile Responsive */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:scale-105 border border-gray-100/50 backdrop-blur-sm overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl sm:rounded-3xl"></div>

                  {/* Modern icon container - Mobile Responsive */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <div className="relative">
                      {/* Icon background - Mobile Responsive */}
                      <div
                        className={`w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 ${
                          index === 0
                            ? "bg-gradient-to-br from-green-400 to-green-600"
                            : index === 1
                            ? "bg-gradient-to-br from-teal-400 to-teal-600"
                            : index === 2
                            ? "bg-gradient-to-br from-emerald-400 to-emerald-600"
                            : index === 3
                            ? "bg-gradient-to-br from-lime-400 to-lime-600"
                            : "bg-gradient-to-br from-green-400 to-teal-600"
                        } rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        {/* Icon - Mobile Responsive */}
                        <div className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                          {React.cloneElement(benefit.icon, {
                            className:
                              "w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-white",
                          })}
                        </div>
                      </div>

                      {/* Floating number indicator - Mobile Responsive */}
                      <div
                        className={`absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 ${
                          index === 0
                            ? "bg-green-500"
                            : index === 1
                            ? "bg-teal-500"
                            : index === 2
                            ? "bg-emerald-500"
                            : index === 3
                            ? "bg-lime-500"
                            : "bg-green-500"
                        } rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content - Mobile Responsive */}
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>

                    {/* Call-to-action hint - Hidden on mobile */}
                    <div className="hidden sm:flex items-center gap-2 mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full"></div>
                      <span className="text-xs md:text-sm font-medium text-green-600">
                        Keunggulan utama
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-100 rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
                    <div
                      className={`h-full ${
                        index === 0
                          ? "bg-gradient-to-r from-green-400 to-green-600"
                          : index === 1
                          ? "bg-gradient-to-r from-teal-400 to-teal-600"
                          : index === 2
                          ? "bg-gradient-to-r from-emerald-400 to-emerald-600"
                          : index === 3
                          ? "bg-gradient-to-r from-lime-400 to-lime-600"
                          : "bg-gradient-to-r from-green-400 to-teal-600"
                      } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300`}
                    ></div>
                  </div>
                </div>

                {/* Enhanced floating shadow - Hidden on mobile */}
                <div
                  className={`hidden sm:block absolute inset-0 ${
                    index === 0
                      ? "bg-gradient-to-br from-green-200 to-green-300"
                      : index === 1
                      ? "bg-gradient-to-br from-teal-200 to-teal-300"
                      : index === 2
                      ? "bg-gradient-to-br from-emerald-200 to-emerald-300"
                      : index === 3
                      ? "bg-gradient-to-br from-lime-200 to-lime-300"
                      : "bg-gradient-to-br from-green-200 to-teal-300"
                  } rounded-3xl opacity-0 group-hover:opacity-30 transform translate-y-4 group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Options - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-3 sm:mb-4">
              Pilihan Jenis & Paket
            </h2>
            <p className="text-sm sm:text-lg text-green-600">
              Sesuaikan dengan kebutuhan aqiqah, kurban, atau investasi Anda
            </p>
          </div>

          {/* Type Selection - Mobile Responsive */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-4 sm:mb-6 text-center">
              Pilih Jenis Kambing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {types.map((type) => (
                <div
                  key={type.name}
                  className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                    selectedType === type.name
                      ? "ring-2 sm:ring-4 ring-green-500"
                      : ""
                  } ${type.popular ? "ring-2 ring-teal-400" : ""}`}
                  onClick={() => setSelectedType(type.name)}
                >
                  {type.popular && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-teal-500 text-white px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                        Terpopuler
                      </span>
                    </div>
                  )}
                  <div
                    className={`w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br ${type.color} rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-md`}
                  >
                    <Tractor
                      className={`w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-${type.accent}`}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-green-800 text-center mb-2">
                    {type.title}
                  </h3>
                  <p className="text-green-600 text-center text-xs sm:text-sm">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Package Selection - Mobile Responsive */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-4 sm:mb-6 text-center">
              Pilih Paket
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.weight}
                  className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                    selectedPackage === pkg.weight
                      ? "ring-2 sm:ring-4 ring-green-500"
                      : ""
                  } ${pkg.popular ? "ring-2 ring-teal-400" : ""} ${
                    pkg.special ? "ring-2 ring-emerald-500" : ""
                  }`}
                  onClick={() => setSelectedPackage(pkg.weight)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-teal-500 text-white px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                        Terpopuler
                      </span>
                    </div>
                  )}
                  {pkg.special && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                        Special
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">
                      {pkg.weight}
                    </div>
                    <div className="text-xs sm:text-sm text-green-600 mb-2 sm:mb-3">
                      {pkg.type}
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-1">
                      {pkg.price === "Call"
                        ? "Hubungi Kami"
                        : `Rp ${pkg.price}`}
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-xs sm:text-sm text-gray-500 line-through mb-3 sm:mb-4">
                        Rp {pkg.originalPrice}
                      </div>
                    )}

                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-green-600 mb-4 sm:mb-6">
                      <div className="flex items-center gap-1.5 sm:gap-2 justify-center">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>Kualitas terjamin</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 justify-center">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>Pakan alami</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 justify-center">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>Bisa antar</span>
                      </div>
                    </div>

                    <button className="w-full bg-green-600 text-white py-2 sm:py-2.5 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
                      {pkg.price === "Call" ? "Hubungi" : "Pilih Paket"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Guide - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        {/* Background decorative elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-10 left-10 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-10 right-10 w-48 h-48 bg-teal-100 rounded-full opacity-40 blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Proses Cepat & Mudah</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Cara <span className="text-green-600">Pemesanan</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              4 langkah sederhana untuk mendapatkan kambing hidup berkualitas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {/* Connection lines - Hidden on mobile */}
            <div className="hidden lg:block absolute top-16 sm:top-20 md:top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

            {[
              {
                step: "01",
                title: "Pemesanan",
                desc: "Hubungi kami via WhatsApp atau telepon untuk konsultasi",
                icon: <Phone className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />,
                color: "from-green-400 to-green-600",
                bgColor: "bg-green-500",
              },
              {
                step: "02",
                title: "Konfirmasi",
                desc: "Pilih jenis kambing, bobot, dan jadwal pengambilan",
                icon: (
                  <CheckCircle className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
                ),
                color: "from-teal-400 to-teal-600",
                bgColor: "bg-teal-500",
              },
              {
                step: "03",
                title: "Pemeriksaan",
                desc: "Kambing diperiksa untuk memastikan kesehatan dan kualitas",
                icon: <Heart className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />,
                color: "from-emerald-400 to-emerald-600",
                bgColor: "bg-emerald-500",
              },
              {
                step: "04",
                title: "Pengiriman",
                desc: "Siap diantar ke lokasi atau ambil di farm kami",
                icon: <Truck className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />,
                color: "from-lime-400 to-lime-600",
                bgColor: "bg-lime-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  opacity: isLoaded ? 1 : 0,
                  transitionDelay: `${1200 + index * 200}ms`,
                }}
              >
                {/* Card - Mobile Responsive */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 relative overflow-hidden group-hover:scale-105 border border-gray-100">
                  {/* Background gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}
                  ></div>

                  {/* Step number with animated background - Mobile Responsive */}
                  <div className="relative mb-4 sm:mb-6">
                    <div
                      className={`w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 ${item.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="text-white relative z-10">
                        {item.icon}
                      </div>
                    </div>
                    {/* Floating step number - Mobile Responsive */}
                    <div
                      className={`absolute -top-1 sm:-top-2 md:-top-3 -right-1 sm:-right-2 md:-right-3 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 ${item.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                    >
                      {item.step}
                    </div>
                  </div>

                  {/* Content - Mobile Responsive */}
                  <div className="text-center relative z-10">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-100">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    ></div>
                  </div>
                </div>

                {/* Connector arrow - Hidden on mobile */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-16 sm:top-20 md:top-24 -right-4 z-20">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white border-2 border-green-200 rounded-full flex items-center justify-center shadow-sm">
                      <div className="w-0 h-0 border-l-2 border-l-green-400 border-y-2 border-y-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to action - Mobile Responsive */}
          <div className="text-center mt-10 sm:mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4 sm:px-8 py-4 sm:py-4 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center gap-2 sm:gap-3 text-green-600">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-sm sm:text-base font-semibold">
                  Estimasi proses: 2-4 jam
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2 sm:gap-3 text-teal-600">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-sm sm:text-base font-semibold">
                  Jaminan kesehatan & kualitas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-700 via-teal-700 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Siap Memilih Kambing Hidup Berkualitas?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-teal-100 mb-6 sm:mb-8">
            Hubungi kami untuk aqiqah, kurban, atau investasi ternak!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
              Pesan Sekarang
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base">
              Konsultasi Dulu
            </button>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>0812-3456-7890</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>info@embikfarm.com</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-teal-200 text-xs sm:text-sm">
              💡 <strong>Tips:</strong> Untuk aqiqah/kurban, pesan H-7 untuk
              kualitas terbaik. Tanyakan program investasi!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KambingHidupPage;
