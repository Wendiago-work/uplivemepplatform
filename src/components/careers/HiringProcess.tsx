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

export const HiringProcess = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {strings.careersPage.hiring.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
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
              {/* Dotted line connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px border-t-2 border-dotted border-muted-foreground/30" />
              )}
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-5xl font-bold text-primary">{step.number}</h3>
                  {step.badge && (
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {step.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-2xl font-semibold mb-3">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
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
