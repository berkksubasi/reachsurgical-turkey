'use client';

import { useRef, useEffect, useState, RefObject } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import Link from 'next/link';
import Image from 'next/image';

export default function IReachMagnumPage() {
  const [activeSection, setActiveSection] = useState(0);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const ergonomicVideoRef = useRef<HTMLVideoElement>(null);
  const intelligentVideoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Aktif bölümü belirle
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
    
    // Intersection Observer için options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    // Video observer'ları
    const createObserver = (videoRef: any) => {
      return new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch((e: Error) => console.log("Video oynatma hatası:", e));
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      }, options);
    };
    
    // Observer'ları oluştur
    const heroObserver = createObserver(heroVideoRef);
    const ergonomicObserver = createObserver(ergonomicVideoRef);
    const intelligentObserver = createObserver(intelligentVideoRef);
    
    // Observer'ları başlat
    if (heroVideoRef.current) heroObserver.observe(heroVideoRef.current);
    if (ergonomicVideoRef.current) ergonomicObserver.observe(ergonomicVideoRef.current);
    if (intelligentVideoRef.current) intelligentObserver.observe(intelligentVideoRef.current);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroVideoRef.current) heroObserver.unobserve(heroVideoRef.current);
      if (ergonomicVideoRef.current) ergonomicObserver.unobserve(ergonomicVideoRef.current);
      if (intelligentVideoRef.current) intelligentObserver.unobserve(intelligentVideoRef.current);
    };
  }, []);
  
  // Bölüme kaydırma fonksiyonu
  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden sticky top-0 z-10">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/iReachMagnum_Img_2021_18.avif"
              alt="iReach Magnum"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedElement animation="slide-left" className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                iReach Magnum Powered Stapler
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={0.3} className="mb-12">
              <p className="text-xl md:text-2xl text-white drop-shadow-md">
                Surgical Stapling Redefined
              </p>
            </AnimatedElement>
          </div>
          
          <div className="scroll-indicator"></div>
        </section>
        
        {/* The Next Big Thing Section */}
        <section className="relative h-screen flex items-center bg-white sticky top-0 z-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <p className="text-gray-600 mb-2">
                ENDO III Stapling
              </p>
              
              <h2 className="text-5xl font-bold text-[#002b49] mb-16">
                The Next Big Thing
              </h2>
            
              <div className="max-w-6xl mx-auto mb-12">
                <Image
                  src="/images/ireach_magnum1.avif"
                  alt="iReach Magnum"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg mb-6 text-gray-800">
                  Fundamental essentials of ENDO III stapling system now re-imagined and reassembled into a brand-new entity.
                </p>
                
                <p className="text-lg text-gray-800">
                  Signature tissue <span className="font-bold">compression</span> paired with <span className="font-bold">smooth powered firing yields</span> unprecedented experience, unlocking new possibilities in the OR.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ergonomic Design Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-30" style={{ backgroundColor: 'rgb(232, 232, 232)' }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#002b49]">
                  Ergonomic Design
                </h2>
                
                <p className="text-xl mb-6 text-gray-800">
                  iReach Magnum offers up to <span className="font-bold">55° of articulation</span> in both directions, in <span className="font-bold">5 gears</span>.
                </p>
              </div>
              
              <div className="w-full md:w-1/2 flex items-end">
                <div className="w-full">
                  <video
                    ref={ergonomicVideoRef}
                    src="/videos/ireach_magnum.mp4"
                    className="w-full h-auto object-contain"
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/images/ireach-magnum-bg.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Optimised Compression Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-40" style={{ backgroundColor: '#002b49' }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                  Optimised Compression
                </h2>
                
                <div className="text-xl text-white">
                  With iReach Magnum you get <span className="font-bold">15-seconds pre-</span>
                  <span className="font-bold">compression</span> notice, <span className="font-bold">improved compression</span> force and 
                  a <span className="font-bold">safety button</span>.
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex items-center justify-end overflow-visible">
                <div className="w-full relative" style={{ right: "-20%" }}>
                  <Image
                    src="/images/iReachMagnum_Img_2021_01_edited.avif"
                    alt="Optimised Compression"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain transform scale-150"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Intelligent Firing Section */}
        <section className="relative h-screen flex items-center overflow-hidden sticky top-0 z-50">
          <div className="absolute inset-0 z-0">
            <video
              ref={intelligentVideoRef}
              src="/videos/intelligence.mp4"
              className="object-cover w-full h-full"
              muted
              loop
              playsInline
              preload="none"
              poster="/images/ireach-magnum-bg.jpg"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <AnimatedElement animation="slide-up">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                  Intelligent Firing
                </h2>
              </AnimatedElement>
              
              <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg">
                <AnimatedElement animation="fade-in" delay={0.3}>
                  <p className="text-xl mb-6 text-gray-200">
                    Microchips dynamically <span className="font-bold">monitor</span> incoming signals and <span className="font-bold">adjust</span> output.
                  </p>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cutting Edge Technology Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-60" style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/iReachMagnum_Img_2021_18.avif"
              alt="Cutting Edge Technology Background"
              fill
              className="object-cover opacity-30"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-end">
              <div className="w-full md:w-1/2 pl-0 md:pl-12 mb-12 md:mb-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#002b49]">
                  Cutting Edge Technology
                </h2>
                
                <div className="text-xl text-gray-800">
                  iReach Magnum features a single-use <span className="font-bold">cartridge blade</span> and <span className="font-bold">reduces the risk</span> of cross contamination.
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cartridge Variety Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-70" style={{ backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black">
                    Cartridge Variety
                  </h2>
                  
                  <div className="text-xl text-black mb-8">
                    iReach Magnum offers <span className="font-bold">6 staple heights</span> in both <span className="font-bold">45 and 60 mm</span> length are available for any surgical situation. All cartridges, including green and black ones go through <span className="font-bold">12 mm trocars</span>.
                  </div>
              </div>
              
              <div className="w-full md:w-1/2 flex items-center justify-end overflow-visible">
                <div className="w-full relative" style={{ right: "-10%" }}>
                  <Image
                    src="/images/93e6e0_6caa27ef528443e9bf863ebd78ab1e21~mv2.avif"
                    alt="Cartridge Variety"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain transform scale-125"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bariatric Benefits Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-80" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#002b49] text-center">
              Bariatric Benefits
            </h2>
            
            <div className="flex justify-center mb-16">
              <Image
                src="/images/iReachMagnum_Img_2021_08.avif"
                alt="Bariatric Benefits"
                width={800}
                height={400}
                className="object-contain"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002b49]">Compression Notice</h3>
                <p className="text-gray-700">
                  6 staple heights in both 45 and 60 mm length are available for any surgical situation.
                  <br /><br />
                  All cartridges, including green and black ones go through 12 mm trocars
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002b49]">Firing</h3>
                <p className="text-gray-700">
                  Strong gripping force reduces slippage
                  <br /><br />
                  Automatically slows down cutting through thick tissues
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002b49]">Cartridge</h3>
                <p className="text-gray-700">
                  Finer selection of staple heights
                  <br /><br />
                  Blue, Gold, Green and Black reloads tailored to tissue thickness variety
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Thoracic Benefits Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-90"style={{ backgroundColor: '#fff' }} >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#002b49] text-center">
              Thoracic Benefits
            </h2>
            
            <div className="flex justify-center mb-16">
              <Image
                src="/images/iReachMagnum_Img_2022_02_edited.avif"
                alt="Thoracic Benefits"
                width={800}
                height={400}
                className="object-contain"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002b49]">55° Wide Angle</h3>
                <p className="text-gray-700">
                  More access in confined spaces
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002b49]">Strong Gripping Force</h3>
                <p className="text-gray-700">
                  Reduces risk of tissue slippage during firing
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002b49]">Cartridge</h3>
                <p className="text-gray-700">
                  Finer selection of staple heights
                  <br /><br />
                  Specific cartridge heights designed for vessels and lung tissues
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Colorectal Benefits Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-100" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#002b49] text-center">
              Colorectal Benefits
            </h2>
            
            <div className="flex justify-center mb-16">
              <Image
                src="/images/iReachMagnum_Img_2021_08.avif"
                alt="Colorectal Benefits"
                width={800}
                height={400}
                className="object-contain"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002b49]">55° Wide Angle</h3>
                <p className="text-gray-700">
                  Reach further and lower stapling positions for cleaner mesenteric excisions
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002b49]">Adequate Compression</h3>
                <p className="text-gray-700">
                  Reduces risk of tissue damage and ischemia
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002b49]">Cartridge</h3>
                <p className="text-gray-700">
                  Blue, Gold, Green and Black reloads tailored to tissue thickness variety
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative h-screen flex items-center sticky top-0 z-110">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/doctors.avif"
              alt="Medical Professionals"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a3b5c]/90 to-[#0a3b5c]/80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-8 text-white">Interested in iReach Magnum?</h2>
              
              <Link 
                href="/contact" 
                className="inline-block bg-[#b22234] hover:bg-[#9a1d2c] text-white px-8 py-4 rounded-md text-xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 