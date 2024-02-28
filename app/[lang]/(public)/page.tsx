import { FrequentlyAskedQuestions, Header } from "../ui/layout/components";
import { Amenities, Gallery, HomeHeader } from "../ui/layout/components/Home";
import { Category } from "../ui/layout/components/Home/Category";
import Discounts from "../ui/layout/components/public/Home/Discounts";
import Testimonials from "../ui/layout/components/public/Home/Testimonials";
import Trendings from "../ui/layout/components/public/Home/Trending";
import { PublicLayout } from "../ui/layout/containers/PublicLayout";

export default function Home() {
  return (
    <PublicLayout>
      <Header className="h-screen flex items-stretch justify-stretch p-2 header-height">
        <HomeHeader />
      </Header>
      <main className="flex flex-col items-center justify-between px-2">
        <Gallery />
        <Testimonials />
        <Amenities />
        <Discounts />
        <Category />
        <Trendings />
        <FrequentlyAskedQuestions />
      </main>
    </PublicLayout>
  );
}
