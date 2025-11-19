import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { strings } from "@/lib/strings";

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

interface KPICardProps {
  value: string;
  label: string;
}

const KPICard = ({ value, label }: KPICardProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Simple count-up animation for numbers
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue && !isNaN(parseInt(numericValue))) {
      const target = parseInt(numericValue);
      const duration = 1500;
      const steps = 30;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          const prefix = value.match(/[^0-9]/)?.[0] || '';
          const suffix = value.match(/[A-Z]+$/)?.[0] || '';
          setDisplayValue(prefix + Math.floor(current) + suffix);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    } else {
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-7xl font-black text-gray-900 mb-2">
        {displayValue}<span className="text-primary text-6xl md:text-8xl">+</span>
      </div>
      <div className="text-sm md:text-base text-gray-600 font-normal">{label}</div>
    </motion.div>
  );
};

export const AboutSection = () => {
  return (
    <section className="relative z-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 2xl:px-0 mb-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm uppercase tracking-widest mb-4 font-bold">WHO WE ARE</p>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
              WE UPLIFT LIVES THROUGH GAMES AND APPS
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {strings.about.title}
            </p>
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <KPICard 
            value={strings.about.kpi1.value} 
            label={strings.about.kpi1.label} 
          />
          <KPICard 
            value={strings.about.kpi2.value} 
            label={strings.about.kpi2.label} 
          />
          <KPICard 
            value={strings.about.kpi3.value} 
            label={strings.about.kpi3.label} 
          />
          <KPICard 
            value={strings.about.kpi4.value} 
            label={strings.about.kpi4.label} 
          />
        </motion.div>
      </div>
    </section>
  );
};
