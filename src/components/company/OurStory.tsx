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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16">
          {/* Left side - Sticky content */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start h-fit">
            <div className="flex flex-col md:flex-row lg:flex-col gap-4 md:gap-6">
              {/* Vertical "OUR STORY" text - hidden on mobile, shown on md+ */}
              <div className="hidden md:flex lg:hidden items-start pt-2">
                <span className="text-primary text-sm font-bold tracking-widest whitespace-nowrap origin-center -rotate-90 translate-y-16">
                  OUR STORY
                </span>
              </div>
              
              {/* Vertical text for lg+ */}
              <div className="hidden lg:flex items-start pt-2">
                <span className="text-primary text-sm font-bold tracking-widest whitespace-nowrap origin-center -rotate-90 translate-y-20">
                  OUR STORY
                </span>
              </div>

              {/* Main content */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4 lg:mb-6">
                  WE DEVELOP GAMES AND APPLICATIONS SINCE 2017
                </h2>
                <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                  Reliable partner for our clients, comfortable place to grow for our team.
                </p>
                <Button asChild size="lg" className="font-bold">
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
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 sm:h-56">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Year overlay */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-primary text-5xl sm:text-6xl font-black drop-shadow-lg">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
