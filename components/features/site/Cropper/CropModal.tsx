import Cropper, { Area } from "react-easy-crop";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // ⬅ Add this
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import getCroppedImg from "@/helpers/getCroppedImg";
import { Button } from "@/components/ui/button";

interface CropModalProps {
  open: boolean;
  imageSrc: string;
  aspect: number;
  onClose: () => void;
  onCropComplete: (croppedImage: Blob) => void;
}

export function CropModal({
  open,
  imageSrc,
  aspect,
  onClose,
  onCropComplete,
}: CropModalProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropDone = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    onCropComplete(croppedImage);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-[40vw] p-4">
        <DialogTitle>
          <VisuallyHidden>Crop image</VisuallyHidden>
        </DialogTitle>

        <div className="relative h-[60vh] w-full bg-muted">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(_, croppedPixels) =>
              setCroppedAreaPixels(croppedPixels)
            }
          />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onCropDone}>Crop</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
