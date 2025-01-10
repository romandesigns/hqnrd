import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type ClassMappings = { [key: string]: string };

export function classNamesWithOptions(
  inputs: ClassValue[],
  options?: {
    mappings?: ClassMappings; // Custom mappings to replace classes
    debug?: boolean; // Enable debugging to log the final class string
  },
): string {
  let mergedClasses = twMerge(clsx(inputs));

  // Apply custom mappings if provided
  if (options?.mappings) {
    for (const [key, value] of Object.entries(options.mappings)) {
      const regex = new RegExp(`\\b${key}\\b`, "g"); // Match exact class names
      mergedClasses = mergedClasses.replace(regex, value);
    }
  }

  // Debugging: Log the final class string
  if (options?.debug) {
    console.log("Final Class String:", mergedClasses);
  }

  return mergedClasses;
}
