import { motion } from "framer-motion";
import { strings } from "@/lib/strings";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title"
        >
          {strings.hero.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subtitle"
        >
          {strings.hero.subtitle}
        </motion.p>
      </div>
    </section>
  );
};
