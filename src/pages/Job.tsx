import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin, Home } from "lucide-react";
import { useSearchParams } from "react-router-dom";

// Mock job data - in a real app, this would come from an API
const jobData = {
  id: "1",
  title: "Growth Business Analyst - Internship",
  team: "Growth",
  location: "Paris",
  workType: "Hybrid",
  applyUrl: "#apply",
  sections: {
    about: {
      title: "About UpLive",
      content: [
        "Founded in 2013, UpLive is a tech company that creates mobile games and apps with a mission to entertain the world. Gathering 800 employees, 7 billion downloads, and over 200 million active users, UpLive is the #3 mobile publisher worldwide in terms of downloads after Google and Meta. Our portfolio includes chart-topping games like Mob Control and Block Jam, alongside popular apps such as BeReal and Wizz.",
        "Please note that we have rotating internship opportunities available every six months, providing ongoing opportunities for new talent to join our team."
      ]
    },
    team: {
      title: "Team",
      content: [
        "Our Growth team helps maximize the potential of each UpLive product within the ecosystem. The team is split into several job expertise such as user acquisition, ad monetization, video ads, playable ads, and influencer marketers. Being part of the Growth Team at UpLive requires a lot of operational excellence and creativity in order to constantly adapt ourselves to stay ahead of the rest of the market."
      ]
    },
    role: {
      title: "Role",
      content: [
        "UpLive is looking for a Business Analyst to support user acquisition strategy and daily operations on a portfolio of games or apps. Reporting to one of our Lead User Acquisition Managers, you will leverage your strategic thinking, analytical and creativity skills to turn great mobile products into global hits."
      ],
      bullets: [
        "Take a data-led approach to understanding the performance and underlying drivers of our Growth campaigns, analyze and build new strategies to optimize performance.",
        "Conduct thorough analysis of the results and make recommendations to increase our games' and apps' performance",
        "Plan and manage user acquisition campaigns for multiple games and/or apps and work closely with stakeholders to coordinate efforts and share feedback",
        "Use our suite of internal data & growth tools and interface with our team to improve business processes continuously",
        "Deepen your Growth expertise and share best practices with other teams to keep our organization at the forefront of growth innovation and lead transversal projects"
      ]
    },
    profile: {
      title: "Profile",
      bullets: [
        "You are currently enrolled in a relevant Masters degree program (Marketing, Business, Data Analysis, or a related field) in top business & engineering schools and looking for a 6 months end-of-studies internship",
        "You have strong analytical and quantitative skills,",
        "You have a basic knowledge of major advertising platforms",
        "You have an understanding of the creative elements involved in user acquisition.",
        "You have a problem-solving mindset with the ability to identify challenges and propose solutions to optimize growth activities.",
        "You are detail oriented and proactive.",
        "You speak and write English fluently.",
        "You are passionate about mobile gaming.",
        "You wish to work in an environment that values candor, freedom, and responsibility"
      ]
    },
    benefits: {
      title: "Benefits",
      bullets: [
        "Swile Lunch voucher",
        "Gymlib (100% borne by UpLive)",
        "Wellness activities in our Paris office"
      ]
    }
  },
  sidebar: [
    {
      image: "/placeholder.svg",
      label: "Growth team"
    },
    {
      image: "/placeholder.svg",
      label: "Our values"
    }
  ]
};

const Job = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("id");

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Job Header */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {jobData.title}
                </h1>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 text-sm font-medium">
                    <Sparkles className="w-4 h-4 mr-2" />
                    {jobData.team}
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 text-sm font-medium">
                    <MapPin className="w-4 h-4 mr-2" />
                    {jobData.location}
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 text-sm font-medium">
                    <Home className="w-4 h-4 mr-2" />
                    {jobData.workType}
                  </Badge>
                </div>

                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-medium rounded-full"
                  onClick={() => window.open(jobData.applyUrl, '_blank')}
                >
                  Apply now
                </Button>
              </div>

              {/* About Section */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {jobData.sections.about.title}
                </h2>
                {jobData.sections.about.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Team Section */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {jobData.sections.team.title}
                </h2>
                {jobData.sections.team.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Role Section */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {jobData.sections.role.title}
                </h2>
                {jobData.sections.role.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                <ul className="space-y-3 mt-4">
                  {jobData.sections.role.bullets.map((bullet, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed flex">
                      <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Profile Section */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {jobData.sections.profile.title}
                </h2>
                <ul className="space-y-3">
                  {jobData.sections.profile.bullets.map((bullet, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed flex">
                      <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Benefits Section */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {jobData.sections.benefits.title}
                </h2>
                <ul className="space-y-3">
                  {jobData.sections.benefits.bullets.map((bullet, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed flex">
                      <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Bottom Apply Button */}
              <div className="pt-6 border-t border-gray-200">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-medium rounded-full"
                  onClick={() => window.open(jobData.applyUrl, '_blank')}
                >
                  Apply now
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {jobData.sidebar.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.label}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer theme="light" />
    </div>
  );
};

export default Job;
