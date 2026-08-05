import { useParams, Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { getLocationBySlug, LOCATIONS_DATA } from '../data/locations';
import { PRODUCTS_DATA } from '../data/products';
import { COMPANY_DATA } from '../data/company';
import {
  MapPin,
  Truck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Calculator
} from 'lucide-react';

export function LocationDetailView({ onOpenBudget }: { onOpenBudget?: (slug?: string) => void }) {
  const { slug } = useParams<{ slug: string }>();

  const location = getLocationBySlug(slug || '') || LOCATIONS_DATA[0];

  const featuredProducts = PRODUCTS_DATA.slice(0, 6);

  const nearbyLocations = LOCATIONS_DATA.filter((l) => l.slug !== location.slug).slice(0, 8);

  const isBairro = location.type === 'bairro';

  return (
    <>
      <EnhancedSEO
        title={`Madeira de Pinus em ${location.name} - Curitiba / PR`}
        description={`Madeireira Bairro Novo com entrega rápida de Madeira de Pinus Serrada In Natura, Caibros, Vigas, Ripas e Tábuas de Caixaria no bairro/cidade de ${location.name}. Solicite seu orçamento com frete direto!`}
        canonicalPath={`/${isBairro ? 'bairro' : 'cidade'}/${location.slug}`}
        keywords={[
          `Madeira de Pinus ${location.name}`,
          `Madeireira em ${location.name}`,
          `Caibros e Vigas ${location.name}`,
          `Tábuas para Caixaria ${location.name}`,
          `Escoras de Laje ${location.name}`
        ]}
      />

      <div className="bg-white text-stone-900 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <Link to="/" className="hover:text-amber-700">
              Início
            </Link>
            <span>/</span>
            <Link to="/regioes-atendidas" className="hover:text-amber-700">
              Regiões Atendidas
            </Link>
            <span>/</span>
            <span className="text-amber-700 font-bold">{location.name}</span>
          </div>

          {/* Location Hero Header */}
          <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-6 relative overflow-hidden">
            <div className="space-y-3 max-w-3xl relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-amber-800 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5" />
                Região de Atendimento Prioritário - {location.zone}
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
                Madeira de Pinus em {location.name}
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {location.description}
              </p>
            </div>

            {/* Quick Delivery Specs Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200 text-xs">
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-200">
                <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <span className="block font-bold text-stone-900">Prazo de Entrega</span>
                  <span className="block text-stone-500">{location.estimatedDeliveryTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-200">
                <Truck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="block font-bold text-stone-900">Frete Direto de Fábrica</span>
                  <span className="block text-stone-500">Frota própria desembarcando em {location.name}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-200">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <span className="block font-bold text-stone-900">Pagamento no Local</span>
                  <span className="block text-stone-500">Facilidade no recebimento</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBudget?.()}
                className="w-full sm:w-auto bg-stone-950 hover:bg-stone-900 text-white font-bold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-md border border-amber-400/60 hover:border-amber-300 flex items-center justify-center gap-2 active:scale-95 transition-all min-h-[46px]"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Solicitar Orçamento</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                  `Olá! Preciso de cotação de madeira de pinus com entrega para o bairro/região: *${location.name}*.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-stone-950 hover:bg-stone-900 text-white font-bold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-md border border-emerald-400/60 hover:border-emerald-300 flex items-center justify-center gap-2 active:scale-95 transition-all min-h-[46px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 stroke-[2]" />
                <span>WhatsApp Directo</span>
              </a>
            </div>
          </div>

          {/* Highlights List */}
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-amber-800">
              Vantagens de Comprar na Bairro Novo para {location.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
              {location.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 bg-white p-3.5 rounded-xl border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Products Ready for Dispatch to this Location */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-stone-900">
                  Produtos Disponíveis para Entrega em {location.name}
                </h2>
                <p className="text-xs text-stone-500">
                  Carregamento imediato direto da nossa central no Sítio Cercado.
                </p>
              </div>
              <Link
                to="/produtos"
                className="text-amber-700 hover:underline font-bold text-xs flex items-center gap-1"
              >
                <span>Ver Catálogo Completo</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-stone-50 p-5 rounded-2xl border border-stone-200 flex items-center justify-between gap-4 shadow-sm"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                    <h3 className="text-base font-bold text-stone-900">{p.name}</h3>
                    <p className="text-xs text-stone-500 line-clamp-1">{p.shortDescription}</p>
                  </div>
                  <button
                    onClick={() => onOpenBudget?.(p.slug)}
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-3.5 py-2 rounded-xl text-xs shrink-0 flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                  >
                    <Calculator className="w-3.5 h-3.5 text-stone-950" />
                    <span>Cotar</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Locations Mesh */}
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-stone-900">
              Outros Bairros e Cidades Próximas Atendidas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {nearbyLocations.map((near) => {
                const nearIsBairro = near.type === 'bairro';
                return (
                  <Link
                    key={near.id}
                    to={`/${nearIsBairro ? 'bairro' : 'cidade'}/${near.slug}`}
                    className="p-2.5 rounded-xl bg-white hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors text-center line-clamp-1"
                  >
                    {near.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
