import { motion } from "framer-motion";
import { strings } from "@/lib/strings";
import { careersTeams } from "@/constants/careersTeams";

export const OurTeams = () => {
  return (
    <section id="our-teams" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-[1024px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">{strings.careersPage.teams.title}</h2>
          <p className="text-lg text-gray-700 max-w-3xl">{strings.careersPage.teams.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careersTeams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={team.image}
                    alt={team.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 flex items-center gap-3 hover:text-blue-700">
                  <team.icon className="w-6 h-6 text-black flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-black">{team.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
