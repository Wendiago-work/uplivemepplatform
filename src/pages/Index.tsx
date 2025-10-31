import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { CareersSection } from "@/components/CareersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;
