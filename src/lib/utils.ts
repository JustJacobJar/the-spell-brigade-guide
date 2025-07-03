import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tierClassNameLookup = (name: string) => {
  switch (name) {
    case "S":
      return "bg-red-400";
    case "A":
      return "bg-orange-400";
    case "B":
      return "bg-amber-400";
    case "C":
      return "bg-yellow-400";
    case "D":
      return "bg-lime-400";
    case "F":
      return "bg-green-400";
    case "?":
      return "bg-gray-400";
    default:
      return "";
  }
};
