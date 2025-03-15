'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import NewsSection from '@/components/NewsSection';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Home() {
  const t = useTranslations('home.surgicalSection');
  const locale = useLocale();
  
  // Bağlantı URL'lerini oluşturma
  const createHref = (path: string) => {
    return `/${locale}${path}`;
  };
  
  return (
    <main>
      <Header />
      <Hero />
      <ProductSection />
      
      <section className="py-16 bg-[#0a3b5c] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
            <p className="text-xl">{t('subtitle')}</p>
          </div>
          
          <div className="flex justify-center">
            <Link 
              href={createHref('/about')}
              className="inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-[#0a3b5c] rounded-md transition-all duration-300"
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </section>
      
      <NewsSection />
      <Footer />
    </main>
  );
}
