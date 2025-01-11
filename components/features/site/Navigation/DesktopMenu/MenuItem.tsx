import { twMerge } from "tailwind-merge";

export function MenuItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={twMerge(`hidden md:block ${className}`)}>{children}</li>
  );
}
