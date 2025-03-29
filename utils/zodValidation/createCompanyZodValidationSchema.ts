import z from "zod";

export enum Sex {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

export const CreateCompanyZodValidationSchema = z
  .object({
    name: z.string().min(3),
    registeredName: z.string(),
    sex: z.enum([Sex.MALE, Sex.FEMALE, Sex.OTHER]),
    rnc: z.string(),
    accountType: z.string(),
    email: z.string().email(),
    phone: z.string({ message: "Phone number is required" }),
    phoneCountryCode: z.string(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password confirmation does not match",
    path: ["password"],
  });

export type CreateCompanyZodValidationSchema = z.infer<
  typeof CreateCompanyZodValidationSchema
>;
