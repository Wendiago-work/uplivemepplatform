import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import valuesCharacter from "@/assets/values-character.png";
import valuesAnimated from "@/assets/values-animated.png";

const valuesData = [
  {
    id: "1",
    title: "Ownership",
    content: "We act like owners. We take charge, stay accountable, and finish what we start."
  },
  {
    id: "2",
    title: "Continuous Learning",
    content: "We grow every day by staying curious, learning fast, and adapting faster."
  },
  {
    id: "3",
    title: "Speed",
    content: "We move quickly. We test, iterate, and turn ideas into reality with momentum."
  },
  {
    id: "4",
    title: "Effectiveness",
    content: "We keep things simple, focused, and impactful. No noise, just results."
  },
  {
    id: "5",
    title: "Growth Mindset",
    content: "We aim higher. We build skills, expand limits, and push for better outcomes."
  },
  {
    id: "6",
    title: "Reflection & Learning",
    content: "We reflect honestly, learn from mistakes, and use them to level up."
  }
];

export const OurValues = () => {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Accordion */}
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="writing-mode-vertical text-primary font-bold text-sm tracking-wider rotate-180">
                OUR BENEFITS
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-foreground leading-tight mb-8">
                  REIMAGINED PLAYER<br />EXPERIENCES
                </h2>
              </div>
            </div>

            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="space-y-4"
            >
              {valuesData.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-border rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]]:bg-primary/5">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        {openItem === item.id ? (
                          <Minus className="w-5 h-5 text-primary-foreground" />
                        ) : (
                          <Plus className="w-5 h-5 text-primary-foreground" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-foreground text-left">
                        {item.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <p className="text-muted-foreground text-base leading-relaxed ml-14">
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
              <img
                src={valuesAnimated}
                alt="Animated elements"
                className="absolute inset-0 w-full h-full object-contain animate-pulse"
              />
              <img
                src={valuesCharacter}
                alt="Game character"
                className="relative w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
