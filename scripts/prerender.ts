import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { COMPANY_DATA } from '../src/data/company';
import { PRODUCTS_DATA } from '../src/data/products';
import { LOCATIONS_DATA } from '../src/data/locations';
import { BLOG_POSTS_DATA } from '../src/data/blog';
import { PILLAR_PAGE_DATA } from '../src/data/pillarContent';
import { PRICE_CATEGORIES, PAYMENT_TERMS } from '../src/data/prices';
import { STANDARD_MEASUREMENTS_TABLE, STANDARD_MEASUREMENTS } from '../src/data/measurements';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

interface RouteMeta {
  path: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
  h2?: string;
  contentHtml: string;
  jsonLd: any[];
}

function escapeHtml(str?: string | null): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const defaultOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HardwareStore',
  '@id': 'https://www.madeireirabairronovo.com.br/#store',
  name: COMPANY_DATA.name,
  legalName: COMPANY_DATA.legalName,
  alternateName: 'Madeireira Bairro Novo Curitiba',
  url: COMPANY_DATA.canonicalUrl,
  logo: 'https://www.madeireirabairronovo.com.br/favicon.svg',
  image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=1200&auto=format&fit=crop',
  telephone: COMPANY_DATA.phones.landline,
  priceRange: '$$',
  taxID: COMPANY_DATA.cnpj,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${COMPANY_DATA.address.street}, ${COMPANY_DATA.address.number}`,
    addressLocality: COMPANY_DATA.address.city,
    addressRegion: COMPANY_DATA.address.state,
    postalCode: COMPANY_DATA.address.cep,
    addressCountry: 'BR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: COMPANY_DATA.geo.latitude,
    longitude: COMPANY_DATA.geo.longitude
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '12:00'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Madeiras e Produtos para Construção',
    itemListElement: PRODUCTS_DATA.map((p) => ({
      '@type': 'OfferCatalog',
      name: p.name,
      url: `${COMPANY_DATA.canonicalUrl}/produto/${p.slug}`
    }))
  }
};

function getHeaderHtml() {
  return `
  <header class="bg-stone-950 text-white border-b border-stone-800">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-black text-xl">BN</div>
        <div>
          <span class="block text-lg font-black tracking-tight text-white">Madeireira Bairro Novo</span>
          <span class="block text-[10px] text-amber-400 uppercase font-bold tracking-wider">Curitiba - PR</span>
        </div>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold">
        <a href="/" class="hover:text-amber-400">Início</a>
        <a href="/madeira-de-pinus" class="text-amber-400 font-bold">Madeira de Pinus</a>
        <a href="/precos" class="hover:text-amber-400">Tabela de Preços</a>
        <a href="/medidas" class="hover:text-amber-400">Medidas & m³</a>
        <a href="/produtos" class="hover:text-amber-400">Produtos</a>
        <a href="/regioes-atendidas" class="hover:text-amber-400">Regiões Atendidas</a>
        <a href="/blog" class="hover:text-amber-400">Blog</a>
        <a href="/contato" class="hover:text-amber-400">Contato</a>
      </nav>
      <div class="flex items-center gap-3">
        <a href="https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=Olá,%20gostaria%20de%20um%20orçamento" class="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2">
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  </header>`;
}

function getFooterHtml() {
  return `
  <footer class="bg-stone-950 text-stone-300 border-t border-stone-800 pt-12 pb-8">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div class="space-y-3">
        <h3 class="text-white font-bold text-lg">${escapeHtml(COMPANY_DATA.name)}</h3>
        <p class="text-xs text-stone-400">${escapeHtml(COMPANY_DATA.legalName)} - CNPJ ${escapeHtml(COMPANY_DATA.cnpj)}</p>
        <p class="text-xs text-stone-400">${escapeHtml(COMPANY_DATA.address.street)}, ${escapeHtml(COMPANY_DATA.address.neighborhood)}, Curitiba - PR</p>
        <p class="text-xs text-stone-300">Telefone: <strong>${escapeHtml(COMPANY_DATA.phones.landline)}</strong> | WhatsApp: <strong>${escapeHtml(COMPANY_DATA.phones.whatsapp)}</strong></p>
      </div>
      <div class="space-y-2 text-xs">
        <h4 class="text-amber-400 font-bold uppercase tracking-wider">Páginas Principais</h4>
        <ul class="space-y-1">
          <li><a href="/madeira-de-pinus" class="hover:text-white">Madeira de Pinus (Guia Completo)</a></li>
          <li><a href="/precos" class="hover:text-white">Tabela de Preços 2026</a></li>
          <li><a href="/medidas" class="hover:text-white">Tabela de Medidas & Bitolas</a></li>
          <li><a href="/produtos" class="hover:text-white">Catálogo de Madeiras</a></li>
          <li><a href="/regioes-atendidas" class="hover:text-white">Regiões Atendidas em Curitiba e RMC</a></li>
        </ul>
      </div>
      <div class="space-y-2 text-xs">
        <h4 class="text-amber-400 font-bold uppercase tracking-wider">Produtos Mais Procurados</h4>
        <ul class="space-y-1">
          ${PRODUCTS_DATA.slice(0, 5)
            .map((p) => `<li><a href="/produto/${p.slug}" class="hover:text-white">${escapeHtml(p.name)}</a></li>`)
            .join('')}
        </ul>
      </div>
      <div class="space-y-2 text-xs">
        <h4 class="text-amber-400 font-bold uppercase tracking-wider">Atendimento</h4>
        <p class="text-stone-400">${escapeHtml(COMPANY_DATA.hours.weekdays)}</p>
        <p class="text-stone-400">${escapeHtml(COMPANY_DATA.hours.saturday)}</p>
        <p class="text-stone-400">Entrega rápida com frota própria em Curitiba e RMC.</p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
      <p>&copy; 2026 Madeireira Bairro Novo. Todos os direitos reservados.</p>
      <p>Desenvolvido por <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:underline">Suprema Mídia / Suprema Sites Express</a></p>
    </div>
  </footer>`;
}

export function generateRouteData(): RouteMeta[] {
  const routes: RouteMeta[] = [];

  // 1. Home: /
  routes.push({
    path: '',
    title: 'Madeira de Pinus em Curitiba | Madeireira Bairro Novo - Tábuas, Vigas, Caibros e Decks',
    description: 'Madeireira em Curitiba especializada em Madeira de Pinus Serrada In Natura e Tratada CCA. Tábuas para caixaria, caibros, vigas, ripas e pontaletes com entrega rápida no Sítio Cercado e toda Curitiba.',
    canonical: COMPANY_DATA.canonicalUrl,
    h1: 'Madeira de Pinus em Curitiba: Distribuidora e Madeireira Bairro Novo',
    h2: 'Tábuas para Caixaria, Vigas, Caibros, Escoras e Pinus Autoclavado com Entrega Imediata',
    contentHtml: `
      <div class="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <section class="space-y-4 text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-black text-stone-900 leading-tight">Madeira de Pinus em Curitiba: Madeireira Bairro Novo</h1>
          <p class="text-lg text-stone-700 leading-relaxed">
            Fornecimento direto de <strong>Madeira de Pinus Serrada In Natura</strong> e <strong>Pinus Tratado em Autoclave (CCA)</strong> para construtoras, carpinteiros, mestres de obras e reformas em toda Curitiba e Região Metropolitana.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="/madeira-de-pinus" class="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-2xl text-sm transition">
              Guia Completo Madeira de Pinus
            </a>
            <a href="/precos" class="bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-3 rounded-2xl text-sm transition">
              Tabela de Preços 2026
            </a>
            <a href="/medidas" class="bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 font-bold px-6 py-3 rounded-2xl text-sm transition">
              Medidas & Calculadora m³
            </a>
          </div>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl font-black text-stone-900 text-center">Nossos Principais Produtos em Estoque</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${PRODUCTS_DATA.map(
              (p) => `
              <article class="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
                <img src="${p.imageUrl}" alt="${escapeHtml(p.imageAlt)}" class="w-full h-48 object-cover rounded-2xl" />
                <h3 class="text-xl font-bold text-stone-900"><a href="/produto/${p.slug}" class="hover:text-amber-700">${escapeHtml(p.name)}</a></h3>
                <p class="text-xs text-stone-600 leading-relaxed">${escapeHtml(p.shortDescription)}</p>
                <div class="pt-2">
                  <a href="/produto/${p.slug}" class="text-xs font-bold text-amber-700 hover:underline">Ver Medidas e Preços &rarr;</a>
                </div>
              </article>`
            ).join('')}
          </div>
        </section>

        <section class="bg-stone-50 p-8 rounded-3xl border border-stone-200 space-y-6">
          <h2 class="text-2xl font-black text-stone-900">Perguntas Frequentes sobre Madeira de Pinus em Curitiba</h2>
          <details class="bg-white p-4 rounded-xl border border-stone-200">
            <summary class="font-bold text-stone-900 cursor-pointer">Qual a quantidade mínima para entrega de madeira de pinus em Curitiba?</summary>
            <p class="text-xs text-stone-600 mt-2">Atendemos desde pequenas reformas residenciais até cargas fechadas para grandes canteiros de obras. Para compras acima do valor mínimo da rota, oferecemos frete reduzido ou grátis.</p>
          </details>
          <details class="bg-white p-4 rounded-xl border border-stone-200">
            <summary class="font-bold text-stone-900 cursor-pointer">A Madeireira Bairro Novo entrega no mesmo dia no Sítio Cercado e região?</summary>
            <p class="text-xs text-stone-600 mt-2">Sim! Pedidos com estoque local confirmados pela manhã contam com entrega expressa no mesmo dia com nossa frota própria.</p>
          </details>
          <details class="bg-white p-4 rounded-xl border border-stone-200">
            <summary class="font-bold text-stone-900 cursor-pointer">Qual a diferença entre o Pinus In Natura e o Pinus Tratado em Autoclave?</summary>
            <p class="text-xs text-stone-600 mt-2">O Pinus In Natura é serrado diretamente e ideal para caixarias, fôrmas de concreto e estruturas protegidas da umidade. O Pinus Autoclavado CCA passa por impregnação industrial contra fungos, umidade e cupins, indicado para decks e pergolados.</p>
          </details>
        </section>
      </div>`,
    jsonLd: [defaultOrganizationSchema]
  });

  // 2. Pillar Page: /madeira-de-pinus
  routes.push({
    path: 'madeira-de-pinus',
    title: PILLAR_PAGE_DATA.title,
    description: PILLAR_PAGE_DATA.description,
    canonical: `${COMPANY_DATA.canonicalUrl}/madeira-de-pinus`,
    h1: PILLAR_PAGE_DATA.h1 || PILLAR_PAGE_DATA.title,
    contentHtml: `
      <div class="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div class="space-y-4 max-w-4xl">
          <h1 class="text-4xl font-black text-stone-900">${escapeHtml(PILLAR_PAGE_DATA.h1 || PILLAR_PAGE_DATA.title)}</h1>
          <p class="text-base text-stone-700 leading-relaxed">${escapeHtml(PILLAR_PAGE_DATA.description)}</p>
        </div>
        ${PILLAR_PAGE_DATA.sections
          .map(
            (sec) => `
          <section class="space-y-4 bg-stone-50 p-8 rounded-3xl border border-stone-200">
            <h2 class="text-2xl font-black text-stone-900">${escapeHtml(sec.title)}</h2>
            ${sec.subtitle ? `<p class="text-sm font-semibold text-amber-800">${escapeHtml(sec.subtitle)}</p>` : ''}
            <div class="text-sm text-stone-700 leading-relaxed space-y-3">
              ${sec.content
                .split('\n\n')
                .filter(Boolean)
                .map((p) => `<p>${escapeHtml(p)}</p>`)
                .join('')}
            </div>
          </section>`
          )
          .join('')}
        <section class="space-y-4">
          <h2 class="text-2xl font-black text-stone-900">Perguntas Frequentes sobre Madeira de Pinus (FAQ)</h2>
          ${PILLAR_PAGE_DATA.faqs
            .map(
              (f) => `
            <details class="bg-stone-50 p-5 rounded-2xl border border-stone-200">
              <summary class="font-bold text-stone-900 cursor-pointer">${escapeHtml(f.question)}</summary>
              <p class="text-sm text-stone-700 mt-3 leading-relaxed">${escapeHtml(f.answer)}</p>
            </details>`
            )
            .join('')}
        </section>
      </div>`,
    jsonLd: [
      defaultOrganizationSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: PILLAR_PAGE_DATA.title,
        description: PILLAR_PAGE_DATA.description,
        author: {
          '@type': 'Organization',
          name: COMPANY_DATA.name
        },
        publisher: {
          '@type': 'Organization',
          name: COMPANY_DATA.name,
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.madeireirabairronovo.com.br/favicon.svg'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${COMPANY_DATA.canonicalUrl}/madeira-de-pinus`
        }
      }
    ]
  });

  // 3. Prices Page: /precos
  routes.push({
    path: 'precos',
    title: 'Preço de Madeira de Pinus em Curitiba | Tabela 2026 Madeireira Bairro Novo',
    description: 'Consulte a tabela de preços atualizada de Madeira de Pinus em Curitiba. Valores por m³, peça e dúzia para tábuas de caixaria, vigas, caibros e sarrafos com entrega rápida.',
    canonical: `${COMPANY_DATA.canonicalUrl}/precos`,
    h1: 'Tabela de Preços de Madeira de Pinus em Curitiba - PR',
    h2: 'Cotações Transparentes no Atacado e Varejo com Faturamento para Empresas',
    contentHtml: `
      <div class="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div class="space-y-4">
          <h1 class="text-4xl font-black text-stone-900">Tabela de Preços de Madeira de Pinus em Curitiba - PR</h1>
          <p class="text-stone-700 leading-relaxed">
            A <strong>Madeireira Bairro Novo</strong> oferece os preços mais competitivos do Paraná direto de serraria para sua obra. Fornecemos por metro cúbico (m³), dúzia e peça com faturamento faturado para construtoras e pagamento facilitado no canteiro.
          </p>
        </div>
        ${PRICE_CATEGORIES.map(
          (cat) => `
          <section class="bg-stone-50 p-8 rounded-3xl border border-stone-200 space-y-6">
            <h2 class="text-2xl font-black text-stone-900">${escapeHtml(cat.title || cat.name)}</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs bg-white rounded-2xl border border-stone-200">
                <thead class="bg-stone-100 text-stone-900 font-bold">
                  <tr>
                    <th class="p-3 border-b">Produto / Bitola</th>
                    <th class="p-3 border-b">Medidas</th>
                    <th class="p-3 border-b">Unidade</th>
                    <th class="p-3 border-b">Aplicação</th>
                    <th class="p-3 border-b">Preço Estimado</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-200">
                  ${cat.items
                    .map(
                      (item) => `
                    <tr>
                      <td class="p-3 font-bold text-stone-900">${escapeHtml(item.productName || item.name)}</td>
                      <td class="p-3">${escapeHtml(item.dimension || item.dimensions)}</td>
                      <td class="p-3">${escapeHtml(item.unit)}</td>
                      <td class="p-3">${escapeHtml(item.application || item.recommendedUse)}</td>
                      <td class="p-3 font-black text-amber-800">${escapeHtml(item.priceRange || item.priceReferenceUnit)}</td>
                    </tr>`
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </section>`
        ).join('')}
      </div>`,
    jsonLd: [defaultOrganizationSchema]
  });

  // 4. Measurements Page: /medidas
  routes.push({
    path: 'medidas',
    title: 'Tabela de Medidas de Madeira de Pinus & Calculadora de m³ | Curitiba',
    description: 'Guia completo de bitolas e medidas comerciais de madeira de pinus: tábuas, caibros, vigas, sarrafos e ripas. Calculadora de metro cúbico (m³) para orçamentos precisos.',
    canonical: `${COMPANY_DATA.canonicalUrl}/medidas`,
    h1: 'Tabela de Medidas e Bitolas de Madeira de Pinus',
    h2: 'Padrões Comerciais e Calculadora de Metragem Cúbica para Obras',
    contentHtml: `
      <div class="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div class="space-y-4">
          <h1 class="text-4xl font-black text-stone-900">Tabela de Medidas e Bitolas de Madeira de Pinus</h1>
          <p class="text-stone-700 leading-relaxed">
            Consulte as bitolas nominais e reais padronizadas para a construção civil em Curitiba e Região Metropolitana.
          </p>
        </div>
        ${STANDARD_MEASUREMENTS.map(
          (m) => `
          <section class="bg-stone-50 p-8 rounded-3xl border border-stone-200 space-y-4">
            <h2 class="text-2xl font-black text-stone-900">${escapeHtml(m.category)}</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs bg-white rounded-2xl border border-stone-200">
                <thead class="bg-stone-100 text-stone-900 font-bold">
                  <tr>
                    <th class="p-3 border-b">Bitola Nominal</th>
                    <th class="p-3 border-b">Espessura x Largura (cm)</th>
                    <th class="p-3 border-b">Comprimentos Disponíveis</th>
                    <th class="p-3 border-b">Aplicação Principal</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-200">
                  ${m.items
                    .map(
                      (item) => `
                    <tr>
                      <td class="p-3 font-bold text-stone-900">${escapeHtml(item.name)}</td>
                      <td class="p-3">${escapeHtml(item.nominalSize || item.nominalCm)}</td>
                      <td class="p-3">${escapeHtml((item.lengths || []).join(', ') || '3,00m')}</td>
                      <td class="p-3">${escapeHtml(item.usage || item.primaryApplication)}</td>
                    </tr>`
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </section>`
        ).join('')}
      </div>`,
    jsonLd: [defaultOrganizationSchema]
  });

  // 5. Products Catalog: /produtos
  routes.push({
    path: 'produtos',
    title: 'Catálogo de Madeiras em Curitiba | Madeireira Bairro Novo',
    description: 'Catálogo completo de Madeira de Pinus Serrada In Natura, Tábuas, Vigas, Caibros, Ripas, Sarrafos, Pontaletes e Madeirite com entrega rápida em Curitiba e RMC.',
    canonical: `${COMPANY_DATA.canonicalUrl}/produtos`,
    h1: 'Catálogo de Madeiras de Pinus em Curitiba',
    contentHtml: `
      <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <h1 class="text-4xl font-black text-stone-900">Catálogo de Madeiras em Curitiba</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${PRODUCTS_DATA.map(
            (p) => `
            <article class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <img src="${p.imageUrl}" alt="${escapeHtml(p.imageAlt)}" class="w-full h-48 object-cover rounded-xl" />
              <h2 class="text-lg font-bold text-stone-900"><a href="/produto/${p.slug}" class="hover:text-amber-700">${escapeHtml(p.name)}</a></h2>
              <p class="text-xs text-stone-600">${escapeHtml(p.shortDescription)}</p>
              <a href="/produto/${p.slug}" class="inline-block text-xs font-bold text-amber-700 hover:underline">Ver Medidas e Cotação &rarr;</a>
            </article>`
          ).join('')}
        </div>
      </div>`,
    jsonLd: [defaultOrganizationSchema]
  });

  // 6. Individual Products: /produto/:slug
  for (const product of PRODUCTS_DATA) {
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

    routes.push({
      path: `produto/${product.slug}`,
      title: `${product.name} em Curitiba - PR | Madeireira Bairro Novo`,
      description: product.shortDescription,
      canonical: `${COMPANY_DATA.canonicalUrl}/produto/${product.slug}`,
      h1: `${product.name} em Curitiba - PR`,
      contentHtml: `
        <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <img src="${product.imageUrl}" alt="${escapeHtml(product.imageAlt)}" class="w-full h-96 object-cover rounded-3xl border border-stone-200" />
            <div class="space-y-4">
              <span class="text-xs font-black uppercase text-amber-800 bg-amber-100 px-3 py-1 rounded-full">${escapeHtml(product.treatmentType)}</span>
              <h1 class="text-3xl font-black text-stone-900">${escapeHtml(product.name)}</h1>
              <p class="text-stone-700 leading-relaxed">${escapeHtml(product.fullDescription)}</p>
              <div class="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 class="font-bold text-xs uppercase text-amber-800">Bitolas e Medidas Disponíveis</h3>
                <ul class="text-xs space-y-1">
                  ${product.dimensionsAvailable.map((d) => `<li>✔ ${escapeHtml(d)}</li>`).join('')}
                </ul>
              </div>
              <div class="flex gap-3 pt-2">
                <a href="https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=Cotar%20${encodeURIComponent(product.name)}" class="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs">
                  Cotar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>`,
      jsonLd: [defaultOrganizationSchema, productJsonLd]
    });
  }

  // 7. Locations Directory: /regioes-atendidas
  routes.push({
    path: 'regioes-atendidas',
    title: 'Regiões Atendidas em Curitiba e Região Metropolitana | Madeireira Bairro Novo',
    description: 'Entregamos Madeira de Pinus com frota própria em todos os 75 bairros de Curitiba e 28 cidades da Região Metropolitana. Entrega rápida no mesmo dia ou em 24h.',
    canonical: `${COMPANY_DATA.canonicalUrl}/regioes-atendidas`,
    h1: 'Regiões Atendidas em Curitiba e Região Metropolitana',
    contentHtml: `
      <div class="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <h1 class="text-4xl font-black text-stone-900">Regiões Atendidas em Curitiba e Região Metropolitana</h1>
        <section class="space-y-6">
          <h2 class="text-2xl font-bold text-stone-900">Bairros de Curitiba (75 Bairros)</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
            ${LOCATIONS_DATA.filter((l) => l.type === 'bairro')
              .map((b) => `<a href="/bairro/${b.slug}" class="bg-stone-50 p-3 rounded-xl border border-stone-200 hover:border-amber-500 font-semibold">${escapeHtml(b.name)}</a>`)
              .join('')}
          </div>
        </section>
        <section class="space-y-6">
          <h2 class="text-2xl font-bold text-stone-900">Cidades da Região Metropolitana de Curitiba</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
            ${LOCATIONS_DATA.filter((l) => l.type === 'cidade')
              .map((c) => `<a href="/cidade/${c.slug}" class="bg-stone-50 p-3 rounded-xl border border-stone-200 hover:border-amber-500 font-semibold">${escapeHtml(c.name)}</a>`)
              .join('')}
          </div>
        </section>
      </div>`,
    jsonLd: [defaultOrganizationSchema]
  });

  // 8. Location detail pages: /bairro/:slug and /cidade/:slug
  for (const loc of LOCATIONS_DATA) {
    const isBairro = loc.type === 'bairro';
    const locPath = `${isBairro ? 'bairro' : 'cidade'}/${loc.slug}`;
    routes.push({
      path: locPath,
      title: `Madeira de Pinus em ${loc.name} - Curitiba / PR | Madeireira Bairro Novo`,
      description: `Madeireira Bairro Novo com entrega rápida de Madeira de Pinus Serrada In Natura, Caibros, Vigas, Ripas e Tábuas de Caixaria no bairro/cidade de ${loc.name}. Solicite seu orçamento com frete direto!`,
      canonical: `${COMPANY_DATA.canonicalUrl}/${locPath}`,
      h1: `Madeira de Pinus em ${loc.name} com Entrega Rápida`,
      contentHtml: `
        <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
          <h1 class="text-4xl font-black text-stone-900">Madeira de Pinus em ${escapeHtml(loc.name)}</h1>
          <p class="text-stone-700 leading-relaxed">${escapeHtml(loc.description)}</p>
          <div class="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-2 text-xs">
            <p><strong>Prazo de Entrega:</strong> ${escapeHtml(loc.estimatedDeliveryTime)}</p>
            <p><strong>Região/Zona:</strong> ${escapeHtml(loc.zone)}</p>
            <p><strong>Logística:</strong> Frota própria com entrega direta no canteiro de obras.</p>
          </div>
          <div class="pt-4">
            <a href="https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=Cotar%20madeira%20para%20${encodeURIComponent(loc.name)}" class="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs">
              Pedir Cotação com Frete para ${escapeHtml(loc.name)}
            </a>
          </div>
        </div>`,
      jsonLd: [defaultOrganizationSchema]
    });
  }

  // 9. Blog Directory: /blog
  routes.push({
    path: 'blog',
    title: 'Blog da Madeira de Pinus & Construção Civil | Curitiba - PR',
    description: 'Dicas técnicas, guias de compras, normas ABNT e comparativos de madeira de pinus para obras e reformas em Curitiba e Região Metropolitana.',
    canonical: `${COMPANY_DATA.canonicalUrl}/blog`,
    h1: 'Blog da Madeira e Construção Civil',
    contentHtml: `
      <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <h1 class="text-4xl font-black text-stone-900">Blog da Madeira e Construção Civil</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${BLOG_POSTS_DATA.map(
            (b) => `
            <article class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <h2 class="text-lg font-bold text-stone-900"><a href="/blog/${b.slug}" class="hover:text-amber-700">${escapeHtml(b.title)}</a></h2>
              <p class="text-xs text-stone-600">${escapeHtml(b.excerpt)}</p>
              <a href="/blog/${b.slug}" class="inline-block text-xs font-bold text-amber-700 hover:underline">Ler Artigo Completo &rarr;</a>
            </article>`
          ).join('')}
        </div>
      </div>`,
    jsonLd: [defaultOrganizationSchema]
  });

  // 10. Individual Blog Posts: /blog/:slug
  for (const post of BLOG_POSTS_DATA) {
    const articleJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Organization',
        name: COMPANY_DATA.name
      },
      publisher: {
        '@type': 'Organization',
        name: COMPANY_DATA.name,
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.madeireirabairronovo.com.br/favicon.svg'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${COMPANY_DATA.canonicalUrl}/blog/${post.slug}`
      }
    };

    routes.push({
      path: `blog/${post.slug}`,
      title: `${post.title} | Blog Madeireira Bairro Novo`,
      description: post.excerpt,
      canonical: `${COMPANY_DATA.canonicalUrl}/blog/${post.slug}`,
      h1: post.title,
      contentHtml: `
        <article class="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <header class="space-y-3">
            <span class="text-xs font-bold uppercase text-amber-800 bg-amber-100 px-3 py-1 rounded-full">${escapeHtml(post.category)}</span>
            <h1 class="text-3xl sm:text-4xl font-black text-stone-900">${escapeHtml(post.title)}</h1>
            <p class="text-xs text-stone-500">Publicado em ${escapeHtml(post.date)} por Equipe Técnica Madeireira Bairro Novo</p>
          </header>
          <div class="prose prose-stone text-stone-700 space-y-4 leading-relaxed text-sm">
            <p class="text-base font-medium">${escapeHtml(post.excerpt)}</p>
            ${post.content
              .split('\n\n')
              .map((p) => `<p>${escapeHtml(p)}</p>`)
              .join('')}
          </div>
        </article>`,
      jsonLd: [defaultOrganizationSchema, articleJsonLd]
    });
  }

  // 11. About: /sobre
  routes.push({
    path: 'sobre',
    title: 'Sobre a Madeireira Bairro Novo em Curitiba | Tradição & Sustentabilidade',
    description: 'Conheça a Madeireira Bairro Novo, empresa sediada no Sítio Cercado, Curitiba - PR, referência em fornecimento de madeira de pinus de reflorestamento sustentável.',
    canonical: `${COMPANY_DATA.canonicalUrl}/sobre`,
    h1: 'Sobre a Madeireira Bairro Novo',
    contentHtml: `
      <div class="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 class="text-4xl font-black text-stone-900">Sobre a Madeireira Bairro Novo</h1>
        <p class="text-stone-700 leading-relaxed">
          Fundada em Curitiba, a <strong>Bairro Novo Comércio de Madeiras Ltda.</strong> (CNPJ ${COMPANY_DATA.cnpj}) consolidou-se como referência técnica e logística no fornecimento de madeira serrada de pinus para a construção civil, caixarias, reformas e indústrias da Região Metropolitana.
        </p>
        <div class="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3 text-xs">
          <p><strong>Missão:</strong> Fornecer madeira de reflorestamento com bitolas precisas, pronta entrega e preço justo.</p>
          <p><strong>Endereço:</strong> ${COMPANY_DATA.address.street}, ${COMPANY_DATA.address.neighborhood}, Curitiba - PR</p>
          <p><strong>Contatos:</strong> ${COMPANY_DATA.phones.landline} | WhatsApp: ${COMPANY_DATA.phones.whatsapp}</p>
        </div>
      </div>`,
    jsonLd: [defaultOrganizationSchema]
  });

  // 12. Contact: /contato
  routes.push({
    path: 'contato',
    title: 'Contato & Localização | Madeireira Bairro Novo Curitiba - PR',
    description: 'Fale com a Madeireira Bairro Novo em Curitiba. Faça sua cotação pelo WhatsApp (41) 99121-7114 ou telefone (41) 3013-4692. Localizada no Sítio Cercado.',
    canonical: `${COMPANY_DATA.canonicalUrl}/contato`,
    h1: 'Contato e Localização da Madeireira Bairro Novo',
    contentHtml: `
      <div class="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 class="text-4xl font-black text-stone-900">Contato e Localização</h1>
        <div class="bg-stone-50 p-8 rounded-3xl border border-stone-200 space-y-4">
          <p><strong>Razão Social:</strong> ${COMPANY_DATA.legalName}</p>
          <p><strong>CNPJ:</strong> ${COMPANY_DATA.cnpj}</p>
          <p><strong>Endereço:</strong> ${COMPANY_DATA.address.street}, ${COMPANY_DATA.address.neighborhood}, Curitiba - PR, CEP ${COMPANY_DATA.address.cep}</p>
          <p><strong>Telefone Fixo:</strong> ${COMPANY_DATA.phones.landline}</p>
          <p><strong>WhatsApp:</strong> ${COMPANY_DATA.phones.whatsapp}</p>
          <p><strong>E-mail:</strong> ${COMPANY_DATA.email}</p>
          <p><strong>Horário de Funcionamento:</strong> ${COMPANY_DATA.hours.weekdays} | ${COMPANY_DATA.hours.saturday}</p>
        </div>
      </div>`,
    jsonLd: [defaultOrganizationSchema]
  });

  return routes;
}

export function runPrerender() {
  console.log('🚀 Starting Static HTML Pre-rendering build...');

  if (!fs.existsSync(distDir)) {
    console.error('❌ dist/ directory not found! Run vite build first.');
    process.exit(1);
  }

  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  const routes = generateRouteData();

  console.log(`📦 Generating pre-rendered static HTML for ${routes.length} routes...`);

  let count = 0;

  for (const route of routes) {
    let pageHtml = templateHtml;

    // Replace Title
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);

    // Replace Description
    if (pageHtml.includes('<meta name="description"')) {
      pageHtml = pageHtml.replace(
        /<meta name="description".*?>/i,
        `<meta name="description" content="${escapeHtml(route.description)}">`
      );
    } else {
      pageHtml = pageHtml.replace(
        '</head>',
        `  <meta name="description" content="${escapeHtml(route.description)}">\n</head>`
      );
    }

    // Replace Canonical
    if (pageHtml.includes('<link rel="canonical"')) {
      pageHtml = pageHtml.replace(
        /<link rel="canonical".*?>/i,
        `<link rel="canonical" href="${escapeHtml(route.canonical)}">`
      );
    } else {
      pageHtml = pageHtml.replace(
        '</head>',
        `  <link rel="canonical" href="${escapeHtml(route.canonical)}">\n</head>`
      );
    }

    // Add OpenGraph and Twitter tags
    const ogTags = `
  <meta property="og:title" content="${escapeHtml(route.title)}">
  <meta property="og:description" content="${escapeHtml(route.description)}">
  <meta property="og:url" content="${escapeHtml(route.canonical)}">
  <meta property="og:site_name" content="${escapeHtml(COMPANY_DATA.name)}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(route.title)}">
  <meta name="twitter:description" content="${escapeHtml(route.description)}">`;

    pageHtml = pageHtml.replace('</head>', `${ogTags}\n</head>`);

    // Inject JSON-LD Schema
    const jsonLdScripts = route.jsonLd
      .map((schema) => `  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`)
      .join('\n');

    pageHtml = pageHtml.replace('</head>', `${jsonLdScripts}\n</head>`);

    // Inject rich semantic content inside <div id="root">
    const fullBodyHtml = `
    <div id="root">
      ${getHeaderHtml()}
      <main class="min-h-[70vh] bg-white text-stone-900">
        ${route.contentHtml}
      </main>
      ${getFooterHtml()}
    </div>`;

    pageHtml = pageHtml.replace(/<div id="root"><\/div>/i, fullBodyHtml);

    // Save to destination
    if (route.path === '') {
      // Root index.html
      fs.writeFileSync(path.join(distDir, 'index.html'), pageHtml, 'utf-8');
    } else {
      const targetDir = path.join(distDir, route.path);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml, 'utf-8');
    }

    count++;
  }

  console.log(`✅ Successfully pre-rendered and saved ${count} static HTML routes into dist/`);
}

// If invoked directly
runPrerender();
