"use client";
import { Milk, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/SectionHeader";

export default function OurValues() {
  const values = [
    {
      icon: Milk,
      title: "Segar & Alami",
      desc: "Susu kambing segar tanpa pengawet, langsung dari peternakan kami untuk menjaga cita rasa dan nutrisi terbaik.",
    },
    {
      icon: ShieldCheck,
      title: "Nutrisi Berkualitas Tinggi",
      desc: "Kaya akan protein, kalsium, dan vitamin untuk mendukung kesehatan tulang serta daya tahan tubuh keluarga.",
    },
    {
      icon: HeartHandshake,
      title: "Etis & Berkelanjutan",
      desc: "Diproduksi dengan metode ramah lingkungan dan mengutamakan kesejahteraan hewan ternak dengan standar tinggi.",
    },
  ];

  // Ref untuk observer
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });

  // Variants untuk animasi
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2, // buat delay tiap child
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen bg-white px-3 sm:px-4 md:px-6 py-12 sm:py-16 flex flex-col justify-center">
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <SectionHeader
            title="Our Values"
            description="Tiga pilar utama yang menjadi fondasi dalam menghadirkan produk susu kambing berkualitas terbaik untuk Anda"
          />
        </motion.div>

        {/* Values Cards */}
        <motion.div
          ref={cardsRef}
          variants={container}
          initial="hidden"
          animate={cardsInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="relative bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-md hover:bg-green-600 transition-all duration-300">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl bg-green-100 group-hover:bg-green-500 transition-colors duration-300">
                    <value.icon
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-600 group-hover:text-white transition-colors duration-300"
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 group-hover:text-white mb-2 sm:mb-3 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}