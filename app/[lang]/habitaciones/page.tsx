import { HeadingSection } from "@/components/features/site/Headings";
import { CardRoom } from "@/components/features/site/page/home/Trending/CardRoom";
import { Content, Section } from "@/components/layout";
import { Locale } from "@/i18n-config";

import React from "react";

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;

  return (
    <>
      <Section>
        <Content className="flex-col justify-center">
          <HeadingSection
            showBorders
            title="Showing All Rooms"
            description="All rooms are held to the same high standards"
          />
          <div className="flex w-full items-center justify-end px-2 py-4">
            <p className="text-sm text-muted-foreground">
              <span>Total Rooms Found:</span>
              <span className="ml-3 rounded-full bg-muted-foreground px-4 text-primary-foreground">
                16
              </span>
            </p>
          </div>
        </Content>
      </Section>
      <Section>
        <Content className="grid-auto-rows grid grid-cols-1 gap-1 py-14 md:grid-cols-2 lg:grid-cols-3">
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
        </Content>
      </Section>
    </>
  );
}
