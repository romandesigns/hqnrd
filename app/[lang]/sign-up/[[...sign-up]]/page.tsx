"use client";

import { Button } from "@/components/ui/button";
import { createAccountAction } from "@/utils/actions/createAccount";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

export default function SignUpPage() {
  return (
    <div className="flex h-full min-h-dvh w-full items-center justify-center">
      <SignUp.Root>
        <SignUp.Step name="start" className="flex flex-col gap-2">
          <h1 className="my-4 text-center text-2xl font-bold uppercase">
            Create an account
          </h1>
          <Clerk.Connection name="google" className="hidden">
            Sign up with Google
          </Clerk.Connection>
          <div
            id="clerk-captcha"
            data-cl-theme="dark"
            data-cl-size="flexible"
            data-cl-language="es-ES"
          />
          <Clerk.Field name="username" className="my-1 flex flex-col">
            <Clerk.Label className="text-xs text-muted-foreground">
              Username
            </Clerk.Label>
            <Clerk.Input className="rounded-md border bg-background p-1" />
            <Clerk.FieldError />
          </Clerk.Field>
          <Clerk.Field className="my-1 flex flex-col" name="emailAddress">
            <Clerk.Label className="text-xs text-muted-foreground">
              Email
            </Clerk.Label>
            <Clerk.Input className="rounded-md border bg-background p-1" />
            <Clerk.FieldError />
          </Clerk.Field>

          <Clerk.Field className="my-1 flex flex-col" name="password">
            <Clerk.Label className="text-xs text-muted-foreground">
              Password
            </Clerk.Label>
            <Clerk.Input className="rounded-md border bg-background p-1" />
            <Clerk.FieldError />
          </Clerk.Field>

          <SignUp.Action
            className="rounded-md bg-primary-foreground p-2 text-xs font-bold uppercase"
            submit
          >
            Sign up
          </SignUp.Action>
        </SignUp.Step>

        {/* <SignUp.Step name="continue" className="flex flex-col gap-2">
          <h1>Fill in missing fields</h1>

          <Clerk.Field name="username">
            <Clerk.Label className="text-xs text-muted-foreground">
              Username
            </Clerk.Label>
            <Clerk.Input className="rounded-md border bg-background p-1" />
            <Clerk.FieldError />
          </Clerk.Field>

          <SignUp.Action submit>Continue</SignUp.Action>
        </SignUp.Step> */}

        <SignUp.Step name="verifications" className="flex flex-col gap-2">
          {/* <SignUp.Strategy name="phone_code">
            <h1 className="text-center font-bold uppercase">
              Check your phone for an SMS
            </h1>

            <Clerk.Field className="my-1 flex flex-col" name="code">
              <Clerk.Label className="text-xs text-muted-foreground">
                Phone Code
              </Clerk.Label>
              <Clerk.Input className="rounded-md border bg-background p-1" />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignUp.Action
              className="rounded-md bg-primary-foreground p-2 text-xs font-bold uppercase"
              submit
            >
              Verify
            </SignUp.Action>
          </SignUp.Strategy> */}

          <SignUp.Strategy name="email_code">
            <h1 className="text-center font-bold uppercase">
              Check your email
            </h1>

            <Clerk.Field className="my-1 flex flex-col" name="code">
              <Clerk.Label className="text-xs text-muted-foreground">
                Email Code
              </Clerk.Label>
              <Clerk.Input className="rounded-md border bg-background p-1" />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignUp.Action
              className="rounded-md bg-primary-foreground p-2 text-xs font-bold uppercase"
              submit
            >
              Verify
            </SignUp.Action>
          </SignUp.Strategy>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
}
