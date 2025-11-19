import { Navigation } from "@/components/Navigation";
import { ProductsSection } from "@/components/product/ProductsSection";
import { Footer } from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation />
      <main>
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
