import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CompanyHero } from "@/components/company/CompanyHero";
import { OurValues } from "@/components/company/OurValues";
import { TeamGallery } from "@/components/company/TeamGallery";
import { OurStory } from "@/components/company/OurStory";
import { OurExpertise } from "@/components/company/OurExpertise";
import { WorkPlayGallery } from "@/components/company/WorkPlayGallery";
import { JoinUsSection } from "@/components/JoinUsSection";

const Company = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <CompanyHero />
        <OurValues />
        <TeamGallery />
        <OurStory />
        <OurExpertise />
        <WorkPlayGallery />
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Company;
