import { useState } from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS_DATA } from '../data/products';
import { Search, Trees } from 'lucide-react';

export function ProductsListView({ onOpenBudget }: { onOpenBudget?: (slug?: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = [
    'Todos',
    'Madeira de Pinus',
    'Pinus Tratado',
    'Madeira para Telhado',
    'Madeira para Construção',
    'Madeira Serrada',
    'Madeira Beneficiada',
    'Madeirite e Compensado',
    'Deck e Pergolado'
  ];

  const filtered = PRODUCTS_DATA.filter((p) => {
    const matchesCat = selectedCategory === 'Todos' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <EnhancedSEO
        title="Catálogo de Madeiras e Pinus em Curitiba - PR"
        description="Confira todas as 19 opções de Madeira de Pinus, Pinus Autoclavado, Caibros, Vigas, Ripas, Tábuas e Madeirite com entrega rápida em Curitiba e Região Metropolitana."
        canonicalPath="/produtos"
        keywords={['Catálogo de Madeiras', 'Produtos Madeireira Curitiba', 'Madeira de Pinus']}
      />

      <div className="bg-white text-stone-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-amber-700 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full">
              Catálogo Completo
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              Produtos de Madeira de Pinus em Curitiba
            </h1>
            <p className="text-sm text-stone-600">
              Madeiras brutas, aparelhadas, tratadas em autoclave e chapas de compensado/madeirite para todos os portes de projetos.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-stone-50 p-4 sm:p-6 rounded-3xl border border-stone-200 shadow-sm space-y-5">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-amber-600" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nome, produto ou uso (ex: caibro, deck, telhado)..."
                className="w-full bg-white border border-stone-300 focus:border-amber-500 rounded-2xl pl-12 pr-4 py-3 text-sm text-stone-900 focus:outline-none transition-colors shadow-sm"
              />
            </div>

            <div className="flex items-center justify-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[38px] flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-stone-950 shadow-md font-black border border-amber-400'
                      : 'bg-white text-stone-700 hover:text-amber-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  <Trees className={`w-3.5 h-3.5 ${selectedCategory === cat ? 'text-stone-950' : 'text-amber-600'}`} />
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onOpenBudget={(slug) => onOpenBudget?.(slug)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-stone-50 rounded-3xl border border-stone-200 space-y-3">
              <p className="text-base text-stone-600">Nenhum produto encontrado com estes termos.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                }}
                className="text-amber-700 font-bold text-xs underline"
              >
                Limpar filtros e ver todos os produtos
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
