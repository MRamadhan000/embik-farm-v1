'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface Stat {
  value: string;
  label: string;
  numericValue: number;
  suffix: string;
}

// Custom hook untuk animasi counter
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration });

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setCount(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  const startAnimation = () => {
    motionValue.set(end);
  };

  const resetAnimation = () => {
    motionValue.set(0);
    setCount(0);
  };

  return { count, startAnimation, resetAnimation };
};

const StatsSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats: Stat[] = [
    { 
      value: "5+", 
      label: "Tahun Pengalaman",
      numericValue: 5,
      suffix: "+"
    },
    { 
      value: "100+", 
      label: "Kambing Sehat",
      numericValue: 100,
      suffix: "+"
    },
    { 
      value: "500+", 
      label: "Pelanggan Puas",
      numericValue: 500,
      suffix: "+"
    },
  ];

  // Counter hooks untuk setiap stat
  const counter1 = useCounter(stats[0].numericValue, 2000);
  const counter2 = useCounter(stats[1].numericValue, 2500);
  const counter3 = useCounter(stats[2].numericValue, 3000);
  
  const counters = [counter1, counter2, counter3];

  // Trigger animasi saat section terlihat
  useEffect(() => {
    if (isInView && !hasAnimated) {
      counters.forEach((counter, index) => {
        setTimeout(() => {
          counter.startAnimation();
        }, index * 200);
      });
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      // Reset untuk animasi ulang ketika scroll keluar dan masuk lagi
      counters.forEach(counter => counter.resetAnimation());
      setHasAnimated(false);
    }
  }, [isInView, hasAnimated]);

  // Function untuk restart animasi manual
  const restartAnimation = () => {
    counters.forEach(counter => counter.resetAnimation());
    setTimeout(() => {
      counters.forEach((counter, index) => {
        setTimeout(() => {
          counter.startAnimation();
        }, index * 200);
      });
    }, 100);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
   <div>fjfijfi</div>
  );
};

export default React.memo(StatsSection);