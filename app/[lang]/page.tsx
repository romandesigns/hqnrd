import {
  Categories,
  Discounts,
  Header,
  ReservationSearchBox,
  Testimonials,
  Trending,
} from "@/components/features/page/home";
import { Surrounding } from "@/components/features/page/home/Surrounding";
import { ClientLayout } from "@/components/layout/container";
import { Locale } from "@/i18n-config";
import roomsData from "@/public/assets/mocked_data/rooms.json";
import delay from "delay";

/**
 * Asynchronous function component that renders the main page layout.
 *
 * @param props - The properties object.
 * @param props.params - A promise that resolves to an object containing the `lang` parameter.
 * @returns The main page layout wrapped in `ClientLayout` with various sections.
 */
export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;
  await delay(10000);
  return (
    <ClientLayout lang={lang}>
      <Header lang={lang} />
      <main className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-start gap-20 p-2 !pt-0 pb-20 font-[family-name:var(--font-family)] md:gap-40 md:p-5 lg:p-20">
        <ReservationSearchBox lang={lang} />
        <Testimonials lang={lang} />
        <Discounts />
        <Categories lang={lang} />
        <Surrounding />
        <Trending
          rooms={roomsData.rooms}
          lang={lang}
          heading="Trending"
          description="Explore the most trending hotels today"
        />
      </main>
    </ClientLayout>
  );
}
