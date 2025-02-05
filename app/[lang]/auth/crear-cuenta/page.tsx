import { SignUpForm } from "@/components/features/page/signUp/SignUpForm";
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
        title="Account Registration"
        description="Create and manage your own reservations"
      />
      <SignUpForm lang={lang} />
    </>
  );
}
