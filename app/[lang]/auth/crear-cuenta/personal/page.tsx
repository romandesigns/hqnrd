import { UserSignUpForm } from "@/components/features/page/signUp/UserSignUpForm";
import { BrandedCard } from "@/components/ui/BrandedCard";

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
      <BrandedCard
        showHeading={true}
        lang={lang}
        className="grid grid-cols-1 grid-rows-[auto_auto_1fr] p-4 py-12"
      >
        <UserSignUpForm lang={lang} />
      </BrandedCard>
    </>
  );
}
