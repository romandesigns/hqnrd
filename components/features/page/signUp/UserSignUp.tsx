"use client";
import { FormLabel } from "@/components/features";
import { Button } from "@/components/ui/button";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInputField } from "@/components/ui/PhoneInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SubmitButton from "@/components/ui/SubmitButton";
import { Locale } from "@/i18n-config";
import { createUserAction } from "@/utils/actions/userActions";
import { CountryCode } from "libphonenumber-js";
import Form from "next/form";
import Link from "next/link";
import React from "react";

export function UserSignUpForm({
  lang,
  defaultCountry,
}: {
  lang: Locale;
  defaultCountry: CountryCode;
}) {
  const [step, setStep] = React.useState(0);

  return (
    <Form className="flex flex-col gap-6 self-center px-4 [--margin-bottom:0.5rem]">
      {/*User Details*/}
      <div className={step === 0 ? "block" : "hidden"}>
        <div className="mb-[var(--margin-bottom)] flex items-center justify-center gap-2">
          <Label className="mb-2 flex-1" htmlFor="name">
            <FormLabel label="Nombre" />
            <Input type="text" name="name" id="name" />
          </Label>
          <Label className="mb-2 flex-1" htmlFor="lastName">
            <FormLabel label="Apellido" />
            <Input type="text" name="lastName" id="lastName" />
          </Label>
        </div>

        <Label className="mb-[var(--margin-bottom)] flex-1 gap-2" htmlFor="dob">
          <DateAndTimePicker
            lang={lang}
            granularity="day"
            icon="calendar"
            hideIcon={true}
            label="Date of Birth"
            displayFormat={{ hour12: "MM/dd/yyyy" }}
            inputName="dob"
            align="start"
            sideOffset={-180}
          />
        </Label>

        <div className={"my-[var(--margin-bottom)] gap-2 py-2"}>
          <FormLabel label="Sex" />
          <RadioGroup name="sex" className={"flex items-center justify-start"}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="r1" />
              <Label htmlFor="r1">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="r2" />
              <Label htmlFor="r2">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="otro" id="r3" />
              <Label htmlFor="r3">Other</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div
        className={
          step === 1
            ? "flex w-full flex-col items-center justify-center gap-2"
            : "hidden"
        }
      >
        {/*Contact Details*/}
        <Label className="mb-1 w-full" htmlFor="email">
          <FormLabel label="Email" />
          <Input type="email" name="email" id="email" />
        </Label>
        <Label className="mb-1 w-full" htmlFor="email">
          <FormLabel label="Phone Number" />
          <PhoneInputField defaultCountry={defaultCountry as CountryCode} />
        </Label>
        <Label
          className="my-[var(--margin-bottom)] block w-full gap-2"
          htmlFor="password"
        >
          <FormLabel label="Password" />
          <Input type="password" name="password" id="password" />
        </Label>
        <Label className="mb-1 w-full" htmlFor="confirmPassword">
          <FormLabel label="Confirm Password" />
          <Input type="password" name="confirmPassword" id="confirmPassword" />
        </Label>
      </div>
      <Input
        className="hidden"
        name="accountType"
        readOnly
        defaultValue="user"
      />
      <div className={"py-2.5"}>
        {step === 0 && (
          <Button
            type="submit"
            size="full"
            className="my-2 py-2"
            onClick={() => setStep(step + 1)}
          >
            Next
          </Button>
        )}
        {step === 1 && (
          <div className="grid grid-cols-[0.2fr_3fr] gap-2">
            <Button
              variant="secondary"
              onClick={() => setStep(step - 1)}
              size="full"
              className="my-2 py-2"
            >
              Previous
            </Button>
            <SubmitButton className="my-2" action={createUserAction}>
              <span>Submit</span>
            </SubmitButton>
          </div>
        )}
      </div>

      <p className="py-1text-center mx-auto text-xs text-muted-foreground">
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
