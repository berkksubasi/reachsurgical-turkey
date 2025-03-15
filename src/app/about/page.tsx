'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(0);
  
  // Gallery images
  const galleryImages = Array.from({ length: 37 }, (_, i) => {
    const index = i + 1;
    const extension = index <= 10 ? 'avif' : 'jpg';
    return `/gallery/${index}.${extension}`;
  });
  
  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll
    window.scrollTo(0, 0);
    
    // Scroll event listener
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Gallery slider animation
    const animateSlider = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.scrollWidth;
        const viewportWidth = sliderRef.current.offsetWidth;
        
        if (sliderWidth > viewportWidth) {
          setSliderPosition((prev) => {
            const newPosition = prev - 0.3;
            // Reset position when all images have scrolled past
            return newPosition < -(sliderWidth - viewportWidth) ? 0 : newPosition;
          });
        }
      }
    };
    
    const animationFrame = setInterval(animateSlider, 20);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationFrame);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - About */}
        <section className="relative min-h-screen flex flex-col items-center justify-center sticky top-0 z-10">
          <div className="absolute inset-0">
            <Image
              src="/images/about1.avif"
              alt="Reach Surgical"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Expand the Scope of Surgery
            </h1>
            <div className="mt-8">
              <Link 
                href="#" 
                className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Watch Video
              </Link>
            </div>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Gallery Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#002b49] sticky top-0 z-20">
          <div className="w-full max-w-[1920px] mx-auto px-4 py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
              Reach Surgical Has Three R&D Centers Located in the United States, Tianjin and Shanghai
            </h2>
            
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg mb-6 text-white">
                As a technology-based enterprise, Reach Surgical (Tianjin) Co., Ltd. develops, produces and distributes specialised automatic suture units and surgical energy products.
              </p>
              <p className="text-lg mb-6 text-white">
                The company is dedicated to providing open staplers, endoscopic staplers as well as energy products for minimally invasive surgery. Its high-quality and open surgical instruments along with laparoscopy surgical instruments are well applied for general, thoracic, obstetrics and gynecology surgeries.
              </p>
            </div>
            
            {/* Scroll edilebilir galeri konteyner */}
            <div className="relative h-[60vh] md:h-[70vh] overflow-y-auto custom-scrollbar pb-8">
              {/* Masonry grid yapısı */}
              <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                {galleryImages.map((src, index) => (
                  <div 
                    key={index} 
                    className="relative break-inside-avoid rounded-lg overflow-hidden group"
                  >
                    <div className="relative aspect-[3/2] md:aspect-[4/3]">
                      <Image 
                        src={src} 
                        alt={`Gallery image ${index + 1}`} 
                        fill 
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Hospitals Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#002b49] sticky top-0 z-30">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Reach Surgical Is a Highly Acclaimed Supplier for More Than 500 Domestic Hospitals
                </h2>
                
                <p className="text-xl mb-6">
                  Its products have been exported to more than 30 countries including the United States, the United Kingdom, South Korea, Germany, Italy, Australia and Brazil.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative flex justify-center">
                  <Image
                    src="/images/about2.avif"
                    alt="Reach Surgical Medical Device"
                    width={1200}
                    height={1000}
                    className="object-contain max-h-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Enterprise Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#002b49]">
              High-tech Enterprise
            </h2>
            
            <p className="text-xl italic mb-12 text-gray-600 max-w-3xl mx-auto text-center">
              "Making quality healthcare more affordable and accessible for everyone: Better health for better life"
            </p>
            
            <div className="flex flex-col md:flex-row items-center mt-10">
              <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
                <p className="text-lg mb-6 text-gray-700">
                  Reach Surgical has been recognized as high-tech enterprise for many consecutive years and rated as a leading technology firm in Tianjin for many times. Its high-quality products have won lots of honors: The ultrasonic hemostatic cutting system CSUS6000 was awarded the "Tianjin Science and Technology Progress Award" in 2020; the surgical staplers won the title of "Tianjin Famous Product Brand" in 2019.
                </p>
                
                <p className="text-lg mb-6 text-gray-700">
                  In 2019, Reach Surgical was formally incorporated into the Genesis MedTech Group.
                </p>
                
                <p className="text-lg mb-6 text-gray-700">
                  The Genesis MedTech Group was founded by professionals with rich global and local experiences in the medical device industry. Genesis specializes in the R&D, production and marketing of high-value medical consumables with a large portfolio of surgical products, neuro, peripheral, cardiac and tumor intervention solutions.
                </p>
                
                <p className="text-lg mb-6 text-gray-700">
                  Together with the Genesis MedTech Group, Reach Surgical firmly sticks to the values of integrity, innovation, openness and inclusiveness as well as efficient implementation. The company is devoted to the fulfillment of the mission " Making quality healthcare more affordable and accessible for everyone: Better health for better life ".
                </p>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <Image
                    src="/gallery/15.jpg"
                    alt="Reach Surgical Building"
                    width={600}
                    height={400}
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/contact" 
                className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        
        {/* Boşluk */}
        <div className="h-screen"></div>
        
        {/* Social Responsibility Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#002b49] sticky top-0 z-60">
          <div className="container mx-auto px-4 text-center py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
              Social Responsibility
            </h2>
            
            <div className="max-w-4xl mx-auto text-white">
              <p className="text-lg mb-6">
                Together with the Genesis MedTech Group, Reach Surgical firmly sticks to the values of integrity, innovation, openness and inclusiveness as well as efficient implementation. The company is devoted to the fulfillment of the mission" Making quality healthcare more affordable and accessible for everyone: Better health for better life ". As a well-known national brand, Reach Surgical has always adhered to our responsibility toward clients, employees as well as society and environment.
              </p>
              
              <p className="text-lg mb-6">
                For Reach Surgical Co. Ltd., the product quality enjoys the top priority. All surgical instruments must undergo strict quality controls. The R&D and production base in Tianjin consistently offer safe minimally invasive surgery products with high quality. We feel responsible for our physicians and patients.
              </p>
              
              <p className="text-lg mb-6">
                Reach Surgical cares about its employee. It provides a safe and comfortable working environment, empowers the employee and supports their career with a strong sense of accomplishment.
              </p>
              
              <p className="text-lg mb-6">
                Reach Surgical actively performs its corporate social responsibility. During the COVID-19 pandemic, Reach Surgical spared no effort to raise medical supplies and donated a batch of personal protective articles to the medical staff working on the frontline of fighting the epidemic in Wuhan, Hubei Province. Meanwhile, the company collaborated with the Chinese Medical Association Publishing House to launch the project "Online Application for Epidemic Prevention Packs", which was highly recognized by medical staff.
              </p>
              
              <p className="text-lg mb-8">
                Reach Surgery will, as always, use its own resources to assume corporate social responsibility and contribute to the well-being and development of customers, its employees and the whole society.
              </p>
            </div>
          </div>
        </section>
        
        {/* Final Boşluk */}
        <div className="h-screen md:h-[150vh]"></div>
      </main>
      
      <Footer />
      
      <style jsx global>{`
        .gallery-slider {
          transition: transform 0.1s linear;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
} 