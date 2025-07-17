import { HeroBanner } from './components/hero-banner';
import { CategoryGrid } from './components/category-grid';
import { ProductCarousel } from './components/product-carousel';
import { DealsSection } from './components/deals-section';
import { Footer } from './components/footer';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroBanner />
        <CategoryGrid />
        <ProductCarousel title="Sản phẩm bán chạy" />
        <DealsSection />
        <ProductCarousel title="Recommended for You" />
        <ProductCarousel title="Recently Viewed" />
      </main>
      <Footer />
    </div>
  );
}
