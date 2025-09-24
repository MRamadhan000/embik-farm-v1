'use client'
import React, { useState } from "react";
import ApplyForm from "../components/ApplyForm";
import ProductTableDynamic from "../components/ProductTableDynamic";
import TestimonialCard from "../components/TestimonialCard";
import InfoCard from "../components/InfoCard";
import { FormData } from "../components/ApplyForm";

interface Product {
  name: string;
  consumerPrice: string;
  resellerPrice: string;
  margin: number;
  [key: string]: string | number; // 👈 ini yang bikin dia cocok dengan Record
}

const products: Product[] = [
  { name: "Produk A", consumerPrice: "50.000", resellerPrice: "40.000", margin: 10000 },
  { name: "Produk B", consumerPrice: "30.000", resellerPrice: "25.000", margin: 4000 },
  { name: "Produk C", consumerPrice: "100.000", resellerPrice: "80.000", margin: 20000 },
];
const ResellerRegistration = () => {

  const handleFormSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const productOptions = [
    "Susu Kambing Fresh 500ml",
    "Susu Kambing Fresh 1 Liter",
    "Paket Susu Kambing Mingguan",
    "Paket Susu Kambing Bulanan",
    "Semua Produk"
  ];


  const benefits = [
    { icon: "💰", title: "Tanpa Modal Besar", description: "Cukup daftar, langsung bisa jual produk", color: "from-amber-50 to-orange-50 border-amber-200" },
    { icon: "⭐", title: "Produk Berkualitas", description: "Sudah teruji dan banyak peminatnya", color: "from-blue-50 to-indigo-50 border-blue-200" },
    { icon: "💸", title: "Harga Khusus Reseller", description: "Dapat potongan harga menarik", color: "from-emerald-50 to-green-50 border-emerald-200" },
    { icon: "📱", title: "Dukungan Marketing", description: "Kami sediakan materi promosi (poster, katalog, dll)", color: "from-purple-50 to-violet-50 border-purple-200" },
    { icon: "🎓", title: "Pelatihan Gratis", description: "Panduan jualan online & strategi promosi", color: "from-rose-50 to-pink-50 border-rose-200" },
    { icon: "📈", title: "Potensi Penghasilan", description: "Profit bisa sampai 40% per produk", color: "from-teal-50 to-cyan-50 border-teal-200" }
  ];

  const testimonials = [
    { name: "Sari Wulandari", role: "Reseller Jakarta", avatar: "SW", text: "Alhamdulillah, dalam 3 bulan pertama sudah bisa keuntungan 2-3 juta per bulan!", rating: 5 },
    { name: "Budi Santoso", role: "Reseller Surabaya", avatar: "BS", text: "Produknya laku keras, pelanggan selalu repeat order. Mantap!", rating: 5 },
    { name: "Indah Permata", role: "Reseller Bandung", avatar: "IP", text: "Support dari tim sangat membantu, belajar strategi marketing jadi mudah.", rating: 5 }
  ];

  const faqs = [
    { question: "Apakah harus stok barang sendiri?", answer: "Tidak perlu! Kami menggunakan sistem dropship, jadi Anda tidak perlu stok barang." },
    { question: "Berapa minimal order pertama?", answer: "Minimal order pertama hanya 5 produk untuk memulai sebagai reseller." },
    { question: "Bagaimana sistem pembayarannya?", answer: "Pembayaran fleksibel: transfer bank, e-wallet, atau COD untuk area tertentu." },
    { question: "Berapa lama proses persetujuan?", answer: "Proses persetujuan hanya 1-2 hari kerja setelah pendaftaran lengkap." }
  ];

  const resellerDetails = {
    products: [
      { name: "Susu Kambing 1 Liter", consumerPrice: "Rp40.000", resellerPrice: "Rp30.000", margin: "Rp10.000" },
      { name: "Susu Kambing 250 ml", consumerPrice: "Rp13.000", resellerPrice: "Rp10.000", margin: "Rp3.000" },
      { name: "Ice Cream Susu Kambing", consumerPrice: "Rp5.000", resellerPrice: "Rp4.000", margin: "Rp1.000" },
    ],
    requirements: [
      "Memiliki kulkas/freezer untuk menjaga kualitas produk",
      "Minimal pembelian pertama: 5 liter susu kambing, atau 6 botol 250ml, atau 10 cup ice cream",
      "Bersedia menjual sesuai harga eceran tertinggi (HET) yang ditetapkan",
      "Aktif melakukan promosi offline/online"
    ],
    benefits: [
      "Mendapat harga khusus reseller dengan margin tetap",
      "Garansi produk → jika ada produk rusak/basi dalam 1 hari setelah diterima, diganti dengan produk baru",
      "Banner promosi & publikasi di media sosial oleh Embik Farm",
      "Terdaftar sebagai reseller resmi GEMIK",
      "Prioritas mendapatkan produk baru (misalnya yogurt susu kambing)"
    ],
    ordering: [
      "Pemesanan dicatat setiap minggu, dengan jadwal pengiriman rutin setiap hari Minggu",
      "Ongkir ditanggung bersama → dibagi 2 antara Embik Farm dan reseller",
      "Sistem pembayaran: transfer penuh sebelum pengiriman",
      "Produk bisa diambil langsung di Embik Farm bila reseller ingin tanpa ongkir"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-teal-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full border border-emerald-200 shadow-sm mb-8 backdrop-blur-sm">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Peluang Bisnis Terbuka
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 mb-8">
            <span className="block">Daftar Menjadi</span>
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Reseller Resmi
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Bergabunglah dengan ribuan reseller sukses dan raih penghasilan tambahan dengan produk berkualitas tinggi
          </p>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Mulai Daftar Sekarang</span>
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Product Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <span className="text-emerald-600">Harga</span> & Margin Reseller
            </h2>
            <p className="text-xl text-slate-600">Dapatkan profit yang menguntungkan dari setiap penjualan</p>
          </div>

          <ProductTableDynamic<Product>
            data={products}
            columns={[
              { key: "name", label: "Produk" },
              { key: "consumerPrice", label: "Harga Konsumen", align: "center" },
              { key: "resellerPrice", label: "Harga Reseller", align: "center" },
              {
                key: "margin",
                label: "Profit Anda",
                align: "center",
                getClassName: () => "text-teal-600 bg-teal-50",
                render: (value) => (value as number).toLocaleString("id-ID"),
              },
            ]}
          />
        </div>
      </section>

      {/* Requirements & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <InfoCard
              title="Syarat Menjadi Reseller"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              bgColor="bg-slate-50"
              borderColor="border-slate-200"
              accentBg="bg-slate-600"
              listIconBg="bg-emerald-500"
              points={resellerDetails.requirements}
            />

            {/* Benefits */}
            <InfoCard
              title="Benefit untuk Reseller"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              }
              bgColor="bg-gradient-to-br from-emerald-50 to-teal-50"
              borderColor="border-emerald-200"
              accentBg="bg-gradient-to-r from-emerald-500 to-teal-500"
              listIconBg="bg-gradient-to-r from-emerald-500 to-teal-500"
              points={resellerDetails.benefits}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Testimoni <span className="text-emerald-600">Reseller Sukses</span>
            </h2>
            <p className="text-xl text-slate-600">Dengar langsung dari mereka yang sudah merasakan manfaatnya</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* System Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Sistem <span className="text-emerald-600">Pemesanan & Pengiriman</span>
            </h2>
            <p className="text-xl text-slate-600">Proses yang mudah dan terpercaya untuk kelancaran bisnis Anda</p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-200 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {resellerDetails.ordering.map((order, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed">{order}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <span className="text-emerald-600">Frequently</span> Asked Questions
            </h2>
            <p className="text-xl text-slate-600">Pertanyaan yang sering ditanyakan calon reseller</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-start">
                  <span className="text-emerald-600 mr-2">Q:</span>
                  {faq.question}
                </h4>
                <p className="text-slate-600 leading-relaxed pl-6">
                  <span className="text-teal-600 font-semibold">A:</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Form */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            Siap Memulai <span className="text-emerald-100">Perjalanan Sukses</span> Anda?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Ribuan reseller sudah merasakan manfaatnya. Jangan sampai Anda ketinggalan kesempatan emas ini untuk meraih penghasilan tambahan yang menggiurkan!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="flex items-center text-emerald-100">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Proses Persetujuan 1-2 Hari
            </div>
            <div className="flex items-center text-emerald-100">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Profit Hingga 40%
            </div>
            <div className="flex items-center text-emerald-100">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Support Penuh Tim
            </div>
          </div>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center px-10 py-5 bg-white hover:bg-slate-50 text-emerald-600 font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <span>Isi Formulir Sekarang</span>
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration-form" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <span className="text-emerald-600">Daftar</span> Sekarang Juga!
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Isi formulir di bawah ini dengan lengkap untuk memulai perjalanan bisnis Anda bersama kami
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ApplyForm
              productOptions={productOptions}
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResellerRegistration;