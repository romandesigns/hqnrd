"use server";
import { parseISO } from "date-fns";
import { CreateUserZodValidationSchema } from "../zodValidation/newBookingZodValidationSchema";

// New booking interface
interface CreateUserInterface {
  name: string;
  lastName: string;
  dob: Date;
  sex: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const createUserAction = async (formData: FormData) => {
  // Parsing  payload with Inconming FormData
  const payload: CreateUserInterface = {
    name: formData.get("name") as string,
    lastName: formData.get("lastName") as string,
    dob: parseISO(formData.get("dob") as string),
    sex: formData.get("sex") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  // Validating payload data
  const validatePayload = CreateUserZodValidationSchema.safeParse(payload);
  if (!validatePayload.success) {
    const { fieldErrors } = validatePayload.error.flatten();
    const payloadKeys = Object.keys(payload);
    console.log(payloadKeys);
    const errors = Object.fromEntries(
      Object.entries(fieldErrors)
        .filter(([key]) => payloadKeys.includes(key))
        .map(([key, errors]) => [
          key,
          errors && errors[0] ? errors[0] : "Invalid input",
        ]),
    );
    return errors;
  }
  console.log(validatePayload);
};
