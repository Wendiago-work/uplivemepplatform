import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { OurProducts } from "@/components/OurProducts";
import { JoinUsSection } from "@/components/JoinUsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="pt-2 min-h-screen scroll-smooth">
      <Navigation />
      <div className="md:px-[10px]">
        <HeroSection />
        <AboutSection />
        <OurProducts />
      </div>
      <JoinUsSection />
      <div className="md:px-[10px]">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
