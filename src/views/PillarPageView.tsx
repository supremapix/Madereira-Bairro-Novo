import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Trees,
  Calculator,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Truck,
  Phone,
  MessageCircle,
  FileText,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  MapPin
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_DATA } from '../data/company';
import { PILLAR_PAGE_METADATA, PILLAR_SECTIONS, PILLAR_FAQ_ITEMS } from '../data/pillarContent';
import { PRODUCTS_DATA } from '../data/products';

export function PillarPageView({ onOpenBudget }: { onOpenBudget?: (slug?: string) => void }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

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
        name: 'Madeira de Pinus',
        item: `${COMPANY_DATA.canonicalUrl}/madeira-de-pinus`
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${COMPANY_DATA.canonicalUrl}/madeira-de-pinus`
    },
    headline: PILLAR_PAGE_METADATA.h1,
    description: PILLAR_PAGE_METADATA.description,
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=80',
    author: {
      '@type': 'Organization',
      name: COMPANY_DATA.name,
      url: COMPANY_DATA.canonicalUrl
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_DATA.name,
      logo: {
        '@type': 'ImageObject',
        url: `${COMPANY_DATA.canonicalUrl}/icon-512.png`
      }
    },
    datePublished: '2026-08-18T08:00:00-03:00',
    dateModified: '2026-08-18T18:00:00-03:00'
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen">
      <EnhancedSEO
        title={PILLAR_PAGE_METADATA.title}
        description={PILLAR_PAGE_METADATA.description}
        canonicalPath={PILLAR_PAGE_METADATA.canonicalPath}
        keywords={[
          'Madeira de Pinus',
          'Madeira de Pinus Curitiba',
          'Preço Madeira de Pinus',
          'Medidas Madeira de Pinus',
          'Pinus Autoclavado Curitiba',
          'Pinus In Natura',
          'Caixaria de Pinus',
          'Telhado de Pinus'
        ]}
        jsonLd={[breadcrumbSchema, articleSchema]}
      />

      {/* Hero Header Section */}
      <section className="bg-stone-950 text-stone-100 py-16 sm:py-20 relative overflow-hidden border-b border-amber-900/30">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-stone-400">
            <Link to="/" className="hover:text-amber-400 transition-colors">Início</Link>
            <span>/</span>
            <span className="text-amber-400 font-bold">Madeira de Pinus</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider mb-4">
            <Trees className="w-3.5 h-3.5" />
            Guia Técnico Definitivo & Tabela de Bitolas
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-stone-100 tracking-tight leading-tight max-w-4xl">
            {PILLAR_PAGE_METADATA.h1}
          </h1>

          <p className="mt-4 text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Descubra tudo sobre <strong>madeira de pinus in natura, aparelhada e tratada em autoclave (CCA)</strong>: medidas comerciais, aplicações em caixarias de concreto e telhados, formação de preços e pronta entrega em Curitiba e RMC.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenBudget?.('madeira-de-pinus')}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-6 py-3 rounded-xl text-sm transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 stroke-[2.5]" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </button>

            <Link
              to="/precos"
              className="bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/40 px-6 py-3 rounded-xl text-sm font-bold transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Ver Tabela de Preços</span>
            </Link>

            <Link
              to="/medidas"
              className="bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 px-6 py-3 rounded-xl text-sm font-bold transition-colors flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>Calculadora de m³</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sidebar TOC */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Content */}
          <main className="lg:col-span-8 space-y-12">
            
            {/* Navigable Index / Table of Contents */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <h2 className="text-lg font-black text-stone-900 uppercase tracking-wide flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-600" />
                Sumário do Guia Completo (Navegue pelos Tópicos)
              </h2>
              <ol className="space-y-2.5 text-sm font-medium text-stone-700">
                {PILLAR_SECTIONS.map((sec, idx) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="hover:text-amber-700 hover:underline transition-colors flex items-start gap-2"
                    >
                      <span className="text-amber-600 font-bold">{idx + 1}.</span>
                      <span>{sec.title.replace(/^\d+\.\s*/, '')}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Pillar Content Sections */}
            {PILLAR_SECTIONS.map((sec, index) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight border-b-2 border-amber-500/40 pb-2">
                  {sec.title}
                </h2>

                {sec.subtitle && (
                  <p className="text-sm font-bold text-amber-800 uppercase tracking-wide">
                    {sec.subtitle}
                  </p>
                )}

                <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
                  {sec.content.split('\n\n').map((paragraph, pIdx) => {
                    const trimmed = paragraph.trim();
                    if (!trimmed) return null;

                    // Render Subheadings
                    if (trimmed.startsWith('### ')) {
                      return (
                        <h3 key={pIdx} className="text-xl font-bold text-stone-900 mt-6 mb-2">
                          {trimmed.replace('### ', '')}
                        </h3>
                      );
                    }

                    // Render Markdown Tables
                    if (trimmed.startsWith('|')) {
                      const rows = trimmed.split('\n').map((r) => r.trim()).filter(Boolean);
                      const headerRow = rows[0]?.split('|').map((c) => c.trim()).filter(Boolean);
                      const dataRows = rows.slice(2).map((r) => r.split('|').map((c) => c.trim()).filter(Boolean));

                      return (
                        <div key={pIdx} className="overflow-x-auto my-6 rounded-xl border border-stone-200 shadow-sm bg-white">
                          <table className="min-w-full text-left text-sm">
                            <thead className="bg-stone-100 border-b border-stone-200 text-stone-900 font-bold">
                              <tr>
                                {headerRow?.map((h, hIdx) => (
                                  <th key={hIdx} className="px-4 py-3">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100 text-stone-700">
                              {dataRows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-amber-50/50 transition-colors">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="px-4 py-2.5 font-medium">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }

                    // Render Bullet Lists
                    if (trimmed.startsWith('- ')) {
                      const items = trimmed.split('\n- ').map((item) => item.replace(/^- /, '').trim());
                      return (
                        <ul key={pIdx} className="list-disc list-inside space-y-1.5 pl-2">
                          {items.map((item, iIdx) => (
                            <li key={iIdx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                          ))}
                        </ul>
                      );
                    }

                    // Standard Paragraphs with markdown link & strong parsing
                    const htmlFormatted = trimmed
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-amber-700 font-bold underline hover:text-amber-900">$1</a>');

                    return (
                      <p key={pIdx} dangerouslySetInnerHTML={{ __html: htmlFormatted }} />
                    );
                  })}
                </div>

                {/* Section Specific Action Card */}
                {sec.id === 'produtos-e-medidas-comerciais' && (
                  <div className="my-6 p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-amber-950">Precisa calcular as peças para a sua obra?</h4>
                      <p className="text-xs text-amber-900">Utilize nossa calculadora interativa para estimar m³, dúzias e caixarias.</p>
                    </div>
                    <Link
                      to="/medidas"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 whitespace-nowrap shadow-sm"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>Abrir Calculadora de m³</span>
                    </Link>
                  </div>
                )}

                {sec.id === 'quanto-custa-preco-pinus' && (
                  <div className="my-6 p-6 rounded-2xl bg-stone-900 text-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-stone-100">Consulte nossa Tabela de Preços Atualizada</h4>
                      <p className="text-xs text-stone-400">Valores de referência por metro cúbico, dúzia e peça para Curitiba.</p>
                    </div>
                    <Link
                      to="/precos"
                      className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Ver Tabela de Preços</span>
                    </Link>
                  </div>
                )}
              </section>
            ))}

            {/* Interactive HTML details/summary FAQ Section (User Rule: HTML details, no FAQPage JSON-LD) */}
            <section id="faq-section" className="space-y-4 pt-6 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                Perguntas Frequentes sobre Madeira de Pinus em Curitiba (FAQ)
              </h2>
              <p className="text-sm text-stone-600">
                Respostas diretas da equipe técnica da Madeireira Bairro Novo para dúvidas sobre compras, resistência e entrega.
              </p>

              <div className="space-y-3 mt-6">
                {PILLAR_FAQ_ITEMS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white rounded-xl border border-stone-200 overflow-hidden transition-all shadow-sm open:border-amber-400"
                  >
                    <summary className="flex items-center justify-between p-4 sm:p-5 font-bold text-stone-900 cursor-pointer select-none hover:bg-amber-50/50 transition-colors list-none">
                      <span className="flex items-center gap-3 text-sm sm:text-base">
                        <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown className="w-4 h-4 text-stone-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-2" />
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-stone-50/40">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </main>

          {/* Sticky Sidebar with Quick Actions & Links */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Quick Quote Widget */}
            <div className="bg-stone-950 text-stone-100 rounded-3xl p-6 border border-stone-800 shadow-xl sticky top-28 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Trees className="w-6 h-6 stroke-[2.25]" />
                </div>
                <div>
                  <h3 className="text-base font-black text-stone-100">Madeireira Bairro Novo</h3>
                  <p className="text-xs text-amber-400 font-semibold">Atendimento Rápido no WhatsApp</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-400" />
                  <span>Entrega expressa no mesmo dia em Curitiba</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Madeira de reflorestamento com nota fiscal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Segunda a Sexta: 08:00 às 18:00</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                    'Olá! Li o guia de Madeira de Pinus e gostaria de solicitar um orçamento para a minha obra.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: (41) 99121-7114</span>
                </a>

                <a
                  href={`tel:${COMPANY_DATA.phones.landlineRaw}`}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Fixo: (41) 3013-4692</span>
                </a>
              </div>

              {/* Quick Products List */}
              <div className="pt-4 border-t border-stone-800">
                <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider mb-3">
                  Produtos Relacionados
                </h4>
                <div className="space-y-2 text-xs">
                  {PRODUCTS_DATA.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/produto/${p.slug}`}
                      className="text-stone-400 hover:text-amber-400 flex items-center justify-between py-1 transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{p.name}</span>
                      <ArrowRight className="w-3 h-3 text-stone-600 group-hover:text-amber-400" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Yard Address */}
              <div className="pt-4 border-t border-stone-800 text-xs text-stone-400 space-y-1">
                <p className="font-bold text-stone-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Pátio de Retirada & Balcão:
                </p>
                <p>{COMPANY_DATA.address.formatted}</p>
                <a
                  href={COMPANY_DATA.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-bold hover:underline inline-block pt-1"
                >
                  Abrir Rotas no Google Maps →
                </a>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
