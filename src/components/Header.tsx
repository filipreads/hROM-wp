import React, { useState } from 'react';
import { HromLogo } from './HromLogo';
import { Menu, X, FileCode2, Globe, Facebook, Instagram } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  isWpMode: boolean;
  onToggleWpMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  isWpMode,
  onToggleWpMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'domu', label: 'Úvod' },
    { id: 'o-nas', label: 'O nás & Tým' },
    { id: 'projekty', label: 'Projekty' },
    { id: 'spoluprace', label: 'Spolupráce' },
    { id: 'dokumenty', label: 'Dokumenty' },
    { id: 'aktuality', label: 'Aktuality' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  return (
    <>
      {/* Top operational ribbon */}
      <div className="bg-[#151921] text-white text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white/60 hidden sm:inline">hROM České Budějovice, z.s. · IČO 08462399</span>
          <span className="text-white/40 hidden sm:inline">|</span>
          <a href="mailto:hrom.cb@gmail.com" className="text-white/80 hover:text-[#0CACDB] transition-colors">
            hrom.cb@gmail.com
          </a>
          <span className="text-white/40">|</span>
          <a href="tel:+420721305009" className="text-white/80 hover:text-[#FAC503] transition-colors">
            +420 721 305 009
          </a>
        </div>

        {/* Social Media Links (Facebook & Instagram) */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/hromcb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="hROM České Budějovice na Facebooku"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-[#1877F2] text-white transition-all shadow-sm hover:shadow-md"
          >
            <Facebook className="w-3.5 h-3.5 fill-current" />
            <span className="font-medium">Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/hromcb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="hROM České Budějovice na Instagramu"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] text-white transition-all shadow-sm hover:shadow-md"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FDFDFC]/95 backdrop-blur-md border-b border-[#E6E3DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Logo */}
          <button
            onClick={() => {
              if (isWpMode) onToggleWpMode();
              onNavigate('domu');
            }}
            className="flex items-center gap-3 text-left group shrink-0 focus:outline-none"
          >
            <HromLogo size="md" />
          </button>

          {/* Zone 2: 4-5 Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#1A1E24]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (isWpMode) onToggleWpMode();
                  onNavigate(link.id);
                }}
                className={`py-1 whitespace-nowrap shrink-0 transition-colors relative hover:text-[#0CACDB] ${
                  currentTab === link.id && !isWpMode
                    ? 'text-[#ED7503] font-bold'
                    : 'text-[#1A1E24]'
                }`}
              >
                {link.label}
                {currentTab === link.id && !isWpMode && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ED7503] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (isWpMode) onToggleWpMode();
                onNavigate('darci');
              }}
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#ED7503] rounded-full hover:bg-[#d86400] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              Podpořit nás
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1A1E24] hover:bg-[#F6F4EE] transition-colors focus:outline-none"
              aria-label="Přepnout menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E6E3DA] bg-[#FDFDFC] px-4 pt-3 pb-6 shadow-xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    if (isWpMode) onToggleWpMode();
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentTab === link.id && !isWpMode
                      ? 'bg-[#ED7503]/10 text-[#ED7503] font-bold'
                      : 'text-[#1A1E24] hover:bg-[#F6F4EE]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[#E6E3DA] flex flex-col gap-2 mt-2">
                <button
                  onClick={() => {
                    onToggleWpMode();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-[#1A1E24] bg-[#F6F4EE] border border-[#E6E3DA] rounded-xl hover:bg-[#eae6dc]"
                >
                  <FileCode2 className="w-4 h-4 text-[#ED7503]" />
                  <span>{isWpMode ? 'Zpět na web hROM' : 'WordPress PHP šablona & ZIP'}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
