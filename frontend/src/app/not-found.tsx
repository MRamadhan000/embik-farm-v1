"use client";

import React from "react";
import Link from "next/link";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  AlertTriangle, 
  Frown,
  Users,
  ShoppingBag,
  TrendingUp,
  Camera,
  BookOpen,
  MessageCircle
} from "lucide-react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 flex items-center justify-center p-3 sm:p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Main 404 Content */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          {/* 404 Number with Icon */}
          <div className="relative mb-4 sm:mb-6 lg:mb-8">
            <div className="text-6xl sm:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-emerald-600 bg-clip-text leading-none">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-6 sm:mb-8 lg:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Frown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
                Oops! Halaman Tidak Ditemukan
              </h1>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan, 
              dihapus, atau URL yang Anda masukkan salah.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-8 sm:mb-12 lg:mb-16 px-4">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Kembali ke Beranda</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white border-2 border-green-500 text-green-600 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-green-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300 group w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Halaman Sebelumnya</span>
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl sm:rounded-2xl lg:rounded-3xl text-white p-4 sm:p-6 lg:p-8 mx-2 sm:mx-0">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Butuh Bantuan? Hubungi Kami!
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3 p-2.5 sm:p-3 lg:p-4 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-xs sm:text-xs lg:text-sm opacity-90">Alamat</div>
                <div className="text-xs sm:text-sm lg:text-base font-semibold truncate">Bogor, Jawa Barat</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-3 p-2.5 sm:p-3 lg:p-4 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-xs sm:text-xs lg:text-sm opacity-90">Telepon</div>
                <div className="text-xs sm:text-sm lg:text-base font-semibold">+62 123 456 789</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-3 p-2.5 sm:p-3 lg:p-4 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-xs sm:text-xs lg:text-sm opacity-90">Email</div>
                <div className="text-xs sm:text-sm lg:text-base font-semibold truncate">embikfarm@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-6 sm:mt-8 lg:mt-12 text-center px-4">
          <p className="text-xs sm:text-sm lg:text-base text-gray-500">
            © 2024 Embik Farm. Peternakan kambing modern dengan kualitas terbaik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;