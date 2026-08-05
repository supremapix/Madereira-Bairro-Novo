import { useParams, Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { BLOG_POSTS_DATA } from '../data/blog';
import { PRODUCTS_DATA } from '../data/products';
import { COMPANY_DATA } from '../data/company';
import { Clock, User, Calendar, ArrowLeft, ChevronRight, MessageCircle } from 'lucide-react';

export function BlogPostView({ onOpenBudget }: { onOpenBudget?: (slug?: string) => void }) {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug) || BLOG_POSTS_DATA[0];

  const relatedProds = PRODUCTS_DATA.filter((p) =>
    post.relatedProducts.includes(p.id) || post.relatedProducts.includes(p.slug)
  );

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: [post.imageUrl],
    datePublished: post.date,
    dateModified: post.date,
    author: [
      {
        '@type': 'Organization',
        name: post.author,
        url: COMPANY_DATA.canonicalUrl
      }
    ],
    publisher: {
      '@type': 'Organization',
      name: COMPANY_DATA.name,
      logo: {
        '@type': 'ImageObject',
        url: `${COMPANY_DATA.canonicalUrl}/logo.png`
      }
    },
    description: post.excerpt
  };

  return (
    <>
      <EnhancedSEO
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        imageUrl={post.imageUrl}
        type="article"
        keywords={post.tags}
        jsonLd={[articleJsonLd]}
      />

      <div className="bg-stone-950 text-stone-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Todos os Artigos</span>
          </Link>

          {/* Article Header */}
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-stone-100 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-1 border-b border-stone-800 pb-4">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-amber-500" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden border border-stone-800 shadow-2xl">
            <img
              src={post.imageUrl}
              alt={post.imageAlt}
              className="w-full h-[320px] sm:h-[420px] object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-invert prose-amber max-w-none text-stone-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p className="text-base sm:text-lg font-medium text-stone-200 leading-normal bg-stone-900 p-6 rounded-2xl border border-stone-800">
              {post.excerpt}
            </p>

            <div className="whitespace-pre-line space-y-4">{post.content}</div>
          </div>

          {/* Related Products CTA inside Article */}
          {relatedProds.length > 0 && (
            <div className="bg-stone-900 p-6 rounded-3xl border border-stone-800 space-y-4">
              <h3 className="text-lg font-bold text-amber-400">
                Produtos Relacionados Mencionados Neste Artigo
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedProds.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-stone-950 p-4 rounded-2xl border border-stone-800 flex items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-stone-100">{prod.name}</h4>
                      <p className="text-xs text-stone-400">{prod.category}</p>
                    </div>
                    <button
                      onClick={() => onOpenBudget?.(prod.slug)}
                      className="bg-amber-500 text-stone-950 font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-amber-400"
                    >
                      Cotar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fast WhatsApp Box */}
          <div className="bg-gradient-to-r from-emerald-950/60 to-stone-900 p-8 rounded-3xl border border-emerald-500/30 text-center space-y-4">
            <h3 className="text-2xl font-black text-stone-100">
              Precisa tirar dúvidas técnicas com nossos especialistas?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Atendimento humano imediato para orientação sobre bitolas, tratamentos e entregas em Curitiba.
            </p>
            <a
              href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                `Olá! Li o artigo *${post.title}* no site e gostaria de orientação sobre madeira.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-2xl text-sm shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-[1.5]" />
              <span>Chamar Especialista no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
