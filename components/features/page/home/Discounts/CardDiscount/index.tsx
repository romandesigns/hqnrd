import Image from "next/image";

export function CardDiscount({
  highlight,
  percentage,
  bgImage,
}: {
  highlight: string;
  percentage: number;
  bgImage: string;
}) {
  return (
    <div className="glass h-full grid-cols-1 grid-rows-[auto_1fr_auto] rounded-lg">
      <div className="flex items-end">
        <div className="h-12 flex-1 rounded-tl-md bg-muted p-1" />
        <div className="relative overflow-hidden bg-transparent p-2 after:absolute after:content-['']">
          <div className="rounded-b-md p-2 shadow-[0_26px_0_10px_hsl(var(--muted))]">
            {highlight && (
              <h1 className="rounded-md bg-foreground p-2 px-6 font-extrabold uppercase text-primary-foreground">
                {highlight}
              </h1>
            )}
          </div>
        </div>
        <div className="flex h-12 flex-1 items-center justify-start rounded-tr-md bg-muted p-2 font-bold" />
      </div>
      <div className="aspect-square bg-muted">
        <div className="h-full p-2 lg:p-4">
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-md">
            <h3 className="relative z-[1] text-[10rem] font-black text-white lg:text-[14.5rem]">
              {percentage}%
            </h3>
            <div className="absolute inset-0 z-[1] bg-gradient-to-tl from-background/60 via-slate-200/20 to-foreground/50" />
            <Image
              src={bgImage}
              alt="random image"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
      <div className="rounded-b-md border-t bg-muted-foreground/10 p-4">
        <p className="text-center text-xs font-bold">
          {`Available when booking  ${percentage === 8 ? "15" : percentage} days stay or more`}
        </p>
      </div>
    </div>
  );
}
