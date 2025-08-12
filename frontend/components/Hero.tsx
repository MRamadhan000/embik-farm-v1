import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gray-50 pt-20 pb-16 min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        
        {/* === LEFT CONTENT === */}
        <div className="w-full md:w-1/2">
          {/* Primary heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Susu Kambing Segar & Berkualitas
          </h1>

          {/* Secondary description */}
          <p className="text-gray-600 mt-6">
            Kami menghadirkan susu kambing murni langsung dari peternakan kami,
            diproses higienis tanpa bahan pengawet.
          </p>

          {/* CTA + Users */}
          <div className="mt-10 flex items-center gap-10">
            {/* Button */}
            <Link
              href="/order"
              className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
            >
              Pesan Sekarang
            </Link>

            {/* Users info */}
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">
                347+ pelanggan puas
              </span>
              {/* Rating stars */}
              <div className="flex mt-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* === RIGHT CONTENT (Image) === */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/hero-susu-kambing.png"
            alt="Produk Susu Kambing Embik Farm"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;