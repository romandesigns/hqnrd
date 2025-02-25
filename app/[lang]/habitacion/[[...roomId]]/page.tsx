import { Locale } from "@/i18n-config";
import { categoriesSlug } from "@/utils/constants/global";
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
import { InputNumber } from "@/components/ui/form/InputNumber";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Trending } from "@/components/features/page/home";

type CategoryObject = {
  [key: string]: {
    value: string;
    label: string;
    units?: number[];
  };
};

export default async function Page({ params }: { params: Promise<{ roomId: string, lang: Locale }> }) {
  // Destructuring segment parameters
  const { lang, roomId } = await params;
  // Transforming slug array to create an object containing the rooms and associated identifiers
  const transformSlugCategories = (): CategoryObject => {
    return categoriesSlug.filter(slug => slug.value !== "ver-todas").reduce<CategoryObject>((acc, category) => {
      acc[removePluralSuffix(category.value)] = { ...category };
      return acc;
    }, {});
  };

  const checkCategoryAndUnitFromQuery = () => {
    // Redirecting user to rooms page if any of the following evaluates to true
    if (roomId === undefined || !Array.isArray(roomId) || roomId.length !== 2) redirect(`/${lang}/habitaciones`);
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
      <header
        className="hqnrd-frosty-bg">
        <Content className="p-6 px-2 lg:py-2 lg:pt-8">
          <div className="py-3">
            <GoBack variant="outline" />
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
            <div
              className="flex flex-col justify-center items-center mb-4 lg:mb-0 gap-x-2 md:flex-1 md:justify-start md:items-start">
              <p className="font-bold">Unit 201</p>
              <h2 className="leading-6 font-black  text-3xl md:text-5xl md:font-black uppercase">Doble Cama</h2>
            </div>
            <div
              className="flex justify-center items-center  md:flex-col md:justify-between w-full max-w-6xl md:w-auto md:max-w-auto">
              <Button className="w-full max-w-lg md:hidden">Make Reservation</Button>
              <ContactWidget lang={lang} className="hidden md:block" variant="outline" />
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
        <Content className="grid grid-cols-[2fr_1fr] gap-2 p-2">
          <article className="flex flex-col items-center justify-center gap-14">
            <div className="flex items-center justify-start w-full pt-3">
              <Button size="icon" variant="outline">
                <FaShareNodes />
              </Button>
            </div>
            <Features />
            <Description />
            <Amenities />
            <Media />
          </article>
          <aside className="pt-4">
            <div>
              <h4
                className="bg-secondary inline-block text-2xl font-bold p-2 rounded-md border border-background translate-y-2 px-6 ">2,350$
                /
                Day</h4>
              <div className="bg-secondary/50 p-2 rounded-tr-md py-8 space-y-6">
                <div className="flex items-center justify-center gap-4 px-4">
                  <InputNumber
                    name="adultsCount"
                    inputNumberLabel="Adults"
                    iconName="FaUser"
                    iconSize={13}
                  />
                  <InputNumber
                    name="childrensCount"
                    inputNumberLabel="Children"
                    iconName="FaChild"
                    iconSize={13}
                  />
                </div>
                <div className="flex items-center justify-center gap-4 px-4">
                  <DateAndTimePicker
                    lang={lang}
                    hideIcon={true}
                    label="Check In"
                    icon="calendar"
                    granularity="minute"
                    minDate={new Date()}
                  />
                  <DateAndTimePicker
                    lang={lang}
                    hideIcon={true}
                    label="Check Out"
                    icon="calendar"
                    granularity="day"
                    minDate={new Date()}
                  />
                </div>
                <div className="px-4">
                  <Label htmlFor="message" className="text-muted-foreground ">Message (Optional)</Label>
                  <Textarea />
                  <Button size="full" className="py-5 mt-8">Add Booking</Button>
                </div>
              </div>
            </div>
          </aside>
        </Content>
      </Section>
      <Section className="py-20">
        <Trending />
      </Section>
    </ClientLayout>
  );
}
