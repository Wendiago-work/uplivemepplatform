import { motion } from "framer-motion";
import { Title } from "@/components/ui/title";

const partners = ["AMANOTES", "INWAVE", "YOGAME", "GOOGLE", "APPSFLYER"];

export const PartnersBanner = () => {
  const track = [...partners, ...partners];

  return (
    <section>
      <div className="container">
        <Title as="h2" className="mb-4">
          Our partner
        </Title>
        <p className="text-[20px]">
          We always believe that if you want to go far, go together.
        </p>
      </div>
      {/* Partner Carousel Section - Animated Banner style */}
      <div className="relative w-full h-[220px] flex items-center justify-center z-20">
        <div className="absolute left-1/2 -translate-x-1/2 w-[170vw] sm:w-[150vw] md:w-[140vw] bg-primary py-10 -rotate-[4deg] flex items-center justify-center overflow-hidden">
          <motion.div
            className="flex items-center gap-12 px-8 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {track.map((partner, i) => (
              <div
                key={`partner-${i}`}
                className="flex items-center gap-6 px-6 shrink-0"
              >
                <span className="text-white text-4xl md:text-6xl font-black uppercase tracking-wider italic">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
