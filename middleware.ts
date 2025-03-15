import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Varsayılan dil olarak Türkçe'yi ayarlıyoruz
  defaultLocale: 'tr',
  locales: ['tr', 'en'],
  // Kullanıcının tarayıcı dilini algılayarak uygun dile yönlendirme
  localeDetection: true
});

export const config = {
  // Tüm yollar için middleware'i çalıştır, ancak bazı özel yolları hariç tut
  matcher: ['/((?!api|_next|.*\\..*|favicon.ico).*)']
}; 