import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BorderShape = ({ side }: { side: "left" | "right" }) => (
  <span
    className={`absolute bottom-[-28px] w-[clamp(120px,10vw,200px)] h-[clamp(60px,8vw,110px)] text-white pointer-events-none z-[2] block ${
      side === "left" ? "left-0" : "right-0 scale-x-[-1]"
    }`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 160 60"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block fill-current"
    >
      <path d="M147.269 54.72L117.876 25.28C114.502 21.9015 109.919 20 105.145 20H0V60H160C155.226 60 150.642 58.0985 147.269 54.72Z" />
      <path d="M0 0V20H20C8.95435 20 0 11.0457 0 0Z" />
    </svg>
  </span>
);

export const ProductsHero = () => {
  return (
    <section
      id="products-hero"
      className="relative w-full flex flex-col overflow-visible mt-20 px-[10px]"
    >
      <div className="relative min-h-[700px] md:min-h-[900px] flex items-start rounded-[20px] overflow-visible">
        <div className="absolute inset-0 bg-[url('assets/company-hero.png')] bg-cover bg-center rounded-[20px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent rounded-[20px]" />
        
        <div className="relative z-10 px-8 md:px-16 pt-12 md:pt-16">
          <h1 className="text-7xl md:text-9xl font-black text-white leading-none text-left max-w-[50vw]">
            Making the world play our hits
          </h1>
        </div>

        <div className="absolute bottom-8 left-8 md:left-16 z-10 flex items-center gap-2 text-white/80">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Products</span>
        </div>

        <BorderShape side="right"/>
      </div>
    </section>
  );
};
