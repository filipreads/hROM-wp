import React, { useState } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Code2, 
  Download, 
  FileCode, 
  ExternalLink, 
  Check, 
  Sparkles, 
  Maximize2, 
  Minimize2, 
  Eye, 
  Info, 
  ChevronUp, 
  ChevronDown 
} from 'lucide-react';
import { WP_THEME_FILES, WPThemeFile } from '../data/wpThemeFiles';

export type DeviceType = 'desktop' | 'tablet' | 'mobile';

export interface ThemeCustomizerSettings {
  accentColor: string;
  borderRadius: 'sm' | 'md' | 'lg';
  stickyHeader: boolean;
}

interface PrototypeBarProps {
  device: DeviceType;
  onDeviceChange: (device: DeviceType) => void;
  currentTab: string;
  onNavigate: (tab: string) => void;
  showCodeSplit: boolean;
  onToggleCodeSplit: () => void;
  showCustomizer?: boolean;
  onToggleCustomizer?: () => void;
  settings?: ThemeCustomizerSettings;
  onUpdateSettings?: (settings: Partial<ThemeCustomizerSettings>) => void;
  onDownloadZip: () => void;
  isDownloading: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const PrototypeBar: React.FC<PrototypeBarProps> = ({
  device,
  onDeviceChange,
  currentTab,
  onNavigate,
  showCodeSplit,
  onToggleCodeSplit,
  showCustomizer,
  onToggleCustomizer,
  settings,
  onUpdateSettings,
  onDownloadZip,
  isDownloading,
  isFullscreen,
  onToggleFullscreen,
}) => {
  // Mapping current tab to WordPress template
  const templateMap: Record<string, { file: string; name: string }> = {
    domu: { file: 'front-page.php', name: 'Úvodní strana (front-page.php)' },
    'o-nas': { file: 'page-o-nas.php', name: 'Šablona O nás (page-o-nas.php)' },
    projekty: { file: 'front-page.php', name: 'Šablona projektů (front-page.php)' },
    spoluprace: { file: 'page-spoluprace.php', name: 'Šablona Spolupráce (page-spoluprace.php)' },
    dokumenty: { file: 'page-dokumenty.php', name: 'Šablona Dokumenty (page-dokumenty.php)' },
    aktuality: { file: 'index.php', name: 'Archiv aktualit (index.php)' },
    kontakt: { file: 'page-kontakt.php', name: 'Šablona Kontakt (page-kontakt.php)' },
    darci: { file: 'front-page.php', name: 'Dárcovský modul (front-page.php)' },
  };

  const activeTemplate = templateMap[currentTab] || { file: 'front-page.php', name: 'front-page.php' };

  const colorOptions = [
    { name: 'Teplá oranžová (Logo)', hex: '#ED7503' },
    { name: 'Romská azurová (Logo)', hex: '#0CACDB' },
    { name: 'Kulturní magenta (Logo)', hex: '#CE2E85' },
    { name: 'Zlaté slunce (Logo)', hex: '#FAC503' },
    { name: 'Luční zelená (Logo)', hex: '#669538' },
  ];

  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isCollapsed) {
    return (
      <div className="bg-[#1A1E24]/95 backdrop-blur-md text-white border-b border-white/10 sticky top-0 z-[100] shadow-md transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-[11px] text-white/90 font-['Outfit'] tracking-wide">
              NÁHLEDOVÝ PROTOTYP
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[#FAC503] font-mono text-[11px] font-bold">{activeTemplate.file}</span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="text-white/60 text-[11px] hidden sm:inline capitalize">{device}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCollapsed(false)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#ED7503] hover:bg-[#d86400] text-white text-xs font-bold transition-all shadow-sm"
              title="Rozbalit lištu prototypu"
            >
              <ChevronDown className="w-3.5 h-3.5" />
              <span>Rozbalit ovládání prototypu</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1A1E24] text-white border-b border-white/10 sticky top-0 z-[100] shadow-md transition-all">
      {/* Top Main Prototyping Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3 flex-wrap">
        {/* Left: Prototype Status & Current Template Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-extrabold text-xs sm:text-sm font-['Outfit'] tracking-wide text-white">
              NÁHLEDOVÝ PROTOTYP
            </span>
          </div>

          <span className="text-white/30 hidden sm:inline">|</span>

          {/* WordPress Active Template Badge */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-xs font-mono text-white/90">
            <FileCode className="w-3.5 h-3.5 text-[#0CACDB]" />
            <span className="text-white/60">WP šablona:</span>
            <strong className="text-[#FAC503]">{activeTemplate.file}</strong>
          </div>
        </div>

        {/* Center: Device Viewport Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10">
          <button
            onClick={() => onDeviceChange('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              device === 'desktop'
                ? 'bg-[#ED7503] text-white shadow-sm'
                : 'text-white/60 hover:text-white'
            }`}
            title="Desktop náhled (1440px)"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>

          <button
            onClick={() => onDeviceChange('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              device === 'tablet'
                ? 'bg-[#ED7503] text-white shadow-sm'
                : 'text-white/60 hover:text-white'
            }`}
            title="Tablet iPad (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tablet</span>
          </button>

          <button
            onClick={() => onDeviceChange('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              device === 'mobile'
                ? 'bg-[#ED7503] text-white shadow-sm'
                : 'text-white/60 hover:text-white'
            }`}
            title="Mobil iPhone (390px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mobil</span>
          </button>
        </div>

        {/* Right: Tools & Actions */}
        <div className="flex items-center gap-2">
          {/* Code Split-View Toggle */}
          <button
            onClick={onToggleCodeSplit}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              showCodeSplit
                ? 'bg-[#CE2E85] text-white border-[#CE2E85]'
                : 'bg-white/10 text-white/80 border-white/10 hover:bg-white/20'
            }`}
            title="Zobrazit PHP kód aktuální šablony vedle náhledu"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">PHP Kód</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 border border-white/10 transition-colors"
            title={isFullscreen ? 'Zmenšit zobrazení' : 'Plná obrazovka'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* Quick ZIP download */}
          <button
            onClick={onDownloadZip}
            disabled={isDownloading}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FAC503] hover:bg-[#e6b400] text-[#1A1E24] font-bold text-xs shadow-sm transition-all focus:outline-none"
            title="Stáhnout kompletní ZIP balíček šablony pro WordPress"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isDownloading ? 'Příprava...' : 'Stáhnout ZIP'}</span>
          </button>

          {/* Collapse Bar Toggle */}
          <button
            onClick={() => setIsCollapsed(true)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 border border-white/10 text-xs font-semibold transition-colors"
            title="Sbalit lištu prototypu pro nerušené zobrazení webu"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">Sbalit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
