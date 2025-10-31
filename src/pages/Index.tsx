import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { CareersSection } from "@/components/CareersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-proximity" style={{ scrollBehavior: 'smooth' }}>
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <CareersSection />
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
