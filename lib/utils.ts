import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toArray<T>(value: T | T[]): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}