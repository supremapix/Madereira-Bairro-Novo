import { Heart, Sparkles, ExternalLink } from 'lucide-react';

export function SupremaCredit() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 border-t border-amber-900/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
      <p className="text-stone-400 text-center sm:text-left font-medium">
        © {new Date().getFullYear()} Bairro Novo Comércio de Madeiras Ltda. Todos os direitos reservados.
      </p>

      {/* Elegant Floating Badge for Suprema Sites */}
      <div className="group relative">
        {/* Ambient Subtle Golden Aura on Hover */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none" />

        <div className="relative bg-stone-950/90 hover:bg-stone-900 border border-amber-400/50 hover:border-amber-300 rounded-full px-6 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2.5 transition-all duration-300 backdrop-blur-md">
          <span className="text-stone-300 font-medium text-xs sm:text-sm flex items-center gap-1.5">
            <span>Desenvolvido com</span>
            
            {/* Animated Pulsing Heart */}
            <Heart 
              size={13} 
              className="text-red-500 fill-red-500 animate-pulse shrink-0 drop-shadow-[0_0_6px_rgba(239,68,68,0.9)]" 
            /> 
            
            <span>por</span>
          </span>

          {/* Official Link to Suprema Sites */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group/link text-amber-400 hover:text-amber-300 transition-all font-black text-xs sm:text-sm inline-flex items-center gap-1.5 tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent group-hover/link:underline">
              Suprema Sites
            </span>

            {/* Official Logo with perfect dark mode contrast */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema Sites" 
              className="h-[22px] w-auto inline select-none shrink-0 filter invert contrast-150 brightness-200 mix-blend-screen transition-transform duration-300 group-hover/link:scale-110" 
              referrerPolicy="no-referrer"
            />

            <ExternalLink className="w-3.5 h-3.5 text-amber-400/80 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}


