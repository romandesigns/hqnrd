import { twMerge } from "tailwind-merge";

export function Heading({ className = "" }: { className?: string }) {
  return (
    <div className={twMerge(`mb-20 md:mb-0 md:col-span-3 ${className}`)}>
      <p className="inline-flex items-center text-xs justify-center text-tertiary-800 font-bold bg-white/50 p-1 rounded-full px-2">
        Available Discounts!
      </p>
      <h3 className="font-black my-2 text-neutral-500 underline text-xl">
        Stay Longer By Spending Less
      </h3>
    </div>
  );
}
