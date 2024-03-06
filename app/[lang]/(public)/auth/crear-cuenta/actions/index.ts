"use server";
import { userSchema } from "./schema";

export async function signUpUser(dateOfBirth: Date | null, formData: FormData) {
  const user = userSchema.parse(formData);
  user.dob = dateOfBirth?.toISOString;
}
