"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Beef,
  Shield,
  Zap,
  Heart,
  Scale,
  Award,
  CheckCircle,
  ChefHat,
  Users,
  Clock,
  Phone,
  Mail,
  Star,
  Package,
  Utensils,
  Truck,
  Calendar,
  Scissors,
} from "lucide-react";

const DagingKambingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedCut, setSelectedCut] = useState("campuran");
  const [selectedWeight, setSelectedWeight] = useState("3kg");

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

  const cuts = [
    {
      name: "campuran",
      title: "Campuran Premium",
      description: "Mix potongan terbaik untuk berbagai masakan",
      color: "from-red-100 to-orange-100",
      accent: "red-600",
      popular: true,
    },
    {
      name: "paha",
      title: "Paha Kambing",
      description: "Bagian paha yang empuk dan berprotein tinggi",
      color: "from-amber-100 to-red-100",
      accent: "amber-600",
    },
    {
      name: "dada",
      title: "Dada & Iga",
      description: "Bagian dada dan iga untuk gulai dan sop",
      color: "from-orange-100 to-yellow-100",
      accent: "orange-600",
    },
  ];

  const packages = [
    {
      weight: "1kg",
      price: "120.000",
      originalPrice: "135.000",
      type: "Keluarga Kecil",
    },
    {
      weight: "3kg",
      price: "340.000",
      originalPrice: "380.000",
      type: "Keluarga Besar",
      popular: true,
    },
    {
      weight: "5kg",
      price: "550.000",
      originalPrice: "620.000",
      type: "Acara/Catering",
    },
    {
      weight: "utuh",
      price: "Call",
      originalPrice: "",
      type: "Aqiqah/Kurban",
      special: true,
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />,
      title: "Daging segar, sehat, dan higienis",
      description:
        "Diproses dengan standar kebersihan tinggi dari peternakan hingga konsumen",
    },
    {
      icon: <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
      title: "Kaya protein hewani & zat besi",
      description:
        "Sumber protein berkualitas tinggi dan zat besi untuk kesehatan optimal",
    },
    {
      icon: <ChefHat className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />,
      title: "Cocok untuk olahan sate, gulai, tongseng, dll",
      description:
        "Tekstur daging yang sempurna untuk berbagai masakan tradisional Indonesia",
    },
    {
      icon: <Scale className="w-6 sm:w-8 h-6 sm:h-8 text-orange-600" />,
      title: "Bisa pesan sesuai kebutuhan (kg atau utuh)",
      description:
        "Fleksibilitas pemesanan mulai dari 1kg hingga kambing utuh sesuai kebutuhan",
    },
    {
      icon: <Users className="w-6 sm:w-8 h-6 sm:h-8 text-red-600" />,
      title: "Cocok untuk acara aqiqah & kurban",
      description:
        "Kambing berkualitas premium untuk kebutuhan ibadah dan acara keluarga",
    },
  ];

  const dishes = [
    {
      name: "Sate Kambing",
      icon: "🍢",
      description: "Sate empuk dengan bumbu kacang",
    },
    {
      name: "Gulai Kambing",
      icon: "🍛",
      description: "Gulai khas dengan rempah pilihan",
    },
    {
      name: "Tongseng",
      icon: "🥘",
      description: "Tongseng segar dengan sayuran",
    },
    { name: "Sop Kambing", icon: "🍲", description: "Sop hangat kaya nutrisi" },
  ];

  const nutritionFacts = [
    {
      nutrient: "Protein",
      amount: "25.6g",
      color: "text-red-600",
      per: "100g",
    },
    {
      nutrient: "Zat Besi",
      amount: "3.8mg",
      color: "text-orange-500",
      per: "100g",
    },
    {
      nutrient: "Kolesterol",
      amount: "75mg",
      color: "text-green-600",
      per: "100g",
    },
    {
      nutrient: "Kalori",
      amount: "143 kcal",
      color: "text-blue-600",
      per: "100g",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-red-700 via-orange-700 to-amber-800 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden text-white">
        {/* Background decorative elements - Hidden on mobile */}
        <div
          className="hidden sm:block absolute top-20 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-orange-300 rounded-full opacity-30 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translateY(${parallaxSlow}px) ${
              isLoaded ? "scale(1)" : "scale(0)"
            }`,
            opacity: isLoaded ? 0.3 : 0,
          }}
        ></div>
        <div
          className="hidden sm:block absolute bottom-20 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-red-300 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out delay-300"
          style={{
            transform: `translateY(${parallaxSlow}px) ${
              isLoaded ? "scale(1)" : "scale(0)"
            }`,
            opacity: isLoaded ? 0.2 : 0,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 relative z-10">
          {/* Left Content */}
          <div
            className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6 transition-all duration-1000 ease-out ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500/20 text-white text-xs sm:text-sm font-semibold rounded-full border border-red-300/40 shadow-sm transition-all duration-700 delay-200 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Shield className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2" />
              100% Segar & Higienis
            </div>

            {/* Title */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <span className="block text-orange-200">Daging Kambing</span>
                <span className="block">Segar</span>
              </h1>

              <p
                className={`text-sm sm:text-base lg:text-lg xl:text-xl text-red-100 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-800 delay-600 px-4 sm:px-0 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                Daging kambing segar hasil ternak Embik Farm yang sehat, rendah
                kolesterol, dan kaya protein. Diproses higienis dengan standar
                kualitas tinggi.
              </p>
            </div>

            {/* Quality Highlights */}
            <div
              className={`grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 w-full max-w-xs sm:max-w-md transition-all duration-800 delay-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
                <Zap className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-yellow-300 mx-auto mb-1" />
                <div className="text-xs sm:text-sm font-semibold">
                  Protein Tinggi
                </div>
                <div className="text-xs text-orange-200">25.6g/100g</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
                <Heart className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-green-300 mx-auto mb-1" />
                <div className="text-xs sm:text-sm font-semibold">
                  Rendah Kolesterol
                </div>
                <div className="text-xs text-orange-200">75mg/100g</div>
              </div>
            </div>

            {/* Usage Badges */}
            <div
              className={`flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start transition-all duration-800 delay-800 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-300 rounded-full"></div>
                <span>Rumah Tangga</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-300 rounded-full"></div>
                <span>Aqiqah</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-300 rounded-full"></div>
                <span>Kurban</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image - Mobile Optimized */}
          <div
            className={`w-full lg:w-1/2 flex justify-center lg:justify-end relative transition-all duration-1000 ease-out delay-300 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative bg-white p-2 sm:p-3 lg:p-4 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 z-10">
              <div className="w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-red-100 via-orange-100 to-yellow-50 rounded-xl sm:rounded-2xl flex items-center justify-center relative">
                {/* Meat illustration */}
                <div className="text-center relative">
                  <div className="w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-red-200 to-orange-200 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
                    <Beef className="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 text-red-700" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-800">
                    EMBIK FARM
                  </div>
                  <div className="text-sm sm:text-base text-red-600">
                    Daging Kambing Premium
                  </div>
                </div>

                {/* Decorative elements - Smaller on mobile */}
                <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8">
                  <ChefHat className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-orange-400" />
                </div>
                <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
                  <Utensils className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-red-400" />
                </div>
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8">
                  <Award className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-amber-500" />
                </div>
              </div>

              {/* Quality Badge */}
              <div
                className={`absolute -top-2 sm:-top-3 lg:-top-4 -right-2 sm:-right-3 lg:-right-4 bg-red-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full shadow-lg transform rotate-12 z-20 transition-all duration-700 delay-1000 flex items-center gap-1 ${
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

      {/* Nutrition Facts - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Animated background elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-40 right-40 w-16 h-16 bg-yellow-200 rounded-full opacity-25 animate-ping"
            style={{ animationDuration: "4s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            {/* Modern badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
              <Zap className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Nutrisi Lengkap</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-gray-900">Kandungan</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Nutrisi Premium
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Daging kambing berkualitas tinggi dengan kandungan nutrisi optimal
              <span className="font-semibold text-red-600">
                {" "}
                per 100 gram
              </span>{" "}
              untuk kesehatan keluarga
            </p>
          </div>

          {/* Nutrition cards with mobile optimization */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {nutritionFacts.map((item, index) => (
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
                {/* Main card */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-3 group-hover:scale-105 border border-gray-100 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon background */}
                    <div className="relative mb-2 sm:mb-3 lg:mb-4">
                      <div
                        className={`w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-br ${
                          item.color === "text-red-600"
                            ? "from-red-400 to-red-600"
                            : item.color === "text-orange-500"
                            ? "from-orange-400 to-orange-600"
                            : item.color === "text-green-600"
                            ? "from-green-400 to-green-600"
                            : "from-blue-400 to-blue-600"
                        } rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}
                      >
                        {item.nutrient === "Protein" && (
                          <Zap className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-white" />
                        )}
                        {item.nutrient === "Zat Besi" && (
                          <Heart className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-white" />
                        )}
                        {item.nutrient === "Kolesterol" && (
                          <Shield className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-white" />
                        )}
                        {item.nutrient === "Kalori" && (
                          <Award className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-white" />
                        )}
                      </div>

                      {/* Floating indicator */}
                      <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-md transform group-hover:scale-125 transition-all duration-300">
                        <div className="w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Amount with mobile typography */}
                    <div className="mb-1 sm:mb-2">
                      <div
                        className={`text-lg sm:text-2xl lg:text-3xl font-black ${item.color} mb-0.5 sm:mb-1 transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        {item.amount}
                      </div>
                      <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                        {item.per}
                      </div>
                    </div>

                    {/* Nutrient name */}
                    <div className="space-y-0.5 sm:space-y-1">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                        {item.nutrient}
                      </h3>

                      {/* Description - Hidden on mobile */}
                      <p className="hidden sm:block text-xs lg:text-xs text-gray-500 leading-relaxed">
                        {item.nutrient === "Protein" &&
                          "Membangun otot & jaringan tubuh"}
                        {item.nutrient === "Zat Besi" &&
                          "Mencegah anemia & lelah"}
                        {item.nutrient === "Kolesterol" &&
                          "Kadar yang aman untuk jantung"}
                        {item.nutrient === "Kalori" &&
                          "Energi untuk aktivitas harian"}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-100 rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        item.color === "text-red-600"
                          ? "from-red-400 to-red-600"
                          : item.color === "text-orange-500"
                          ? "from-orange-400 to-orange-600"
                          : item.color === "text-green-600"
                          ? "from-green-400 to-green-600"
                          : "from-blue-400 to-blue-600"
                      } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200`}
                    ></div>
                  </div>
                </div>

                {/* Floating shadow effect - Hidden on mobile */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-red-200 to-orange-200 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 transform translate-y-2 group-hover:translate-y-4 transition-all duration-500 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>

          {/* Bottom info section - Mobile optimized */}
          <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-gray-800">
                    Rendah Kolesterol
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Aman untuk diet sehat
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 sm:h-10 lg:h-12 bg-gray-300"></div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Heart className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-gray-800">
                    Tinggi Protein
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Baik untuk pertumbuhan
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 sm:h-10 lg:h-12 bg-gray-300"></div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Award className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-gray-800">
                    Kualitas Premium
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Standar internasional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-red-50/30 to-orange-50/50 relative overflow-hidden">
        {/* Modern background elements - Hidden on mobile */}
        <div className="hidden sm:block absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-100 rounded-full opacity-15 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          {/* Modern header section */}
          <div className="text-center mb-10 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 lg:mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Award className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
              <span>Kualitas Premium Terjamin</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6">
              <span className="text-gray-900">Keunggulan</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-red-800">
                Daging Kambing
              </span>
              <br />
              <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-700 font-medium">
                Embik Farm
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Kualitas premium dengan standar kebersihan dan kesehatan terjamin
              untuk kepuasan dan kepercayaan keluarga Indonesia
            </p>
          </div>

          {/* Benefits grid with mobile cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                {/* Main card */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:scale-105 border border-gray-100/50 backdrop-blur-sm overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl sm:rounded-3xl"></div>

                  {/* Modern icon container */}
                  <div className="relative z-10 mb-3 sm:mb-4 lg:mb-6">
                    <div className="relative">
                      {/* Icon background with enhanced gradients */}
                      <div
                        className={`w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 ${
                          index === 0
                            ? "bg-gradient-to-br from-green-400 to-green-600"
                            : index === 1
                            ? "bg-gradient-to-br from-blue-400 to-blue-600"
                            : index === 2
                            ? "bg-gradient-to-br from-purple-400 to-purple-600"
                            : index === 3
                            ? "bg-gradient-to-br from-orange-400 to-orange-600"
                            : "bg-gradient-to-br from-red-400 to-red-600"
                        } rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        {/* Icon */}
                        <div className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                          {React.cloneElement(benefit.icon, {
                            className:
                              "w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white",
                          })}
                        </div>
                      </div>

                      {/* Floating number indicator */}
                      <div
                        className={`absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 ${
                          index === 0
                            ? "bg-green-500"
                            : index === 1
                            ? "bg-blue-500"
                            : index === 2
                            ? "bg-purple-500"
                            : index === 3
                            ? "bg-orange-500"
                            : "bg-red-500"
                        } rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>

                    {/* Call-to-action hint - Hidden on mobile */}
                    <div className="hidden sm:flex items-center gap-2 mt-4 lg:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-1 h-6 lg:h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                      <span className="text-xs lg:text-sm font-medium text-red-600">
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
                          ? "bg-gradient-to-r from-blue-400 to-blue-600"
                          : index === 2
                          ? "bg-gradient-to-r from-purple-400 to-purple-600"
                          : index === 3
                          ? "bg-gradient-to-r from-orange-400 to-orange-600"
                          : "bg-gradient-to-r from-red-400 to-red-600"
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
                      ? "bg-gradient-to-br from-blue-200 to-blue-300"
                      : index === 2
                      ? "bg-gradient-to-br from-purple-200 to-purple-300"
                      : index === 3
                      ? "bg-gradient-to-br from-orange-200 to-orange-300"
                      : "bg-gradient-to-br from-red-200 to-red-300"
                  } rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 transform translate-y-4 group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Options - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-800 mb-2 sm:mb-3 lg:mb-4">
              Pilihan Potongan & Berat
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-red-600">
              Sesuaikan dengan kebutuhan dan acara Anda
            </p>
          </div>

          {/* Cut Selection */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-red-800 mb-4 sm:mb-5 lg:mb-6 text-center">
              Pilih Jenis Potongan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {cuts.map((cut) => (
                <div
                  key={cut.name}
                  className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                    selectedCut === cut.name
                      ? "ring-2 sm:ring-4 ring-red-500"
                      : ""
                  } ${cut.popular ? "ring-2 ring-orange-400" : ""}`}
                  onClick={() => setSelectedCut(cut.name)}
                >
                  {cut.popular && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-2 sm:px-3 lg:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                        Terpopuler
                      </span>
                    </div>
                  )}
                  <div
                    className={`w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br ${cut.color} rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center shadow-md`}
                  >
                    <Scissors
                      className={`w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-${cut.accent}`}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-red-800 text-center mb-1 sm:mb-2">
                    {cut.title}
                  </h3>
                  <p className="text-red-600 text-center text-xs sm:text-sm">
                    {cut.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Weight/Package Selection */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-red-800 mb-4 sm:mb-5 lg:mb-6 text-center">
              Pilih Berat/Paket
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.weight}
                  className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                    selectedWeight === pkg.weight
                      ? "ring-2 sm:ring-4 ring-red-500"
                      : ""
                  } ${pkg.popular ? "ring-2 ring-orange-400" : ""} ${
                    pkg.special ? "ring-2 ring-amber-500" : ""
                  }`}
                  onClick={() => setSelectedWeight(pkg.weight)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-2 sm:px-3 lg:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                        Terpopuler
                      </span>
                    </div>
                  )}
                  {pkg.special && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-amber-500 text-white px-2 sm:px-3 lg:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                        Special
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-800 mb-1 sm:mb-2">
                      {pkg.weight}
                    </div>
                    <div className="text-xs sm:text-sm text-red-600 mb-2 sm:mb-3">
                      {pkg.type}
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600 mb-0.5 sm:mb-1">
                      {pkg.price === "Call"
                        ? "Hubungi Kami"
                        : `Rp ${pkg.price}`}
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-xs sm:text-sm text-gray-500 line-through mb-3 sm:mb-4">
                        Rp {pkg.originalPrice}
                      </div>
                    )}

                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-red-600 mb-4 sm:mb-5 lg:mb-6">
                      <div className="flex items-center gap-1.5 sm:gap-2 justify-center">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>Segar terjamin</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 justify-center">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>Diproses higienis</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 justify-center">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>Bisa antar</span>
                      </div>
                    </div>

                    <button className="w-full bg-red-600 text-white py-2 sm:py-2.5 lg:py-3 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
        {/* Background decorative elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-10 left-10 w-64 h-64 bg-red-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-10 right-10 w-48 h-48 bg-orange-100 rounded-full opacity-40 blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500/10 text-red-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Proses Cepat & Mudah</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Cara <span className="text-red-600">Pemesanan</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              4 langkah sederhana untuk mendapatkan daging kambing segar
              berkualitas premium
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 relative">
            {/* Connection lines - Hidden on mobile */}
            <div className="hidden lg:block absolute top-16 sm:top-20 lg:top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>

            {[
              {
                step: "01",
                title: "Pemesanan",
                desc: "Hubungi kami via WhatsApp atau telepon untuk konsultasi kebutuhan",
                icon: <Phone className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8" />,
                color: "from-green-400 to-green-600",
                bgColor: "bg-green-500",
              },
              {
                step: "02",
                title: "Konfirmasi",
                desc: "Tentukan jenis potongan, berat, dan jadwal pengambilan yang diinginkan",
                icon: (
                  <CheckCircle className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8" />
                ),
                color: "from-blue-400 to-blue-600",
                bgColor: "bg-blue-500",
              },
              {
                step: "03",
                title: "Proses",
                desc: "Daging diproses fresh dengan standar higienis sesuai pesanan Anda",
                icon: (
                  <Scissors className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8" />
                ),
                color: "from-purple-400 to-purple-600",
                bgColor: "bg-purple-500",
              },
              {
                step: "04",
                title: "Pengiriman",
                desc: "Siap diantar langsung ke lokasi atau ambil sendiri di farm",
                icon: <Truck className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8" />,
                color: "from-orange-400 to-orange-600",
                bgColor: "bg-orange-500",
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
                {/* Card */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 relative overflow-hidden group-hover:scale-105 border border-gray-100">
                  {/* Background gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}
                  ></div>

                  {/* Step number with animated background */}
                  <div className="relative mb-3 sm:mb-4 lg:mb-6">
                    <div
                      className={`w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 ${item.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="text-white relative z-10">
                        {item.icon}
                      </div>
                    </div>
                    {/* Floating step number */}
                    <div
                      className={`absolute -top-1 sm:-top-2 lg:-top-3 -right-1 sm:-right-2 lg:-right-3 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 ${item.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                    >
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
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
                  <div className="hidden lg:block absolute top-16 sm:top-20 lg:top-24 -right-4 z-20">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white border-2 border-red-200 rounded-full flex items-center justify-center shadow-sm">
                      <div className="w-0 h-0 border-l-2 border-l-red-400 border-y-2 border-y-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to action - Mobile optimized */}
          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-red-100">
              <div className="flex items-center gap-1.5 sm:gap-2 text-red-600">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-xs sm:text-sm lg:text-base font-semibold">
                  Estimasi proses: 2-4 jam
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 sm:h-6 bg-gray-300"></div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-green-600">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-xs sm:text-sm lg:text-base font-semibold">
                  Jaminan fresh & higienis
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-700 via-orange-700 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">
            Siap Memesan Daging Kambing Segar?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-orange-100 mb-6 sm:mb-7 lg:mb-8 px-4 sm:px-0">
            Hubungi kami sekarang untuk pesanan fresh dan berkualitas!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center mb-6 sm:mb-7 lg:mb-8">
            <button className="px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
              Pesan Sekarang
            </button>
            <button className="px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 border-2 border-white text-white hover:bg-white hover:text-red-800 font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base">
              Konsultasi Dulu
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm mb-4 sm:mb-5 lg:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>0812-3456-7890</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
              <span className="break-all sm:break-normal">
                info@embikfarm.com
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-orange-200 text-xs sm:text-sm px-4 sm:px-0">
              💡 <strong>Tips:</strong> Untuk acara aqiqah/kurban, sebaiknya
              pesan H-3 untuk hasil terbaik
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DagingKambingPage;
