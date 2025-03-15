'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

interface ProductProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  link: string;
  bgColor?: string;
  textColor?: string;
  buttonText: string;
}

const ProductCard = ({ 
  title, 
  subtitle, 
  imageSrc, 
  link, 
  bgColor = 'bg-white', 
  textColor = 'text-[#0a3b5c]',
  buttonText
}: ProductProps) => {
  const locale = useLocale();
  
  // Bağlantı URL'lerini oluşturma
  const createHref = (path: string) => {
    return `/${locale}${path}`;
  };
  
  return (
    <section className={`py-16 ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl">{subtitle}</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl">
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href={createHref(link)}
            className={`inline-block px-6 py-2 border ${
              textColor === 'text-white' 
                ? 'border-white text-white hover:bg-white hover:text-[#0a3b5c]' 
                : 'border-[#0a3b5c] text-[#0a3b5c] hover:bg-[#0a3b5c] hover:text-white'
            } rounded-md transition-all duration-300`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductSection = () => {
  const t = useTranslations('home.products');
  const locale = useLocale();
  
  // Bağlantı URL'lerini oluşturma
  const createHref = (path: string) => {
    return `/${locale}${path}`;
  };
  
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#0a3b5c]">{t('title')}</h2>
            <p className="text-xl text-[#0a3b5c]">{t('subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ürün kartları */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/omnia-tools.avif" 
                  alt="Omnia Surgical Stapler" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0a3b5c]">Omnia</h3>
                <p className="text-gray-600 mb-4">{t('descriptions.omnia')}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/iReachMagnum_Img_2022_02_edited.avif" 
                  alt="iReach Magnum" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0a3b5c]">iReach Magnum</h3>
                <p className="text-gray-600 mb-4">{t('descriptions.iReachMagnum')}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/ENERREACH_Img_OP9_Front.avif" 
                  alt="Energy Devices" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0a3b5c]">Energy Devices</h3>
                <p className="text-gray-600 mb-4">{t('descriptions.energy')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection; 