import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 pt-24 pb-20 min-h-[70vh] flex items-center overflow-hidden text-white">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-green-400 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">

        {/* === LEFT CONTENT === */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-white text-sm font-semibold rounded-full border border-green-300/40 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Murni & Berkualitas
          </div>

          {/* Primary heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="block">Susu Kambing</span>
              <span className="block text-green-200">
                Segar & Berkualitas
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-green-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Kami menghadirkan susu kambing murni langsung dari peternakan kami,
              diproses higienis tanpa bahan pengawet untuk kesehatan keluarga Anda.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-lg mx-auto lg:mx-0">
            <Link
              href="/order"
              className="group relative px-8 py-4 bg-white text-green-800 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto text-center"
            >
              Pesan Sekarang
            </Link>

            <Link
              href="/product"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-green-800 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Lihat Produk
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-4">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">347+</span>
                <span className="text-sm">Pelanggan</span>
              </div>
              <span className="text-xs text-green-200">Puas dengan produk kami</span>
            </div>

            <div className="hidden sm:block w-px h-12 bg-green-300/40"></div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center space-x-1">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
                <span className="text-sm font-semibold ml-1">5.0</span>
              </div>
              <span className="text-xs text-green-200">Rating tertinggi</span>
            </div>
          </div>
        </div>

        {/* === RIGHT CONTENT (Image) === */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/hero-susu-kambing.png"
              alt="Produk Susu Kambing Embik Farm - Segar dan Berkualitas Tinggi"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg"
              priority
            />
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12">
              <span className="text-sm font-bold">Fresh!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;