import React from "react";
import { HeadingSection } from "@/components/features/site/Headings";
import { Brand } from "@/components/features";
import { ModeToggle } from "@/components/features/site/ModeToggle";
import { Button } from "@/components/ui/button";
import { GoHomeFill } from "@/components/icons";
import Link from "next/link";
import { Locale } from "@/i18n-config";

export function BrandedCard({
  lang,
  children,
  showHeading = false,
  showBorders = true,
  className = "",
  postTitleClassName = "",
  title = "Create Account",
  description = "Select the type of account you want to create",
  ...props
}: {
  lang: Locale;
  children: React.ReactNode;
  showHeading?: boolean;
  showBorders?: boolean;
  className?: string;
  postTitleClassName?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between gap-4">
        <Brand lang={lang} />
        <div className="flex items-center justify-center gap-4">
          <ModeToggle />
          <Link href={`/${lang}`}>
            <Button size="icon" variant="outline">
              <GoHomeFill />
            </Button>
          </Link>
        </div>
      </div>
      {showHeading && (
        <HeadingSection
          className="my-4"
          showBorders={showBorders}
          title={title}
          description={description}
        />
      )}

      {children}
    </div>
  );
}
