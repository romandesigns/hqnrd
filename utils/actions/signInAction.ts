"use server";
import { parseISO } from "date-fns";
import { SignInZodValidationSchema } from "../zodValidation/SignInZodValidationSchema";

// New booking interface
interface SignInInterface {
  email: string;
  password: string;
}

export const signInAction = async (formData: FormData) => {
  // Parsing  payload with Inconming FormData
  const payload: SignInInterface = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  // Validating payload data
  const validatePayload = SignInZodValidationSchema.safeParse(payload);
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
};
