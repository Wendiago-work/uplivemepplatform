import { ProductsHero } from "@/components/product/ProductsHero";
import { OurGames } from "@/components/product/OurGames";
import { OurApps } from "@/components/product/OurApps";
import { Publishing } from "@/components/product/Publishing";
import { SubmitSection } from "@/components/product/SubmitSection";
import { PageLayout } from "@/components/layout/PageLayout";

const Products = () => {
  return (
    <PageLayout>
      <ProductsHero />
      <OurGames />
      <OurApps />
      <Publishing />
      <SubmitSection />
    </PageLayout>
  );
};

export default Products;
