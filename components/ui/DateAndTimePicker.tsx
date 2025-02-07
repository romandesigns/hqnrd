"use client";
import { FaCalendar } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { Locale } from "@/i18n-config";
import { enUS, es } from "date-fns/locale";
import React from "react";
import { FormLabel } from "../features";
import { DateTimePicker } from "../features/site/DateTimePicker";

export function DateAndTimePicker({
  lang,
  hideIcon,
  label,
  icon,
}: {
  lang: Locale;
  hideIcon?: boolean;
  label: string;
  icon: string;
}) {
  const [date12, setDate12] = React.useState<Date | undefined>(undefined);

  return (
    <Label className="!m-0 flex-1" htmlFor="date">
      {icon === "calendar" ? (
        <div className="flex items-center justify-start gap-3 pb-2">
          <FaCalendar />
          <FormLabel label={label} />
        </div>
      ) : (
        <FormLabel label={label} />
      )}
      <DateTimePicker
        hourCycle={12}
        value={date12}
        onChange={setDate12}
        locale={lang === "es" ? es : enUS}
        placeholder="--/--/----"
        granularity="day"
        displayFormat={{ hour12: "MM/dd/yyyy" }}
        hideIcon={hideIcon}
        className="hover:bg-transparent"
        labelFor="date"
      />
    </Label>
  );
}
