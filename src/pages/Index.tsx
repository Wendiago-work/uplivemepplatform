import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { OurProducts } from "@/components/OurProducts";
import { JoinUsSection } from "@/components/JoinUsSection";
import { PageLayout } from "@/components/layout/PageLayout";

const Index = () => {
  return (
    <PageLayout wrapperClassName="scroll-smooth" mainClassName="md:pt-2" footerClassName="md:px-[10px]">
      <div className="md:px-[10px]">
        <HeroSection />
        <AboutSection />
        <OurProducts />
      </div>
      <JoinUsSection />
    </PageLayout>
  );
};

export default Index;
