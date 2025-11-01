import { strings } from "@/lib/strings";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const JoinUs = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[1024px]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            {strings.companyPage.joinUs.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {strings.companyPage.joinUs.description}
          </p>
          <Link to="/careers" className="inline-flex items-center gap-1 text-blue-700 font-bold hover:gap-3 transition-all">
              {strings.companyPage.joinUs.cta}
              <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
