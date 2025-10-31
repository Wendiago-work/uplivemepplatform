import { Navigation } from "@/components/Navigation";
import { CareersHero } from "@/components/careers/CareersHero";
import { OurTeams } from "@/components/careers/OurTeams";
import { WorkingAt } from "@/components/careers/WorkingAt";
import { HiringProcess } from "@/components/careers/HiringProcess";
import { ExploreJobs } from "@/components/careers/ExploreJobs";
import { Footer } from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CareersHero />
      <OurTeams />
      <WorkingAt />
      <HiringProcess />
      <ExploreJobs />
      <Footer />
    </div>
  );
};

export default Careers;
