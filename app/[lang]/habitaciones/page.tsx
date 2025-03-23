import { CardRoom } from "@/components/features/page/home/Trending/CardRoom";
import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { Locale } from "@/i18n-config";
import { Filters } from "@/components/features/page/rooms/filters";
import roomsData from "@/public/assets/mocked_data/rooms.json";
import { removePluralSuffix } from "@/utils/formatter/pluralSuffixCleaner";

type SearchParams = { [key: string]: string | undefined };

interface PageProps {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<SearchParams>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { lang } = params;
  const { categoria } = await props.searchParams;

  const filteredRoomsBySlug = (slug: string | undefined) => {
    if (slug === "ver-todas" || slug === undefined) {
      return roomsData.rooms;
    }
    return roomsData.rooms.filter(
      (r) => r.slug.toLowerCase() == removePluralSuffix(slug),
    );
  };

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
        </Content>
      </Section>
      <Section>
        <Content className="hidden w-full md:block">
          <Filters roomsCount={filteredRoomsBySlug(categoria).length || 0} />
        </Content>
        <Content className="grid-auto-rows grid grid-cols-1 gap-1 py-14 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRoomsBySlug(categoria).map((room, index) => (
            <CardRoom key={index} room={room} lang={lang} />
          ))}
        </Content>
      </Section>
    </>
  );
}
