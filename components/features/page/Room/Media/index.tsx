import { HeroVideo } from "@/components/ui/VideoPlayer";

export function Media() {
  return (
    <div className="w-full pb-10">
      <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-[1.2fr_2fr] lg:grid-rows-[auto]">
        {/* Layout Section */}
        <div className="flex w-full flex-col">
          <h3 className="mb-2 text-xl font-bold">Layout</h3>
          <div className="relative aspect-[16/9] w-full flex-grow rounded-md border bg-pink-500 lg:aspect-auto" />
        </div>

        {/* Walkthrough Section */}
        <div className="flex w-full flex-col">
          <h3 className="mb-2 text-xl font-bold">Walkthrough</h3>
          <div className="relative aspect-[16/9] w-full flex-grow overflow-hidden rounded-md lg:aspect-auto">
            <HeroVideo />
          </div>
        </div>
      </div>
    </div>
  );
}
