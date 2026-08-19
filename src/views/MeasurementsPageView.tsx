import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Ruler,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  FileText,
  Sparkles,
  Layers,
  Building2,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_DATA } from '../data/company';
import {
  STANDARD_MEASUREMENTS_TABLE,
  MEASUREMENT_FAQS,
  calculateTimberVolume,
  calculateCaixariaTimber
} from '../data/measurements';

export function MeasurementsPageView({ onOpenBudget }: { onOpenBudget?: (slug?: string) => void }) {
  // Calculator 1: Custom Piece Volume (m³)
  const [thickCm, setThickCm] = useState<number>(2.5);
  const [widthCm, setWidthCm] = useState<number>(30);
  const [lengthM, setLengthM] = useState<number>(3.0);
  const [quantity, setQuantity] = useState<number>(10);

  const customCalc = calculateTimberVolume(thickCm, widthCm, lengthM, quantity);

  // Calculator 2: Caixaria Formwork
  const [beamLengthM, setBeamLengthM] = useState<number>(20);
  const [beamHeightCm, setBeamHeightCm] = useState<number>(30);
  const [hasBothSides, setHasBothSides] = useState<boolean>(true);

  const caixariaCalc = calculateCaixariaTimber(beamLengthM, beamHeightCm, hasBothSides);

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
        name: 'Medidas e Calculadora de m³',
        item: `${COMPANY_DATA.canonicalUrl}/medidas`
      }
    ]
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen">
      <EnhancedSEO
        title="Medidas de Madeira de Pinus: Tabela de Bitolas e Calculadora de m³ e Caixaria"
        description="Consulte a tabela completa de medidas e bitolas comerciais de pinus (tábuas, caibros, vigas, ripas) e use nossa calculadora de volume cúbico (m³) e caixarias para construção em Curitiba."
        canonicalPath="/medidas"
        keywords={[
          'Medidas Madeira de Pinus',
          'Tabela Bitolas Pinus Curitiba',
          'Calculadora Metro Cúbico Madeira',
          'Calcular Caixaria Vigas Baldrame',
          'Medidas Tábua de 30',
          'Caibro 5x5 Medidas Reais'
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
            <span className="text-amber-400 font-bold">Medidas & Calculadora</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider mb-4">
            <Ruler className="w-3.5 h-3.5" />
            Engenharia de Madeiras & Ferramenta Interativa
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-stone-100 tracking-tight leading-tight max-w-4xl">
            Tabela de Medidas de Pinus e Calculadora de m³ para Obra
          </h1>

          <p className="mt-4 text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Consulte as bitolas nominais e reais de tábuas, caibros, vigas, ripas e escoras. Use as calculadoras abaixo para dimensionar a quantidade de peças e o volume cúbico exato da sua lista de materiais.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* INTERACTIVE CALCULATOR SUITE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Tool 1: Volume Cúbico m³ & Dúzias */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Ferramenta 1
              </span>
              <h2 className="text-xl font-black text-stone-900 mt-2 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-600" />
                Calculadora de Volume Cúbico (m³) e Dúzias
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Insira as dimensões das peças para obter o volume em m³ e a cubagem total.
              </p>
            </div>

            {/* Quick Bitola Presets */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 block">Predefinições Rápidas de Bitola:</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: 'Tábua 30cm (2.5x30x3m)', t: 2.5, w: 30, l: 3.0 },
                  { label: 'Tábua 20cm (2.5x20x3m)', t: 2.5, w: 20, l: 3.0 },
                  { label: 'Caibro 5x5 (5x5x3m)', t: 5.0, w: 5.0, l: 3.0 },
                  { label: 'Viga 5x15 (5x15x3m)', t: 5.0, w: 15.0, l: 3.0 },
                  { label: 'Ripa 1.2x5 (1.2x5x3m)', t: 1.2, w: 5.0, l: 3.0 },
                  { label: 'Escora 7x7 (7x7x3m)', t: 7.0, w: 7.0, l: 3.0 }
                ].map((preset, pIdx) => (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => {
                      setThickCm(preset.t);
                      setWidthCm(preset.w);
                      setLengthM(preset.l);
                    }}
                    className="text-[11px] font-semibold bg-stone-100 hover:bg-amber-100 text-stone-800 hover:text-amber-950 px-2.5 py-1 rounded-lg transition-colors border border-stone-200"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Espessura (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  value={thickCm}
                  onChange={(e) => setThickCm(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Largura (cm)</label>
                <input
                  type="number"
                  step="0.5"
                  value={widthCm}
                  onChange={(e) => setWidthCm(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Comprimento (m)</label>
                <input
                  type="number"
                  step="0.5"
                  value={lengthM}
                  onChange={(e) => setLengthM(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Quantidade (un)</label>
                <input
                  type="number"
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 font-mono font-bold"
                />
              </div>
            </div>

            {/* Results Box */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-sm">
                  <span className="text-[11px] text-stone-500 block font-medium">Vol. por Peça</span>
                  <span className="text-base font-black text-amber-900 font-mono">{customCalc.volumePerPieceM3} m³</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-sm">
                  <span className="text-[11px] text-stone-500 block font-medium">Volume Total</span>
                  <span className="text-base font-black text-amber-900 font-mono">{customCalc.totalVolumeM3} m³</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-sm">
                  <span className="text-[11px] text-stone-500 block font-medium">Dúzias</span>
                  <span className="text-base font-black text-amber-900 font-mono">{customCalc.totalDozens} dz</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-sm">
                  <span className="text-[11px] text-stone-500 block font-medium">Peso Estimado</span>
                  <span className="text-base font-black text-amber-900 font-mono">~{customCalc.estimatedWeightKg} kg</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-amber-900">
                  Total de <strong>{quantity} peças</strong> de {thickCm}x{widthCm}cm com {lengthM}m.
                </p>
                <a
                  href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                    `Olá! Calculei no site: ${quantity} peças de Pinus (${thickCm}cm x ${widthCm}cm x ${lengthM}m) totalizando ${customCalc.totalVolumeM3} m³. Gostaria de um orçamento.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Cotar este Lote no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tool 2: Calculadora de Caixaria para Baldrames & Vigas */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Ferramenta 2
              </span>
              <h2 className="text-xl font-black text-stone-900 mt-2 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600" />
                Calculadora de Caixaria para Concreto
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Descubra a quantidade de tábuas de 3 metros e sarrafos para formas de vigas e baldrames.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Comprimento Linear da Viga/Baldrame (metros):
                </label>
                <input
                  type="number"
                  step="1"
                  value={beamLengthM}
                  onChange={(e) => setBeamLengthM(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-500 font-mono font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Altura da Viga (cm):</label>
                  <select
                    value={beamHeightCm}
                    onChange={(e) => setBeamHeightCm(parseInt(e.target.value, 10))}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-500 bg-white"
                  >
                    <option value={15}>15 cm (Tábua de 15)</option>
                    <option value={20}>20 cm (Tábua de 20)</option>
                    <option value={25}>25 cm (Tábua de 25)</option>
                    <option value={30}>30 cm (Tábua de 30)</option>
                    <option value={40}>40 cm (2x Tábuas de 20)</option>
                    <option value={50}>50 cm (2x Tábuas de 25)</option>
                    <option value={60}>60 cm (2x Tábuas de 30)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Laterais da Forma:</label>
                  <select
                    value={hasBothSides ? 'both' : 'single'}
                    onChange={(e) => setHasBothSides(e.target.value === 'both')}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-500 bg-white"
                  >
                    <option value="both">2 Laterais (Viga Completa)</option>
                    <option value="single">1 Lateral (Encostada no muro/solo)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Caixaria Results */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-sm">
                  <span className="text-[11px] text-stone-500 block font-medium">Tábuas (3m)</span>
                  <span className="text-base font-black text-emerald-950 font-mono">{caixariaCalc.boardsNeeded} un</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-sm">
                  <span className="text-[11px] text-stone-500 block font-medium">Dúzias Tábuas</span>
                  <span className="text-base font-black text-emerald-950 font-mono">{caixariaCalc.dozensNeeded} dz</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-sm">
                  <span className="text-[11px] text-stone-500 block font-medium">Sarrafos Gravata</span>
                  <span className="text-base font-black text-emerald-950 font-mono">{caixariaCalc.sarrafosNeeded} un</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-sm">
                  <span className="text-[11px] text-stone-500 block font-medium">Volume Total</span>
                  <span className="text-base font-black text-emerald-950 font-mono">{caixariaCalc.estimatedVolumeM3} m³</span>
                </div>
              </div>

              <p className="text-xs text-emerald-900 leading-relaxed">
                Recomendação: usar <strong>{caixariaCalc.recommendedBoardType}</strong> com gravatas verticais de sarrafo a cada 50cm e arame recozido para travamento estanque.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                    `Olá! Preciso de caixaria para ${beamLengthM} metros de viga de ${beamHeightCm}cm. Estimativa: ${caixariaCalc.boardsNeeded} tábuas de 3m e ${caixariaCalc.sarrafosNeeded} sarrafos. Gostaria de cotar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotar Material de Caixaria no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* STANDARD MEASUREMENTS MASTER TABLE */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div>
              <h2 className="text-2xl font-black text-stone-900 flex items-center gap-2">
                <Layers className="w-6 h-6 text-amber-600" />
                <span>Tabela Padrão de Bitolas Comerciais de Pinus em Curitiba</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Comparativo de dimensões nominais de corte de serra vs bitola seca, comprimento comercial e cubagem individual.
              </p>
            </div>
            <Link
              to="/precos"
              className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 self-start sm:self-auto transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Ver Tabela de Preços</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100 text-stone-900 font-bold">
                  <th className="py-3 px-4">Item & Denominação</th>
                  <th className="py-3 px-4">Bitola Nominal (Corte)</th>
                  <th className="py-3 px-4">Bitola Real (Seca)</th>
                  <th className="py-3 px-4">Comprimento Padrão</th>
                  <th className="py-3 px-4">Volume por Peça (m³)</th>
                  <th className="py-3 px-4">Peças por m³</th>
                  <th className="py-3 px-4">Aplicação Típica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {STANDARD_MEASUREMENTS_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-stone-900">{row.name}</td>
                    <td className="py-3 px-4 font-mono text-xs font-semibold text-amber-900">{row.nominalCm}</td>
                    <td className="py-3 px-4 font-mono text-xs text-stone-600">{row.realCm}</td>
                    <td className="py-3 px-4 font-mono text-xs">{row.lengthsM}</td>
                    <td className="py-3 px-4 font-mono text-xs font-bold text-stone-900">{row.volumePerPieceM3.toFixed(4)} m³</td>
                    <td className="py-3 px-4 font-mono text-xs font-black text-amber-700">{row.piecesPerM3} un/m³</td>
                    <td className="py-3 px-4 text-xs text-stone-600">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TECHNICAL MEASUREMENT FAQS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-stone-900">
            Perguntas Frequentes sobre Medidas e Cubagem de Pinus
          </h2>
          <div className="space-y-3">
            {MEASUREMENT_FAQS.map((faq, idx) => (
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
