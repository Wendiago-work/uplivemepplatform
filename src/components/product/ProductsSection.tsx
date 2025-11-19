import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    },
    {
      title: strings.products.game2.title,
      description: strings.products.game2.description,
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: strings.products.game3.title,
      description: strings.products.game3.description,
      image:
        "https://images.unsplash.com/photo-1632501641765-e568d28b0015?q=80&w=2080&auto=format&fit=crop",
    },
    {
      title: strings.products.app1.title,
      description: strings.products.app1.description,
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
    },
    {
      title: strings.products.app2.title,
      description: strings.products.app2.description,
      image:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2074&auto=format&fit=crop",
    },
    {
      title: strings.products.app3.title,
      description: strings.products.app3.description,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
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

              const sectionProgress = progress * totalProducts;

              // Ensure first product is visible at the very start
              if (progress < 0.05 && index === 0) {
                return 1;
              }

              const currentSection = Math.floor(sectionProgress);
              const clampedSection = Math.max(
                0,
                Math.min(currentSection, totalProducts - 1)
              );

              // Calculate how far through the current section we are (0 to 1)
              const progressInSection = sectionProgress - currentSection;

              if (index === clampedSection) {
                // Current product: visible at start, fade out at ~50% through the section
                const fadeStartPoint = 0.5; // Start fading at 50% through section
                const fadeRange = 0.5; // Complete fade over next 50%

                if (
                  progressInSection >= fadeStartPoint &&
                  index < totalProducts - 1
                ) {
                  const fadeProgress =
                    (progressInSection - fadeStartPoint) / fadeRange;
                  return Math.max(0, 1 - fadeProgress);
                }
                return 1;
              } else if (
                index === clampedSection + 1 &&
                index < totalProducts
              ) {
                // Next product: start fading in at ~50% through previous section
                // For the last product, delay the fade-in to sync better with text
                const isLastProduct = index === totalProducts - 1;
                const fadeStartPoint = isLastProduct ? 0.7 : 0.5; // Last product starts later
                const fadeRange = isLastProduct ? 0.3 : 0.5; // Faster fade for last product

                // progressInSection here refers to progress in the CURRENT section (clampedSection)
                // We want to start fading in during the previous section
                if (progressInSection >= fadeStartPoint) {
                  const fadeProgress =
                    (progressInSection - fadeStartPoint) / fadeRange;
                  return Math.min(1, fadeProgress);
                }
                return 0;
              }

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
      <div
        className="absolute top-0 left-0 z-20"
        style={{ width: "60%", height: "100%" }}
      >
        <div className="px-6 md:px-12 lg:px-32">
          {products.map((product, index) => (
            <div key={index} className="h-screen flex flex-col justify-center">
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
                    className="inline-block transition-all hover:scale-105"
                  >
                    <div className="flex items-center gap-3 px-2 py-2 bg-black rounded-lg text-white">
                      <svg
                        className="w-8 h-8"
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.7045 12.7631C16.7166 11.8432 16.9669 10.9413 17.4321 10.1412C17.8972 9.34108 18.5621 8.66885 19.3648 8.18702C18.8548 7.47597 18.1821 6.89081 17.4 6.478C16.6178 6.0652 15.7479 5.83613 14.8592 5.80898C12.9635 5.61471 11.1258 6.91644 10.1598 6.91644C9.17506 6.91644 7.68776 5.82827 6.08616 5.86044C5.05021 5.89311 4.04059 6.18722 3.15568 6.7141C2.27077 7.24099 1.54075 7.98268 1.03674 8.86691C-1.14648 12.5573 0.482005 17.9809 2.57338 20.964C3.61975 22.4247 4.84264 24.0564 6.44279 23.9985C8.00863 23.9351 8.59344 23.0237 10.4835 23.0237C12.3561 23.0237 12.9048 23.9985 14.5374 23.9617C16.2176 23.9351 17.2762 22.4945 18.2859 21.02C19.0377 19.9792 19.6162 18.8288 20 17.6116C19.0238 17.2085 18.1908 16.5338 17.6048 15.6716C17.0187 14.8094 16.7056 13.7979 16.7045 12.7631Z"
                          fill="white"
                        />
                        <path
                          d="M13.6208 3.84713C14.5369 2.77343 14.9883 1.39335 14.879 0C13.4794 0.143519 12.1865 0.796596 11.258 1.82911C10.804 2.33351 10.4563 2.92033 10.2348 3.55601C10.0132 4.19168 9.92221 4.86375 9.96687 5.5338C10.6669 5.54084 11.3595 5.3927 11.9924 5.10054C12.6254 4.80838 13.1821 4.37982 13.6208 3.84713Z"
                          fill="white"
                        />
                      </svg>

                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-xl font-semibold">App Store</div>
                      </div>
                    </div>
                  </a>
                  <a
                    href={product.playStoreUrl || "#"}
                    className="inline-block transition-all hover:scale-105"
                  >
                    <div className="flex items-center gap-3 px-2 py-2 bg-black rounded-lg text-white">
                      <svg
                        className="w-8 h-8"
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.80482 11.4617L0.0895996 22.0059C0.0905121 22.0078 0.090512 22.0106 0.0914244 22.0125C0.389807 23.1574 1.41179 24 2.62539 24C3.11083 24 3.56616 23.8656 3.95671 23.6305L3.98773 23.6118L14.9229 17.1593L9.80482 11.4617Z"
                          fill="#EA4335"
                        />
                        <path
                          d="M19.6331 9.66619L19.624 9.65966L14.9028 6.86123L9.58392 11.7013L14.9219 17.1582L19.6176 14.3878C20.4406 13.9324 21 13.045 21 12.0223C21 11.0052 20.4489 10.1225 19.6331 9.66619Z"
                          fill="#FBBC04"
                        />
                        <path
                          d="M0.0894234 1.99331C0.0310244 2.21353 0 2.44494 0 2.68382V21.3163C0 21.5552 0.0310245 21.7866 0.0903359 22.0059L10.1386 11.7313L0.0894234 1.99331Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M9.87657 11.9999L14.9044 6.85935L3.98192 0.383507C3.58499 0.139962 3.12145 -4.76837e-06 2.62597 -4.76837e-06C1.41237 -4.76837e-06 0.388558 0.844468 0.0901759 1.99034C0.0901759 1.99127 0.0892639 1.9922 0.0892639 1.99314L9.87657 11.9999Z"
                          fill="#34A853"
                        />
                      </svg>

                      <div className="text-left">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-xl font-semibold">Google Play</div>
                      </div>
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
