import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-16">
      {/* Subtle Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-lime-100/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-emerald-600">Embik Farm</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Embik Farm adalah peternakan kambing premium yang berdedikasi menghasilkan susu kambing murni dan produk turunannya yang sehat, segar, dan berkualitas tinggi. Kami percaya kesehatan dimulai dari asupan alami dan bergizi.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-emerald-600 mb-2">Nilai Kami</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kualitas, kejujuran, dan keberlanjutan adalah pilar utama kami dalam setiap proses produksi.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-emerald-600 mb-2">Misi Kami</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Menyediakan produk susu kambing yang menyehatkan, terjangkau, dan bermanfaat bagi masyarakat luas.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1577900077483-6c798b0a8760?auto=format&fit=crop&w=1000&q=80"
                alt="Embik Farm - Premium Goat Milk Production"
                className="w-full h-[400px] sm:h-[450px] object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 left-4 bg-white rounded-lg shadow-md px-4 py-2 flex items-center gap-3 border border-gray-100">
              <span className="text-emerald-600 text-lg font-semibold">100%</span>
              <span className="text-gray-600 text-sm font-medium">Susu Kambing Murni</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-emerald-600">5+</div>
            <div className="text-sm text-gray-500 uppercase">Tahun Pengalaman</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">100+</div>
            <div className="text-sm text-gray-500 uppercase">Kambing Sehat</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">500+</div>
            <div className="text-sm text-gray-500 uppercase">Pelanggan Puas</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default React.memo(AboutUs);