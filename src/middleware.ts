import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "./lib/utils";

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// ✅ i18n middleware
const intlMiddleware = createMiddleware(routing);

const PUBLIC_ROUTES = [
  "/auth",
  "/change-password",
  "/create-account",
  "/otp",
  "/select-language",
  "/select-method",
  "/signin",
  "/signup",
];

export async function middleware(request: NextRequest) {
  // 🟢 أول حاجة: ندي فرصة لـ next-intl يعدل الـ URL لو ناقصه locale
  const response = intlMiddleware(request);

  const { pathname } = request.nextUrl;
  const token = await getToken(); // ممكن تضيف request هنا لو محتاج

  // ⛔️ نشيل الـ locale prefix من الـ pathname
  const pathWithoutLocale = pathname.replace(/^\/(en|fr|ar)(\/|$)/, "/");

  // 🟢 Public routes: اسمح بيها
  if (
    PUBLIC_ROUTES.some(
      (route) =>
        pathWithoutLocale === route || pathWithoutLocale.startsWith(`${route}/`)
    )
  ) {
    return response;
  }

  // 🔒 Protected routes: لو مفيش token → redirect للـ signin بالـ locale
  if (!token) {
    const locale = pathname.split("/")[1] || routing.defaultLocale;
    const signinUrl = new URL(`/${locale}/signin?type=email`, request.url);
    return NextResponse.redirect(signinUrl);
  }

  return response;
}

// ✅ config مشترك
export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
