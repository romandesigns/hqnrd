import { ClientLayout } from "@/components/layout/container";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import React from "react";

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;
  const trans = await getDictionary(lang);

  return (
    <ClientLayout lang={lang}>
      <div>
        <p>Habitaciones</p>
      </div>
    </ClientLayout>
  );
}
