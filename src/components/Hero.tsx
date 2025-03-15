'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

const Hero = () => {
  const t = useTranslations('home.hero');
  const locale = useLocale();
  
  // Bağlantı URL'lerini oluşturma
  const createHref = (path: string) => {
    return `/${locale}${path}`;
  };
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Arka plan görseli */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/omnibot.avif"
          alt="OMNIBOT Surgical Robot Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black drop-shadow-lg">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-black drop-shadow-md">
            {t('subtitle')}
          </p>
          <Link 
            href={createHref('/contact')}
            className="bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-3 rounded-md inline-block text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            {t('button')}
          </Link>
        </div>
      </div>
      
      {/* Animasyonlu alt ok */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 