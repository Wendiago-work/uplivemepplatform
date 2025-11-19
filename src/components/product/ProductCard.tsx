import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export const ProductCard = ({ title, description, image, link }: ProductCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
      className="relative"
    >
      <a href={link || "#"} className="block group">
        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-8 md:mt-12 px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};
