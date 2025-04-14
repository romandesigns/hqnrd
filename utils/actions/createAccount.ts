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
