import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if pathname starts with our supported locales
  const pathnameHasLocale = ['/en', '/es'].some(
    (locale) => pathname.startsWith(locale) || pathname === locale
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect if there is no locale
  const locale = request.headers.get('accept-language')?.split(',')?.[0]?.split('-')?.[0] ?? 'en'
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
 
// Matcher configuration that excludes files and specific paths from middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public/ (public directory)
     * - SVG, PNG, JPG, JPEG files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public/|.*\\.(?:svg|png|jpg|jpeg)$).*)'
  ]
}
