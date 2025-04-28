"use client";
import React, { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { CropModal } from "./CropModal";

export function UploadAvatar({ onChange }: { onChange: (file: Blob) => void }) {
  const [fileUrl, setFileUrl] = useState("");
  const [showCrop, setShowCrop] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFileUrl(url);
    setShowCrop(true);
  };

  const handleCrop = (blob: Blob) => {
    onChange(blob);
  };

  return (
    <>
      <label
        htmlFor="avatar-upload"
        className="grid h-7 w-7 cursor-pointer place-content-center rounded-full bg-primary"
      >
        <IoMdCloudUpload className="h-4 w-4 text-background" />
        <input
          type="file"
          id="avatar-upload"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />
      </label>
      <CropModal
        open={showCrop}
        imageSrc={fileUrl}
        aspect={1}
        onClose={() => setShowCrop(false)}
        onCropComplete={handleCrop}
      />
    </>
  );
}
