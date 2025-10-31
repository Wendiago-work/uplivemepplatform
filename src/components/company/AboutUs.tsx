import { strings } from "@/lib/strings";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

export const AboutUs = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070",
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            {strings.companyPage.about.title}
          </h2>
          <p className="text-lg text-gray-700">
            {strings.companyPage.about.description}
          </p>
        </div>

        <div className="-mx-6 md:-mx-12 lg:-mx-24 relative">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent className="-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Company image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-8 h-12 w-12 bg-white hover:bg-gray-100 border-2 border-gray-300" />
            <CarouselNext className="right-8 h-12 w-12 bg-white hover:bg-gray-100 border-2 border-gray-300" />
          </Carousel>
          
          <div className="flex justify-center gap-3 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`relative rounded-lg overflow-hidden transition-all ${
                  index === current
                    ? "ring-4 ring-black scale-105"
                    : "ring-2 ring-gray-300 hover:ring-gray-400 opacity-70 hover:opacity-100"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
