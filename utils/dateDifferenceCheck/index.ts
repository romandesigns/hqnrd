import { differenceInCalendarDays } from "date-fns";

type DateCheckResult =
  | { ok: true; days: number }
  | { ok: false; error: string };

export const checkDateDifference = (
  date1: Date,
  date2: Date,
): DateCheckResult => {
  if (!date1 || !date2) {
    return { ok: false, error: "Both dates must be provided." };
  }

  if (date2 < date1) {
    return {
      ok: false,
      error: "The second date must be after the first date.",
    };
  }

  const days = differenceInCalendarDays(date2, date1);
  return { ok: true, days };
};
