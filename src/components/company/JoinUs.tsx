import { strings } from "@/lib/strings";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const JoinUs = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            {strings.companyPage.joinUs.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {strings.companyPage.joinUs.description}
          </p>
          <Link to="/careers">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              {strings.companyPage.joinUs.cta}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
