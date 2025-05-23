"use client";
import { Field } from "@/components/features/site/Forms/Field";
import { HeadingSection } from "@/components/features/site/Headings";
import { FormLabel } from "@/components/features/site/Label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { Label } from "@/components/ui/label";
import { PhoneInputField } from "@/components/ui/PhoneInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale } from "@/i18n-config";
import { CountryCode } from "libphonenumber-js";
import Form from "next/form";
import { useState } from "react";
import { UploadAvatar } from "../../Cropper/UploadAvatar";
import { UploadIDCard } from "../../Cropper/UploadIDCard";
import { api } from "@/convex/_generated/api";
import { Preloaded } from "convex/react";
import { CountryDropdown } from "@/components/ui/countries-select";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Profile({
  defaultCountry,
  lang,
  preloaded,
}: {
  defaultCountry: string | undefined;
  lang: Locale;
  preloaded: Preloaded<typeof api.users.getUser>;
}) {
  const [avatarBlob, setAvatarBlob] = useState<Blob | null>(null);
  const [idCardBlob, setIdCardBlob] = useState<Blob | null>(null);

  console.log(preloaded);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[4] flex items-center justify-center bg-black/85 p-2 backdrop-blur-lg lg:p-8">
      <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] rounded-md border border-background bg-background p-1 shadow-lg shadow-black/50 lg:aspect-square lg:h-auto lg:w-[90vw] lg:max-w-[60rem]">
        <header className="flex flex-col items-center justify-between p-2 lg:flex-row lg:p-4">
          <div>
            <HeadingSection
              title="Personal Information"
              description="Complete to finish registration"
              className="py-2 lg:hidden"
            />
            <h3 className="text-md hidden font-bold uppercase leading-6 lg:block lg:text-xl">
              Personal Information
            </h3>
            <p className="hidden text-xs text-muted-foreground lg:block lg:text-sm">
              Complete to finish registration
            </p>
          </div>
          <Button className="w-full lg:w-36">Save</Button>
        </header>
        <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] overflow-y-scroll rounded-md rounded-t-lg bg-secondary/50 p-1 lg:grid-cols-[1fr_2fr] lg:grid-rows-1 lg:overflow-auto lg:py-8 lg:pr-6">
          {/* Avatar Upload Section */}
          <div className="h-full py-2">
            <div className="relative mx-auto my-4 h-auto w-20">
              <Avatar className="h-16 w-16">
                {avatarBlob ? (
                  <AvatarImage
                    src={URL.createObjectURL(avatarBlob)}
                    alt="Avatar"
                  />
                ) : (
                  <AvatarImage
                    src={"https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                )}
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="absolute -bottom-1 right-1 z-[3]">
                <UploadAvatar onChange={setAvatarBlob} />
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div>
            <ScrollArea className="h-full w-full rounded-md border bg-secondary/50 p-2 lg:px-4">
              <Form action="" className="flex flex-col gap-y-7 p-2 lg:gap-y-6">
                <div className="flex w-full justify-stretch gap-2">
                  <Field label="Name" name="namme" />
                  <Field label="Last Name" name="lastName" />
                </div>
                <Field
                  label="Gender"
                  name="gender"
                  items={["Male", "Female", "Other"]}
                  type="radio"
                />
                <DateAndTimePicker
                  lang={lang}
                  granularity="day"
                  icon=""
                  label="Date of Birth"
                  displayFormat={{ hour12: "MM/dd/yyyy" }}
                  inputName="dob"
                />
                <Label className="mb-1 w-full" htmlFor="email">
                  <FormLabel label="Phone Number" />
                  <PhoneInputField
                    defaultCountry={defaultCountry as CountryCode}
                  />
                  <div className="mt-6">
                    <CountryDropdown />
                  </div>
                  <div className="flex w-full items-center justify-end">
                    <span className="mt-4 text-xs underline">
                      Verify my phone number
                    </span>
                  </div>
                </Label>

                {/* ID Card Upload Section */}
                <div className="max-w-72">
                  <FormLabel label=" Required for quality assurance" />
                  <UploadIDCard onChange={setIdCardBlob} />
                </div>

                {/* Emergency Contact */}
                <p className="text-sm text-muted-foreground">
                  Emergency Contact <span>(Optional)</span>
                </p>
                <div className="flex gap-2">
                  <Field label="Name" name="namme" />
                  <Field label="Last Name" name="lastName" />
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Relation</SelectLabel>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="sibling">Sibling</SelectItem>
                      <SelectItem value="friend">Friend</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Label className="mb-1 w-full" htmlFor="email">
                  <FormLabel label="Phone Number" />
                  <PhoneInputField
                    defaultCountry={defaultCountry as CountryCode}
                  />
                </Label>
              </Form>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
