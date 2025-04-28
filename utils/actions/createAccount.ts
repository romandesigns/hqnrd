"use server";

export async function createAccountAction(formData: FormData) {
  "use server";
  const username = formData.get("username");
  const emailAddress = formData.get("emailAddress");
  const password = formData.get("password");

  const payload = {
    username,
    emailAddress,
    password,
  };

  console.log(payload);
}

export async function updateUser(formData: FormData) {
  "use server";

  const payload = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    gender: formData.get("gender"),
    dob: new Date(formData.get("dob") as string).getTime(),
    guestPhoneNumber: formData.get("guestPhoneNumber"),
    phoneCountryCode: formData.get("phoneCountryCode"),
    country: formData.get("country"),
    emName: formData.get("emName"),
    emLastName: formData.get("emLastName"),
    emergencyContactRelation: formData.get("emergencyContactRelation"),
    emergencyContactPhoneNumber: formData.get("emergencyContactPhoneNumber"),
    emphoneCountryCode: formData.get("phoneCountryCode"),
  };

  console.log(payload);
}
