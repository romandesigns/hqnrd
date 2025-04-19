"use client";

import { Content, Section } from "@/components/layout/container";
import { SignInForm } from "./SignInForm";
import { BrandedCard } from "@/components/ui/BrandedCard";
import { HeadingSection } from "@/components/features/site/Headings";

export default function Page() {
  return (
    <Section className="grid min-h-dvh w-full grow grid-cols-1 grid-rows-1 items-center px-4 sm:justify-center">
      <Content className="grid h-4/6 grid-rows-1 gap-4 sm:gap-4 lg:aspect-video lg:h-auto lg:grid-cols-[1fr_auto]">
        <article className="hidden rounded-md bg-red-500 lg:block">
          Gallery Herre
        </article>
        <article className="rounded-md border p-2">
          <BrandedCard
            showHeading={false}
            lang={"en"}
            className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-y-4 p-2"
          >
            <div className="flex h-full items-center justify-center rounded-md bg-secondary/20 p-2">
              <SignInForm />
            </div>
          </BrandedCard>
        </article>
      </Content>
    </Section>
  );
}
