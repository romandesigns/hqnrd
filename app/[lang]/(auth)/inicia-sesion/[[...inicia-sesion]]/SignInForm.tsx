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

export function SignInForm() {
  return (
    <SignIn.Root>
      <Clerk.Loading>
        {(isGlobalLoading) => (
          <>
            {/* Start Step */}
            <SignIn.Step name="start">
              <Card className="mt-4 w-full rounded-md border-none bg-transparent sm:w-96">
                <CardHeader>
                  <HeadingSection
                    showBorders={true}
                    title="Inicia Sesión"
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
                          {(isLoading) => (isLoading ? "Loading" : "Continue")}
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

            {/* Verifications Step */}
            <SignIn.Step name="verifications">
              <SignIn.Strategy name="password">
                <Card className="mt-4 w-full rounded-md border-none bg-transparent sm:w-96">
                  <CardHeader>
                    <HeadingSection
                      showBorders={true}
                      title="Welcome back"
                      className="pb-0"
                    />
                    <p className="block text-center text-sm font-medium">
                      <SignIn.SafeIdentifier />
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
                      <SignIn.Action
                        navigate="forgot-password"
                        className="text-xs text-muted-foreground underline"
                      >
                        Forgot password?
                      </SignIn.Action>
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignIn.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) =>
                              isLoading ? "Loading" : "Continue"
                            }
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
                    <HeadingSection
                      showBorders={true}
                      title="Check your email"
                      className="pb-0"
                      description="Enter the verification code sent to your email"
                    />
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
                            render={({ value, status }) => (
                              <div
                                data-status={status}
                                className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=cursor]:ring-1 data-[status=selected]:ring-1 data-[status=cursor]:ring-ring data-[status=selected]:ring-ring"
                              >
                                {value}
                              </div>
                            )}
                          />
                        </div>
                        <Clerk.FieldError className="field-error" />
                        <SignIn.Action
                          asChild
                          resend
                          className="text-muted-foreground"
                          fallback={({ resendableAfter }) => (
                            <Button variant="link" size="sm" disabled>
                              Didn&apos;t receive a code?{" "}
                              <span className="text-foreground">Resend</span> (
                              <span className="tabular-nums">
                                {resendableAfter}
                              </span>
                              )
                            </Button>
                          )}
                        >
                          <Button variant="link" size="sm">
                            Didn&apos;t receive a code?{" "}
                            <span className="text-foreground">Resend</span>
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
                            {(isLoading) =>
                              isLoading ? "Loading" : "Continue"
                            }
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

              <SignIn.Strategy name="reset_password_email_code">
                <HeadingSection
                  showBorders={true}
                  title="Check your email"
                  className="pb-0"
                  description="Enter the verification code sent to your email"
                />

                <Clerk.Field
                  name="code"
                  className="my-8 flex w-80 flex-col px-4"
                >
                  <Clerk.Label className="text-xs text-muted-foreground">
                    Email code
                  </Clerk.Label>
                  <Clerk.Input />
                  <Clerk.FieldError className="field-error" />
                </Clerk.Field>

                <SignIn.Action submit asChild>
                  <Button size="full">Continue</Button>
                </SignIn.Action>
              </SignIn.Strategy>
            </SignIn.Step>

            {/* Choose Strategy Step */}
            <SignIn.Step name="choose-strategy">
              <Card className="mt-4 w-full rounded-md border-none bg-transparent sm:w-96">
                <CardHeader>
                  <HeadingSection
                    showBorders={true}
                    title="Use another method"
                    className="pb-0"
                    description="You can use the email code or password to sign in"
                  />
                </CardHeader>
                <CardContent className="my-6 grid gap-y-4">
                  <SignIn.SupportedStrategy name="email_code" asChild>
                    <Button type="button" disabled={isGlobalLoading}>
                      Send me email code
                    </Button>
                  </SignIn.SupportedStrategy>
                  <SignIn.SupportedStrategy name="password" asChild>
                    <Button type="button" disabled={isGlobalLoading}>
                      Use my Password
                    </Button>
                  </SignIn.SupportedStrategy>
                </CardContent>
                <CardFooter>
                  <div className="grid w-full">
                    <SignIn.Action navigate="previous" asChild>
                      <Button disabled={isGlobalLoading} variant="link">
                        <Clerk.Loading>
                          {(isLoading) => (isLoading ? "Loading" : "Go back")}
                        </Clerk.Loading>
                      </Button>
                    </SignIn.Action>
                  </div>
                </CardFooter>
              </Card>
            </SignIn.Step>

            {/* Forgot Password Step */}
            <SignIn.Step name="forgot-password" className="w-80">
              <HeadingSection
                showBorders={true}
                title="Forgot your password?"
                className="pb-0"
              />

              <SignIn.SupportedStrategy
                name="reset_password_email_code"
                asChild
              >
                <Button size="full" className="my-4">
                  Reset password
                </Button>
              </SignIn.SupportedStrategy>

              <SignIn.Action
                navigate="previous"
                className="mx-auto block text-center text-xs text-muted-foreground hover:underline"
              >
                Go back
              </SignIn.Action>
            </SignIn.Step>

            {/* Reset Password Step */}
            <SignIn.Step name="reset-password" className="w-80">
              <HeadingSection
                showBorders={true}
                title="Reset your password"
                className="mb-10 pb-0"
              />
              <Clerk.Field name="password" className="mb-4 flex flex-col px-4">
                <Clerk.Label className="mb-1 text-xs text-muted-foreground">
                  New password
                </Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError className="field-error" />
              </Clerk.Field>

              <Clerk.Field
                name="confirmPassword"
                className="mb-4 flex flex-col px-4"
              >
                <Clerk.Label className="mb-1 text-xs text-muted-foreground">
                  Confirm password
                </Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError className="field-error" />
              </Clerk.Field>

              <div className="mt-8 px-4">
                <SignIn.Action submit asChild>
                  <Button className="w-full">Reset password</Button>
                </SignIn.Action>
              </div>
            </SignIn.Step>
          </>
        )}
      </Clerk.Loading>
    </SignIn.Root>
  );
}
