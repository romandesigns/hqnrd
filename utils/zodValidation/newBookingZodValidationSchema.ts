import z from "zod";

export enum Sex {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

// Helper function to check if a date string corresponds to a legal adult
const isLegalAdult = (dobString: string): boolean => {
  const dob = new Date(dobString);
  if (isNaN(dob.getTime())) return false; // Invalid date
  const today = new Date();
  const adultDate = new Date(
    dob.getFullYear() + 18,
    dob.getMonth(),
    dob.getDate(),
  );
  return adultDate <= today;
};

export const CreateUserZodValidationSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name should have more than 3 characters long" }),
    lastName: z
      .string()
      .min(5, { message: "Name should have more than 3 characters long" }),
    dob: z
      .string({ required_error: "Date of birth is required" })
      .refine(isLegalAdult, { message: "User must be at least 18 years old" }),
    sex: z.enum([Sex.MALE, Sex.FEMALE, Sex.OTHER]),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password confirmation does not match",
    path: ["password"],
  });

export type CreateUserZodValidationSchema = z.infer<
  typeof CreateUserZodValidationSchema
>;
