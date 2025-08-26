import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || null;
  const { pathname } = request.nextUrl;

  if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  if (!token) {
    const signinUrl = new URL("/signin?type=email", request.url);
    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|uploads|images|.*\\.svg).*)",
  ],
};
