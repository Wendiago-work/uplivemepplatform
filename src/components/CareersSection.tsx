import { motion } from "framer-motion";
import { strings } from "@/lib/strings";
import careersBg from "@/assets/careers-bg.jpg";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedLinkText } from "@/components/ui/button";

export const CareersSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden snap-start snap-always">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${careersBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
          >
            {strings.careers.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
          >
            {strings.careers.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Link
                to="/careers"
                className="inline-flex items-center gap-1 font-bold text-white hover:gap-3 transition-all"
              >
                <AnimatedLinkText className="text-white font-bold tracking-wide">
                  {strings.careers.cta}
                </AnimatedLinkText>
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
