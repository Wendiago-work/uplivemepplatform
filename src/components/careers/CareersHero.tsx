import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { strings } from "@/lib/strings";
import { useState, useCallback, useRef, useEffect } from "react";

const BorderShape = ({ side }: { side: "left" | "right" }) => (
  <span
    className={`absolute bottom-[-28px] w-[clamp(120px,10vw,200px)] h-[clamp(60px,8vw,110px)] text-white pointer-events-none z-[2] block ${side === "left" ? "left-0" : "right-0 scale-x-[-1]"
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

export const CareersHero = () => {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [videoSize, setVideoSize] = useState({ width: "100%", height: "100%" });
  const videoUrl =
    "https://player.vimeo.com/video/1137984719?background=1&autoplay=1&loop=1&muted=1&controls=0&autopause=0&transparent=1";

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

  const scrollToJobs = () => {
    document
      .getElementById("explore-jobs")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="careers-hero"
      className="relative w-full flex flex-col overflow-visible mt-20 px-[10px] mb-[150px]"
    >
      <div
        ref={frameRef}
        className="relative min-h-[700px] md:min-h-[900px] flex items-start rounded-[20px] overflow-visible"
      >
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <iframe
            src={videoUrl}
            title="joinus"
            className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none block"
            style={videoSize}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent rounded-[20px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start gap-8">
          <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] md:text-[clamp(4rem,7vw,6rem)] font-black text-white leading-none text-left max-w-[60vw]">
            {strings.careersPage.hero.title}
          </h1>

          <Button
            size="lg"
            variant="tech"
            className="font-bold"
            onClick={scrollToJobs}
          >
            {strings.careersPage.hero.cta}
          </Button>
        </div>

        {/* Breadcrumbs */}
        <div className="absolute bottom-8 left-8 md:left-16 z-10 flex items-center gap-2 text-white/80">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Careers</span>
        </div>

        <BorderShape side="right" />
      </div>
    </section>
  );
};
