'use client'
import React, { useState } from "react";
import Image from "next/image";

interface SponsorFormData {
  companyName: string;
  email: string;
  contact: string;
  address: string;
  cooperationType: string;
  sponsorPackage: string;
  additionalMessage: string;
}

const SponsorRegistration = () => {
  const [formData, setFormData] = useState<SponsorFormData>({
    companyName: "",
    email: "",
    contact: "",
    address: "",
    cooperationType: "",
    sponsorPackage: "",
    additionalMessage: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sponsor form submitted:", formData);
    // Handle form submission here
  };

  const cooperationTypes = [
    "Sponsor Produk",
    "Sponsor Event",
    "Sponsor Branding",
    "Kolaborasi Bisnis",
    "Sponsor Media & Publikasi",
    "Kerjasama Strategis"
  ];

  const sponsorPackages = [
    "Bronze Package (1-5 juta)",
    "Silver Package (5-15 juta)",
    "Gold Package (15-50 juta)",
    "Platinum Package (50 juta+)",
    "Sponsor Non-Tunai (Barang/Layanan)",
    "Custom Package"
  ];

  const benefits = [
    {
      icon: "👁️",
      title: "Brand Visibility",
      description: "Logo sponsor ditampilkan di berbagai media promosi"
    },
    {
      icon: "🤝",
      title: "Kolaborasi Jangka Panjang",
      description: "Kesempatan kerja sama strategis berkelanjutan"
    },
    {
      icon: "⭐",
      title: "Peningkatan Reputasi",
      description: "Mendukung UMKM lokal & usaha berbasis komunitas"
    },
    {
      icon: "📢",
      title: "Media Publikasi Gratis",
      description: "Promosi brand Anda melalui event & kegiatan kami"
    },
    {
      icon: "🌐",
      title: "Akses Jaringan Bisnis",
      description: "Bertemu dengan pelaku usaha lain untuk potensi kerjasama baru"
    },
    {
      icon: "🏆",
      title: "Kontribusi Nyata",
      description: "Ikut mendukung pertumbuhan ekonomi lokal"
    }
  ];

  const testimonials = [
    {
      name: "PT. Berkah Sejahtera",
      role: "Sponsor Gold",
      avatar: "BS",
      text: "Sejak bermitra, brand kami lebih dikenal masyarakat dan penjualan meningkat 35%.",
      rating: 5
    },
    {
      name: "CV. Maju Bersama",
      role: "Sponsor Event",
      avatar: "MB",
      text: "Kolaborasi ini sangat membantu exposure produk kami ke target market yang tepat.",
      rating: 5
    },
    {
      name: "Toko Modern Sentosa",
      role: "Sponsor Produk",
      avatar: "MS",
      text: "Kerjasama yang saling menguntungkan, customer awareness brand kami naik drastis.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Apakah bisa menjadi sponsor tanpa berbentuk uang?",
      answer: "Tentu saja! Kami menerima sponsor dalam bentuk barang, layanan, atau fasilitas yang mendukung operasional bisnis kami."
    },
    {
      question: "Apakah ada paket sponsor yang bisa dipilih?",
      answer: "Ya, kami menyediakan berbagai paket sponsor mulai dari Bronze hingga Platinum, serta custom package sesuai kebutuhan."
    },
    {
      question: "Apakah kerja sama bisa jangka panjang?",
      answer: "Sangat bisa! Kami lebih mengutamakan kerjasama jangka panjang untuk membangun hubungan bisnis yang saling menguntungkan."
    },
    {
      question: "Apa saja benefit yang didapat sponsor?",
      answer: "Brand visibility, publikasi gratis, networking, dan berbagai keuntungan promosi sesuai dengan paket sponsor yang dipilih."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-40 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200 shadow-sm mb-8">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            Peluang Kerjasama Strategis
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
            <span className="block">Daftar Menjadi</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sponsor / Mitra Usaha Kami
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Isi data di bawah ini untuk bergabung mendukung dan berkolaborasi bersama kami dalam mengembangkan bisnis yang saling menguntungkan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Registration Form */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl relative z-10">
              {/* Floating badge */}
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg z-20">
                <span className="text-sm font-bold">Kerjasama Eksklusif!</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap / Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="PT. Nama Perusahaan atau Nama Pribadi"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="email@perusahaan.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor WhatsApp / Kontak
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Alamat / Domisili
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Alamat lengkap perusahaan atau domisili"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cooperationType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Jenis Kerjasama
                  </label>
                  <select
                    id="cooperationType"
                    name="cooperationType"
                    value={formData.cooperationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Pilih Jenis Kerjasama</option>
                    {cooperationTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="sponsorPackage" className="block text-sm font-semibold text-gray-700 mb-2">
                    Besaran Dukungan / Paket Sponsor <span className="text-gray-400 text-sm">(opsional)</span>
                  </label>
                  <select
                    id="sponsorPackage"
                    name="sponsorPackage"
                    value={formData.sponsorPackage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Pilih Paket Sponsor</option>
                    {sponsorPackages.map((packageType, index) => (
                      <option key={index} value={packageType}>{packageType}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="additionalMessage" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan atau Catatan Tambahan
                  </label>
                  <textarea
                    id="additionalMessage"
                    name="additionalMessage"
                    value={formData.additionalMessage}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Ceritakan lebih detail tentang bentuk kerjasama yang diinginkan..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Gabung sebagai Sponsor
                </button>
              </form>
            </div>

            {/* Decorative elements around form */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-2 rounded-xl shadow-lg transform rotate-12 z-20">
              <div className="text-center">
                <div className="text-xs font-bold">EKSKLUSIF</div>
                <div className="text-xs">Partnership</div>
              </div>
            </div>
            
            <div className="absolute top-32 -left-8 bg-white border border-blue-100 px-4 py-3 rounded-2xl shadow-lg transform -rotate-6 z-20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Mutual Benefit</span>
              </div>
            </div>

            <div className="absolute bottom-8 -right-8 bg-gradient-to-r from-green-500 to-teal-600 text-white px-3 py-2 rounded-full shadow-lg transform -rotate-12 z-20">
              <span className="text-sm font-bold">Win-Win</span>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kenapa Harus Jadi Sponsor / Mitra Kami?
              </h2>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-2xl">{benefit.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Testimoni Mitra / Sponsor Sebelumnya</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-1 mb-2">
                          {Array(testimonial.rating).fill(0).map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 text-sm mb-2">"{testimonial.text}"</p>
                        <div className="text-sm">
                          <span className="font-semibold text-gray-900">{testimonial.name}</span>
                          <span className="text-gray-500"> - {testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-6 right-6 text-6xl opacity-20">🚀</div>
            <div className="absolute top-12 left-12 text-4xl opacity-20">🤝</div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Bergabunglah sebagai sponsor, dukung usaha lokal & kembangkan brand Anda!</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Ratusan brand ternama sudah merasakan manfaat kerjasama dengan kami. Mari bergabung dalam ekosistem bisnis yang saling mendukung dan menguntungkan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Mulai Bermitra Sekarang
                </button>
                <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Download Partnership Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorRegistration;