"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Award, Package, CheckCircle } from "lucide-react";

// Data paket CTA
const packages = [
  {
    label: "Terpopuler",
    title: "Investor",
    icon: Award,
    benefits: [
      "Modal aman dan diawasi penuh",
      "Laporan perkembangan kambing rutin",
      "Bagian keuntungan sesuai kesepakatan",
    ],
    cta: "Gabung sebagai Investor",
    link: "/mitra",
    color: "primary",
  },
  {
    label: "Bonus Eksklusif",
    title: "Reseller GEMIK",
    icon: Package,
    benefits: [
      "Harga khusus & margin tetap",
      "Prioritas produk baru & garansi produk",
      "Media promosi & banner dari Embik Farm",
    ],
    cta: "Join sebagai Reseller",
    link: "/reseller",
    color: "secondary",
  },
];

export default function CTAMitraSection() {
  const router = useRouter();
  
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-48 sm:w-64 lg:w-80 xl:w-96 h-48 sm:h-64 lg:h-80 xl:h-96 bg-green-600 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 lg:w-80 xl:w-96 h-48 sm:h-64 lg:h-80 xl:h-96 bg-emerald-600 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl sm:blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Kerjasama Bersama 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 block mt-1 sm:mt-2">
              Embik Farm
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Bergabunglah dengan ekosistem peternakan modern dan raih kesempatan investasi yang menguntungkan
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            const isPrimary = pkg.color === "primary";
            
            return (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-3 border-2 ${
                  isPrimary 
                    ? "border-green-200 hover:border-green-300" 
                    : "border-emerald-200 hover:border-emerald-300"
                } overflow-hidden`}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                  isPrimary 
                    ? "bg-gradient-to-br from-green-500 to-emerald-500" 
                    : "bg-gradient-to-br from-emerald-500 to-green-500"
                }`}></div>
                
                {/* Popular Badge */}
                <div className="absolute -top-1 -right-1">
                  <div className={`${
                    isPrimary 
                      ? "bg-gradient-to-r from-green-500 to-green-600" 
                      : "bg-gradient-to-r from-emerald-500 to-emerald-600"
                  } text-white px-3 py-1 sm:px-4 sm:py-1.5 lg:px-6 lg:py-2 rounded-bl-xl sm:rounded-bl-2xl rounded-tr-2xl sm:rounded-tr-3xl font-bold text-xs sm:text-sm tracking-wide shadow-md sm:shadow-lg`}>
                    {pkg.label}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className={`p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl ${
                      isPrimary 
                        ? "bg-green-100 text-green-600" 
                        : "bg-emerald-100 text-emerald-600"
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">{pkg.title}</h3>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8 sm:mb-10">
                    <ul className="space-y-3 sm:space-y-4">
                      {pkg.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3 group/item">
                          <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${
                            isPrimary ? "text-green-500" : "text-emerald-500"
                          } flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200`} />
                          <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => router.push(pkg.link)}
                    className={`w-full py-3 sm:py-3.5 lg:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl ${
                      isPrimary
                        ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                        : "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
                    } relative overflow-hidden group/btn`}
                  >
                    <span className="relative z-10">{pkg.cta}</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 ${
                  isPrimary ? "bg-green-100" : "bg-emerald-100"
                } rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`}></div>
                <div className={`absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 ${
                  isPrimary ? "bg-green-200" : "bg-emerald-200"
                } rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 px-4 sm:px-0">
            Masih ada pertanyaan? Tim kami siap membantu Anda
          </p>
          <button className="bg-white text-green-600 font-bold px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl border-2 border-green-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 shadow-sm sm:shadow-md hover:shadow-md sm:hover:shadow-lg text-sm sm:text-base">
            Hubungi Tim Support
          </button>
        </div>
      </div>
    </section>
  );
}