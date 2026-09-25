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
  Home,
  Copy,
  Check,
  Smartphone,
  Table as TableIcon
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_DATA } from '../data/company';
import {
  STANDARD_MEASUREMENTS_TABLE,
  MEASUREMENT_FAQS,
  calculateTimberVolume,
  calculateCaixariaTimber,
  calculateRoofTimberEngradamento
} from '../data/measurements';

export function MeasurementsPageView({ onOpenBudget }: { onOpenBudget?: (slug?: string) => void }) {
  // Active Tab for Calculators
  const [calcTab, setCalcTab] = useState<'volume' | 'caixaria' | 'telhado'>('volume');

  // Mobile Table View Mode: 'cards' or 'table'
  const [tableViewMode, setTableViewMode] = useState<'cards' | 'table'>('cards');

  // Copy notification state
  const [copiedText, setCopiedText] = useState<string | null>(null);

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

  // Calculator 3: Roof Framing (Engradamento de Telhado)
  const [roofAreaM2, setRoofAreaM2] = useState<number>(80);
  const [tileType, setTileType] = useState<'ceramica' | 'concreto' | 'fibrocimento'>('ceramica');

  const roofCalc = calculateRoofTimberEngradamento(roofAreaM2, tileType);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const loadPreset = (t: number, w: number, l: number) => {
    setThickCm(t);
    setWidthCm(w);
    setLengthM(l);
    setCalcTab('volume');
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
        name: 'Tabela de Medidas e Calculadora de m³',
        item: `${COMPANY_DATA.canonicalUrl}/medidas`
      }
    ]
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Calculadora de Madeira de Pinus e Metro Cúbico (m³)',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    description: 'Calculadora online de cubagem (m³), dúzias, tábuas para caixaria de concreto e engradamento de telhado em Curitiba.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL'
    }
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen">
      <EnhancedSEO
        title="Tabela de Medidas de Pinus e Calculadora de m³ | Curitiba"
        description="Tabela completa de bitolas nominais e reais de pinus em Curitiba. Calcule o volume em m³, caixaria e envie sua lista para orçamento rápido via WhatsApp."
        canonicalPath="/medidas"
        keywords={[
          'Tabela de Medidas de Pinus',
          'Calculadora Metro Cúbico Madeira',
          'Bitolas Nominais e Reais',
          'Tábua de 30 Medidas',
          'Calcular Caixaria Pinus',
          'Engradamento de Telhado Curitiba'
        ]}
        jsonLd={[breadcrumbSchema, webAppSchema]}
      />

      {/* Hero Section */}
      <section className="bg-stone-950 text-stone-100 py-12 sm:py-16 relative overflow-hidden border-b border-amber-900/30">
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
            Consulte a tabela oficial de bitolas nominais (corte de serra) e reais (secas ao ar). Use nossa calculadora interativa para estimar metros cúbicos (m³), dúzias, formas de caixaria e engradamento de telhado antes de cotar.
          </p>

          {/* Quick Step Guide */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-800/80 text-xs text-stone-300">
            <div className="flex items-center gap-2.5 bg-stone-900/70 p-3 rounded-xl border border-stone-800">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-black flex items-center justify-center shrink-0 text-[11px]">1</span>
              <span>Escolha a bitola na tabela ou insira as medidas</span>
            </div>
            <div className="flex items-center gap-2.5 bg-stone-900/70 p-3 rounded-xl border border-stone-800">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-black flex items-center justify-center shrink-0 text-[11px]">2</span>
              <span>Simule o volume cúbico (m³) ou peças necessárias</span>
            </div>
            <div className="flex items-center gap-2.5 bg-stone-900/70 p-3 rounded-xl border border-stone-800">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-black flex items-center justify-center shrink-0 text-[11px]">3</span>
              <span>Envie para orçamento rápido com frete para sua região</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* CALCULATOR SUITE SECTION */}
        <section id="calculadora" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Ferramenta Gratuita
              </span>
              <h2 className="text-2xl font-black text-stone-900 mt-2 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-amber-600" />
                <span>Calculadora de Madeira para Construção</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Selecione a modalidade de cálculo conforme a etapa da sua construção.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex flex-wrap gap-1 bg-stone-100 p-1.5 rounded-2xl border border-stone-200 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setCalcTab('volume')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  calcTab === 'volume'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Volume m³ & Dúzias</span>
              </button>

              <button
                type="button"
                onClick={() => setCalcTab('caixaria')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  calcTab === 'caixaria'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Caixaria / Vigas</span>
              </button>

              <button
                type="button"
                onClick={() => setCalcTab('telhado')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  calcTab === 'telhado'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Engradamento Telhado</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Volume Cúbico (m³) */}
          {calcTab === 'volume' && (
            <div className="space-y-6">
              {/* Quick Bitola Presets */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-700 block">Predefinições Rápidas de Bitola Comercial:</label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'Tábua 30cm (2.5x30x3m)', t: 2.5, w: 30, l: 3.0 },
                    { label: 'Tábua 25cm (2.5x25x3m)', t: 2.5, w: 25, l: 3.0 },
                    { label: 'Tábua 20cm (2.5x20x3m)', t: 2.5, w: 20, l: 3.0 },
                    { label: 'Tábua 15cm (2.5x15x3m)', t: 2.5, w: 15, l: 3.0 },
                    { label: 'Caibro 5x5 (5x5x3m)', t: 5.0, w: 5.0, l: 3.0 },
                    { label: 'Viga 5x15 (5x15x3m)', t: 5.0, w: 15.0, l: 3.0 },
                    { label: 'Viga 5x11 (5x11x3m)', t: 5.0, w: 11.0, l: 3.0 },
                    { label: 'Ripa 1.2x5 (1.2x5x3m)', t: 1.2, w: 5.0, l: 3.0 },
                    { label: 'Sarrafo 2.5x5 (2.5x5x3m)', t: 2.5, w: 5.0, l: 3.0 },
                    { label: 'Escora 7x7 (7x7x3m)', t: 7.0, w: 7.0, l: 3.0 }
                  ].map((preset, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => loadPreset(preset.t, preset.w, preset.l)}
                      className="text-[11px] font-semibold bg-stone-100 hover:bg-amber-100 text-stone-800 hover:text-amber-950 px-2.5 py-1.5 rounded-lg transition-colors border border-stone-200"
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
                    min="0.5"
                    value={thickCm}
                    onChange={(e) => setThickCm(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 font-mono font-bold"
                  />
                  <span className="text-[10px] text-stone-500">Ex: 2,5 para tábua</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Largura (cm)</label>
                  <input
                    type="number"
                    step="0.5"
                    min="1"
                    value={widthCm}
                    onChange={(e) => setWidthCm(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 font-mono font-bold"
                  />
                  <span className="text-[10px] text-stone-500">Ex: 30 para tábua</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Comprimento (m)</label>
                  <input
                    type="number"
                    step="0.5"
                    min="1"
                    value={lengthM}
                    onChange={(e) => setLengthM(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 font-mono font-bold"
                  />
                  <span className="text-[10px] text-stone-500">Padrão: 3,00m</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Quantidade de Peças</label>
                  <input
                    type="number"
                    step="1"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 0)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-amber-300 focus:outline-none focus:border-amber-500 font-mono font-bold text-amber-900 bg-amber-50/30"
                  />
                  <span className="text-[10px] text-stone-500">Total de unidades</span>
                </div>
              </div>

              {/* Results Box */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white p-3.5 rounded-xl border border-amber-100 shadow-sm">
                    <span className="text-[11px] text-stone-500 block font-medium">Vol. por Peça</span>
                    <span className="text-lg font-black text-stone-900 font-mono">{customCalc.volumePerPieceM3} m³</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-amber-100 shadow-sm">
                    <span className="text-[11px] text-stone-500 block font-medium">Volume Total do Lote</span>
                    <span className="text-lg font-black text-amber-900 font-mono">{customCalc.totalVolumeM3} m³</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-amber-100 shadow-sm">
                    <span className="text-[11px] text-stone-500 block font-medium">Equivalente em Dúzias</span>
                    <span className="text-lg font-black text-stone-900 font-mono">{customCalc.totalDozens} dz</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-amber-100 shadow-sm">
                    <span className="text-[11px] text-stone-500 block font-medium">Peso Aprox. de Carga</span>
                    <span className="text-lg font-black text-stone-900 font-mono">~{customCalc.estimatedWeightKg} kg</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <p className="text-xs text-amber-950 font-medium">
                    Resumo: <strong>{quantity} peças</strong> de {thickCm}x{widthCm}cm com {lengthM}m ({customCalc.totalLinearMeters} metros lineares).
                  </p>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => handleCopy(`${quantity} peças de Pinus (${thickCm}cm x ${widthCm}cm x ${lengthM}m) - Volume: ${customCalc.totalVolumeM3} m³ (${customCalc.totalDozens} dúzias)`)}
                      className="px-3 py-2 rounded-xl text-xs font-bold border border-amber-300 bg-white hover:bg-amber-100 text-stone-800 flex items-center gap-1.5 transition-colors"
                      title="Copiar dados para colar em sua lista"
                    >
                      {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-600" />}
                      <span>{copiedText ? 'Copiado!' : 'Copiar'}</span>
                    </button>

                    <a
                      href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                        `Olá! Calculei na página de medidas: ${quantity} peças de Pinus (${thickCm}cm x ${widthCm}cm x ${lengthM}m), totalizando ${customCalc.totalVolumeM3} m³ (${customCalc.totalDozens} dúzias). Gostaria de um orçamento com frete para Curitiba.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Cotar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Calculadora de Caixaria para Vigas e Baldrames */}
          {calcTab === 'caixaria' && (
            <div className="space-y-6">
              <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-xs text-emerald-900 leading-relaxed">
                Dimensionamento padrão para formas de concreto armado. O cálculo inclui 10% de margem de segurança para emendas e recortes e sarrafos de travamento vertical (gravatas) a cada 50cm.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Comprimento da Viga/Baldrame (metros):
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="1"
                    value={beamLengthM}
                    onChange={(e) => setBeamLengthM(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-500 font-mono font-bold"
                  />
                  <span className="text-[10px] text-stone-500">Ex: 20 metros de viga</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Altura da Viga / Largura da Tábua:</label>
                  <select
                    value={beamHeightCm}
                    onChange={(e) => setBeamHeightCm(parseInt(e.target.value, 10))}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-500 bg-white font-medium"
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
                  <label className="text-xs font-bold text-stone-700 block mb-1">Faces da Forma:</label>
                  <select
                    value={hasBothSides ? 'both' : 'single'}
                    onChange={(e) => setHasBothSides(e.target.value === 'both')}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-500 bg-white font-medium"
                  >
                    <option value="both">2 Laterais (Viga Completa)</option>
                    <option value="single">1 Lateral (Encostada em muro/solo)</option>
                  </select>
                </div>
              </div>

              {/* Caixaria Results */}
              <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-sm">
                    <span className="text-[11px] text-stone-500 block font-medium">Tábuas (3,00m)</span>
                    <span className="text-lg font-black text-emerald-950 font-mono">{caixariaCalc.boardsNeeded} un</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-sm">
                    <span className="text-[11px] text-stone-500 block font-medium">Dúzias de Tábuas</span>
                    <span className="text-lg font-black text-emerald-950 font-mono">{caixariaCalc.dozensNeeded} dz</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-sm">
                    <span className="text-[11px] text-stone-500 block font-medium">Sarrafos Gravata (3m)</span>
                    <span className="text-lg font-black text-emerald-950 font-mono">{caixariaCalc.sarrafosNeeded} un</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-sm">
                    <span className="text-[11px] text-stone-500 block font-medium">Volume Estimado</span>
                    <span className="text-lg font-black text-emerald-950 font-mono">{caixariaCalc.estimatedVolumeM3} m³</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                    Especificação recomendada: <strong>{caixariaCalc.recommendedBoardType}</strong> com travamento a cada 50cm.
                  </p>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => handleCopy(`Caixaria para ${beamLengthM}m de viga (${beamHeightCm}cm de altura): ${caixariaCalc.boardsNeeded} tábuas de 3m (${caixariaCalc.dozensNeeded} dz) e ${caixariaCalc.sarrafosNeeded} sarrafos de travamento`)}
                      className="px-3 py-2 rounded-xl text-xs font-bold border border-emerald-300 bg-white hover:bg-emerald-100 text-stone-800 flex items-center gap-1.5 transition-colors"
                    >
                      {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-600" />}
                      <span>{copiedText ? 'Copiado!' : 'Copiar'}</span>
                    </button>

                    <a
                      href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                        `Olá! Preciso de madeiramento de caixaria para ${beamLengthM} metros lineares de viga (${beamHeightCm}cm de altura). Estimativa calculada: ${caixariaCalc.boardsNeeded} tábuas de 3m e ${caixariaCalc.sarrafosNeeded} sarrafos de gravata. Gostaria de cotar para entrega em Curitiba.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Cotar Caixaria no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Calculadora de Engradamento de Telhado */}
          {calcTab === 'telhado' && (
            <div className="space-y-6">
              <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 text-xs text-amber-950 leading-relaxed">
                Estimativa de caibros 5x5cm, ripas 1,2x5cm e terças/vigas 5x12cm por metro quadrado de cobertura com 10% de margem técnica.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Área Total de Telhado (m² em projeção inclinada):
                  </label>
                  <input
                    type="number"
                    step="5"
                    min="10"
                    value={roofAreaM2}
                    onChange={(e) => setRoofAreaM2(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 font-mono font-bold"
                  />
                  <span className="text-[10px] text-stone-500">Ex: 80 m² para casa média</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Tipo de Telha:</label>
                  <select
                    value={tileType}
                    onChange={(e) => setTileType(e.target.value as any)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 bg-white font-medium"
                  >
                    <option value="ceramica">Telha Cerâmica (Exige caibros a cada 50cm e ripas)</option>
                    <option value="concreto">Telha de Concreto (Maior peso, exige caibros e ripas reforçadas)</option>
                    <option value="fibrocimento">Telha de Fibrocimento / Ondulada (Dispensa ripas finas, terças maiores)</option>
                  </select>
                </div>
              </div>

              {/* Roof Results */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {roofCalc.itemsBreakdown.map((item, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-xl border border-amber-100 shadow-sm space-y-1">
                      <span className="text-[11px] text-stone-500 block font-medium">{item.description}</span>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg font-black text-amber-900 font-mono">{item.quantity} {item.unit}</span>
                        <span className="text-xs font-bold text-stone-500 font-mono">{item.volumeM3} m³</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <p className="text-xs text-amber-950 font-medium">
                    Total: <strong>{roofCalc.totalPieces} peças</strong> de engradamento (Volume Total: ~{roofCalc.totalVolumeM3} m³).
                  </p>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => handleCopy(`Engradamento para ${roofAreaM2}m² de telhado (${tileType}): ` + roofCalc.itemsBreakdown.map((i) => `${i.quantity} ${i.description}`).join(', '))}
                      className="px-3 py-2 rounded-xl text-xs font-bold border border-amber-300 bg-white hover:bg-amber-100 text-stone-800 flex items-center gap-1.5 transition-colors"
                    >
                      {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-600" />}
                      <span>{copiedText ? 'Copiado!' : 'Copiar'}</span>
                    </button>

                    <a
                      href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                        `Olá! Calculei o engradamento para ${roofAreaM2} m² de telhado (${tileType}). Estimativa: ` +
                          roofCalc.itemsBreakdown.map((i) => `${i.quantity} un de ${i.description}`).join(', ') +
                          `. Gostaria de um orçamento para Curitiba.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Cotar Engradamento no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* STANDARD MEASUREMENTS MASTER TABLE & MOBILE CARDS */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-black text-stone-900">
                  Tabela Oficial de Bitolas Comerciais de Pinus em Curitiba
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Comparativo de dimensões nominais de corte de serra vs bitola seca, comprimento comercial e cubagem individual.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              {/* View Switcher for Mobile / Desktop */}
              <div className="sm:hidden flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
                <button
                  type="button"
                  onClick={() => setTableViewMode('cards')}
                  className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                    tableViewMode === 'cards' ? 'bg-amber-500 text-stone-950 shadow-sm' : 'text-stone-600'
                  }`}
                  title="Visualização em Cards"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Cards</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTableViewMode('table')}
                  className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                    tableViewMode === 'table' ? 'bg-amber-500 text-stone-950 shadow-sm' : 'text-stone-600'
                  }`}
                  title="Visualização em Tabela"
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span>Tabela</span>
                </button>
              </div>

              <Link
                to="/precos"
                className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Ver Preços por m³</span>
              </Link>
            </div>
          </div>

          {/* MOBILE CARDS VIEW (Visible on mobile by default or when toggled) */}
          <div className={`${tableViewMode === 'cards' ? 'block sm:hidden' : 'hidden'} space-y-3`}>
            {STANDARD_MEASUREMENTS_TABLE.map((row, idx) => (
              <div
                key={idx}
                className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-3 shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">{row.name}</h3>
                    <p className="text-[11px] text-stone-500">{row.popularName}</p>
                  </div>
                  <span className="text-[11px] font-black font-mono text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                    {row.nominalCm}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-stone-200/80">
                  <div className="bg-white p-2 rounded-lg border border-stone-200">
                    <span className="text-[10px] text-stone-400 block font-medium">Bitola Real (Seca)</span>
                    <span className="font-mono font-semibold text-stone-800">{row.realCm}</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-stone-200">
                    <span className="text-[10px] text-stone-400 block font-medium">Comprimento</span>
                    <span className="font-mono font-semibold text-stone-800">{row.lengthsM}</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-stone-200">
                    <span className="text-[10px] text-stone-400 block font-medium">Vol. por Peça</span>
                    <span className="font-mono font-semibold text-stone-800">{row.volumePerPieceM3.toFixed(4)} m³</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-stone-200">
                    <span className="text-[10px] text-stone-400 block font-medium">Peças por m³</span>
                    <span className="font-mono font-black text-amber-700">{row.piecesPerM3} un/m³</span>
                  </div>
                </div>

                <p className="text-[11px] text-stone-600 leading-snug">
                  <strong>Aplicação:</strong> {row.usage}
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      const [thickStr, widthStr] = row.nominalCm.replace(' cm', '').split(' x ');
                      const t = parseFloat(thickStr.replace(',', '.')) || 2.5;
                      const w = parseFloat(widthStr.replace(',', '.')) || 30;
                      loadPreset(t, w, 3.0);
                      const el = document.getElementById('calculadora');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-bold py-1.5 px-3 rounded-xl text-[11px] transition-colors flex items-center justify-center gap-1"
                  >
                    <Calculator className="w-3 h-3 text-amber-600" />
                    <span>Calcular m³</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                      `Olá! Gostaria de cotar *${row.name}* (Bitola: ${row.nominalCm}) para entrega em Curitiba.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-1.5 px-3 rounded-xl text-[11px] transition-colors flex items-center justify-center gap-1 shrink-0"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Cotar</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP & FULL TABLE VIEW */}
          <div className={`${tableViewMode === 'table' ? 'block' : 'hidden sm:block'} overflow-x-auto`}>
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
                  <th className="py-3 px-4 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {STANDARD_MEASUREMENTS_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-bold text-stone-900 block">{row.name}</span>
                      <span className="text-[11px] text-stone-400 block">{row.popularName}</span>
                    </td>
                    <td className="py-3 px-4 font-mono text-xs font-semibold text-amber-900">{row.nominalCm}</td>
                    <td className="py-3 px-4 font-mono text-xs text-stone-600">{row.realCm}</td>
                    <td className="py-3 px-4 font-mono text-xs">{row.lengthsM}</td>
                    <td className="py-3 px-4 font-mono text-xs font-bold text-stone-900">{row.volumePerPieceM3.toFixed(4)} m³</td>
                    <td className="py-3 px-4 font-mono text-xs font-black text-amber-700">{row.piecesPerM3} un/m³</td>
                    <td className="py-3 px-4 text-xs text-stone-600">{row.usage}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            const [thickStr, widthStr] = row.nominalCm.replace(' cm', '').split(' x ');
                            const t = parseFloat(thickStr.replace(',', '.')) || 2.5;
                            const w = parseFloat(widthStr.replace(',', '.')) || 30;
                            loadPreset(t, w, 3.0);
                            const el = document.getElementById('calculadora');
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="p-1.5 rounded-lg bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 transition-colors"
                          title="Carregar na Calculadora"
                        >
                          <Calculator className="w-3.5 h-3.5" />
                        </button>
                        <a
                          href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                            `Olá! Gostaria de cotar *${row.name}* (Bitola: ${row.nominalCm}) para entrega em Curitiba.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                          title="Cotar no WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

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

        {/* BOTTOM FAST QUOTATION BANNER */}
        <div className="bg-stone-900 text-stone-100 p-8 rounded-3xl border border-amber-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-stone-100">
              Precisa de bitolas sob medida ou volume fechado?
            </h3>
            <p className="text-sm text-stone-400 max-w-xl">
              Nossa equipe técnica no Sítio Cercado atende carpinteiros, construtoras e obras residenciais em Curitiba com frota própria e entrega rápida.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenBudget?.()}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Solicitar Orçamento</span>
            </button>
            <a
              href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                'Olá! Estava consultando a tabela de medidas de pinus e gostaria de cotar um lote de madeira para minha obra.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direto</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
