import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if the request is for a static file
  if (
    pathname.includes('.') || // Has file extension
    pathname.startsWith('/_next') || // Next.js internal
    pathname.startsWith('/api') || // API routes
    pathname.startsWith('/static') // Static files
  ) {
    return NextResponse.next()
  }

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
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|static|.*\\..*).*)',
  ],
}
