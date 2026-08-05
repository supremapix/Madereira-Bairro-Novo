import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Home, ShoppingBag, MapPin, Search } from 'lucide-react';

export function NotFoundView() {
  return (
    <>
      <EnhancedSEO
        title="Página Não Encontrada | Madeireira Bairro Novo"
        description="A página solicitada não foi encontrada. Navegue pelo nosso catálogo de Madeira de Pinus em Curitiba."
        noIndex={true}
      />

      <div className="bg-stone-950 text-stone-100 min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-stone-900 border border-stone-800 rounded-3xl p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto text-2xl font-black">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-stone-100">Página Não Encontrada</h1>
            <p className="text-xs text-stone-400">
              A URL que você tentou acessar não existe ou foi alterada. Utilize um dos links abaixo para voltar ao site.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 text-xs font-bold">
            <Link
              to="/"
              className="bg-amber-500 text-stone-950 p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400"
            >
              <Home className="w-4 h-4" />
              <span>Voltar para a Página Inicial</span>
            </Link>

            <Link
              to="/produtos"
              className="bg-stone-800 text-stone-200 p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-stone-700 border border-stone-700"
            >
              <ShoppingBag className="w-4 h-4 text-amber-500" />
              <span>Ver Catálogo de Produtos</span>
            </Link>

            <Link
              to="/regioes-atendidas"
              className="bg-stone-800 text-stone-200 p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-stone-700 border border-stone-700"
            >
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Ver Regiões de Entrega</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
