import { getProducts } from '@/lib/products';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { MeetTheMakerSection } from '@/components/home/MeetTheMakerSection';
import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { CraftSection } from '@/components/home/CraftSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { CustomRequestSection } from '@/components/home/CustomRequestSection';
import { Footer } from '@/components/layout/Footer';

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MeetTheMakerSection />
        <CatalogGrid initialProducts={products} />
        <CraftSection />
        <ReviewsSection />
        <CustomRequestSection />
      </main>
      <Footer />
    </div>
  );
}
