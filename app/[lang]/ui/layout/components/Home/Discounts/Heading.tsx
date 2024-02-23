import { twMerge } from "tailwind-merge";

export function Heading({
  className = "",
  highlightColor = "",
  highlightText = "Insert Highlight",
  headingText = "Insert Heading",
}: {
  className?: string;
  highlightColor?: string;
  highlightText?: string;
  headingText?: string;
}) {
  return (
    <div className={twMerge(`my-6 md:mb-0 md:col-span-3 ${className}`)}>
      <p
        className={twMerge(
          `mt-4 inline-flex items-center text-xs justify-center text-black/50 font-bold bg-white/50 p-1 rounded-full px-2 ${highlightColor}`
        )}
      >
        {highlightText}
      </p>
      <h3 className="font-black my-2 text-neutral-500 underline text-xl">
        {headingText}
      </h3>
    </div>
  );
}
