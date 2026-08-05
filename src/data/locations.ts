import { LocationItem } from '../types';

export const OFFICIAL_NEIGHBORHOODS = [
  'Abranches', 'Água Verde', 'Ahú', 'Alto Boqueirão', 'Alto da Glória', 'Alto da Rua XV',
  'Atuba', 'Augusta', 'Bacacheri', 'Bairro Alto', 'Barreirinha', 'Batel', 'Bigorrilho',
  'Boa Vista', 'Bom Retiro', 'Boqueirão', 'Butiatuvinha', 'Cabral', 'Cachoeira', 'Cajuru',
  'Campina do Siqueira', 'Campo Comprido', 'Campo de Santana', 'Capão da Imbuia', 'Capão Raso',
  'Cascatinha', 'Caximba', 'Centro', 'Centro Cívico', 'Cristo Rei', 'Fazendinha', 'Ganchinho',
  'Guabirotuba', 'Guaíra', 'Hauer', 'Hugo Lange', 'Jardim Botânico', 'Jardim das Américas',
  'Jardim Social', 'Juvevê', 'Lamenha Pequena', 'Lindóia', 'Mercês', 'Mossunguê (Ecoville)',
  'Novo Mundo', 'Orleans', 'Parolin', 'Pilarzinho', 'Pinheirinho', 'Portão', 'Prado Velho',
  'Rebouças', 'Riviera', 'Santa Cândida', 'Santa Felicidade', 'Santa Quitéria', 'Santo Inácio',
  'São Braz', 'São Francisco', 'São João', 'São Lourenço', 'São Miguel', 'Seminário',
  'Sítio Cercado', 'Taboão', 'Tarumã', 'Tatuquara', 'Tingui', 'Uberaba', 'Umbará',
  'Vila Izabel', 'Vista Alegre', 'Xaxim'
];

export const POPULAR_COMMUNITIES = [
  'Vila Sandra', 'Neoville', 'Vitória Régia', 'Caiuá', 'Sabará', 'Nossa Senhora da Luz',
  'Conquista', 'Barigui', 'Gabineto', 'Itatiaia', 'Santa Helena', 'Atenas', 'Osvaldo Cruz',
  'Vila Pantanal', 'Vila Torres', 'Vila Parolin', 'Vila Audi', 'Vila Hauer', 'Vila Guaíra',
  'Vila Oficinas', 'Vila Osternack', 'Vila São Pedro', 'Pinheirinho Velho', 'Capão Raso Velho',
  'Sítio Cercado Velho', 'Boqueirão Velho', 'Portão Velho', 'Uberaba Velho', 'Boa Vista Norte',
  'Bairro Alto Norte', 'Orleans Velho', 'Santa Felicidade Norte', 'São Braz Alto',
  'Jardim Gabineto', 'Jardim Itatiaia', 'Jardim Kosmos', 'Jardim da Ordem'
];

export const RMC_CITIES = [
  'São José dos Pinhais', 'Pinhais', 'Colombo', 'Araucária', 'Campo Largo', 'Campo Magro',
  'Fazenda Rio Grande', 'Quatro Barras', 'Campina Grande do Sul', 'Almirante Tamandaré',
  'Mandirituba', 'Rio Branco do Sul', 'Balsa Nova', 'Itaperuçu', 'Tijucas do Sul'
];

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Generate complete structured dataset
export const LOCATIONS_DATA: LocationItem[] = [
  ...OFFICIAL_NEIGHBORHOODS.map((name) => {
    const slug = slugify(name);
    return {
      id: `bairro-${slug}`,
      slug: slug,
      name: name,
      type: 'bairro' as const,
      zone: 'Curitiba',
      estimatedDeliveryTime: 'Entrega rápida no mesmo dia ou até 24h',
      description: `Atendimento completo em venda e entrega de Madeira de Pinus Serrada, Caibros, Vigas, Tábuas de Caixaria e Escoras no bairro ${name}, Curitiba - PR. Frota própria para descarregamento rápido na sua obra.`,
      highlights: [
        `Entrega garantida no bairro ${name}`,
        'Madeira de Pinus serrada in natura de reflorestamento',
        'Tábuas para caixaria e fôrmas com preços de distribuidora',
        'Atendimento rápido via WhatsApp e telefone'
      ]
    };
  }),
  ...POPULAR_COMMUNITIES.map((name) => {
    const slug = slugify(name);
    return {
      id: `comunidade-${slug}`,
      slug: slug,
      name: name,
      type: 'bairro' as const,
      zone: 'Região de Curitiba',
      estimatedDeliveryTime: 'Entrega rápida e agendada',
      description: `Fornecimento direto de Madeira de Pinus e insumos para construção civil na comunidade/região de ${name}, Curitiba - PR. Descontos especiais para construtores e moradores locais.`,
      highlights: [
        `Atendimento especializado para a região de ${name}`,
        'Madeira de Pinus seca e alinhada para telhados e reformas',
        'Preços competitivos com frete direto de fábrica',
        'Facilidade de pagamento na entrega'
      ]
    };
  }),
  ...RMC_CITIES.map((name) => {
    const slug = slugify(name);
    return {
      id: `cidade-${slug}`,
      slug: slug,
      name: name,
      type: 'cidade' as const,
      zone: 'Região Metropolitana de Curitiba',
      estimatedDeliveryTime: 'Entrega agendada diária (24h a 48h)',
      description: `Venda e distribuição de Madeira de Pinus Serrada, Caibros, Vigas, Ripas, Tábuas de Caixaria e Escoras para o município de ${name} - PR. Logística rápida atendendo canteiros de obras.`,
      highlights: [
        `Atendimento prioritário em ${name} - PR`,
        'Fornecimento de Madeira de Pinus para telhados e caixarias',
        'Carregamento completo direto da nossa distribuidora',
        'Suporte técnico e orçamento rápido sem compromisso'
      ]
    };
  })
];

export function getLocationBySlug(slug: string): LocationItem | undefined {
  const cleanSlug = slug.toLowerCase().replace(/^(bairro-|cidade-|comunidade-|conserto-de-geladeira-em-|madeireira-em-)/, '');
  return LOCATIONS_DATA.find((loc) => loc.slug === cleanSlug || slugify(loc.name) === cleanSlug);
}
