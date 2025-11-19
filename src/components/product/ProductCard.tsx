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
      className="product-card"
    >
      <a href={link || "#"} className="block group">
        <div className="product-image-wrapper">
          <img
            src={image}
            alt={title}
            className="product-image"
          />
        </div>
        <div className="product-content">
          <h3 className="product-title">{title}</h3>
          <p className="product-description">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};
