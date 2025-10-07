"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Shield,
  Heart,
  Sprout,
  Tractor,
  Globe,
  Building,
  TrendingUp,
  Award,
  Users,
  BookOpen,
  Clock,
} from "lucide-react";
import MilestoneModal from "@/components/MilestoneModal"; // Tambahkan ini

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (milestone: any) => {
    setSelectedMilestone(milestone);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMilestone(null);
  };

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

  const values = [
    {
      icon: (
        <Heart className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-green-600" />
      ),
      title: "Kualitas & Kesehatan",
      description:
        "Menghadirkan produk kambing berkualitas tinggi dengan pakan alami dan proses yang higienis",
    },
    {
      icon: (
        <Sprout className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-teal-600" />
      ),
      title: "Keberlanjutan",
      description:
        "Menerapkan praktik peternakan ramah lingkungan untuk masa depan yang lebih berkelanjutan untuk masa depan",
    },
    {
      icon: (
        <Users className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-emerald-600" />
      ),
      title: "Pemberdayaan Komunitas",
      description:
        "Memberdayakan peternak lokal melalui program kemitraan dan investasi ternak yang menguntungkan",
    },
    {
      icon: (
        <Award className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-green-600" />
      ),
      title: "Kepuasan Pelanggan",
      description:
        "Memberikan pelayanan terbaik untuk kebutuhan aqiqah, kurban, dan konsumsi harian",
    },
  ];

  // Data milestones - gunakan string untuk icon dengan tema hijau konsisten
  const milestones = [
    {
      year: "2020",
      event:
        "Pendirian Embik Farm sebagai peternakan keluarga kecil dengan 10 ekor kambing",
      icon: "building", // string instead of React component
      color: "from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      story: {
        title: "Awal Mula Perjalanan",
        image: "/images/milestones/2020.jpg",
        content:
          "Pada tahun 2020, Embik Farm dimulai sebagai peternakan keluarga kecil dengan hanya 10 ekor kambing. Berawal dari keinginan untuk menyediakan susu kambing berkualitas tinggi untuk keluarga, kami mulai belajar tentang peternakan modern dan sustainable farming practices.",
        achievements: [
          "Memulai dengan 10 ekor kambing berkualitas unggul",
          "Membangun kandang pertama dengan standar kesehatan tinggi",
          "Mengembangkan sistem pakan alami dan organik",
        ],
      },
    },
    {
      year: "2021",
      event:
        "Ekspansi kandang dan peningkatan populasi kambing menjadi 50 ekor",
      icon: "trending-up",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
      story: {
        title: "Fase Pertumbuhan",
        image: "/images/milestones/2021.jpg",
        content:
          "Tahun 2021 menjadi tahun pertumbuhan yang signifikan. Kami berhasil mengembangkan populasi kambing menjadi 50 ekor dan membangun fasilitas kandang yang lebih modern dengan sistem ventilasi yang baik dan area bermain untuk kambing.",
        achievements: [
          "Populasi kambing meningkat menjadi 50 ekor",
          "Pembangunan kandang modern dengan sistem ventilasi optimal",
          "Implementasi program kesehatan hewan yang komprehensif",
        ],
      },
    },
    {
      year: "2022",
      event:
        "Peluncuran produk susu kambing dan mulai melayani pelanggan lokal",
      icon: "award",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      story: {
        title: "Era Komersial",
        image: "/images/milestones/2022.jpg",
        content:
          "Memasuki tahun 2022, kami mulai memproduksi susu kambing secara komersial. Dengan standar kebersihan yang tinggi dan proses pasteurisasi yang tepat, produk susu kambing kami mulai dikenal di kalangan masyarakat Bogor sebagai produk berkualitas premium.",
        achievements: [
          "Peluncuran produk susu kambing segar berkualitas premium",
          "Membangun jaringan distribusi lokal di wilayah Bogor",
          "Sertifikasi HACCP untuk keamanan pangan",
        ],
      },
    },
    {
      year: "2023",
      event:
        "Inovasi program investasi ternak dan kemitraan dengan peternak lokal",
      icon: "users",
      color: "from-lime-500 to-lime-600",
      bgColor: "bg-gradient-to-br from-lime-500 to-lime-600",
      story: {
        title: "Inovasi dan Kemitraan",
        image: "/images/milestones/2023.jpg",
        content:
          "Tahun 2023 menandai era inovasi dengan diluncurkannya program investasi ternak yang memungkinkan masyarakat untuk berinvestasi dalam peternakan kambing. Program ini tidak hanya memberikan return yang menarik, tetapi juga mendukung pengembangan peternakan berkelanjutan.",
        achievements: [
          "Peluncuran program investasi ternak dengan ROI menarik",
          "Kemitraan dengan 15+ peternak lokal",
          "Pengembangan platform digital untuk monitoring investasi",
        ],
      },
    },
  ];

  // Helper function untuk render icon
  const renderIcon = (iconName: string, className: string = "w-8 h-8") => {
    const iconProps = { className };

    switch (iconName) {
      case "building":
        return <Building {...iconProps} />;
      case "trending-up":
        return <TrendingUp {...iconProps} />;
      case "award":
        return <Award {...iconProps} />;
      case "users":
        return <Users {...iconProps} />;
      default:
        return <Building {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-teal-700 to-emerald-800 pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh] flex items-center overflow-hidden text-white">
        {/* Background decorative elements - Responsif */}
        <div
          className="absolute top-10 sm:top-20 right-6 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-teal-300 rounded-full opacity-30 blur-2xl sm:blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translateY(${parallaxSlow}px) ${
              isLoaded ? "scale(1)" : "scale(0)"
            }`,
            opacity: isLoaded ? 0.3 : 0,
          }}
        ></div>
        <div
          className="absolute bottom-10 sm:bottom-20 left-6 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-green-300 rounded-full opacity-20 blur-2xl sm:blur-3xl transition-all duration-1000 ease-out delay-300"
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
              className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/20 text-white text-xs sm:text-sm font-semibold rounded-full border border-green-300/40 shadow-sm transition-all duration-700 delay-200 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Shield className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2" />
              Peternakan Kualitas Premium
            </div>

            {/* Title */}
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight transition-all duration-800 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="block text-teal-200">Tentang</span>
              <span className="block">Embik Farm</span>
            </h1>

            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl text-green-100 leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 lg:px-0 transition-all duration-800 delay-600 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              Embik Farm adalah peternakan modern di Bogor yang menyediakan
              kambing hidup, susu kambing, dan program investasi ternak. Kami
              berkomitmen pada kualitas, kesehatan, dan keberlanjutan.
            </p>

            {/* Quick Highlights */}
            <div
              className={`grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-sm sm:max-w-md transition-all duration-800 delay-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
                <Heart className="w-4 sm:w-6 h-4 sm:h-6 text-teal-300 mx-auto mb-1" />
                <div className="text-xs sm:text-sm font-semibold">
                  Produk Sehat
                </div>
                <div className="text-xs text-green-200">Pakan Alami</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
                <Sprout className="w-4 sm:w-6 h-4 sm:h-6 text-emerald-300 mx-auto mb-1" />
                <div className="text-xs sm:text-sm font-semibold">
                  Berkelanjutan
                </div>
                <div className="text-xs text-green-200">Ramah Lingkungan</div>
              </div>
            </div>
          </div>

          {/* Right Content - Farm Image */}
          <div
            className={`w-full lg:w-1/2 flex justify-center lg:justify-end relative transition-all duration-1000 ease-out delay-300 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative bg-white p-2 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 z-10">
              <div className="w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden relative">
                {/* Main Farm Image */}
                <img
                  src="/images/about-us/img.jpg"
                  alt="Embik Farm - Peternakan Modern"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback jika gambar tidak ditemukan
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Fallback content jika gambar tidak ada */}
                <div
                  className="w-full h-full bg-gradient-to-br from-green-100 via-teal-100 to-emerald-50 rounded-xl sm:rounded-2xl flex items-center justify-center absolute top-0 left-0"
                  style={{ display: "none" }}
                >
                  <div className="text-center relative">
                    <div className="w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 bg-gradient-to-br from-green-200 to-teal-200 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                      <Tractor className="w-10 sm:w-14 lg:w-16 h-10 sm:h-14 lg:h-16 text-green-700" />
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-800">
                      EMBIK FARM
                    </div>
                    <div className="text-sm sm:text-base text-green-600">
                      Peternakan Modern
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Badge */}
              <div
                className={`absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-green-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg transform rotate-12 z-20 transition-all duration-700 delay-1000 flex items-center gap-1 ${
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

      {/* Our Values Section */}
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
              <Heart className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
              <span>Nilai Kami</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-gray-900">Visi &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600">
                Nilai Embik Farm
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Kami berdedikasi untuk menghadirkan produk berkualitas tinggi
              sambil mendukung komunitas dan lingkungan
            </p>
          </div>

          {/* Values Grid - Natural Height Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
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
                {/* Main card - Natural height */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 sm:group-hover:-translate-y-4 group-hover:scale-105 border border-gray-100/50 backdrop-blur-sm overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl sm:rounded-3xl"></div>

                  {/* Icon container */}
                  <div className="relative z-10 mb-4 sm:mb-6 flex justify-center">
                    <div className="relative">
                      <div
                        className={`w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 ${
                          index === 0
                            ? "bg-gradient-to-br from-green-400 to-green-600"
                            : index === 1
                            ? "bg-gradient-to-br from-teal-400 to-teal-600"
                            : index === 2
                            ? "bg-gradient-to-br from-emerald-400 to-emerald-600"
                            : "bg-gradient-to-br from-lime-400 to-lime-600"
                        } rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                          {React.cloneElement(value.icon, {
                            className:
                              "w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white",
                          })}
                        </div>
                      </div>
                      <div
                        className={`absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 ${
                          index === 0
                            ? "bg-green-500"
                            : index === 1
                            ? "bg-teal-500"
                            : index === 2
                            ? "bg-emerald-500"
                            : "bg-lime-500"
                        } rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content - Natural flow */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                      {value.title}
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Bottom indicator */}
                    <div className="flex items-center gap-1.5 sm:gap-2 justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium text-green-600">
                        Nilai utama
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
                          : "bg-gradient-to-r from-lime-400 to-lime-600"
                      } transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300`}
                    ></div>
                  </div>
                </div>

                {/* Floating shadow */}
                <div
                  className={`absolute inset-0 ${
                    index === 0
                      ? "bg-gradient-to-br from-green-200 to-green-300"
                      : index === 1
                      ? "bg-gradient-to-br from-teal-200 to-teal-300"
                      : index === 2
                      ? "bg-gradient-to-br from-emerald-200 to-emerald-300"
                      : "bg-gradient-to-br from-lime-200 to-lime-300"
                  } rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-3 sm:group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-50 to-teal-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-green-100 rounded-full opacity-30 blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-teal-100 rounded-full opacity-40 blur-xl sm:blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Perjalanan Kami</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              <span className="text-green-600">Milestone</span> Embik Farm
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Perjalanan kami dalam membangun peternakan modern dan
              berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-16 sm:top-20 lg:top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  opacity: isLoaded ? 1 : 0,
                  transitionDelay: `${1200 + index * 200}ms`,
                  transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Card */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 relative overflow-hidden group-hover:scale-105 border border-gray-100">
                  {/* Background gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}
                  ></div>

                  {/* Milestone icon and year */}
                  <div className="relative mb-4 sm:mb-6">
                    <div
                      className={`w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 ${milestone.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="text-white relative z-10">
                        {renderIcon(
                          milestone.icon,
                          "w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                        )}
                      </div>
                    </div>
                    <div
                      className={`absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 ${milestone.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                    >
                      {milestone.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center relative z-10 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {milestone.year}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                      {milestone.event}
                    </p>

                    {/* Lihat Cerita Button */}
                    <button
                      onClick={() => openModal(milestone)}
                      className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${milestone.color} text-white rounded-full text-xs sm:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn`}
                    >
                      <BookOpen className="w-3 sm:w-4 h-3 sm:h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Lihat Cerita</span>
                    </button>
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-100">
                    <div
                      className={`h-full bg-gradient-to-r ${milestone.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    ></div>
                  </div>
                </div>

                {/* Connector arrow (hidden on mobile) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-16 sm:top-20 lg:top-24 -right-2 sm:-right-4 z-20">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white border-2 border-green-200 rounded-full flex items-center justify-center shadow-sm">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-700 via-teal-700 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Bergabung dengan Embik Farm
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-teal-100 mb-6 sm:mb-8 px-4">
            Jelajahi produk dan program investasi kami untuk mendukung
            peternakan berkelanjutan!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center px-4">
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/products"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base"
            >
              Lihat Produk
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Globe className="w-3 sm:w-4 h-3 sm:h-4" />
              <span className="break-all">www.embikfarm.com</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Users className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>50+ Peternak Mitra</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-teal-200 text-xs sm:text-sm px-4">
              💡 <strong>Tips:</strong> Tanyakan tentang program investasi
              ternak untuk keuntungan jangka panjang
            </p>
          </div>
        </div>
      </section>
      <MilestoneModal
        isOpen={isModalOpen}
        milestone={selectedMilestone}
        onClose={closeModal}
      />
    </div>
  );
};

export default AboutPage;
