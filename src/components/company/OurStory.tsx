import { strings } from "@/lib/strings";
import { ChevronRight } from "lucide-react";
import { AnimatedLinkText } from "@/components/ui/button";

export const OurStory = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
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
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                <AnimatedLinkText className="text-primary font-medium">
                  {strings.companyPage.story.cta}
                </AnimatedLinkText>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Timeline */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {strings.companyPage.story.timeline.map((item, index) => (
                <div key={index} className="grid grid-cols-[8rem_auto] gap-4">
                  <div className="flex flex-col items-end text-right text-gray-500 font-semibold text-sm top-32">
                    <span>{item.period}</span>
                  </div>
                  <div className="grid grid-cols-[20px_auto] gap-8">
                    <div className="relative flex justify-center">
                      <div className="w-0.5 bg-gray-300/0" aria-hidden>
                        <div
                          className={`absolute left-1/2 w-px -translate-x-1/2 border-l-2 border-dotted border-gray-300 ${
                            index === 0 ? "top-0" : "top-[-1.5rem]"
                          } ${
                            index === strings.companyPage.story.timeline.length - 1
                              ? "bottom-0"
                              : "bottom-[-1.5rem]"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="pb-8">
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
