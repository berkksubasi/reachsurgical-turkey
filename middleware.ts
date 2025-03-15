import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  defaultLocale: 'tr',
  locales: ['tr', 'en'],
  localeDetection: true,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*|favicon.ico).*)']
}; 