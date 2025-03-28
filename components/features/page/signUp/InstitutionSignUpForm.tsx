"use client";
import React from "react";
import { FormLabel } from "@/components/features";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Locale } from "@/i18n-config";
import { enUS, es } from "date-fns/locale";
import Form from "next/form";
import Link from "next/link";
import { DateTimePicker } from "../../site/DateTimePicker";
import { createUserAction } from "@/utils/actions/userActions";
import SubmitButton from "@/components/ui/SubmitButton";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { PhoneInputDefault } from "@/components/ui/phone-example/phone-input-default";

export function InstitutionSignUpForm({ lang }: { lang: Locale }) {
  const [step, setStep] = React.useState(0);

  return (
    <Form className="flex flex-col gap-2 [--margin-bottom:0.5rem]">
      {/*User Details*/}
      <div className={step === 0 ? "block" : "hidden"}>
        <div className="mb-[var(--margin-bottom)] flex items-center justify-center gap-2">
          <Label className="mb-2 flex-1" htmlFor="institutionName">
            <FormLabel label="Instituion Name" />
            <Input type="text" name="institutionName" id="institutionName" />
          </Label>
          <Label className="mb-2 flex-1" htmlFor="registeredInstitutionName">
            <FormLabel label="Registered Name" />
            <Input
              type="text"
              name="registeredInstitutionName"
              id="registeredInstitutionName"
            />
          </Label>
        </div>
        <div className="mb-[var(--margin-bottom)] flex items-center justify-center gap-2">
          <Label className="mb-2 flex-1" htmlFor="rnc">
            <FormLabel label="RNC (Optional)" />
            <Input type="text" name="rnc" id="rnc" />
          </Label>
        </div>
        <div className="mb-[var(--margin-bottom)] flex items-center justify-center gap-2">
          <Label className="mb-2 flex-1" htmlFor="address">
            <FormLabel label="Address" />
            <Input type="text" name="address" id="address" />
          </Label>
        </div>
      </div>
      <div className={step === 1 ? "block" : "hidden"}>
        {/* <PhoneInputDefault /> */}
        {/*Contact Details*/}
        <Label className="mb-1 flex-1" htmlFor="email">
          <FormLabel label="Email" />
          <Input type="email" name="email" id="email" />
        </Label>
        <Label
          className="my-[var(--margin-bottom)] block flex-1 gap-2"
          htmlFor="password"
        >
          <FormLabel label="Password" />
          <Input type="password" name="password" id="password" />
        </Label>
        <Label className="mb-1 flex-1" htmlFor="confirmPassword">
          <FormLabel label="Confirm Password" />
          <Input type="password" name="confirmPassword" id="confirmPassword" />
        </Label>
      </div>

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
