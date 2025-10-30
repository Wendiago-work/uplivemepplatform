import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { strings } from "@/lib/strings";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export const ProductsSection = () => {
  const products = [
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

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
