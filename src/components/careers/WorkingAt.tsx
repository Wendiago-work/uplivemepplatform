import { motion } from "framer-motion";
import { strings } from "@/lib/strings";
import { CornerClip } from "@/components/ui/corner-clip";

const VIDEOS = [
  "aqz-KE-bpKQ", // Vertical Video 1
  "r_mI-_Wb-9Y", // Vertical Video 2
];

export const WorkingAt = () => {
  return (
    <section className="relative mx-[10px] mb-[150px] rounded-tl-[20px] rounded-br-[20px] bg-surfaceSecondary pt-20 pb-32">
      <CornerClip corner="topRight" />
      <CornerClip corner="bottomLeft" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {strings.careersPage.working.title}
          </h2>
          <p className="text-lg max-w-3xl">
            {strings.careersPage.working.description}
          </p>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row gap-8 h-[600px]">
          {VIDEOS.map((videoId, index) => (
            <motion.div
              key={videoId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex-1 rounded-[32px] overflow-hidden shadow-2xl"
            >
              <iframe
                className="w-full h-full object-cover"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&loop=1&playlist=${videoId}`}
                title={`Working at UpLive ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
