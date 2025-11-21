import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CornerClip = ({ corner }: { corner: "topRight" | "bottomLeft" }) => (
  <span
    className={`absolute z-[2] text-background block w-[clamp(140px,18vw,220px)] h-[clamp(50px,7vw,90px)] pointer-events-none ${
      corner === "topRight" ? "top-[-6px] right-0 rotate-180" : "bottom-[-6px] left-0"
    }`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 160 60"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full fill-current"
    >
      <path d="M147.269 54.72L117.876 25.28C114.502 21.9015 109.919 20 105.145 20H0V60H160C155.226 60 150.642 58.0985 147.269 54.72Z" />
      <path d="M0 0V20H20C8.95435 20 0 11.0457 0 0Z" />
    </svg>
  </span>
);

interface Benefit {
  number: string;
  title: string;
  description: string;
  image: string;
}

const benefits: Benefit[] = [
  {
    number: "01",
    title: "Flexi Learning Budget ",
    description: "9.4M/years for personal learning & wellbeing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Daily Lunch - Teatime",
    description: "We provided daily lunch, teatime, snack,  coffee everyday.",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1600&q=80&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Monthly/Bimonthly Dinner",
    description:
      "Monthly dinner with all team & bimonthly dinner with sub-team to explore food & culture together.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Global Learning",
    description: "Yearly trips to key markets to explore culture, players, and localization insights.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1600&q=80&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Open Learning Access",
    description: "Conferences, workshops, and courses for everyone to grow.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "STI - Performance Bonus",
    description: "2 times/year with 30% of company profit shared with the team, no cap.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600&q=80&auto=format&fit=crop",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const OurExpertise = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative mx-[10px] rounded-tl-[20px] rounded-br-[20px] bg-black px-6 py-14 lg:px-16 lg:py-20 overflow-hidden">
      <CornerClip corner="topRight" />
      <CornerClip corner="bottomLeft" />

      <div className="absolute inset-0 z-[0] overflow-hidden rounded-tl-[20px] rounded-br-[20px] pointer-events-none">
        <AnimatePresence mode="wait">
          {benefits.map((benefit, index) =>
            index === activeIndex ? (
              <motion.div
                key={benefit.number}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>

      <div className="container relative">
        <div className="mb-9">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            BENEFITS
          </h2>
          <p className="text-lg leading-relaxed font-bold text-white/90">
            We create an environment where our team members can thrive personally and professionally. We believe that a
            positive workplace culture directly impacts our creativity and success.
          </p>
        </div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-8 lg:gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {benefits.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col items-center text-center"
            >
              {/* Number Badge */}
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className="w-24 h-24 rounded-full flex items-center justify-center mb-8 bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-surfaceSecondary transition"
                aria-label={`Show benefits image ${feature.number}`}
              >
                <span className="text-2xl font-black">{feature.number}</span>
              </button>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-base font-bold leading-relaxed max-w-sm text-white/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
