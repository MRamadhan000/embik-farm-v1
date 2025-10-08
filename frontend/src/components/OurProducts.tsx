"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGlassWhiskey, FaDrumstickBite, FaLeaf } from "react-icons/fa";
import { CheckCircle, ArrowRight, ImageIcon, Package } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function OurProducts() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const handleImageError = (productId: string) => {
    console.error(`Product image failed to load: ${productId}`);
    setImageErrors((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  const handleImageLoad = (productId: string) => {
    console.log(`Product image loaded successfully: ${productId}`);
    setImageLoaded((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  const products = [
    {
      id: "susu-kambing",
      icon: <FaGlassWhiskey className="w-8 h-8" />,
      title: "Susu Kambing",
      subtitle: "Fresh & Nutritious",
      desc: "Susu kambing segar langsung dari peternakan kami, kaya gizi dan tanpa bahan pengawet.",
      description:
        "Susu kambing pasteurisasi segar, kaya nutrisi dan cocok untuk kesehatan keluarga",
      image: "/images/products/susu-kambing.jpg",
      imageAlt: "Susu Kambing Segar Embik Farm",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      textColor: "text-emerald-600",
      link: "/products/susu-kambing",
      badge: "Fresh",
      popular: true,
      price: "Rp 25.000/L",
      features: ["Pasteurisasi", "Kaya Protein"],
    },
    {
      id: "daging-kambing",
      icon: <FaDrumstickBite className="w-8 h-8" />,
      title: "Daging Kambing",
      subtitle: "Premium Quality",
      desc: "Daging kambing berkualitas tinggi, segar, dan siap diolah menjadi hidangan lezat.",
      description:
        "Daging kambing berkualitas tinggi, higienis dan siap masak untuk hidangan lezat.",
      image: "/images/products/daging-segar.png",
      imageAlt: "Daging Kambing Segar Premium",
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      textColor: "text-rose-600",
      link: "/products/daging-segar",
      badge: "Premium",
      price: "Rp 80.000/kg",
      features: ["Segar", "Higienis", "Siap Masak"],
    },
    {
      id: "kohemax",
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Pupuk Organik",
      subtitle: "Eco-Friendly",
      desc: "Pupuk organik dari kotoran kambing yang telah diolah, ramah lingkungan dan suburkan tanah.",
      description:
        "Pupuk organik berkualitas tinggi dari kotoran kambing, ramah lingkungan untuk pertanian",
      image: "/images/products/kohemax.jpg",
      imageAlt: "Pupuk Organik Kohemax",
      gradient: "from-lime-500 to-green-600",
      bgGradient: "from-lime-50 to-green-50",
      textColor: "text-lime-600",
      link: "/products/kohemax",
      badge: "Eco-Friendly",
      new: true,
      price: "Rp 15.000/kg",
      features: ["Organik", "Ramah Lingkungan"],
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <SectionHeader
          title="Produk Kami"
          description="Produk terbaik dari peternakan kami untuk Anda, dihasilkan dengan standar kualitas tinggi dan proses yang berkelanjutan."
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
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

                  {/* Product Image Section - IMPROVED */}
                  <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-t-2xl sm:rounded-t-3xl bg-gradient-to-br from-gray-50 to-gray-100">
                    {!imageErrors[product.id] ? (
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${
                          imageLoaded[product.id] ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading={index === 0 ? "eager" : "lazy"}
                        onError={() => handleImageError(product.id)}
                        onLoad={() => handleImageLoad(product.id)}
                      />
                    ) : (
                      // Fallback when image fails to load
                      <div
                        className={`w-full h-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                      >
                        <div className="text-center text-white">
                          <ImageIcon className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-2 opacity-70" />
                          <p className="text-sm sm:text-base font-medium opacity-80">
                            {product.title}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Loading Skeleton */}
                    {!imageLoaded[product.id] && !imageErrors[product.id] && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                        <div className="text-gray-400">
                          <ImageIcon className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                          <p className="text-xs sm:text-sm">Loading...</p>
                        </div>
                      </div>
                    )}

                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Badges - Mobile Responsive */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col gap-1 sm:gap-2 z-10">
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
                      {product.badge && !product.popular && !product.new && (
                        <span
                          className={`bg-gradient-to-r ${product.gradient} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm`}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Icon Overlay */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                      <div
                        className={`w-10 sm:w-12 h-10 sm:h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        <div className={`${product.textColor}`}>
                          {React.cloneElement(product.icon, {
                            className: "w-5 sm:w-6 h-5 sm:h-6",
                          })}
                        </div>
                      </div>
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

        {/* CTA Button - View All Products */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link href="/produk">
            <button className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-base sm:text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 bg-white/20 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Package className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              
              {/* Text */}
              <span className="relative z-10">
                Lihat Produk Embik Farm Lainnya
              </span>
              
              {/* Arrow Icon */}
              <ArrowRight className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}