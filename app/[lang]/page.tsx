import {
  Categories,
  Discounts,
  Header,
  Testimonials,
  Trending,
} from "@/components/features/page/home";
import { Surrounding } from "@/components/features/page/home/Surrounding";
import { ClientLayout } from "@/components/layout/container";
import { Locale } from "@/i18n-config";

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;

  return (
    <ClientLayout lang={lang}>
      <Header lang={lang} />
      <main className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-start gap-40 p-2 pb-20 font-[family-name:var(--font-family)] md:p-5 lg:p-20">
        <Testimonials />
        <Discounts />
        <Categories />
        <Surrounding />
        <Trending />
      </main>
    </ClientLayout>
  );
}
