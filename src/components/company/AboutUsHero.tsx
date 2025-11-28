import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Title } from "@/components/ui/title";

const images = [
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071",
  "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
  "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2065",
  "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070",
];

export const AboutUsHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image column for desktop */}
          <div className="hidden lg:flex lg:order-1 relative h-[350px] md:h-[500px] w-full items-center justify-center">
            <div className="relative w-full h-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: -90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
                    <img
                      src={images[currentIndex]}
                      alt="UpLive team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicator Dots */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === index ? "bg-primary w-8" : "bg-foreground"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text column (includes mobile image) */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <Title className="mb-0 md:mb-6 inline-flex">ABOUT UPLIVE</Title>
            </div>

            {/* Mobile/Tablet image under title */}
            <div className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center mb-8 lg:hidden">
              <div className="relative w-full h-full max-w-sm md:max-w-md mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                    exit={{ rotateY: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={images[currentIndex]}
                        alt="UpLive team"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Indicator Dots */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentIndex === index
                        ? "bg-primary w-8"
                        : "bg-foreground"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-[20px] mb-8 mt-16 lg:mt-0">
              Uplive is a <span className="font-bold">global game company</span>{" "}
              specializing in interactive musical experiences and publishing hit
              mobile titles with partners worldwide. <br></br> We combine
              fast-learning product teams, strong UA and monetization, and deep
              market expertise to scale games from idea to global success.
              Alongside our own IPs, we co-create and publish non-music games
              and app, offering developers transparent, long-term partnerships
              built for sustainable growth.
            </p>

            <Button asChild size="lg" variant="tech">
              <Link to="/careers">JOIN THE TEAM</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
