import { strings } from "@/lib/strings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const AboutUs = () => {
  const images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            {strings.companyPage.about.title}
          </h2>
          <p className="text-lg text-gray-700">
            {strings.companyPage.about.description}
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Company image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};
