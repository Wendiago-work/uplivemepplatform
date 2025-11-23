import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { strings } from "@/lib/strings";

const steps = [
  {
    number: "01",
    title: strings.careersPage.hiring.step1.title,
    description: strings.careersPage.hiring.step1.description,
  },
  {
    number: "02",
    title: strings.careersPage.hiring.step2.title,
    description: strings.careersPage.hiring.step2.description,
  },
  {
    number: "03",
    title: strings.careersPage.hiring.step3.title,
    description: strings.careersPage.hiring.step3.description,
  },
  {
    number: "04",
    title: strings.careersPage.hiring.step4.title,
    description: strings.careersPage.hiring.step4.description,
    badge: "Offer",
  },
];

const stepConnectorStyles: CSSProperties = {
  "--step-number-font": "3rem", // matches Tailwind text-5xl
} as CSSProperties;

export const HiringProcess = () => {
  return (
    <section className="px-6 mx-[10px] mb-[150px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {strings.careersPage.hiring.title}
          </h2>
          <p className="text-lg max-w-3xl">
            {strings.careersPage.hiring.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative" style={stepConnectorStyles}>
                {index < steps.length && (
                  <div className="pointer-events-none hidden lg:block absolute right-0 h-px border-t-2 border-dotted border-muted-foreground/30 top-[calc(var(--step-number-font)/2)] left-[calc(var(--step-number-font)+1rem)]" />
                )}

                <div className="flex items-center gap-4 mb-4 justify-between">
                  <h3 className="relative z-10 text-5xl leading-none font-bold text-primary">{step.number}</h3>
                  {step.badge && (
                    <span className="px-3 py-1 font-medium rounded-full text-white text-lg bg-black">
                      {step.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                <p className="leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
