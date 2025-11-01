import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CompanyHero } from "@/components/company/CompanyHero";
import { OurValues } from "@/components/company/OurValues";
import { AboutUs } from "@/components/company/AboutUs";
import { OurStory } from "@/components/company/OurStory";
import { LatestNews } from "@/components/company/LatestNews";
import { JoinUs } from "@/components/company/JoinUs";

const Company = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <CompanyHero />
        <OurValues />
        <AboutUs />
        <OurStory />
        <LatestNews />
        <JoinUs />
      </main>
      <Footer theme="light" />
    </div>
  );
};

export default Company;
