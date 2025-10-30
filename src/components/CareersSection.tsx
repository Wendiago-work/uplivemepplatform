import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { strings } from "@/lib/strings";

export const CareersSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          {strings.careers.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="careers-description"
        >
          {strings.careers.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <Button className="cta-button" size="lg" asChild>
              <a href="#careers">{strings.careers.cta}</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
