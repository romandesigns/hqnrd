import { Brand } from "@/components/features";
import { SignUpForm } from "@/components/features/page/signUp/SignUpForm";
import { HeadingSection } from "@/components/features/site/Headings";
import { ModeToggle } from "@/components/features/site/ModeToggle";
import { GoHomeFill } from "@/components/icons";
import { Content, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";

import { Locale } from "@/i18n-config";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return (
    <Section className="flex min-h-screen w-full items-center justify-center border border-red-500 p-2">
      <Content className="grid h-full grid-cols-1 gap-4 bg-muted/5 p-4 max-[769px]:max-w-[30rem] min-[769px]:grid-cols-[1fr_0.7fr] lg:max-w-[90rem]">
        <article className="hidden aspect-[1/1] flex-1 border border-blue-500 min-[769px]:block">
          Left
        </article>
        <article className="max-[769px]:h-full md:p-8 md:py-2">
          <div className="flex items-center justify-between gap-4 py-10">
            <Brand lang={lang} />
            <div className="flex items-center justify-center gap-4">
              <ModeToggle />
              <Button size="icon" variant="outline">
                <GoHomeFill />
              </Button>
            </div>
          </div>
          <HeadingSection
            showBorders
            title="Account Registration"
            description="Create and manage your own reservations"
          />
          <SignUpForm lang={lang} />
        </article>
      </Content>
    </Section>
  );
}
