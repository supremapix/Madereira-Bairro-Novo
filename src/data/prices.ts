export interface PriceItem {
  id: string;
  name: string;
  productName: string;
  slug: string;
  dimensions: string;
  dimension: string;
  nominalDimension: string;
  realDimension: string;
  length: string;
  unit: string;
  application: string;
  notes?: string;
  priceRange: string;
  referencePrice: string;
  priceReferenceUnit: string;
  priceReferenceDozen: string;
  priceM3Estimate: string;
  stockStatus: 'Pronta Entrega' | 'Sob Encomenda';
  recommendedUse: string;
}

export interface PriceCategory {
  id: string;
  name: string;
  title: string;
  categoryName: string;
  description: string;
  items: PriceItem[];
}

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    id: 'tabuas',
    name: 'Tábuas para Caixaria',
    title: 'Tábuas de Pinus para Caixaria e Construção Civil',
    categoryName: 'Tábuas de Pinus para Caixaria e Construção',
    description: 'Tábuas brutas in natura para caixaria de concreto armado, baldrames, pilares, vigas e bandejas em Curitiba.',
    items: [
      {
        id: 'tabua-30',
        name: 'Tábua de Pinus 30cm (1" x 12")',
        productName: 'Tábua de Pinus 30cm (1" x 12")',
        slug: 'tabuas',
        dimensions: '2,5 x 30 cm x 3,00m',
        dimension: '2,5 x 30 cm x 3,00m',
        nominalDimension: '2,5 x 30 cm',
        realDimension: '2,0 a 2,2 x 30 cm',
        length: '3,00 metros',
        unit: 'Peça / Dúzia / m³',
        application: 'Caixarias pesadas de vigas e pilares, formas de concreto',
        notes: 'Madeira verde serrada in natura, alta resistência à pressão hidrostática do concreto',
        priceRange: 'Sob Consulta (Melhor Preço de Curitiba)',
        referencePrice: 'Sob Consulta (Preço Direto da Serraria)',
        priceReferenceUnit: 'Sob consulta (melhor preço por peça)',
        priceReferenceDozen: 'Cotação por dúzia disponível',
        priceM3Estimate: 'Preço especial por m³ fechado',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Fôrmas de concreto pesadas, caixaria de vigas e fechamento de obras'
      },
      {
        id: 'tabua-25',
        name: 'Tábua de Pinus 25cm (1" x 10")',
        productName: 'Tábua de Pinus 25cm (1" x 10")',
        slug: 'tabuas',
        dimensions: '2,5 x 25 cm x 3,00m',
        dimension: '2,5 x 25 cm x 3,00m',
        nominalDimension: '2,5 x 25 cm',
        realDimension: '2,0 a 2,2 x 25 cm',
        length: '3,00 metros',
        unit: 'Peça / Dúzia / m³',
        application: 'Caixaria de pilares, vigas baldrame e travamento',
        notes: 'Bitola regular, serrada com precisão para evitar desvios na desmoldagem',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta (Melhor Preço por Dúzia)',
        priceReferenceUnit: 'Sob consulta',
        priceReferenceDozen: 'Consulte pacote com 12 peças',
        priceM3Estimate: 'Desconto progressivo para carga fechada',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Caixaria de pilares e vigas médias'
      },
      {
        id: 'tabua-20',
        name: 'Tábua de Pinus 20cm (1" x 8")',
        productName: 'Tábua de Pinus 20cm (1" x 8")',
        slug: 'tabuas',
        dimensions: '2,5 x 20 cm x 3,00m',
        dimension: '2,5 x 20 cm x 3,00m',
        nominalDimension: '2,5 x 20 cm',
        realDimension: '2,0 a 2,2 x 20 cm',
        length: '3,00 metros',
        unit: 'Peça / Dúzia / m³',
        application: 'Vigas baldrame, canaletas, andaimes e contenções',
        notes: 'Ótima relação custo-benefício para fundações e fôrmas intermediárias',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta',
        priceReferenceUnit: 'Sob consulta',
        priceReferenceDozen: 'Consulte valor por dúzia',
        priceM3Estimate: 'Excelente custo por m³',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Baldrames, canaletas e andaimes de obra'
      },
      {
        id: 'tabua-15',
        name: 'Tábua de Pinus 15cm (1" x 6")',
        productName: 'Tábua de Pinus 15cm (1" x 6")',
        slug: 'tabuas',
        dimensions: '2,5 x 15 cm x 3,00m',
        dimension: '2,5 x 15 cm x 3,00m',
        nominalDimension: '2,5 x 15 cm',
        realDimension: '2,0 a 2,2 x 15 cm',
        length: '3,00 metros',
        unit: 'Peça / Dúzia / m³',
        application: 'Espelhos de degrau, tapumes, canaletas e travamentos',
        notes: 'Fácil manuseio e corte rápido no canteiro de obras',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta',
        priceReferenceUnit: 'Sob consulta',
        priceReferenceDozen: 'Valores promocionais para atacado',
        priceM3Estimate: 'Cotação rápida via WhatsApp',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Espelhos de escada, canaletas e bandejas de proteção'
      }
    ]
  },
  {
    id: 'caibros-vigas',
    name: 'Caibros e Vigas Estruturais',
    title: 'Caibros e Vigas de Pinus para Estruturas e Telhados',
    categoryName: 'Caibros e Vigas de Pinus para Telhado e Estruturas',
    description: 'Madeira serrada com alta densidade para suporte de telhas, escoramentos pesados e estruturas de cobertura.',
    items: [
      {
        id: 'caibro-5x5',
        name: 'Caibro de Pinus 5x5cm (2" x 2")',
        productName: 'Caibro de Pinus 5x5cm (2" x 2")',
        slug: 'caibros',
        dimensions: '5 x 5 cm x 3,00m / 4,00m',
        dimension: '5 x 5 cm x 3,00m / 4,00m',
        nominalDimension: '5 x 5 cm (2" x 2")',
        realDimension: '4,5 x 4,5 cm',
        length: '3,00m e 4,00 metros',
        unit: 'Peça / Dúzia / m³',
        application: 'Estruturação de telhados, montantes de caixaria e fôrmas',
        notes: 'Peças selecionadas com baixo índice de nós críticos',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por Metro Linear',
        priceReferenceUnit: 'Sob consulta por metro linear ou peça',
        priceReferenceDozen: 'Pacote com 12 peças',
        priceM3Estimate: 'Ideal para engradamento completo',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Estrutura intermediária de telhados para apoio de ripas'
      },
      {
        id: 'caibro-5x7',
        name: 'Caibro de Pinus 5x7cm (2" x 3")',
        productName: 'Caibro de Pinus 5x7cm (2" x 3")',
        slug: 'caibros',
        dimensions: '5 x 7 cm x 3,00m / 4,00m',
        dimension: '5 x 7 cm x 3,00m / 4,00m',
        nominalDimension: '5 x 7 cm (2" x 3")',
        realDimension: '4,5 x 6,5 cm',
        length: '3,00m e 4,00 metros',
        unit: 'Peça / Dúzia / m³',
        application: 'Telhados de maior vão e escoramento estrutural',
        notes: 'Maior momento de inércia para evitar flechas em vãos de até 2 metros',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta',
        priceReferenceUnit: 'Sob consulta',
        priceReferenceDozen: 'Pacote com 12 peças',
        priceM3Estimate: 'Desconto no combo caibro + ripa',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Telhados com telhas de concreto ou fibrocimento pesado'
      },
      {
        id: 'viga-5x11',
        name: 'Viga de Pinus 5x11cm (2" x 4,5")',
        productName: 'Viga de Pinus 5x11cm (2" x 4,5")',
        slug: 'vigas',
        dimensions: '5 x 11 cm x 3,00m a 6,00m',
        dimension: '5 x 11 cm x 3,00m a 6,00m',
        nominalDimension: '5 x 11 cm (2" x 4,5")',
        realDimension: '4,5 x 10,5 cm',
        length: '3,00m a 6,00 metros',
        unit: 'Peça / m linear / m³',
        application: 'Terças de telhado, vigamentos secundários e barrotes',
        notes: 'Comprimentos especiais sob encomenda para grandes vãos',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por Metro Linear',
        priceReferenceUnit: 'Sob consulta por metro linear',
        priceReferenceDozen: 'Cotação por lista de corte',
        priceM3Estimate: 'Preço competitivo direto da serraria',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Terças de sustentação de tesouras e coberturas'
      },
      {
        id: 'viga-5x15',
        name: 'Viga de Pinus 5x15cm (2" x 6")',
        productName: 'Viga de Pinus 5x15cm (2" x 6")',
        slug: 'vigas',
        dimensions: '5 x 15 cm x 3,00m a 6,00m',
        dimension: '5 x 15 cm x 3,00m a 6,00m',
        nominalDimension: '5 x 15 cm (2" x 6")',
        realDimension: '4,5 x 14,5 cm',
        length: '3,00m a 6,00 metros',
        unit: 'Peça / m linear / m³',
        application: 'Vigas mestras, cumeeiras e mezaninos provisórios',
        notes: 'Alta resistência à flexão para coberturas residenciais e comerciais',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por Metro Linear',
        priceReferenceUnit: 'Sob consulta por metro linear',
        priceReferenceDozen: 'Cotação por projeto estrutural',
        priceM3Estimate: 'Faturamento facilitado para construtoras',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Vigamento principal de telhado e barrotes reforçados'
      }
    ]
  },
  {
    id: 'ripas-sarrafos',
    name: 'Ripas e Sarrafos',
    title: 'Ripas e Sarrafos de Pinus para Telhado e Travamento',
    categoryName: 'Ripas e Sarrafos de Pinus',
    description: 'Peças menores e leves para galga de telhas cerâmicas e gravatas de caixaria.',
    items: [
      {
        id: 'ripa-1.2x5',
        name: 'Ripa de Pinus 1,2x5cm (1/2" x 2")',
        productName: 'Ripa de Pinus 1,2x5cm (1/2" x 2")',
        slug: 'ripas',
        dimensions: '1,2 x 5 cm x 3,00m',
        dimension: '1,2 x 5 cm x 3,00m',
        nominalDimension: '1,2 x 5 cm (1/2" x 2")',
        realDimension: '1,0 x 4,5 cm',
        length: '3,00 metros (amarrilhos c/ 10 ou 12 pçs)',
        unit: 'Amarrilho / Dúzia / m³',
        application: 'Enripamento para telhas cerâmicas, esmaltadas e concreto',
        notes: 'Madeira alinhada para fixação precisa e sem rachaduras no prego',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por Amarrilho',
        priceReferenceUnit: 'Sob consulta por amarrilho',
        priceReferenceDozen: 'Pacote fechado com desconto',
        priceM3Estimate: 'Excelente preço por milheiro',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Enripamento de telhados para fixação e galga de telhas'
      },
      {
        id: 'sarrafo-2.5x5',
        name: 'Sarrafo de Pinus 2,5x5cm (1" x 2")',
        productName: 'Sarrafo de Pinus 2,5x5cm (1" x 2")',
        slug: 'sarrafos',
        dimensions: '2,5 x 5 cm x 3,00m',
        dimension: '2,5 x 5 cm x 3,00m',
        nominalDimension: '2,5 x 5 cm (1" x 2")',
        realDimension: '2,0 x 4,5 cm',
        length: '3,00 metros',
        unit: 'Peça / Dúzia / m³',
        application: 'Gravatas de caixaria, travamentos de tábuas e gabaritos de obra',
        notes: 'Item essencial no canteiro para garantir o alinhamento de fôrmas',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por Dúzia',
        priceReferenceUnit: 'Sob consulta',
        priceReferenceDozen: 'Pacote com 12 peças',
        priceM3Estimate: 'Cotação por m³ ou dúzia',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Gravatas de travamento para caixarias de vigas e pilares'
      },
      {
        id: 'sarrafo-2.5x7',
        name: 'Sarrafo de Pinus 2,5x7cm (1" x 3")',
        productName: 'Sarrafo de Pinus 2,5x7cm (1" x 3")',
        slug: 'sarrafos',
        dimensions: '2,5 x 7 cm x 3,00m',
        dimension: '2,5 x 7 cm x 3,00m',
        nominalDimension: '2,5 x 7 cm (1" x 3")',
        realDimension: '2,0 x 6,5 cm',
        length: '3,00 metros',
        unit: 'Peça / Dúzia / m³',
        application: 'Travamento pesado de formas, escoramentos leves e tapumes',
        notes: 'Maior largura para fixação com pregos duplos sem rachar',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta',
        priceReferenceUnit: 'Sob consulta',
        priceReferenceDozen: 'Pacote com 12 peças',
        priceM3Estimate: 'Preço competitivo para atacado',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Travamento de caixarias em pilares de grande seção'
      }
    ]
  },
  {
    id: 'escoras-pontaletes',
    name: 'Escoras e Pontaletes',
    title: 'Escoras de Pinus e Pontaletes para Laje',
    categoryName: 'Escoras para Laje e Pontaletes',
    description: 'Madeira roliça e quadrada para sustentação temporária de lajes maciças, nervuradas e pré-moldadas.',
    items: [
      {
        id: 'escora-7x7',
        name: 'Pontalete de Pinus 7x7cm (3" x 3")',
        productName: 'Pontalete de Pinus 7x7cm (3" x 3")',
        slug: 'escoras',
        dimensions: '7 x 7 cm x 3,00m / 3,50m',
        dimension: '7 x 7 cm x 3,00m / 3,50m',
        nominalDimension: '7 x 7 cm (3" x 3")',
        realDimension: '6,5 x 6,5 cm',
        length: '3,00m e 3,50 metros',
        unit: 'Peça / Dúzia / m³',
        application: 'Escoramento de lajes de forro e piso, pés de andaime',
        notes: 'Capacidade de carga elevada quando apoiado com cunha e base nivelada',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por Peça',
        priceReferenceUnit: 'Sob consulta por peça',
        priceReferenceDozen: 'Desconto para kits de laje completa',
        priceM3Estimate: 'Entrega expressa no canteiro',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Escoramento de lajes pré-moldadas e vigas intermediárias'
      },
      {
        id: 'escora-8x8',
        name: 'Pontalete de Pinus 8x8cm (3,5" x 3,5")',
        productName: 'Pontalete de Pinus 8x8cm (3,5" x 3,5")',
        slug: 'escoras',
        dimensions: '8 x 8 cm x 3,00m / 3,50m',
        dimension: '8 x 8 cm x 3,00m / 3,50m',
        nominalDimension: '8 x 8 cm (3,5" x 3,5")',
        realDimension: '7,5 x 7,5 cm',
        length: '3,00m e 3,50 metros',
        unit: 'Peça / Dúzia / m³',
        application: 'Escoramento pesado de lajes maciças e vigamentos de concreto',
        notes: 'Peças robustas para obras com pé-direito padrão e duplo',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por Peça',
        priceReferenceUnit: 'Sob consulta por peça',
        priceReferenceDozen: 'Pacote econômico por lote',
        priceM3Estimate: 'Faturamento direto para empresas',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Lajes maciças de concreto armado com alta carga de cura'
      }
    ]
  },
  {
    id: 'compensados-madeirite',
    name: 'Compensados e Madeirite',
    title: 'Madeirite Resinado e Plastificado (Filmado)',
    categoryName: 'Madeirite Resinado e Plastificado para Fôrmas',
    description: 'Chapas compensadas fenólicas para fôrmas de concreto aparente e tapumes perimetrais.',
    items: [
      {
        id: 'madeirite-resinado',
        name: 'Madeirite Resinado (Cola Branca / Fenólica)',
        productName: 'Madeirite Resinado (Cola Branca / Fenólica)',
        slug: 'madeirite',
        dimensions: '1,10 x 2,20 m (10mm a 18mm)',
        dimension: '1,10 x 2,20 m (10mm a 18mm)',
        nominalDimension: '1,10 x 2,20 m',
        realDimension: 'Espessuras: 10mm, 12mm, 14mm, 18mm',
        length: 'Chapas padrão 2,20 x 1,10 m',
        unit: 'Chapa / Fardo',
        application: 'Fôrmas de vigas, lajes e fechamentos perimetrais (tapumes)',
        notes: 'Reaproveitamento de 2 a 4 vezes com desmoldante adequado',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por Chapa',
        priceReferenceUnit: 'Sob consulta por chapa',
        priceReferenceDozen: 'Cotação por fardo com 50/100 chapas',
        priceM3Estimate: 'Melhor custo por m² de fôrma',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Fôrmas de lajes e vigas com reaproveitamento de 2 a 4 vezes'
      },
      {
        id: 'madeirite-plastificado',
        name: 'Madeirite Plastificado (Filmado Preto)',
        productName: 'Madeirite Plastificado (Filmado Preto)',
        slug: 'madeirite',
        dimensions: '1,22 x 2,44 m (12mm a 18mm)',
        dimension: '1,22 x 2,44 m (12mm a 18mm)',
        nominalDimension: '1,22 x 2,44 m ou 1,10 x 2,20 m',
        realDimension: 'Espessuras: 12mm, 14mm, 17mm, 18mm',
        length: 'Chapas padrão com filme fenólico',
        unit: 'Chapa / Fardo',
        application: 'Concreto aparente de alto padrão e lajes lisas',
        notes: 'Reaproveitamento de 8 a 15 vezes em ciclos industriais de concretagem',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por Chapa',
        priceReferenceUnit: 'Sob consulta por chapa',
        priceReferenceDozen: 'Desconto progressivo por volume',
        priceM3Estimate: 'Máxima durabilidade por ciclo de concretagem',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Concreto aparente de alto acabamento com reaproveitamento de 8 a 15 vezes'
      }
    ]
  },
  {
    id: 'pinus-tratado',
    name: 'Pinus Autoclavado CCA',
    title: 'Pinus Autoclavado (Tratado CCA) para Áreas Externas',
    categoryName: 'Pinus Autoclavado (Tratado CCA) para Áreas Externas',
    description: 'Madeira imunizada sob vácuo e pressão contra intempéries, cupins e fungos apodrecedores.',
    items: [
      {
        id: 'deck-pinus',
        name: 'Tábua de Deck de Pinus Autoclavado',
        productName: 'Tábua de Deck de Pinus Autoclavado',
        slug: 'deck',
        dimensions: '2,5 x 10 cm ou 2,5 x 15 cm x 3,00m',
        dimension: '2,5 x 10 cm ou 2,5 x 15 cm x 3,00m',
        nominalDimension: '2,5 x 10 cm ou 2,5 x 15 cm',
        realDimension: 'Aparelhada e tratada CCA',
        length: '3,00 metros',
        unit: 'Peça / m² / m linear',
        application: 'Decks de piscinas, varandas, caminhos de jardim e quiosques',
        notes: 'Garantia de imunização de 15+ anos com retenção de sais CCA',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por m² ou Metro Linear',
        priceReferenceUnit: 'Sob consulta por m² ou metro linear',
        priceReferenceDozen: 'Cotação por projeto',
        priceM3Estimate: 'Garantia de durabilidade acima de 15 anos',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Decks de piscina, varandas, jardins, passarelas e quiosques'
      },
      {
        id: 'pergolado-pinus',
        name: 'Vigas e Pilares para Pergolado de Pinus Tratado',
        productName: 'Vigas e Pilares para Pergolado de Pinus Tratado',
        slug: 'pergolado',
        dimensions: '10x10cm, 15x15cm, 5x15cm x 3,00m a 6,00m',
        dimension: '10x10cm, 15x15cm, 5x15cm x 3,00m a 6,00m',
        nominalDimension: '10x10cm, 15x15cm, 5x15cm, 5x20cm',
        realDimension: 'Aparelhadas ou brutas autoclavadas',
        length: '3,00m a 6,00m',
        unit: 'Peça / Metro Linear',
        application: 'Pergolados decorativos, gazebos, pórticos e garagens abertas',
        notes: 'Economia de até 60% em relação a madeiras nobres como garapeira e cumaru',
        priceRange: 'Sob Consulta',
        referencePrice: 'Sob Consulta por Peça',
        priceReferenceUnit: 'Sob consulta por peça',
        priceReferenceDozen: 'Kits completos sob medida',
        priceM3Estimate: 'Economia de até 60% comparado a madeiras nobres',
        stockStatus: 'Pronta Entrega',
        recommendedUse: 'Pergolados decorativos, gazebos, garagens abertas e pórticos'
      }
    ]
  }
];

