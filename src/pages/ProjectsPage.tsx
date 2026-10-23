import React from 'react';
import { Sparkles, Calendar, Users, Music, Award, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (tab: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0CACDB] block mb-2">
          Naše činnost v terénu
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1E24] tracking-tight font-['Outfit'] mb-6">
          Projekty spolku hROM České Budějovice
        </h1>
        <p className="text-lg text-[#525A66] leading-relaxed font-normal">
          Věříme v projekty, které mají dlouhodobý smysl. Spojujeme kulturu, vzdělávání a sociální začleňování do živých akcí v ulicích i v klubovně.
        </p>
      </div>

      {/* Project 1: Příměstské tábory */}
      <section className="bg-white rounded-3xl p-8 lg:p-12 border border-[#E6E3DA] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAC503]/20 text-[#ED7503]">
              Děti & Mládež
            </span>
            <span className="text-xs text-[#525A66]">Pravidelně o letních i jarních prázdninách</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1E24] font-['Outfit']">
            Příměstské tábory v Českých Budějovicích
          </h2>

          <p className="text-sm text-[#525A66] leading-relaxed">
            Nezapomenutelné dny pro děti z různých sociálních skupin. Vytváříme prostor plný tvořivosti, sportu a přirozeného navazování přátelství.
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-[#525A66]">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FAC503]" />
              Zajištěná plná strava a pitný režim (zdravé obědy a čerstvé ovoce)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FAC503]" />
              Výlety po jihočeské přírodě a památkách
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FAC503]" />
              Profesionální dohled zkušených pedagogů a dobrovolníků
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('spoluprace')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ED7503] hover:text-[#d86400]"
            >
              <span>Chcete pomoci s táborem jako dobrovolník?</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/src/assets/images/hrom_dance_workshop_1792789912579.jpg"
            alt="Příměstský tábor v Českých Budějovicích"
            className="w-full h-80 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Project 2: EHMK 2028 & Magic Carpets */}
      <section className="bg-white rounded-3xl p-8 lg:p-12 border border-[#E6E3DA] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/src/assets/images/hrom_culture_ehmk_1792789913284.jpg"
            alt="České Budějovice EHMK 2028 a hROM"
            className="w-full h-80 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#CE2E85]/15 text-[#CE2E85]">
              Mezinárodní partnerství
            </span>
            <span className="text-xs text-[#525A66]">Evropské hlavní město kultury</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1E24] font-['Outfit']">
            České Budějovice 2028 & Magic Carpets
          </h2>

          <p className="text-sm text-[#525A66] leading-relaxed">
            Spolek hROM CB je hrdým partnerem kandidatury a příprav EHMK 2028. Do města přinášíme mezinárodní umělecké rezidence, komunitní textilní a výtvarné dílny i živá představení v historických kulisách města.
          </p>

          <p className="text-xs text-[#525A66] leading-relaxed bg-[#F6F4EE] p-4 rounded-xl border border-[#E6E3DA]">
            „Naším cílem je ukázat rozmanitost jako přednost a přiblížit romskou kulturu celému městu jako živou, pozitivní a inspirující sílu.“
          </p>
        </div>
      </section>

      {/* Project 3: Hudební & taneční dílny */}
      <section className="bg-white rounded-3xl p-8 lg:p-12 border border-[#E6E3DA] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0CACDB]/15 text-[#0CACDB]">
              Kulturní dědictví
            </span>
            <span className="text-xs text-[#525A66]">Celoroční kroužky</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1E24] font-['Outfit']">
            Taneční & hudební kroužky pro děti
          </h2>

          <p className="text-sm text-[#525A66] leading-relaxed">
            Hudba a tanec jsou pro romskou komunitu přirozeným jazykem sdílení emocí a radosti. Děti se učí tradiční i moderní choreografie, rytmiku a hru na perkusní nástroje.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-3 bg-[#F6F4EE] rounded-xl border border-[#E6E3DA]">
              <strong className="block text-[#1A1E24] font-semibold mb-1">Rytmika a perkusní dílny</strong>
              <span className="text-[#525A66]">Rozvoj citu pro rytmus a soustředění.</span>
            </div>
            <div className="p-3 bg-[#F6F4EE] rounded-xl border border-[#E6E3DA]">
              <strong className="block text-[#1A1E24] font-semibold mb-1">Taneční vystoupení</strong>
              <span className="text-[#525A66]">Pravidelná účast na slavnostech a festivalech.</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/src/assets/images/hrom_team_volunteers_1792789913176.jpg"
            alt="Příprava komunitních projektů"
            className="w-full h-80 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
};
