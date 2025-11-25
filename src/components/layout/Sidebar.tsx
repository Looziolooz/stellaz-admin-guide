import React from 'react';
import { X, HelpCircle } from 'lucide-react';
import { THEME } from '@/constants/theme';
import { GUIDE_DATA } from '@/data/guideData';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  isMobileOpen: boolean;
  closeMobile: () => void;
}

export default function Sidebar({ activeSection, onNavigate, isMobileOpen, closeMobile }: SidebarProps) {
  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-40 w-72 bg-white transform transition-transform duration-300 ease-in-out border-r border-gray-200 lg:translate-x-0 lg:sticky lg:h-screen lg:top-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="h-full flex flex-col">
        {/* Logo Area */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight" style={{ color: THEME.colors.primary }}>
            stellaz<span className="text-pink-400">.</span>
          </div>
          <button onClick={closeMobile} className="lg:hidden p-1 rounded hover:bg-gray-100">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Shopify Components
          </div>
          
          {GUIDE_DATA.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                onNavigate(section.id);
                closeMobile();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                activeSection === section.id 
                  ? 'bg-pink-50 font-medium shadow-sm' 
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
              style={{ 
                color: activeSection === section.id ? THEME.colors.primary : undefined,
                borderLeft: activeSection === section.id ? `4px solid ${THEME.colors.accent}` : '4px solid transparent'
              }}
            >
              <section.icon size={20} className={activeSection === section.id ? 'text-pink-500' : 'text-gray-400'} />
              <span>{section.title}</span>
            </button>
          ))}

          {/* New Assistance Link */}
          <div className="pt-4 mt-4 border-t border-gray-100">
             <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
                Support
              </div>
            <button
              onClick={() => {
                onNavigate('assistance');
                closeMobile();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                activeSection === 'assistance' 
                  ? 'bg-blue-50 font-medium shadow-sm' 
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
              style={{ 
                color: activeSection === 'assistance' ? THEME.colors.primary : undefined,
                borderLeft: activeSection === 'assistance' ? `4px solid #5F9EA0` : '4px solid transparent'
              }}
            >
              <HelpCircle size={20} className={activeSection === 'assistance' ? 'text-[#5F9EA0]' : 'text-gray-400'} />
              <span>Need Help?</span>
            </button>
          </div>
        </nav>

        {/* Footer Sidebar */}
        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold">
              LD
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Lorenzo Dastoli</p>
              <p className="text-xs text-gray-500">Dev Admin</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}