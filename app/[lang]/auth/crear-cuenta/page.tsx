import { Content, Section } from "@/components/layout";
import React from "react";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <Section className="grid min-h-screen grid-cols-1 grid-rows-1 place-items-center p-2">
      <Content className="grid aspect-square h-4/6 grid-cols-[1.52fr_1fr] grid-rows-1 gap-4 border border-red-500 bg-muted/5 p-4">
        <div className="h-full w-full border border-green-500">Left</div>
        <div className="h-full w-full border border-purple-500">
          <Form action="#">
            <div className="flex items-center justify-center gap-4">
              <Label className="flex-1" htmlFor="name">
                <p className="pb-2 text-xs text-muted-foreground">Nombre</p>
                <Input type="name" name="name" id="name" />
              </Label>
              <Label className="flex-1" htmlFor="lasName">
                <p className="pb-2 text-xs text-muted-foreground">Apellido</p>
                <Input type="name" name="lasName" id="lasName" />
              </Label>
            </div>
            <Label className="flex-1" htmlFor="email">
              <p className="pb-2 text-xs text-muted-foreground">Email</p>
              <Input type="email" name="email" id="email" />
            </Label>
          </Form>
        </div>
      </Content>
    </Section>
  );
}
