"use client";
import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Locale } from "@/i18n-config";
import { categories } from "@/utils/constants/categories";

export function CategoriesDropDownMenu({ lang }: { lang: Locale }) {
  const [open, setOpen] = React.useState(false);
  const searchParams = useSearchParams().get("categoria");
  const [value, setValue] = React.useState(searchParams || "ver-todas");
  const router = useRouter();

  const handleSelectedCategory = (categoryValue: string) => {
    const newValue = categoryValue === value ? "ver-todas" : categoryValue;
    if (categoryValue) {
      setValue(newValue);
      setOpen(false);
      router.push(`/${lang}/habitaciones?categoria=${newValue}`);
    }
    if (!categoryValue) {
      setOpen(false);
      router.push(`/${lang}/habitaciones`);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {categories.find((category) => category.slug === value)?.label ??
            "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[370px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category, index) => (
                <CommandItem
                  key={index}
                  value={category.label}
                  onSelect={() => handleSelectedCategory(category.slug)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category.label ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
