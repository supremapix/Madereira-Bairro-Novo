import { useParams, Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { PRODUCTS_DATA } from '../data/products';
import { COMPANY_DATA } from '../data/company';
import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  MessageCircle,
  Calculator,
  Ruler,
  Layers
} from 'lucide-react';

export function ProductDetailView({ onOpenBudget }: { onOpenBudget?: (slug?: string) => void }) {
  const { slug } = useParams<{ slug: string }>();

  // Default fallback to 'madeira-de-pinus' if missing or unknown
  const product = PRODUCTS_DATA.find((p) => p.slug === slug) || PRODUCTS_DATA[0];

  const relatedProducts = PRODUCTS_DATA.filter((p) => p.slug !== product.slug).slice(0, 4);

  const productJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: `${product.name} - Madeireira Bairro Novo Curitiba`,
    image: product.imageUrl,
    description: product.fullDescription,
    brand: {
      '@type': 'Brand',
      name: COMPANY_DATA.name
    },
    offers: {
      '@type': 'Offer',
      url: `${COMPANY_DATA.canonicalUrl}/produto/${product.slug}`,
      priceCurrency: 'BRL',
      price: '100.00',
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: COMPANY_DATA.legalName
      }
    }
  };

  return (
    <>
      <EnhancedSEO
        title={`${product.name} em Curitiba - PR`}
        description={product.shortDescription}
        canonicalPath={`/produto/${product.slug}`}
        imageUrl={product.imageUrl}
        type="product"
        keywords={[product.name, `${product.name} Curitiba`, product.category, 'Madeira de Pinus']}
        jsonLd={[productJsonLd]}
      />

      <div className="bg-white text-stone-900 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <Link to="/" className="hover:text-amber-700">
              Início
            </Link>
            <span>/</span>
            <Link to="/produtos" className="hover:text-amber-700">
              Produtos
            </Link>
            <span>/</span>
            <span className="text-amber-700 font-bold">{product.name}</span>
          </div>

          {/* Product Hero Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-stone-200 text-stone-900 text-xs font-bold uppercase px-3 py-1 rounded-full shadow-sm">
                  {product.category}
                </div>
              </div>

              {/* Guarantees Badge Box */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 space-y-1">
                  <ShieldCheck className="w-5 h-5 text-amber-600 mx-auto" />
                  <span className="block font-bold text-stone-900">Garantia</span>
                  <span className="block text-[10px] text-stone-500">Tratamento Seguro</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 space-y-1">
                  <Truck className="w-5 h-5 text-emerald-600 mx-auto" />
                  <span className="block font-bold text-stone-900">Entrega Rápida</span>
                  <span className="block text-[10px] text-stone-500">Frota Curitiba/RMC</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 space-y-1">
                  <Layers className="w-5 h-5 text-amber-600 mx-auto" />
                  <span className="block font-bold text-stone-900">Estoque Próprio</span>
                  <span className="block text-[10px] text-stone-500">Pronta Entrega</span>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                  {product.treatmentType}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed pt-2">
                  {product.fullDescription}
                </p>
              </div>

              {/* Action Quote Buttons */}
              <div className="p-6 bg-stone-50 rounded-3xl border border-stone-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold uppercase text-stone-500">
                      Disponibilidade
                    </span>
                    <span className="block text-base font-black text-emerald-700">
                      Em Estoque em Curitiba
                    </span>
                  </div>
                  <span className="text-xs text-amber-800 font-semibold bg-amber-100 px-2.5 py-1 rounded-lg">
                    Cotação em minutos
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onOpenBudget?.(product.slug)}
                    className="w-full bg-stone-950 hover:bg-stone-900 text-white font-bold py-3 rounded-xl text-xs sm:text-sm shadow-md border border-amber-400/60 hover:border-amber-300 flex items-center justify-center gap-2 active:scale-95 transition-all min-h-[46px]"
                  >
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span>Cotar Produto</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                      `Olá! Gostaria de cotar o produto *${product.name}* com entrega rápida.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-stone-950 hover:bg-stone-900 text-white font-bold py-3 rounded-xl text-xs sm:text-sm shadow-md border border-emerald-400/60 hover:border-emerald-300 flex items-center justify-center gap-2 active:scale-95 transition-all min-h-[46px]"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 stroke-[2]" />
                    <span>WhatsApp Directo</span>
                  </a>
                </div>
              </div>

              {/* Dimensions Available */}
              <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
                <h3 className="text-sm font-black uppercase tracking-wider text-amber-800 flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-amber-600" />
                  Medidas e Bitolas Disponíveis
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {product.dimensionsAvailable.map((dim, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{dim}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
                <h3 className="text-sm font-black uppercase tracking-wider text-amber-800">
                  Características Principais
                </h3>
                <ul className="space-y-2 text-xs text-stone-700">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Applications & Advantages Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-xl font-black text-amber-800">Aplicações Recomendadas</h3>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-stone-200">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-xl font-black text-amber-800">Vantagens Competitivas</h3>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {product.advantages.map((adv, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Products */}
          <div className="pt-10 space-y-6">
            <h3 className="text-2xl font-black text-stone-900">Outros Produtos de Pinus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/produto/${rel.slug}`}
                  className="bg-stone-50 p-4 rounded-2xl border border-stone-200 hover:border-amber-500 transition-colors flex items-center gap-3 group shadow-sm"
                >
                  <img
                    src={rel.imageUrl}
                    alt={rel.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                      {rel.name}
                    </h4>
                    <span className="text-[10px] text-stone-500">{rel.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
