import { ContactWidget } from "@/components/features";
import { Trending } from "@/components/features/page/home";
import { Amenities } from "@/components/features/page/Room/Amenities";
import { Description } from "@/components/features/page/Room/Description";
import { Features } from "@/components/features/page/Room/Features";
import { Media } from "@/components/features/page/Room/Media";
import { Booking } from "@/components/features/site/Forms/Booking";
import { FaShareNodes } from "@/components/icons";
import { ClientLayout, Content, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { GoBack } from "@/components/ui/goBack";
import { Locale } from "@/i18n-config";
import data from "@/public/assets/mocked_data/rooms.json";
import { removePluralSuffix } from "@/utils/formatter/pluralSuffixCleaner";
import { notFound, redirect } from "next/navigation";
import { ReservationDialogForm } from "./ReservationDialogForm";

export default async function Page({
  params,
}: {
  params: Promise<{ roomId: string; lang: Locale }>;
}) {
  // Destructuring segment parameters
  const { lang, roomId } = await params;
  const [roomCategory, roomUnitNumber] = roomId;
  const category = removePluralSuffix(roomCategory);
  if (!category) redirect(`/${lang}/habitaciones`);
  if (!roomUnitNumber) redirect(`/${lang}/habitaciones`);

  const room = data.rooms.filter(
    (r) =>
      Number(r.unitNumber) === Number(roomUnitNumber) && r.slug === category,
  )[0];

  if (!room) {
    notFound();
  }

  return (
    <ClientLayout lang={lang}>
      <header className="hqnrd-frosty-bg">
        <Content className="p-6 px-2 lg:py-2 lg:pt-8">
          <div className="py-3">
            <GoBack variant="outline" />
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="mb-4 flex flex-col items-center justify-center gap-x-2 md:flex-1 md:items-start md:justify-start lg:mb-0">
              <p className="font-bold">Unit 201</p>
              <h2 className="text-3xl font-black uppercase leading-6 md:text-5xl md:font-black">
                Doble Cama
              </h2>
            </div>
            <div className="md:max-w-auto flex w-full max-w-6xl items-center justify-center md:w-auto md:flex-col md:justify-between">
              {/* <Button></Button> */}
              <ReservationDialogForm
                className="w-full max-w-md md:hidden"
                lang={lang}
                unitNumber={Number(roomUnitNumber)}
                unitCategory={roomCategory}
              />
              <ContactWidget
                lang={lang}
                className="hidden md:block"
                variant="outline"
              />
            </div>
          </div>
        </Content>
      </header>
      <Section>
        <Content>
          <div className="grid grid-cols-4 grid-rows-2 gap-1 p-2">
            <figure className="col-span-2 row-span-2 aspect-square rounded-lg bg-pink-500"></figure>
            <figure className="col-start-3 col-end-5 rounded-lg bg-purple-500"></figure>
            <figure className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-lg bg-orange-500"></figure>
            <figure className="col-start-4 col-end-5 rounded-lg bg-yellow-500"></figure>
          </div>
        </Content>
      </Section>
      <Section>
        <Content className="grid grid-cols-1 gap-10 p-2 md:grid-cols-[2fr_1fr]">
          <article className="flex flex-col items-center justify-center gap-10 lg:gap-20">
            <div className="flex w-full items-center justify-start pt-3">
              <Button size="icon" variant="outline">
                <FaShareNodes />
              </Button>
            </div>
            <Features />
            <Description />
            <Amenities />
            <Media />
          </article>
          <aside className="hidden pt-4 md:block">
            <div className="top-52 py-8 md:sticky">
              <h4 className="inline-block translate-x-4 translate-y-4 rounded-md border-4 border-background bg-secondary p-2 px-6 text-2xl font-bold">
                2,350$ / Night
              </h4>
              <div className="rounded-md bg-secondary/50 px-4 py-6">
                <Booking
                  lang={lang}
                  unitNumber={Number(roomUnitNumber)}
                  unitCategory={roomCategory}
                />
              </div>
            </div>
          </aside>
        </Content>
      </Section>
      <Section className="py-5 lg:py-20">
        <Trending
          rooms={data.rooms}
          lang={lang}
          heading="Trending now"
          description="See these otehr options and reserve today"
        />
      </Section>
    </ClientLayout>
  );
}
5;
