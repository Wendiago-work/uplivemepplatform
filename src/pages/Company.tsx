import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CompanyHero } from "@/components/company/CompanyHero";
import { AboutUsHero } from "@/components/company/AboutUsHero";
import { OurValues } from "@/components/company/OurValues";
import { OurStory } from "@/components/company/OurStory";
import { OurExpertise } from "@/components/company/Benefits";
import { WorkPlayGallery } from "@/components/company/LifeAtUplive";
import { JoinUs } from "@/components/company/JoinUs";

const Company = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <CompanyHero />
        <AboutUsHero />
        <OurValues />
        <OurStory />
        <OurExpertise />
        <WorkPlayGallery />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

export default Company;
