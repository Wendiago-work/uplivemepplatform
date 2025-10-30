import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const ProductCard = ({ title, description, image, link }: ProductCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
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
        <div className="mt-8">
          <h3 className="product-title">{title}</h3>
          <p className="product-description">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};
