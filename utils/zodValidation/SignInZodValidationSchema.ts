import z from "zod";

export const SignInZodValidationSchema = z.object({
  email: z.string().email(),
  passworkd: z.number().optional().default(0),
});

export type NewBookingZodSchema = z.infer<typeof SignInZodValidationSchema>;
