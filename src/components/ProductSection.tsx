'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ProductSection = () => {
  const t = useTranslations('home.products');
  
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