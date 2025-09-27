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
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-600 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Kerjasama Bersama 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 block mt-2">
              Embik Farm
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan ekosistem peternakan modern dan raih kesempatan investasi yang menguntungkan
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            const isPrimary = pkg.color === "primary";
            
            return (
              <div
                key={idx}
                className={`group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 ${
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
                  } text-white px-6 py-2 rounded-bl-2xl rounded-tr-3xl font-bold text-sm tracking-wide shadow-lg`}>
                    {pkg.label}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-2xl ${
                      isPrimary 
                        ? "bg-green-100 text-green-600" 
                        : "bg-emerald-100 text-emerald-600"
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">{pkg.title}</h3>
                  </div>

                  {/* Benefits */}
                  <div className="mb-10">
                    <ul className="space-y-4">
                      {pkg.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <CheckCircle className={`w-6 h-6 ${
                            isPrimary ? "text-green-500" : "text-emerald-500"
                          } flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200`} />
                          <span className="text-gray-700 text-lg leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => router.push(pkg.link)}
                    className={`w-full py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl ${
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
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 ${
                  isPrimary ? "bg-green-100" : "bg-emerald-100"
                } rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`}></div>
                <div className={`absolute -top-6 -left-6 w-16 h-16 ${
                  isPrimary ? "bg-green-200" : "bg-emerald-200"
                } rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-600 text-lg mb-6">
            Masih ada pertanyaan? Tim kami siap membantu Anda
          </p>
          <button className="bg-white text-green-600 font-bold px-8 py-3 rounded-xl border-2 border-green-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg">
            Hubungi Tim Support
          </button>
        </div>
      </div>
    </section>
  );
}