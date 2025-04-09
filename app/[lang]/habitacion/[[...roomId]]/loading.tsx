import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ClientLayout, Content, Section } from "@/components/layout/container";
import { featuresList } from "@/components/features/page/Room/Features/items";
import { amenities } from "@/components/features/page/Room/Amenities/ameneties";
import { headers } from "next/headers";
import { Locale } from "@/i18n-config";
/* Features Skeleton */
function SkeletonFeatures() {
  return (
    <div className="w-full">
      <Skeleton className="mb-2 h-6 w-32 rounded-md" />
      <ul className="flex flex-wrap items-center justify-start gap-2 lg:grid lg:grid-cols-4 lg:grid-rows-2">
        {featuresList.map((feature) => (
          <Skeleton key={feature.id} className="flex-1 rounded-md border p-0.5">
            <div className="flex flex-1 items-center gap-2 rounded-md bg-muted/20 p-1">
              <Skeleton className="flex h-8 w-8 rounded-md" />
            </div>
          </Skeleton>
        ))}
      </ul>
    </div>
  );
}

/* Description Skeleton */
function SkeletonDescription() {
  return (
    <div className="w-full">
      <Skeleton className="mb-2 h-6 w-32 rounded-md" />
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="mb-2 h-5 w-full rounded-md" />
      ))}
      <Skeleton className="h-5 w-3/4 rounded-md" />
    </div>
  );
}

/* Amenities Skeleton */
function SkeletonAmenities() {
  return (
    <div className="w-full rounded-md bg-secondary/20 p-3">
      <Skeleton className="mb-2 h-6 w-32 rounded-md" />
      <ul className="my-3 grid w-full grid-cols-2 gap-6 py-4 sm:grid-cols-5">
        {amenities.map((amenity, idx) => (
          <Skeleton key={idx} className="flex items-center justify-start p-1">
            <Skeleton className="order-2" />
            <Skeleton className="order-1 mr-1 h-5 w-5" />
          </Skeleton>
        ))}
      </ul>
    </div>
  );
}

/* Media Skeleton */
function SkeletonMedia() {
  return (
    <div className="w-full pb-10">
      <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-[1.2fr_2fr] lg:grid-rows-[auto]">
        {/* Layout Section Skeleton */}
        <div className="flex h-full w-full flex-col">
          <Skeleton className="mb-2 h-6 w-32 rounded-md" />
          <div className="relative aspect-[16/9] w-full flex-grow lg:aspect-auto">
            <Skeleton className="h-full w-full rounded-md border" />
          </div>
        </div>

        {/* Walkthrough Section Skeleton */}
        <div className="flex h-full w-full flex-col">
          <Skeleton className="mb-2 h-6 w-32 rounded-md" />
          <div className="relative aspect-[16/9] w-full flex-grow lg:aspect-auto">
            <Skeleton className="h-full w-full overflow-hidden rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Booking Form Skeleton */
function SkeletonBooking() {
  return (
    <Skeleton className="space-y-6 rounded-md bg-secondary/50 p-2 py-8">
      <div className="flex w-full items-center justify-center gap-2">
        <Skeleton className="block h-10 w-full rounded-md" />
        <Skeleton className="block h-10 w-full rounded-md" />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <Skeleton className="block h-10 w-full rounded-md" />
        <Skeleton className="block h-10 w-full rounded-md" />
      </div>
      <Skeleton className="h-24 w-full rounded-md" />
      <Skeleton className="h-12 w-full rounded-md" />
    </Skeleton>
  );
}

export default async function LoadingRoom() {
  const h = await headers();
  const lang = h.get("accept-language") || "en";

  return (
    <ClientLayout lang={lang as Locale}>
      {/* Header component */}
      <header className="hqnrd-frosty-bg">
        <Content className="p-6 px-2 lg:py-2">
          <div className="py-3">
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="mb-4 flex flex-col items-center justify-center gap-x-2 md:flex-1 md:items-start md:justify-start lg:mb-0">
              <Skeleton className="h-4 w-20 rounded-md" />
              <Skeleton className="mt-2 h-10 w-40 rounded-md md:w-64" />
            </div>
            <div className="md:max-w-auto flex w-full max-w-6xl items-center justify-center md:w-auto md:flex-col md:justify-between">
              <Skeleton className="h-10 w-full max-w-lg rounded-md md:hidden" />
              <Skeleton className="hidden h-10 w-40 rounded-md md:block" />
            </div>
          </div>
        </Content>
      </header>
      <Section>
        <Content>
          <div className="grid grid-cols-4 grid-rows-2 gap-1 p-2">
            <Skeleton className="col-span-2 row-span-2 aspect-square rounded-lg" />
            <Skeleton className="col-start-3 col-end-5 rounded-lg" />
            <Skeleton className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-lg" />
            <Skeleton className="col-start-4 col-end-5 rounded-lg" />
          </div>
        </Content>
      </Section>
      <Section>
        <Content className="grid grid-cols-1 gap-10 p-2 md:grid-cols-[2fr_1fr]">
          <article className="flex flex-col items-center justify-center gap-10 lg:gap-20">
            <div className="flex w-full items-center justify-start pt-3">
              <Skeleton className="h-10 w-10 rounded-md" />
            </div>
            <SkeletonFeatures />
            <SkeletonDescription />
            <SkeletonAmenities />
            <SkeletonMedia />
          </article>
          <aside className="hidden pt-4 md:block">
            <div className="md:sticky md:top-[15rem]">
              <Skeleton className="mb-4 block h-14 w-40 translate-x-4 translate-y-8 rounded-md border-4 border-background opacity-100" />
              <SkeletonBooking />
            </div>
          </aside>
        </Content>
      </Section>
    </ClientLayout>
  );
}
