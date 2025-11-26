import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AppleLogo from "@/assets/apple.svg";
import GooglePlayLogo from "@/assets/google-play.svg";
import { Title } from "@/components/ui/title";

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  logo: string;
  description: string;
  link?: string;
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
    title: "Music Piano 7: Rush Song Games",
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    logo: "https://demo2.wpopal.com/hitboox/wp-content/uploads/2025/01/project_logo1.jpg",
    description:
      "An action-packed adventure where you battle mysterious creatures in a dream world",
    link: "#monster-dream",
  },
  {
    id: 2,
    title: "Kpop Piano Beats - Music Game",
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    logo: "https://demo2.wpopal.com/hitboox/wp-content/uploads/2025/01/project_logo2.jpg",
    description:
      "Embark on an epic journey filled with mysteries and forgotten memories",
    link: "#memories-quest",
  },
  {
    id: 3,
    title: "Music Rhythm Hop: Ball Game",
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    logo: "https://demo2.wpopal.com/hitboox/wp-content/uploads/2025/01/project_logo3.jpg",
    description: "Battle against the undead in this intense shooter experience",
    link: "#dead-curse",
  },
  {
    id: 4,
    title: "Eternal Conquest",
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
    logo: "https://demo2.wpopal.com/hitboox/wp-content/uploads/2025/01/project_logo4.jpg",
    description:
      "A story of a lost ember trapped in a puzzling place, searching for meaning and a way home",
    link: "#eternal-conquest",
  },
  {
    id: 5,
    title: "Spirit Resurrection",
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&q=80",
    logo: "https://demo2.wpopal.com/hitboox/wp-content/uploads/2025/01/project_logo5.jpg",
    description:
      "Command your forces and resurrect ancient spirits to win epic battles",
    link: "#spirit-resurrection",
  },
  {
    id: 6,
    title: "Shadow Omen",
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80",
    logo: "https://demo2.wpopal.com/hitboox/wp-content/uploads/2025/01/project_logo6.jpg",
    description:
      "Survive in a world shrouded in darkness and face ominous challenges",
    link: "#shadow-omen",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const logoStyle: CSSProperties = {
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  const infoWrapperStyle: CSSProperties = {
    transform: `translateY(${isHovered ? -8 : 0}px)`,
    transition: "transform 0.3s ease",
  };

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

      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
        <div
          className="w-24 h-24 rounded-2xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center overflow-hidden"
          style={logoStyle}
        >
          <img
            src={product.logo}
            alt={`${product.title} logo`}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="flex flex-col items-start gap-3"
          style={infoWrapperStyle}
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">
            {product.title}
          </h3>
          <Button size="sm" variant="tech">
            {product.category}
          </Button>
          {isHovered && (
            <div>
              <p className="text-white text-sm font-medium mb-3">
                {product.description}
              </p>
              <div className="flex gap-2">
                <Button
                  className="bg-white hover:bg-white/90"
                  size="icon"
                  aria-label={`Download ${product.title} on the App Store`}
                >
                  <img src={AppleLogo} alt="Apple" className="w-6 h-6" />
                </Button>
                <Button
                className="bg-white hover:bg-white/90"
                  size="icon"
                  aria-label={`Download ${product.title} on Google Play`}
                >
                  <img
                    src={GooglePlayLogo}
                    alt="Google Play"
                    className="w-6 h-6"
                  />
                </Button>
              </div>
            </div>
          )}
        </div>
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
    <section className="relative rounded-tl-[20px] rounded-br-[20px] bg-surfaceSecondary">
      <CornerClip corner="topRight" />
      <CornerClip corner="bottomLeft" />
      <div className="container py-[60px] lg:pb-36">
        <div className="mb-4">
          <span className="text-primary font-bold text-sm">WORKS</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
          <div>
            <Title as="h2" className="mb-8">
              OUR PRODUCTS
            </Title>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
              <Button variant="tech" size="lg">
                ALL PRODUCTS
              </Button>
              <p className="text-[20px] flex-1 max-w-2xl">
                We launch exciting games to the leading platforms of the
                international market with unique ideas and art
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 mt-16">
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
