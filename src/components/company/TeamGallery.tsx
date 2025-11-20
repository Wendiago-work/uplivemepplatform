import { useEffect, useState } from "react";
import { strings } from "@/lib/strings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export const TeamGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070",
  ];

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const indicatorCount = Math.max(totalSlides, images.length);

  useEffect(() => {
    if (!carouselApi) return;

    const updateState = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    const handleReInit = () => {
      setTotalSlides(carouselApi.scrollSnapList().length);
      updateState();
    };

    handleReInit();

    carouselApi.on("select", updateState);
    carouselApi.on("reInit", handleReInit);

    return () => {
      carouselApi.off("select", updateState);
      carouselApi.off("reInit", handleReInit);
    };
  }, [carouselApi]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            {strings.companyPage.about.title}
          </h2>
          <p className="text-lg text-gray-700">
            {strings.companyPage.about.description}
          </p>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-visible">
          <Carousel className="w-full max-w-none px-0" setApi={setCarouselApi}>
            <CarouselContent className="-ml-4 md:-ml-8">
              {images.map((image, index) => (
                <CarouselItem
                  key={image}
                  className="pl-4 md:pl-8 basis-auto"
                >
                  <div className="overflow-hidden rounded-3xl shadow-xl bg-gray-900/10">
                    <img
                      src={image}
                      alt={`Company image ${index + 1}`}
                      className="h-[350px] w-[500px] max-w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-10 w-10 left-4 top-1/2 -translate-y-1/2  md:left-[calc(50%-512px+24px)] border-none" />
            <CarouselNext className="h-10 w-10 right-4 top-1/2 -translate-y-1/2 md:right-[calc(50%-512px+24px)] border-none" />
          </Carousel>

          <div className="mt-8 flex items-center justify-center gap-3">
            {Array.from({ length: indicatorCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-3 w-3 rounded-full bg-primary transition-opacity ${
                  currentSlide === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
