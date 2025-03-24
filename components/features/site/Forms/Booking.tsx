"use client";
import Form from "next/form";
import { InputNumber } from "@/components/ui/form/InputNumber";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { newBookingAction as createBooking } from "@/utils/actions/bookingActions";
import React, { useActionState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { BiSolidMessageSquareError } from "@/components/icons";
import { Loader } from "../Loader";

export const Booking = ({
  lang,
  unitNumber,
  unitCategory,
}: {
  lang: Locale;
  unitNumber: number;
  unitCategory: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState<
    { key: string; message: unknown }[]
  >([]);
  const initialState = {};

  // Default values shown

  //@ts-ignore
  const [state, formAction, pending] = useActionState(
    createBooking,
    initialState,
  );

  enum checkOutTime {
    time = "11:30 AM",
  }

  React.useEffect(() => {
    const displayFormErrors = () => {
      const errorArray = Object.entries(state || {}).map(([key, message]) => ({
        key,
        message,
      }));

      if (errorArray.length > 0) {
        setErrorMessages(errorArray);
        setOpen(true);
      }
    };
    displayFormErrors();
  }, [state]);

  return (
    <>
      <AlertDialog open={errorMessages.length > 0} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center justify-start gap-2 text-yellow-400">
              <span>Error Message</span>
              <BiSolidMessageSquareError />
            </AlertDialogTitle>
            <AlertDialogDescription>
              {errorMessages.map((error) => (
                <span key={error.key}>
                  <strong>{error.key}:</strong> {String(error.message)}
                </span>
              ))}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                setOpen(false);
                setErrorMessages([]);
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Form className="space-y-6 rounded-md py-8 lg:p-2" action={formAction}>
        <div className="flex items-center justify-center gap-4">
          {/* Adults: Number Input */}
          <InputNumber
            name="adultsCount"
            inputNumberLabel="Adults"
            iconName="FaUser"
            iconSize={13}
          />
          {/* Children: Number Input*/}
          <InputNumber
            name="childrensCount"
            inputNumberLabel="Children"
            iconName="FaChild"
            iconSize={13}
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
          />
        </div>
        <div className="">
          <Label htmlFor="message" className="text-muted-foreground">
            Message (Optional)
          </Label>
          <Textarea className="h-36" name="checkInMessage" />
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
            {pending ? <Loader /> : "Book Now"}
          </Button>
        </div>
      </Form>
    </>
  );
};
