import { Brand, FormLabel } from "@/components/features";
import { HeadingSection } from "@/components/features/site/Headings";
import { ModeToggle } from "@/components/features/site/ModeToggle";
import { GoHomeFill } from "@/components/icons";
import { Content, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Locale } from "@/i18n-config";
import Form from "next/form";
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
      <Content className="grid h-full grid-cols-1 gap-4 bg-muted/5 p-4 max-[769px]:max-w-[30rem] min-[769px]:grid-cols-[1fr_0.7fr] lg:max-w-[90rem]">
        <article className="hidden aspect-[1/1] flex-1 border border-blue-500 min-[769px]:block">
          Left
        </article>
        <article className="max-[769px]:h-full md:p-8 md:py-2">
          <div className="flex items-center justify-between gap-4 py-10">
            <Brand lang={lang} />
            <div className="flex items-center justify-center gap-4">
              <ModeToggle />
              <Button size="icon" variant="outline">
                <GoHomeFill />
              </Button>
            </div>
          </div>
          <HeadingSection
            showBorders
            title="Account Registration"
            description="Create and manage your own reservations"
          />
          <Form action="#" className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-4">
              <Label className="mb-2 flex-1" htmlFor="name">
                <FormLabel label="Nombre" />
                <Input type="name" name="name" id="name" />
              </Label>
              <Label className="mb-2 flex-1" htmlFor="lasName">
                <FormLabel label="Apellido" />
                <Input type="name" name="lasName" id="lasName" />
              </Label>
            </div>
            <Label className="flex-1" htmlFor="dob">
              <FormLabel label="Date of Birth" />
              <Input
                type="date"
                name="dob"
                id="dob"
                className="text-[0.7rem]"
              />
            </Label>
            <div>
              <FormLabel label="Sex" />
              <RadioGroup>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Other</Label>
                </div>
              </RadioGroup>
            </div>
            <Button size="full" className="my-2">
              Next
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
