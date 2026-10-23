import React, { useState } from 'react';
import { DonationBox } from '../components/DonationBox';
import { HeartHandshake, CheckCircle2, Send, Heart, Building2, UserCheck } from 'lucide-react';

export const CollaborationPage: React.FC = () => {
  const [volName, setVolName] = useState('');
  const [volEmail, setVolEmail] = useState('');
  const [volPhone, setVolPhone] = useState('');
  const [volInterest, setVolInterest] = useState('tábory');
  const [volMessage, setVolMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (volName && volEmail) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#669538] block mb-2">
          Zapojte se s námi
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1E24] tracking-tight font-['Outfit'] mb-6">
          Spolupráce a dobrovolnictví
        </h1>
        <p className="text-lg text-[#525A66] leading-relaxed font-normal">
          Zaujala vás naše činnost? Ať už chcete darovat svůj čas, odborné znalosti, nebo finanční dar, vaše pomoc má bezprostřední dopad na konkrétní děti a rodiny v Českých Budějovicích.
        </p>
      </div>

      {/* Two Pillars: Volunteers & Donors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Volunteer Pillar */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6E3DA] border-t-4 border-t-[#0CACDB] shadow-sm flex flex-col">
          <div className="w-12 h-12 rounded-2xl bg-[#0CACDB]/10 text-[#0CACDB] flex items-center justify-center mb-6">
            <UserCheck className="w-6 h-6" />
          </div>

          <h2 className="text-2xl font-bold text-[#1A1E24] mb-3 font-['Outfit']">
            Staňte se dobrovolníkem / dobrovolnicí
          </h2>

          <p className="text-sm text-[#525A66] leading-relaxed mb-6">
            Hledáme parťáky pro pomoc s doučováním školáků, organizací letních táborů, lektorováním sportovních a tanečních kroužků nebo s propagací a fotografováním našich akcí.
          </p>

          <div className="space-y-3 mb-8 text-xs sm:text-sm text-[#525A66]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Přátelský a otevřený tým lidí se stejným zápalem</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Možnost zapojení do projektů EHMK 2028</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Potvrzení o dobrovolnické praxi pro školu nebo životopis</span>
            </div>
          </div>

          <div className="mt-auto p-4 rounded-xl bg-[#F6F4EE] border border-[#E6E3DA] text-xs">
            <strong>Koordinátorka dobrovolníků:</strong> Veronika Zvánovcová
            <br />
            <a href="mailto:hrom.cb@gmail.com" className="text-[#0CACDB] font-semibold hover:underline">
              hrom.cb@gmail.com
            </a>
          </div>
        </div>

        {/* Corporate & Donor Pillar */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6E3DA] border-t-4 border-t-[#ED7503] shadow-sm flex flex-col">
          <div className="w-12 h-12 rounded-2xl bg-[#ED7503]/10 text-[#ED7503] flex items-center justify-center mb-6">
            <Building2 className="w-6 h-6" />
          </div>

          <h2 className="text-2xl font-bold text-[#1A1E24] mb-3 font-['Outfit']">
            Partnerství & firemní podpora
          </h2>

          <p className="text-sm text-[#525A66] leading-relaxed mb-6">
            Propojujeme společensky odpovědné firmy a jednotlivce s konkrétními lokálními potřebami. Pomozte nám vybavit klubovnu, zajistit obědy pro děti na táborech nebo podpořit talentované mladé hudebníky.
          </p>

          <div className="space-y-3 mb-8 text-xs sm:text-sm text-[#525A66]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Darovací smlouva a potvrzení pro odpočet ze základu daně</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Prezentace vašeho loga na akcích a propagačních materiálech</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Pravidelné zprávy o využití každé darované koruny</span>
            </div>
          </div>

          <div className="mt-auto p-4 rounded-xl bg-[#F6F4EE] border border-[#E6E3DA] text-xs">
            <strong>Bankovní spojení (transparentní účet):</strong> 2901846239 / 2010
            <br />
            <strong>IČO:</strong> 08462399
          </div>
        </div>
      </div>

      {/* Volunteer Signup Form */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6E3DA] shadow-sm max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1A1E24] font-['Outfit'] mb-2 text-center">
          Přihláška pro dobrovolníky
        </h2>
        <p className="text-sm text-[#525A66] text-center mb-8">
          Vyplňte krátký dotazník a koordinátorka Veronika se vám brzy ozve s nabídkou setkání.
        </p>

        {submitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-emerald-900 mb-1">
              Děkujeme za váš zájem pomáhat!
            </h3>
            <p className="text-xs text-emerald-800">
              Vaši přihlášku jsme v pořádku přijali. Během několika dní se vám ozveme na uvedený e-mail.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  required
                  placeholder="např. Marie Nováková"
                  value={volName}
                  onChange={(e) => setVolName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E3DA] text-sm focus:outline-none focus:border-[#0CACDB]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="vas@email.cz"
                  value={volEmail}
                  onChange={(e) => setVolEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E3DA] text-sm focus:outline-none focus:border-[#0CACDB]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  placeholder="+420 ..."
                  value={volPhone}
                  onChange={(e) => setVolPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E3DA] text-sm focus:outline-none focus:border-[#0CACDB]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                  Oblast, která vás láká
                </label>
                <select
                  value={volInterest}
                  onChange={(e) => setVolInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E3DA] text-sm bg-white focus:outline-none focus:border-[#0CACDB]"
                >
                  <option value="tábory">Příměstské tábory a výlety</option>
                  <option value="doucovani">Doučování a kroužky pro děti</option>
                  <option value="kultura">Kulturní akce & EHMK 2028</option>
                  <option value="marketing">Sociální sítě & foto / video</option>
                  <option value="jine">Jiné / všeobecná pomoc</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                Pár vět o vás a vašich časových možnostech
              </label>
              <textarea
                rows={3}
                placeholder="Napište nám, co vás baví a jak často byste se chtěli zapojit..."
                value={volMessage}
                onChange={(e) => setVolMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E3DA] text-sm focus:outline-none focus:border-[#0CACDB]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#0CACDB] hover:bg-[#0994bd] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Odeslat nezávaznou přihlášku</span>
            </button>
          </form>
        )}
      </div>

      {/* Donation box */}
      <DonationBox id="darci" />
    </div>
  );
};
