import { z } from "zod";
export const userSchema = z
  .object({
    name: z.string(),
    lastName: z.string(),
    sex: z.enum(["male", "female", "other"]),
    email: z.string().email(),
    telCountry: z.string(), // You might want to validate against a list of country codes
    phone: z.string(), // Custom regex can be used to validate phone numbers
    password: z.string(),
    confirmPassword: z.string(),
    dob: z.date(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // This points the error to confirmPassword field
  });
