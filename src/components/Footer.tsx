'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useTranslations, useLocale } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');
  const locale = useLocale();

  const createHref = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Şirket Bilgileri */}
          <div className="space-y-4">
            <Link href={createHref('/')}>
              <Image 
                src="/images/yaziliLogo.png" 
                alt="Endolink Logo" 
                width={160} 
                height={60}
                className="h-16 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-600">{t('address')}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#b22234] transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#b22234] transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#b22234] transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={createHref('/')} className="text-gray-600 hover:text-[#b22234] transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href={createHref('/about')} className="text-gray-600 hover:text-[#b22234] transition-colors">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href={createHref('/vision-mission')} className="text-gray-600 hover:text-[#b22234] transition-colors">
                  {t('visionMission')}
                </Link>
              </li>
              <li>
                <Link href={createHref('/news')} className="text-gray-600 hover:text-[#b22234] transition-colors">
                  {t('news')}
                </Link>
              </li>
              <li>
                <Link href={createHref('/contact')} className="text-gray-600 hover:text-[#b22234] transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Ürünler */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('products')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={createHref('/products/omnia')} className="text-gray-600 hover:text-[#b22234] transition-colors">
                  {t('surgicalStapling')}
                </Link>
              </li>
              <li>
                <Link href={createHref('/energy/ener-reach')} className="text-gray-600 hover:text-[#b22234] transition-colors">
                  {t('energy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Alt Footer */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              {t('copyright')}
            </div>
            <div className="flex space-x-6">
              <Link href={createHref('/privacy-policy')} className="text-sm text-gray-600 hover:text-[#b22234] transition-colors">
                {t('privacyPolicy')}
              </Link>
              <Link href={createHref('/terms-of-use')} className="text-sm text-gray-600 hover:text-[#b22234] transition-colors">
                {t('termsOfUse')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 