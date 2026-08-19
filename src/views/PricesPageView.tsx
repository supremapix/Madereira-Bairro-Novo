import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Tag,
  Calculator,
  MessageCircle,
  Phone,
  FileText,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  TrendingDown,
  Truck,
  ShieldCheck
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_DATA } from '../data/company';
import { PRICE_CATEGORIES, PRICE_FAQS } from '../data/prices';

export function PricesPageView({ onOpenBudget }: { onOpenBudget?: (slug?: string) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = PRICE_CATEGORIES.map((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }
    const filteredItems = cat.items.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.dimensions.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.unit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.notes?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSearch;
    });

    if (filteredItems.length === 0) return null;

    return {
      ...cat,
      items: filteredItems
    };
  }).filter(Boolean);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: COMPANY_DATA.canonicalUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Preços',
        item: `${COMPANY_DATA.canonicalUrl}/precos`
      }
    ]
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen">
      <EnhancedSEO
        title="Preço da Madeira de Pinus em Curitiba: Tabela por m³, Dúzia e Peça"
        description="Confira a tabela de preços de referência de madeira de pinus em Curitiba: tábuas de caixaria, caibros 5x5, vigas 5x15, ripas, escoras e pinus autoclavado. Cotação rápida no WhatsApp."
        canonicalPath="/precos"
        keywords={[
          'Preço Madeira de Pinus Curitiba',
          'Tabela de Preço Pinus',
          'Quanto custa madeira de pinus',
          'Preço Tábua de 30 Pinus Curitiba',
          'Metro Cúbico Pinus Preço',
          'Dúzia de Tábua Curitiba',
          'Caibro 5x5 Preço Curitiba'
        ]}
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="bg-stone-950 text-stone-100 py-14 sm:py-18 relative overflow-hidden border-b border-amber-900/30">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-stone-400">
            <Link to="/" className="hover:text-amber-400 transition-colors">Início</Link>
            <span>/</span>
            <span className="text-amber-400 font-bold">Preços</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider mb-4">
            <Tag className="w-3.5 h-3.5" />
            Transparência & Cotação Direta de Distribuidora
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-stone-100 tracking-tight leading-tight max-w-4xl">
            Tabela de Preços de Madeira de Pinus em Curitiba
          </h1>

          <p className="mt-4 text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Consulte os valores médios de referência para compras por <strong>metro cúbico (m³), dúzia e peça</strong>. Economize comprando direto da Madeireira Bairro Novo com entrega expressa no seu canteiro de obras.
          </p>

          {/* Quick Notice */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-3 max-w-2xl">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong>Nota sobre valores:</strong> Os preços abaixo são estimativas de referência de mercado. Para lotes fechados de construtoras, faturamento para PJ ou entregas programadas, solicite orçamento personalizado no WhatsApp para receber descontos por volume.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Tables & Controls */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Controls: Search & Category Chips */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por tábua, caibro, viga..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-stone-200 focus:outline-none focus:border-amber-500 bg-stone-50"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-stone-950'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Todas as Categorias
            </button>
            {PRICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-stone-950'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Tables Loop */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category!.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-amber-600" />
                    <span>{category!.name}</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">{category!.description}</p>
                </div>
                <button
                  onClick={() => onOpenBudget?.(category!.id)}
                  className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cotar Categoria</span>
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50/80 text-stone-800 font-bold">
                      <th className="py-3 px-4 rounded-l-xl">Produto & Bitola</th>
                      <th className="py-3 px-4">Dimensões Comerciais</th>
                      <th className="py-3 px-4">Unidade</th>
                      <th className="py-3 px-4">Faixa de Preço Estimada</th>
                      <th className="py-3 px-4">Finalidade Principal</th>
                      <th className="py-3 px-4 text-right rounded-r-xl">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    {category!.items.map((item, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3 px-4 font-bold text-stone-900">{item.name}</td>
                        <td className="py-3 px-4 font-mono text-xs text-stone-600">{item.dimensions}</td>
                        <td className="py-3 px-4 text-xs font-semibold uppercase">{item.unit}</td>
                        <td className="py-3 px-4 font-black text-amber-800">{item.referencePrice}</td>
                        <td className="py-3 px-4 text-xs text-stone-600">{item.notes}</td>
                        <td className="py-3 px-4 text-right">
                          <a
                            href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                              `Olá! Gostaria de cotar: ${item.name} (${item.dimensions}) na Madeireira Bairro Novo.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Cotar</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Volume Discount Banner */}
        <div className="mt-12 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-stone-100 rounded-3xl p-8 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              <TrendingDown className="w-3.5 h-3.5" />
              Descontos Especiais para Construtoras e Lotes Fechados
            </div>
            <h3 className="text-2xl font-black text-stone-100">
              Precisa de carga fechada de pinus ou fornecimento contínuo?
            </h3>
            <p className="text-sm text-stone-300">
              Faturamos para CNPJ com condições especiais de pagamento e frete próprio com descarga rápida no canteiro em Curitiba e Região Metropolitana.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                'Olá! Sou construtor/engenheiro e gostaria de negociar fornecimento de madeira de pinus em lote fechado.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-black px-6 py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Negociar Carga Fechada</span>
            </a>
            <Link
              to="/medidas"
              className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/40 font-bold px-6 py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Calculator className="w-4 h-4" />
              <span>Calcular Metragem</span>
            </Link>
          </div>
        </div>

        {/* Pricing FAQs */}
        <section className="mt-14 space-y-4">
          <h2 className="text-2xl font-black text-stone-900">
            Dúvidas Frequentes sobre Preços de Madeira de Pinus
          </h2>
          <div className="space-y-3">
            {PRICE_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm open:border-amber-400"
              >
                <summary className="flex items-center justify-between p-4 font-bold text-stone-900 cursor-pointer select-none hover:bg-amber-50/50 transition-colors list-none">
                  <span className="flex items-center gap-3 text-sm">
                    <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className="w-4 h-4 text-stone-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-2" />
                </summary>
                <div className="px-5 pb-4 pt-1 text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-stone-50/40">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
