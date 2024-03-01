import React from "react";
import { Country } from "react-phone-number-input";
import { SignUpForm } from "./Form";
import { Brand } from "@/app/[lang]/ui/common";
import { BackButton } from "../../../ui/common/Btns";
import { headers } from "next/headers";

export default function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const headersList = headers();
  const locales = headersList.get("Accept-Language");
  const locale = locales?.split(",")[0].split("-")[1];

  return (
    <main className="w-full min-h-dvh flex items-items justify-center">
      <section className="h-inherit w-full flex items-center justify-center relative">
        <div className="flex w-full h-full p-2 md:w-4/5 md:h-3/5 lg:w-3/5 lg:h-4/5 relative z-[2] md:bg-white rounded-md gap-4">
          <article className="h-full flex-1 hidden md:block bg-purple-300 relative rounded-md overflow-hidden">
            <BackButton className="absolute z-[5]" />
            Content Here
            <div className="bg-[url('/assets/home/billboard/hqnrd-hallway.jpg')] bg-no-repeat bg-center bg-cover absolute top-0 left-0 right-0 bottom-0" />
          </article>
          <article className="h-full grid grid-cols-1 grid-rows-[auto_1fr] flex-1 rounded-md p-4 bg-white/90 border">
            <div>
              <Brand />
            </div>
            <div className="place-self-center w-3/5">
              <h1 className="font-bold text-center my-5">
                Create your Account
              </h1>
              <p>Book your Next Stay</p>
              <SignUpForm lang={lang} locale={locale} />
            </div>
          </article>
        </div>
        <div className="bg-black/30 absolute top-0 left-0 right-0 bottom-0 rounded-md backdrop-filter backdrop-blur-xl z-[1]" />
        <div className="bg-[url('/assets/home/billboard/hqnrd-hallway.jpg')] bg-no-repeat bg-center bg-cover absolute top-0 left-0 right-0 bottom-0" />
      </section>
    </main>
  );
}
