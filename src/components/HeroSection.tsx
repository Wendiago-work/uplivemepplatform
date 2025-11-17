import { motion, useScroll, useTransform } from "framer-motion";
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

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // Word complete, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Deletion complete, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

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
        className="text-left relative z-10 max-w-4xl"
        style={{ y }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-medium text-cyan-400 mb-4"
        >
          Uplifting lives through
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
            We Make
          </h1>
          <span className="text-6xl md:text-8xl font-black text-cyan-400 leading-none inline-flex items-center">
            {currentText}
            <span className="inline-block w-1 h-16 md:h-24 bg-cyan-400 ml-2 animate-pulse" />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
