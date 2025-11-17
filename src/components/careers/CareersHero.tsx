import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { strings } from "@/lib/strings";

export const CareersHero = () => {
  const scrollToJobs = () => {
    document.getElementById('explore-jobs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="https://framerusercontent.com/assets/wEK2necG0GRXJFV14RHtiYY7zY.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-white font-bold mb-8"
        >
          {strings.careersPage.hero.title}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/80 text-white px-6 py-6 text-lg rounded-full font-semibold"
            onClick={scrollToJobs}
          >
            {strings.careersPage.hero.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
