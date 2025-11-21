import { Navigation } from "@/components/Navigation";
import { ProductsHero } from "@/components/product/ProductsHero";
import { OurGames } from "@/components/product/OurGames";
import { Footer } from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProductsHero />
        <OurGames />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
