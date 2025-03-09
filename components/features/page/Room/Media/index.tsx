import { HeroVideo } from "@/components/ui/VideoPlayer";

export function Media() {
  return (
    <div className="w-full pb-10">
      <div className="grid grid-cols-1 grid-rows-2 gap-2 lg:grid-cols-[1.2fr_2fr] lg:grid-rows-[18rem]">
        <div className="aspect-square w-full">
          <h3 className="mb-2 text-xl font-bold">Layout</h3>
          <div className="h-full w-full overflow-hidden rounded-md border bg-pink-500" />
        </div>
        <div className="h-full w-full max-lg:mt-10">
          <h3 className="mb-2 text-xl font-bold">Walkthrough</h3>
          <div className="h-full w-full overflow-hidden rounded-md">
            <HeroVideo />
          </div>
        </div>
      </div>
    </div>
  );
}
