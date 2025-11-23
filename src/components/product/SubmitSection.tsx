import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const partners = [
    "XBOX",
    "Nintendo",
    "GAMELOFT",
    "UBISOFT",
    "ACTIVISION",
    "SONY",
];

const MarqueeItem = ({ name }: { name: string }) => (
    <div className="flex items-center justify-center mx-8 md:mx-12">
        <span className="font-black text-2xl md:text-3xl tracking-tight uppercase opacity-80 hover:opacity-100 transition-opacity cursor-default">
            {name}
        </span>
    </div>
);

export const SubmitSection = () => {
    return (
        <section className="relative mx-[10px]">
            {/* Partner Carousel Section */}
            <div className="container relative py-12 md:py-16 overflow-hidden">
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex min-w-full items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...partners, ...partners, ...partners].map((partner, i) => (
                            <MarqueeItem key={`${partner}-${i}`} name={partner} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Submit Form Section */}
            <div className="container mx-auto px-6 py-20 md:py-32 relative">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Left Column: Content & Character */}
                    <div className="flex-1 relative isolate">


                        <div className="relative z-10 flex items-center gap-8">
                            {/* Vertical Text */}
                            <div className="hidden md:flex items-center justify-center w-12">
                                <span className="block whitespace-nowrap -rotate-90 text-primary font-bold tracking-widest text-sm uppercase">
                                    SUBMIT YOUR GAME
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] uppercase">
                                MAKE YOUR GAME <br /> IDEA REAL
                            </h2>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="flex-1 w-full max-w-xl relative">
                        {/* Floating Characters */}
                        <motion.img
                            src="https://res.cloudinary.com/dsmn3rwyp/image/upload/v1763658709/mascot_g8fjof.png"
                            alt="Floating Character 1"
                            className="absolute -bottom-8 -left-12 w-24 h-auto object-contain drop-shadow-lg z-20 hidden md:block"
                            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src="https://res.cloudinary.com/dsmn3rwyp/image/upload/v1763658709/mascot_g8fjof.png"
                            alt="Floating Character 2"
                            className="absolute -top-12 -right-8 w-20 h-auto object-contain drop-shadow-lg z-20 hidden md:block"
                            animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                        <motion.img
                            src="https://res.cloudinary.com/dsmn3rwyp/image/upload/v1763658709/mascot_g8fjof.png"
                            alt="Floating Character 3"
                            className="absolute top-1/2 -left-16 w-16 h-auto object-contain drop-shadow-lg z-20 hidden lg:block"
                            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />

                        <div className="bg-[#f5f5fa] rounded-[40px] p-8 md:p-12 relative overflow-visible">
                            <p className="text-lg mb-10 leading-relaxed pr-8">
                                We are ready to discuss the details of your project and answer any of your questions.
                            </p>

                            <form className="space-y-8 flex flex-col">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold">Full name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold">E-mail</label>
                                        <input
                                            type="email"
                                            className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold">Company</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold">Message</label>
                                    <textarea
                                        rows={1}
                                        className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none transition-colors resize-none"
                                    />
                                </div>

                                <div className="pt-4 self-center">
                                    <Button
                                        variant="tech"
                                        size="lg"
                                        className="font-bold"
                                    >
                                        SUBMIT REQUEST
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
