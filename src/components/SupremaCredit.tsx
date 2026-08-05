/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function SupremaCredit() {
  return (
    <div id="suprema-credit" className="w-full py-4 border-t border-amber-900/20 bg-stone-950 text-stone-400 text-xs text-center flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 font-sans tracking-wide">
      <span>© {new Date().getFullYear()} Bairro Novo Comércio de Madeiras Ltda. - CNPJ: 44.205.587/0001-40.</span>
      <span className="hidden sm:inline">•</span>
      <div className="flex items-center gap-1">
        <span>Desenvolvido por</span>
        <a
          href="https://supremamidia.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 hover:text-amber-400 font-medium transition-colors underline decoration-amber-500/40 underline-offset-2"
        >
          Suprema Mídia
        </a>
      </div>
    </div>
  );
}
