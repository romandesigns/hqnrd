"use client";
import { Button, Form, Input } from "rsuite";
import { signInUser } from "./actions";

export function SignInForm({ lang }: { lang: string }) {
  return (
    <form className="space-y-3" action={signInUser}>
      <Input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="placeholder:text-xs"
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        required
        className="placeholder:text-xs"
      />
      <br className="my-8" />
      <Button
        appearance="primary"
        color="blue"
        active
        size="md"
        block
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
}
