import { CompanyHero } from "@/components/company/CompanyHero";
import { AboutUsHero } from "@/components/company/AboutUsHero";
import { OurValues } from "@/components/company/OurValues";
import { OurStory } from "@/components/company/OurStory";
import { OurExpertise } from "@/components/company/Benefits";
import { WorkPlayGallery } from "@/components/company/LifeAtUplive";
import { JoinUs } from "@/components/company/JoinUs";
import { PageLayout } from "@/components/layout/PageLayout";

const Company = () => {
  return (
    <PageLayout>
      <CompanyHero />
      <AboutUsHero />
      <OurValues />
      <OurStory />
      <OurExpertise />
      <WorkPlayGallery />
      <JoinUs />
    </PageLayout>
  );
};

export default Company;
