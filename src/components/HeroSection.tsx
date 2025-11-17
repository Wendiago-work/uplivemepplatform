import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { strings } from "@/lib/strings";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -12]);

  return (
    <section ref={ref} className="h-screen flex items-center justify-center px-6 relative overflow-hidden snap-start snap-always">
      {/* YouTube video background */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/9y8M4IaNheQ?autoplay=1&mute=1&loop=1&playlist=9y8M4IaNheQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Hero background video"
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          allow="autoplay; encrypted-media"
          style={{
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '177.77vh', // 16:9 aspect ratio
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div
        className="text-center relative z-10"
        style={{ y }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-8xl md:text-[12rem] font-black text-white mb-0 leading-none tracking-tight"
        >
          {strings.hero.title}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-8xl md:text-[12rem] font-black text-transparent leading-none tracking-tight"
          style={{
            WebkitTextStroke: '2px white',
          }}
        >
          {strings.hero.subtitle}
        </motion.h2>
      </motion.div>
    </section>
  );
};
