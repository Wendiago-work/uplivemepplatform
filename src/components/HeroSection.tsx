import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hologramTexture from "@/assets/hologram.png";

const heroOverlayStyle: CSSProperties = {
  background:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 25%)," +
    "linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.95) 20%, rgba(0, 0, 0, 0.85) 40%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.1) 85%, rgba(0, 0, 0, 0) 100%)",
};

const holoBackgroundStyle: CSSProperties = {
  backgroundImage: `url(${hologramTexture})`,
  backgroundSize: "240% 240%",
  backgroundPosition: "0% 50%",
  backgroundRepeat: "repeat",
};

const holoTextStyle: CSSProperties = {
  ...holoBackgroundStyle,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
  textShadow: "0 0 24px rgba(120, 200, 255, 0.35)",
};

const BorderShape = ({ side }: { side: "left" | "right" }) => (
  <span
    className={`absolute bottom-[-27px] w-[clamp(120px,10vw,200px)] h-[clamp(60px,8vw,110px)] text-white pointer-events-none z-[2] block ${
      side === "left" ? "left-0" : "right-0 scale-x-[-1]"
    }`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 160 60"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block fill-current"
    >
      <path d="M147.269 54.72L117.876 25.28C114.502 21.9015 109.919 20 105.145 20H0V60H160C155.226 60 150.642 58.0985 147.269 54.72Z" />
      <path d="M0 0V20H20C8.95435 20 0 11.0457 0 0Z" />
    </svg>
  </span>
);

export const HeroSection = () => {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -12]);

  const words = ["Games", "Apps"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [videoSize, setVideoSize] = useState({ width: "100%", height: "100%" });
  const videoUrl =
    "https://player.vimeo.com/video/1137984633?background=1&autoplay=1&loop=1&muted=1&controls=0&autopause=0&transparent=1";

  const updateVideoSize = useCallback(() => {
    if (!frameRef.current) return;

    const bounds = frameRef.current.getBoundingClientRect();
    const { width, height } = bounds;
    if (!width || !height) return;

    const HERO_VIDEO_RATIO = 16 / 9;
    const frameRatio = width / height;

    let nextWidth = width;
    let nextHeight = height;

    if (frameRatio > HERO_VIDEO_RATIO) {
      nextHeight = width / HERO_VIDEO_RATIO;
    } else {
      nextWidth = height * HERO_VIDEO_RATIO;
    }

    setVideoSize((prev) => {
      const widthPx = `${nextWidth}px`;
      const heightPx = `${nextHeight}px`;

      if (prev.width === widthPx && prev.height === heightPx) {
        return prev;
      }

      return { width: widthPx, height: heightPx };
    });
  }, []);

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

  useEffect(() => {
    updateVideoSize();

    const observer = new ResizeObserver(() => updateVideoSize());
    if (frameRef.current) {
      observer.observe(frameRef.current);
    }

    window.addEventListener("resize", updateVideoSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateVideoSize);
    };
  }, [updateVideoSize]);

  return (
    <section className="relative mb-[150px]">
      <div
        ref={frameRef}
        className="relative mx-auto w-full max-w-none rounded-t-[20px] min-h-[clamp(520px,70vw,780px)] overflow-visible"
      >
        <div className="absolute inset-0 overflow-hidden rounded-t-[20px]">
          <AnimatePresence mode="wait">
            <motion.iframe
              key={videoUrl}
              src={videoUrl}
              title="Hero background video"
              className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-t-[20px] border-0 pointer-events-none block"
              style={videoSize}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 pointer-events-none rounded-t-[20px]" style={heroOverlayStyle} />
        </div>

        <motion.div
          className="relative z-[1] px-[clamp(2.5rem,7vw,7rem)] pb-[clamp(2.5rem,7vw,7rem)] pt-[clamp(8rem,15vw,12rem)] max-w-[900px]"
          style={{ y }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Refinery95, Inter, system-ui, sans-serif" }}
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
              className="text-7xl md:text-9xl leading-none inline-flex items-center font-black animate-holo-shift"
              style={{
                fontFamily: "Refinery95, Inter, system-ui, sans-serif",
                WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                textShadow: "0 0 18px rgba(120,200,255,0.28)",
                ...holoTextStyle,
              }}
            >
              {currentText}
              <span
                className="inline-block w-2 h-16 md:h-28 ml-3 animate-holo-shift-bg"
                style={holoBackgroundStyle}
              />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            <Button asChild variant="tech" className="font-bold">
              <Link to="/products">Explore our products</Link>
            </Button>
          </motion.div>
        </motion.div>

        <BorderShape side="left" />
        <BorderShape side="right" />
      </div>
    </section>
  );
};
