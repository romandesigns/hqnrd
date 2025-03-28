import { InstitutionSignUpForm } from "@/components/features/page/signUp/InstitutionSignUpForm";
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
      <InstitutionSignUpForm lang={lang} />
    </>
  );
}
