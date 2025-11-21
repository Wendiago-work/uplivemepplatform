import { motion } from "framer-motion";
import { CornerClip } from "@/components/ui/corner-clip";

const publishingData = [
    {
        number: "01",
        title: "A decade of excellence",
        description:
            "We have worked on games across genres for all the top gaming platforms, all to the highest standards.",
    },
    {
        number: "02",
        title: "End-to-end game development",
        description:
            "We handle the entire production process of games, from the idea to its release, without any external assistance required.",
    },
    {
        number: "03",
        title: "Fully fledged art & design team",
        description:
            "We have a complete game art team. This includes concept artists, 2D artists, modelers, UI designers, and animators.",
    },
    {
        number: "04",
        title: "Live operations & support",
        description:
            "We help you generate maximum revenue through data-analysis & strategic monetization methods.",
    },
];

export const Publishing = () => {
    return (
        <section className="relative mx-[10px] mt-4">
            <div className="relative rounded-tl-[20px] rounded-br-[20px] bg-accent overflow-hidden px-6 py-14 lg:px-16 lg:py-20">
                <CornerClip corner="topRight" />
                <CornerClip corner="bottomLeft" />

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://demo2.wpopal.com/hitboox/wp-content/uploads/2024/12/h3_img-5.png"
                        alt="Background pattern"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/40" />
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 mb-20">
                        {/* Left Content */}
                        <div className="flex-1 max-w-2xl pt-10">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-white/80 font-bold tracking-widest uppercase -rotate-90 origin-left translate-y-1 translate-x-1 text-sm">
                                    WHY US
                                </span>
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9]">
                                    AN LEADING GAME <br />
                                    DEVELOPMENT COMPANY
                                </h2>
                            </div>
                            <p className="text-lg md:text-xl text-white/90 font-medium max-w-xl ml-12">
                                We are specialized in developing out-of-the-box solutions using emerging technologies
                            </p>
                        </div>

                        {/* Right Image - Mascot */}
                        <div className="relative w-full max-w-[400px] lg:max-w-[500px] lg:-mt-20 lg:-mr-10 pointer-events-none">
                            <motion.img
                                src="https://res.cloudinary.com/dsmn3rwyp/image/upload/v1763658709/mascot_g8fjof.png"
                                alt="Mascot"
                                className="w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(var(--primary),0.6)]"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {publishingData.map((item, index) => (
                            <div
                                key={item.number}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[30px] p-8 hover:bg-white/10 transition-colors duration-300 overflow-hidden"
                            >
                                {/* Corner Clip Effect for Cards (Visual only) */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 -mr-8 -mt-8 rotate-45 transform origin-center" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Number Icon */}
                                    <div className="mb-6">
                                        <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 stroke-white">
                                            {item.number}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-white/70 text-sm leading-relaxed">
                                        {item.description}
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
