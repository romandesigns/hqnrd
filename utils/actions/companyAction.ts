"use server";
import { parseISO } from "date-fns";
import { CreateCompanyZodValidationSchema } from "../zodValidation/createCompanyZodValidationSchema";

// New booking interface
interface CreateCompanyAccountInterface {
  name: string;
  registeredName: string;
  rnc: Date;
  address: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  password: string;
  confirmPassword: string;
  accountType: string;
}

export const createCompanyAccountAction = async (formData: FormData) => {
  // Parsing  payload with Inconming FormData
  const payload: CreateCompanyAccountInterface = {
    name: formData.get("name") as string,
    registeredName: formData.get("registeredName") as string,
    rnc: parseISO(formData.get("rnc") as string),
    address: formData.get("address") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    phoneCountryCode: formData.get("phoneCountryCode") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    accountType: formData.get("accountType") as string,
  };

  // Validating payload data
  const validatePayload = CreateCompanyZodValidationSchema.safeParse(payload);
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
