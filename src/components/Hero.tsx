import { motion } from 'motion/react';
import { ShieldCheck, Truck, Award, Sparkles, MessageCircle } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export function Hero({ onOpenBudget }: { onOpenBudget?: () => void }) {
  return (
    <div className="relative bg-stone-950 text-stone-100 overflow-hidden border-b border-amber-500/20">
      {/* Background Video - Visible wood video with refined overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-85 brightness-105 contrast-105 transition-opacity duration-1000"
      >
        <source src="https://img.supremasite.com.br/madeira.mp4" type="video/mp4" />
      </video>

      {/* Balanced Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-stone-950/65 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40 pointer-events-none" />

      {/* Hero Content Container - Elegant Centered Design */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Madeireira Especialista em Curitiba e RMC</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-display">
            Madeiras de Pinus Selecionadas para{' '}
            <span className="text-amber-400 font-editorial italic font-normal underline decoration-amber-500/50 underline-offset-8">
              Construção e Marcenaria
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-stone-200 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow-sm">
            Tradição e estoque a pronta entrega em tábuas, caibros, vigas, pinus autoclavado e madeirite. Atendemos com frota própria em todos os <strong>75 bairros de Curitiba e Região Metropolitana</strong>.
          </p>



          {/* Key Differentiator Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 border-t border-stone-800/80 text-xs font-semibold text-stone-200 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 bg-stone-900/80 backdrop-blur-md p-3.5 rounded-xl border border-stone-800 shadow-md">
              <Truck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Entrega Rápida em Curitiba</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-stone-900/80 backdrop-blur-md p-3.5 rounded-xl border border-stone-800 shadow-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tratamento Autoclave CCA</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-stone-900/80 backdrop-blur-md p-3.5 rounded-xl border border-stone-800 shadow-md">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Manejo Sustentável IBAMA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
