"use client";
import { useSearchParams } from "next/navigation";

// Overloads
export function useQueryParams(): Record<string, string>;
export function useQueryParams(key: string): string;
export function useQueryParams(key?: string) {
  const searchParams = useSearchParams();

  if (key) {
    return searchParams.get(key) || "";
  }

  const params: Record<string, string> = {};
  searchParams.forEach((value, k) => {
    params[k] = value;
  });

  return params;
}
