import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { BLOG_POSTS_DATA } from '../data/blog';
import { Search, ChevronRight } from 'lucide-react';

export function BlogListView() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = BLOG_POSTS_DATA.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <EnhancedSEO
        title="Blog e Guia Técnico de Madeira de Pinus em Curitiba"
        description="Artigos, dicas de construção, comparações de pinus tratado vs in natura, instruções para telhados, decks e pergolados."
        canonicalPath="/blog"
        keywords={['Blog de Madeira', 'Dicas Pinus', 'Guia Telhado', 'Como fazer deck de pinus']}
      />

      <div className="bg-white text-stone-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-amber-800 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full">
              Conhecimento Técnico
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              Blog da Bairro Novo Madeiras
            </h1>
            <p className="text-sm text-stone-600">
              Aprenda a escolher, dimensionar, tratar e conservar madeira de pinus para suas obras e projetos em Curitiba.
            </p>
          </div>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por assunto (ex: telhado, deck, preco, cupim)..."
              className="w-full bg-stone-50 border border-stone-300 focus:border-amber-500 rounded-2xl pl-12 pr-4 py-3 text-sm text-stone-900 focus:outline-none transition-colors shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <div
                key={post.id}
                className="bg-stone-50 rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-amber-500 transition-colors"
              >
                <img
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-stone-500">
                      <span className="font-extrabold uppercase text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md">
                        {post.category}
                      </span>
                      <span>{post.readTime} de leitura</span>
                    </div>

                    <h2 className="text-lg font-bold text-stone-900 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500">{post.date}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:underline"
                    >
                      <span>Ler Artigo</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
