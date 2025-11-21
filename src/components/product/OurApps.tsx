import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AppleLogo from "@/assets/apple.svg";
import GooglePlayLogo from "@/assets/google-play.svg";

interface App {
    id: number;
    title: string;
    category: string;
    image: string;
    logo: string;
    description: string;
    link?: string;
}

const CornerClip = ({ corner }: { corner: "topRight" | "bottomLeft" }) => (
    <span
        className={`absolute text-background block w-[clamp(140px,18vw,220px)] h-[clamp(50px,7vw,90px)] pointer-events-none ${corner === "topRight"
            ? "top-[-6px] right-0 rotate-180"
            : "bottom-[-6px] left-0"
            }`}
        aria-hidden="true"
    >
        <svg
            viewBox="0 0 160 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full fill-current"
        >
            <path d="M147.269 54.72L117.876 25.28C114.502 21.9015 109.919 20 105.145 20H0V60H160C155.226 60 150.642 58.0985 147.269 54.72Z" />
            <path d="M0 0V20H20C8.95435 20 0 11.0457 0 0Z" />
        </svg>
    </span>
);

const apps: App[] = [
    {
        id: 1,
        title: "UpLive: Live Stream & Chat",
        category: "Social",
        image:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        logo: "https://demo2.wpopal.com/hitboox/wp-content/uploads/2025/01/project_logo1.jpg",
        description:
            "Connect with millions of people, watch live streams, and chat with friends worldwide.",
        link: "#uplive",
    },
    {
        id: 2,
        title: "UpLive Lite",
        category: "Social",
        image:
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
        logo: "https://demo2.wpopal.com/hitboox/wp-content/uploads/2025/01/project_logo2.jpg",
        description:
            "A lighter version of UpLive for faster performance and data saving.",
        link: "#uplive-lite",
    },
    {
        id: 3,
        title: "UpLive Creator Studio",
        category: "Tools",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        logo: "https://demo2.wpopal.com/hitboox/wp-content/uploads/2025/01/project_logo3.jpg",
        description: "Professional tools for content creators to manage and grow their audience.",
        link: "#creator-studio",
    },
];

const AppCard = ({ app }: { app: App }) => {
    const [isHovered, setIsHovered] = useState(false);

    const logoStyle: CSSProperties = {
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.3s ease",
    };

    const infoWrapperStyle: CSSProperties = {
        transform: `translateY(${isHovered ? -8 : 0}px)`,
        transition: "transform 0.3s ease",
    };

    return (
        <motion.div
            className="product-card-flex relative rounded-3xl overflow-hidden group cursor-pointer h-[420px] md:h-[520px]"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="absolute inset-0">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                <div
                    className="w-24 h-24 rounded-2xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center overflow-hidden"
                    style={logoStyle}
                >
                    <img
                        src={app.logo}
                        alt={`${app.title} logo`}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    className="flex flex-col items-start gap-3"
                    style={infoWrapperStyle}
                >
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">
                        {app.title}
                    </h3>
                    <Button variant="tech" size="sm">
                        {app.category}
                    </Button>
                    {isHovered && (
                        <div>
                            <p className="text-white text-sm font-medium mb-3">
                                {app.description}
                            </p>
                            <div className="flex gap-2">
                                <Button
                                    className="bg-white hover:bg-white/90"
                                    size="icon"
                                    aria-label={`Download ${app.title} on the App Store`}
                                >
                                    <img src={AppleLogo} alt="Apple" className="w-6 h-6" />
                                </Button>
                                <Button
                                    className="bg-white hover:bg-white/90"
                                    size="icon"
                                    aria-label={`Download ${app.title} on Google Play`}
                                >
                                    <img
                                        src={GooglePlayLogo}
                                        alt="Google Play"
                                        className="w-6 h-6"
                                    />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export const OurApps = () => {
    const rows: App[][] = [];
    for (let i = 0; i < apps.length; i += 3) {
        rows.push(apps.slice(i, i + 3));
    }

    return (
        <section className="relative rounded-tl-[20px] rounded-br-[20px] bg-surfaceSecondary px-6 py-14 lg:px-16 lg:py-20 mx-[10px]">
            <CornerClip corner="topRight" />
            <CornerClip corner="bottomLeft" />
            <div className="container mx-auto">
                <div className="mb-4">
                    <span className="text-primary font-bold text-sm">APPS</span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase leading-none">
                            OUR APPS
                        </h2>

                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
                            <p className="text-lg flex-1 max-w-2xl">
                                Discover our innovative applications designed to connect people and enhance your digital lifestyle.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 mb-[140px] mt-16">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={`row-${rowIndex}`}
                            className="product-row flex flex-col gap-8 lg:flex-row lg:gap-8 overflow-hidden"
                        >
                            {row.map((app) => (
                                <AppCard key={app.id} app={app} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
