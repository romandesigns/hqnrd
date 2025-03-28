import { Content } from "@/components/layout/container";
import { BrandedCard } from "@/components/ui/BrandedCard";
import { Locale } from "@/i18n-config";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

async function Page({ params }: PageProps) {
  const { lang } = await params;
  return (
    <main className="grid min-h-screen w-full items-center p-2">
      <div>
        <Content className="max-w-[30rem] rounded-md border p-8">
          <BrandedCard showHeading={true} lang={lang}>
            <div className="flex gap-8">
              <Link
                href={`/${lang}/auth/crear-cuenta/personal`}
                className="flex flex-1 items-center justify-center rounded-md border py-12 md:aspect-square"
              >
                Personal
              </Link>
              <Link
                href={`/${lang}/auth/crear-cuenta/institucion`}
                className="flex flex-1 items-center justify-center rounded-md border py-12 md:aspect-square"
              >
                Institucion
              </Link>
            </div>
          </BrandedCard>
        </Content>
        <p className="py-8 text-center text-xs">
          Already have have an account ?{"  "}
          <Link href={`/${lang}/auth/iniciar-session`} className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Page;
