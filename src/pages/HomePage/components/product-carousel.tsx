import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { bestSeller } from '@/constants/mockData/bestSeller';

export function ProductCarousel({ title }: { title: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 overflow-x-auto md:grid-cols-5">
        {bestSeller.map((product) => (
          <Card
            key={product.id}
            className="min-w-[200px] cursor-pointer transition-shadow hover:shadow-lg"
          >
            <CardContent className="p-4">
              <div className="relative mb-3">
                <img
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  className="h-40 w-full rounded-md object-cover"
                />
                <span className="absolute left-2 top-2 rounded bg-orange-400 px-2 py-1 text-xs text-black">
                  {product.badge}
                </span>
              </div>

              <h3 className="mb-2 line-clamp-2 text-sm font-medium">
                {product.name}
              </h3>

              <div className="mb-2 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-1 text-xs text-gray-600">
                  ({product.reviews})
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold">${product.price}</span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              </div>

              <div className="mt-1 text-xs text-green-600">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
