import Image from 'next/image';

interface OmniaFeatureProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const OmniaFeature = ({ title, description, imageSrc, imageAlt, reverse = false }: OmniaFeatureProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${reverse ? 'lg:order-2' : ''}`}>
            <h2 className="text-4xl font-bold mb-6 text-[#0a3b5c]">{title}</h2>
            {typeof description === 'string' ? (
              <p className="text-lg">{description}</p>
            ) : (
              description
            )}
          </div>
          <div className={`${reverse ? 'lg:order-1' : ''}`}>
            <div className="relative h-96 w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmniaFeature; 