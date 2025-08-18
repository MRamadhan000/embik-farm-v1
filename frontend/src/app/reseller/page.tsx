'use client'
import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  whatsapp: string;
  address: string;
  selectedProduct: string;
  paymentMethod: string;
}

const ResellerRegistration = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    whatsapp: "",
    address: "",
    selectedProduct: "",
    paymentMethod: "",
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
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const productOptions = [
    "Susu Kambing Fresh 500ml",
    "Susu Kambing Fresh 1 Liter",
    "Paket Susu Kambing Mingguan",
    "Paket Susu Kambing Bulanan",
    "Semua Produk"
  ];

  const paymentMethods = [
    "Transfer Bank",
    "E-Wallet (Dana/OVO/GoPay)",
    "Cash on Delivery (COD)",
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Tanpa Modal Besar",
      description: "Cukup daftar, langsung bisa jual produk"
    },
    {
      icon: "⭐",
      title: "Produk Berkualitas",
      description: "Sudah teruji dan banyak peminatnya"
    },
    {
      icon: "💸",
      title: "Harga Khusus Reseller",
      description: "Dapat potongan harga menarik"
    },
    {
      icon: "📱",
      title: "Dukungan Marketing",
      description: "Kami sediakan materi promosi (poster, katalog, dll)"
    },
    {
      icon: "🎓",
      title: "Pelatihan Gratis",
      description: "Panduan jualan online & strategi promosi"
    },
    {
      icon: "📈",
      title: "Potensi Penghasilan",
      description: "Profit bisa sampai 40% per produk"
    }
  ];

  const testimonials = [
    {
      name: "Sari Wulandari",
      role: "Reseller Jakarta",
      avatar: "SW",
      text: "Alhamdulillah, dalam 3 bulan pertama sudah bisa keuntungan 2-3 juta per bulan!",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Reseller Surabaya",
      avatar: "BS",
      text: "Produknya laku keras, pelanggan selalu repeat order. Mantap!",
      rating: 5
    },
    {
      name: "Indah Permata",
      role: "Reseller Bandung",
      avatar: "IP",
      text: "Support dari tim sangat membantu, belajar strategi marketing jadi mudah.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Apakah harus stok barang sendiri?",
      answer: "Tidak perlu! Kami menggunakan sistem dropship, jadi Anda tidak perlu stok barang."
    },
    {
      question: "Berapa minimal order pertama?",
      answer: "Minimal order pertama hanya 5 produk untuk memulai sebagai reseller."
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer: "Pembayaran fleksibel: transfer bank, e-wallet, atau COD untuk area tertentu."
    },
    {
      question: "Berapa lama proses persetujuan?",
      answer: "Proses persetujuan hanya 1-2 hari kerja setelah pendaftaran lengkap."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-100 rounded-full opacity-40 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full border border-green-200 shadow-sm mb-8">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Peluang Bisnis Terbuka
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
            <span className="block">Daftar Menjadi</span>
            <span className="block text-green-600">
              Reseller Produk Kami
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Isi data di bawah ini untuk bergabung sebagai reseller resmi dan mulai peluang bisnis Anda bersama kami.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Registration Form */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl relative z-10">
              {/* Floating badge */}
              <div className="absolute -top-4 left-8 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg z-20">
                <span className="text-sm font-bold">Daftar Gratis!</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Masukkan nama lengkap Anda"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="contoh@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Alamat Domisili
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Masukkan alamat lengkap Anda"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="selectedProduct" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pilih Produk yang Ingin Dijual
                  </label>
                  <select
                    id="selectedProduct"
                    name="selectedProduct"
                    value={formData.selectedProduct}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Pilih Produk</option>
                    {productOptions.map((product, index) => (
                      <option key={index} value={product}>{product}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-semibold text-gray-700 mb-2">
                    Metode Pembayaran Awal <span className="text-gray-400 text-sm">(opsional)</span>
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  >
                    <option value="">Pilih Metode Pembayaran</option>
                    {paymentMethods.map((method, index) => (
                      <option key={index} value={method}>{method}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Daftar Sekarang
                </button>
              </form>
            </div>

            {/* Decorative elements around form */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-2 rounded-xl shadow-lg transform rotate-12 z-20">
              <div className="text-center">
                <div className="text-xs font-bold">MUDAH</div>
                <div className="text-xs">& Cepat</div>
              </div>
            </div>
            
            <div className="absolute top-32 -left-8 bg-white border border-green-100 px-4 py-3 rounded-2xl shadow-lg transform -rotate-6 z-20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Proses Cepat</span>
              </div>
            </div>

            <div className="absolute bottom-8 -right-8 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-2 rounded-full shadow-lg transform -rotate-12 z-20">
              <span className="text-sm font-bold">Terpercaya</span>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kenapa Harus Jadi Reseller Kami?
              </h2>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Testimoni Reseller Sukses</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
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
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-6 right-6 text-6xl opacity-20">🚀</div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ayo gabung sekarang, jangan tunggu lagi!</h3>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                Ribuan reseller sudah merasakan manfaatnya. Saatnya giliran Anda meraih penghasilan tambahan dengan menjual produk berkualitas kami.
              </p>
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Mulai Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerRegistration;