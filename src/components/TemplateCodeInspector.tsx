import React, { useState } from 'react';
import { WP_THEME_FILES, WPThemeFile } from '../data/wpThemeFiles';
import { X, Copy, Check, FileCode, ExternalLink, Download } from 'lucide-react';
import { downloadWordPressThemeZip } from '../utils/zipGenerator';

interface TemplateCodeInspectorProps {
  currentTab: string;
  onClose: () => void;
}

export const TemplateCodeInspector: React.FC<TemplateCodeInspectorProps> = ({
  currentTab,
  onClose,
}) => {
  const fileMapping: Record<string, string> = {
    domu: 'front-page.php',
    'o-nas': 'page-o-nas.php',
    projekty: 'front-page.php',
    spoluprace: 'page-spoluprace.php',
    dokumenty: 'page-dokumenty.php',
    aktuality: 'style.css',
    kontakt: 'page-kontakt.php',
    darci: 'front-page.php',
  };

  const initialFilename = fileMapping[currentTab] || 'front-page.php';
  const [selectedFilename, setSelectedFilename] = useState<string>(initialFilename);
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const currentFile =
    WP_THEME_FILES.find((f) => f.filename === selectedFilename) || WP_THEME_FILES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadWordPressThemeZip();
    } finally {
      setIsDownloading(false);
    }
  };

  const quickFiles = [
    'front-page.php',
    'page-o-nas.php',
    'page-spoluprace.php',
    'page-kontakt.php',
    'functions.php',
    'header.php',
    'footer.php',
    'style.css',
  ];

  return (
    <div className="w-full lg:w-[480px] xl:w-[540px] shrink-0 bg-[#12151B] text-white border-l border-white/10 flex flex-col h-full shadow-2xl z-40 animate-in slide-in-from-right-4 duration-300">
      {/* Inspector Header */}
      <div className="p-4 bg-[#1A1E24] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-[#0CACDB]" />
          <h2 className="text-sm font-bold text-white font-['Outfit']">
            WordPress PHP Inspektor
          </h2>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          title="Zavřít inspektor"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Quick File Switcher */}
      <div className="p-3 bg-[#161B22] border-b border-white/10 overflow-x-auto flex items-center gap-1.5 scrollbar-thin">
        {quickFiles.map((fn) => (
          <button
            key={fn}
            onClick={() => setSelectedFilename(fn)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap transition-colors ${
              selectedFilename === fn
                ? 'bg-[#ED7503] text-white font-bold shadow-sm'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            {fn}
          </button>
        ))}
      </div>

      {/* File Meta Info */}
      <div className="px-4 py-2.5 bg-[#0F1217] border-b border-white/10 flex items-center justify-between text-xs">
        <div>
          <span className="font-mono text-[#FAC503] font-bold">{currentFile.filename}</span>
          <span className="text-white/40 ml-2 hidden sm:inline">{currentFile.description}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium text-[11px] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Zkopírováno</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-white/80" />
                <span>Kopírovat</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Viewer */}
      <div className="flex-1 overflow-auto p-4 font-mono text-[11px] sm:text-xs text-slate-300 leading-relaxed bg-[#0B0D11] select-text">
        <pre>
          <code>{currentFile.code}</code>
        </pre>
      </div>

      {/* Bottom Action Footer */}
      <div className="p-3.5 bg-[#161B22] border-t border-white/10 flex items-center justify-between gap-3 text-xs">
        <span className="text-white/60 text-[11px]">
          Čistý PHP kód · WP 6.0+ · PageSpeed 95+
        </span>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ED7503] hover:bg-[#d86400] text-white font-bold text-xs transition-colors shadow-sm"
        >
          <Download className="w-3 h-3" />
          <span>{isDownloading ? 'Příprava...' : 'Stáhnout celou šablonu (ZIP)'}</span>
        </button>
      </div>
    </div>
  );
};
