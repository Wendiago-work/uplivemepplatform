import { strings } from "@/lib/strings";
import { ChevronRight } from "lucide-react";

export const OurValues = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            {strings.companyPage.values.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {strings.companyPage.values.description}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
          >
            {strings.companyPage.values.cta}
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {strings.companyPage.values.items.map((item) => (
            <div
              key={item.number}
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-blue-600 font-bold text-lg mb-3">
                {item.number}
              </div>
              <h3 className="text-black font-semibold text-lg">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
