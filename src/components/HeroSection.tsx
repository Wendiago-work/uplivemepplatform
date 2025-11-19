import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -12]);

  const words = ["Games", "Apps"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="bg-white pt-20 pb-0 px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div ref={ref} className="hero-section-inner relative overflow-hidden">
          {/* YouTube looped background */}
          <div className="absolute inset-0 overflow-hidden rounded-[40px]">
            <iframe
              src="https://www.youtube.com/embed/9y8M4IaNheQ?autoplay=1&mute=1&loop=1&playlist=9y8M4IaNheQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="Hero background video"
              className="absolute inset-0 w-full h-full border-0 pointer-events-none"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <motion.div
            className="text-left relative z-10 flex flex-col justify-center h-full px-8 lg:px-16 py-32"
            style={{ y }}
          >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-normal text-cyan-400 mb-4 uppercase tracking-wider"
          style={{ fontFamily: 'Refinery95, Inter, system-ui, sans-serif' }}
        >
          Uplifting lives through
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h1
            className="text-7xl md:text-9xl font-black text-white leading-none mb-4"
            style={{
              fontFamily: 'Refinery95, Inter, system-ui, sans-serif',
              WebkitTextStroke: '2px rgba(255,255,255,0.2)',
            }}
          >
            <span className="text-cyan-400">{currentText}</span>
            <span className="inline-block w-1 h-20 md:h-32 ml-2 bg-cyan-400 animate-pulse align-middle" />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6"
        >
          <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-cyan-400 hover:text-black transition-all text-lg">
            Our Games
          </Link>
        </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
