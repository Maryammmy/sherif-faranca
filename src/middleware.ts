// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "./lib/utils";

// const PUBLIC_ROUTES = [
//   "/auth",
//   "/change-password",
//   "/create-account",
//   "/otp",
//   "/select-language",
//   "/select-method",
//   "/signin",
//   "/signup",
// ];

// export async function middleware(request: NextRequest) {
//   const token = await getToken();

//   const { pathname } = request.nextUrl;

//   if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
//     return NextResponse.next();
//   }

//   if (!token) {
//     const signinUrl = new URL("/signin?type=email", request.url);
//     return NextResponse.redirect(signinUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|api|uploads|images|.*\\.svg).*)",
//   ],
// };
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "./lib/utils";

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
  const token = await getToken(); // pass request if needed

  const { pathname } = request.nextUrl;

  // Allow access to public routes and their subpaths
  if (
    PUBLIC_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    )
  ) {
    return NextResponse.next();
  }

  // Redirect if no token
  if (!token) {
    const signinUrl = new URL("/signin?type=email", request.url);
    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|uploads|images|.*\\..*).*)",
  ],
};
