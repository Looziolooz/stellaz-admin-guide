"use client";

import React, { useState, useEffect } from 'react';
import { Menu, Info, CheckCircle } from 'lucide-react';
import Image from 'next/image'; // Importiamo Image
import { THEME } from '@/constants/theme';
import { GUIDE_DATA } from '@/data/guideData';

// Importazione Componenti Separati
import Sidebar from '@/components/layout/Sidebar';
import AccordionItem from '@/components/ui/Accordion';
import VideoPlayerPlaceholder from '@/components/ui/VideoPlayerPlaceholder';
import SectionHeading from '@/components/ui/SectionHeading';
import ProfileCard from '@/components/ui/ProfileCard';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>(GUIDE_DATA[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [...GUIDE_DATA.map(s => s.id), 'assistance'];
      const sections = sectionIds.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, 
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const toggleAccordion = (sectionId: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* Top Banner */}
      <div className="w-full py-2 text-center text-xs font-medium tracking-wide" style={{ backgroundColor: THEME.colors.headerBg, color: THEME.colors.primary }}>
        Official Stellaz Shopify Theme Documentation
      </div>

      <div className="flex relative">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
          {/* LOGO MOBILE AGGIORNATO */}
          <div className="relative w-32 h-10">
            <Image 
              src="/stellaz_logo_vit_1.avif" 
              alt="Stellaz" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          
          <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-600">
            <Menu />
          </button>
        </div>

        {/* Overlay for mobile sidebar */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar Component */}
        <Sidebar 
          activeSection={activeSection}
          onNavigate={scrollToSection}
          isMobileOpen={mobileMenuOpen}
          closeMobile={() => setMobileMenuOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 bg-white lg:mt-0 mt-16">
          <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            
            <div className="mb-12">
              <h1 className="text-4xl font-extrabold mb-4 tracking-tight" style={{ color: THEME.colors.primary }}>
                Implementation Guide
              </h1>
              <p className="text-lg text-gray-600">
                Welcome to the technical documentation. Here you will find video tutorials and step-by-step instructions to manage the new components of your e-commerce.
              </p>
            </div>

            <div className="space-y-24">
              {GUIDE_DATA.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24 group">
                  
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-pink-50 text-pink-500 mt-1">
                      <section.icon size={32} />
                    </div>
                    <div>
                      <SectionHeading>{section.title}</SectionHeading>
                      <p className="text-lg text-gray-500 leading-relaxed">
                        {section.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Video Area */}
                  <div className={`mb-8 grid gap-6 ${section.videos.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                    {section.videos.map((video, idx) => (
                      <div key={idx} className="shadow-2xl shadow-pink-100 rounded-xl overflow-hidden h-full">
                        <VideoPlayerPlaceholder 
                          title={video.title} 
                          videoUrl={video.url} 
                        />
                        {section.videos.length > 1 && (
                           <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                             <p className="font-semibold text-sm text-gray-700">{video.title}</p>
                           </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Accordion Instructions */}
                  <div className="bg-white rounded-xl">
                    <div className="flex items-center justify-between mb-4 px-1">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <Info size={18} className="text-pink-500" />
                        Step-by-Step Instructions
                      </h3>
                      <button 
                        onClick={() => toggleAccordion(section.id)}
                        className="text-sm font-medium text-pink-500 hover:text-pink-700 hover:underline"
                      >
                        {openAccordions[section.id] ? 'Hide details' : 'Show details'}
                      </button>
                    </div>

                    <AccordionItem 
                      title="Open Text Guide" 
                      isOpen={openAccordions[section.id] || false}
                      onToggle={() => toggleAccordion(section.id)}
                    >
                      <ul className="space-y-4">
                        {section.steps.map((step, idx) => (
                          <li key={idx} className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm">
                              {idx + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                              <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100 flex gap-3">
                        <CheckCircle className="text-blue-600 w-6 h-6 shrink-0" />
                        <p className="text-sm text-blue-800">
                          <strong>Pro Tip:</strong> Always remember to click &quot;Save&quot; in the top right of the Shopify editor after every change.
                        </p>
                      </div>
                    </AccordionItem>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-100 mt-16" />
                </div>
              ))}

              {/* ASSISTANCE SECTION */}
              <div id="assistance" className="scroll-mt-24 pt-12">
                <ProfileCard />
              </div>

            </div>

            {/* Footer Content */}
            <div className="mt-20 pt-10 border-t border-gray-200 text-center text-gray-500">
              <p>&copy; 2025 Developed by Lorenzo Dastoli.</p>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}