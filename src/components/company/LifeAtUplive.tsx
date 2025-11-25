import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Title } from "@/components/ui/title";

const images = [
  "https://demo2.wpopal.com/hitboox/wp-content/uploads/2024/12/gallery-1.jpg",
  "https://demo2.wpopal.com/hitboox/wp-content/uploads/2024/12/gallery-2.jpg",
  "https://demo2.wpopal.com/hitboox/wp-content/uploads/2024/12/gallery-3.jpg",
  "https://demo2.wpopal.com/hitboox/wp-content/uploads/2024/12/gallery-4.jpg",
  "https://demo2.wpopal.com/hitboox/wp-content/uploads/2024/12/gallery-5.jpg",
  "https://demo2.wpopal.com/hitboox/wp-content/uploads/2024/12/gallery-6.jpg",
];

export const WorkPlayGallery = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setTotalSlides(carouselApi.scrollSnapList().length);
    setCurrentSlide(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <section className="md:pb-[150px] mx-[10px]">
      <div className="container">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left side - Vertical text */}
          <div className="hidden lg:flex items-start pt-2">
            <Title size="sm" className="text-primary whitespace-nowrap origin-center -rotate-90 translate-y-24">
              LIVE AT UPLIVE
            </Title>
          </div>

          {/* Right side - Title and description */}
          <div className="flex-1">
            <Title as="h2" className="mb-6">
              SEE HOW WE
              <br />
              WORK & PLAY
            </Title>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              <Button asChild variant="tech" size="lg">
                <Link to="/careers">Join the fun</Link>
              </Button>

              <p className="text-[20px]">
                Work harder, play harder
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-[75%] lg:basis-[70%]">
                <div
                  className={`relative aspect-[16/9] overflow-hidden rounded-2xl transition-all duration-500 ease-out ${currentSlide === index
                    ? "scale-100 opacity-100 shadow-2xl ring-1 ring-white/10"
                    : "scale-90 opacity-40 blur-[1px] grayscale-[30%]"
                    }`}
                >
                  <img
                    src={image}
                    alt={`Office space ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for inactive slides to make them recede more */}
                  <div className={`absolute inset-0 bg-background/20 transition-opacity duration-500 ${currentSlide === index ? "opacity-0" : "opacity-100"
                    }`} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Controls + Indicators */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => carouselApi?.scrollPrev()}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "bg-primary scale-110 shadow-[0_0_0_4px_rgba(255,255,255,0.15)]"
                  : "bg-foreground"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => carouselApi?.scrollNext()}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
