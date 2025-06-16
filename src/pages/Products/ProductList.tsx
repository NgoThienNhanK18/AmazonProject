import { Button } from '@/components/ui/button';
import { useState } from 'react';

const tempDataAPI = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://m.media-amazon.com/images/I/81PocXQFrlL._AC_UL320_.jpg',
    price: 29.99,
    description: 'Description for Product 1'
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://m.media-amazon.com/images/I/81PocXQFrlL._AC_UL320_.jpg',
    price: 39.99,
    description: 'Description for Product 2'
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://m.media-amazon.com/images/I/81PocXQFrlL._AC_UL320_.jpg',
    price: 49.99,
    description: 'Description for Product 3'
  },
  {
    id: 4,
    name: 'Product 4',
    image: 'https://m.media-amazon.com/images/I/81PocXQFrlL._AC_UL320_.jpg',
    price: 59.99,
    description: 'Description for Product 4'
  },
  {
    id: 5,
    name: 'Product 5',
    image: 'https://m.media-amazon.com/images/I/81PocXQFrlL._AC_UL320_.jpg',
    price: 69.99,
    description: 'Description for Product 5'
  }
];

export default function ProductList() {
  const [listProducts, setListProducts] = useState(tempDataAPI);
  const [listProductAdded, setListProductAdded] = useState([]);
  const handleAddToCart = (product) => {
    const upadedListProductAdded = [...listProductAdded, product];
    setListProductAdded(upadedListProductAdded);
    window.localStorage.setItem(
      'product',
      JSON.stringify(upadedListProductAdded)
    );
  };
  console.log('listProductAdded', listProductAdded);

  return (
    <div className="grid grid-cols-5 bg-blue-400">
      {listProducts.map((product) => {
        return (
          <div className="border border-red-500 bg-white">
            <div className="flex w-full justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w-32"
              />
            </div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Button onClick={() => handleAddToCart(product)}>
              Thêm vào giỏ
            </Button>
          </div>
        );
      })}
    </div>
  );
}
