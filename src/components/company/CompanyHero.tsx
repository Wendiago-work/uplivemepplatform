import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { Title } from "@/components/ui/title";

const BorderShape = ({ side }: { side: "left" | "right" }) => (
  <span
    className={`absolute bottom-[-28px] w-[clamp(120px,10vw,200px)] h-[clamp(60px,8vw,110px)] text-white pointer-events-none z-[2] block ${
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

interface StatCardProps {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
  showPlus?: boolean;
}

const StatCard = ({ value, label, prefix = "", suffix = "", showPlus = true }: StatCardProps) => {
  const isNumericValue = typeof value === "number" && Number.isFinite(value);
  const formatNumericValue = useCallback(
    (val: number) => `${prefix}${Math.floor(val).toLocaleString()}${suffix}`,
    [prefix, suffix],
  );
  const formatStaticValue = useCallback(() => `${prefix}${String(value)}${suffix}`, [prefix, suffix, value]);
  const [displayValue, setDisplayValue] = useState(() =>
    isNumericValue ? formatNumericValue(0) : formatStaticValue(),
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setDisplayValue(isNumericValue ? formatNumericValue(0) : formatStaticValue());
  }, [formatNumericValue, formatStaticValue, isNumericValue]);

  useEffect(() => {
    if (!isInView || !isNumericValue) return;

    const target = value as number;
    const duration = 1500;
    const steps = 30;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayValue(formatNumericValue(target));
        clearInterval(timer);
      } else {
        setDisplayValue(formatNumericValue(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [formatNumericValue, isInView, isNumericValue, value]);

  const shouldShowPlus = showPlus && isNumericValue;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center gap-2 text-center"
    >
      <div className="flex items-end justify-center gap-2">
        <span className="text-5xl md:text-7xl font-black text-white leading-none">{displayValue}</span>
        {shouldShowPlus && (
          <span className="text-white text-3xl md:text-4xl font-black leading-none self-start -translate-y-1 md:-translate-y-2">
            +
          </span>
        )}
      </div>
      <span className="text-white font-medium text-xs md:text-sm leading-tight whitespace-nowrap">{label}</span>
    </motion.div>
  );
};

export const CompanyHero = () => {
  return (
    <section
      id="company-hero"
      className="relative w-full flex flex-col overflow-visible mt-[72px]"
    >
      <div className="relative min-h-[700px] md:min-h-[900px] flex items-start rounded-[20px] overflow-visible">
        <div className="absolute inset-0 bg-[url('assets/company-hero.png')] bg-cover bg-center rounded-[20px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent rounded-[20px]" />
        
        <div className="relative z-10 container pt-12 md:pt-16">
          <Title as="h1" className="text-7xl md:text-[150px] text-white text-left max-w-full md:max-w-[60%] lg:max-w-[40%]">
            ABOUT US
          </Title>
        </div>

        {/* Statistics Grid - Bottom Right */}
        <div className="absolute bottom-24 right-8 md:right-16 z-10 grid grid-cols-2 gap-6 md:gap-10">
          <StatCard value={20} label="games and apps" />
          <StatCard value={168} label="downloads" suffix="m" />
          <StatCard value={50} label="team members" />
          <StatCard value="XX" label="revenue in 2025" suffix="m$" showPlus={false} />
        </div>

        <div className="absolute bottom-8 left-8 md:left-16 z-10 flex items-center gap-2 text-white/80">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">About us</span>
        </div>

        <BorderShape side="right"/>
      </div>
    </section>
  );
};
