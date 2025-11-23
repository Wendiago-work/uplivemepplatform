import { motion } from "framer-motion";
import { strings } from "@/lib/strings";
import { careersTeams } from "@/constants/careersTeams";

export const OurTeams = () => {
  return (
    <section id="our-teams" className="px-6 mx-[10px] mb-[150px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{strings.careersPage.teams.title}</h2>
          <p className="text-lg max-w-3xl">{strings.careersPage.teams.description}</p>
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
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={team.image}
                    alt={team.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">{team.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
