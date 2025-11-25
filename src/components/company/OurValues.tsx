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
import { Title } from "@/components/ui/title";

import { CornerClip } from "@/components/ui/corner-clip";

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
              <Title as="h2" className="mb-6">
                OUR VALUES
              </Title>
              <p className="text-[20px]">
                At UpLive, we believe in owning our journey and never stopping
                learning - a future where every individual's growth fuels our
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
                    "relative rounded-[32px] border border-white/30 bg-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-400 transform-gpu will-change-transform",
                    "px-0 py-0 overflow-hidden",
                    "mt-4 first:mt-0",
                    openItem === item.id ? "translate-y-0" : "translate-y-1"
                  )}
                  style={{ zIndex: valuesData.length - index }}
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
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
                  <p className="text-[20px] leading-relaxed ml-16">
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
                className="relative w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)] will-change-transform select-none"
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
