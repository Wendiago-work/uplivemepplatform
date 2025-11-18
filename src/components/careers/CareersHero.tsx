import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { strings } from "@/lib/strings";

export const CareersHero = () => {
  const scrollToJobs = () => {
    document
      .getElementById("explore-jobs")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1137984719?background=1&autoplay=1&loop=1&muted=0&controls=0&autopause=0&transparent=1"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          title="joinus"
          style={{
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.77vh',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(68% 68% at 50% 42%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.5) 100%)'
          }}
        />
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
