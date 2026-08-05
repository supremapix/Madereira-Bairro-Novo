import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
  Trees,
  ChevronDown,
  Info,
  BookOpen,
  ShoppingBag,
  Award,
  Sparkles
} from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export function Header({ onOpenBudget }: { onOpenBudget?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Início', path: '/' },
    {
      label: 'Produtos',
      path: '/produtos',
      hasDropdown: true
    },
    { label: 'Madeira de Pinus', path: '/produto/madeira-de-pinus' },
    { label: 'Regiões Atendidas', path: '/regioes-atendidas' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contato', path: '/contato' }
  ];

  const quickProducts = [
    { name: 'Madeira de Pinus', path: '/produto/madeira-de-pinus' },
    { name: 'Pinus Tratado', path: '/produto/pinus-tratado' },
    { name: 'Pinus Autoclavado', path: '/produto/pinus-autoclavado' },
    { name: 'Tábuas e Caibros', path: '/produto/tabuas' },
    { name: 'Madeirite e Compensado', path: '/produto/madeirite' },
    { name: 'Decks e Pergolados', path: '/produto/deck' },
    { name: 'Ver Todos os Produtos', path: '/produtos' }
  ];

  return (
    <>
      {/* Animated Marquee Top Banner Bar */}
      <div className="bg-amber-400 text-stone-950 text-xs font-black py-2.5 overflow-hidden shadow-lg relative border-b border-amber-500 select-none">
        <div className="flex w-max animate-marquee space-x-8 hover:[animation-play-state:paused] whitespace-nowrap items-center">
          {/* Render ticker items twice for seamless continuous infinite loop */}
          {[1, 2].map((groupIndex) => (
            <div key={groupIndex} className="flex items-center space-x-8">
              <Link
                to="/produtos"
                className="inline-flex items-center gap-1.5 bg-stone-950 text-amber-300 hover:bg-stone-900 border border-amber-400/30 px-3 py-1 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 font-black uppercase text-[11px] tracking-wide"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>🔥 PROMOÇÕES HOJE: CONFIRA O CATÁLOGO COMPLETO</span>
              </Link>

              <a
                href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                  'Olá! Vi as promoções no site e gostaria de solicitar um orçamento de madeira.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-500/40 px-3 py-1 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 font-black"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-emerald-950" />
                <span>WHATSAPP VENDAS: {COMPANY_DATA.phones.whatsapp} (CLIQUE AQUI)</span>
              </a>

              <a
                href="https://maps.google.com/?q=R.+Coronel+Joaquim+Antônio+de+Azevedo,+1459+-+Curitiba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-stone-950/10 hover:bg-stone-950/20 px-3 py-1 rounded-full font-black text-stone-950 transition-all hover:scale-105"
              >
                <MapPin className="w-3.5 h-3.5 text-stone-950" />
                <span>ENDEREÇO: R. Coronel Joaquim Antônio de Azevedo, 1459 - Curitiba (ABRIR MAPA)</span>
              </a>

              <a
                href={`tel:${COMPANY_DATA.phones.landlineRaw}`}
                className="inline-flex items-center gap-1.5 bg-stone-950/10 hover:bg-stone-950/20 px-3 py-1 rounded-full font-black text-stone-950 transition-all hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5 text-stone-950" />
                <span>TELEFONE FIXO: {COMPANY_DATA.phones.landline} (LIGAR AGORA)</span>
              </a>

              <Link
                to="/regioes-atendidas"
                className="inline-flex items-center gap-1.5 bg-stone-950 text-stone-100 hover:bg-stone-900 px-3 py-1 rounded-full shadow-md transition-all hover:scale-105 font-black"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>🚚 PRONTA ENTREGA EM 75 BAIRROS DE CURITIBA E REGIÃO</span>
              </Link>

              <span className="text-stone-950/40 font-black">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-900/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-amber-900/20 py-2.5'
            : 'bg-stone-900/95 border-b border-stone-800 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with wood grain motif */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center text-amber-500 group-hover:text-amber-400 transition-colors">
                <Trees className="w-6 h-6 stroke-[2.25]" />
              </div>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-stone-100 tracking-tight leading-none group-hover:text-amber-400 transition-colors">
                BAIRRO NOVO
              </span>
              <span className="block text-[11px] font-semibold text-amber-500 tracking-widest uppercase">
                Comércio de Madeiras
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setProductsDropdown(true)}
                    onMouseLeave={() => setProductsDropdown(false)}
                  >
                    <button
                      className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-colors ${
                        isActive
                          ? 'text-amber-400 bg-amber-950/40'
                          : 'text-stone-200 hover:text-amber-400 hover:bg-stone-800/50'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productsDropdown ? 'rotate-180 text-amber-400' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {productsDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 w-64 bg-stone-900/95 backdrop-blur-xl border border-stone-800 rounded-xl shadow-2xl py-2 mt-1 z-50"
                        >
                          <div className="px-3 py-1.5 text-xs font-bold uppercase text-amber-500 tracking-wider border-b border-stone-800">
                            Produtos em Destaque
                          </div>
                          {quickProducts.map((p) => (
                            <Link
                              key={p.path}
                              to={p.path}
                              className="block px-4 py-2.5 text-sm text-stone-300 hover:text-amber-400 hover:bg-amber-950/30 transition-colors font-medium border-l-2 border-transparent hover:border-amber-500"
                            >
                              {p.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-amber-950/40'
                      : 'text-stone-200 hover:text-amber-400 hover:bg-stone-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir Menu de Navegação"
              className="p-3 bg-stone-800 hover:bg-stone-700 text-amber-400 rounded-xl transition-colors border border-amber-500/30 active:scale-95 flex items-center justify-center min-w-[48px] min-h-[48px]"
            >
              <Menu className="w-7 h-7 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN ACCESSIBLE MOBILE MENU (Elderly friendly with huge touch targets) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl overflow-y-auto flex flex-col"
          >
            {/* Mobile Header Bar */}
            <div className="sticky top-0 bg-stone-900 border-b border-stone-800 p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-stone-950">
                  <Trees className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-base font-black text-stone-100">BAIRRO NOVO</span>
                  <span className="block text-xs font-bold text-amber-500">Menu Principal</span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-stone-800 text-stone-200 hover:text-amber-400 rounded-xl border border-stone-700 font-bold flex items-center gap-1 text-sm min-w-[48px] min-h-[48px] justify-center"
              >
                <X className="w-7 h-7 stroke-[2.5]" />
                <span>FECHAR</span>
              </button>
            </div>

            {/* Mobile Navigation Body - Extra large touch areas */}
            <div className="p-4 sm:p-6 flex-1 max-w-lg mx-auto w-full space-y-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-center">
                <p className="text-stone-200 text-sm font-medium">
                  Precisa de atendimento rápido por voz ou WhatsApp?
                </p>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <a
                    href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                      'Olá! Gostaria de um orçamento de madeira.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md min-h-[52px]"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${COMPANY_DATA.phones.landlineRaw}`}
                    className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md min-h-[52px]"
                  >
                    <Phone className="w-5 h-5" />
                    Ligar Agora
                  </a>
                </div>
              </div>

              <div className="text-xs font-black uppercase text-amber-500 tracking-wider px-2 pt-2">
                Navegação Principal (Clique na Opção)
              </div>

              <div className="grid gap-2.5">
                <Link
                  to="/produtos"
                  className="bg-stone-900 border border-stone-800 hover:border-amber-500 p-4 rounded-2xl flex items-center justify-between text-stone-100 font-bold text-lg min-h-[58px] active:bg-amber-950/40"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-6 h-6 text-amber-500" />
                    <span>Catálogo de Produtos</span>
                  </div>
                  <span className="text-amber-500 text-sm">Ver Todos →</span>
                </Link>

                <Link
                  to="/produto/madeira-de-pinus"
                  className="bg-stone-900 border border-stone-800 hover:border-amber-500 p-4 rounded-2xl flex items-center justify-between text-stone-100 font-bold text-lg min-h-[58px] active:bg-amber-950/40"
                >
                  <div className="flex items-center gap-3">
                    <Trees className="w-6 h-6 text-amber-500" />
                    <span>Madeira de Pinus (Principal)</span>
                  </div>
                  <span className="text-amber-500 text-sm">Acessar →</span>
                </Link>

                <Link
                  to="/regioes-atendidas"
                  className="bg-stone-900 border border-stone-800 hover:border-amber-500 p-4 rounded-2xl flex items-center justify-between text-stone-100 font-bold text-lg min-h-[58px] active:bg-amber-950/40"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-amber-500" />
                    <span>Regiões de Entrega</span>
                  </div>
                  <span className="text-amber-500 text-sm">75 Bairros →</span>
                </Link>

                <Link
                  to="/sobre"
                  className="bg-stone-900 border border-stone-800 hover:border-amber-500 p-4 rounded-2xl flex items-center justify-between text-stone-100 font-bold text-lg min-h-[58px] active:bg-amber-950/40"
                >
                  <div className="flex items-center gap-3">
                    <Info className="w-6 h-6 text-amber-500" />
                    <span>Quem Somos</span>
                  </div>
                  <span className="text-amber-500 text-sm">Empresa →</span>
                </Link>

                <Link
                  to="/blog"
                  className="bg-stone-900 border border-stone-800 hover:border-amber-500 p-4 rounded-2xl flex items-center justify-between text-stone-100 font-bold text-lg min-h-[58px] active:bg-amber-950/40"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-amber-500" />
                    <span>Blog & Guia de Madeiras</span>
                  </div>
                  <span className="text-amber-500 text-sm">Artigos →</span>
                </Link>

                <Link
                  to="/contato"
                  className="bg-stone-900 border border-stone-800 hover:border-amber-500 p-4 rounded-2xl flex items-center justify-between text-stone-100 font-bold text-lg min-h-[58px] active:bg-amber-950/40"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-amber-500" />
                    <span>Contato e Endereço</span>
                  </div>
                  <span className="text-amber-500 text-sm">Mapa →</span>
                </Link>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBudget?.();
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black py-4 rounded-2xl text-lg shadow-xl mt-4 flex items-center justify-center gap-2 active:scale-98 min-h-[60px]"
              >
                <Sparkles className="w-6 h-6 fill-stone-950" />
                SOLICITAR ORÇAMENTO DE MADEIRA
              </button>

              <div className="text-center pt-4 text-xs text-stone-400">
                <p>CNPJ: {COMPANY_DATA.cnpj}</p>
                <p>{COMPANY_DATA.address.formatted}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
