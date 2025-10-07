// app/components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, Award, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-emerald-500 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-12 sm:bottom-20 right-12 sm:right-20 w-24 sm:w-40 h-24 sm:h-40 bg-green-500 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <svg className="w-5 sm:w-7 h-5 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text">
                  EMBIK FARM
                </h2>
                <p className="text-xs sm:text-sm text-emerald-400 font-medium">Premium Goat Farming</p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-md">
              Penyedia produk kambing berkualitas tinggi dan segar langsung dari peternakan modern. 
              Dipercaya oleh ribuan pelanggan di seluruh Indonesia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="text-center p-2 sm:p-3 bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-700/50">
                <div className="text-lg sm:text-2xl font-bold text-emerald-400">500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Pelanggan</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-700/50">
                <div className="text-lg sm:text-2xl font-bold text-emerald-400">50+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Mitra</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-700/50">
                <div className="text-lg sm:text-2xl font-bold text-emerald-400">5</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Tahun</div>
              </div>
            </div>

            {/* Awards */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-gray-700/50">
                <Award className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500" />
                <span className="text-xs text-gray-400">Certified Organic</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-gray-700/50">
                <Users className="w-3 sm:w-4 h-3 sm:h-4 text-blue-500" />
                <span className="text-xs text-gray-400">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <div className="w-1 h-4 sm:h-6 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full mr-2 sm:mr-3"></div>
              Menu Utama
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="flex items-center group transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 sm:hover:translate-x-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-600 rounded-full mr-2 sm:mr-3 group-hover:bg-emerald-500 transition-colors"></div>
                  <span className="text-sm sm:text-base">Beranda</span>
                </Link>
              </li>
              <li>
                <Link href="/produk" className="flex items-center group transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 sm:hover:translate-x-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-600 rounded-full mr-2 sm:mr-3 group-hover:bg-emerald-500 transition-colors"></div>
                  <span className="text-sm sm:text-base">Produk Kami</span>
                </Link>
              </li>
              <li>
                <Link href="/reseller" className="flex items-center group transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 sm:hover:translate-x-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-600 rounded-full mr-2 sm:mr-3 group-hover:bg-emerald-500 transition-colors"></div>
                  <span className="text-sm sm:text-base">Menjadi Reseller</span>
                </Link>
              </li>
              <li>
                <Link href="/mitra" className="flex items-center group transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 sm:hover:translate-x-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-600 rounded-full mr-2 sm:mr-3 group-hover:bg-emerald-500 transition-colors"></div>
                  <span className="text-sm sm:text-base">Menjadi Mitra</span>
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="flex items-center group transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 sm:hover:translate-x-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-600 rounded-full mr-2 sm:mr-3 group-hover:bg-emerald-500 transition-colors"></div>
                  <span className="text-sm sm:text-base">Tentang Kami</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <div className="w-1 h-4 sm:h-6 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full mr-2 sm:mr-3"></div>
              Hubungi Kami
            </h3>
            
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex items-start space-x-2 sm:space-x-3 group">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 group-hover:text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm sm:text-base">Telepon</p>
                  <p className="text-xs sm:text-sm text-gray-400">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 group">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 group-hover:text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm sm:text-base">Email</p>
                  <p className="text-xs sm:text-sm text-gray-400 break-all">info@embikfarm.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 group">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 group-hover:text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm sm:text-base">Lokasi</p>
                  <p className="text-xs sm:text-sm text-gray-400">Gresik, Jawa Timur</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 group">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 group-hover:text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm sm:text-base">Jam Operasional</p>
                  <p className="text-xs sm:text-sm text-gray-400">08:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">Follow Us</h4>
              <div className="flex space-x-2 sm:space-x-3">
                <Link
                  href="#"
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Facebook className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-hover:text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700/50 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  Dapatkan Update Terbaru
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                  Berlangganan newsletter untuk info promo dan produk terbaru
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="bg-gray-700 border border-gray-600 rounded-l-lg sm:rounded-l-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 flex-1 md:w-48 lg:w-64"
                />
                <button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-r-lg sm:rounded-r-xl transition-all duration-300 font-semibold hover:shadow-lg text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-4 sm:pt-6 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 space-y-3 md:space-y-0">
          <div>
            <p>© {new Date().getFullYear()} EMBIK FARM. Semua Hak Dilindungi.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-3 sm:space-x-6">
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">
              Syarat & Ketentuan
            </Link>
            <Link href="/sitemap" className="hover:text-emerald-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}