// app/components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, Award, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text">
                  EMBIK FARM
                </h2>
                <p className="text-sm text-emerald-400 font-medium">Premium Goat Farming</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Penyedia produk kambing berkualitas tinggi dan segar langsung dari peternakan modern. 
              Dipercaya oleh ribuan pelanggan di seluruh Indonesia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-emerald-400">500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Pelanggan</div>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-emerald-400">50+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Mitra</div>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-emerald-400">5</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Tahun</div>
              </div>
            </div>

            {/* Awards */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-full border border-gray-700/50">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-400">Certified Organic</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-full border border-gray-700/50">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-gray-400">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full mr-3"></div>
              Menu Utama
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center group transition-all duration-300 hover:text-emerald-400 hover:translate-x-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-emerald-500 transition-colors"></div>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/produk" className="flex items-center group transition-all duration-300 hover:text-emerald-400 hover:translate-x-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-emerald-500 transition-colors"></div>
                  Produk Kami
                </Link>
              </li>
              <li>
                <Link href="/reseller" className="flex items-center group transition-all duration-300 hover:text-emerald-400 hover:translate-x-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-emerald-500 transition-colors"></div>
                  Menjadi Reseller
                </Link>
              </li>
              <li>
                <Link href="/mitra" className="flex items-center group transition-all duration-300 hover:text-emerald-400 hover:translate-x-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-emerald-500 transition-colors"></div>
                  Menjadi Mitra
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="flex items-center group transition-all duration-300 hover:text-emerald-400 hover:translate-x-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-emerald-500 transition-colors"></div>
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full mr-3"></div>
              Hubungi Kami
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Telepon</p>
                  <p className="text-sm text-gray-400">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm text-gray-400">info@embikfarm.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <MapPin className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Lokasi</p>
                  <p className="text-sm text-gray-400">Gresik, Jawa Timur</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Clock className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Jam Operasional</p>
                  <p className="text-sm text-gray-400">08:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Follow Us</h4>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700/50 pt-8 mb-8">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-xl font-bold text-white mb-2">
                  Dapatkan Update Terbaru
                </h4>
                <p className="text-gray-400">
                  Berlangganan newsletter untuk info promo dan produk terbaru
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="bg-gray-700 border border-gray-600 rounded-l-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 flex-1 md:w-64"
                />
                <button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-6 py-3 rounded-r-xl transition-all duration-300 font-semibold hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} EMBIK FARM. Semua Hak Dilindungi.</p>
          </div>
          <div className="flex space-x-6">
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