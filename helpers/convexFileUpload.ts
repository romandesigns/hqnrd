import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export const handleUserImageFileUpload = async (
  model: "users" | "rooms",
  userId: string,
  file: File,
) => {
  if (!["users", "rooms"].includes(model)) {
    throw new Error("Invalid model passed to useImageUploader");
  }

  const generateUploadUrl =
    model === "users"
      ? useMutation(api.users.generateUploadUrl)
      : useMutation(api.rooms.generateUploadUrl);

  const sendImage = useMutation(api.users.updateUserPhotoId);

  // Step 1: Get a short-lived upload URL
  const postUrl = await generateUploadUrl();
  const result = await fetch(postUrl, {
    method: "POST",
    headers: { "Content-Type": file!.type },
    body: file,
  });

  const json = await result.json();
  if (!result.ok) {
    throw new Error(`Upload failed: ${JSON.stringify(json)}`);
  }

  const { storageId } = json;
  await sendImage({
    storageId,
    userId: userId as Id<"users">,
    type: "profileImage",
  });

  return { generateUploadUrl };
};
