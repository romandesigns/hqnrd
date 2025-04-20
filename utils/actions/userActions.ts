"use server";
import { parseISO } from "date-fns";
import { CreateUserZodValidationSchema } from "../zodValidation/newBookingZodValidationSchema";
import { clerkClient } from "@clerk/nextjs/server";
import { SignUpResource } from "@clerk/types";

// New booking interface
interface CreateUserInterface {
  name: string;
  lastName: string;
  dob: Date;
  sex: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  password: string;
  confirmPassword: string;
  accountType: string;
}

type SignUpPayload = {
  email: string;
  password: string;
  code?: string;
  userId?: string;
};

export const createUserAccountAction = async (formData: FormData) => {
  // Parsing  payload with Inconming FormData
  const payload: CreateUserInterface = {
    name: formData.get("name") as string,
    lastName: formData.get("lastName") as string,
    dob: parseISO(formData.get("dob") as string),
    sex: formData.get("sex") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    phoneCountryCode: formData.get("phoneCountryCode") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    accountType: formData.get("accountType") as string,
  };

  //@ts-ignore
  const response = await clerkClient.users.createUser({
    emailAddress: [payload.email],
    password: payload.password,
  });

  console.log(response);

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
};
