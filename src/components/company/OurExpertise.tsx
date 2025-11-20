import { motion } from "framer-motion";

interface ServiceFeature {
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const serviceFeatures: ServiceFeature[] = [
  {
    number: "01.",
    title: "Pre-production & Concept",
    description: "Our artists can create as many high-quality sketches and concept art for your game as you need in order to make the pre-production stage more productive."
  },
  {
    number: "02.",
    title: "Game Design",
    description: "Game designers at our studio know the score and are able to put their knowledge to good use by coming up with the best-in-class mechanics as well as the backstory for your game."
  },
  {
    number: "03.",
    title: "Art Production",
    description: "Everybody knows that games consist of assets, and our artists are equally good at creating either low- or high-poly environments, characters, weapons, props, as well as other game constituents."
  },
  {
    number: "04.",
    title: "2D & 3D Animation",
    description: "Our professionals who specialize in animating 2D/3D virtual worlds, breathing life into the most distant places framed in zeros and ones.",
    highlighted: true
  },
  {
    number: "05.",
    title: "Game Programming",
    description: "Whether you want your game to be built on Unity or Unreal, our programmers already master both, so you can be confident that the result is high in performance and functionality."
  },
  {
    number: "06.",
    title: "Quality Assurance",
    description: "Our QA specialists execute a high number of complex tests at each product life cycle to ensure that your game performs maximally well during every development phase."
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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left side - Vertical text */}
          <div className="hidden lg:flex items-start pt-2">
            <span className="text-primary text-sm font-bold tracking-widest whitespace-nowrap origin-center -rotate-90 translate-y-24">
              OVERVIEW
            </span>
          </div>

          {/* Right side - Title and description */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
              SERVICE FEATURES
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Developers at our studio are proficient in each life cycle of game creation, so you can be confident in its top-notch quality.
            </p>
          </div>
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
                staggerChildren: 0.1
              }
            }
          }}
        >
          {serviceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col items-center text-center"
            >
              {/* Number Badge */}
              <div 
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 ${
                  feature.highlighted 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-primary'
                }`}
              >
                <span className="text-2xl font-black">{feature.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
