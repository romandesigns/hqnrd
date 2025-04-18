import React from "react";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeadingSection } from "@/components/features/site/Headings";

export function SignUpForm() {
  return (
    <SignIn.Root>
      <Clerk.Loading>
        {(isGlobalLoading) => (
          <>
            <SignIn.Step name="start">
              <Card className="mt-4 w-full rounded-md border-none bg-transparent sm:w-96">
                <CardHeader>
                  <HeadingSection
                    showBorders={true}
                    title="Inicia Session"
                    description="Ingrese su email para continuar"
                  />
                </CardHeader>
                <CardContent className="grid">
                  <Clerk.Field name="identifier" className="space-y-2">
                    <Clerk.Label
                      asChild
                      className="text-xs text-muted-foreground"
                    >
                      <Label>Email address</Label>
                    </Clerk.Label>
                    <Clerk.Input type="email" required asChild>
                      <Input />
                    </Clerk.Input>
                    <Clerk.FieldError className="field-error" />
                  </Clerk.Field>
                </CardContent>
                <CardFooter>
                  <div className="mt-8 grid w-full gap-y-4">
                    <SignIn.Action submit asChild>
                      <Button disabled={isGlobalLoading}>
                        <Clerk.Loading>
                          {(isLoading) => {
                            return isLoading ? "Loading" : "Continue";
                          }}
                        </Clerk.Loading>
                      </Button>
                    </SignIn.Action>

                    <Button variant="link" size="sm" asChild>
                      <Clerk.Link navigate="sign-up">
                        Don&apos;t have an account? Sign up
                      </Clerk.Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </SignIn.Step>

            <SignIn.Step name="choose-strategy">
              <Card className="mt-4 w-full rounded-md border-none bg-transparent sm:w-96">
                <CardHeader>
                  <CardTitle>Use another method</CardTitle>
                  <CardDescription>
                    Facing issues? You can use any of these methods to sign in.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-y-4">
                  <SignIn.SupportedStrategy name="email_code" asChild>
                    <Button
                      type="button"
                      variant="link"
                      disabled={isGlobalLoading}
                    >
                      Send me email code
                    </Button>
                  </SignIn.SupportedStrategy>
                  <SignIn.SupportedStrategy name="password" asChild>
                    <Button
                      type="button"
                      variant="link"
                      disabled={isGlobalLoading}
                    >
                      Password
                    </Button>
                  </SignIn.SupportedStrategy>
                </CardContent>
                <CardFooter>
                  <div className="grid w-full gap-y-4">
                    <SignIn.Action navigate="previous" asChild>
                      <Button disabled={isGlobalLoading}>
                        <Clerk.Loading>
                          {(isLoading) => {
                            return isLoading ? "Loading" : "Go back";
                          }}
                        </Clerk.Loading>
                      </Button>
                    </SignIn.Action>
                  </div>
                </CardFooter>
              </Card>
            </SignIn.Step>

            <SignIn.Step name="verifications">
              <SignIn.Strategy name="password">
                <Card className="mt-4 w-full rounded-md border-none bg-transparent sm:w-96">
                  <CardHeader>
                    {/* <CardTitle>Check your email</CardTitle>
                    <CardDescription>
                      Enter the verification code sent to your email
                    </CardDescription> */}
                    <p className="text-sm text-muted-foreground">
                      Welcome back <SignIn.SafeIdentifier />
                    </p>
                  </CardHeader>
                  <CardContent className="grid gap-y-4">
                    <Clerk.Field name="password" className="space-y-2">
                      <Clerk.Label
                        asChild
                        className="text-xs text-muted-foreground"
                      >
                        <Label>Password</Label>
                      </Clerk.Label>
                      <Clerk.Input type="password" asChild>
                        <Input />
                      </Clerk.Input>
                      <Clerk.FieldError className="field-error" />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignIn.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? "Loading" : "Continue";
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                      <SignIn.Action navigate="choose-strategy" asChild>
                        <Button type="button" size="sm" variant="link">
                          Use another method
                        </Button>
                      </SignIn.Action>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Strategy>

              <SignIn.Strategy name="email_code">
                <Card className="mt-4 w-full rounded-md border-none bg-transparent sm:w-96">
                  <CardHeader>
                    <CardTitle>Check your email</CardTitle>
                    <CardDescription>
                      Enter the verification code sent to your email
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      Welcome back <SignIn.SafeIdentifier />
                    </p>
                  </CardHeader>
                  <CardContent className="grid gap-y-4">
                    <Clerk.Field name="code">
                      <Clerk.Label className="sr-only">
                        Email verification code
                      </Clerk.Label>
                      <div className="grid items-center justify-center gap-y-2">
                        <div className="flex justify-center text-center">
                          <Clerk.Input
                            type="otp"
                            autoSubmit
                            className="flex justify-center has-[:disabled]:opacity-50"
                            render={({ value, status }) => {
                              return (
                                <div
                                  data-status={status}
                                  className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=cursor]:ring-1 data-[status=selected]:ring-1 data-[status=cursor]:ring-ring data-[status=selected]:ring-ring"
                                >
                                  {value}
                                </div>
                              );
                            }}
                          />
                        </div>
                        <Clerk.FieldError className="field-error" />
                        <SignIn.Action
                          asChild
                          resend
                          className="text-muted-foreground"
                          fallback={({ resendableAfter }) => (
                            <Button variant="link" size="sm" disabled>
                              Didn&apos;t receive a code? Resend (
                              <span className="tabular-nums">
                                {resendableAfter}
                              </span>
                              )
                            </Button>
                          )}
                        >
                          <Button variant="link" size="sm">
                            Didn&apos;t receive a code? Resend
                          </Button>
                        </SignIn.Action>
                      </div>
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignIn.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? "Loading" : "Continue";
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                      <SignIn.Action navigate="choose-strategy" asChild>
                        <Button size="sm" variant="link">
                          Use another method
                        </Button>
                      </SignIn.Action>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Strategy>
            </SignIn.Step>
          </>
        )}
      </Clerk.Loading>
    </SignIn.Root>
  );
}
