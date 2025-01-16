import {
  Categories,
  Discounts,
  Header,
  Testimonials,
} from "@/components/features/site/page/home";
import { Surrounding } from "@/components/features/site/page/home/Surrounding";
import {} from "@/components/features/site/page/home/Testimonials";
import { ClientLayout } from "@/components/layout/container";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Image from "next/image";

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;
  const trans = await getDictionary(lang);

  return (
    <ClientLayout lang={lang}>
      <Header lang={lang} />
      <main className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-start gap-40 p-8 pb-20 font-[family-name:var(--font-family)] sm:p-20">
        <Testimonials />
        <Discounts />
        <Categories />
        <Surrounding />
      </main>
    </ClientLayout>
  );
}
