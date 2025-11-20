import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const images = [
  {
    url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071",
    number: "1",
    color: "#F44336"
  },
  {
    url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070",
    number: "2",
    color: "#FF9800"
  },
  {
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
    number: "3",
    color: "#4CAF50"
  },
  {
    url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2065",
    number: "4",
    color: "#2196F3"
  },
  {
    url: "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070",
    number: "5",
    color: "#E91E63"
  }
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
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-full overflow-hidden">
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full max-w-full">
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
                  <div 
                    className="relative w-full max-w-md h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      boxShadow: `0 20px 60px ${images[currentIndex].color}40`
                    }}
                  >
                    <img
                      src={images[currentIndex].url}
                      alt={`Game screenshot ${images[currentIndex].number}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Number overlay */}
                    <div 
                      className="absolute bottom-6 right-6 w-20 h-20 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: images[currentIndex].color }}
                    >
                      <span className="text-white text-4xl font-black">
                        {images[currentIndex].number}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicator Dots */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === index 
                      ? "bg-primary w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex gap-6 md:gap-8">
            {/* Vertical "ABOUT US" text */}
            <div className="flex items-center">
              <span className="text-primary text-sm md:text-base font-bold tracking-widest whitespace-nowrap origin-center -rotate-90 translate-y-12">
                ABOUT US
              </span>
            </div>

            {/* Main content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                YOUR TRUSTED GAME DEVELOPMENT PARTNER
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                We're a <span className="font-bold text-gray-900">global game development</span> partner that empowers
                developers and publishers of all sizes. No matter the technical
                request, creative demand, or impending deadline, our team of
                technical and artistic experts are here to help.
              </p>
              <Button asChild size="lg" className="font-bold">
                <Link to="/careers">JOIN THE TEAM</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
