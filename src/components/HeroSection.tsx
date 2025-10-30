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
            {/* Dark overlay when not interacting */}
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-500 z-10 pointer-events-none ${
                isInteracting ? "opacity-0" : "opacity-100"
              }`}
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
        animate={{ opacity: isInteracting ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hero-title"
        >
          {strings.hero.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hero-subtitle"
        >
          {strings.hero.subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
};
