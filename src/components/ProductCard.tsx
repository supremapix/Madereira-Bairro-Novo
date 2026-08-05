import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';

export function ProductCard({
  product,
  onOpenBudget
}: {
  key?: string | number;
  product: Product;
  onOpenBudget?: (slug: string) => void;
}) {
  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 hover:border-amber-500/60 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden flex flex-col group hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
        <img
          src={product.imageUrl}
          alt={product.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

        {/* Category Tag */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-stone-200 text-stone-900 text-[11px] font-bold uppercase px-3 py-1 rounded-full shadow-sm">
          {product.category}
        </div>

        {/* Cornerstone Badge */}
        {product.isCornerstoneProduct && (
          <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 fill-stone-950" />
            <span>Destaque</span>
          </div>
        )}
      </div>

      {/* Product Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-extrabold text-stone-900 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Features Bullet List */}
        <div className="space-y-1.5 pt-2 border-t border-stone-100 text-xs text-stone-500">
          {product.features.slice(0, 2).map((feat, i) => (
            <div key={i} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Treatment & Delivery Badge */}
        <div className="flex items-center justify-between text-xs pt-1">
          <span className="inline-flex items-center gap-1 text-stone-700 font-semibold bg-stone-100 px-2.5 py-1 rounded-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            {product.treatmentType}
          </span>
          <span className="text-emerald-700 font-bold text-[11px]">Pronta Entrega</span>
        </div>

        {/* Action Buttons - Solid Single Colors */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Link
            to={`/produto/${product.slug}`}
            className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1 transition-colors border border-stone-200 min-h-[44px]"
          >
            <span>Ver Detalhes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => onOpenBudget?.(product.slug)}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1 shadow-md transition-all active:scale-95 min-h-[44px]"
          >
            <span>Cotar Agora</span>
          </button>
        </div>
      </div>
    </div>
  );
}
