import { CardRoom } from "@/components/features/page/home/Trending/CardRoom";
import { RoomsCount } from "@/components/features/page/rooms/Header/RoomsCount";
import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { Locale } from "@/i18n-config";

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;

  return (
    <>
      <Section>
        <Content className="flex-col justify-center">
          <HeadingSection
            className="hidden md:flex"
            showBorders
            title="Showing All Rooms"
            description="All rooms are held to the same high standards"
          />
          <RoomsCount />
        </Content>
      </Section>
      <Section>
        <Content className="grid-auto-rows grid grid-cols-1 gap-1 py-14 pt-2 md:grid-cols-2 lg:grid-cols-3">
          <CardRoom lang={lang} />
          <CardRoom lang={lang} />
          <CardRoom lang={lang} />
          <CardRoom lang={lang} />
          <CardRoom lang={lang} />
        </Content>
      </Section>
    </>
  );
}
