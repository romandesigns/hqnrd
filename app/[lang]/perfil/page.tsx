import { ClientLayout } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const user = await currentUser();
  if (!user) {
    redirect(`/${lang}/inicia-sesion`);
  }

  return (
    <ClientLayout lang={lang}>
      <main className="grid min-h-dvh w-full items-center">
        <div className="flex h-full min-h-dvh w-full items-center justify-center">
          <Button asChild>
            <SignOutButton>Sign out</SignOutButton>
          </Button>
        </div>
      </main>
    </ClientLayout>
  );
}
