import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

export function DealsSection() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Lightning Deals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>Lightning Deals</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Deal"
                    className="rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">Wireless Earbuds</p>
                    <p className="text-lg font-bold text-red-600">$29.99</p>
                    <p className="text-xs text-gray-500">Ends in 2h 15m</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Deal"
                    className="rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">Smart Home Hub</p>
                    <p className="text-lg font-bold text-red-600">$49.99</p>
                    <p className="text-xs text-gray-500">Ends in 4h 32m</p>
                  </div>
                </div>
              </div>
              <Button className="mt-4 w-full" variant="outline">
                See all deals
              </Button>
            </CardContent>
          </Card>

          {/* Today's Deals */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Deals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Deal"
                    className="rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">Kitchen Appliances</p>
                    <p className="text-sm text-green-600">Up to 40% off</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Deal"
                    className="rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">Fashion Accessories</p>
                    <p className="text-sm text-green-600">Up to 60% off</p>
                  </div>
                </div>
              </div>
              <Button className="mt-4 w-full" variant="outline">
                Shop all deals
              </Button>
            </CardContent>
          </Card>

          {/* Gift Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Gift Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=120&width=200"
                alt="Gift Cards"
                className="mb-4 w-full rounded"
              />
              <p className="mb-4 text-sm text-gray-600">
                Perfect for any occasion
              </p>
              <Button className="w-full">Shop Gift Cards</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
