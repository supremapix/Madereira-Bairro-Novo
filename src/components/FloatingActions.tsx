import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Share2,
  X,
  Copy,
  Check,
  PhoneCall,
  MessageCircle,
  ArrowUp,
  Sparkles,
  ExternalLink,
  RefreshCw,
  ImageIcon,
  MapPin,
  Star
} from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

interface FloatingActionsProps {
  onOpenBudget?: () => void;
}

// 19 Persuasive Sales Copy Variations for Madeireira Bairro Novo (Madeira de Pinus Serrada In Natura)
const SALES_COPY_VARIATIONS = [
  "🌲 Encontrei a melhor Madeireira de Pinus Serrado em Curitiba! Preço direto da distribuidora e entrega rápida no canteiro de obras. Confira:",
  "🏡 Quer construir a estrutura da sua obra com máxima economia? Veja a linha completa de Madeira de Pinus In Natura da Madeireira Bairro Novo:",
  "🔨 A estrutura do seu telhado precisa de qualidade garantida. Confira caibros, vigas, ripas e pontaletes de Pinus em Curitiba:",
  "🪵 Precisa de vigas e caibros de Pinus de alta resistência? Na Madeireira Bairro Novo você encontra bitolas padronizadas com entrega rápida!",
  "⚡ Precisando de tábuas para caixaria e formas de concreto na sua obra hoje? Pronta entrega garantida em Curitiba e Região Metropolitana:",
  "⭐ Recomendo a Madeireira Bairro Novo! Atendimento especializado, orçamento rápido via WhatsApp e madeira de Pinus selecionada:",
  "📐 Projetos residenciais e comerciais com o melhor aproveitamento em Pinus Serrado. Veja as opções e solicite cotação sem compromisso:",
  "🌿 Madeira sustentável de reflorestamento com excelente acabamento e corte reto. Acesse o catálogo oficial da Madeireira Bairro Novo:",
  "🏗️ Economize no engradamento do seu telhado com a madeira de Pinus Serrada In Natura da Madeireira Bairro Novo em Curitiba:",
  "🛠️ Caibros e sarrafos de Pinus para travamentos e estruturas! Fornecimento garantido para sua construção na Madeireira Bairro Novo:",
  "🔥 Ofertas exclusivas em tábuas de caixaria, vigas e escoras para laje em Curitiba. Faça uma cotação instantânea pelo WhatsApp:",
  "🏆 Tradição e confiança em Curitiba! Conheça a Madeireira Bairro Novo e garanta a melhor madeira de Pinus para sua edificação:",
  "💡 Dica para quem vai construir ou reformar: Madeira de Pinus serrada in natura com o menor preço da região. Veja mais detalhes:",
  "🚚 Entrega super rápida em Curitiba, São José dos Pinhais, Colombo, Pinhais e Araucária. Solicite seu orçamento agora:",
  "🪵 Ripas, sarrafos, vigas e tábuas de Pinus com seleção de primeira qualidade e corte preciso. Clique para conferir:",
  "🥇 O melhor custo-benefício em madeira de Pinus para caixaria e telhados na região de Curitiba. Atendimento ágil 24h:",
  "✨ Confira o catálogo de Madeira de Pinus Serrada da Madeireira Bairro Novo para obras e estruturas:",
  "📱 Peça seu orçamento de madeira de Pinus direto pelo WhatsApp sem burocracia e com envio no mesmo dia em Curitiba e Região:",
  "🏡 Sua obra merece a melhor Madeira de Pinus Serrada com entrega pontual no canteiro. Confira e compartilhe essa oportunidade:"
];

