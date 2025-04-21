import { ContactWidget } from "@/components/features";
import { Trending } from "@/components/features/page/home";
import { Amenities } from "@/components/features/page/Room/Amenities";
import { Description } from "@/components/features/page/Room/Description";
import { Features } from "@/components/features/page/Room/Features";
import { Media } from "@/components/features/page/Room/Media";
import { Booking } from "@/components/features/site/Forms/Booking";
import {
  BsFillCameraFill,
  FaShareNodes,
  IoMdCloudUpload,
} from "@/components/icons";
import { ClientLayout, Content, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { GoBack } from "@/components/ui/goBack";
import { Locale } from "@/i18n-config";
import data from "@/public/assets/mocked_data/rooms.json";
import { convertToLocaleString } from "@/utils/computeFees";
import { removePluralSuffix } from "@/utils/formatter/pluralSuffixCleaner";
import { notFound, redirect } from "next/navigation";
import { ReservationDialogForm } from "./ReservationDialogForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeadingSection } from "@/components/features/site/Headings";
import Form from "next/form";
import { Field } from "@/components/features/site/Forms/Field";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { Label } from "@/components/ui/label";
import { FormLabel } from "@/components/features/site/Label";
import { PhoneInputField } from "@/components/ui/PhoneInput";
import { CountryCode } from "libphonenumber-js";
import { headers } from "next/headers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const headersList = await headers();
  const defaultCountry = headersList
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[1];

  return (
    <ClientLayout lang={lang}>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-[4] flex items-center justify-center bg-black/85 p-2 backdrop-blur-lg lg:p-8">
        <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] rounded-md border border-background bg-background p-1 shadow-lg shadow-black/50 lg:aspect-square lg:h-auto lg:w-[90vw] lg:max-w-[60rem]">
          <header className="flex flex-col items-center justify-between p-2 lg:flex-row lg:p-4">
            <div>
              <HeadingSection
                title="Personal Information"
                description="Complete to finish registration"
                className="py-2 lg:hidden"
              />
              <h3 className="text-md hidden font-bold uppercase leading-6 lg:block lg:text-xl">
                Personal Information
              </h3>
              <p className="hidden text-xs text-muted-foreground lg:block lg:text-sm">
                Complete to finish registration
              </p>
            </div>
            <Button className="w-full lg:w-36">Save</Button>
          </header>
          <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] overflow-y-auto rounded-md rounded-t-lg bg-secondary/50 lg:grid-cols-[1fr_2fr] lg:grid-rows-1 lg:py-4">
            <div className="h-full py-2">
              <div className="relative mx-auto h-auto w-20">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 z-[3] grid h-8 w-8 place-content-center rounded-full bg-primary p-1">
                  <IoMdCloudUpload className="h-5 w-5 text-background" />
                </div>
              </div>
            </div>
            <div className="lg:px-8">
              <Form action="" className="flex flex-col gap-y-6 p-2 lg:gap-y-5">
                <div className="flex gap-2">
                  <Field label="Name" name="namme" />
                  <Field label="Last Name" name="lastName" />
                </div>
                <Field
                  label="Gender"
                  name="gender"
                  items={["Male", "Female", "Other"]}
                  type="radio"
                />
                <DateAndTimePicker
                  lang={lang}
                  granularity="day"
                  icon=""
                  label="Date of Birth"
                  displayFormat={{ hour12: "MM/dd/yyyy" }}
                  inputName="dob"
                />
                <Label className="mb-1 w-full" htmlFor="email">
                  <FormLabel label="Phone Number" />
                  <PhoneInputField
                    defaultCountry={defaultCountry as CountryCode}
                  />
                  <div className="flex w-full items-center justify-end">
                    <span className="mt-4 text-xs underline">
                      Verify my phone number
                    </span>
                  </div>
                </Label>
                <div className="max-w-72">
                  <FormLabel label="State ID or Passport (Required)" />
                  <div className="flex w-full gap-2 rounded-md bg-primary/5 p-2">
                    <div className="grid aspect-square h-auto w-2/4 place-content-center border-2 border-dashed border-primary/10">
                      <IoMdCloudUpload className="h-5 w-5 text-background" />
                    </div>
                    <div className="grid aspect-square h-auto w-2/4 place-content-center border-2 border-dashed border-primary/10">
                      <BsFillCameraFill className="h-5 w-5 text-background" />
                    </div>
                  </div>
                </div>
                {/* Emergency Contact */}
                <p className="text-sm text-muted-foreground">
                  Emergency Contact <span>(Optional)</span>
                </p>
                <div className="flex gap-2">
                  <Field label="Name" name="namme" />
                  <Field label="Last Name" name="lastName" />
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Father</SelectItem>
                      <SelectItem value="banana">Mother</SelectItem>
                      <SelectItem value="blueberry">Sibling</SelectItem>
                      <SelectItem value="grapes">Next to skin</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Label className="mb-1 w-full" htmlFor="email">
                  <FormLabel label="Phone Number" />
                  <PhoneInputField
                    defaultCountry={defaultCountry as CountryCode}
                  />
                </Label>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <header className="hqnrd-frosty-bg">
        <Content className="p-6 px-2 lg:py-2">
          <div className="py-3">
            <GoBack variant="outline" />
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="mb-4 flex flex-col items-center justify-center gap-x-2 md:flex-1 md:items-start md:justify-start lg:mb-0">
              <p className="font-bold">Unit {room.unitNumber}</p>
              <h2 className="text-3xl font-black uppercase leading-6 md:text-5xl md:font-black">
                {room.category}
              </h2>
            </div>
            <div className="md:max-w-auto flex w-full max-w-6xl items-center justify-center md:w-auto md:flex-col md:justify-between">
              <ReservationDialogForm
                className="w-full max-w-md md:hidden"
                lang={lang}
                unitNumber={Number(roomUnitNumber)}
                unitCategory={room.category}
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
              <h4 className="inline-block translate-x-4 translate-y-4 rounded-md border-4 border-background bg-secondary p-2 px-6 pl-4 text-2xl font-bold">
                {convertToLocaleString(room.pricePerNight, lang)} / Night
              </h4>
              <div className="rounded-md bg-secondary/50 px-2 py-6">
                <Booking
                  lang={lang}
                  unitNumber={Number(roomUnitNumber)}
                  unitCategory={roomCategory}
                  pricePerNight={room.pricePerNight}
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
