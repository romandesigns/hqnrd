import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type FieldProps = {
  name: string;
  label: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "date"
    | "textarea"
    | "radio";
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string | number;
  items?: string[]; // For radio inputs
  children?: React.ReactNode;
};

export function Field({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  autoComplete,
  defaultValue,
  items,
  children,
}: FieldProps): React.JSX.Element {
  const commonProps = {
    id: name,
    name,
    placeholder,
    required,
    autoComplete,
    defaultValue,
    className: "mt-1 w-full",
  };

  return (
    <label
      htmlFor={name}
      className="grid cursor-pointer gap-1.5 text-xs text-muted-foreground"
    >
      {label}

      {children ? (
        children
      ) : type === "textarea" ? (
        <Textarea {...commonProps} rows={4} className="rounded border p-2" />
      ) : type === "radio" && items?.length ? (
        <div className="mt-1 flex gap-4">
          {items.map((item, idx) => {
            const id = `${name}-${item.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <label
                key={idx}
                htmlFor={id}
                className="flex cursor-pointer items-center gap-1"
              >
                <input
                  type="radio"
                  id={id}
                  name={name}
                  value={item}
                  required={required}
                  className="accent-primary"
                />
                <span className="capitalize">{item}</span>
              </label>
            );
          })}
        </div>
      ) : (
        <Input type={type} {...commonProps} />
      )}
    </label>
  );
}
