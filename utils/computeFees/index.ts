import { Locale } from "@/i18n-config";
import { differenceInCalendarDays } from "date-fns";

/** Tipo de retorno para formatear fechas */
export type FormatDateStringTypes =
  | { ok: true; formattedDate: string }
  | { ok: false; error: string }
  | { date: string };

/** Verifica la diferencia de días entre dos fechas */
export const checkDateDifference = (
  checkIn: Date | null,
  checkOut: Date | null,
): { days: number } => {
  if (!checkIn || !checkOut) {
    throw new Error("Both checkIn and checkOut dates must be provided");
  }

  const days = differenceInCalendarDays(checkOut, checkIn);
  return { days };
};

/** Formatea una fecha a formato creativo o plano */
export const formatDateString = (
  date: Date | null,
  formatString?: "creative" | "plain",
): FormatDateStringTypes => {
  if (!date) {
    return { ok: false, error: "Date is required" };
  }

  const [reservationDate, reservationTime] = date
    .toLocaleString()
    .replace(":00", "")
    .split(",");

  if (formatString === "creative") {
    return {
      ok: true,
      formattedDate: `🗓️ ${reservationDate} ⏰ ${reservationTime}`,
    };
  }

  if (formatString === "plain") {
    return {
      ok: true,
      formattedDate: `${reservationDate} / ${reservationTime}`,
    };
  }

  return { date: date.toLocaleString() };
};

/** Devuelve la configuración local para formatear monedas */
export const getCurrencyLocale = (lang: Locale) => {
  return {
    locale: lang === "en" ? "en-US" : "es-DO",
    currency: lang === "en" ? "USD" : "DOP", // corregido: DOM ➝ DOP
  };
};

/** Formatea un número como string con moneda local */
export const convertToLocaleString = (amount: number = 0, lang: Locale) => {
  const { locale, currency } = getCurrencyLocale(lang);
  return amount
    .toLocaleString(locale, {
      style: "currency",
      currency,
    })
    .replace(".00", "");
};

/** Calcula el total sin descuento */
export const getTotalFees = (
  pricePerNight: number,
  totalDays: number,
): number => {
  const calculatedTotalFees = pricePerNight * totalDays;
  return Number.isNaN(calculatedTotalFees) ? 0 : calculatedTotalFees;
};

/** Enum de porcentajes de descuento */
export enum DiscountedPercentage {
  fiveDaysOrMore = 5,
  fifteenOrMore = 8,
}

/** Evalúa el porcentaje de descuento según días */
export const checkIfDiscountIsApplicable = (totalDays: number): number => {
  if (totalDays >= 15) return DiscountedPercentage.fifteenOrMore;
  if (totalDays >= 5) return DiscountedPercentage.fiveDaysOrMore;
  return 0;
};

/**
 * Calcula todos los valores financieros:
 * - Monto del descuento
 * - Total final con descuento
 * - Depósito de reservación (mitad del total con descuento)
 */

export const getPriceWithDiscount = (
  totalDays: number,
  pricePerNight: number,
): {
  discountedAmount: number;
  totalAmountAfterDiscount: number;
  depositeAmountAfterDiscount: number;
} => {
  const discountPercentage = checkIfDiscountIsApplicable(totalDays);
  if (discountPercentage === 0)
    return {
      discountedAmount: 0,
      totalAmountAfterDiscount: 0,
      depositeAmountAfterDiscount: 0,
    };
  const total = getTotalFees(pricePerNight, totalDays);
  const discountedAmount = (total * discountPercentage) / 100;
  const totalAmountAfterDiscount = total - discountedAmount;
  const depositeAmountAfterDiscount = totalAmountAfterDiscount / 2;

  return {
    discountedAmount: Math.round(discountedAmount * 100) / 100,
    totalAmountAfterDiscount: Math.round(totalAmountAfterDiscount * 100) / 100,
    depositeAmountAfterDiscount:
      Math.round(depositeAmountAfterDiscount * 100) / 100,
  };
};
