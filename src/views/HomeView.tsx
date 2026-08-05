import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Trees,
  ShieldCheck,
  Truck,
  Award,
  Sparkles,
  MessageCircle,
  MapPin,
  ChevronRight,
  HelpCircle,
  Star,
  Users
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS_DATA } from '../data/products';
import { COMPANY_DATA } from '../data/company';
import { REVIEWS_DATA } from '../data/reviews';
import { FAQ_DATA } from '../data/faq';
import { BLOG_POSTS_DATA } from '../data/blog';
import { OFFICIAL_NEIGHBORHOODS, RMC_CITIES, POPULAR_COMMUNITIES } from '../data/locations';

export function HomeView({ onOpenBudget }: { onOpenBudget?: (slug?: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = [
    'Todos',
    'Madeira de Pinus',
    'Pinus Tratado',
    'Madeira para Telhado',
    'Madeira para Construção',
    'Madeirite e Compensado',
    'Deck e Pergolado'
  ];

  const filteredProducts =
    selectedCategory === 'Todos'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <>
      <EnhancedSEO
        title="Madeira de Pinus em Curitiba - PR | Madeireira Bairro Novo"
        description="Madeireira Bairro Novo em Curitiba - PR. Distribuidora líder de Madeira de Pinus, Pinus Tratado Autoclavado, Caibros, Vigas, Tábuas, Madeirite e Decks. Pronta entrega em todos os 75 bairros e Região Metropolitana."
        canonicalPath="/"
        keywords={[
          'Madeira de Pinus Curitiba',
          'Madeireira Sítio Cercado',
          'Pinus Tratado Curitiba',
          'Pinus Autoclavado',
          'Caibros e Vigas Curitiba',
          'Madeira para Telhado'
        ]}
      />

      {/* Hero Section */}
      <Hero onOpenBudget={() => onOpenBudget?.()} />

      {/* Main Cornerstone Pinus Highlight Bar */}
      <section className="bg-amber-500/10 border-y border-amber-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center shrink-0 font-black shadow-md">
              <Trees className="w-8 h-8 stroke-[2.25]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900">
                Especialistas em Madeira de Pinus
              </h2>
              <p className="text-xs sm:text-sm text-stone-700">
                A solução sustentável, econômica e durável mais vendida do Paraná para obras e reformas.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/produto/madeira-de-pinus"
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 min-h-[44px]"
            >
              <span>Saber Mais Sobre Pinus</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Showcase Catalog Section */}
      <section className="py-16 sm:py-24 bg-white text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full">
              Linha Completa de Madeiras
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Catálogo de Produtos em Curitiba
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Fornecemos desde peças brutas para canteiro de obras até tábuas aparelhadas e Pinus Tratado Autoclavado para acabamentos.
            </p>
          </div>

          {/* Category Filter Pills - Clean Light Bar */}
          <div className="bg-stone-50 p-2.5 rounded-2xl border border-stone-200 shadow-sm max-w-full overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex items-center gap-2 sm:flex-wrap sm:justify-center min-w-max sm:min-w-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 whitespace-nowrap min-h-[42px] flex items-center justify-center gap-2 ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-stone-950 shadow-md font-black border border-amber-400 scale-[1.02]'
                      : 'bg-white text-stone-700 hover:text-amber-600 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  <Trees className={`w-3.5 h-3.5 ${selectedCategory === cat ? 'text-stone-950' : 'text-amber-600'}`} />
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onOpenBudget={(slug) => onOpenBudget?.(slug)}
              />
            ))}
          </div>

          <div className="text-center pt-6">
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold px-8 py-3.5 rounded-2xl border border-stone-800 transition-all text-sm shadow-xl"
            >
              <span>Ver Todos os 19 Produtos do Catálogo</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-stone-50 border-y border-stone-200 text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600">
              Por Que Escolher
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">
              Diferenciais da Madeireira Bairro Novo
            </h2>
            <p className="text-sm text-stone-600">
              Tradição e compromisso técnico na venda de madeira em Curitiba e Região Metropolitana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Truck className="w-6 h-6 stroke-[2.25]" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Entrega Rápida com Frota Própria</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Entregamos no mesmo dia ou em até 24h na sua obra ou marcenaria em todos os 75 bairros de Curitiba e municípios da Região Metropolitana.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 stroke-[2.25]" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Pinus Autoclavado CCA</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Tratamento preservativo industrial em vácuo-pressão que imuniza totalmente a madeira contra cupins, brocas e apodrecimento com garantia superior a 15 anos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Award className="w-6 h-6 stroke-[2.25]" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Qualidade 100% Reflorestada</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Madeira de origem legal e ecológica proveniente de florestas renováveis do Paraná. Seleção rigorosa para evitar nós soltos e empenamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Social Proof */}
      <section className="py-16 bg-white text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">
              Avaliações de Clientes em Curitiba
            </h2>
            <p className="text-sm text-stone-600">
              Veja o que construtores, marceneiros e moradores dizem sobre nossos produtos e atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="bg-stone-50 p-6 rounded-3xl border border-stone-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-700 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="block font-bold text-stone-900">{rev.author}</span>
                    <span className="block text-stone-500 text-[11px]">{rev.location}</span>
                  </div>
                  {rev.productMentioned && (
                    <span className="bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {rev.productMentioned}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Local Mesh Section: All 75 Curitiba Neighborhoods + RMC Cities */}
      <section className="py-16 bg-stone-50 border-t border-stone-200 text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full">
              Atendimento Local Garantido
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">
              Madeira de Pinus com Entrega nos 75 Bairros de Curitiba
            </h2>
            <p className="text-sm text-stone-600">
              Clique no seu bairro ou cidade para ver detalhes sobre entregas, prazos e produtos disponíveis imediatamente.
            </p>
          </div>

          <div className="space-y-8">
            {/* Curitiba Official Neighborhoods Grid */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-amber-700 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                Bairros Oficiais de Curitiba ({OFFICIAL_NEIGHBORHOODS.length})
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
                {OFFICIAL_NEIGHBORHOODS.map((b) => {
                  const slug = b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
                  return (
                    <Link
                      key={b}
                      to={`/bairro/${slug}`}
                      className="p-2 rounded-xl bg-stone-50 hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors text-center line-clamp-1"
                    >
                      {b}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Popular Communities & Special Zones */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-amber-700 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600" />
                Comunidades e Regiões Populares ({POPULAR_COMMUNITIES.length})
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
                {POPULAR_COMMUNITIES.map((c) => {
                  const slug = c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
                  return (
                    <Link
                      key={c}
                      to={`/bairro/${slug}`}
                      className="p-2 rounded-xl bg-stone-50 hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors text-center line-clamp-1"
                    >
                      {c}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* RMC Cities */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-amber-700 flex items-center gap-2">
                <Truck className="w-5 h-5 text-amber-600" />
                Cidades da Região Metropolitana ({RMC_CITIES.length})
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-xs">
                {RMC_CITIES.map((city) => {
                  const slug = city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
                  return (
                    <Link
                      key={city}
                      to={`/cidade/${slug}`}
                      className="p-2.5 rounded-xl bg-stone-50 hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors text-center font-semibold line-clamp-1"
                    >
                      {city}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white text-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">
              Perguntas Frequentes (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-2"
              >
                <h3 className="text-base font-bold text-amber-800 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Guide Section Teaser */}
      <section className="py-16 bg-stone-50 border-t border-stone-200 text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-600">
                Guia Técnico
              </span>
              <h2 className="text-3xl font-black text-stone-900">
                Artigos Recentes do Nosso Blog
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-amber-700 hover:underline font-bold text-sm flex items-center gap-1"
            >
              <span>Ver Todos os 12 Artigos</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS_DATA.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between"
              >
                <img
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold uppercase text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:underline pt-2"
                  >
                    <span>Ler Artigo Completo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Fast Contact CTA Banner */}
      <section className="py-16 bg-amber-500/10 border-t border-amber-200 text-stone-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900">
            Precisa de Madeira de Pinus para Sua Obra Hoje?
          </h2>
          <p className="text-sm sm:text-base text-stone-700">
            Fale diretamente com nossa equipe de vendas. Garantimos o melhor preço de Curitiba com entrega rápida no seu endereço.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBudget?.()}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-7 py-3.5 rounded-2xl text-sm shadow-xl transition-all active:scale-95 min-h-[50px]"
            >
              Solicitar Orçamento
            </button>
            <a
              href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                'Olá! Preciso de um orçamento de madeira com entrega para hoje.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 min-h-[50px]"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-[1.5]" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
