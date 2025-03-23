import { Content } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { InputNumber } from "@/components/ui/form/InputNumber";
import { Locale } from "@/i18n-config";
import Form from "next/form";

export function ReservationSearchBox({ lang }: { lang: Locale }) {
  return (
    <>
      <Content className="max-w-3xl">
        <h2 className="py-6 text-center text-2xl font-bold">
          Start booking today!
        </h2>
        <article className="h-full w-full rounded-lg border bg-background p-1 max-[754px]:flex max-[754px]:flex-col">
          <Form
            action={`/${lang}/habitaciones`}
            className="grid h-full w-full grid-cols-[1fr_1fr_8rem] grid-rows-1 items-center justify-center gap-5 rounded-lg bg-secondary/20 p-4 max-[754px]:grid max-[754px]:grid-cols-1 max-[754px]:grid-rows-[1fr_1fr_auto] lg:p-5"
          >
            <div className="flex items-center justify-center gap-4 max-[754px]:gap-8">
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
            <div>
              <DateAndTimePicker
                lang={lang}
                granularity="minute"
                icon="calendar"
                hideIcon={true}
                label="Check In"
                minDate={new Date(new Date().setHours(0, 0, 0, 0))}
                displayFormat={{ hour12: "MM/dd/yyyy hh:mm a" }}
                inputName="checkIn"
              />
            </div>
            <Button className="mt-2 w-full lg:mt-6" type="submit">
              Search Room
            </Button>
          </Form>
        </article>
      </Content>
    </>
  );
}
