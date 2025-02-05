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
      <HeadingSection
        showBorders
        title="Inicia Session"
        description="Crea y maneja tus propias reservas"
      />
      <SignInForm lang={lang} />
    </>
  );
}
