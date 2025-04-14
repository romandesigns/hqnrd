import { SignInForm } from "@/components/features/page/signIn/SignInForm";
import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { BrandedCard } from "@/components/ui/BrandedCard";
import { SignUp } from "@clerk/nextjs";
import { Locale } from "@/i18n-config";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return (
    <main className="grid min-h-dvh w-full items-center">
      <Section className="p-4">
        <Content className="mx-auto grid w-full max-w-[30rem] grid-cols-1 grid-rows-1 rounded-md border p-8">
          <BrandedCard lang={lang} showHeading={false}>
            <div className="flex h-full flex-col items-stretch justify-center">
              <HeadingSection
                showBorders
                title="Inicia Session"
                description="Inicia session para reservar y administrar tus reservas"
              />
              <SignInForm lang={lang} />
            </div>
          </BrandedCard>
        </Content>
      </Section>
    </main>
  );
}
