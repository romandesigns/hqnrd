import { cn } from "@/lib/utils";

/**
 * A component that renders a section with a title and an optional description.
 * It can also display borders around the title.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.title] - The title to display in the section.
 * @param {string} [props.description] - The optional description to display below the title.
 * @param {boolean} [props.showBorders=false] - Whether to show borders around the title.
 *
 * @returns {JSX.Element} The rendered section component.
 */
export function HeadingSection({
  title,
  description,
  showBorders = false,
  className,
}: {
  title?: string;
  description?: string;
  showBorders?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center py-4 pb-8",
        className,
      )}
    >
      <div className="mb-3 flex w-full items-center justify-center">
        {showBorders && <div className="h-[0.10rem] w-1/5 bg-foreground/25" />}
        <div>
          <div className="mx-2 rounded-full bg-foreground/90 px-4 py-1 text-primary-foreground">
            <p className="text-xs font-bold">{title}</p>
          </div>
        </div>
        {showBorders && <div className="h-[0.10rem] w-1/5 bg-foreground/25" />}
      </div>
      {description && (
        <small className="font-medium text-muted-foreground">
          {description}
        </small>
      )}
    </div>
  );
}
