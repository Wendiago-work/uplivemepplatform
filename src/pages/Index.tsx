import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { OurProducts } from "@/components/OurProducts";
import { JoinUsSection } from "@/components/JoinUsSection";
import { PageLayout } from "@/components/layout/PageLayout";

const Index = () => {
  return (
    <PageLayout wrapperClassName="scroll-smooth" mainClassName="lg:pt-2" footerClassName="lg:px-[10px]">
      <div className="lg:px-[10px] flex flex-col gap-[60px] lg:gap-[150px]">
        <HeroSection />
        <AboutSection />
        <OurProducts />
        <JoinUsSection />
      </div>
    </PageLayout>
  );
};

export default Index;
