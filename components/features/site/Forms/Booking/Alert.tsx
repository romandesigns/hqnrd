import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { BiSolidMessageSquareError } from "@/components/icons";

export function Alert({
  errorMessages,
  setOpen,
  setErrorMessages,
}: {
  errorMessages: { key: string; message: unknown }[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessages: React.Dispatch<
    React.SetStateAction<{ key: string; message: unknown }[]>
  >;
}) {
  return (
    <AlertDialog open={errorMessages.length > 0} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-start gap-2 text-yellow-400">
            <span>Error Message</span>
            <BiSolidMessageSquareError />
          </AlertDialogTitle>
          <AlertDialogDescription>
            {errorMessages.map((error) => (
              <span key={error.key}>
                <strong>{error.key}:</strong> {String(error.message)}
              </span>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              setOpen(false);
              setErrorMessages([]);
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
