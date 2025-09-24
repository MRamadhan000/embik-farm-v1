"use client";

import React from "react";
import PartnershipCard from "./PartnershipCard";
import SectionHeader from "./SectionHeader";

export default function CTASelectionv1() {
  return (
    <main className="bg-white">
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16">
        {/* Header */}
        <SectionHeader
          title="Kemitraan yang Bernilai"
          description="Bangun hubungan jangka panjang dengan menjadi bagian dari perjalanan kami. Dapatkan keuntungan sekaligus memberikan dampak positif."
        />

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
          <PartnershipCard
            title="Reseller Partner"
            description="Mulai bisnis dengan modal minimal. Jual produk kambing berkualitas tinggi dengan margin keuntungan menarik."
            benefits={[
              "Komisi hingga 25% per transaksi",
              "Material marketing gratis",
              "Pelatihan & mentoring",
            ]}
            badge="POPULER"
            buttonText="Daftar Sebagai Reseller"
            buttonLink="/reseller"
            gradient="bg-gradient-to-br from-blue-500/5 to-blue-600/10"
            icon={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            }
          />

          <PartnershipCard
            title="Sponsor Partner"
            description="Dukung perkembangan peternakan kambing dengan menjadi sponsor. Dapatkan brand visibility dan kontribusi nyata."
            benefits={[
              "Brand visibility maksimal",
              "Publikasi media gratis",
              "Networking bisnis eksklusif",
            ]}
            buttonText="Daftar Sebagai Sponsor"
            buttonLink="/sponsor"
            gradient="bg-gradient-to-br from-purple-500/5 to-blue-600/10"
            badge="EKSKLUSIF"
            icon={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </main>
  );
}
