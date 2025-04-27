"use client";
import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { IoMdCloudUpload } from "react-icons/io";
import { CropModal } from "./CropModal";

export function UploadIDCard({ onChange }: { onChange: (file: Blob) => void }) {
  const [fileUrl, setFileUrl] = useState(""); // original URL
  const [showCrop, setShowCrop] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(""); // cropped preview

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFileUrl(url);
    setShowCrop(true);
  };

  const handleCrop = (blob: Blob) => {
    onChange(blob);
    const preview = URL.createObjectURL(blob);
    setPreviewUrl(preview);
  };

  return (
    <>
      <div className="flex w-full items-center justify-center gap-4">
        <label
          htmlFor="id-upload"
          className="relative aspect-[1.586] w-[280px] max-w-full cursor-pointer overflow-hidden rounded-md border border-dashed border-primary/20 bg-background/60 shadow-sm transition hover:border-primary hover:bg-primary/10"
          style={{
            backgroundImage: previewUrl ? `url(${previewUrl})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-xs text-white transition hover:bg-black/30">
            <div className="flex flex-col items-center justify-center rounded-md bg-black/40 px-3 py-2 backdrop-blur-sm">
              <IoMdCloudUpload className="mb-1 h-6 w-6" />
              <span className="text-xs font-medium">
                {previewUrl ? "Update ID" : "Upload ID"}
              </span>
            </div>
            {!previewUrl && (
              <span className="absolute bottom-3 left-3 text-[0.7rem] text-muted-foreground">
                Cedula or Passport
              </span>
            )}
          </div>
          <input
            type="file"
            id="id-upload"
            accept="image/*"
            className="hidden"
            onChange={handleFile}
          />
        </label>
      </div>

      <CropModal
        open={showCrop}
        imageSrc={fileUrl}
        aspect={1.586}
        onClose={() => setShowCrop(false)}
        onCropComplete={handleCrop}
      />
    </>
  );
}
