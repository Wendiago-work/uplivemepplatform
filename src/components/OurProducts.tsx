import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Monster Dream",
    category: "ACTION",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    description: "An action-packed adventure where you battle mysterious creatures in a dream world",
  },
  {
    id: 2,
    title: "Memories and Quest",
    category: "ADVENTURE",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    description: "Embark on an epic journey filled with mysteries and forgotten memories",
  },
  {
    id: 3,
    title: "Dead Curse",
    category: "SHOOTING",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    description: "Battle against the undead in this intense shooter experience",
  },
  {
    id: 4,
    title: "Eternal Conquest",
    category: "SIMULATION",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
    description: "A story of a lost ember trapped in a puzzling place, searching for meaning and a way home",
  },
  {
    id: 5,
    title: "Spirit Resurrection",
    category: "STRATEGY",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&q=80",
    description: "Command your forces and resurrect ancient spirits to win epic battles",
  },
  {
    id: 6,
    title: "Shadow Omen",
    category: "SURVIVAL",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80",
    description: "Survive in a world shrouded in darkness and face ominous challenges",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden group cursor-pointer"
      style={{ aspectRatio: "5/6" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scaleX: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="absolute inset-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <Badge
            className="bg-primary text-white border-none mb-4 px-4 py-1.5 text-xs font-bold"
          >
            {product.category}
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold">{product.title}</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <Badge
            className="bg-primary text-white border-none mb-2 px-4 py-1.5 text-xs font-bold"
          >
            {product.category}
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-3">{product.title}</h3>
          <p className="text-white/90 text-sm mb-4 leading-relaxed">
            {product.description}
          </p>
          <Button
            variant="outline"
            className="bg-amber-600/90 hover:bg-amber-600 text-white border-none font-bold"
          >
            DETAILS
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const OurProducts = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-[1400px]">
        <div className="flex items-start gap-8 mb-16">
          <div className="hidden lg:block">
            <span
              className="text-primary font-bold text-sm tracking-widest"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              WORKS
            </span>
          </div>

          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8">
                  FEATURED PROJECTS
                </h2>
                <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
                  We launch exciting games to the leading platforms of the
                  international market with unique ideas and art
                </p>
              </div>
              <Button
                variant="outline"
                className="border-2 border-foreground/20 hover:bg-foreground/5 font-bold px-8"
              >
                VIEW ALL GAMES
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
