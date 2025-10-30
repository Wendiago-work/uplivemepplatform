import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { strings } from "@/lib/strings";

const PLAYABLE_ORIGIN = "https://upliveplayable.pages.dev";

export const HeroSection = () => {
  const ref = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -12]);

  useEffect(() => {
    const handlePlayableMessage = (event: MessageEvent) => {
      if (event.origin !== PLAYABLE_ORIGIN) return;
      if (typeof event.data !== "object" || event.data === null) return;

      const { type, payload } = event.data as {
        type?: string;
        payload?: { name?: string };
      };

      if (type === "PW_CUSTOM" && payload?.name === "song_start") {
        setIsInteracting(true);
      }
    };

    window.addEventListener("message", handlePlayableMessage);
    return () => window.removeEventListener("message", handlePlayableMessage);
  }, []);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Playable game background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Glass crack overlay */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInteracting ? [0, 1, 0] : 0,
              }}
              transition={{ duration: 0.4, times: [0, 0.3, 1] }}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M50,50 L20,10 M50,50 L80,15 M50,50 L90,50 M50,50 L85,85 M50,50 L50,95 M50,50 L15,80 M50,50 L10,50 M50,50 L25,25"
                  stroke="white"
                  strokeWidth="0.1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: isInteracting ? 1 : 0,
                    opacity: isInteracting ? [0, 1, 0.5] : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.div>

            {/* Dark overlay that shatters */}
            <motion.div
              className="absolute inset-0 bg-black/60 pointer-events-none"
              style={{ zIndex: 10 }}
              animate={{
                opacity: isInteracting ? 0 : 1,
                scale: isInteracting ? 1.1 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            <iframe
              src="https://upliveplayable.pages.dev"
              title="Playable demo"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; fullscreen; gamepad; xr-spatial-tracking"
              loading="lazy"
              onClick={() => setIsInteracting(true)}
              onTouchStart={() => setIsInteracting(true)}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="text-center relative z-10 pointer-events-none"
        style={{ y }}
        animate={{
          opacity: isInteracting ? 0 : 1,
          scale: isInteracting ? 1.5 : 1,
          filter: isInteracting ? "blur(20px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="hero-title"
          animate={isInteracting ? {
            scale: [1, 1.2, 1.5],
            opacity: [1, 0.8, 0],
          } : {
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={isInteracting ? { duration: 0.4 } : { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {strings.hero.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="hero-subtitle"
          animate={isInteracting ? {
            scale: [1, 1.2, 1.5],
            opacity: [1, 0.8, 0],
          } : {
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={isInteracting ? { duration: 0.4 } : { duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {strings.hero.subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
};
