import { strings } from "@/lib/strings";
import { ChevronRight } from "lucide-react";

export const LatestNews = () => {
  const newsImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071",
    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074",
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-[1024px]">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl font-bold text-black">
            {strings.companyPage.news.title}
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
          >
            {strings.companyPage.news.cta}
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strings.companyPage.news.items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={newsImages[index]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
