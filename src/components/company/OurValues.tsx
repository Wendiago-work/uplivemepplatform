import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const CornerClip = ({ corner }: { corner: "topRight" | "bottomLeft" }) => (
  <span
    className={`absolute text-background block w-[clamp(140px,18vw,220px)] h-[clamp(50px,7vw,90px)] pointer-events-none ${
      corner === "topRight" ? "top-[-6px] right-0 rotate-180" : "bottom-[-6px] left-0"
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

const valuesData = [
  {
    id: "1",
    title: "Ownership",
    content:
      "We act like owners. We take charge, stay accountable, and finish what we start.",
  },
  {
    id: "2",
    title: "Continuous Learning",
    content:
      "We grow every day by staying curious, learning fast, and adapting faster.",
  },
  {
    id: "3",
    title: "Speed",
    content:
      "We move quickly. We test, iterate, and turn ideas into reality with momentum.",
  },
  {
    id: "4",
    title: "Effectiveness",
    content:
      "We keep things simple, focused, and impactful. No noise, just results.",
  },
  {
    id: "5",
    title: "Growth Mindset",
    content:
      "We aim higher. We build skills, expand limits, and push for better outcomes.",
  },
  {
    id: "6",
    title: "Reflection & Learning",
    content:
      "We reflect honestly, learn from mistakes, and use them to level up.",
  },
];

export const OurValues = () => {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <section className="relative mx-[10px] rounded-tl-[20px] rounded-br-[20px] bg-surfaceSecondary px-6 py-14 lg:px-16 lg:py-20 overflow-hidden">
      <CornerClip corner="topRight" />
      <CornerClip corner="bottomLeft" />
      <div className="container pb-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Accordion */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                OUR VALUES
              </h2>
              <p className="text-base md:text-lg">
                At UpLive, we believe in owning our journey and never stopping
                learning—a future where every individual's growth fuels our
                collective success.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="flex flex-col gap-0"
            >
              {valuesData.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className={cn(
                    "relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500",
                    "px-0 py-0 overflow-hidden",
                    "mt-4 first:mt-0",
                    openItem === item.id ? "translate-y-0" : "translate-y-1"
                  )}
                  style={{ zIndex: valuesData.length - index }}
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline data-[state=open]:bg-primary/5">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                        {openItem === item.id ? (
                          <Minus className="w-5 h-5 text-primary-foreground" />
                        ) : (
                          <Plus className="w-5 h-5 text-primary-foreground" />
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground text-left">
                        {item.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-2 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <p className="text-base leading-relaxed ml-16">
                      {item.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right side - Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <motion.img
                src="https://res.cloudinary.com/dsmn3rwyp/image/upload/v1763658709/mascot_g8fjof.png"
                alt="Game character"
                className="relative w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
