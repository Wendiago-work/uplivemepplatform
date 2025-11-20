import { Play } from "lucide-react";
import { useState } from "react";

export const JoinUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Add video play logic here
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-neighborhood-in-the-forest-50785-large.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
            CREATE YOUR DREAM<br />
            GAME <Play className="inline-block w-16 h-16 md:w-20 md:h-20 bg-primary text-white rounded-xl p-4 mx-2 cursor-pointer hover:scale-110 transition-transform" onClick={handlePlayClick} /> WITH US!
          </h2>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
