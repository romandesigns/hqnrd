import { Button } from "@/components/ui/button";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { InputNumber } from "@/components/ui/form/InputNumber";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Locale } from "@/i18n-config";
import { ReservationState } from "@/store/slices/reservation";
import Form from "next/form";
import React from "react";
import { Loader } from "../../Loader";

type RoomFormInputProps = {
  bookedReservation: ReservationState;
  lang: Locale;
  unitNumber: number;
  unitCategory: string;
  checkOutTime: { time: string };
  pending: boolean;
  pricePerNight: number;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function FormInput({
  lang,
  unitNumber,
  unitCategory,
  checkOutTime,
  pending,
  handleSubmit,
  pricePerNight,
  bookedReservation,
}: RoomFormInputProps) {
  return (
    <Form className="space-y-6 rounded-md py-8 lg:p-2" onSubmit={handleSubmit}>
      <div className="flex items-center justify-center gap-4">
        {/* Adults: Number Input */}
        <InputNumber
          name="adultsCount"
          inputNumberLabel="Adults"
          iconName="FaUser"
          iconSize={13}
          defaultValue={bookedReservation.adults}
        />
        {/* Children: Number Input*/}
        <InputNumber
          name="childrensCount"
          inputNumberLabel="Children"
          iconName="FaChild"
          iconSize={13}
          defaultValue={bookedReservation.children}
        />
      </div>
      <div className="flex items-center justify-center gap-1">
        {/* Check In: Date Input */}
        <DateAndTimePicker
          lang={lang}
          granularity="minute"
          icon="calendar"
          hideIcon={true}
          label="Check In"
          minDate={new Date(new Date().setHours(0, 0, 0, 0))}
          displayFormat={{ hour12: "MM/dd/yyyy hh:mm a" }}
          inputName="checkIn"
          align="start"
          sideOffset={-180}
          defaultValue={bookedReservation.checkInDate}
        />
        {/* Check Out: Date Input */}
        <DateAndTimePicker
          lang={lang}
          granularity="day"
          icon="calendar"
          hideIcon={true}
          label="Check Out"
          minDate={new Date(new Date().setHours(0, 0, 0, 0))}
          displayFormat={{ hour12: "MM/dd/yyyy hh:mm a" }}
          inputName="checkOut"
          time={checkOutTime.time}
          align="end"
          sideOffset={-180}
          defaultValue={bookedReservation.checkOutDate}
        />
      </div>
      <div className="">
        <Label htmlFor="message" className="text-muted-foreground">
          Message (Optional)
        </Label>
        <Textarea
          className="h-36"
          name="checkInMessage"
          defaultValue={bookedReservation.bookingMessage}
        />
        <input
          name="unitNumber"
          value={unitNumber}
          readOnly
          className="hidden"
        />
        <input
          name="unitCategory"
          value={unitCategory}
          readOnly
          className="hidden"
        />
        <Button
          size="full"
          className="mt-8 py-5"
          type="submit"
          disabled={pending}
        >
          {pending ? <Loader /> : "Add Booking"}
        </Button>
      </div>
    </Form>
  );
}
