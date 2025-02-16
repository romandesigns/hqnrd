'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MdTranslate } from "@/components/icons";
import { LocaleSwitcher } from "@/components/features/site/LocaleSwitcher";
import { Locale } from "@/i18n-config";

export function LanguagePicker({ lang }:{ lang: Locale }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <MdTranslate />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Idiom</DialogTitle>
        </DialogHeader>
          <LocaleSwitcher lang={lang}/>
      </DialogContent>
    </Dialog>
  )
}
