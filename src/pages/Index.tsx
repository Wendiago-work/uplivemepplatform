import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { CareersSection } from "@/components/CareersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth">
      <Navigation />
      <div className="snap-y snap-mandatory">
        <HeroSection />
        <ProductsSection />
      </div>
      <AboutSection />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;
