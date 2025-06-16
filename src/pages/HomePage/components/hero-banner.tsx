import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

export function HeroBanner() {
  const bannerItems = [
    {
      title: 'Holiday Deals',
      description: 'Save up to 70% on top brands and products',
      imageUrl:
        'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1',
      altText: 'Holiday deals'
    },
    {
      title: 'New Arrivals',
      description: 'Check out the latest products in our store',
      imageUrl:
        'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1',
      altText: 'New arrivals'
    },
    {
      title: 'Limited Time Offers',
      description: 'Special discounts available for a short time only',
      imageUrl:
        'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1',
      altText: 'Limited offers'
    }
  ];

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
                        Shop Now
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
