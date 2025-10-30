import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { strings } from "@/lib/strings";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -12]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="animated-background">
        <motion.div
          className="gradient-orb gradient-orb-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="gradient-orb gradient-orb-2"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="gradient-orb gradient-orb-3"
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <motion.div 
        className="text-center relative z-10"
        style={{ y }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title"
        >
          {strings.hero.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subtitle"
        >
          {strings.hero.subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
};
