import { motion } from 'motion/react';
import { ShieldCheck, Truck, Award, Sparkles, MessageCircle, ArrowRight, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DATA } from '../data/company';

export function Hero({ onOpenBudget }: { onOpenBudget?: () => void }) {
  return (
    <div className="relative bg-stone-950 text-stone-100 overflow-hidden border-b border-amber-900/30">
      {/* Background Graphic Grid / Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-950/40 via-stone-950 to-stone-950 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-4 h-4 fill-amber-400" />
              <span>Distribuidora Oficial de Madeira de Pinus em Curitiba</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-100 tracking-tight leading-[1.1]">
              Madeira de Pinus de{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Alta Qualidade
              </span>{' '}
              e Pronta Entrega
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Tábuas, Caibros, Vigas, Pinus Tratado em Autoclave e Madeirite para sua obra ou marcenaria. Entrega rápida no mesmo dia em todos os <strong>75 bairros de Curitiba e Região Metropolitana</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenBudget}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black px-8 py-4 rounded-2xl text-base shadow-xl shadow-amber-950/50 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[56px]"
              >
                <Sparkles className="w-5 h-5 fill-stone-950" />
                <span>SOLICITAR ORÇAMENTO GRÁTIS</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                  'Olá! Gostaria de consultar preços de madeira de pinus.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-2xl text-base shadow-xl shadow-emerald-950/40 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[56px]"
              >
                <MessageCircle className="w-5 h-5 fill-white stroke-[1.5]" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>

            {/* Key Differentiator Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-800/80 text-xs font-semibold text-stone-300">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800">
                <Truck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Frota Própria Curitiba</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pinus Autoclavado CCA</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center lg:justify-start gap-2 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Qualidade Reflorestada</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-amber-900/40 shadow-2xl bg-stone-900 group">
              <img
                src="https://www.superobracasas.com.br/wp-content/uploads/2021/03/pinus-autoclavado.jpg"
                alt="Madeira de Pinus Autoclavado na Madeireira Bairro Novo Curitiba"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />

              {/* Overlaid Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

              {/* Overlaid Floating Specs Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                    <Trees className="w-4 h-4" />
                    Produto em Destaque
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                    Em Estoque
                  </span>
                </div>

                <h3 className="text-xl font-black text-stone-100">
                  Madeira de Pinus Autoclavado
                </h3>
                <p className="text-xs text-stone-300">
                  Resistência imune contra cupins e umidade. Perfeita para decks, pergolados, telhados e construções ao ar livre.
                </p>

                <Link
                  to="/produto/madeira-de-pinus"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors pt-1"
                >
                  <span>Conhecer especificações técnicas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
