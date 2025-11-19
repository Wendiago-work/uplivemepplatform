import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { strings } from "@/lib/strings";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

type KPIValue = number | string;

interface KPICardProps {
  value: KPIValue;
  label: string;
  prefix?: string;
  suffix?: string;
  showPlus?: boolean;
}

const KPICard = ({ value, label, prefix = "", suffix = "", showPlus = true }: KPICardProps) => {
  const isNumericValue = typeof value === "number" && Number.isFinite(value);
  const formatValue = useCallback(
    (val: number) => `${prefix}${Math.floor(val).toLocaleString()}${suffix}`,
    [prefix, suffix],
  );
  const [displayValue, setDisplayValue] = useState(() => (isNumericValue ? formatValue(0) : String(value)));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setDisplayValue(isNumericValue ? formatValue(0) : String(value));
  }, [formatValue, isNumericValue, value]);

  useEffect(() => {
    if (!isInView) return;

    if (!isNumericValue) {
      setDisplayValue(String(value));
      return;
    }

    const target = value;
    const duration = 1500;
    const steps = 30;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayValue(formatValue(target));
        clearInterval(timer);
      } else {
        setDisplayValue(formatValue(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [formatValue, isInView, isNumericValue, value]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      transition={{ duration: 0.6 }}
      className="text-center flex flex-col items-center"
    >
      <div className="text-5xl md:text-7xl font-black text-gray-900 mb-2 min-h-[3.5rem] md:min-h-[5rem] flex items-end justify-center gap-1">
        {displayValue}
        <span
          className={cn("text-primary text-6xl md:text-8xl", !showPlus && "opacity-0")}
          aria-hidden={!showPlus}
        >
          +
        </span>
      </div>
      <div className="text-base md:text-xl min-h-[1.75rem] md:min-h-[2.5rem] flex items-start justify-center">
        {label}
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  return (
    <section className="relative mb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm uppercase tracking-widest mb-4 font-bold">WHO WE ARE</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              WE UPLIFT EVERYONE'S LIFE THROUGH GAMES AND APPS
            </h2>
            <p className="text-xl font-light mb-6">
              Uplive is a global game company specializing in interactive musical experiences and publishing hit mobile titles with partners worldwide.
            </p>
            <Button asChild variant="tech" className="font-bold text-sm" size="lg">
              <Link to="/company">About us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-3xl" />
          </motion.div>
        </div>
        
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <KPICard {...strings.about.kpi1} />
          <KPICard {...strings.about.kpi2} />
          <KPICard {...strings.about.kpi3} />
          <KPICard {...strings.about.kpi4} />
        </motion.div>
      </div>
    </section>
  );
};
