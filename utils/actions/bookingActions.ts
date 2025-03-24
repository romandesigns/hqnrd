"use server";

import { parseISO } from "date-fns";
import { newBookingZodValidationSchema } from "@/utils/zodValidation/bookingSchema";

// New booking interface
export interface newBookingInterface {
  adultsCount: number;
  childrensCount: number;
  checkIn: Date;
  checkOut: Date;
  checkInMessage: string;
  unitNumber: number;
  roomCategory: string;
  message?: string;
}

export const newBookingAction = async (prevState: any, formData: FormData) => {
  // Parsing  payload with Inconming FormData
  const payload: newBookingInterface = {
    adultsCount: Number(formData.get("adultsCount")),
    childrensCount: Number(formData.get("childrensCount")),
    checkIn: parseISO(formData.get("checkIn") as string),
    checkOut: parseISO(formData.get("checkOut") as string),
    checkInMessage: formData.get("checkInMessage") as string,
    unitNumber: Number(formData.get("unitNumber")),
    roomCategory: formData.get("unitCategory") as string,
  };

  // Validating payload data
  const validatePayload = newBookingZodValidationSchema.safeParse(payload);
  if (!validatePayload.success) {
    const { fieldErrors } = validatePayload.error.flatten();
    const payloadKeys = Object.keys(payload);
    const errors = Object.fromEntries(
      Object.entries(fieldErrors)
        .filter(([key]) => payloadKeys.includes(key))
        .map(([key, errors]) => [
          key,
          errors && errors[0] ? errors[0] : "Invalid input",
        ]),
    );
    console.log(errors);
    return errors;
  }

  // Save to database
  // const data = validatePayload.data;
};
