import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-[15%,85%]">
      <ProductFilter />
      <ProductList />
    </div>
  );
}
