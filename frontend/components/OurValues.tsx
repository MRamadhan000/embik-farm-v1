"use client";
import { Milk, ShieldCheck, HeartHandshake, ArrowDown, Sparkles } from "lucide-react";
import { motion, easeOut } from "framer-motion";

export default function OurValues() {
  const values = [
    {
      icon: Milk,
      title: "Segar & Alami",
      desc: "Susu kambing segar tanpa pengawet, langsung dari peternakan kami untuk menjaga cita rasa dan nutrisi terbaik.",
      highlight: "100% Natural",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: ShieldCheck,
      title: "Nutrisi Berkualitas Tinggi",
      desc: "Kaya akan protein, kalsium, dan vitamin untuk mendukung kesehatan tulang serta daya tahan tubuh keluarga.",
      highlight: "Premium Quality",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: HeartHandshake,
      title: "Etis & Berkelanjutan",
      desc: "Diproduksi dengan metode ramah lingkungan dan mengutamakan kesejahteraan hewan ternak dengan standar tinggi.",
      highlight: "Sustainable",
      color: "from-purple-500 to-indigo-600"
    },
  ];

  const handleScroll = () => {
    const target = document.getElementById("values");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut // ✅ langsung dari import
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-green-50 to-green-200 px-6 py-16 flex flex-col justify-center overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-100/20 to-blue-100/20 rounded-full blur-3xl"></div>

      {/* Animated scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={handleScroll}
          className="group p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 hover:scale-110"
        >
          <ArrowDown className="text-green-600 group-hover:text-green-700 transition-colors" size={24} strokeWidth={2} />
        </button>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full border border-green-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Komitmen Kami
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent mb-4 leading-tight">
            Our Values
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tiga pilar utama yang menjadi fondasi dalam menghadirkan produk susu kambing berkualitas terbaik untuk Anda
          </p>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          id="values"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 w-full max-w-6xl"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-3xl p-8 lg:p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Highlight badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {value.highlight}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      {/* Icon background */}
                      <div className={`p-6 rounded-2xl bg-gradient-to-br ${value.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <value.icon
                          className="w-12 h-12 text-white"
                          strokeWidth={2}
                        />
                      </div>

                      {/* Pulse effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-30 scale-110 animate-pulse group-hover:animate-none`}></div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-white mb-4 transition-colors duration-500">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white/90 leading-relaxed text-base lg:text-lg transition-colors duration-500">
                    {value.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`mt-6 h-1 bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute top-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Card reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex items-center justify-center space-x-2"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </motion.div>
      </div>
    </section>
  );
}