import { ReactNode } from "react";

export function ExternalLink({
                               href,
                               children,
                               className,
                             }: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
