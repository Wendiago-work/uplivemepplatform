import { CareersHero } from "@/components/careers/CareersHero";
import { OurTeams } from "@/components/careers/OurTeams";
import { WorkingAt } from "@/components/careers/WorkingAt";
import { HiringProcess } from "@/components/careers/HiringProcess";
import { ExploreJobs } from "@/components/careers/ExploreJobs";
import { WorkPlayGallery } from "@/components/company/LifeAtUplive";
import { PageLayout } from "@/components/layout/PageLayout";

const Careers = () => {
  return (
    <PageLayout>
      <div className="lg:px-[10px] flex flex-col gap-[60px] lg:gap-[150px]">
      <CareersHero />
      <OurTeams />
      <WorkingAt />
      <WorkPlayGallery />
      <HiringProcess />
      <ExploreJobs />
      </div>
    </PageLayout>
  );
};

export default Careers;
