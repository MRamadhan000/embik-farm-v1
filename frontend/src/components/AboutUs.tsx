  'use client'
  import React from 'react';
  import { Leaf } from 'lucide-react';

  const AboutUs: React.FC = () => {
    return (
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-20 -translate-y-48 translate-x-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-100 rounded-full opacity-30 translate-y-40 -translate-x-40 blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  Peternakan Premium Indonesia
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Tentang </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                    Embik Farm
                  </span>
                </h1>
              </div>

              {/* Main Description */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Embik Farm adalah peternakan kambing premium yang berdedikasi menghasilkan{' '}
                  <span className="relative inline-block">
                    <span className="text-emerald-600 font-semibold">susu kambing murni</span>
                    <div className="absolute -bottom-1 left-0 w-full h-2 bg-emerald-100 -z-10"></div>
                  </span>
                  {' '}dan produk turunannya yang sehat, segar, dan berkualitas tinggi.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Kami percaya kesehatan dimulai dari asupan{' '}
                  <span className="relative inline-block">
                    <span className="text-emerald-600 font-semibold">alami dan bergizi</span>
                    <div className="absolute -bottom-1 left-0 w-full h-2 bg-green-100 -z-10"></div>
                  </span>
                  . Setiap langkah produksi dilakukan dengan standar kualitas ketat untuk memastikan
                  kemurnian dan manfaat optimal.
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">100+</div>
                  <div className="text-sm text-gray-600">Kambing Sehat</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">1000+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
              </div>
            </div>

            {/* Right - Image Section */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1577900077483-6c798b0a8760?auto=format&fit=crop&w=1000&q=80"
                    alt="Embik Farm - Premium Goat Milk Production"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 -right-4 w-20 h-20 bg-emerald-200 rounded-full opacity-40"></div>
              <div className="absolute -top-4 right-16 w-12 h-12 bg-green-300 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Bottom Quote Section */}
          <div className="mt-30 text-center">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl font-medium text-gray-800 italic mb-4">
                {`"Kesehatan keluarga dimulai dari pilihan yang tepat, dan susu kambing murni 
                adalah investasi terbaik untuk masa depan yang lebih sehat."`}
              </blockquote>
              <div className="flex items-center justify-center gap-2 text-emerald-600">
                <div className="w-12 h-px bg-emerald-600"></div>
                <span className="font-semibold">Tim Embik Farm</span>
                <div className="w-12 h-px bg-emerald-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default React.memo(AboutUs);