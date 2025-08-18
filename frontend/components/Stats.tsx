// 'use client'

// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// interface Stat {
//   value: string;
//   label: string;
//   numericValue: number;
//   suffix: string;
// }

// // Custom hook untuk animasi counter
// const useCounter = (end: number, duration: number = 2000) => {
//   const [count, setCount] = useState(0);
//   const motionValue = useMotionValue(0);
//   const spring = useSpring(motionValue, { duration });

//   useEffect(() => {
//     const unsubscribe = spring.on("change", (latest) => {
//       setCount(Math.round(latest));
//     });
//     return unsubscribe;
//   }, [spring]);

//   const startAnimation = () => {
//     motionValue.set(end);
//   };

//   const resetAnimation = () => {
//     motionValue.set(0);
//     setCount(0);
//   };

//   return { count, startAnimation, resetAnimation };
// };

// const StatsSection: React.FC = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
//   const [hasAnimated, setHasAnimated] = useState(false);

//   const stats: Stat[] = [
//     { 
//       value: "5+", 
//       label: "Tahun Pengalaman",
//       numericValue: 5,
//       suffix: "+"
//     },
//     { 
//       value: "100+", 
//       label: "Kambing Sehat",
//       numericValue: 100,
//       suffix: "+"
//     },
//     { 
//       value: "500+", 
//       label: "Pelanggan Puas",
//       numericValue: 500,
//       suffix: "+"
//     },
//   ];

//   // Counter hooks untuk setiap stat
//   const counter1 = useCounter(stats[0].numericValue, 2000);
//   const counter2 = useCounter(stats[1].numericValue, 2500);
//   const counter3 = useCounter(stats[2].numericValue, 3000);
  
//   const counters = [counter1, counter2, counter3];

//   // Trigger animasi saat section terlihat
//   useEffect(() => {
//     if (isInView && !hasAnimated) {
//       counters.forEach((counter, index) => {
//         setTimeout(() => {
//           counter.startAnimation();
//         }, index * 200);
//       });
//       setHasAnimated(true);
//     } else if (!isInView && hasAnimated) {
//       // Reset untuk animasi ulang ketika scroll keluar dan masuk lagi
//       counters.forEach(counter => counter.resetAnimation());
//       setHasAnimated(false);
//     }
//   }, [isInView, hasAnimated]);

//   // Function untuk restart animasi manual
//   const restartAnimation = () => {
//     counters.forEach(counter => counter.resetAnimation());
//     setTimeout(() => {
//       counters.forEach((counter, index) => {
//         setTimeout(() => {
//           counter.startAnimation();
//         }, index * 200);
//       });
//     }, 100);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 50,
//       scale: 0.9
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.4, 0.0, 0.2, 1]
//       }
//     }
//   };

//   const headerVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: -30
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 py-16 min-h-[20vh] flex items-center overflow-hidden"
//     >
//       {/* Background decorative elements dengan animasi */}
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.1, 1],
//           opacity: [0.3, 0.4, 0.3]
//         }}
//         transition={{ 
//           duration: 4, 
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="absolute top-8 right-16 w-24 h-24 bg-green-400 rounded-full blur-3xl"
//       ></motion.div>
      
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.2, 1],
//           opacity: [0.2, 0.3, 0.2]
//         }}
//         transition={{ 
//           duration: 5, 
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1
//         }}
//         className="absolute bottom-8 left-16 w-32 h-32 bg-green-500 rounded-full blur-3xl"
//       ></motion.div>
      
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.15, 1],
//           opacity: [0.25, 0.35, 0.25]
//         }}
//         transition={{ 
//           duration: 3.5, 
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 0.5
//         }}
//         className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-300 rounded-full blur-2xl"
//       ></motion.div>

//       {/* Subtle pattern overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-600/10 to-transparent"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
//         {/* Section heading */}
//         <motion.div
//           variants={headerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold text-white mb-2">Pencapaian Kami</h2>
//           <motion.div 
//             initial={{ width: 0 }}
//             animate={isInView ? { width: 64 } : { width: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="h-1 bg-green-400 mx-auto rounded-full"
//           ></motion.div>
          
         
//         </motion.div>

//         {/* Stats grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ 
//                 scale: 1.05,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-2xl cursor-pointer"
//             >
//               {/* Glow effect on hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//               <div className="relative z-10">
//                 {/* Animated counter */}
//                 <motion.div 
//                   className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-green-600 transition-colors duration-300"
//                   initial={{ scale: 0.5, opacity: 0 }}
//                   animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
//                   transition={{ 
//                     delay: 0.5 + index * 0.2,
//                     duration: 0.6,
//                     ease: "backOut"
//                   }}
//                 >
//                   <span className="tabular-nums">
//                     {counters[index].count}
//                   </span>
//                   <span className="text-green-400">
//                     {stat.suffix}
//                   </span>
//                 </motion.div>
                
//                 <motion.div 
//                   className="text-sm md:text-base uppercase tracking-wide text-green-100 font-medium group-hover:text-green-600 transition-colors duration-300"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                   transition={{ delay: 0.7 + index * 0.2 }}
//                 >
//                   {stat.label}
//                 </motion.div>
//               </div>

//               {/* Corner decoration dengan pulse effect */}
//               <motion.div 
//                 animate={{ 
//                   scale: [1, 1.2, 1],
//                   opacity: [0.6, 0.8, 0.6]
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   delay: index * 0.3
//                 }}
//                 className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full"
//               ></motion.div>

//               {/* Progress indicator */}
//               <div className="absolute bottom-0 left-0 h-1 bg-green-400 rounded-b-2xl transform origin-left transition-transform duration-1000 group-hover:scale-x-100 scale-x-0"></div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom decorative dots dengan staggered animation */}
//         <motion.div 
//           className="mt-12 flex justify-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ delay: 1.5 }}
//         >
//           <div className="flex space-x-2">
//             {[0, 100, 200].map((delay, index) => (
//               <motion.div
//                 key={index}
//                 animate={{ 
//                   y: [0, -8, 0],
//                   scale: [1, 1.1, 1]
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   delay: delay / 1000,
//                   ease: "easeInOut"
//                 }}
//                 className={`w-2 h-2 ${index === 1 ? 'bg-green-300' : 'bg-green-400'} rounded-full`}
//               ></motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default React.memo(StatsSection);