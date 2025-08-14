"use client";
import { Milk, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { motion, easeOut, useInView } from "framer-motion";
import { useRef } from "react";

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

  // Refs for scroll detection
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  
  // Scroll detection hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: easeOut
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
        delay: 0.2
      }
    }
  };

  const ornamentVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
    },
    visible: {
      opacity: 0.4,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: easeOut,
        delay: 0.5
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-white px-6 py-16 flex flex-col justify-center overflow-hidden">

      {/* Ornamen bulat kiri atas dengan animasi */}
      <motion.div
        variants={ornamentVariants}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"
      ></motion.div>
      
      {/* Ornamen bulat kanan bawah dengan animasi */}
      <motion.div
        variants={ornamentVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
      ></motion.div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="mb-12"
        >
          {/* Badge dengan animasi khusus */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center px-3 py-1.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full border border-green-200 shadow-sm mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Komitmen Kami
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent mb-3 leading-snug"
          >
            Our Values
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed"
          >
            Tiga pilar utama yang menjadi fondasi dalam menghadirkan produk susu kambing berkualitas terbaik untuk Anda
          </motion.p>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          ref={cardsRef}
          id="values"
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                    animate={cardsInView ? { opacity: 1, scale: 1, rotate: 12 } : { opacity: 0, scale: 0, rotate: -90 }}
                    transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {value.highlight}
                  </motion.div>
                  
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 6,
                          transition: { duration: 0.3 }
                        }}
                        className={`p-5 rounded-xl bg-gradient-to-br ${value.color} shadow-lg transform transition-all duration-500`}
                      >
                        <value.icon
                          className="w-10 h-10 text-white"
                          strokeWidth={2}
                        />
                      </motion.div>
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