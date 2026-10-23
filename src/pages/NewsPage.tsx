import React, { useState } from 'react';
import { ARTICLES, Article } from '../data/newsData';
import { Search, ArrowRight, Calendar, Tag } from 'lucide-react';

interface NewsPageProps {
  onOpenArticle: (article: Article) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onOpenArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Vše');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Vše', 'Děti & Mládež', 'Kultura', 'Projekty', 'Akce'];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'Vše' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.lead.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#ED7503] block mb-2">
          Zprávy z terénu
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1E24] tracking-tight font-['Outfit'] mb-6">
          Aktuality a články
        </h1>
        <p className="text-lg text-[#525A66] leading-relaxed font-normal">
          Přečtěte si o našich uplynulých workshopech, přípravách na EHMK 2028 i o lidech, kteří tvoří srdce spolku hROM.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#E6E3DA] shadow-sm">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1A1E24] text-white shadow-sm'
                  : 'bg-[#F6F4EE] text-[#525A66] hover:bg-[#eae6dc]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Hledat v článcích..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-1.5 rounded-xl border border-[#E6E3DA] text-xs focus:outline-none focus:border-[#0CACDB]"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E6E3DA] text-slate-500 text-sm">
          Nenalezen žádný článek odpovídající zadaným kritériím.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="bg-white rounded-3xl overflow-hidden border border-[#E6E3DA] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer flex flex-col group"
            >
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-[#525A66] mb-3">
                  <Calendar className="w-3.5 h-3.5 text-[#0CACDB]" />
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-lg font-bold text-[#1A1E24] group-hover:text-[#ED7503] transition-colors leading-snug mb-3 font-['Outfit']">
                  {article.title}
                </h2>

                <p className="text-sm text-[#525A66] line-clamp-3 mb-6 flex-1">
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
      )}
    </div>
  );
};
