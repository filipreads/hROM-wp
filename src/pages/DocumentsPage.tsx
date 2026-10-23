import React, { useState } from 'react';
import { LEGAL_DOCUMENTS, LegalDocument } from '../data/documentsData';
import { FileText, Download, Check, ShieldCheck, Globe, Scale } from 'lucide-react';

export const DocumentsPage: React.FC = () => {
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);

  const handleDownload = (doc: LegalDocument) => {
    // Generate a clean text/blob download simulation
    const content = `hROM České Budějovice, z.s. (IČO: 08462399)\n${doc.title}\nKategorie: ${doc.category}\nRok: ${doc.year}\n\n${doc.description}\n\nOficiální dokument spolku registrovaného u Krajského soudu v Českých Budějovicích.\nWeb: https://hromcb.cz\nE-mail: hrom.cb@gmail.com`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadedDoc(doc.id);
    setTimeout(() => setDownloadedDoc(null), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0CACDB] block mb-2">
          Otevřenost a odpovědnost
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1E24] tracking-tight font-['Outfit'] mb-6">
          Dokumenty a transparentnost
        </h1>
        <p className="text-lg text-[#525A66] leading-relaxed font-normal">
          Důvěra veřejnosti a dárců je pro nás na prvním místě. Zde naleznete veškeré výroční zprávy, účetní uzávěrky, stanovy i deklarace udržitelného rozvoje.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#E6E3DA] flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <div className="text-xs">
            <strong className="block text-slate-900 font-semibold">Veřejný rejstřík</strong>
            <span className="text-slate-500">IČO 08462399, Krajský soud Č. Budějovice</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E6E3DA] flex items-center gap-3">
          <Scale className="w-6 h-6 text-[#ED7503] shrink-0" />
          <div className="text-xs">
            <strong className="block text-slate-900 font-semibold">Transparentní hospodaření</strong>
            <span className="text-slate-500">Všechny dary jsou řádně vyúčtovány</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E6E3DA] flex items-center gap-3">
          <Globe className="w-6 h-6 text-[#0CACDB] shrink-0" />
          <div className="text-xs">
            <strong className="block text-slate-900 font-semibold">Cíle udržitelného rozvoje (SDGs)</strong>
            <span className="text-slate-500">Podpora vzdělání a rovnosti šancí</span>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LEGAL_DOCUMENTS.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-3xl p-7 border border-[#E6E3DA] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-bold text-[#0CACDB] uppercase tracking-wider">
                  {doc.category}
                </span>
                <span className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-semibold">
                  {doc.year} · {doc.format} ({doc.fileSize})
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#1A1E24] mb-3 font-['Outfit']">
                {doc.title}
              </h2>

              <p className="text-sm text-[#525A66] leading-relaxed mb-6">
                {doc.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6E3DA] flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Oficiální verze PDF
              </span>

              <button
                onClick={() => handleDownload(doc)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  downloadedDoc === doc.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#F6F4EE] hover:bg-[#eae6dc] text-[#1A1E24] border border-[#E6E3DA]'
                }`}
              >
                {downloadedDoc === doc.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Staženo</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-[#ED7503]" />
                    <span>Stáhnout dokument</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
