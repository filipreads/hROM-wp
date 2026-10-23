import React from 'react';
import { HromLogo } from './HromLogo';
import { Mail, Phone, MapPin, Download, Heart } from 'lucide-react';
import { downloadWordPressThemeZip } from '../utils/zipGenerator';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenWpViewer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWpViewer }) => {
  const handleZipDownload = async () => {
    try {
      await downloadWordPressThemeZip();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <footer className="bg-[#111418] text-[#A4AFBD] pt-16 pb-12 border-t-4 border-[#ED7503]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Identity */}
          <div>
            <div className="mb-4">
              <HromLogo size="md" inverted={true} />
            </div>
            <p className="text-sm leading-relaxed text-slate-300 mb-6">
              Spolek pro podporu romské komunity, dětí a rodin v Českých Budějovicích a Jihočeském kraji.
              Vytváříme bezpečný prostor pro otevřený dialog, vzájemný respekt a rovné šance.
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleZipDownload}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/10"
              >
                <Download className="w-3.5 h-3.5 text-[#FAC503]" />
                <span>Stáhnout WP šablonu (.ZIP)</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 font-['Outfit']">Navigace</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('domu')}
                  className="hover:text-white transition-colors"
                >
                  Úvodní stránka
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('o-nas')}
                  className="hover:text-white transition-colors"
                >
                  O nás & Náš tým
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projekty')}
                  className="hover:text-white transition-colors"
                >
                  Projekty & Činnost
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('spoluprace')}
                  className="hover:text-white transition-colors"
                >
                  Dobrovolnictví & Spolupráce
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dokumenty')}
                  className="hover:text-white transition-colors"
                >
                  Výroční zprávy & SDGs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('aktuality')}
                  className="hover:text-white transition-colors"
                >
                  Aktuality & Články
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kontakt')}
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWpViewer}
                  className="text-[#0CACDB] hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Prohlížeč WordPress kódu</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Info & Headquarters */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 font-['Outfit']">Sídlo & Registrace</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ED7503] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">hROM CB z.s.</strong>
                  <span>Kvítkovice č.ev. 29</span>
                  <br />
                  <span>373 84 Kvítkovice</span>
                  <br />
                  <span className="text-xs text-slate-400">Jihočeský kraj, ČR</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="text-xs text-slate-400">Identifikační číslo (IČO):</div>
                <div className="font-mono font-bold text-white text-base">08462399</div>
                <div className="text-xs text-slate-400 mt-1">Zapsáno ve spolkovém rejstříku</div>
              </div>
            </div>
          </div>

          {/* Col 4: Contacts & CTA */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 font-['Outfit']">Kontaktujte nás</h3>
            <div className="space-y-2.5 text-sm mb-5">
              <a
                href="mailto:hrom.cb@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0CACDB] shrink-0" />
                <span>hrom.cb@gmail.com</span>
              </a>
              <a
                href="tel:+420721305009"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FAC503] shrink-0" />
                <span>+420 721 305 009</span>
              </a>
              <a
                href="tel:+420605783196"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FAC503] shrink-0" />
                <span>+420 605 783 196</span>
              </a>
            </div>

            <button
              onClick={() => onNavigate('darci')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#ED7503] hover:bg-[#d86400] text-white font-bold text-xs rounded-xl transition-all shadow-md"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Podpořit darem</span>
            </button>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} hROM České Budějovice, z.s. Všechna práva vyhrazena.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#0CACDB]">Inspirace: slovo21.cz</span>
            <span>·</span>
            <span>Čistá PHP WordPress šablona</span>
            <span>·</span>
            <span>Ochrana osobních údajů (GDPR)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
