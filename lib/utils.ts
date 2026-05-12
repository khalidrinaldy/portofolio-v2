import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDifferenceDate(startDate: Date, endDate: Date): string {
  const differenceYears = endDate.getFullYear() - startDate.getFullYear();
  const differenceMonths =
    endDate.getMonth() + 12 * differenceYears - startDate.getMonth() + 1;
  if (differenceMonths < 12) {
    return `${differenceMonths}+ months`;
  }
  return `${differenceYears}+ years`;
}
