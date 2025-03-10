import { CardRoom } from "@/components/features/page/home/Trending/CardRoom";
import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { Locale } from "@/i18n-config";
import { rooms } from "./rooms";
import { Filters } from "@/components/features/page/rooms/filters";
import roomsData from "@/public/assets/mocked_data/rooms.json";
import { transformSlug } from "@/components/features/page/home/Categories/categories";

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

    const cleanedSlug = slug
      .toLowerCase()
      .replace("standards", "standar") // Remove "es" only if NOT preceded by "e" (familiares → familiar)
      .replace("dobles", "doble") // Remove "es" only if NOT preceded by "e" (familiares → familiar)
      .replace(/\b(\w+[^e])es\b/g, "$1") // Remove "es" only if NOT preceded by "e" (familiares → familiar)
      .replace(/\b(\w+[^e])s\b/g, "$1") // Remove "s" only if NOT preceded by "e" (dobles → doble, ejecutivas → ejecutiva)
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
    return roomsData.rooms.filter((r) => r.slug.toLowerCase() == cleanedSlug);
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

          <div className="flex items-center justify-between">
            {/*<RoomsCount className="w-auto hidden sm:block" />*/}
          </div>
        </Content>
      </Section>
      <Section>
        <Content className="hidden w-full md:block">
          <Filters />
        </Content>
        <Content className="grid-auto-rows grid grid-cols-1 gap-1 py-14 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRoomsBySlug(categoria).map((c, index) => (
            <CardRoom key={index} room={c} />
          ))}
        </Content>
      </Section>
    </>
  );
}
