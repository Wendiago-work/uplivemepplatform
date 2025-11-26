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
      <div className="px-[10px] flex flex-col gap-[60px] lg:gap-[150px]">
        <CompanyHero />
        <AboutUsHero />
        <OurValues />
        <OurStory />
        <OurExpertise />
        <WorkPlayGallery />
        <JoinUs />
      </div>
    </PageLayout>
  );
};

export default Company;
