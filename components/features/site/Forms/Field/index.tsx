import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
    <div className="grid w-full gap-1.5 text-xs text-muted-foreground">
      <Label htmlFor={name}>{label}</Label>

      {children ? (
        children
      ) : type === "textarea" ? (
        <Textarea {...commonProps} rows={4} className="rounded border p-2" />
      ) : type === "radio" && items?.length ? (
        <RadioGroup
          name={name}
          defaultValue={defaultValue?.toString()}
          className="flex"
        >
          {items.map((item, idx) => {
            const id = `${name}-${item.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <div key={idx} className="flex items-center space-x-2">
                <RadioGroupItem value={item} id={id} required={required} />
                <Label htmlFor={id} className="capitalize">
                  {item}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      ) : (
        <Input type={type} {...commonProps} />
      )}
    </div>
  );
}