export function FloatingActions({ onOpenBudget }: FloatingActionsProps) {
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copyIndex, setCopyIndex] = useState(0);

  // Default share image requested by user
  const defaultShareImage = 'https://scontent.xx.fbcdn.net/v/t39.105495-1/766072255_38212309061693551_1328780198815347107_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=107&_nc_ohc=Zn09XOmaMMUQ7kNvwFVDBH5&sdl=0&ccb=14-4&oh=00_AQFHhrQg_b_YggahvY1TKyfkrJtpP7VyiCR4WwZVG9aLCA&oe=6A793ACE&_nc_sid=a21977';

  // Current page URL and Title dynamically updated
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    const updatePageInfo = () => {
      setCurrentUrl(window.location.href);
      setCurrentTitle(document.title || 'Madeireira Bairro Novo');
    };

    updatePageInfo();
    window.addEventListener('popstate', updatePageInfo);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('popstate', updatePageInfo);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const companyName = COMPANY_DATA.name;

  // Active Sales Copy text
  const activeSalesCopy = SALES_COPY_VARIATIONS[copyIndex];

  // Rotate to the next version each time user requests or shares
  const handleRotateCopy = () => {
    setCopyIndex((prev) => (prev + 1) % SALES_COPY_VARIATIONS.length);
  };

  const handleOpenShare = () => {
    if (!shareOpen) {
      // Advance to next sales variation when opening menu
      handleRotateCopy();
    }
    setShareOpen(!shareOpen);
  };

  // Full semantic message including Sales Text, Image URL and Page URL
  const fullCopyMessage = `${activeSalesCopy}\n\n📸 Ver Imagem: ${defaultShareImage}\n🌐 Link do Site: ${currentUrl}`;

  // Copy Handler
  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullCopyMessage);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = fullCopyMessage;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      // Advance copy variation after copying so next copy has a new text variation!
      setTimeout(() => {
        setCopied(false);
        handleRotateCopy();
      }, 2500);
    } catch (err) {
      console.error('Erro ao copiar texto e imagem:', err);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Social Sharing Links Configuration using current sales copy and image
  const socialShares = [
    {
      name: 'WhatsApp',
      color: 'from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 border-emerald-400/50',
      textColor: 'text-emerald-300',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${activeSalesCopy}\n\n📸 Ver Foto: ${defaultShareImage}\n🌐 ${currentUrl}`
      )}`,
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      color: 'from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 border-blue-400/50',
      textColor: 'text-blue-300',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Twitter (X)',
      color: 'from-stone-900 to-stone-800 hover:from-stone-800 hover:to-stone-700 border-stone-600',
      textColor: 'text-stone-200',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${activeSalesCopy} ${currentUrl}`
      )}`,
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Pinterest',
      color: 'from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 border-red-400/50',
      textColor: 'text-red-300',
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        currentUrl
      )}&media=${encodeURIComponent(defaultShareImage)}&description=${encodeURIComponent(
        activeSalesCopy
      )}`,
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      color: 'from-sky-700 to-sky-600 hover:from-sky-600 hover:to-sky-500 border-sky-400/50',
      textColor: 'text-sky-300',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        currentUrl
      )}`,
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Threads',
      color: 'from-stone-900 to-stone-950 hover:from-stone-800 hover:to-stone-900 border-amber-400/40',
      textColor: 'text-amber-300',
      url: `https://www.threads.net/intent/post?text=${encodeURIComponent(
        `${activeSalesCopy}\n${defaultShareImage}\n${currentUrl}`
      )}`,
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12.186 24c-3.142 0-5.836-1.121-7.585-3.158C3.02 18.99 2.37 16.035 2.748 12.6c.64-5.82 5.09-10.428 10.58-10.957 6.136-.59 11.233 3.867 11.395 9.943.09 3.414-1.135 6.55-3.447 8.831-2.032 2.006-4.736 3.033-7.618 2.893-4.148-.201-7.14-3.11-7.275-7.073-.133-3.916 2.71-7.086 6.812-7.598 2.21-.275 4.316.2 5.928 1.339.223.158.277.464.12.687-.158.223-.464.277-.687.12-1.428-1.009-3.298-1.43-5.261-1.185-3.518.439-5.95 3.152-5.835 6.505.115 3.375 2.673 5.856 6.22 6.028 2.483.121 4.81-.762 6.551-2.481 1.979-1.952 3.028-4.636 2.951-7.558-.139-5.202-4.502-9.018-9.752-8.513-4.7.452-8.51 4.394-9.057 9.378-.323 2.94.233 5.467 1.565 7.118 1.498 1.858 3.79 2.87 6.452 2.87.273 0 .543-.01.815-.03.272-.02.482.183.502.455.02.272-.183.482-.455.502-.317.023-.632.035-.951.035z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* =========================================================================
          1. CANTO INFERIOR ESQUERDO: BOTÃO DE COMPARTILHAMENTO FLUTUANTE & POPUP
         ========================================================================= */}
      <div className="fixed bottom-5 left-5 z-50">
        {/* Share Modal Popup */}
        <AnimatePresence>
          {shareOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: 'spring', damping: 22, stiffness: 350 }}
              className="absolute bottom-16 left-0 mb-3 w-[320px] sm:w-[360px] p-5 rounded-3xl bg-stone-950/95 backdrop-blur-2xl border border-amber-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 text-stone-100 space-y-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                    <Share2 className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
                        Compartilhar Oferta
                      </h4>
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-400/30 px-1.5 py-0.2 rounded-full font-bold">
                        Viga #{copyIndex + 1}/19
                      </span>
                    </div>
                    <p className="text-[10px] text-stone-400 font-medium truncate max-w-[210px]">
                      {currentTitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShareOpen(false)}
                  className="w-7 h-7 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                  aria-label="Fechar Compartilhamento"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Standard Shared Image Preview Box */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/30 bg-stone-900 group/img flex flex-col">
                <div className="relative h-28 w-full overflow-hidden">
                  <img
                    src={defaultShareImage}
                    alt="Madeira de Pinus Bairro Novo"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30" />
                  <div className="absolute top-2 left-2 bg-stone-950/80 backdrop-blur-md border border-amber-400/60 px-2 py-0.5 rounded-full text-[9px] font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                    <ImageIcon className="w-3 h-3 text-amber-400" />
                    <span>Imagem Incluída</span>
                  </div>
                </div>

                {/* Sales Copy Text Display Box */}
                <div className="p-2.5 bg-stone-900/90 text-[11px] text-stone-200 font-medium leading-relaxed italic border-t border-stone-800/80 flex items-start justify-between gap-2">
                  <p className="line-clamp-2">"{activeSalesCopy}"</p>
                  <button
                    onClick={handleRotateCopy}
                    className="shrink-0 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-400 border border-amber-400/40 transition-all hover:rotate-180 duration-500 active:scale-95"
                    title="Alternar Versão do Texto (19 Disponíveis)"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Social Networks Grid */}
              <div className="grid grid-cols-2 gap-2">
                {socialShares.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleRotateCopy}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-gradient-to-r ${social.color} text-white font-bold text-xs shadow-md border transition-all active:scale-95 group/soc`}
                  >
                    {social.icon}
                    <span className="truncate">{social.name}</span>
                    <ExternalLink className="w-3 h-3 text-white/60 group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5 transition-transform ml-auto shrink-0" />
                  </a>
                ))}
              </div>

              {/* Prominent Direct Links: Ir Até a Empresa & Avaliar a Empresa */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-800">
                <a
                  href={COMPANY_DATA.social.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs shadow-md border border-amber-300 transition-all active:scale-95"
                >
                  <MapPin className="w-4 h-4 text-stone-950 fill-stone-950/20 shrink-0" />
                  <span className="truncate">Ir até a Empresa</span>
                </a>

                <a
                  href={COMPANY_DATA.social.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 font-black text-xs shadow-md border border-amber-400/60 transition-all active:scale-95"
                >
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  <span className="truncate">Avaliar no Google</span>
                </a>
              </div>

              {/* Copy Semantic Link & Image Text Button */}
              <div className="pt-2 border-t border-stone-800/80 space-y-2">
                <button
                  onClick={handleCopyLink}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-black transition-all shadow-lg border ${
                    copied
                      ? 'bg-emerald-600 text-white border-emerald-400 ring-2 ring-emerald-400/40'
                      : 'bg-stone-900 hover:bg-stone-850 text-stone-200 hover:text-white border-amber-400/80 hover:border-amber-300'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white stroke-[3] animate-bounce" />
                      <span>Texto, Imagem e Link Copiados!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Copiar Texto + Foto + Link</span>
                    </>
                  )}
                </button>

                {/* Option to cycle text manually */}
                <div className="flex items-center justify-between text-[10px] text-stone-400 px-1 pt-1">
                  <span>19 Versões de Vendas</span>
                  <button
                    onClick={handleRotateCopy}
                    className="text-amber-400 hover:text-amber-300 underline font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-2.5 h-2.5" />
                    <span>Mudar Para Próxima Versão</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Share Main Trigger Button */}
        <div className="relative group">
          {/* Pulsing Backlight Glow */}
          <div className="absolute -inset-2 rounded-2xl bg-amber-400/30 opacity-75 blur-lg group-hover:opacity-100 animate-pulse transition-opacity pointer-events-none" />

          <button
            onClick={handleOpenShare}
            aria-label="Compartilhar esta página"
            className={`relative flex items-center gap-2.5 px-4 py-3.5 rounded-2xl bg-stone-950 hover:bg-stone-900 text-white font-black text-xs shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-amber-400/80 hover:border-amber-300 transition-all duration-300 active:scale-95 ${
              shareOpen ? 'ring-2 ring-amber-400/60' : ''
            }`}
          >
            <Share2 className="w-5 h-5 text-amber-400 shrink-0 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline tracking-wider uppercase text-[11px]">
              Compartilhar
            </span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          2. CANTO INFERIOR DIREITO: BOTAO VOLTAR AO TOPO, LIGAR AGORA E WHATSAPP 24H
         ========================================================================= */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {/* Voltar ao Topo (Back to Top) Button - Appears on Scroll > 300px */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 15 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleScrollToTop}
              aria-label="Voltar ao topo da página"
              className="group flex items-center gap-2 bg-stone-950 hover:bg-stone-900 text-white font-extrabold px-3.5 py-2.5 rounded-xl text-xs shadow-xl border border-stone-700 hover:border-amber-400/70 transition-all cursor-pointer backdrop-blur-md"
            >
              <ArrowUp className="w-4 h-4 text-amber-400 stroke-[3] group-hover:-translate-y-1 transition-transform" />
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider font-extrabold text-stone-200">
                Topo
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Quick Contacts Column Stack */}
        <div className="flex flex-col items-end gap-2.5">
          {/* Botão "Ligar Agora" (tel:) */}
          <a
            href={`tel:${COMPANY_DATA.phones.landlineRaw}`}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-xs shadow-xl border border-amber-300 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="w-7 h-7 rounded-xl bg-stone-950/20 flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4 text-stone-950 animate-bounce stroke-[2.5]" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] font-extrabold uppercase opacity-85">Ligar Agora</span>
              <span className="text-xs font-black tracking-wide">{COMPANY_DATA.phones.landline}</span>
            </div>
          </a>

          {/* Botão "WhatsApp 24h" */}
          <div className="relative group">
            {/* Pulsing Light Effect / Ambient Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-emerald-500/40 opacity-75 blur-md group-hover:opacity-100 animate-pulse transition-opacity pointer-events-none" />

            <a
              href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                `Olá! Vi o site da ${companyName} e gostaria de solicitar um orçamento rápido de madeira de pinus.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-xs shadow-[0_10px_30px_rgba(16,185,129,0.4)] border border-emerald-300/80 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {/* Green Blinking "Online Agora" Indicator Light */}
              <span className="relative flex h-3.5 w-3.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-90"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-emerald-600"></span>
              </span>

              {/* Animated Message Icon */}
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600 stroke-[1.5] group-hover:scale-110 transition-transform shrink-0" />

              <div className="flex flex-col text-left leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black tracking-wide">WhatsApp 24h</span>
                  <span className="text-[9px] bg-emerald-950/40 text-emerald-200 font-extrabold px-1.5 py-0.5 rounded-md uppercase border border-emerald-400/30">
                    Online
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-100 opacity-90">
                  Resposta Imediata
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
