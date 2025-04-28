import type { Doc, Id } from "@/convex/_generated/dataModel";

export const checkUserProfileFields = (user: Doc<"users">): Boolean => {
  const requiredFields = [
    "name",
    "lastName",
    "gender",
    "dob",
    "phoneNumber",
    "photoId",
    "country",
  ];
  const missingFields = requiredFields.filter(
    (field) => !user[field as keyof typeof user],
  );
  if (missingFields.length > 0) {
    console.warn("Missing required fields:", missingFields);
    return true;
  }

  return false;
};
