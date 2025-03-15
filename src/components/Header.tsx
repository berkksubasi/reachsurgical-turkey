'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown, FaGlobe } from 'react-icons/fa';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');

  const toggleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown('');
    } else {
      setOpenDropdown(dropdown);
    }
  };

  // Dil değiştirme için path oluşturma
  const switchLocale = (newLocale: string) => {
    // Mevcut path'den locale kısmını çıkarıp yeni locale ile değiştiriyoruz
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    return `/${newLocale}${pathWithoutLocale}`;
  };

  // Bağlantı URL'lerini oluşturma
  const createHref = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <header className="bg-[#0a3b5c] text-white relative z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={createHref('/')} className="mr-8">
            <Image 
              src="/images/logo.avif" 
              alt="Reach Surgical Logo" 
              width={100} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 py-2"
                onClick={() => toggleDropdown('surgical')}
              >
                <span>{t('surgicalStapling')}</span>
                <FaChevronDown className="h-3 w-3" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${openDropdown === 'surgical' ? 'block' : 'hidden group-hover:block'}`}>
                <Link href={createHref('/products/omnia')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('omnia')}
                </Link>
                <Link href={createHref('/products/ireach-magnum')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('iReachMagnum')}
                </Link>
                <Link href={createHref('/products/open-circular')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('openCircular')}
                </Link>
                <Link href={createHref('/products/open-linear')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('openLinear')}
                </Link>
                <Link href={createHref('/products/open-pph')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('openPPH')}
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 py-2"
                onClick={() => toggleDropdown('energy')}
              >
                <span>{t('energy')}</span>
                <FaChevronDown className="h-3 w-3" />
              </button>
              <div className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 ${openDropdown === 'energy' ? 'block' : 'hidden group-hover:block'}`}>
                <Link href={createHref('/energy/ener-reach')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('enerReachOP9')}
                </Link>
                <Link href={createHref('/energy/enerseal-vessel-sealer-divider')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('enerSealVesselSealer')}
                </Link>
                <Link href={createHref('/energy/sound-reach-8000')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('soundReach8000')}
                </Link>
                <Link href={createHref('/energy/sr7-series-shears')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('sr7SeriesShears')}
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 py-2"
                onClick={() => toggleDropdown('robotics')}
              >
                <span>{t('robotics')}</span>
                <FaChevronDown className="h-3 w-3" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${openDropdown === 'robotics' ? 'block' : 'hidden group-hover:block'}`}>
                <Link href={createHref('/robotics/omnibot')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('omnibot')}
                </Link>
              </div>
            </div>
            
            <Link href={createHref('/about')} className="py-2">
              {t('aboutUs')}
            </Link>
            
            <a href="https://www.int.reachsurgical.com/news" target="_blank" rel="noopener noreferrer" className="py-2">
              {t('news')}
            </a>
            
            <Link href={createHref('/support')} className="py-2">
              {t('support')}
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* İletişim butonu - Sağ tarafta arka plan renkli */}
          <Link href={createHref('/contact')} className="hidden lg:flex items-center bg-[#b22234] hover:bg-[#9a1d2c] px-4 py-2 rounded-md transition-colors duration-300">
            {t('contact')}
          </Link>
          
          {/* Dil değiştirme düğmesi */}
          <div className="relative group">
            <button 
              className="flex items-center space-x-1 py-2"
              onClick={() => toggleDropdown('language')}
            >
              <FaGlobe className="h-4 w-4" />
              <span className="uppercase">{locale}</span>
              <FaChevronDown className="h-3 w-3" />
            </button>
            <div className={`absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50 ${openDropdown === 'language' ? 'block' : 'hidden group-hover:block'}`}>
              <Link href={switchLocale('tr')} className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${locale === 'tr' ? 'font-bold' : ''}`}>
                Türkçe
              </Link>
              <Link href={switchLocale('en')} className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${locale === 'en' ? 'font-bold' : ''}`}>
                English
              </Link>
            </div>
          </div>
          
          {/* Mobil menü düğmesi */}
          <button 
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobil menü */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0a3b5c]">
          <div>
            <button 
              className="w-full flex justify-between items-center px-3 py-2 text-white"
              onClick={() => toggleDropdown('mobile-surgical')}
            >
              <span>{t('surgicalStapling')}</span>
              <FaChevronDown className="h-3 w-3" />
            </button>
            <div className={`pl-4 ${openDropdown === 'mobile-surgical' ? 'block' : 'hidden'}`}>
              <Link href={createHref('/products/omnia')} className="block px-3 py-2 text-gray-300 hover:text-white">
                {t('omnia')}
              </Link>
              <Link href={createHref('/products/ireach-magnum')} className="block px-3 py-2 text-gray-300 hover:text-white">
                {t('iReachMagnum')}
              </Link>
              <Link href={createHref('/products/open-circular')} className="block px-3 py-2 text-gray-300 hover:text-white">
                {t('openCircular')}
              </Link>
              <Link href={createHref('/products/open-linear')} className="block px-3 py-2 text-gray-300 hover:text-white">
                {t('openLinear')}
              </Link>
              <Link href={createHref('/products/open-pph')} className="block px-3 py-2 text-gray-300 hover:text-white">
                {t('openPPH')}
              </Link>
            </div>
          </div>
          
          <div>
            <button 
              className="w-full flex justify-between items-center px-3 py-2 text-white"
              onClick={() => toggleDropdown('mobile-energy')}
            >
              <span>{t('energy')}</span>
              <FaChevronDown className="h-3 w-3" />
            </button>
            <div className={`pl-4 ${openDropdown === 'mobile-energy' ? 'block' : 'hidden'}`}>
              <Link href={createHref('/energy/ener-reach')} className="block px-3 py-2 text-gray-300 hover:text-white">
                {t('enerReachOP9')}
              </Link>
              <Link href={createHref('/energy/enerseal-vessel-sealer-divider')} className="block px-3 py-2 text-gray-300 hover:text-white">
                {t('enerSealVesselSealer')}
              </Link>
              <Link href={createHref('/energy/sound-reach-8000')} className="block px-3 py-2 text-gray-300 hover:text-white">
                {t('soundReach8000')}
              </Link>
              <Link href={createHref('/energy/sr7-series-shears')} className="block px-3 py-2 text-gray-300 hover:text-white">
                {t('sr7SeriesShears')}
              </Link>
            </div>
          </div>
          
          <div>
            <button 
              className="w-full flex justify-between items-center px-3 py-2 text-white"
              onClick={() => toggleDropdown('mobile-robotics')}
            >
              <span>{t('robotics')}</span>
              <FaChevronDown className="h-3 w-3" />
            </button>
            <div className={`pl-4 ${openDropdown === 'mobile-robotics' ? 'block' : 'hidden'}`}>
              <Link href={createHref('/robotics/omnibot')} className="block px-3 py-2 text-gray-300 hover:text-white">
                {t('omnibot')}
              </Link>
            </div>
          </div>
          
          <Link href={createHref('/about')} className="block px-3 py-2 text-white">
            {t('aboutUs')}
          </Link>
          
          <a href="https://www.int.reachsurgical.com/news" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-white">
            {t('news')}
          </a>
          
          <Link href={createHref('/support')} className="block px-3 py-2 text-white">
            {t('support')}
          </Link>
          
          {/* Mobil menüde iletişim butonu - Özel arka plan renkli */}
          <Link href={createHref('/contact')} className="block px-3 py-2 mt-2 bg-[#b22234] text-white rounded-md">
            {t('contact')}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 