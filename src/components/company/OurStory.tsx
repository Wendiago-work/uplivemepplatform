import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Title } from "@/components/ui/title";

const milestones = [
  {
    period: "2024",
    title: "2024 – Founding period",
    description:
      "We began as a compact, experimental team, building music games and tools, testing ideas fast, and proving we could turn small products into scalable global opportunities.",
  },
  {
    period: "2025",
    title: "2025 - Established MEP",
    description:
      "We officially established MEP as our product studio. Beyond spin-off projects, we started developing hybrid games and new concepts from scratch—strengthening our ability to learn fast, ship faster, and operate like a global company.",
  },
  {
    period: "Nov 2025",
    title: "Nov 2025 - Uplive & Publishing model",
    description:
      "We rebranded to Uplive, expanding from a music-game specialist into a global game & app company. Alongside our own IPs, we now co-create non-music games, launch apps, and build a publishing model that helps partners scale their products worldwide.",
  },
];

export const OurStory = () => {
  const timeline = milestones;

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Left side - Sticky content */}
          <div className="sticky top-24 lg:col-span-4 md:self-start h-fit">
            <div className="flex flex-col md:flex-row lg:flex-col gap-4 md:gap-6">
              {/* Main content */}
              <div className="flex-1">
                <Title as="h2" className="mb-6">
                  OUR STORY
                </Title>
                <p className="text-[20px] mb-6 lg:mb-8 leading-relaxed">
                  Reliable partner for our clients, comfortable place to grow for our team.
                </p>
                <Button asChild size="lg" variant="tech">
                  <Link to="/careers">MEET THE TEAM</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Timeline items */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="grid grid-cols-[5rem_auto] md:grid-cols-[8rem_auto]  gap-4">
                  <div className="flex flex-col items-center lg:items-end text-right text-primary font-semibold text-sm">
                    <span>{item.period}</span>
                  </div>
                  <div className="grid grid-cols-[20px_auto] gap-8">
                    <div className="relative flex justify-center">
                      <div className="w-0.5 bg-gray-300/0" aria-hidden>
                        <div
                          className={`absolute left-1/2 w-px -translate-x-1/2 border-l-2 border-dotted border-gray-300 ${
                            index === 0 ? "top-0" : "top-[-1.5rem]"
                          } ${
                            index === timeline.length - 1
                              ? "bottom-0"
                              : "bottom-[-1.5rem]"
                          }`}
                        />
                      </div>
                      <div className="absolute w-3 h-3 rounded-full bg-accent top-2 -translate-y-1/2" />
                    </div>
                    <div className="pb-8">
                    <h3 className="text-2xl font-bold leading-[1] text-foreground mb-4">
                        {item.title}
                      </h3>
                      <p className="text-base text-foreground/90 leading-relaxed">
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
