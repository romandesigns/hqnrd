import { ClientLayout, Content, Section } from "@/components/layout/container";
import { Locale } from "@/i18n-config";
import { HeadingSection } from "@/components/features/site/Headings";
import { FeaturedItems } from "@/components/features/site/swiper/FeaturedSlider";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const teams = ["1", "2", "3", "4", "5", "6", "7", "8"];
const defaultBreakPoints = {
  sm: { slidesPerView: 3, spaceBetween: 20 },
  md: { slidesPerView: 3, spaceBetween: 20 },
  lg: { slidesPerView: 4, spaceBetween: 20 }
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return (
    <ClientLayout lang={lang}>
      <header>
        <Content className="py-20 sm:py-40 space-y-2">
          <h3 className="text-center text-2xl sm:text-4xl font-bold">Contact our team</h3>
          <p className="text-center text-xs sm:text-sm max-w-3xl text-muted-foreground mx-auto px-8">Our team is here to
            help! Expect a response within 15 minutes.</p>
        </Content>
      </header>
      <main>
        <Section>
          <Content className="px-6 mb-8">
            <HeadingSection
              showBorders
              title="Meet Our Team"
              description="Putting your joy and satisfaction above all else"
            />
            {teams?.length > 0 ? (
              <FeaturedItems
                itemsArray={teams}
                teams
                speed={6000}
                delay={1000}
                lang={lang}
                breakPoints={defaultBreakPoints}
              />
            ) : (
              <p className="text-center text-gray-500">Our team is coming soon!</p>
            )}

          </Content>
        </Section>
      </main>
    </ClientLayout>
  );
}
