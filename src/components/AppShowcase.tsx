import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Apple, Download } from "lucide-react";

interface AppShowcaseProps {
  title: string;
  description: string;
  image: string;
  logo?: string;
  index: number;
}

export const AppShowcase = ({ title, description, image, logo, index }: AppShowcaseProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden snap-start snap-always">
      {/* Background Image with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </motion.div>

      {/* Left gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" style={{ width: '60%' }} />

      {/* Content */}
      <motion.div 
        className="relative h-full flex items-center px-6 md:px-12 lg:px-20"
        style={{ opacity }}
      >
        <div className="max-w-2xl space-y-6">
          {/* Logo placeholder - can be replaced with actual logo images */}
          {logo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={logo} alt={`${title} logo`} className="h-20 w-auto" />
            </motion.div>
          )}

          {/* Title with stylized text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl"
          >
            {description}
          </motion.p>

          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 bg-black/80 hover:bg-black rounded-xl text-white transition-all hover:scale-105"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 bg-black/80 hover:bg-black rounded-xl text-white transition-all hover:scale-105"
            >
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
