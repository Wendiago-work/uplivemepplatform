import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Lightbulb, Sparkles, Rocket, TrendingUp, Database, TestTube, Wand2, DollarSign, BarChart3, Gamepad2 } from "lucide-react";

export default function PublishingApps() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Build the next hit game
              </h1>
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">8 billion</div>
                  <div className="text-lg text-gray-600">downloads</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">#1 publisher</div>
                  <div className="text-lg text-gray-600">yearly since 2018</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150 million</div>
                  <div className="text-lg text-gray-600">monthly active users</div>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full">
                Start now
              </Button>
            </div>
            <div className="relative h-[500px] hidden lg:block">
              {/* Placeholder for hero illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">Product</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tried and tested playbook
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Over 10 years of trial and error, constantly refining our approach and adjusting with our latest learnings.
          </p>

          {/* Playbook Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: TestTube,
                title: "Prototype",
                description: "Work on the most promising concepts. Test fast. Gather feedback.",
              },
              {
                icon: Sparkles,
                title: "Iterate",
                description: "Nail your core loop and build your roadmap with experts. Improve long term retention.",
              },
              {
                icon: Rocket,
                title: "Launch",
                description: "Monetize your game. Increase its depth with progression design and economy.",
              },
              {
                icon: TrendingUp,
                title: "Scale",
                description: "Maximize your scale across top geos and networks. Introduce live ops with casual experts.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-3xl p-6 mb-6 aspect-[3/4] flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Case studies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mb-6"></div>
                <div className="text-blue-600 font-semibold mb-3 uppercase text-sm">CASE STUDY: BLOCK JAM</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Discover how we cracked Block Jam's IAP monetization
                </h4>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6"></div>
                <div className="text-blue-600 font-semibold mb-3 uppercase text-sm">CASE STUDY: MOB CONTROL</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Learn how we hybridized a hypercasual hit
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-orange-500" />
                <span className="text-orange-500 font-semibold text-lg">Growth</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Scale massively
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Voodoo's success is fueled by its top-tier marketing team—one of the best in the industry. 
                Our experts in user acquisition, creative production, and monetization have a strong track 
                record of scaling games profitably. They leverage a cutting-edge tech stack, featuring revenue 
                prediction, creative automation, and our proprietary ad network.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">25,000</div>
                  <div className="text-gray-600">Creatives produced per year</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">250B</div>
                  <div className="text-gray-600">Ad impressions per year</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl"></div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Case studies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mb-6"></div>
                <div className="text-blue-600 font-semibold mb-3 uppercase text-sm">CASE STUDY: BLOCK JAM</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Learn how Growth turned Block Jam 3D's into our 1# puzzle hit
                </h4>
              </div>
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-6"></div>
                <div className="text-blue-600 font-semibold mb-3 uppercase text-sm">CASE STUDY: PAPER.IO 2</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Discover how we scaled Paper.io 2 on TikTok
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-6 h-6 text-cyan-500" />
            <span className="text-cyan-500 font-semibold text-lg">Tech</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            A powerful backbone for your games
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            We've got the tech covered with advanced automation and smooth integration, 
            so you can keep your focus on the game.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TestTube,
                title: "Testing Dashboard",
                description: "Fastest way to launch and test prototypes",
                color: "blue",
              },
              {
                icon: Wand2,
                title: "SDK Package",
                description: "One SDK with everything to grow, analyze, and monetize games",
                color: "pink",
              },
              {
                icon: BarChart3,
                title: "Analytics",
                description: "Best-in-class dashboards to make the right decisions",
                color: "orange",
              },
              {
                icon: Sparkles,
                title: "AB Testing",
                description: "Powerful AB Testing and Remote Configuration management",
                color: "green",
              },
              {
                icon: DollarSign,
                title: "IAP Management",
                description: "Effortlessly manage purchases and inventory",
                color: "red",
              },
              {
                icon: Gamepad2,
                title: "Game Backend",
                description: "Build multiplayer games with social & competitive features",
                color: "yellow",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-100 flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Meet the team
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Partner studios get expert coaching, with publishing managers refining ideas 
                and a 20+ team supporting each game launch.
              </p>
            </div>
            <div className="relative h-[400px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl">
              {/* Placeholder for team photo */}
            </div>
          </div>

          {/* Partner Logos Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">They trust us</h3>
            <div className="relative overflow-hidden">
              <div className="flex gap-16 items-center justify-center animate-scroll">
                {["STONE AXE", "BOX", "h8games", "tapped", "Cassette", "PARTYUP"].map((partner, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="text-2xl font-bold text-gray-400">{partner}</div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {["STONE AXE", "BOX", "h8games", "tapped", "Cassette", "PARTYUP"].map((partner, index) => (
                  <div key={`dup-${index}`} className="flex-shrink-0">
                    <div className="text-2xl font-bold text-gray-400">{partner}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-[1200px] text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Start building hits with us
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We'll guide you from concept to creation, ensuring your success and maximizing your earnings.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full">
            Start now →
          </Button>
        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
}
