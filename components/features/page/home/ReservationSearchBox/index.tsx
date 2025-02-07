import { Content } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { InputNumber } from "@/components/ui/form/InputNumber";
import { Locale } from "@/i18n-config";

export function ReservationSearchBox({ lang }: { lang: Locale }) {
  return (
    <>
      <Content className="max-w-5xl">
        <h2 className="py-6 text-center text-2xl font-bold">
          Start booking today!
        </h2>
        <article className="grid h-full w-full grid-cols-[1fr_1fr_1fr_1fr_10rem] grid-rows-1 items-center justify-center gap-5 rounded-lg bg-primary-foreground p-10 shadow-2xl">
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
          <Button className="mt-6">Search</Button>
        </article>
      </Content>
    </>
  );
}
