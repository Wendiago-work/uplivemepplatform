import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ExpertiseCard {
  title: string;
  description: string;
  image: string;
}

const expertiseAreas: ExpertiseCard[] = [
  {
    title: "Full game development",
    description: "We develop mobile, desktop and web games with a completely functional final product.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071"
  },
  {
    title: "2D art and animations",
    description: "Beautiful 2D artwork and smooth animations that bring your game to life.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070"
  },
  {
    title: "3D modelling",
    description: "High-quality 3D models and environments for immersive gaming experiences.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070"
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces that enhance player experience.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070"
  },
  {
    title: "Game Testing & QA",
    description: "Comprehensive testing to ensure your game runs flawlessly across all platforms.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2074"
  },
  {
    title: "Live Operations",
    description: "Ongoing support and updates to keep your game fresh and engaging.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const OurExpertise = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left side - Vertical text */}
          <div className="hidden lg:flex items-start pt-2">
            <span className="text-primary text-sm font-bold tracking-widest whitespace-nowrap origin-center -rotate-90 translate-y-32">
              WHAT WE OFFER
            </span>
          </div>

          {/* Right side - Title and CTA */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              OUR AREAS OF EXPERTISE
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Our talented team is ready to guide your game from the concept to its release!
            </p>
            <Button size="lg" className="font-bold">
              GET A QUOTE
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-base text-white/90 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-fit border-white text-white hover:bg-white hover:text-gray-900 font-bold"
                >
                  LEARN MORE
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
