import { Content, Section } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { ClientLayout } from "@/components/layout/container";
import { headers } from "next/headers";
import { Locale } from "@/i18n-config";
import { SectionHeading } from "@/components/Skeletons/SectionHeading";
import { CardTestimonialsSkeleton } from "@/components/Skeletons/CardTestimonialsSkeleton";
import { CardDiscountSkeleton } from "@/components/Skeletons/CardDiscountSkeleton";

export default async function LoadingHomePage() {
  const h = await headers();
  const lang = h.get("accept-language") || "en";

  return (
    <ClientLayout lang={lang as Locale}>
      <header className="h-full md:my-10 md:mb-0 md:h-[60vh]">
        <Content className="relative h-full flex-col gap-4 overflow-hidden rounded-md p-4 pb-10 md:flex-row">
          <section className="flex items-center justify-center py-10 md:flex-1">
            <article className="relative flex h-auto w-full flex-col items-center justify-center gap-4 md:justify-start md:gap-6">
              <Skeleton className="mr-auto h-4 w-16" />
              <small className="flex w-full items-center justify-center gap-2 text-muted-foreground md:items-center md:justify-start">
                <Skeleton className="mr-auto h-4 w-32" />
              </small>

              <Skeleton className="mr-auto h-14 w-3/4" />
              <Skeleton className="mr-auto h-14 w-3/4" />
              <Skeleton className="mx-auto h-4 w-1/2 md:w-full" />
              <Skeleton className="mx-auto h-4 w-1/2 md:w-full" />

              <div className="mb-4 flex w-full items-center justify-center gap-2 md:justify-start">
                <Skeleton className="h-10 w-40" />
                <Skeleton className="h-10 w-40" />
              </div>

              <div className="flex w-full items-start justify-start gap-2">
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
              </div>
            </article>
          </section>
          <section className="flex items-center justify-center pb-8 md:flex-1">
            <article className="relative flex h-auto w-full items-center justify-center p-2">
              {/* Top left image */}
              <Skeleton className="absolute -top-10 left-2 aspect-square h-auto w-[25%] rounded-md border-8 border-muted" />
              {/* Top Right image */}
              <Skeleton className="glass absolute -top-10 right-2 z-[2] aspect-square h-auto w-[25%] rounded-md shadow-lg">
                <Skeleton className="relative aspect-square h-full w-full overflow-hidden rounded-md" />
              </Skeleton>
              {/* Main image */}
              <Skeleton className="glass relative z-[1] aspect-square w-5/6 overflow-hidden rounded-md">
                <Skeleton className="relative aspect-square h-full w-full overflow-hidden rounded-md" />
              </Skeleton>
              {/* Bottom left image */}
              <Skeleton className="glass absolute bottom-10 left-2 z-[2] aspect-square h-auto w-[30%] shadow-lg">
                <Skeleton className="relative aspect-square h-full w-full overflow-hidden rounded-md" />
              </Skeleton>
              {/* Bottom Right image */}
              <Skeleton className="glass absolute -bottom-6 right-3 z-[0] aspect-square h-auto w-[35%] rounded-md">
                <Skeleton className="relative aspect-square h-full w-full overflow-hidden rounded-md" />
              </Skeleton>
            </article>
          </section>
        </Content>
      </header>
      <main className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-start gap-20 p-2 !pt-0 pb-20 font-[family-name:var(--font-family)] md:gap-40 md:p-5 lg:p-20">
        <Section>
          <Content className="max-w-2xl pt-6">
            <Skeleton className="mx-auto mb-2 h-12 w-2/4" />
            <Skeleton className="h-28 w-full rounded-lg border p-1 max-[754px]:flex max-[754px]:flex-col">
              <Skeleton className="relative aspect-square h-full w-full overflow-hidden rounded-md" />
            </Skeleton>
          </Content>
          <Content className="">
            <SectionHeading />
            <div className="grid grid-cols-1 gap-10 p-2 py-28 md:grid-cols-[1fr_1fr_1fr]">
              <CardTestimonialsSkeleton />
              <CardTestimonialsSkeleton />
              <CardTestimonialsSkeleton />
            </div>
          </Content>
        </Section>
        <Section>
          <Content className="gap-4 md:p-12 md:py-2">
            <SectionHeading />
            <Content className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
              <CardDiscountSkeleton />
              <CardDiscountSkeleton />
            </Content>
          </Content>
        </Section>
        <div />
      </main>
    </ClientLayout>
  );
}
