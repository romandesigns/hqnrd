import { twMerge } from "tailwind-merge";
import { SectionTypes } from "../../../../../../types";

export const Section = ({ children, className = "" }: SectionTypes) => {
  return (
    <section
      className={twMerge(
        `mt-1 px-2 py-24 snap-y flex items-center justify-center ${className}`
      )}
    >
      <div className="w-full text-center flex flex-items justify-center items-center flex-col h-full">
        {children}
      </div>
    </section>
  );
};
