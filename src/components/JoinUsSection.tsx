import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { strings } from "@/lib/strings";

export const JoinUsSection = () => {
  return (
    <section className="relative bg-[#f5f5f7] py-20 overflow-hidden">
      {/* Publisher Logos */}
      <div className="container mx-auto mb-12">
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-30">
          <div className="text-2xl font-bold text-gray-400">GAMELOFT</div>
          <div className="text-2xl font-bold text-gray-400">UBISOFT</div>
          <div className="text-2xl font-bold text-gray-400">ACTIVISION</div>
          <div className="text-2xl font-bold text-gray-400">SONY</div>
          <div className="text-2xl font-bold text-gray-400">XBOX</div>
          <div className="text-2xl font-bold text-gray-400">NINTENDO</div>
        </div>
      </div>

      {/* Diagonal Animated Banners */}
      <div className="relative mb-16">
        {/* First Banner - moving right */}
        <motion.div
          className="bg-primary py-6 -rotate-2 mb-4"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="flex gap-8 whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-white text-3xl md:text-5xl font-black uppercase tracking-wider">
                  TRUSTED BY TOP GAMING PUBLISHERS
                </span>
                <span className="text-white text-3xl">/</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Second Banner - moving left */}
        <motion.div
          className="bg-primary py-6 rotate-1"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="flex gap-8 whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-white text-3xl md:text-5xl font-black uppercase tracking-wider">
                  TRUSTED BY TOP GAMING PUBLISHERS
                </span>
                <span className="text-white text-3xl">/</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Character Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Diamonds */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-20 left-10 w-12 h-12 bg-blue-400 rotate-45 opacity-70"
              />
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-32 right-16 w-8 h-8 bg-cyan-400 rotate-45 opacity-70"
              />
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-32 right-8 w-10 h-10 bg-purple-500 rotate-45 opacity-60"
              />
              
              {/* Character Placeholder - Replace with actual illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎮</div>
                  <div className="text-6xl">👦</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              {strings.careers.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {strings.careers.description}
            </p>
            <Link
              to="/careers"
              className="inline-block bg-primary hover:bg-primary-deep text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              {strings.careers.cta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
