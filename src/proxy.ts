import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname matches public files, sitemaps, robots.txt, api routes, or assets
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") || // static assets like images, robots.txt, sitemaps
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Locale detection: Check cookie first, then headers
  let locale: string = defaultLocale;
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    locale = cookieLocale;
  } else {
    const acceptLang = request.headers.get("accept-language");
    if (acceptLang) {
      // Find the first language matching our supported locales
      const preferred = acceptLang
        .split(",")
        .map((lang) => lang.split(";")[0].trim().substring(0, 2).toLowerCase());
      const matched = preferred.find((lang) => locales.includes(lang as any));
      if (matched) {
        locale = matched;
      }
    }
  }

  // Redirect to URL with locale
  const redirectUrl = new URL(
    `/${locale}${pathname}${request.nextUrl.search}`,
    request.url
  );
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  // Matcher ignoring standard static paths and API
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|sitemap|robots).*)",
  ],
};
