import { strings } from "@/lib/strings";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BorderShape = () => (
  <span
    className="absolute bottom-[-27px] right-0 w-[clamp(120px,10vw,200px)] h-[clamp(60px,8vw,110px)] text-white pointer-events-none z-[2] block scale-x-[-1]"
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

export const CompanyHero = () => {
  return (
    <section
      id="company-hero"
      className="relative w-full flex flex-col overflow-visible mt-20"
    >
      <div className="relative min-h-[500px] md:min-h-[600px] flex items-center rounded-t-[20px] overflow-visible">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center rounded-t-[20px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent rounded-t-[20px]" />
        
        <div className="container mx-auto relative z-10 px-8 md:px-16">
          <h1 className="text-7xl md:text-9xl font-black text-white leading-none">
            ABOUT US
          </h1>
        </div>

        <div className="absolute bottom-8 left-8 md:left-16 z-10 flex items-center gap-2 text-white/80">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">About us</span>
        </div>

        <BorderShape />
      </div>
    </section>
  );
};
