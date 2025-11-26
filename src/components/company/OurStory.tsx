import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Title } from "@/components/ui/title";

const milestones = [
  {
    year: "2024",
    title: "2024 – Founding period",
    description: "We began as a compact, experimental team, building music games and tools, testing ideas fast, and proving we could turn small products into scalable global opportunities.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
  },
  {
    year: "2025",
    title: "2025 - Established MEP",
    description: "We officially established MEP as our product studio. Beyond spin-off projects, we started developing hybrid games and new concepts from scratch—strengthening our ability to learn fast, ship faster, and operate like a global company.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
  },
  {
    year: "2025",
    title: "Nov 2025 - Uplive & Publishing model",
    description: "We rebranded to Uplive, expanding from a music-game specialist into a global game & app company. Alongside our own IPs, we now co-create non-music games, launch apps, and build a publishing model that helps partners scale their products worldwide.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
  },
];

export const OurStory = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16">
          {/* Left side - Sticky content */}
          <div className="sticky top-24 md:col-span-2 md:self-start h-fit">
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
          <div className="lg:col-span-3 space-y-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-48 sm:h-56">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {milestone.title}
                  </h3>
                  <p>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
