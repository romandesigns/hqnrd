import { HeroVideo } from "@/components/ui/VideoPlayer";

export function Media() {
  return (
    <div className="w-full pb-10">
      <div className="grid grid-cols-[1.2fr_2fr] grid-rows-[18rem] gap-2">
        <div className="w-full">
          <h3 className="font-bold text-xl mb-2">Layout</h3>
          <div className="h-full  w-full overflow-hidden rounded-md border bg-pink-500" />
        </div>
        <div className="h-full w-full max-lg:mt-10">
          <h3 className="font-bold text-xl mb-2">Walkthrough</h3>
          <div className="h-full w-full overflow-hidden rounded-md">
            <HeroVideo />
          </div>
        </div>
      </div>
    </div>
  );
}