export const PRICES_CATEGORIES_DATA = PRICE_CATEGORIES;

export const PRICE_FAQS = [
  {
    question: 'Como funciona o cálculo de preço de madeira de pinus (m³, dúzia ou peça)?',
    answer:
      'A madeira serrada pode ser orçada de três formas: por peça individual (ideal para pequenas reformas), por dúzia/fardo (ótimo para caibros, sarrafos e tábuas) ou por metro cúbico - m³ (usado para compras volumosas e canteiros de construtoras). Para calcular o m³, multiplique espessura (m) × largura (m) × comprimento (m) × quantidade de peças.'
  },
  {
    question: 'A Madeireira Bairro Novo fatura pedidos para empresas (PJ)?',
    answer:
      'Sim! Trabalhamos com faturamento direto via boleto bancário para construtoras, empreiteiras e empresas com CNPJ cadastrado e aprovado, além de emitirmos nota fiscal eletrônica em 100% das vendas.'
  },
  {
    question: 'Qual o prazo e custo de frete para Curitiba e Região Metropolitana?',
    answer:
      'Temos frota própria com caminhões e veículos utilitários para entrega expressa no mesmo dia ou em até 24 horas úteis. Para bairros próximos à nossa sede no Sítio Cercado e compras acima do valor mínimo da rota, oferecemos condições de frete grátis ou com taxa reduzida.'
  },
  {
    question: 'O que é madeira de pinus verde (in natura) e quando ela é indicada?',
    answer:
      'A madeira de pinus verde in natura é aquela recém-serrada, sem passar por estufa de secagem artificial. Ela é a escolha número 1 da construção civil para caixarias de concreto, baldrames, vigas e lajes, pois oferece máxima flexibilidade, facilidade de pregação e custo até 40% menor que madeiras secas ou beneficiadas.'
  },
  {
    question: 'Como receber um orçamento detalhado com cálculo de corte?',
    answer:
      'Basta enviar sua lista de materiais (bitolas, comprimentos e quantidades) diretamente para o nosso WhatsApp oficial (41) 99121-7114. Nossa equipe técnica responde em poucos minutos com o quantitativo de m³ e os valores fechados com frete.'
  }
];

export const PAYMENT_TERMS = {
  lastUpdatedDate: '18 de Agosto de 2026',
  currency: 'BRL (R$)',
  deliveryMinimum: 'Consulte quantidade mínima por rota para frete grátis ou reduzido',
  paymentMethods: [
    'Pix com faturamento instantâneo',
    'Cartão de Crédito e Débito na entrega',
    'Boleto Bancário para construtoras e CNPJ cadastrado',
    'Transferência Bancária (TED/PIX)'
  ],
  deliveryLeadTime: 'No mesmo dia para pedidos efetuados pela manhã ou em até 24h úteis para Curitiba e RMC',
  quoteWhatsAppText: 'Olá! Gostaria de uma cotação atualizada de madeira de pinus com a Madeireira Bairro Novo.'
};

export const PRICING_TERMS_INFO = PAYMENT_TERMS;
