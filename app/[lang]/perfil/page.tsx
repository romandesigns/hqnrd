import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <main className="grid min-h-dvh w-full items-center">
      <div className="flex h-full min-h-dvh w-full items-center justify-center">
        <Button asChild>
          <SignOutButton>Sign out</SignOutButton>
        </Button>
      </div>
    </main>
  );
}
