import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { strings } from "@/lib/strings";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";

export const JoinUsSection = () => {
  return (
    <section 
      className="relative"
    >
      {/* Animated Banners */}
      <div className="relative w-full h-[200px] flex items-center justify-center overflow-visible z-20">
        <div className="absolute w-[150vw] bg-primary py-10 -rotate-[4deg] shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Marquee Container */}
          <motion.div
            className="flex whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* First set of text */}
            <div className="flex gap-8 px-4">
              {[...Array(8)].map((_, i) => (
                <div key={`set1-${i}`} className="flex items-center gap-8">
                  <span className="text-white text-5xl md:text-7xl font-black uppercase tracking-wider italic">
                    TRUSTED BY MANY GAMING STUDIOS
                  </span>
                  <span className="text-white text-5xl md:text-7xl font-light">/</span>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-8 px-4">
              {[...Array(8)].map((_, i) => (
                <div key={`set2-${i}`} className="flex items-center gap-8">
                  <span className="text-white text-5xl md:text-7xl font-title uppercase tracking-wider">
                    TRUSTED BY MANY GAMING STUDIOS
                  </span>
                  <span className="text-white text-5xl md:text-7xl font-title">/</span>
                </div>
              ))}
            </div>
            <div className="flex gap-8 px-4">
              {[...Array(8)].map((_, i) => (
                <div key={`set2-${i}`} className="flex items-center gap-8">
                  <span className="text-white text-5xl md:text-7xl font-title uppercase tracking-wider">
                    TRUSTED BY MANY GAMING STUDIOS
                  </span>
                  <span className="text-white text-5xl md:text-7xl font-title">/</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Character Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start z-30 -mt-20 lg:-mt-40"
          >
            <div className="relative w-full max-w-[500px]">              
              <img 
                src="https://demo2.wpopal.com/hitboox/wp-content/uploads/2024/12/ab-img.png" 
                alt="Character Illustration" 
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <Title as="h2" className="mb-6">
              {strings.careers.title}
            </Title>
            <p className="text-[20px] mb-8 leading-relaxed max-w-xl">
              {strings.careers.description}
            </p>
            <Button asChild variant="tech" size="lg">
              <Link to="/careers">
                {strings.careers.cta}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
