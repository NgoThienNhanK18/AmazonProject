import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { bannerItems } from '@/constants/mockData/banner';

export function HeroBanner() {
  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {bannerItems.map((item) => (
            <CarouselItem>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="mx-auto max-w-7xl px-4 py-12">
                  <div className="grid items-center gap-8 md:grid-cols-2">
                    <div>
                      <h2 className="mb-4 text-4xl font-bold">{item.title}</h2>
                      <p className="mb-6 text-xl">{item.description}</p>
                      <Button
                        size="lg"
                        className="bg-orange-400 font-bold text-black hover:bg-orange-500"
                      >
                        Mua ngay
                      </Button>
                    </div>
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt={item.altText}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 transform border-none bg-white/20 text-white hover:bg-white/30" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 transform border-none bg-white/20 text-white hover:bg-white/30" />
      </Carousel>
    </div>
  );
}
