"use client";
import { Milk, ShieldCheck, HeartHandshake, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function OurValues() {
  const values = [
    {
      icon: Milk,
      title: "Segar & Alami",
      desc: "Susu kambing segar tanpa pengawet, langsung dari peternakan kami untuk menjaga cita rasa dan nutrisi.",
    },
    {
      icon: ShieldCheck,
      title: "Nutrisi Berkualitas Tinggi",
      desc: "Kaya akan protein, kalsium, dan vitamin untuk mendukung kesehatan tulang serta daya tahan tubuh.",
    },
    {
      icon: HeartHandshake,
      title: "Etis & Berkelanjutan",
      desc: "Diproduksi dengan metode ramah lingkungan dan mengutamakan kesejahteraan hewan ternak.",
    },
  ];

  const handleScroll = () => {
    const target = document.getElementById("values");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="h-[100vh] bg-white px-6 pt-0 flex flex-col justify-start gap-6">
      {/* Arrow di atas */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-4 mb-6 flex justify-center"
      >
        <button
          onClick={handleScroll}
          className="p-3 rounded-full bg-green-100 shadow-md hover:bg-green-200 transition"
        >
          <ArrowDown className="text-green-700" size={48} strokeWidth={3} />
        </button>
      </motion.div>

      {/* Title + Cards */}
      <div className="flex flex-col items-center text-center w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Values</h2>

        <div
          id="values"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
        >
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 rounded-3xl shadow-sm p-8 text-center 
                         hover:bg-green-700 hover:text-white hover:shadow-lg hover:-translate-y-1 
                         transition-all duration-300"
            >
              {/* Icon Wrapper */}
              <div className="flex justify-center mb-6">
                <div
                  className="p-4 rounded-full bg-gradient-to-br from-green-100 to-green-200 shadow-inner
                             transition-all duration-300 group-hover:from-green-600 group-hover:to-green-500"
                >
                  <value.icon
                    className="w-10 h-10 text-green-700 transform transition-all duration-500 group-hover:text-white group-hover:rotate-[360deg]"
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold text-gray-800 mb-3 
                           transition-all duration-300 group-hover:text-white"
              >
                {value.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-600 leading-relaxed 
                           transition-all duration-300 group-hover:text-gray-100"
              >
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}