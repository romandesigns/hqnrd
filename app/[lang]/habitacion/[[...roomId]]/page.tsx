import { Locale } from "@/i18n-config";
import { slugCategories } from "@/utils/constants/global";
import { removePluralSuffix } from "@/utils/formatter/pluralSuffixCleaner";
import { redirect } from "next/navigation";
import { ClientLayout, Content, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { GoBack } from "@/components/ui/goBack";
import { ContactWidget } from "@/components/features";
import { FaShareNodes } from "@/components/icons";
import { Features } from "@/components/features/page/Room/Features";
import { Description } from "@/components/features/page/Room/Description";
import { Amenities } from "@/components/features/page/Room/Amenities";
import { Media } from "@/components/features/page/Room/Media";
import { Trending } from "@/components/features/page/home";
import { Booking } from "@/components/features/site/Forms/Booking";

type CategoryObject = {
  [key: string]: {
    value: string;
    label: string;
    units?: number[];
  };
};

export default async function Page({
  params,
}: {
  params: Promise<{ roomId: string; lang: Locale }>;
}) {
  // Destructuring segment parameters
  const { lang, roomId } = await params;
  // Transforming slug array to create an object containing the rooms and associated identifiers
  const transformSlugCategories = (): CategoryObject => {
    return slugCategories
      .filter((slug) => slug.value !== "ver-todas")
      .reduce<CategoryObject>((acc, category) => {
        acc[removePluralSuffix(category.value)] = { ...category };
        return acc;
      }, {});
  };

  const checkCategoryAndUnitFromQuery = () => {
    // Redirecting user to rooms page if any of the following evaluates to true
    if (roomId === undefined || !Array.isArray(roomId) || roomId.length !== 2)
      redirect(`/${lang}/habitaciones`);
    const [category, unit] = roomId;
    const unitNumber = parseInt(unit, 10);
    const categories = transformSlugCategories();
    // Check if category exists
    if (!categories[category]) return false;
    // Check if unit exists within the category
    return categories[category].units?.includes(unitNumber) || false;
  };
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
              <Button className="w-full max-w-lg md:hidden">
                Make Reservation
              </Button>
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
            <div className="md:sticky md:top-[15rem]">
              <h4 className="inline-block translate-x-4 translate-y-4 rounded-md border-4 border-background bg-secondary p-2 px-6 text-2xl font-bold">
                2,350$ / Day
              </h4>
              <Booking lang={lang} />
            </div>
          </aside>
        </Content>
      </Section>
      <Section className="py-5 lg:py-20">
        <Trending
          lang={lang}
          heading="Trending now"
          description="See these otehr options and reserve today"
        />
      </Section>
    </ClientLayout>
  );
}
5;
