import React, { useState } from 'react';
import { WP_THEME_FILES, WPThemeFile } from '../data/wpThemeFiles';
import { downloadWordPressThemeZip } from '../utils/zipGenerator';
import { 
  FileCode, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Layout, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink,
  Layers,
  Zap
} from 'lucide-react';

export const WordPressThemeViewer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<WPThemeFile>(WP_THEME_FILES[0]);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'guide'>('code');

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadWordPressThemeZip();
    } catch (err) {
      console.error(err);
    } finally {
      setDownloading(false);
    }
  };

  const categories = [
    { id: 'core', label: 'Jádro šablony' },
    { id: 'template', label: 'Šablony stránek' },
    { id: 'doc', label: 'Dokumentace' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Banner & Header */}
      <div className="bg-gradient-to-r from-[#1A1E24] via-[#242A33] to-[#1A1E24] rounded-3xl p-8 text-white mb-8 shadow-xl border border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ED7503]/20 text-[#FAC503] border border-[#FAC503]/30">
                Oficiální balíček pro https://hromcb.cz
              </span>
              <span className="text-white/40">·</span>
              <span className="text-xs text-white/60">Čistá samostatná PHP šablona</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              WordPress šablona pro spolek hROM CB
            </h1>
            <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl">
              Nezávislá, bleskově rychlá šablona postavená na barvách z dodaného loga{' '}
              <code className="text-[#0CACDB] font-mono text-xs bg-black/30 px-1.5 py-0.5 rounded">hrom_logo.svg</code> a
              inspiraci humanistickým designem <span className="text-[#FAC503] font-medium">slovo21.cz</span>. Zcela bez zátěže Elementoru.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ED7503] hover:bg-[#d86400] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Generuji archiv...' : 'Stáhnout hromcb-theme.zip'}</span>
            </button>

            <button
              onClick={() => setActiveTab(activeTab === 'code' ? 'guide' : 'code')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/15"
            >
              <HelpCircle className="w-4 h-4 text-[#0CACDB]" />
              <span>{activeTab === 'code' ? 'Návod k instalaci' : 'Zobrazit soubory kódu'}</span>
            </button>
          </div>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FAC503]" />
            <span>Google PageSpeed 95+</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Bez Elementoru / Astry</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#0CACDB]" />
            <span>7 medailonků týmu z XML</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-[#CE2E85]" />
            <span>PHP 8.0+ & WP 6.7</span>
          </div>
        </div>
      </div>

      {activeTab === 'guide' ? (
        /* Installation & Transition Guide */
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6E3DA] shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-[#1A1E24] mb-6 font-['Outfit']">
            Návod k instalaci a přechodu z Elementoru
          </h2>

          <div className="space-y-8 max-w-4xl">
            <div className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-full bg-[#ED7503] text-white font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1E24] mb-1">
                  Stažení a nahrání ZIP balíčku do WordPressu
                </h3>
                <p className="text-sm text-[#525A66] leading-relaxed mb-3">
                  Klikněte na tlačítko <strong>„Stáhnout hromcb-theme.zip“</strong>. V administraci WordPress přejděte do:{' '}
                  <code className="text-xs bg-slate-100 p-1 rounded font-mono">Vzhled → Šablony → Přidat novou šablonu → Nahrát šablonu</code>.
                  Vyberte stažený ZIP a klikněte na <strong>Instalovat</strong> a poté <strong>Aktivovat</strong>.
                </p>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                  Tip: Pokud používáte FTP / SSH přístup k hostingu, stačí složku rozbalit do{' '}
                  <code className="font-mono">/wp-content/themes/hromcb/</code>.
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-full bg-[#0CACDB] text-white font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1E24] mb-1">
                  Nastavení úvodní stránky a aktualit
                </h3>
                <p className="text-sm text-[#525A66] leading-relaxed">
                  V administraci WordPress otevřete <code className="text-xs bg-slate-100 p-1 rounded font-mono">Nastavení → Zobrazování</code>:
                </p>
                <ul className="list-disc list-inside text-sm text-[#525A66] mt-2 space-y-1">
                  <li><strong>Úvodní stránka:</strong> Zvolte statickou stránku <em>„Domů“</em> (automaticky použije <code className="text-xs font-mono">front-page.php</code>).</li>
                  <li><strong>Stránka příspěvků:</strong> Zvolte <em>„Aktuality“</em> (automaticky použije <code className="text-xs font-mono">index.php</code>).</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-full bg-[#669538] text-white font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1E24] mb-1">
                  Přiřazení šablon jednotlivým stránkám
                </h3>
                <p className="text-sm text-[#525A66] leading-relaxed">
                  V sekci <code className="text-xs bg-slate-100 p-1 rounded font-mono">Stránky</code> otevřete každou podstránku a v pravém panelu v sekci <strong>Atributy stránky → Šablona</strong> zvolte:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900">Stránka „O nás“</strong>
                    <span className="text-slate-600 font-mono">Šablona: O nás (page-o-nas.php)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900">Stránka „Spolupráce“</strong>
                    <span className="text-slate-600 font-mono">Šablona: Chci spolupracovat (page-spoluprace.php)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900">Stránka „Dokumenty“</strong>
                    <span className="text-slate-600 font-mono">Šablona: Dokumenty (page-dokumenty.php)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900">Stránka „Kontakt“</strong>
                    <span className="text-slate-600 font-mono">Šablona: Kontakt (page-kontakt.php)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-full bg-[#1A1E24] text-white font-bold flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1E24] mb-1">
                  Bezpečná deaktivace pluginu Elementor
                </h3>
                <p className="text-sm text-[#525A66] leading-relaxed mb-3">
                  Tato nová šablona má veškeré HTML, CSS a skripty přímo v PHP šablonách. Původní plugin Elementor již není pro chod webu potřeba a můžete ho v sekci <code className="text-xs bg-slate-100 p-1 rounded font-mono">Pluginy</code> deaktivovat.
                </p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
                  ✓ Výsledek: Web se zrychlí přibližně o 60–80 %, klesne zátěž databáze i hostingu a odpadnou starosti s neustálými aktualizacemi Elementor doplňků.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Code Inspector View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* File Explorer Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#E6E3DA] p-4 shadow-sm">
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#E6E3DA] mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#525A66]">
                Soubory šablony ({WP_THEME_FILES.length})
              </span>
              <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                PHP / CSS / JSON
              </span>
            </div>

            <div className="space-y-4">
              {categories.map((cat) => {
                const files = WP_THEME_FILES.filter((f) => f.category === cat.id);
                if (files.length === 0) return null;

                return (
                  <div key={cat.id}>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1.5">
                      {cat.label}
                    </div>
                    <div className="space-y-1">
                      {files.map((file) => {
                        const isSelected = selectedFile.filename === file.filename;
                        return (
                          <button
                            key={file.filename}
                            onClick={() => setSelectedFile(file)}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition-colors ${
                              isSelected
                                ? 'bg-[#ED7503]/10 text-[#ED7503] font-bold border border-[#ED7503]/30'
                                : 'text-[#1A1E24] hover:bg-[#F6F4EE]'
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate">
                              {file.filename.endsWith('.php') ? (
                                <FileCode className="w-3.5 h-3.5 text-[#0CACDB] shrink-0" />
                              ) : file.filename.endsWith('.css') ? (
                                <Layout className="w-3.5 h-3.5 text-[#CE2E85] shrink-0" />
                              ) : (
                                <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                              )}
                              <span className="truncate">{file.filename}</span>
                            </div>
                            {isSelected && <span className="text-[10px] text-[#ED7503] font-bold">Aktivní</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Code Viewer Panel */}
          <div className="lg:col-span-8 bg-[#151921] rounded-2xl border border-white/10 shadow-xl overflow-hidden flex flex-col">
            {/* Top Toolbar */}
            <div className="bg-[#1C222C] px-5 py-3 border-b border-white/10 flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="font-mono font-bold text-white text-sm">
                  {selectedFile.filename}
                </span>
                <span className="text-white/50 text-xs ml-3 hidden sm:inline">
                  {selectedFile.description}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/10"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Zkopírováno!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white/70" />
                      <span>Kopírovat kód</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4 sm:p-6 overflow-x-auto max-h-[580px] bg-[#12151B]">
              <pre className="font-mono text-xs sm:text-[13px] text-slate-200 leading-relaxed">
                <code>{selectedFile.code}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
