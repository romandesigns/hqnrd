import { Header } from "@/components/features/site/page/home";
import { Testimonials } from "@/components/features/site/page/home/Testimonials";
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
      <main className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <Testimonials />
      </main>
    </ClientLayout>
  );
}
