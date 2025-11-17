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
      className="kpi-card"
    >
      <div className="kpi-value">{displayValue}</div>
      <div className="kpi-label">{label}</div>
    </motion.div>
  );
};

export const AboutSection = () => {
  return (
    <section className="h-screen py-32 snap-start snap-always flex items-center">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          {strings.about.title}
        </motion.h2>
        
        <motion.div
          className="kpi-grid"
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
