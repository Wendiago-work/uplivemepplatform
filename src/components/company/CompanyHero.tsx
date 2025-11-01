import { strings } from "@/lib/strings";

export const CompanyHero = () => {
  return (
    <section
      id="company-hero"
      className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-6 max-w-[1024px] relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-white text-center max-w-5xl mx-auto leading-tight">
          {strings.companyPage.hero.vision}
        </h1>
      </div>
    </section>
  );
};
