import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "@/components/ui/title";
import { cn } from "@/lib/utils";
import { CornerClip } from "@/components/ui/corner-clip";

interface Benefit {
  number: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const benefits: Benefit[] = [
  {
    number: "01",
    title: "Flexi Learning Budget",
    description: "9.4M/years for personal learning & wellbeing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Daily Lunch - Teatime",
    description: "We provided daily lunch, teatime, snack, coffee everyday.",
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

export const OurExpertise = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative rounded-tl-[20px] rounded-br-[20px] bg-surfaceSecondary">
      <CornerClip corner="topRight" />
      <CornerClip corner="bottomLeft" />
      <div className="container py-[60px] lg:pb-36">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            <div>
              <Title as="h2" className="mb-6">
                Benefits
              </Title>
              <p className="text-[20px] leading-relaxed max-w-2xl">
                We create an environment where our team members can thrive personally and professionally.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col border rounded-[32px] overflow-hidden">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative cursor-pointer border-b last:border-b-0 rounded-b-[20px] transition-colors duration-300"
              initial={false}
            >
              {/* 
                  1. Number (Fixed width)
                  2. Content (Flex-1)
                  3. Image (Fixed width)
              */}
              <div className="flex flex-col lg:flex-row p-6 md:p-10 gap-6 lg:gap-10 items-stretch">

                {/* Column 1: Number */}
                <div className="flex-shrink-0 w-20 md:w-28 lg:w-36 relative overflow-hidden">
                  <span className={cn(
                    "block text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-tighter transition-colors duration-300",
                    index === activeIndex ? "text-primary" : "text-gray-200"
                  )}>
                    {benefit.number}
                  </span>
                </div>

                {/* Column 2: Content (Title + Description) */}
                <div className="flex-1 flex flex-col z-10 pt-2 md:pt-4 min-w-0">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4">{benefit.title}</h3>

                  <motion.div
                    initial={false}
                    animate={{
                      height: index === activeIndex ? "auto" : 0,
                      opacity: index === activeIndex ? 1 : 0,
                      marginTop: index === activeIndex ? 16 : 0
                    }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-lg leading-relaxed max-w-xl pb-4">
                      {benefit.description}
                    </p>
                  </motion.div>
                </div>

                {/* Column 3: Image */}
                {/* 
                    Always reserve width on desktop to prevent layout shift.
                    On mobile (flex-col), width is auto/full.
                */}
                <div className="hidden lg:block w-[400px] xl:w-[500px] flex-shrink-0">
                  <motion.div
                    className="w-full overflow-hidden rounded-[20px]"
                    initial={false}
                    animate={{
                      height: index === activeIndex ? 300 : 0,
                      opacity: index === activeIndex ? 1 : 0
                    }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                  >
                    <div className="relative w-full h-[300px] bg-gray-100 rounded-[20px] overflow-hidden">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </motion.div>
                </div>

                {/* Mobile Image (Shown below content) */}
                <div className="lg:hidden w-full">
                  <motion.div
                    className="w-full overflow-hidden rounded-[20px]"
                    initial={false}
                    animate={{
                      height: index === activeIndex ? 200 : 0,
                      opacity: index === activeIndex ? 1 : 0,
                      marginTop: index === activeIndex ? 24 : 0
                    }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                  >
                    <div className="relative w-full h-[200px] bg-gray-100 rounded-[20px] overflow-hidden">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
