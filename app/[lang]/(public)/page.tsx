import { FrequentlyAskedQuestions } from "../ui/layout/components";
import { Gallery } from "../ui/layout/components/Home";
import { Category } from "../ui/layout/components/Home/Category";
import Discounts from "../ui/layout/components/public/Home/Discounts";
import Testimonials from "../ui/layout/components/public/Home/Testimonials";
import Trendings from "../ui/layout/components/public/Home/Trending";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-2">
      <Gallery />
      <Testimonials />
      <Category />
      <Discounts />
      <Trendings />
      <FrequentlyAskedQuestions />
    </main>
  );
}
