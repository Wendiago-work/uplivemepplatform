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

const CornerClip = ({ corner }: { corner: "topRight" | "bottomLeft" }) => (
  <span
    className={`absolute text-background block w-[clamp(140px,18vw,220px)] h-[clamp(50px,7vw,90px)] pointer-events-none ${
      corner === "topRight"
        ? "top-[-6px] right-0 rotate-180"
        : "bottom-[-6px] left-0"
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

const products: Product[] = [
  {
    id: 1,
    title: "Monster Dream",
    category: "ACTION",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    description:
      "An action-packed adventure where you battle mysterious creatures in a dream world",
  },
  {
    id: 2,
    title: "Memories and Quest",
    category: "ADVENTURE",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    description:
      "Embark on an epic journey filled with mysteries and forgotten memories",
  },
  {
    id: 3,
    title: "Dead Curse",
    category: "SHOOTING",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    description: "Battle against the undead in this intense shooter experience",
  },
  {
    id: 4,
    title: "Eternal Conquest",
    category: "SIMULATION",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
    description:
      "A story of a lost ember trapped in a puzzling place, searching for meaning and a way home",
  },
  {
    id: 5,
    title: "Spirit Resurrection",
    category: "STRATEGY",
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&q=80",
    description:
      "Command your forces and resurrect ancient spirits to win epic battles",
  },
  {
    id: 6,
    title: "Shadow Omen",
    category: "SURVIVAL",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80",
    description:
      "Survive in a world shrouded in darkness and face ominous challenges",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="product-card-flex relative rounded-3xl overflow-hidden group cursor-pointer h-[420px] md:h-[520px]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
          <Badge className="bg-primary text-white border-none mb-4 px-4 py-1.5 text-xs font-bold">
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
          <Badge className="bg-primary text-white border-none mb-2 px-4 py-1.5 text-xs font-bold">
            {product.category}
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            {product.title}
          </h3>
          <p className="text-white/90 text-sm mb-4 leading-relaxed">
            {product.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const OurProducts = () => {
  const rows: Product[][] = [];
  for (let i = 0; i < products.length; i += 3) {
    rows.push(products.slice(i, i + 3));
  }

  return (
    <section className="mb-[150px] relative rounded-tl-[20px] rounded-br-[20px] bg-surfaceSecondary px-6 py-14 lg:px-16 lg:py-20 overflow-hidden">
      <CornerClip corner="topRight" />
      <CornerClip corner="bottomLeft" />
      <div className="container mx-auto">
        <div className="mb-4">
          <span className="text-primary font-bold text-sm">WORKS</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              OUR PRODUCTS
            </h2>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
              <Button variant="tech" className="font-bold text-sm" size="lg">
                ALL PRODUCTS
              </Button>
              <p className="text-lg flex-1 max-w-2xl">
                We launch exciting games to the leading platforms of the
                international market with unique ideas and art
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 mb-[140px] mt-16">
          {rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="product-row flex flex-col gap-8 lg:flex-row lg:gap-8 overflow-hidden"
            >
              {row.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
