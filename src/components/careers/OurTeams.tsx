import { motion } from "framer-motion";
import { strings } from "@/lib/strings";
import { Gamepad2, Smartphone, TrendingUp, Code, Users, Briefcase } from "lucide-react";

const teams = [
  {
    id: "gaming",
    icon: Gamepad2,
    title: strings.careersPage.teams.gaming.title,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80"
  },
  {
    id: "apps",
    icon: Smartphone,
    title: strings.careersPage.teams.apps.title,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: strings.careersPage.teams.growth.title,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    id: "engineering",
    icon: Code,
    title: strings.careersPage.teams.engineering.title,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
  },
  {
    id: "people",
    icon: Users,
    title: strings.careersPage.teams.people.title,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
  },
  {
    id: "business",
    icon: Briefcase,
    title: strings.careersPage.teams.business.title,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
  }
];

export const OurTeams = () => {
  return (
    <section id="our-teams" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {strings.careersPage.teams.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            {strings.careersPage.teams.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <img
                  src={team.image}
                  alt={team.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="flex items-center gap-3">
                <team.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-black">{team.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
