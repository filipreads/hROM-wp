import React, { useState } from 'react';
import { Heart, Check, Copy, ShieldCheck, Sparkles } from 'lucide-react';

interface DonationBoxProps {
  id?: string;
}

export const DonationBox: React.FC<DonationBoxProps> = ({ id = 'darci' }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const amounts = [
    { value: 250, label: '250 Kč', impact: 'Ovoce a svačina pro děti na táboře' },
    { value: 500, label: '500 Kč', impact: 'Výtvarné potřeby a taneční pomůcky' },
    { value: 1000, label: '1 000 Kč', impact: 'Příspěvek na lektora hudebního kroužku' },
    { value: 2500, label: '2 500 Kč', impact: 'Měsíční provoz komunitních dílen' },
  ];

  const currentAmount = customAmount ? parseInt(customAmount, 10) || 0 : selectedAmount;

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Generate QR Platba SVG data URL representation
  // SPAYD format standard: SPD*1.0*ACC:CZ5820100000002901846239*AM:500.00*CC:CZK*MSG:Dar pro hROM CB*VS:08462399*
  const qrCodeUrl = `https://api.paylibo.com/paylibo/generator/image?accountNumber=2901846239&bankCode=2010&amount=${currentAmount || 500}&currency=CZK&vs=08462399&message=Dar%20pro%20hROM%20CB`;

  return (
    <section id={id} className="relative rounded-3xl bg-[#151921] text-white p-8 md:p-12 overflow-hidden border border-white/10 shadow-2xl">
      {/* Decorative ambient gradients */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#ED7503]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#0CACDB]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Purpose & Choice */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ED7503]/20 text-[#FAC503] border border-[#FAC503]/30">
              <Heart className="w-3.5 h-3.5 fill-[#ED7503] text-[#ED7503]" />
              Podpořte hROM České Budějovice
            </span>
            <span className="text-xs text-white/50">·</span>
            <span className="text-xs text-white/60">IČO 08462399</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Pomozte nám tvořit bezpečný prostor a budoucnost pro děti
          </h2>
          
          <p className="text-white/70 text-base md:text-lg mb-6 leading-relaxed">
            Každý dar, ať jednorázový nebo pravidelný, nám umožňuje organizovat příměstské tábory, bezplatné taneční a hudební kroužky a stavět mosty mezi komunitami v Českých Budějovicích.
          </p>

          {/* Monthly / One-time toggle */}
          <div className="flex items-center gap-1 p-1 bg-white/10 rounded-xl w-fit mb-6 border border-white/10">
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                !isMonthly
                  ? 'bg-[#ED7503] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Jednorázový dar
            </button>
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                isMonthly
                  ? 'bg-[#ED7503] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Pravidelně každý měsíc
            </button>
          </div>

          {/* Preset Amounts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
            {amounts.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => {
                  setSelectedAmount(item.value);
                  setCustomAmount('');
                }}
                className={`py-3 px-3 rounded-xl text-center border transition-all ${
                  selectedAmount === item.value && !customAmount
                    ? 'border-[#FAC503] bg-white/15 text-white shadow-lg ring-2 ring-[#FAC503]/50'
                    : 'border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <div className="font-bold text-base md:text-lg">{item.label}</div>
              </button>
            ))}
          </div>

          {/* Custom amount input */}
          <div className="flex items-center gap-3 mb-6">
            <label htmlFor="custom-amount" className="text-xs text-white/60 whitespace-nowrap">
              Nebo vlastní částka:
            </label>
            <div className="relative flex-1 max-w-xs">
              <input
                id="custom-amount"
                type="number"
                min="50"
                step="50"
                placeholder="Např. 300"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(0);
                }}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#FAC503] focus:ring-1 focus:ring-[#FAC503]"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-white/50">Kč</span>
            </div>
          </div>

          {/* Selected impact description */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm text-[#FAC503] flex items-center gap-2">
            <Sparkles className="w-4 h-4 shrink-0 text-[#FAC503]" />
            <span>
              <strong>Váš dopad: </strong>
              {amounts.find((a) => a.value === currentAmount)?.impact ||
                `Pomoc v hodnotě ${currentAmount.toLocaleString('cs-CZ')} Kč zajistí podporu aktivit pro rodiny v Českých Budějovicích.`}
            </span>
          </div>
        </div>

        {/* Right column: QR Platba & Bank Details */}
        <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-white/60">
              Platba bankovním převodem
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Transparentní účet
            </span>
          </div>

          {/* QR Code and Quick Scan */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-5 p-4 bg-white rounded-xl text-slate-900 shadow-md">
            <div className="relative w-32 h-32 shrink-0 bg-white p-1 rounded-lg border border-slate-200 flex items-center justify-center">
              <img
                src={qrCodeUrl}
                alt={`QR Platba ${currentAmount} Kč pro hROM CB`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback styled visual representation if external QR API is offline
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.qr-fallback');
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="qr-fallback hidden flex-col items-center justify-center text-center p-2 text-slate-700">
                <div className="font-mono text-xs font-bold text-[#1E2229]">QR PLATBA</div>
                <div className="text-[10px] text-slate-500 mt-1">2901846239/2010</div>
                <div className="text-xs font-bold text-[#ED7503] mt-1">{currentAmount} Kč</div>
              </div>
            </div>

            <div className="text-left">
              <div className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px] uppercase tracking-wider mb-1">
                Česká QR Platba
              </div>
              <div className="text-sm font-bold text-slate-900">
                Naskenujte v bankovní aplikaci
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-snug">
                Částka <strong>{currentAmount.toLocaleString('cs-CZ')} Kč</strong> a variabilní symbol se předvyplní automaticky.
              </p>
            </div>
          </div>

          {/* Copyable account details */}
          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/20 border border-white/5">
              <div>
                <span className="text-white/50 block text-[11px]">Číslo transparentního účtu</span>
                <span className="font-mono font-bold text-white text-sm">2901846239 / 2010</span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard('2901846239/2010', 'account')}
                className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Kopírovat číslo účtu"
              >
                {copiedField === 'account' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-white/70" />
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-black/20 border border-white/5">
                <span className="text-white/50 block text-[11px]">Variabilní symbol</span>
                <span className="font-mono font-bold text-white text-xs">08462399</span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/20 border border-white/5">
                <span className="text-white/50 block text-[11px]">Zpráva pro příjemce</span>
                <span className="font-mono font-bold text-white text-xs">Dar pro hROM CB</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-center">
            <p className="text-[11px] text-white/60">
              Potřebujete vystavit potvrzení o daru pro odečet z daní?{' '}
              <a href="mailto:hrom.cb@gmail.com?subject=Zadost%20o%20potvrzeni%20o%20daru" className="text-[#0CACDB] hover:underline font-medium">
                Napište nám na hrom.cb@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
