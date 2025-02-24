"use client";
import { Button, ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MdTranslate } from "@/components/icons";
import { LocaleSwitcher } from "@/components/features/site/LocaleSwitcher";
import { Locale } from "@/i18n-config";
import { cx } from "class-variance-authority";

export function LanguagePicker({ lang, variant, className }: {
  lang: Locale,
  variant: ButtonProps["variant"],
  className: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} size="icon" className={cx(className)}>
          <MdTranslate />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Idiom</DialogTitle>
        </DialogHeader>
        <LocaleSwitcher lang={lang} />
      </DialogContent>
    </Dialog>
  );
}
