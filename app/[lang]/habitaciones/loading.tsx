"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Content, Section } from "@/components/layout/container";

function HeroGallerySkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <article className="relative flex h-fit w-full items-center justify-center p-2">
        {/* Top left image */}
        <Skeleton className="absolute -top-10 left-14 aspect-square h-auto w-[25%] rounded-md border-8 border-muted" />
        {/* Main image */}
        <Skeleton className="relative z-[1] aspect-square w-4/6 rounded-md" />
        {/* Bottom Right image */}
        <Skeleton className="absolute -bottom-6 right-3 z-[0] aspect-square h-auto w-[35%] rounded-md" />
      </article>
    </div>
  );
}

export default function LoadingRoomPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <header className="hqnrd-frosty-bg lg:static">
        <Content className="py-2 md:py-20">
          <section className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Left Section - Title, Description, Dropdown, and Contact */}
            <article className="relative z-[2] flex h-full w-full flex-col items-start justify-center">
              <div className="flex w-full items-center justify-between px-2">
                <Skeleton className="h-10 w-10 rounded-md" />
              </div>
              <div className="flex h-full w-full flex-col items-start justify-center p-2 md:py-8 lg:pb-0">
                <Skeleton className="h-8 w-3/4 rounded-md md:h-12" />
                <Skeleton className="mt-2 hidden h-4 w-1/2 rounded-md md:block" />
                <div className="mx-auto flex w-full max-w-[370px] items-center justify-center pt-4 md:ml-0">
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <Content className="w-full md:hidden">
                  <Skeleton className="mt-4 h-10 w-full rounded-md" />
                </Content>
              </div>
              <div className="hidden w-auto px-3 md:block">
                <Skeleton className="h-10 w-40 rounded-md" />
              </div>
            </article>

            {/* Right Section - Hero Gallery Placeholder */}
            <article className="hidden h-full w-full flex-col items-center justify-center md:block">
              <HeroGallerySkeleton />
            </article>
          </section>
        </Content>
      </header>

      {/* Room Cards List */}
      <Section>
        <Content className="grid grid-cols-1 gap-10 p-2 md:grid-cols-[2fr_1fr]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <Skeleton key={i} className="h-[260px] w-full rounded-lg" />
            ))}
          </div>

          {/* Sidebar Booking Form Placeholder */}
          <aside className="hidden pt-4 md:block">
            <div className="md:sticky md:top-[15rem]">
              <Skeleton className="mb-4 h-10 w-40 rounded-md" />
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </aside>
        </Content>
      </Section>
    </div>
  );
}
