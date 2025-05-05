'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const NewsSection = () => {
  const t = useTranslations('home.news');
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-[#b22234]">{t('title')}</h2>
          <a href="https://www.int.reachsurgical.com/news" target="_blank" rel="noopener noreferrer" className="text-[#b22234] font-medium hover:underline">
            {t('viewAll')} →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src="/images/news1.avif" 
                alt="News 1" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{t('items.news1.date')}</div>
              <h3 className="text-xl font-bold mb-2 text-[#b22234]">{t('items.news1.title')}</h3>
              <p className="text-gray-600 mb-4">{t('items.news1.content')}</p>
              <a href="https://www.int.reachsurgical.com/news" target="_blank" rel="noopener noreferrer" className="text-[#b22234] font-medium hover:underline">
                {t('readMore')} →
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src="/images/news2.avif" 
                alt="News 2" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{t('items.news2.date')}</div>
              <h3 className="text-xl font-bold mb-2 text-[#b22234]">{t('items.news2.title')}</h3>
              <p className="text-gray-600 mb-4">{t('items.news2.content')}</p>
              <a href="https://www.int.reachsurgical.com/news" target="_blank" rel="noopener noreferrer" className="text-[#b22234] font-medium hover:underline">
                {t('readMore')} →
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src="/images/news3.avif" 
                alt="News 3" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{t('items.news3.date')}</div>
              <h3 className="text-xl font-bold mb-2 text-[#b22234]">{t('items.news3.title')}</h3>
              <p className="text-gray-600 mb-4">{t('items.news3.content')}</p>
              <a href="https://www.int.reachsurgical.com/news" target="_blank" rel="noopener noreferrer" className="text-[#b22234] font-medium hover:underline">
                {t('readMore')} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 