"use client";
import React from "react";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { Button } from "@/components/ui/button";

export function CustomSignUp() {
  return (
    <div className="w-full max-w-[23rem]">
      <SignUp.Root>
        <SignUp.Step name="start" className="space-y-3">
          {/* User - Username */}
          <Clerk.Field name="username" className="start flex flex-col gap-2">
            <Clerk.Label className="text-xs text-muted-foreground">
              Username
            </Clerk.Label>
            <Clerk.Input className="w-full rounded-md border border-muted bg-transparent p-2 text-sm outline-none focus:outline-muted-foreground/50" />
            <Clerk.FieldError />
          </Clerk.Field>
          <br />
          {/* User - Email */}
          <Clerk.Field
            name="emailAddress"
            className="start flex flex-col gap-2"
          >
            <Clerk.Label className="text-xs text-muted-foreground">
              Email
            </Clerk.Label>
            <Clerk.Input className="w-full rounded-md border border-muted bg-transparent p-2 text-sm outline-none focus:outline-muted-foreground/50" />
            <Clerk.FieldError />
          </Clerk.Field>
          {/* User - Password */}
          <Clerk.Field name="password" className="start flex flex-col gap-2">
            <Clerk.Label className="text-xs text-muted-foreground">
              password
            </Clerk.Label>
            <Clerk.Input className="w-full rounded-md border border-muted bg-transparent p-2 text-sm outline-none focus:outline-muted-foreground/50" />
            <Clerk.FieldError />
          </Clerk.Field>
          <SignUp.Captcha />
          <Button asChild>
            <SignUp.Action submit>Sign up</SignUp.Action>
          </Button>
        </SignUp.Step>

        <SignUp.Step name="verifications">
          <SignUp.Strategy name="email_code">
            <h1>Check your email</h1>

            <Clerk.Field name="code">
              <Clerk.Label className="text-xs text-muted-foreground">
                Email Code
              </Clerk.Label>
              <Clerk.Input className="w-full rounded-md border border-muted bg-transparent p-2 text-sm outline-none focus:outline-muted-foreground/50" />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignUp.Action submit>Verify</SignUp.Action>
          </SignUp.Strategy>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
}
