import { CareersHero } from "@/components/careers/CareersHero";
import { OurTeams } from "@/components/careers/OurTeams";
import { WorkingAt } from "@/components/careers/WorkingAt";
import { HiringProcess } from "@/components/careers/HiringProcess";
import { ExploreJobs } from "@/components/careers/ExploreJobs";
import { PageLayout } from "@/components/layout/PageLayout";

const Careers = () => {
  return (
    <PageLayout>
      <CareersHero />
      <OurTeams />
      <WorkingAt />
      <HiringProcess />
      <ExploreJobs />
    </PageLayout>
  );
};

export default Careers;
