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
                <span>Deal mới hôm nay</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmFgY_e-pwSeA5zA9q9V34Y3H4Z3PmtI9ww&s"
                    alt="Deal"
                    className="h-28 w-28 rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">Wireless Earbuds</p>
                    <p className="text-lg font-bold text-red-600">$29.99</p>
                    <p className="text-xs text-gray-500">Ends in 2h 15m</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiYVCgqpd6iBtBNwD_TNcX8kmnPgpPM4Nhw&s"
                    alt="Deal"
                    className="h-28 w-28 rounded"
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
              <CardTitle>Tổng deals mới</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNkwlOJBRXTwcLk1efIFaDk71le5uz06jcg&s"
                    alt="Deal"
                    className="h-28 w-28 rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">Kitchen Appliances</p>
                    <p className="text-sm text-green-600">Giảm giá tới 40%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://media.dolenglish.vn/PUBLIC/MEDIA/7190e664-5a07-462f-9a6a-5d09f7febbf4.jpg"
                    alt="Deal"
                    className="h-28 w-28 rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">Fashion Accessories</p>
                    <p className="text-sm text-green-600">Giảm giá tới 60%</p>
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
