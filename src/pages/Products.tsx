import { Navigation } from "@/components/Navigation";
import { ProductsHero } from "@/components/product/ProductsHero";
import { ProductsSection } from "@/components/product/ProductsSection";
import { Footer } from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation />
      <main>
        <ProductsHero />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
