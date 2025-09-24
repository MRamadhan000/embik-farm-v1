"use client";
import React from "react";
import InfoCard from "../components/InfoCard";
import ApplyForm from "../components/ApplyForm";
import { DollarSign, Factory, Building2, Milk, Scale } from "lucide-react";

const MitraPage = () => {
  const skema = [
    {
      title: "Investor",
      icon: <DollarSign className="w-6 h-6 text-white-600" />,
      color: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        accent: "bg-emerald-600",
        listIcon: "bg-emerald-500",
      },
      points: [
        "Menyediakan modal untuk pembelian kambing",
        "Menerima keuntungan hasil penjualan kambing",
        "Mendapatkan bagian hasil reproduksi sesuai perjanjian",
      ],
    },
    {
      title: "Peternak",
      icon: <Factory className="w-6 h-6 text-white-600" />,
      color: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        accent: "bg-amber-600",
        listIcon: "bg-amber-500",
      },
      points: [
        "Bertanggung jawab atas pemeliharaan kambing",
        "Menerima keuntungan hasil penjualan kambing",
        "Mendapatkan bagian anak kambing sesuai perjanjian",
      ],
    },
    {
      title: "Embik Farm",
      icon: <Building2 className="w-6 h-6 text-white-700" />,
      color: {
        bg: "bg-slate-50",
        border: "border-slate-200",
        accent: "bg-slate-700",
        listIcon: "bg-slate-500",
      },
      points: [
        "Sebagai penghubung antara investor dan peternak",
        "Melakukan pengawasan sistem kemitraan",
        "Menerima fee Rp100.000 dari masing-masing pihak per transaksi",
      ],
    },
  ];

  const perjanjian = [
    {
      title: "Laktasi Pertama",
      icon: <Milk className="w-6 h-6 text-white-600" />,
      points: ["Anak kambing sepenuhnya menjadi milik peternak"],
    },
    {
      title: "Laktasi Kedua dan Seterusnya",
      icon: <Scale className="w-6 h-6 text-white-600" />,
      points: [
        "Anak kambing dibagi 50% untuk peternak dan 50% untuk investor",
        "Embik Farm tetap menerima fee Rp100.000 dari masing-masing pihak",
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl font-black text-slate-900 mb-6">
            Kemitraan Kambing <span className="text-amber-600">Embik Farm</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Bergabunglah dalam sistem kemitraan yang adil antara{" "}
            <span className="font-semibold">Investor</span>,{" "}
            <span className="font-semibold">Peternak</span>, dan{" "}
            <span className="font-semibold">Embik Farm</span>.
          </p>
          <button
            onClick={() =>
              document.getElementById("skema")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-10 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            Lihat Skema Kemitraan
          </button>
        </div>
      </section>

      {/* Skema Kemitraan */}
      <section id="skema" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Skema <span className="text-amber-600">Kemitraan</span>
            </h2>
            <p className="text-lg text-slate-600">
              Tiga pihak yang terlibat dalam sistem kemitraan Embik Farm
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skema.map((item, i) => (
              <InfoCard
                key={i}
                title={item.title}
                icon={item.icon}
                bgColor={item.color.bg}
                borderColor={item.color.border}
                accentBg={item.color.accent}
                listIconBg={item.color.listIcon}
                points={item.points}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Perjanjian Reproduksi */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Perjanjian <span className="text-amber-600">Reproduksi</span>
            </h2>
            <p className="text-lg text-slate-600">
              Kesepakatan pembagian anak kambing dari indukan
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {perjanjian.map((item, i) => (
              <InfoCard
                key={i}
                title={item.title}
                icon={item.icon}
                bgColor="bg-white"
                borderColor="border-slate-200"
                accentBg="bg-amber-600"
                listIconBg="bg-amber-500"
                points={item.points}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MoU Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Nota Kesepahaman (MoU)
          </h2>
          <p className="text-slate-600 mb-8">
            MoU ini mengikat antara Investor, Peternak, dan Embik Farm dengan
            ketentuan modal, bagi hasil, dan pembagian reproduksi kambing.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            Download MoU (PDF)
          </button>
        </div>
      </section>

      {/* Form Kemitraan */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Bergabung Menjadi Mitra
            </h2>
            <p className="text-lg text-slate-600">
              Isi formulir berikut untuk mendaftar sebagai{" "}
              <span className="font-semibold">Investor</span> atau{" "}
              <span className="font-semibold">Peternak</span>.
            </p>
          </div>
          <ApplyForm
            productOptions={["Kemitraan - Investor", "Kemitraan - Peternak"]}
            onSubmit={(data: any) => console.log("Mitra form submitted:", data)}
          />
        </div>
      </section>
    </main>
  );
};

export default MitraPage;