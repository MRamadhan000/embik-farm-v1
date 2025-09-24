'use client'

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Title & Description */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Tentang </span>
              <span className="text-emerald-600">Embik Farm</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mb-4">
              Embik Farm adalah peternakan kambing premium yang berdedikasi menghasilkan{' '}
              <span className="text-emerald-600 font-medium">susu kambing murni</span> 
              {' '}dan produk turunannya yang{' '}
              <span className="text-emerald-600 font-medium">sehat</span>, segar, 
              dan berkualitas tinggi. Kami percaya kesehatan dimulai dari asupan{' '}
              <span className="text-emerald-600 font-medium">alami</span> dan bergizi.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mb-4">
              Setiap langkah produksi kami dilakukan dengan standar kualitas yang ketat, 
              mulai dari pemeliharaan kambing dengan pakan alami, proses pemerahan yang higienis, 
              hingga distribusi produk yang selalu terjaga kesegarannya. Dengan pendekatan ini, 
              kami ingin memastikan bahwa setiap tetes susu yang sampai ke tangan Anda benar-benar{' '}
              <span className="text-emerald-600 font-medium">murni</span> dan penuh manfaat.
            </p>

          </div>

          {/* Right - Image */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1577900077483-6c798b0a8760?auto=format&fit=crop&w=1000&q=80"
                alt="Embik Farm - Premium Goat Milk Production"
                className="w-full h-[380px] sm:h-[440px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutUs);