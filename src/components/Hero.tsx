import { motion } from 'motion/react';
import { ShieldCheck, Truck, Award, Sparkles, MessageCircle, ArrowRight, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DATA } from '../data/company';

export function Hero({ onOpenBudget }: { onOpenBudget?: () => void }) {
  return (
    <div className="relative bg-stone-950 text-stone-100 overflow-hidden border-b border-amber-900/40">
      {/* Background Video - Highly visible with motion impact */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-80 brightness-105 contrast-110 transition-opacity duration-1000"
      >
        <source src="https://img.supremasite.com.br/madeira.mp4" type="video/mp4" />
      </video>

      {/* Balanced Vignette & Text Overlay for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/65 to-stone-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/50 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left drop-shadow-md"
          >
            {/* Main Headline - Refined & Human Architectural Style */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-100 tracking-tight leading-[1.08] font-display">
              Madeiras de Pinus Selecionadas para{' '}
              <span className="text-amber-400 font-editorial italic font-normal underline decoration-amber-500/50 underline-offset-8">
                Construção e Marcenaria
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
              Tradição e estoque a pronta entrega em tábuas, caibros, vigas, pinus autoclavado em autoclave e madeirite. Atendemos com frota própria em todos os <strong>75 bairros de Curitiba e Região Metropolitana</strong>.
            </p>

            {/* Key Differentiator Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-800/80 text-xs font-semibold text-stone-200">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-stone-950/80 backdrop-blur-md p-3 rounded-xl border border-stone-800 shadow-md">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Entrega Rápida em Curitiba</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-stone-950/80 backdrop-blur-md p-3 rounded-xl border border-stone-800 shadow-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tratamento Autoclave CCA</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center lg:justify-start gap-2 bg-stone-950/80 backdrop-blur-md p-3 rounded-xl border border-stone-800 shadow-md">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Manejo Sustentável IBAMA</span>
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
