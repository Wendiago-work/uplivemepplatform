import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const milestones = [
  {
    year: "2017",
    title: "Hitboox is founded",
    description: "For over 7 years, we've become experts in game development, providing various services including full-cycle game development.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
  },
  {
    year: "2018",
    title: "First office opened",
    description: "For over 7 years, we've become experts in game development, providing various services including full-cycle game development.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
  },
  {
    year: "2019",
    title: "Our game is lauched!",
    description: "Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
  },
  {
    year: "2020",
    title: "Reached 1M users",
    description: "Our platform grew exponentially, reaching millions of active users worldwide.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074"
  }
];

export const OurStory = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Sticky content */}
          <div className="lg:sticky lg:top-24 lg:self-start h-fit">
            <div className="flex gap-6 md:gap-8">
              {/* Vertical "OUR STORY" text */}
              <div className="flex items-start pt-2">
                <span className="text-primary text-sm md:text-base font-bold tracking-widest whitespace-nowrap origin-center -rotate-90 translate-y-20">
                  OUR STORY
                </span>
              </div>

              {/* Main content */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                  WE DEVELOP GAMES AND APPLICATIONS SINCE 2017
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Reliable partner for our clients, comfortable place to grow for our team.
                </p>
                <Button asChild size="lg" className="font-bold">
                  <Link to="/careers">MEET THE TEAM</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Timeline items */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Year overlay */}
                  <div className="absolute bottom-6 left-6">
                    <span className="text-primary text-6xl md:text-7xl font-black drop-shadow-lg">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
