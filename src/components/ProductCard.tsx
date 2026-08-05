import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Check, Sparkles, Calculator } from 'lucide-react';
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
    <div className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-stone-300 via-amber-400/40 to-stone-400/60 hover:from-amber-400 hover:via-amber-500 hover:to-amber-300 transition-all duration-500 shadow-[0_10px_30px_rgba(28,25,23,0.12)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] hover:-translate-y-1.5 flex flex-col h-full overflow-hidden">
      {/* Inner Crafted Container */}
      <div className="bg-gradient-to-b from-stone-50 via-white to-stone-50/80 rounded-[23px] overflow-hidden flex flex-col h-full border border-stone-200/90 group-hover:border-amber-300/60 transition-colors duration-300">
        
        {/* Product Image Stage */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-900">
          <img
            src={product.imageUrl}
            alt={product.imageAlt}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-[0.97] group-hover:brightness-100"
            loading="lazy"
          />
          {/* Subtle Image Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
          
          {/* Golden Bottom Border Line on Image */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />

          {/* Category Tag - Crafted Dark Tag */}
          <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md border border-amber-400/60 text-stone-100 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>{product.category}</span>
          </div>

          {/* Cornerstone Badge - Gold Luxury Badge */}
          {product.isCornerstoneProduct && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xl border border-amber-200 flex items-center gap-1.5 animate-shimmer-pulse">
              <Sparkles className="w-3 h-3 fill-stone-950" />
              <span>Destaque</span>
            </div>
          )}
        </div>

        {/* Product Content Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-white/95">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-black text-stone-900 group-hover:text-amber-600 transition-colors duration-300 tracking-tight font-display line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 font-normal">
              {product.shortDescription}
            </p>
          </div>

          {/* Features Bullet List */}
          <div className="space-y-1.5 pt-3 border-t border-amber-900/10 text-xs text-stone-600">
            {product.features.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-emerald-700 stroke-[3]" />
                </div>
                <span className="line-clamp-1 font-medium text-stone-700">{feat}</span>
              </div>
            ))}
          </div>

          {/* Treatment & Delivery Badge */}
          <div className="flex items-center justify-between gap-2 text-xs pt-2 border-t border-stone-100">
            <span className="inline-flex items-center gap-1.5 text-stone-800 font-bold bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span className="truncate max-w-[130px]">{product.treatmentType}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-800 font-extrabold bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg text-[11px] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pronta Entrega</span>
            </span>
          </div>

          {/* Action Buttons - Black background, white text, crafted golden border */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <Link
              to={`/produto/${product.slug}`}
              className="group/btn bg-stone-950 hover:bg-stone-900 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all border border-amber-400/60 hover:border-amber-300 shadow-md active:scale-95 min-h-[44px]"
            >
              <span className="tracking-wide">Detalhes</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => onOpenBudget?.(product.slug)}
              className="group/btn bg-stone-950 hover:bg-stone-900 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md border border-amber-400/80 hover:border-amber-300 transition-all active:scale-95 min-h-[44px]"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover/btn:rotate-12 transition-transform" />
              <span className="tracking-wide">Cotar Agora</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
