import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import type { Metadata } from "next";

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

export const metadata: Metadata = {
  title: "Reach Surgical - Medikal Çözümler",
  description: "Cerrahlar için en iyi cerrahi aletleri sağlıyoruz.",
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Desteklenen dilleri kontrol et
  const validLocales = ['tr', 'en'];
  if (!validLocales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}/index.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
