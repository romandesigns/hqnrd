"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
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

const categories = [
  {
    value: "basicas",
    label: "Basic",
  },
  {
    value: "doble-camas",
    label: "Double Bed",
  },
  {
    value: "ejecutivas",
    label: "Ejecutivas",
  },
  {
    value: "standards",
    label: "Standard",
  },
  {
    value: "dobles",
    label: "Double Room",
  },
  {
    value: "familiares",
    label: "Familiar",
  },
  {
    value: "ver-todas",
    label: "View All",
  },
];

export function CategoriesDropDownMenu({ lang }: { lang: Locale }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("ver-todas");

  const router = useRouter();

  const handleSelectedCategory = (currentValue: string) => {
    const newValue = currentValue === value ? "ver-todas" : currentValue;
    setValue(newValue);
    setOpen(false);
    router.push(`/${lang}/habitaciones?categoria=${newValue}`);
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
          {categories.find((category) => category.value === value)?.label ??
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
              {categories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={() => handleSelectedCategory(category.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category.value ? "opacity-100" : "opacity-0"
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
