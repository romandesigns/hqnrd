import { CardRoom } from "@/components/features/page/home/Trending/CardRoom";
import { RoomsCount } from "@/components/features/page/rooms/Header/RoomsCount";
import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { Locale } from "@/i18n-config";
import {rooms} from './rooms';

type SearchParams = { [key: string]: string | string[] | undefined }

interface PageProps {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<SearchParams>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { lang } = params;
  const { categoria } = await props.searchParams;

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
          {(categoria === 'ver-todas' || categoria === undefined ? rooms : rooms.filter(room => room.slug === categoria)).map(room => <CardRoom lang={lang} key={room.uuid} room={room} /> )}
        </Content>
      </Section>
    </>
  );
}
