"use server";
"use server";

import { getLocale } from "next-intl/server";

/**
 * Get current locale from Next.js routing context
 */
export async function getCurrentLocale(): Promise<string> {
  const locale = await getLocale();
  return locale;
}
