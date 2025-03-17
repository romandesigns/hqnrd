"use client";

import { ClientLayout, Content, Section } from "@/components/layout/container";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RoomDetailsPageNotFound() {
  const params = useParams<{ lang: string; roomId: string }>();
  const { lang, roomId } = params;

  return (
    <ClientLayout lang="en">
      <Section>
        <Content className="fle relative min-h-[50rem] flex-col items-center justify-center">
          <div className="-z-1 top-38 absolute right-48 h-[35rem] w-[35rem] bg-[url('/assets/images/general/not-found.png')] bg-cover bg-center bg-no-repeat opacity-[0.025]" />
          <h3 className="mb-2 text-4xl font-semibold uppercase">
            Room Not Found
          </h3>
          <p className="max-w-lg text-center text-sm text-muted-foreground">
            The room you look for does not exist, click{" "}
            <small className="font-bold">ver habitaciones</small> to explore
            more options or{" "}
            <Link
              href={`/${lang}/contactanos`}
              className="text-primary underline"
            >
              cantact us
            </Link>{" "}
            for more information.
          </p>
          <br />
          <br />
          <Button asChild>
            <Link href={`/${lang}/habitaciones`}>Ver Habitaciones</Link>
          </Button>
        </Content>
      </Section>
    </ClientLayout>
  );
}
