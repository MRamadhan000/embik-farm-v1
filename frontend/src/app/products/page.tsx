"use client";

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
  ArrowRight,
  Zap,
  Heart,
  Users,
  TrendingUp,
  ImageIcon,
} from "lucide-react";

const ProductsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

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

  const handleImageError = (productId: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  const products = [
    {
      id: "susu-kambing",
      title: "Susu Kambing",
      subtitle: "Fresh & Nutritious",
      description:
        "Susu kambing pasteurisasi segar, kaya nutrisi dan cocok untuk kesehatan keluarga",
      icon: <Milk className="w-8 h-8" />,
      image: "/images/products/susu-kambing.jpg",
      imageAlt: "Susu Kambing Segar Embik Farm",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600",
      link: "/products/susu-kambing",
      popular: true,
      features: ["Pasteurisasi", "Kaya Protein"],
    },
    {
      id: "daging-kambing",
      title: "Daging Kambing",
      subtitle: "Premium Quality",
      description:
        "Daging kambing berkualitas tinggi, higienis dan siap masak untuk hidangan lezat.",
      icon: <Package className="w-8 h-8" />,
      image: "/images/products/daging-segar.png",
      imageAlt: "Daging Kambing Segar Premium",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      textColor: "text-red-600",
      link: "/products/daging-segar",
      features: ["Segar", "Higienis", "Siap Masak"],
    },
    {
      id: "kambing-hidup",
      title: "Kambing Hidup",
      subtitle: "Healthy & Strong",
      description:
        "Kambing hidup sehat untuk aqiqah, kurban, atau investasi ternak dengan pakan alami.",
      icon: <Tractor className="w-8 h-8" />,
      image: "/images/products/kambing-hidup.jpg",
      imageAlt: "Kambing Hidup Sehat untuk Aqiqah dan Kurban",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      textColor: "text-green-600",
      link: "/products/kambing-hidup",
      features: ["Sehat", "Pakan Alami", "Investasi"],
    },
    {
      id: "ice-cream",
      title: "Es Krim Susu Kambing",
      subtitle: "Creamy & Delicious",
      description:
        "Es krim lembut berbahan susu kambing asli, rendah lemak dan penuh cita rasa.",
      icon: <IceCream className="w-8 h-8" />,
      image: "/images/products/ice-cream.jpg",
      imageAlt: "Es Krim Susu Kambing Lezat",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      textColor: "text-purple-600",
      link: "/products/ice-cream",
      features: ["Rendah Lemak", "Rasa Alami", "Lembut"],
    },
    {
      id: "kohemax",
      title: "Kohemax",
      subtitle: "Organic Fertilizer",
      description:
        "Pupuk organik berkualitas tinggi dari kotoran kambing, ramah lingkungan untuk pertanian",
      icon: <Leaf className="w-8 h-8" />,
      image: "/images/products/kohemax.jpg",
      imageAlt: "Pupuk Organik Kohemax",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      textColor: "text-amber-600",
      link: "/products/kohemax",
      features: ["Organik", "Ramah Lingkungan"],
      new: true,
    },
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "500+",
      label: "Pelanggan Puas",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "5",
      label: "Produk Unggulan",
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.9",
      label: "Rating Produk",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "100%",
      label: "Kualitas Terjamin",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-20 left-20 w-32 sm:w-64 h-32 sm:h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-40 sm:w-80 h-40 sm:h-80 bg-purple-400 rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            {/* Badge - Mobile Responsive */}
            <div
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 transition-all duration-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Award className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Produk Premium Embik Farm</span>
            </div>

            {/* Title - Mobile Responsive */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 transition-all duration-800 delay-200 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="block text-blue-200">Katalog</span>
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Produk Kami
              </span>
            </h1>

            <p
              className={`text-sm sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed transition-all duration-800 delay-400 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              Jelajahi koleksi lengkap produk berkualitas tinggi dari Embik Farm
              untuk kebutuhan kuliner dan investasi Anda
            </p>

            {/* Stats - Mobile Responsive */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto transition-all duration-800 delay-600 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20"
                >
                  <div className="flex items-center justify-center mb-1 sm:mb-2 text-blue-300">
                    {stat.icon}
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Mobile Responsive */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg">
              <Star className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Produk Unggulan</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Pilih Produk <span className="text-blue-600">Favorit Anda</span>
            </h2>

            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Setiap produk dibuat dengan standar kualitas tinggi dan cinta
              untuk kepuasan pelanggan
            </p>
          </div>

          {/* Products Grid - Mobile Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group relative"
                style={{
                  transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                  opacity: isLoaded ? 1 : 0,
                  transitionDelay: `${600 + index * 150}ms`,
                  transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link href={product.link}>
                  {/* Main Card - Mobile Responsive */}
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 overflow-hidden group-hover:scale-105">
                    {/* Background Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                    ></div>

                    {/* Product Image Section */}
                    <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                      {!imageErrors[product.id] ? (
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={() => handleImageError(product.id)}
                          loading="lazy"
                        />
                      ) : (
                        // Fallback when image fails to load
                        <div
                          className={`w-full h-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                        >
                          <div className="text-center text-white">
                            <ImageIcon className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2 opacity-70" />
                            <p className="text-xs sm:text-sm font-medium opacity-80">
                              {product.title}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Image Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Badges - Mobile Responsive */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col gap-1 sm:gap-2">
                        {product.popular && (
                          <span className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                            Populer
                          </span>
                        )}
                        {product.new && (
                          <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                            Baru
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-6 md:p-8 relative z-10">
                      {/* Title & Subtitle - Mobile Responsive */}
                      <div className="mb-3 sm:mb-4">
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:${product.textColor} transition-colors duration-300`}
                        >
                          {product.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">
                          {product.subtitle}
                        </p>
                      </div>

                      {/* Description - Mobile Responsive */}
                      <div className="mb-4 sm:mb-6">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                          {product.description}
                        </p>
                      </div>

                      {/* Features - Always Visible - Mobile Responsive */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {product.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 bg-gradient-to-r ${product.gradient} text-white rounded-full text-xs font-medium shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105`}
                            >
                              <CheckCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button - Mobile Responsive */}
                      <div className="flex justify-center">
                        <div
                          className={`flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${product.gradient} text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg transform group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 w-full justify-center`}
                        >
                          <span>Lihat Detail</span>
                          <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-100 rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${product.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200`}
                      ></div>
                    </div>
                  </div>

                  {/* Floating Shadow Effect - Hidden on mobile */}
                  <div
                    className={`hidden sm:block absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transform translate-y-4 group-hover:translate-y-6 transition-all duration-500 -z-10 blur-xl`}
                  ></div>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA - Mobile Responsive */}
          <div className="text-center mt-10 sm:mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4 sm:px-8 py-4 sm:py-6 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Shield className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-gray-800">
                    Kualitas Terjamin
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    100% produk berkualitas
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 sm:h-12 bg-gray-300"></div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Heart className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-gray-800">
                    Dibuat dengan Cinta
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Untuk kepuasan pelanggan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Siap Mencoba Produk Kami?
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
            Hubungi kami untuk konsultasi dan pemesanan produk berkualitas
            tinggi
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/produk/susu-kambing"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base"
            >
              Lihat Susu Kambing
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Produk Premium</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Kualitas Terjamin</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Zap className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Pengiriman Cepat</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-blue-200 text-xs sm:text-sm">
              💡 <strong>Tips:</strong> Coba paket bundling untuk hemat lebih
              banyak!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;