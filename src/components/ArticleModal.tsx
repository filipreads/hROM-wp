import React, { useEffect } from 'react';
import { Article } from '../data/newsData';
import { X, Calendar, Tag, Clock, Share2, Check } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-[#E6E3DA] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Zavřít článek"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-80 bg-slate-100 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0CACDB] text-white w-fit mb-2 shadow-md">
              {article.category}
            </span>
            <div className="flex items-center gap-3 text-xs text-white/80">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A1E24] font-['Outfit'] mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#1A1E24] font-medium leading-relaxed mb-6 border-b border-[#E6E3DA] pb-6">
            {article.lead}
          </p>

          <div className="space-y-4 text-sm sm:text-base text-[#525A66] leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E6E3DA] flex items-center justify-between">
            <span className="text-xs text-[#525A66]">
              hROM České Budějovice, z.s. · Zpravodajství
            </span>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F6F4EE] hover:bg-[#eae6dc] text-xs font-semibold text-[#1A1E24] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Odkaz zkopírován!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#ED7503]" />
                  <span>Sdílet článek</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
