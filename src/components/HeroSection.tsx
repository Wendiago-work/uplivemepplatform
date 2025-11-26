import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hologramTexture from "@/assets/hologram.png";

const WORDS = ["Games", "Apps"];

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

  const words = useMemo(() => ["Games", "Apps"], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const videoSources = [
    "https://res.cloudinary.com/dsmn3rwyp/video/upload/v1763974039/fkmt_landing_is2dzf.mp4",
    "https://res.cloudinary.com/dsmn3rwyp/video/upload/v1763974007/fth1_landing_ntyiit.mp4",
  ];
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
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
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <section className="relative">
      <div
        ref={frameRef}
        className="relative mx-auto w-full max-w-none min-h-[clamp(520px,70vw,780px)] rounded-t-none md:rounded-t-[20px] overflow-visible"
      >
        <div className="absolute inset-0 rounded-top-none md:rounded-top-[20px] overflow-hidden">
          <video
            ref={videoRef}
            key="hero-video"
            src={videoSources[videoIndex]}
            className="absolute inset-0 w-full h-full object-cover rounded-t-none md:rounded-t-[20px] pointer-events-none"
            autoPlay
            playsInline
            onEnded={() => {
              setVideoIndex((idx) => {
                const next = (idx + 1) % videoSources.length;
                const videoEl = videoRef.current;
                if (videoEl) {
                  videoEl.src = videoSources[next];
                  videoEl.play().catch(() => {});
                }
                return next;
              });
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none rounded-t-none md:rounded-t-[20px]"
            style={heroOverlayStyle}
          />
        </div>

        <motion.div
          className="relative z-[1] container pb-[clamp(2.5rem,7vw,7rem)] pt-[clamp(8rem,15vw,12rem)]"
          style={{ y }}
        >
          <div className="max-w-full md:max-w-[60%] lg:max-w-[40%]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-refinery text-3xl md:text-6xl font-bold text-white mb-6"
            >
              Uplifting everyone's life through
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-4 min-h-[112px] md:min-h-[168px]"
            >
              <span
                className="font-black uppercase text-7xl md:text-9xl leading-none inline-flex items-center font-refinery animate-holo-shift"
                style={{
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
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6"
            >
              <Button asChild variant="tech" className="text-xl" size="lg">
                <Link to="/products">Our products</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <BorderShape side="left" />
        <BorderShape side="right" />
      </div>
    </section>
  );
};
