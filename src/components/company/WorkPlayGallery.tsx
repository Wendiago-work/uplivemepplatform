import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left side - Vertical text */}
          <div className="hidden lg:flex items-start pt-2">
            <span className="text-primary text-sm font-bold tracking-widest whitespace-nowrap origin-center -rotate-90 translate-y-24">
              EXPLORE
            </span>
          </div>

          {/* Right side - Title and description */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
              SEE WHERE WE<br />WORK & PLAY
            </h2>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold"
              >
                OUR LOCATION
              </Button>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                As the studio continues to grow, our artists grow alongside it.
              </p>
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
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:basis-4/5 lg:basis-3/4"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      alt={`Office space ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
