import React from 'react';
import { DonationBox } from '../components/DonationBox';
import { ARTICLES, Article } from '../data/newsData';
import { 
  Users, 
  Sparkles, 
  Award, 
  ArrowRight, 
  Music, 
  HeartHandshake, 
  Compass, 
  Calendar,
  Layers
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenArticle: (article: Article) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenArticle }) => {
  const latestArticles = ARTICLES.slice(0, 3);

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-14 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F4EE] border border-[#E6E3DA] text-xs font-bold text-[#ED7503] uppercase tracking-wider mb-6">
                <Compass className="w-3.5 h-3.5" />
                <span>hROM České Budějovice, z.s.</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-[#1A1E24] tracking-tight leading-[1.12] mb-6 font-['Outfit']">
                Spojujeme zdánlivě{' '}
                <span className="bg-gradient-to-r from-[#ED7503] via-[#CE2E85] to-[#0CACDB] bg-clip-text text-transparent">
                  nespojitelné světy
                </span>{' '}
                a boříme předsudky.
              </h1>

              <p className="text-[#525A66] text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
                Není nám jedno, že žijeme ve světě, kde se lidé posuzují podle vzhledu či původu. V Českých Budějovicích vytváříme bezpečný prostor pro otevřený dialog, vzájemné pochopení a sebevědomou komunitu.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('o-nas')}
                  className="px-6 py-3.5 rounded-full bg-[#ED7503] hover:bg-[#d86400] text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <span>Poznejte náš tým</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('spoluprace')}
                  className="px-6 py-3.5 rounded-full bg-[#F6F4EE] hover:bg-[#eae6dc] text-[#1A1E24] border border-[#E6E3DA] font-semibold text-sm transition-all"
                >
                  Chci se zapojit
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#E6E3DA]">
                <div>
                  <div className="font-['Outfit'] font-bold text-2xl text-[#1A1E24]">100+</div>
                  <div className="text-xs text-[#525A66] mt-0.5">dětí v aktivitách</div>
                </div>
                <div>
                  <div className="font-['Outfit'] font-bold text-2xl text-[#0CACDB]">2028</div>
                  <div className="text-xs text-[#525A66] mt-0.5">partner EHMK</div>
                </div>
                <div>
                  <div className="font-['Outfit'] font-bold text-2xl text-[#669538]">7</div>
                  <div className="text-xs text-[#525A66] mt-0.5">členů týmu</div>
                </div>
              </div>
            </div>

            {/* Right Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E6E3DA] group">
                <img
                  src="/src/assets/images/hrom_hero_community_1792789911839.jpg"
                  alt="Komunitní tvoření v hROM České Budějovice"
                  className="w-full h-[440px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[11px] font-bold text-[#FAC503] w-fit mb-2">
                    <Sparkles className="w-3 h-3" />
                    České Budějovice
                  </div>
                  <h3 className="font-bold text-lg text-white font-['Outfit']">
                    Společné komunitní tvoření
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    Místo, kde se potkávají lidé všech generací a kultur bez předsudků.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section (Inspirace Slovo 21) */}
      <section className="bg-[#F6F4EE] py-16 sm:py-20 border-y border-[#E6E3DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ED7503] block mb-2">
              Naše poslání
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1E24] font-['Outfit']">
              Čemu se v Českých Budějovicích věnujeme
            </h2>
            <p className="text-[#525A66] text-base mt-3">
              Konkrétní kroky, kterými otevíráme společnost, posilujeme rodiny a podporujeme mladou generaci v rozvoji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1: Romská komunita */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#E6E3DA] border-t-4 border-t-[#0CACDB] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0CACDB]/10 text-[#0CACDB] flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1E24] mb-3 font-['Outfit']">
                Romská komunita
              </h3>
              <p className="text-sm text-[#525A66] leading-relaxed">
                Upevňování romské identity, podpora rodin a vytváření bezpečného prostoru pro vzájemné porozumění a rovnocenný dialog ve městě.
              </p>
            </div>

            {/* Pillar 2: Děti & Mládež */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#E6E3DA] border-t-4 border-t-[#FAC503] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FAC503]/20 text-[#ED7503] flex items-center justify-center mb-5">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1E24] mb-3 font-['Outfit']">
                Děti & Mládež
              </h3>
              <p className="text-sm text-[#525A66] leading-relaxed">
                Pravidelné taneční a hudební aktivity, příměstské tábory a tvořivé workshopy. Učíme děti respektu, empatii a radosti ze společného tvoření.
              </p>
            </div>

            {/* Pillar 3: Kultura & EHMK 2028 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#E6E3DA] border-t-4 border-t-[#CE2E85] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#CE2E85]/10 text-[#CE2E85] flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1E24] mb-3 font-['Outfit']">
                Kultura & EHMK 2028
              </h3>
              <p className="text-sm text-[#525A66] leading-relaxed">
                Aktivní partnerství projektu České Budějovice – Evropské hlavní město kultury 2028 a programu Magic Carpets s mezinárodní účastí.
              </p>
            </div>

            {/* Pillar 4: Dobrovolnictví */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#E6E3DA] border-t-4 border-t-[#669538] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#669538]/10 text-[#669538] flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1E24] mb-3 font-['Outfit']">
                Dobrovolnictví
              </h3>
              <p className="text-sm text-[#525A66] leading-relaxed">
                Vytváříme stabilní zázemí pro dobrovolníky a dobrovolnice, kteří chtějí věnovat svůj čas a energii smysluplným společenským změnám.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1A1E24] text-white p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-wider text-[#FAC503] font-bold block mb-2">
              Dopad naší práce
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Outfit'] mb-4">
              Za každým číslem stojí skutečný lidský příběh
            </h2>
            <p className="text-white/70 text-base max-w-xl mx-auto mb-10">
              Věříme v sílu osobního setkání, důstojnost každého člověka a dlouhodobou systematickou práci v terénu.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              <div>
                <span className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl text-[#FAC503] block mb-2">
                  100+
                </span>
                <span className="text-xs sm:text-sm text-white/80">
                  dětí v tanečních a volnočasových aktivitách
                </span>
              </div>
              <div>
                <span className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl text-[#0CACDB] block mb-2">
                  2028
                </span>
                <span className="text-xs sm:text-sm text-white/80">
                  partner Evropského hlavního města kultury
                </span>
              </div>
              <div>
                <span className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl text-[#ED7503] block mb-2">
                  7
                </span>
                <span className="text-xs sm:text-sm text-white/80">
                  členů kmenového koordinačního týmu
                </span>
              </div>
              <div>
                <span className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl text-[#669538] block mb-2">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-white/80">
                  otevřené srdce pro každého bez rozdílu
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News / Aktuality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0CACDB] block mb-1">
              Co se děje
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1E24] font-['Outfit']">
              Aktuality ze spolku hROM
            </h2>
          </div>
          <button
            onClick={() => onNavigate('aktuality')}
            className="text-sm font-bold text-[#ED7503] hover:text-[#d86400] flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Všechny články</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="bg-white rounded-2xl overflow-hidden border border-[#E6E3DA] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer flex flex-col group"
            >
              <div className="h-52 overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-[#525A66] mb-3">
                  <span className="font-bold text-[#0CACDB] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-lg font-bold text-[#1A1E24] group-hover:text-[#ED7503] transition-colors leading-snug mb-2 font-['Outfit']">
                  {article.title}
                </h3>

                <p className="text-sm text-[#525A66] line-clamp-3 mb-4 flex-1">
                  {article.lead}
                </p>

                <div className="flex items-center text-xs font-bold text-[#ED7503] gap-1 mt-auto">
                  <span>Přečíst celý článek</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Donation Box with QR Platba */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DonationBox id="darci" />
      </div>
    </div>
  );
};
