import Image from "next/image";

export function CommonAreas() {
  return (
    <ul className="grid grid-cols-2 grid-rows-3 gap-3 h-[32rem] mb-8 md:grid-cols-3">
      <li className="rounded-md flex items-center justify-center overflow-hidden row-span-2 md:row-span-3 relative">
        <Image
          src="/assets/home/highlights/around/front-building-top-down-hqnrd.webp"
          alt="Front of building"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </li>
      <li className="rounded-md flex items-center justify-center overflow-hidden md:row-span-2 relative">
        <Image
          src="/assets/home/highlights/around/hallway-hqnrd.webp"
          alt="Front of building"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </li>
      <li className="rounded-md flex items-center justify-center overflow-hidden relative">
        <Image
          src="/assets/home/highlights/around/sitting-area-hallway-hqnrd.webp"
          alt="Front of building"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </li>
      <li className="rounded-md flex items-center justify-center overflow-hidden md:row-span-2 relative">
        <Image
          src="/assets/home/highlights/around/front-building-art-hqnrd.webp"
          alt="Front of building"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </li>
      <li className="rounded-md flex items-center justify-center overflow-hidden relative">
        <Image
          src="/assets/home/highlights/around/stairs-up-hqnrd.webp"
          alt="Front of building"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </li>
    </ul>
  );
}
