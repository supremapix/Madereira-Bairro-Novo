import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  Phone,
  MapPin,
  Mail,
  FileText,
  X,
  Headphones
} from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export function FloatingContacts({ onOpenBudget }: { onOpenBudget?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      id: 'whatsapp',
      label: 'WhatsApp Direto',
      icon: MessageCircle,
      href: `https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
        'Olá! Gostaria de cotar madeira de pinus com entrega rápida.'
      )}`,
      color: 'bg-emerald-600 text-white hover:bg-emerald-500',
      isExternal: true
    },
    {
      id: 'phone',
      label: 'Ligar para Fixo',
      icon: Phone,
      href: `tel:${COMPANY_DATA.phones.landlineRaw}`,
      color: 'bg-amber-600 text-stone-950 hover:bg-amber-500',
      isExternal: false
    },
    {
      id: 'maps',
      label: 'Como Chegar (Maps)',
      icon: MapPin,
      href: COMPANY_DATA.social.googleMaps,
      color: 'bg-blue-600 text-white hover:bg-blue-500',
      isExternal: true
    },
    {
      id: 'budget',
      label: 'Solicitar Orçamento',
      icon: FileText,
      onClick: () => {
        setIsOpen(false);
        onOpenBudget?.();
      },
      color: 'bg-amber-500 text-stone-950 hover:bg-amber-400 font-bold',
      isExternal: false
    },
    {
      id: 'email',
      label: 'Enviar E-mail',
      icon: Mail,
      href: `mailto:${COMPANY_DATA.email}`,
      color: 'bg-stone-800 text-stone-200 hover:bg-stone-700',
      isExternal: false
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="mb-3 flex flex-col items-end gap-2.5 p-3 rounded-2xl bg-stone-900/90 backdrop-blur-xl border border-stone-800 shadow-2xl min-w-[220px]"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-500 px-2 pt-1 border-b border-stone-800 w-full text-center pb-2">
              Atendimento Bairro Novo
            </div>

            {contactOptions.map((opt, idx) => {
              const IconComp = opt.icon;

              if (opt.onClick) {
                return (
                  <motion.button
                    key={opt.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={opt.onClick}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 min-h-[44px] ${opt.color}`}
                  >
                    <span>{opt.label}</span>
                    <IconComp className="w-4 h-4 stroke-[2.5]" />
                  </motion.button>
                );
              }

              return (
                <motion.a
                  key={opt.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  href={opt.href}
                  target={opt.isExternal ? '_blank' : undefined}
                  rel={opt.isExternal ? 'noopener noreferrer' : undefined}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 min-h-[44px] ${opt.color}`}
                >
                  <span>{opt.label}</span>
                  <IconComp className="w-4 h-4 stroke-[2.5]" />
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Radial Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir Opções de Contato"
        className={`group relative flex items-center justify-center p-4 rounded-2xl shadow-2xl transition-all duration-300 border active:scale-95 min-w-[56px] min-h-[56px] ${
          isOpen
            ? 'bg-stone-800 text-stone-200 border-amber-500/50'
            : 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white border-emerald-400/40 hover:scale-105 shadow-emerald-950/40'
        }`}
      >
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        )}

        {isOpen ? (
          <X className="w-7 h-7 stroke-[2.5]" />
        ) : (
          <div className="flex items-center gap-2">
            <MessageCircle className="w-7 h-7 fill-white stroke-[1.5]" />
            <span className="hidden sm:inline font-black text-sm pr-1">Falar Conosco</span>
          </div>
        )}
      </button>
    </div>
  );
}
