import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "./i18n-config";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return i18n.defaultLocale;
  const languages = new Negotiator({
    headers: { "accept-language": acceptLanguage },
  }).languages();
  return matchLocale(languages, i18n.locales, i18n.defaultLocale);
}

// Protect only /perfil and /api/webhooks (not all of /api)
const isProtectedRoute = createRouteMatcher([
  "/perfil(.*)",
  "/api/webhooks(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;

  // ✅ Skip most /api routes EXCEPT /api/webhooks
  if (pathname.startsWith("/api") && !pathname.startsWith("/api/webhooks")) {
    return NextResponse.next();
  }

  // ✅ Clerk protect only if in the protected matcher
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  if (["/manifest.json", "/favicon.ico"].includes(pathname)) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next|public|favicon.ico|assets|manifest.json).*)",
    "/api/webhooks(.*)", // ✅ include explicitly
  ],
};
