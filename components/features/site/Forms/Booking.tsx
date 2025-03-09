import Form from "next/form";
import { InputNumber } from "@/components/ui/form/InputNumber";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";

export const Booking = ({ lang }: { lang: Locale }) => {
  return <Form className="bg-secondary/50 p-2 rounded-md py-8 space-y-6" action={"#"}>
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
  </Form>;
};
