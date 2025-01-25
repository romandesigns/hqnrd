import ImageSlider from "@/components/features/site/ImageSlider";
import Particles from "@/components/ui/particles";
import { JSX } from "react";

/**
 * The `HeroGallery` component renders a gallery of images in a hero section.
 * It includes five images positioned at various locations within the component,
 * and a particle effect overlay.
 *
 * @returns {JSX.Element} The rendered HeroGallery component.
 *
 * @component
 * @example
 * return (
 *   <HeroGallery />
 * )
 */

export function HeroGallery({
  billboardsImages,
}: {
  billboardsImages: { rooms: string[]; rooftop: string[]; hallways: string[] };
}): JSX.Element {
  return (
    <>
      <article className="relative flex h-auto w-full items-center justify-center p-2">
        {/* Top left image */}
        <figure className="absolute -top-10 left-2 aspect-square h-auto w-[25%] rounded-md border-8 border-muted" />
        {/* Top Right image */}
        <figure className="glass absolute -top-10 right-2 z-[2] aspect-square h-auto w-[25%] rounded-md">
          <div className="relative aspect-square h-full w-full overflow-hidden rounded-md">
            <ImageSlider itemsArray={billboardsImages.rooms} />
          </div>
        </figure>
        {/* Main image */}
        <figure className="glass relative z-[1] aspect-square w-5/6 overflow-hidden rounded-md">
          <div className="relative aspect-square h-full w-full overflow-hidden rounded-md">
            <ImageSlider itemsArray={billboardsImages.rooms} />
          </div>
        </figure>
        {/* Bottom left image */}
        <figure className="glass absolute bottom-10 left-2 z-[2] aspect-square h-auto w-[30%]">
          <div className="relative aspect-square h-full w-full overflow-hidden rounded-md">
            <ImageSlider
              itemsArray={billboardsImages.rooms}
              direction="horizontal"
              delay={4500}
            />
          </div>
        </figure>
        {/* Bottom Right image */}
        <figure className="glass absolute -bottom-6 right-3 z-[0] aspect-square h-auto w-[35%] rounded-md">
          <div className="relative aspect-square h-full w-full overflow-hidden rounded-md">
            <ImageSlider
              itemsArray={billboardsImages.rooms}
              showBlurredOverlay
              delay={3500}
            />
          </div>
        </figure>
        <Particles
          className="absolute inset-0 z-0"
          quantity={200}
          ease={80}
          refresh
          color="rgba(255, 255, 255, 0.5)"
        />
      </article>
    </>
  );
}
