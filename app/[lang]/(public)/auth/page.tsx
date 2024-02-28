import React from "react";
import { login, signup } from "./actions";
import { Form, Button, Input } from "rsuite";

export default function Page() {
  return (
    <main className="h-[40rem] w-full flex items-center justify-center">
      <form className="flex flex-col justify-center items-center">
        <div className="space-y-4 w-full">
          <Input name="email" type="email" className="w-full" />
          <Input name="password" type="password" />
        </div>
        <div className="flex items-center justify-center my-10 space-x-4">
          <button className="border rounded-md py-2 px-10" formAction={login}>
            Log in
          </button>
          <button
            className="border rounded-md py-2 px-10 !bg-neutral-500 !text-white/80"
            formAction={signup}
          >
            Sign up
          </button>
        </div>
      </form>
    </main>
  );
}
