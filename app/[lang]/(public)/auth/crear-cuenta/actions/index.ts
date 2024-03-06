"use server";
import { userSchema } from "./schema";

export async function signUpUser(dateOfBirth: Date | null, formData: FormData) {
  const data = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    sex: formData.get("sex"),
    email: formData.get("email"),
    phone: formData.get("tel"),
    telCountry: formData.get("telCountry"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    dob: dateOfBirth,
  };

  console.log(data);

  try {
    const validatedData = userSchema.parse(data);
    console.log("Validated data", validatedData);
  } catch (e) {
    console.error("Validation error", e);
  }
}
