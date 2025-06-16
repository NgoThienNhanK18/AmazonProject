import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 1234,
    image:
      'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Smart Watch Series 8',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 856,
    image:
      'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1',
    badge: 'Deal of the Day'
  },
  {
    id: 3,
    name: 'Portable Phone Charger',
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.3,
    reviews: 2341,
    image:
      'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1',
    badge: 'Lightning Deal'
  },
  {
    id: 4,
    name: 'Wireless Mouse',
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.4,
    reviews: 567,
    image:
      'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1',
    badge: 'Choice'
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 432,
    image:
      'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1',
    badge: 'New'
  }
];

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
        {products.map((product) => (
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
