import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";


export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {

  const params = await props.params;
  const { lang } = params;
  const trans= await getDictionary(lang);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     {trans.greeting}
    </div>
  );
}
