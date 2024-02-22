import { twMerge } from "tailwind-merge";

export function Heading({
  className = "",
  textColor = "",
}: {
  className?: string;
  textColor?: string;
}) {
  return (
    <div className={twMerge(`mb-20 md:mb-0 md:col-span-3 ${className}`)}>
      <p
        className={twMerge(
          `inline-flex items-center text-xs justify-center text-red-800 font-bold bg-white/50 p-1 rounded-full px-2 ${textColor}`
        )}
      >
        Popular Rooms!
      </p>
      <h3 className="font-black my-2 text-neutral-500 underline text-xl">
        Some of the most popular rooms
      </h3>
    </div>
  );
}
