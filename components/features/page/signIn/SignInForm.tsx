"use client";
import { FormLabel } from "@/components/features";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Locale } from "@/i18n-config";
import Form from "next/form";
import Link from "next/link";
import React from "react";

export function SignInForm({ lang }: { lang: Locale }) {
  return (
    <Form action="#" className="flex flex-col gap-4 py-4">
      <Label className="mb-2 flex-1" htmlFor="email">
        <FormLabel label="Email" />
        <Input type="email" name="email" id="email" />
      </Label>
      <Label className="mb-2 flex-1" htmlFor="password">
        <FormLabel label="Password" />
        <Input type="password" name="password" id="password" />
      </Label>
      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="save-password" />
          <label
            htmlFor="save-password"
            className="text-xs font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Save my password
          </label>
        </div>
        <Link
          className="f ml-2 text-xs text-muted-foreground underline"
          href={`/${lang}/auth/recuperar-clave`}
        >
          Forgot password
        </Link>
      </div>
      <Button size="full" className="mb-2 mt-8">
        Sign In
      </Button>
      <p className="py-4 text-center text-xs text-muted-foreground">
        Not registered yet?
        <Link className="ml-2 font-bold underline" href={`/${lang}/auth`}>
          Sign Up
        </Link>
      </p>
    </Form>
  );
}
