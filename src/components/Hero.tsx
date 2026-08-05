import { motion } from 'motion/react';
import { ShieldCheck, Truck, Award, Sparkles, Gem } from 'lucide-react';

export function Hero({ onOpenBudget }: { onOpenBudget?: () => void }) {
  return (
    <div className="relative bg-stone-950 text-stone-100 overflow-hidden border-b border-amber-500/30">
      {/* Background Video - High Visibility Crystal Clear Wood Footage */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-95 brightness-110 contrast-105 transition-opacity duration-1000 scale-105"
      >
        <source src="https://img.supremasite.com.br/madeira.mp4" type="video/mp4" />
      </video>

      {/* Subtle Luxury Gradient Overlay - Keeps video highly visible while ensuring text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-950/30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-stone-950/20 to-stone-950/70 pointer-events-none" />

      {/* Decorative Gold Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Content Container - High-End Luxury Layout */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 bg-stone-950/50 backdrop-blur-md p-8 sm:p-12 lg:p-14 rounded-3xl border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
        >
          {/* Subtle Top Gold Accent Line */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          {/* Micro-Badge - Chique & Exclusivo */}
          <div className="inline-flex items-center gap-2.5 bg-stone-950/80 border border-amber-400/50 text-amber-300 px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] shadow-lg backdrop-blur-xl">
            <Gem className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-pulse" />
            <span>Qualidade Premium & Exclusividade</span>
          </div>

          {/* Main Headline - Elegant Display Typography */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] font-display drop-shadow-md">
            Madeiras de Pinus Nobres & Selecionadas para{' '}
            <span className="block sm:inline text-amber-400 font-editorial italic font-normal tracking-wide drop-shadow-[0_2px_10px_rgba(217,119,6,0.3)]">
              Projetos de Alto Padrão
            </span>
          </h1>

          {/* Elegant Gold Divider */}
          <div className="flex items-center justify-center gap-3 opacity-80 py-1">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/80" />
            <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/80" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-200 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow-sm">
            Tradição em madeira serrada, beneficiada e autoclavado de alta durabilidade. Atendimento personalizado com frota própria em todos os <strong>75 bairros de Curitiba e Região Metropolitana</strong>.
          </p>

          {/* Key Differentiators - Elegant Glassmorphic Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs font-semibold text-stone-200 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2.5 bg-stone-950/80 backdrop-blur-xl p-4 rounded-2xl border border-amber-500/20 shadow-xl hover:border-amber-400/40 transition-colors">
              <Truck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="tracking-wide">Logística Própria em Curitiba</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 bg-stone-950/80 backdrop-blur-xl p-4 rounded-2xl border border-amber-500/20 shadow-xl hover:border-amber-400/40 transition-colors">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="tracking-wide">Tratamento Autoclave CCA</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 bg-stone-950/80 backdrop-blur-xl p-4 rounded-2xl border border-amber-500/20 shadow-xl hover:border-amber-400/40 transition-colors">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="tracking-wide">Origem Sustentável 100% Legal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

