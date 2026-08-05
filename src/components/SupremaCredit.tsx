import { Heart } from 'lucide-react';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-stone-800/60 flex justify-center items-center pb-8">
      <div className="bg-stone-900/90 border border-stone-800 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:border-amber-500/40">
        <p className="text-stone-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span> 
          
          {/* Coração pulsante com efeito de sombra */}
          <Heart 
            size={14} 
            className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_4px_rgba(239,68,68,0.8)]" 
          /> 
          
          <span className="opacity-90">por</span>
          
          {/* Link para o site da Suprema */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-400 hover:text-amber-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-amber-400/50 hover:border-amber-300"
          >
            Suprema Mídia
            
            {/* Logotipo oficial invertido e integrado com contraste perfeito no rodapé escuro */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema Mídia" 
              className="h-[20px] w-auto inline select-none shrink-0 filter invert contrast-150 brightness-200 mix-blend-screen transition-transform duration-300 hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

