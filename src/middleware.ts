import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale
  const hasLocale = /^\/(?:en|ar)(?:\/|$)/.test(pathname);

  // If no locale is present, redirect to the default locale
  if (!hasLocale && pathname !== "/") {
    const defaultLocale = "en"; // Your default locale
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Use the next-intl middleware for localized paths
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files
  // - _next internal routes
  matcher: [
    // Match all pathnames except for those starting with /api, /_next, /_vercel, /static
    "/((?!api|_next|_vercel|static|.*\\..*).*)",
  ],
};
