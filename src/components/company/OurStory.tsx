import { strings } from "@/lib/strings";
import { ChevronRight } from "lucide-react";

export const OurStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side - Title */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-5xl font-bold text-black mb-6">
                {strings.companyPage.story.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {strings.companyPage.story.subtitle}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
              >
                {strings.companyPage.story.cta}
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Timeline */}
          <div className="lg:col-span-8">
            <div className="space-y-16">
              {strings.companyPage.story.timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Vertical line */}
                  {index !== strings.companyPage.story.timeline.length - 1 && (
                    <div className="absolute left-0 top-8 bottom-0 w-px bg-gray-200" />
                  )}
                  
                  <div className="flex gap-8">
                    {/* Period */}
                    <div className="flex-shrink-0 w-32">
                      <div className="text-gray-500 font-medium">
                        {item.period}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
