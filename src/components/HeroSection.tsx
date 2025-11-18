import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { strings } from "@/lib/strings";

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
  const videoUrl = "https://player.vimeo.com/video/1137984633?background=1&autoplay=1&loop=1&muted=1&controls=0&autopause=0&transparent=1";

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
    <section ref={ref} className="h-screen relative overflow-hidden snap-start snap-always">
      {/* Vimeo looped background with crossfade-ready wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.iframe
            key={videoUrl}
            src={videoUrl}
            title="Hero background video"
            className="absolute inset-0 w-full h-full border-0 pointer-events-none"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* Left-heavy dark gradient overlay: smooth ramp */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, ' +
                'rgba(0,0,0,0.95) 0%, ' +
                'rgba(0,0,0,0.85) 20%, ' +
                'rgba(0,0,0,0.75) 40%, ' +
                'rgba(0,0,0,0.2) 75%, ' +  
                'rgba(0,0,0,0.1) 85%, ' +  
                'rgba(0,0,0,0) 100%' +
              ')',
          }}
        />
      </div>

      <motion.div
        className="max-w-[1400px] mx-auto text-left relative z-10 top-[35%] px-4 lg:px-6 2xl:px-0"
        style={{ y }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-medium text-white mb-6"
          style={{ fontFamily: 'Refinery95, Inter, system-ui, sans-serif' }}
        >
          Uplifting everyone's life through
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 min-h-[112px] md:min-h-[168px]"
        >
          <span
            className="text-7xl md:text-9xl leading-none inline-flex items-center font-black text-primary"
            style={{
              fontFamily: 'Refinery95, Inter, system-ui, sans-serif',
              // color: 'rgb(255,255,255)',
              // WebkitTextFillColor: 'transparent',
              // WebkitTextStroke: '2px hsl(262 89% 45%)',
              // textShadow: '0 0 18px rgba(90,13,218,0.3)'
            }}
          >
            {currentText}
            <span className="inline-block w-2 h-16 md:h-28 bg-primary ml-3 animate-pulse" />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6"
        >
          <a
            href="#publishing"
            className="relative inline-flex items-center rounded-2xl px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(262 89% 45%), hsl(266 86% 45%), hsl(261 90% 45%))'
              }}
            />
            <span className="relative z-10">Explore our products</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
