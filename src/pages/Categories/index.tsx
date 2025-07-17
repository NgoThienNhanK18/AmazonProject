import { ListProduct } from '@/constants/mockData/product';
import { useParams } from 'react-router-dom';
import ProductsPage from '../Products';

const tempDataAPI = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    image: 'https://m.media-amazon.com/images/I/81PocXQFrlL._AC_UL320_.jpg',
    price: 29.99,
    originalPrice: 49.99,
    description: 'High-quality wireless headphones with noise cancellation',
    reviews: 128,
    discount: 40,
    category: 'QUAN'
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    image: 'https://m.media-amazon.com/images/I/81PocXQFrlL._AC_UL320_.jpg',
    price: 39.99,
    originalPrice: 59.99,
    description: 'Advanced fitness tracking with heart rate monitor',
    reviews: 89,
    discount: 33,
    category: 'AO'
  },
  {
    id: 3,
    name: 'Portable Phone Charger',
    image: 'https://m.media-amazon.com/images/I/81PocXQFrlL._AC_UL320_.jpg',
    price: 49.99,
    originalPrice: 69.99,
    description: 'Fast charging power bank with wireless capability',
    reviews: 256,
    discount: 29,
    category: 'GIAY'
  },
  {
    id: 4,
    name: 'LED Desk Lamp',
    image: 'https://m.media-amazon.com/images/I/81PocXQFrlL._AC_UL320_.jpg',
    price: 59.99,
    originalPrice: 79.99,
    description: 'Adjustable LED lamp with USB charging port',
    reviews: 67,
    discount: 25,
    category: 'PHU_KIEN'
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    image: 'https://m.media-amazon.com/images/I/81PocXQFrlL._AC_UL320_.jpg',
    price: 69.99,
    originalPrice: 99.99,
    description: 'Waterproof portable speaker with premium sound',
    reviews: 189,
    discount: 30,
    category: 'DIEN_TU'
  }
];

export default function CategoriesPage() {
  const { categoryId } = useParams();

  const ListProductFilter = ListProduct.filter(
    (product) => product.categoryId == Number(categoryId)
  );

  return (
    <div className="min-h-screen bg-white">
      <ProductsPage listProductsShow={ListProductFilter} />
    </div>
  );
}
