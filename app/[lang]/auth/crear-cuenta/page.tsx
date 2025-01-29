import { Content, Section } from "@/components/layout";
import React from "react";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brand } from "@/components/features";
import { Locale } from "@/i18n-config";
import { ModeToggle } from "@/components/features/site/ModeToggle";
import { HeadingSection } from "@/components/features/site/Headings";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return (
    <Section className="flex min-h-screen w-full items-center justify-center border border-red-500 p-2">
      <Content className="grid h-full max-w-[90rem] grid-cols-1 gap-4 bg-muted/5 p-4 md:grid-cols-[1fr_0.7fr]">
        <article className="hidden aspect-[1/1] flex-1 border border-blue-500 md:block">
          Left
        </article>
        <article className="flex-1 md:p-8 md:py-2">
          <div className="flex items-center justify-between gap-4 py-10">
            <Brand lang={lang} />
            <ModeToggle />
          </div>
          <HeadingSection
            showBorders
            title="Account Registration"
            description="Create and manage your own reservations"
          />
          <Form action="#">
            <div className="flex items-center justify-center gap-4">
              <Label className="mb-2 flex-1" htmlFor="name">
                <p className="pb-2 text-xs text-muted-foreground">Nombre</p>
                <Input type="name" name="name" id="name" />
              </Label>
              <Label className="mb-2 flex-1" htmlFor="lasName">
                <p className="pb-2 text-xs text-muted-foreground">Apellido</p>
                <Input type="name" name="lasName" id="lasName" />
              </Label>
            </div>
            <Label className="flex-1" htmlFor="email">
              <p className="pb-2 text-xs text-muted-foreground">
                Date of Birth
              </p>
              <Input
                type="date"
                name="dob"
                id="dob"
                className="text-[0.7rem]"
              />
            </Label>
            <Label className="flex-1" htmlFor="email">
              <p className="pb-2 text-xs text-muted-foreground">Email</p>
              <Input type="email" name="email" id="email" />
            </Label>
            <Button size="full" className="my-8 mb-2">
              Submit
            </Button>
            <p className="py-4 text-center text-xs text-muted-foreground">
              Already registered?
              <Link className="ml-2 font-bold underline" href="#">
                Sign In
              </Link>
            </p>
          </Form>
        </article>
      </Content>
    </Section>
  );
}
