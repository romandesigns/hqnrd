import { twMerge } from "tailwind-merge";
import { SectionPropTypes } from "../../../../../../types";

export const Section = ({ children, className = "" }: SectionPropTypes) => {
  return (
    <section
      className={twMerge(
        `my-2 p-2 py-24 snap-y flex items-center justify-center ${className}`
      )}
    >
      <div className="w-full mx-auto max-w-7xl text-center flex flex-items justify-center items-center flex-col h-full">
        {children}
      </div>
    </section>
  );
};
