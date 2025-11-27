import { motion } from "framer-motion";
import { CornerClip } from "@/components/ui/corner-clip";
import { Title } from "@/components/ui/title";

const publishingData = [
    {
        number: "01",
        title: "Game Submission",
        description:
            "Want to create a chart-topping game? Submit your game to us and get ready to fly.",
    },
    {
        number: "02",
        title: "First Test",
        description:
            "We thoroughly analyze and test your project at every stage of development to ensure perfection.",
    },
    {
        number: "03",
        title: "UA & Monetization",
        description:
            "We provide technical marketing support such as essential analytics or A/B testing to make your game profitable.",
    },
    {
        number: "04",
        title: "Launch a hit",
        description:
            "Launch the game successfully with the help of analytical data and insights..",
    },
];

export const Publishing = () => {
    return (
        <section className="relative mt-20">
            {/* Background Container (Clipped) */}
            <div className="absolute inset-0 rounded-tl-[20px] rounded-br-[20px] bg-footer overflow-hidden isolate">
                <CornerClip corner="topRight" />
                <CornerClip corner="bottomLeft" />

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://demo2.wpopal.com/hitboox/wp-content/uploads/2024/12/h3_img-5.png"
                        alt="Background pattern"
                        className="w-full h-full object-cover opacity-100 transform-gpu"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-footer/80 to-transparent" />
                </div>
            </div>

            <div className="absolute bottom-0 -translate-y-[140px] md:-translate-y-[160px] lg:-translate-y-[180px] right-0 z-10 pointer-events-none w-full max-w-[640px] md:max-w-[720px] lg:max-w-[780px] lg:right-[-50px] hidden md:block">
                <motion.img
                    src="https://demo2.wpopal.com/hitboox/wp-content/uploads/2024/12/h3_img-4.png"
                    alt="Mascot"
                    className="w-full h-auto max-h-[620px] md:max-h-[700px] lg:max-h-[780px] object-contain drop-shadow-[0_0_60px_rgba(var(--primary),0.6)] will-change-transform backface-hidden"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ WebkitBackfaceVisibility: "hidden" }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-20 py-14 lg:py-20">
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 mb-20">
                        {/* Left Content */}
                        <div className="flex-1 max-w-2xl pt-10">
                            <Title as="h2" className="text-white mb-4">
                                PUBLISHING
                            </Title>
                            <p className="text-[20px] text-white/90 font-medium max-w-xl">
                                We create an environment where our team members can thrive personally and professionally. We believe that a positive workplace culture directly impacts our creativity and success.
                            </p>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {publishingData.map((item, index) => (
                            <div
                                key={item.number}
                                className="group relative p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Number Icon */}
                                    <span className="text-3xl font-black text-white mb-12 md:mb-24">
                                        Step {item.number}
                                    </span>


                                    <div>
                                        <h5 className="flex flex-col justify-start font-title text-3xl text-white mb-4">
                                            {item.title}
                                        </h5>
                                        <p className="text-white text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
