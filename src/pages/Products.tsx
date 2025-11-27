import { ProductsHero } from "@/components/product/ProductsHero";
import { OurGames } from "@/components/product/OurGames";
import { OurApps } from "@/components/product/OurApps";
import { Publishing } from "@/components/product/Publishing";
import { SubmitSection } from "@/components/product/SubmitSection";
import { PartnersBanner } from "@/components/product/PartnersBanner";
import { PageLayout } from "@/components/layout/PageLayout";

const Products = () => {
  return (
    <PageLayout>
      <div className="lg:px-[10px] flex flex-col gap-[60px] lg:gap-[150px]">
        <ProductsHero />
        <OurGames />
        <OurApps />
        <Publishing />
        <PartnersBanner />
        <SubmitSection />
      </div>
    </PageLayout>
  );
};

export default Products;
