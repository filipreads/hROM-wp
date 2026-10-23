import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0CACDB] block mb-2">
          Jsme tu pro vás
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1E24] tracking-tight font-['Outfit'] mb-6">
          Kontaktní informace
        </h1>
        <p className="text-lg text-[#525A66] leading-relaxed font-normal">
          Máte dotaz k našim aktivitám, zájem o doučování, komunitní dílny nebo nám chcete nabídnout spolupráci? Neváhejte se ozvat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-[#E6E3DA] shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#ED7503] block mb-1">
              Oficiální sídlo spolku
            </span>
            <h2 className="text-2xl font-bold text-[#1A1E24] font-['Outfit'] mb-4">
              hROM České Budějovice, z.s.
            </h2>
            <div className="flex items-start gap-3 text-sm text-[#525A66]">
              <MapPin className="w-5 h-5 text-[#ED7503] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1A1E24]">Kvítkovice č.ev. 29</strong>
                <span>373 84 Kvítkovice</span>
                <br />
                <span className="text-xs text-slate-400">Jihočeský kraj, Česká republika</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E6E3DA] space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1A1E24]">
              Spojení a komunikace
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:hrom.cb@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F4EE] hover:bg-[#eae6dc] text-[#1A1E24] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0CACDB] shrink-0" />
                <span className="font-semibold">hrom.cb@gmail.com</span>
              </a>

              <a
                href="tel:+420721305009"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F4EE] hover:bg-[#eae6dc] text-[#1A1E24] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ED7503] shrink-0" />
                <span className="font-semibold">+420 721 305 009</span>
              </a>

              <a
                href="tel:+420605783196"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F4EE] hover:bg-[#eae6dc] text-[#1A1E24] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FAC503] shrink-0" />
                <span className="font-semibold">+420 605 783 196</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E6E3DA] space-y-2 text-xs text-[#525A66]">
            <div className="flex items-center justify-between">
              <span>IČO:</span>
              <span className="font-mono font-bold text-slate-900">08462399</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Právní forma:</span>
              <span className="font-semibold text-slate-900">Spolek (z.s.)</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Příslušný soud:</span>
              <span className="text-slate-900">Krajský soud v Č. Budějovicích</span>
            </div>
          </div>
        </div>

        {/* Interactive Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E6E3DA] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1A1E24] font-['Outfit'] mb-2">
            Napište nám zprávu
          </h2>
          <p className="text-sm text-[#525A66] mb-8">
            Vyplňte formulář a my vám odpovíme obvykle do 24 hodin v pracovní dny.
          </p>

          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-emerald-900">
                Vaše zpráva byla v pořádku odeslána!
              </h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto">
                Děkujeme za váš kontakt. Na e-mail <strong>{email}</strong> se vám brzy ozveme.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="mt-4 px-5 py-2 text-xs font-bold text-emerald-800 bg-white border border-emerald-300 rounded-full hover:bg-emerald-50"
              >
                Odeslat další zprávu
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                    Vaše jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="např. Jan Novák"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E3DA] text-sm focus:outline-none focus:border-[#0CACDB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                    Váš e-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vas@email.cz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E3DA] text-sm focus:outline-none focus:border-[#0CACDB]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                    Telefonní číslo
                  </label>
                  <input
                    type="tel"
                    placeholder="+420 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E3DA] text-sm focus:outline-none focus:border-[#0CACDB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                    Předmět zprávy
                  </label>
                  <input
                    type="text"
                    placeholder="např. Zájem o spolupráci"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E3DA] text-sm focus:outline-none focus:border-[#0CACDB]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                  Text zprávy *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Napište nám svůj dotaz, námět nebo nabídku pomoci..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E3DA] text-sm focus:outline-none focus:border-[#0CACDB]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#ED7503] hover:bg-[#d86400] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Odeslat zprávu</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
