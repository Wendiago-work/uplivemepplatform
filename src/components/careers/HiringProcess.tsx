import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { strings } from "@/lib/strings";
import { Title } from "@/components/ui/title";
import { CornerClip } from "@/components/ui/corner-clip";

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
  "--step-number-font": "3rem",
} as CSSProperties;

export const HiringProcess = () => {
  return (
    <section className="relative rounded-tl-[20px] rounded-br-[20px] bg-surfaceSecondary overflow-hidden">
      <CornerClip corner="topRight" />
      <CornerClip corner="bottomLeft" />
      <div className="container py-[60px] lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Title as="h2" className="mb-6">
            {strings.careersPage.hiring.title}
          </Title>
          <p className="text-[20px] max-w-3xl">
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
                    <span className="px-3 py-1 font-medium rounded-full text-white text-lg bg-primary">
                      {step.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-[20px] font-semibold mb-3">{step.title}</h4>
                <p>
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
