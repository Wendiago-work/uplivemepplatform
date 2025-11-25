import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import appleIcon from "@/assets/apple.svg";
import googlePlayIcon from "@/assets/google-play.svg";
import { Title } from "@/components/ui/title";


const games = [
    {
        id: 1,
        title: "Monster Dream",
        genre: "Action",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
        icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200&auto=format&fit=crop",
        description: "Dive into a world of chaos and destruction where only the strongest survive.",
    },
    {
        id: 2,
        title: "Memories and Quest",
        genre: "Adventure",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop",
        icon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=200&auto=format&fit=crop",
        description: "Embark on an epic journey through time to uncover lost secrets.",
    },
    {
        id: 3,
        title: "Dead Curse",
        genre: "Shooting",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop",
        icon: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=200&auto=format&fit=crop",
        description: "Survive the zombie apocalypse in this heart-pounding shooter.",
    },
    {
        id: 4,
        title: "Eternal Conquest",
        genre: "Simulation",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2765&auto=format&fit=crop",
        icon: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=200&auto=format&fit=crop",
        description: "Build your empire and conquer new lands in this immersive simulation.",
    },
    {
        id: 5,
        title: "Spirit Resurrection",
        genre: "Strategy",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        icon: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=200&auto=format&fit=crop",
        description: "Command your forces and outsmart your enemies in tactical warfare.",
    },
    {
        id: 6,
        title: "Shadow Omen",
        genre: "Survival",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2694&auto=format&fit=crop",
        icon: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=200&auto=format&fit=crop",
        description: "Face your fears and survive the darkness in this horror survival game.",
    },
];

const GameCard = ({
    game,
    index,
    progress,
    total,
}: {
    game: (typeof games)[0];
    index: number;
    progress: MotionValue<number>;
    total: number;
}) => {
    const step = 1 / total;

    // Y Position Logic (Exit):
    // Card moves up when scroll passes its index.
    // Range: [index * step, (index + 1) * step]
    const yRangeStart = index * step;
    const yRangeEnd = Math.min(1, (index + 1) * step);

    const y = useTransform(
        progress,
        [yRangeStart, yRangeEnd],
        ["0%", "-120%"]
    );

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
                y: index === total - 1 ? 0 : y,
                zIndex: total - index,
                top: "15vh",
            }}
        >
            <div className="relative w-full h-[80vh] mx-[10px] group">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-background">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16 lg:p-20">
                        {/* Game Icon - Top Left (Aligned) */}
                        <div className="z-20">
                            <img
                                src={game.icon}
                                alt={`${game.title} icon`}
                                className="w-28 h-28 rounded-2xl shadow-lg border-2 border-white/10"
                            />
                        </div>

                        <div className="max-w-4xl">
                            <div className="mb-4">
                                <span className="inline-block px-4 py-2 rounded-full bg-[#FF2E59] text-white text-sm font-bold uppercase tracking-wider">
                                    {game.genre}
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                                {game.title}
                            </h3>

                            {/* Store Buttons */}
                            <div className="flex flex-wrap gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                                <Button
                                    variant="tech-outline"
                                    className="h-auto px-6 py-4"
                                >
                                    <img src={appleIcon} alt="App Store" className="w-8 h-8 brightness-0 invert" />
                                </Button>

                                <Button
                                    variant="tech-outline"
                                    className="h-auto px-6 py-4"
                                >
                                    <img src={googlePlayIcon} alt="Google Play" className="w-8 h-8" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const OurGames = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFixed, setIsFixed] = useState(false);
    const [isBottom, setIsBottom] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0 && latest < 1) {
            setIsFixed(true);
            setIsBottom(false);
        } else if (latest >= 1) {
            setIsFixed(false);
            setIsBottom(true);
        } else {
            setIsFixed(false);
            setIsBottom(false);
        }
    });

    return (
        <section ref={containerRef} className="relative mx-[10px]" style={{ height: `${(games.length + 1) * 100}vh` }}>
            <div
                className={`w-full h-screen overflow-hidden flex flex-col ${isFixed ? "fixed top-0 left-0" : "absolute"
                    } ${isBottom ? "bottom-0" : "top-0"}`}
            >
                {/* Header */}
                <div className="container flex flex-col justify-end pb-6">
                    <span className="text-primary font-bold text-sm mb-2">GAMES</span>
                    <Title as="h2">
                        OUR GAMES
                    </Title>
                </div>

                {/* Cards Container */}
                <div className="absolute inset-0 w-full h-full">
                    {games.map((game, index) => (
                        <GameCard
                            key={game.id}
                            game={game}
                            index={index}
                            progress={scrollYProgress}
                            total={games.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
