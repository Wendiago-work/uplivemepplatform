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
      <HeroSection />
      <AboutSection />
      <OurProducts />
      <JoinUsSection />
      <Footer />
    </div>
  );
};

export default Index;
