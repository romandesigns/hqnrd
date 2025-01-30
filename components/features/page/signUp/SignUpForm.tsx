"use client";
import { FormLabel } from "@/components/features";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";
import { enUS, es } from "date-fns/locale";
import Form from "next/form";
import Link from "next/link";
import React from "react";
import { DateTimePicker } from "../../site/DateTimePicker";

export function SignUpForm({ lang }: { lang: Locale }) {
  const [date12, setDate12] = React.useState<Date | undefined>(undefined);
  const [step, setStep] = React.useState(0);

  return (
    <Form action="#" className="flex flex-col gap-4">
      {step === 0 && (
        <>
          <div className="flex items-center justify-center gap-4">
            <Label className="mb-2 flex-1" htmlFor="name">
              <FormLabel label="Nombre" />
              <Input type="name" name="name" id="name" />
            </Label>
            <Label className="mb-2 flex-1" htmlFor="lasName">
              <FormLabel label="Apellido" />
              <Input type="name" name="lasName" id="lasName" />
            </Label>
          </div>
          <Label className="flex-1" htmlFor="dob">
            <FormLabel label="Date of Birth" />
            <DateTimePicker
              hourCycle={12}
              value={date12}
              onChange={setDate12}
              locale={lang === "es" ? es : enUS}
              placeholder="--/--/----"
              granularity="day"
              displayFormat={{ hour12: "MM/dd/yyyy" }}
              birthDate
              className="hover:bg-transparent"
            />
          </Label>
          <div>
            <FormLabel label="Sex" />
            <RadioGroup>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Other</Label>
              </div>
            </RadioGroup>
          </div>
        </>
      )}
      {step === 1 && (
        <>
          <Label className="mb-2 flex-1" htmlFor="email">
            <FormLabel label="Email" />
            <Input type="email" name="email" id="email" />
          </Label>
          <Label className="mb-2 flex-1" htmlFor="password">
            <FormLabel label="Password" />
            <Input type="password" name="password" id="password" />
          </Label>
          <Label className="mb-2 flex-1" htmlFor="confirmPassword">
            <FormLabel label="Confirm Password" />
            <Input type="password" name="password" id="confirmPassword" />
          </Label>
        </>
      )}

      <div
        className={cn(
          `grid grid-cols-1`,
          step === 1 ? "grid-cols-[1fr_3fr] gap-3" : "",
        )}
      >
        {step === 0 && (
          <Button
            size="full"
            className="my-2"
            onClick={() => setStep(step + 1)}
          >
            Next
          </Button>
        )}
        {step === 1 && (
          <>
            <Button
              size="full"
              className="my-2"
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
            <Button size="full" className="my-2">
              Next
            </Button>
          </>
        )}
      </div>

      <p className="py-4 text-center text-xs text-muted-foreground">
        Already registered?
        <Link
          className="ml-2 font-bold underline"
          href={`/${lang}/auth/iniciar-session`}
        >
          Sign In
        </Link>
      </p>
    </Form>
  );
}
