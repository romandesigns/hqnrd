import { SignInForm } from "@/components/features/page/signIn/SignInForm";
import { HeadingSection } from "@/components/features/site/Headings";

import { Locale } from "@/i18n-config";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return (
    <>
      <article className="grid grid-cols-1 grid-rows-[auto_1fr] rounded-bl-3xl rounded-tr-3xl border py-3 max-[769px]:h-full max-[769px]:p-6 min-[769px]:px-6">
        <div className="flex h-full flex-col items-stretch justify-center">
          <HeadingSection
            showBorders
            title="Inicia Session"
            description="Crea y maneja tus propias reservas"
          />
          <SignInForm lang={lang} />
        </div>
      </article>
    </>
  );
}
