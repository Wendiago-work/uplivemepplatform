import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Apple, Download } from "lucide-react";
import { strings } from "@/lib/strings";

interface Product {
  title: string;
  description: string;
  image: string;
  logo?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const ProductsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const products: Product[] = [
    {
      title: strings.products.game1.title,
      description: strings.products.game1.description,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    },
    {
      title: strings.products.game2.title,
      description: strings.products.game2.description,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: strings.products.game3.title,
      description: strings.products.game3.description,
      image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?q=80&w=2080&auto=format&fit=crop",
    },
    {
      title: strings.products.app1.title,
      description: strings.products.app1.description,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
    },
    {
      title: strings.products.app2.title,
      description: strings.products.app2.description,
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2074&auto=format&fit=crop",
    },
    {
      title: strings.products.app3.title,
      description: strings.products.app3.description,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  // Track scroll progress through the ProductsSection container
  // Progress from 0 (section start) to 1 (section end) as user scrolls
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${products.length * 100}vh` }}
    >
      {/* Sticky product backgrounds that transition based on scroll */}
      <div className="sticky top-0 h-screen w-full z-0">
        <div className="absolute inset-0">
          {products.map((product, index) => {
            // Calculate opacity based on scroll progress
            // Background should transition when next product's text becomes ~50% visible
            // Each product section takes up (1 / totalProducts) of the scroll progress
            const opacity = useTransform(scrollYProgress, (progress) => {
              const totalProducts = products.length;
              
              // Calculate which product section we're in based on scroll progress
              // Each section is (1 / totalProducts) wide in terms of progress
              const sectionProgress = progress * totalProducts;
              
              // At the very start (progress near 0), show the first product
              if (progress < 0.05 && index === 0) {
                return 1;
              }
              
              const currentSection = Math.floor(sectionProgress);
              
              // Clamp currentSection to valid range
              const clampedSection = Math.max(0, Math.min(currentSection, totalProducts - 1));
              
              // For smooth transitions, crossfade when moving between sections
              // When sectionProgress is between index and index+1, we're transitioning
              if (index === clampedSection) {
                // Current section: fade out as we approach the next section
                // Start fading at 50% through current section (when next text becomes visible)
                const fadeOutStart = index + 0.5;
                if (sectionProgress >= fadeOutStart && index < totalProducts - 1) {
                  // Fade out over the next 0.5 progress units
                  return Math.max(0, 1 - (sectionProgress - fadeOutStart) * 2);
                }
                return 1;
              } else if (index === clampedSection + 1 && index < totalProducts) {
                // Next section: fade in as current section fades out
                // Start fading in at 50% through previous section
                const fadeInStart = index - 0.5;
                if (sectionProgress >= fadeInStart) {
                  // Fade in over 0.5 progress units
                  return Math.min(1, (sectionProgress - fadeInStart) * 2);
                }
                return 0;
              }
              
              // For other products, hide them
              return 0;
            });

            return (
              <motion.div
                key={index}
                className="absolute inset-0 bg-cover bg-center bg-gray-900"
                style={{
                  backgroundImage: `url(${product.image})`,
                  opacity,
                  zIndex: products.length - index,
                }}
              />
            );
          })}
        </div>

        {/* Left gradient overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-[5] pointer-events-none"
          style={{ width: "60%" }}
        />
      </div>

      {/* Product introductions - stacked vertically, scroll with page */}
      <div className="absolute top-0 left-0 z-20" style={{ width: "60%", height: "100%" }}>
        <div className="px-6 md:px-12 lg:px-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="h-screen flex flex-col justify-center"
            >
              <div className="max-w-2xl space-y-6">
                {/* Logo placeholder */}
                {product.logo && (
                  <motion.img
                    src={product.logo}
                    alt={`${product.title} logo`}
                    className="h-20 w-auto mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                  />
                )}

                {/* Title */}
                <motion.h2
                  className="text-5xl md:text-7xl font-black text-white tracking-tight"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {product.title}
                </motion.h2>

                {/* App Introduction Text */}
                <motion.p
                  className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {product.description}
                </motion.p>

                {/* Download Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a
                    href={product.appStoreUrl || "#"}
                    className="flex items-center gap-3 px-6 py-3 bg-black/80 hover:bg-black rounded-xl text-white transition-all hover:scale-105"
                  >
                    <Apple className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href={product.playStoreUrl || "#"}
                    className="flex items-center gap-3 px-6 py-3 bg-black/80 hover:bg-black rounded-xl text-white transition-all hover:scale-105"
                  >
                    <Download className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
