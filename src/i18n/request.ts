import { getRequestConfig } from 'next-intl/server';

// @ts-ignore
export default getRequestConfig(async ({ locale }) => {
  // Eğer locale undefined ise, varsayılan olarak 'tr' kullan
  const safeLocale = locale || 'tr';
  
  return {
    locale: safeLocale,
    messages: (await import(`../../messages/${safeLocale}/index.json`)).default
  };
}); 