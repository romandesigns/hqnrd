import React from "react";

export function HeadingSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center py-4 pb-8">
      <div className="mb-3 flex w-full items-center justify-center">
        <div className="h-0.5 w-1/5 bg-foreground/25" />
        <div>
          <div className="mx-2 rounded-full bg-foreground/85 px-4 py-1 text-primary-foreground">
            <p className="text-xs font-bold">{title}</p>
          </div>
        </div>
        <div className="h-0.5 w-1/5 bg-foreground/25" />
      </div>
      {description && (
        <small className="font-semibold text-muted-foreground">
          {description}
        </small>
      )}
    </div>
  );
}
