'use client'
import React from 'react';
import { Leaf } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-emerald-100 rounded-full opacity-20 -translate-y-32 sm:-translate-y-40 lg:-translate-y-48 translate-x-32 sm:translate-x-40 lg:translate-x-48 blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-56 sm:w-64 lg:w-80 h-56 sm:h-64 lg:h-80 bg-green-100 rounded-full opacity-30 translate-y-28 sm:translate-y-32 lg:translate-y-40 -translate-x-28 sm:-translate-x-32 lg:-translate-x-40 blur-xl sm:blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Header */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-100 text-emerald-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
                Peternakan Premium Indonesia
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Tentang </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                  Embik Farm
                </span>
              </h1>
            </div>

            {/* Main Description */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Embik Farm adalah peternakan kambing premium yang berdedikasi menghasilkan{' '}
                <span className="relative inline-block">
                  <span className="text-emerald-600 font-semibold">susu kambing murni</span>
                  <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-1 sm:h-2 bg-emerald-100 -z-10"></div>
                </span>
                {' '}dan produk turunannya yang sehat, segar, dan berkualitas tinggi.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Kami percaya kesehatan dimulai dari asupan{' '}
                <span className="relative inline-block">
                  <span className="text-emerald-600 font-semibold">alami dan bergizi</span>
                  <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-1 sm:h-2 bg-green-100 -z-10"></div>
                </span>
                . Setiap langkah produksi dilakukan dengan standar kualitas ketat untuk memastikan
                kemurnian dan manfaat optimal.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 pt-2 sm:pt-4 overflow-x-auto">
              <div className="text-center flex-shrink-0">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600">100+</div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Kambing Sehat</div>
              </div>
              <div className="w-px h-8 sm:h-10 lg:h-12 bg-gray-200 flex-shrink-0"></div>
              <div className="text-center flex-shrink-0">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600">5+</div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Tahun Pengalaman</div>
              </div>
              <div className="w-px h-8 sm:h-10 lg:h-12 bg-gray-200 flex-shrink-0"></div>
              <div className="text-center flex-shrink-0">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600">1000+</div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Pelanggan Puas</div>
              </div>
            </div>
          </div>

          {/* Right - Image Section */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-2xl sm:rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-lg sm:blur-xl"></div>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img
                  src="/images/hero/heroBg.jpg"
                  alt="Embik Farm - Premium Goat Milk Production"
                  className="w-full h-64 sm:h-80 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 sm:top-8 -right-2 sm:-right-4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-emerald-200 rounded-full opacity-40"></div>
            <div className="absolute -top-2 sm:-top-4 right-8 sm:right-12 lg:right-16 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-green-300 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-16 sm:mt-20 lg:mt-30 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <blockquote className="text-base sm:text-lg lg:text-2xl font-medium text-gray-800 italic mb-3 sm:mb-4 leading-relaxed">
              {`"Kesehatan keluarga dimulai dari pilihan yang tepat, dan susu kambing murni 
              adalah investasi terbaik untuk masa depan yang lebih sehat."`}
            </blockquote>
            <div className="flex items-center justify-center gap-2 text-emerald-600">
              <div className="w-8 sm:w-12 h-px bg-emerald-600"></div>
              <span className="font-semibold text-sm sm:text-base">Tim Embik Farm</span>
              <div className="w-8 sm:w-12 h-px bg-emerald-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutUs);