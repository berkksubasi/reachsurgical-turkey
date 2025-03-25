'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaYoutube, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');
  const locale = useLocale();
  const [email, setEmail] = useState('');

  // Bağlantı URL'lerini oluşturma
  const createHref = (path: string) => {
    return `/${locale}${path}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada e-posta aboneliği işlemi yapılabilir
    console.log('E-posta aboneliği:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#0a3b5c] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('products')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={createHref('/')} className="hover:text-gray-300">
                  {t('home')}
                </Link>
              </li>
              <li>
                <div className="flex items-center justify-between cursor-pointer hover:text-gray-300">
                  <span>{t('surgicalStapling')}</span>
                  <FaChevronDown className="h-3 w-3" />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between cursor-pointer hover:text-gray-300">
                  <span>{t('energy')}</span>
                  <FaChevronDown className="h-3 w-3" />
                </div>
              </li>
              <li>
                <Link href={createHref('/about')} className="text-gray-300 hover:text-white">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href={createHref('/vision-mission')} className="text-gray-300 hover:text-white">
                  {t('visionMission')}
                </Link>
              </li>
              <li>
                <Link href={createHref('/news')} className="text-gray-300 hover:text-white">
                  {t('news')}
                </Link>
              </li>
              <li>
                <Link href={createHref('/contact')} className="hover:text-gray-300">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactUs')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@endolink.com.tr" className="hover:text-gray-300">
                  info@endolink.com.tr
                </a>
              </li>
              <li>
                <a href="tel:+90-322-123-4567" className="hover:text-gray-300">
                  +90 322 123 4567
                </a>
              </li>
              <li className="text-sm">
                Güzelyalı Mahallesi 81201. Sokak, No:10/A Çukurova,Adana - Türkiye
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-300">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">{t('subscribeTitle')}</h3>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-grow px-4 py-2 rounded-l text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#b22234] hover:bg-[#9a1d2c] px-4 py-2 rounded-r"
              >
                {t('joinButton')}
              </button>
            </form>
            <div className="flex space-x-4 mt-8 justify-end">
              <a href="#" className="hover:text-gray-300">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href={createHref('/')}>
                <Image 
                  src="/images/logo.png" 
                  alt="Reach Surgical Logo" 
                  width={160} 
                  height={60}
                  className="h-16 w-auto"
                />
              </Link>
              <span className="ml-4">Reach Surgical</span>
            </div>
            <div className="text-sm text-gray-400">
              <span>{t('address')}</span>
              <div className="mt-2">
                {t('copyright')} {' '}
                <Link href={createHref('/privacy-policy')} className="underline hover:text-white">
                  {t('privacyPolicy')}
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 