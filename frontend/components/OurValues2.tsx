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
        ease: easeOut
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
      {/* <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={handleScroll}
          className="group p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 hover:scale-110"
        >
          <ArrowDown className="text-green-600 group-hover:text-green-700 transition-colors" size={20} strokeWidth={2} />
        </button>
      </motion.div> */}

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full border border-green-200 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Komitmen Kami
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent mb-3 leading-snug">
            Our Values
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Tiga pilar utama yang menjadi fondasi dalam menghadirkan produk susu kambing berkualitas terbaik untuk Anda
          </p>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          id="values"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                <div className="relative z-10">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {value.highlight}
                  </div>
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`p-5 rounded-xl bg-gradient-to-br ${value.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <value.icon
                          className="w-10 h-10 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${value.color} opacity-30 scale-110 animate-pulse group-hover:animate-none`}></div>
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {value.desc}
                  </p>
                  <div className={`mt-4 h-0.5 bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
