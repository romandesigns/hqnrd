import { Content } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { InputNumber } from "@/components/ui/form/InputNumber";
import { Locale } from "@/i18n-config";
import Form from "next/form";

export function ReservationSearchBox({ lang }: { lang: Locale }) {
  return (
    <>
      <Content className="max-w-5xl">
        <h2 className="py-6 text-center text-2xl font-bold">
          Start booking today!
        </h2>
        <article className="h-full w-full rounded-lg border bg-background p-1 max-[754px]:flex max-[754px]:flex-col">
          <Form
            action={`/${lang}/habitaciones?search`}
            className="grid h-full w-full grid-cols-[1fr_1fr_10rem] grid-rows-1 items-center justify-center gap-5 rounded-lg bg-secondary/20 p-6 max-[754px]:flex max-[754px]:flex-col lg:p-10"
          >
            <div className="flex items-center justify-center gap-2">
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
                iconSize={16}
              />
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <DateAndTimePicker
                lang={lang}
                hideIcon={true}
                label="Check in date"
                icon="calendar"
              />
              <DateAndTimePicker
                lang={lang}
                hideIcon={true}
                label="Check out date"
                icon="calendar"
              />
            </div>
            <Button className="mt-2 w-full lg:mt-6">Search</Button>
          </Form>
        </article>
      </Content>
    </>
  );
}
