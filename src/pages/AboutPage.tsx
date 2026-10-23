import React from 'react';
import { TEAM_MEMBERS } from '../data/teamData';
import { Mail, Phone, Heart, Quote, Compass } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      {/* Intro & Story */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#ED7503] block mb-2">
          Kdo jsme a proč tu jsme
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1E24] tracking-tight font-['Outfit'] mb-6">
          O spolku hROM České Budějovice
        </h1>
        <p className="text-lg text-[#525A66] leading-relaxed mb-6 font-normal">
          Tím, co děláme, propojujeme zdánlivě nespojitelné, rozdílné, názorově odlišné světy, komunity i jednotlivce. Není nám jedno, že žijeme ve světě, ve kterém se lidé posuzují na základě toho, jak vypadají, kam podle toho patří a jací díky tomu „jsou“.
        </p>
      </div>

      {/* Vision & Mission Banner */}
      <div className="bg-[#F6F4EE] rounded-3xl p-8 md:p-12 border border-[#E6E3DA] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="w-10 h-10 rounded-xl bg-[#0CACDB]/10 text-[#0CACDB] flex items-center justify-center mb-4">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-[#1A1E24] mb-3 font-['Outfit']">
            Naše poslání a vize
          </h2>
          <p className="text-sm text-[#525A66] leading-relaxed">
            hROM CB z.s. spolupracuje s lokálními, regionálními i národními partnery, komunitami a jednotlivci na vytvoření bezpečného prostředí ve společnosti, která vytváří příležitosti pro pochopení rozdílností mezi lidmi a podporuje vzájemný otevřený dialog.
          </p>
        </div>

        <div className="space-y-3.5 text-sm">
          <div className="bg-white p-4 rounded-xl border border-[#E6E3DA] flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ED7503] mt-1.5 shrink-0" />
            <div>
              <strong className="block text-[#1A1E24] font-semibold">Respekt k identitě</strong>
              <span className="text-xs text-[#525A66]">
                Podporujeme romské sebevědomí, kulturu a tradice jako bohatství pro celou společnost.
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E6E3DA] flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FAC503] mt-1.5 shrink-0" />
            <div>
              <strong className="block text-[#1A1E24] font-semibold">Důraz na novou generaci</strong>
              <span className="text-xs text-[#525A66]">
                Věříme, že vzdělání, tanec a tvůrčí činnost dávají dětem sílu a zdravé sebevědomí do života.
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#E6E3DA] flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#669538] mt-1.5 shrink-0" />
            <div>
              <strong className="block text-[#1A1E24] font-semibold">Stavění mostů místo zdí</strong>
              <span className="text-xs text-[#525A66]">
                Odmítáme generalizaci a paušální odsudky. Zveme každého ke společnému stolu.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0CACDB] block mb-2">
            Lidé v hROMu
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1E24] font-['Outfit']">
            Náš koordinační tým
          </h2>
          <p className="text-[#525A66] text-sm sm:text-base mt-2">
            Tváře, které stojí za našimi dílnami, tábory, kulturními projekty i každodenním chodem spolku.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E6E3DA] shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="h-72 overflow-hidden bg-slate-100 relative">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md"
                    style={{ backgroundColor: member.badgeColor }}
                  >
                    {member.role}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#1A1E24] font-['Outfit'] mb-2">
                  {member.name}
                </h3>

                {/* Quote */}
                <div className="relative pl-6 mb-4 text-xs italic text-[#525A66] border-l-2 border-[#E6E3DA]">
                  <Quote className="w-3.5 h-3.5 text-[#ED7503] absolute left-0 top-0" />
                  „{member.quote}“
                </div>

                <p className="text-xs sm:text-sm text-[#525A66] leading-relaxed flex-1 mb-5">
                  {member.bio}
                </p>

                {/* Contacts if available */}
                {(member.email || member.phone) && (
                  <div className="pt-4 border-t border-[#E6E3DA] flex items-center justify-between text-xs text-[#525A66] mt-auto">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-1.5 hover:text-[#0CACDB] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#0CACDB]" />
                        <span>{member.email}</span>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-1.5 hover:text-[#ED7503] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#ED7503]" />
                        <span>{member.phone}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
