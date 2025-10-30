import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { strings } from "@/lib/strings";

export const HeroSection = () => {
  const ref = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -12]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Playable game background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-[900px] mx-auto" style={{ aspectRatio: '9 / 16', maxHeight: '90vh' }}>
            <iframe
              src="https://restless-base-e720.ngoc-plh.workers.dev/"
              title="Playable demo"
              className="absolute inset-0 w-full h-full border-0 pointer-events-auto"
              allow="autoplay; fullscreen; gamepad; xr-spatial-tracking"
              loading="lazy"
              onMouseEnter={() => setIsInteracting(true)}
              onTouchStart={() => setIsInteracting(true)}
            />
          </div>
        </div>
      </div>

      <motion.div 
        className="text-center relative z-10 pointer-events-none"
        style={{ y }}
        animate={{ opacity: isInteracting ? 0 : 1 }}
        transition={{ duration: 0.4 }}
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
