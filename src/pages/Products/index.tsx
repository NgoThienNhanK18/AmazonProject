import { useState } from 'react';
import ProductList from './ProductList';

export default function ProductsPage() {
  // const [selectedCategory, setSelectedCategory] = useState('all');
  // const [listProducts] = useState(listProductsShow);

  // useEffect(() => {
  //   if (selectedCategory == 'all') {
  //     setListProducts(listProductsShow);
  //   } else {
  //     const result = listProductsShow.filter(
  //       (item) => item.category == selectedCategory
  //     );
  //     setListProducts(result);
  //   }
  // }, [selectedCategory]);

  return (
    <div className="grid">
      {/* <ProductFilter
        onSelectedCategory={(value) => {
          setSelectedCategory(value);
        }}
      /> */}
      {/* <ProductList data={listProducts} /> */}
    </div>
  );
}
