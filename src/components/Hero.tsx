import { motion } from 'motion/react';
import { MapPin, Truck, Trees, MessageCircle, Calculator, ChevronRight } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export function Hero({ onOpenBudget }: { onOpenBudget?: () => void }) {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
    `Olá! Vim pelo site da Madeireira Bairro Novo e gostaria de um orçamento.\nProduto:\nMedidas:\nQuantidade:\nBairro, cidade e CEP:\nEntrega ou retirada:\nData desejada:`
  )}`;

  return (
    <div className="relative bg-stone-950 text-stone-100 overflow-hidden border-b border-amber-500/30">
      {/* Background Video - High Visibility Crystal Clear Wood Footage */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90 brightness-105 contrast-105 transition-opacity duration-1000 scale-105"
      >
        <source src="https://img.supremasite.com.br/madeira.mp4" type="video/mp4" />
      </video>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 sm:space-y-8 bg-stone-950/70 backdrop-blur-md p-6 sm:p-10 lg:p-12 rounded-3xl border border-amber-500/30 shadow-2xl relative"
        >
          {/* Badge - Localização da Loja e Depósito */}
          <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-amber-400/50 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-xl">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Sítio Cercado – Curitiba, PR | Depósito e Loja Física</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] font-display">
            Madeireira em Curitiba:{' '}
            <span className="block sm:inline text-amber-400 font-editorial italic font-normal tracking-wide">
              madeira de pinus para sua obra
            </span>
          </h1>

          {/* Subtitle / Direct Company Overview */}
          <p className="text-sm sm:text-base lg:text-lg text-stone-200 leading-relaxed font-normal max-w-3xl mx-auto">
            Compre <strong>tábuas de caixaria</strong> (15 a 30cm), <strong>caibros</strong> (5x5 e 5x7cm), <strong>vigas</strong>, <strong>ripas</strong>, <strong>sarrafos</strong>, <strong>barrotes</strong>, <strong>escoras para laje</strong>, <strong>madeirite</strong>, <strong>deck</strong> e <strong>pergolado</strong>. Atendimento direto com orçamento sob consulta e entregas agendadas em todos os bairros de Curitiba e Região Metropolitana.
          </p>

          {/* Direct CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-6 py-3.5 rounded-2xl text-sm shadow-xl border border-emerald-400/50 transition-all active:scale-95 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Pedir Orçamento via WhatsApp</span>
            </a>

            <button
              onClick={onOpenBudget}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-6 py-3.5 rounded-2xl text-sm shadow-xl border border-amber-300 transition-all active:scale-95 min-h-[48px]"
            >
              <Calculator className="w-4 h-4 text-stone-950" />
              <span>Enviar Lista de Peças</span>
            </button>
          </div>

          {/* Essential Info Strip: Whats, Endereço, Frete */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs font-semibold text-stone-300 border-t border-stone-800/80">
            <div className="flex items-center justify-center gap-2 bg-stone-900/60 p-3 rounded-xl border border-stone-800">
              <Trees className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Pinus In Natura e Autoclavado CCA</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-stone-900/60 p-3 rounded-xl border border-stone-800">
              <Truck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Entregas em Curitiba e RMC</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-stone-900/60 p-3 rounded-xl border border-stone-800">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Sítio Cercado - {COMPANY_DATA.phones.whatsapp}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


