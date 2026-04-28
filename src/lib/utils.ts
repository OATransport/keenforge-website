import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "KeenForge",
  description:
    "KeenForge builds the websites, response systems, CRM workflows, and follow up that growing businesses use to turn more leads into booked appointments and revenue.",
  url: "https://keenforge.com",
};
