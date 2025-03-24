import z from "zod";

export enum RoomCategory {
  BASICA = "basica",
  STANDAR = "standar",
  EJECUTIVA = "ejecutiva",
  FAMILIAR = "familiar",
  DOBLE = "doble",
  DOBLE_CAMA = "doble-cama",
}

export const newBookingZodValidationSchema = z
  .object({
    adultsCount: z
      .number()
      .min(1, { message: "At least one adult is required" }),
    childrensCount: z.number().optional().default(0),
    checkIn: z.date({ message: "Check In date is required" }),
    checkInMessage: z.string().optional(),
    checkOut: z.date({ message: "Check Out date is required" }),
    unitNumber: z.number(),
    roomCategory: z.enum([
      RoomCategory.BASICA,
      RoomCategory.STANDAR,
      RoomCategory.EJECUTIVA,
      RoomCategory.FAMILIAR,
      RoomCategory.DOBLE,
      RoomCategory.DOBLE_CAMA,
    ]),
  })
  .refine((data) => data.checkOut >= data.checkIn, {
    message: "Check-out date cannot be before check-in date",
    path: ["checkOut"],
  });

export type NewBookingZodSchema = z.infer<typeof newBookingZodValidationSchema>;
