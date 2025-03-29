import { CompanySignUpForm } from "@/components/features/page/signUp/CompanySignUp";
import { HeadingSection } from "@/components/features/site/Headings";
import { BrandedCard } from "@/components/ui/BrandedCard";
import { Locale } from "@/i18n-config";
import { CountryCode } from "libphonenumber-js";
import { headers } from "next/headers";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const headersList = await headers();
  const countryCode = headersList
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[1];

  return (
    <BrandedCard
      showHeading={false}
      lang={lang}
      className="grid grid-cols-1 grid-rows-[auto_1fr] p-2"
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <HeadingSection
          className="my-8"
          showBorders={true}
          title="Cuenta de Empresa"
          description="Registrate para tomar full control de tus reservaciones"
        />
        <CompanySignUpForm
          lang={lang}
          defaultCountry={countryCode as CountryCode}
        />
      </div>
    </BrandedCard>
  );
}
