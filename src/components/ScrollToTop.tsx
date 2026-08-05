import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Voltar ao topo da página"
          className="fixed bottom-6 left-6 z-40 group flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-stone-950 font-black p-3.5 sm:px-4 sm:py-3 rounded-2xl shadow-2xl shadow-amber-500/40 border border-amber-300 transition-all cursor-pointer"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-stone-950"></span>
          </span>

          <ArrowUp className="w-5 h-5 stroke-[3] group-hover:-translate-y-1 transition-transform" />

          <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold pr-1">
            Voltar ao Topo
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
