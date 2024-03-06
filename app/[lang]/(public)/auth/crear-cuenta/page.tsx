import { Brand } from "@/app/[lang]/ui/common";
import { GoHomeFill } from "@/app/[lang]/ui/icons";
import { headers } from "next/headers";
import Link from "next/link";
import { Country } from "react-phone-number-input";
import { BackButton } from "../../../ui/common/Btns";
import { SignUpForm } from "./Form";

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
      <section className="h-inherit w-full flex items-center justify-center relative p-2 px-4">
        <div className="flex w-full p-2 sm:w-4/5 md:w-3/5 lg:w-4/5  lg:max-w-5xl relative z-[2] bg-white rounded-md gap-4">
          <article className="h-full w-full flex-1 hidden lg:block relative rounded-md overflow-hidden bg-red-500">
            <BackButton className="absolute z-[5]" />
            Content Here
            <div className="bg-[url('/assets/home/billboard/hqnrd-hallway.jpg')] h-full bg-no-repeat bg-center bg-cover absolute top-0 left-0 right-0 bottom-0" />
          </article>
          <article className="h-full grid grid-cols-1 grid-rows-[auto_1fr] flex-1 rounded-md p-4 bg-white border">
            <div className="flex items-center justify-between">
              <Brand hideTypo />
              <Link href="/">
                <GoHomeFill size={20} />
              </Link>
            </div>
            <div className="place-self-center w-11/12 sm:w-8/12 md:w-10/12">
              <div className="my-8 flex items-center justify-center flex-col">
                <h1 className="font-bold text-center text-lg">
                  Create your Account
                </h1>
                <p>Book your Next Stay</p>
              </div>
              <SignUpForm lang={lang} locale={locale as Country} />
              <p className="text-xs flex justify-center items-center my-4">
                Already have an account ?{" "}
                <Link
                  href="/auth/iniciar-session"
                  className="font-semibold text-primary-600 mx-2 underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </article>
        </div>
        <div className="bg-black/30 absolute top-0 left-0 right-0 bottom-0 rounded-md backdrop-filter backdrop-blur-xl z-[1]" />
        <div className="bg-[url('/assets/home/billboard/hqnrd-hallway.jpg')] bg-no-repeat bg-center bg-cover absolute top-0 left-0 right-0 bottom-0" />
      </section>
    </main>
  );
}
