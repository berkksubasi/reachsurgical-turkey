'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('sscp');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Talimat dosyaları listesi ve bağlantıları
  const instructionFiles = [
    {
      name: "ENDO REACH REC Staplers and ENDO REACH REC Reloads_EN",
      path: "/uds/202409_ENDO REACH REC Staplers and ENDO REACH REC Reloads EN.pdf"
    },
    {
      name: "ENDO REACH REC Staplers and ENDO REACH REC Reloads_Multilingual",
      path: "/uds/202409_ENDO REACH REC Staplers and ENDO REACH REC Reloads Multilingual.pdf"
    },
    {
      name: "ENDO REACH RLC SRC Staplers and ENDO REACH RLC_SRC_AFT Reload Units_EN",
      path: "/uds/202409_ENDO REACH RLC SRC Staplers and ENDO REACH RLC_SRC_AFT Reload Units_EN.pdf"
    },
    {
      name: "ENDO REACH RLC SRC Staplers and ENDO REACH RLC_SRC_AFT Reload Units_Multiligual",
      path: "/uds/202409_ENDO REACH RLC SRC Staplers and ENDO REACH RLC_SRC_AFT Reload Units_Multiligual.pdf"
    },
    {
      name: "ENER REACH Enerseal_EN",
      path: "/uds/202409_ENER REACH Enerseal_EN.pdf"
    },
    {
      name: "ENER REACH Enerseal_Multilingual",
      path: "/uds/202409_ENER REACH Enerseal_Multilingual.pdf"
    },
    {
      name: "ENER REACH Optimus OP9 Generator_EN",
      path: "/uds/202409_ENER REACH Optimus_EN.pdf"
    },
    {
      name: "ENER REACH Optimus OP9 Generator_Multilingual",
      path: "/uds/202409_ENER REACH Optimus_Multilingual.pdf"
    },
    {
      name: "IREACH MAGNUM Staplers_EN",
      path: "/uds/202409_IREACH MAGNUM Staplers_EN_include IM-0.pdf"
    },
    {
      name: "IREACH MAGNUM Staplers_Multilingual",
      path: "/uds/202409_IREACH MAGNUM Staplers_Multilingual_include IM-0.pdf"
    },
    {
      name: "IREACH MAGNUM PLUS Staplers_EN",
      path: "/uds/202409_IREACH MAGNUM PLUS Staplers_EN.pdf"
    },
    {
      name: "IREACH MAGNUM PLUS Staplers_Multilingual",
      path: "/uds/202409_IREACH MAGNUM PLUS Staplers_Multilingual.pdf"
    },
    {
      name: "IREACH OMNIA Staplers_EN",
      path: "/uds/202409_IREACH OMNIA Staplers_EN_include ID-0.pdf"
    },
    {
      name: "IREACH OMNIA Staplers_Multilingual",
      path: "/uds/202409_IREACH OMNIA Staplers_Multilingual_include ID-0.pdf"
    },
    {
      name: "IREACH OMNIA Reload Units_EN",
      path: "/uds/202409_IREACH OMNIA Reload Units_EN.pdf"
    },
    {
      name: "IREACH OMNIA Reload Units_Multilingual",
      path: "/uds/202409_IREACH OMNIA Reload Units_Multilingual.pdf"
    },
    {
      name: "SOUND REACH CSUS8000 Generator_EN",
      path: "/uds/202409_SOUND REACH CSUS8000 Generator_EN.pdf"
    },
    {
      name: "SOUND REACH CSUS8000 Generator_Multilingual",
      path: "/uds/202409_SOUND REACH CSUS8000 Generator_Multilingual.pdf"
    },
    {
      name: "SOUND REACH TRA6 Transducer_EN",
      path: "/uds/202409_SOUND REACH TRA6 Transducer_EN.pdf"
    },
    {
      name: "SOUND REACH TRA6 Transducer_Multilingual",
      path: "/uds/202409_SOUND REACH TRA6 Transducer_Multilingual.pdf"
    },
    {
      name: "SOUND REACH SR7 Shears_SRB_EN",
      path: "/uds/202409_SOUND REACH SR7 Shears_SRB_EN.pdf"
    },
    {
      name: "SOUND REACH SR7 Shears_SRE_EN",
      path: "/uds/202409_SOUND REACH SR7 Shears_SRE_EN.pdf"
    },
    {
      name: "SOUND REACH SR7 Shears_SRE_Multilingual",
      path: "/uds/202409_SOUND REACH SR7 Shears_SRE_Multilingual.pdf"
    },
    {
      name: "SOUND REACH PD Shears_EN",
      path: "/uds/202409_SOUND REACH PD Shears_EN.pdf"
    },
    {
      name: "SOUND REACH PD Shears_Multilingual",
      path: "/uds/202409_SOUND REACH PD Shears_Multilingual.pdf"
    },
    {
      name: "SOUND REACH H_F_P Shears",
      path: "/uds/202409_SOUND REACH H_F_P Shears.pdf"
    }
  ];

  // Dosyaları kategorilere ayır
  const fileCategories = {
    'ENDO REACH': instructionFiles.filter(file => file.name.includes('ENDO REACH')),
    'ENER REACH': instructionFiles.filter(file => file.name.includes('ENER REACH')),
    'IREACH': instructionFiles.filter(file => file.name.includes('IREACH')),
    'SOUND REACH': instructionFiles.filter(file => file.name.includes('SOUND REACH'))
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className={`flex-grow bg-white transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <div className="relative bg-[#002b49] py-20">
          <div className="absolute inset-0 opacity-20">
            <Image 
              src="/images/about1.avif" 
              alt="Support Background" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Support
            </h1>
            <p className="text-xl text-white/80 text-center mt-4 max-w-3xl mx-auto">
              Access technical documentation, safety information, and instructions for use for all Reach Surgical products
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-200 mb-10">
            <button
              onClick={() => setActiveTab('sscp')}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === 'sscp'
                  ? 'text-[#b22234] border-b-2 border-[#b22234]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Summary of Safety and Clinical Performance
            </button>
            <button
              onClick={() => setActiveTab('instructions')}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === 'instructions'
                  ? 'text-[#b22234] border-b-2 border-[#b22234]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Instructions for Use Download
            </button>
          </div>
          
          {/* SSCP Content */}
          {activeTab === 'sscp' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-2xl font-bold text-[#002b49] mb-6">
                Summary of Safety and Clinical Performance - SSCP
              </h2>
              
              <div className="space-y-4">
                <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow flex items-center">
                  <div className="mr-4 text-[#b22234]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <a 
                    href="/uds/KF-H68-SZ-23 SSCP Endo Family 1.4_202503.pdf" 
                    download 
                    className="text-[#002b49] hover:text-[#b22234] font-medium"
                  >
                    SSCP-ENDO REACH Family (March 2025)
                  </a>
                </div>
                
                <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow flex items-center">
                  <div className="mr-4 text-[#b22234]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <a 
                    href="/uds/Reach Surgical SSCP declaration file.pdf" 
                    download 
                    className="text-[#002b49] hover:text-[#b22234] font-medium"
                  >
                    SSCP-ENDO REACH Family (Dec 2024)
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {/* Instructions Content */}
          {activeTab === 'instructions' && (
            <div className="space-y-12 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-bold text-[#002b49] mb-6">
                  Instructions for Use Download
                </h2>
                <p className="text-gray-600 italic mb-8">(click on the file name to download)</p>
              </div>
              
              {/* Kategorilere göre dosyaları göster */}
              {Object.entries(fileCategories).map(([category, files]) => (
                <div key={category} className="mb-10">
                  <h3 className="text-xl font-semibold text-[#002b49] mb-4 border-b pb-2">
                    {category}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {files.map((file, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow flex items-center">
                        <div className="mr-4 text-[#b22234]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <a 
                          href={file.path}
                          download
                          className="text-[#002b49] hover:text-[#b22234] font-medium text-sm md:text-base"
                        >
                          {file.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 