"use client";
import { FormLabel } from "@/components/features";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInputField } from "@/components/ui/PhoneInput";
import SubmitButton from "@/components/ui/SubmitButton";
import { Locale } from "@/i18n-config";
import { createCompanyAccountAction } from "@/utils/actions/companyAction";
import { CountryCode } from "libphonenumber-js";
import Form from "next/form";
import Link from "next/link";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function CompanySignUpForm({
  lang,
  defaultCountry,
}: {
  lang: Locale;
  defaultCountry: CountryCode;
}) {
  const [step, setStep] = React.useState(0);

  return (
    <Form className="flex w-full flex-col gap-6 self-center px-2 [--margin-bottom:0.5rem]">
      <div
        className={
          step === 0
            ? "flex w-full flex-col items-center justify-center gap-2"
            : "hidden"
        }
      >
        {/*User Details*/}
        <div className={step === 0 ? "flex w-full flex-col" : "hidden"}>
          <div className="mb-[var(--margin-bottom)] flex w-full flex-1 flex-col items-center justify-center gap-2 lg:flex-row">
            <Label className="mb-2 block w-full" htmlFor="name">
              <FormLabel label="Nombre de Empresa" />
              <Input type="text" name="name" id="name" />
            </Label>
            <Label className="mb-2 block w-full" htmlFor="registeredName">
              <FormLabel label="Nombre Registrado de Empresa" />
              <Input type="text" name="registeredName" id="registeredName" />
            </Label>
          </div>
          <Label
            className="mb-[var(--margin-bottom)] mr-auto block w-2/4"
            htmlFor="rnc"
          >
            <FormLabel label="RNC (Optional)" />
            <Input type="text" name="rnc" id="rnc" />
          </Label>
          <Label
            className="mb-[var(--margin-bottom)] mt-2 w-full"
            htmlFor="address"
          >
            <FormLabel label="Address" />
            <Input type="text" name="address" id="businessType" />
          </Label>
        </div>
        <div className={"my-[var(--margin-bottom)] w-full gap-2 py-2"}>
          <FormLabel label="Select company type:" />
          <RadioGroup
            name="sex"
            className={
              "mt-6 grid w-full grid-cols-1 grid-rows-3 justify-start gap-4 lg:grid-cols-2 lg:grid-rows-2"
            }
          >
            <div className="flex w-full items-center space-x-2">
              <RadioGroupItem value="male" id="r1" />
              <Label htmlFor="r1">Public Company</Label>
            </div>
            <div className="flex w-full items-center space-x-2">
              <RadioGroupItem value="female" id="r2" />
              <Label htmlFor="r2">Private Company (No Receipt)</Label>
            </div>
            <div className="flex w-full items-center space-x-2 lg:col-start-1 lg:col-end-3">
              <RadioGroupItem value="otro" id="r3" />
              <Label htmlFor="r3">Private Company (With Receipt)</Label>
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
        defaultValue="business"
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
            <SubmitButton className="my-2" action={createCompanyAccountAction}>
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
