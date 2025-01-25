import { Header } from "@/components/features/site/page/rooms";
import { ClientLayout } from "@/components/layout/container";
import { Locale } from "@/i18n-config";
import React from "react";

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;

  return (
    <ClientLayout lang={lang}>
      <>
        <Header lang={lang} />
        <p>Habitaciones</p>
      </>
    </ClientLayout>
  );
}
