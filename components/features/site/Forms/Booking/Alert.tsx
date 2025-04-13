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
import { ErrorPropTypes } from ".";

export function Alert({
  errorMessages,
  setErrorOpen,
  setErrorMessages,
}: {
  errorMessages: ErrorPropTypes[];
  setErrorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessages: React.Dispatch<React.SetStateAction<ErrorPropTypes[]>>;
}) {
  const { key, heading, message } = errorMessages[0] || {};
  return (
    <AlertDialog open={errorMessages.length > 0} onOpenChange={setErrorOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {heading && (
            <AlertDialogTitle className="flex items-center justify-start gap-2 text-yellow-400">
              <span>{heading}</span>
              <BiSolidMessageSquareError />
            </AlertDialogTitle>
          )}
          {message && (
            <AlertDialogDescription>
              <span>{message}</span>
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className="mr-auto mt-8"
            onClick={() => {
              setErrorOpen(false);
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
