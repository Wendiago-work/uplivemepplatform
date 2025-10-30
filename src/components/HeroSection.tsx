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

  const shatterPieces = [
    { x: -200, y: -200, rotate: -45 },
    { x: 200, y: -200, rotate: 45 },
    { x: -200, y: 200, rotate: -135 },
    { x: 200, y: 200, rotate: 135 },
    { x: 0, y: -250, rotate: 0 },
    { x: 0, y: 250, rotate: 180 },
    { x: -250, y: 0, rotate: -90 },
    { x: 250, y: 0, rotate: 90 },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Playable game background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Glass shatter overlay - breaks into pieces */}
            {isInteracting && shatterPieces.map((piece, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 bg-black/60 pointer-events-none"
                style={{ clipPath: `polygon(${50 + (piece.x > 0 ? 10 : -10)}% ${50 + (piece.y > 0 ? 10 : -10)}%, 50% 50%, ${50 + (piece.x > 0 ? 20 : -20)}% 50%, ${50 + (piece.x > 0 ? 15 : -15)}% ${50 + (piece.y > 0 ? 15 : -15)}%)` }}
                initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                animate={{
                  x: piece.x,
                  y: piece.y,
                  opacity: 0,
                  rotate: piece.rotate,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            ))}

            {/* Main dark overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60 pointer-events-none"
              style={{ zIndex: isInteracting ? -1 : 10 }}
              animate={{
                opacity: isInteracting ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
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

      {/* Text shatter effect */}
      <div className="text-center relative z-10 pointer-events-none">
        {/* Shattered text pieces */}
        {isInteracting && shatterPieces.map((piece, i) => (
          <motion.div
            key={`text-${i}`}
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ y }}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
            animate={{
              x: piece.x * 2,
              y: piece.y * 2,
              opacity: 0,
              rotate: piece.rotate * 2,
              scale: 0.5,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="hero-title" style={{ clipPath: `polygon(${45 + i * 5}% ${45 + i * 5}%, ${55 - i * 2}% ${45 + i * 3}%, ${55 - i * 3}% ${55 - i * 2}%, ${45 + i * 3}% ${55 - i * 3}%)` }}>
              {strings.hero.title}
            </h2>
            <p className="hero-subtitle" style={{ clipPath: `polygon(${45 + i * 5}% ${45 + i * 5}%, ${55 - i * 2}% ${45 + i * 3}%, ${55 - i * 3}% ${55 - i * 2}%, ${45 + i * 3}% ${55 - i * 3}%)` }}>
              {strings.hero.subtitle}
            </p>
          </motion.div>
        ))}

        {/* Original text that disappears */}
        <motion.div
          style={{ y }}
          animate={{
            opacity: isInteracting ? 0 : 1,
          }}
          transition={{ duration: 0.1 }}
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
      </div>
    </section>
  );
};
