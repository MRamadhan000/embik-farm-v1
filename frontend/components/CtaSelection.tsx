"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CTASelection() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <main className="h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-10"
        >
          {/* Logo/Brand Section */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg mb-4">
              <span className="text-2xl text-white">🐐</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-green-800 bg-clip-text text-transparent mb-3">
              EMBIK FARM
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-gray-800 mb-3"
          >
            Bergabung Bersama Kami
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed"
          >
            Wujudkan impian bisnis Anda di industri peternakan kambing yang berkembang pesat. 
            Pilih jalur kemitraan yang sesuai dengan visi dan kemampuan Anda.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full"
        >
          {/* Reseller Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative p-6 md:p-8">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                Reseller Partner
              </h3>
              
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Mulai bisnis dengan modal minimal. Jual produk kambing berkualitas tinggi 
                dengan margin keuntungan menarik dan dukungan marketing penuh dari kami.
              </p>

              {/* Benefits List */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Komisi hingga 25% per transaksi</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Material marketing gratis</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Pelatihan & mentoring</span>
                </div>
              </div>

              <button
                onClick={() => router.push("/reseller")}
                className="group/btn w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  Daftar Sebagai Reseller
                  <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </motion.div>

          {/* Mitra Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Premium Badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                PREMIUM
              </span>
            </div>

            {/* Content */}
            <div className="relative p-6 md:p-8">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                Business Partner
              </h3>
              
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Kolaborasi strategis untuk pengembangan bisnis peternakan kambing. 
                Investasi bersama dengan pembagian profit yang menguntungkan kedua belah pihak.
              </p>

              {/* Benefits List */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Bagi hasil hingga 40%</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Akses ke semua fasilitas farm</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Konsultasi bisnis eksklusif</span>
                </div>
              </div>

              <button
                onClick={() => router.push("/mitra")}
                className="group/btn w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  Daftar Sebagai Mitra
                  <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 text-sm mb-3">
            Masih ragu? Hubungi tim kami untuk konsultasi gratis
          </p>
          <button className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Konsultasi Sekarang
          </button>
        </motion.div>
      </div>
    </main>
  );
}