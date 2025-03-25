import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function PartnersSection() {
  const t = useTranslations('home.partnersSection');

  const partners = [
    {
      name: 'Jafron',
      image: '/partners/jafron.png'
    },
    {
      name: 'Goldsite',
      image: '/partners/goldsite.png'
    },
    {
      name: 'BBraun',
      image: '/partners/bbraun.png'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>
        
        <div className="flex justify-center items-center gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="relative w-92 h-48">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 