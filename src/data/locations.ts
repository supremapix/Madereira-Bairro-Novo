import { LocationItem } from '../types';

export const CURITIBA_REGIONAL_ZONES = [
  {
    id: 'regional-bairro-novo',
    name: 'Regional Bairro Novo / Sítio Cercado (Base da Empresa)',
    deliveryTime: 'Entrega Imediata (1 a 2 horas)',
    deliveryRateNote: 'Frete reduzido ou grátis para compras acima do mínimo',
    description: 'Região onde está instalado o depósito central da Madeireira Bairro Novo, garantindo agilidade recorde no fornecimento para canteiros residenciais e comerciais.',
    neighborhoods: ['Sítio Cercado', 'Ganchinho', 'Umbará', 'Bairro Novo']
  },
  {
    id: 'regional-pinheirinho',
    name: 'Regional Pinheirinho e Tatuquara',
    deliveryTime: 'Entrega no mesmo dia (2 a 4 horas)',
    deliveryRateNote: 'Frete super acessível com rotas diárias',
    description: 'Forte presença de loteamentos residenciais, condomínios fechados, sobrados e barracões comerciais ao longo da Linha Verde Sul e Contorno.',
    neighborhoods: ['Pinheirinho', 'Capão Raso', 'Tatuquara', 'Campo de Santana', 'Caximba']
  },
  {
    id: 'regional-boqueirao',
    name: 'Regional Boqueirão e Hauer',
    deliveryTime: 'Entrega no mesmo dia (2 a 4 horas)',
    deliveryRateNote: 'Acesso rápido via Av. Marechal Floriano Peixoto',
    description: 'Polo tradicional de comércio, marcenarias industriais, oficinas e obras de médio porte.',
    neighborhoods: ['Boqueirão', 'Alto Boqueirão', 'Hauer', 'Xaxim']
  },
  {
    id: 'regional-cic',
    name: 'Regional CIC (Cidade Industrial de Curitiba)',
    deliveryTime: 'Entrega no mesmo dia ou até 24h',
    deliveryRateNote: 'Rotas contínuas pelo Contorno Sul',
    description: 'Maior polo industrial do estado, com demanda massiva de madeira de pinus para caixas, pallets, embalagens industriais e reformas de galpões.',
    neighborhoods: ['CIC (Cidade Industrial de Curitiba)', 'Jardim Gabineto', 'Augusta', 'Riviera', 'São Miguel']
  },
  {
    id: 'regional-portao',
    name: 'Regional Portão e Fazendinha',
    deliveryTime: 'Entrega em até 24h úteis',
    deliveryRateNote: 'Atendimento contínuo na Zona Sul / Sudoeste',
    description: 'Intensa verticalização com edifícios residenciais, sobrados de alto padrão e reformas comerciais.',
    neighborhoods: ['Portão', 'Fazendinha', 'Novo Mundo', 'Santa Quitéria', 'Lindóia', 'Guaíra', 'Parolin', 'Vila Izabel', 'Água Verde', 'Seminário']
  },
  {
    id: 'regional-cajuru',
    name: 'Regional Cajuru e Uberaba',
    deliveryTime: 'Entrega em até 24h úteis',
    deliveryRateNote: 'Acesso facilitado pela BR-277 e Av. das Torres',
    description: 'Zona de grande extensão residencial com reformas contínuas, obras estruturais e construções de condomínios.',
    neighborhoods: ['Cajuru', 'Uberaba', 'Guabirotuba', 'Jardim das Américas', 'Capão da Imbuia']
  },
  {
    id: 'regional-matriz',
    name: 'Regional Matriz (Centro e Batel)',
    deliveryTime: 'Entrega programada em até 24h',
    deliveryRateNote: 'Logística adaptada para horários restritos do centro urbano',
    description: 'Centro comercial, edifícios históricos, restaurantes e reformas corporativas de alto padrão.',
    neighborhoods: ['Centro', 'Batel', 'Rebouças', 'Cristo Rei', 'Jardim Botânico', 'Mercês', 'Bom Retiro', 'Ahú', 'Juvevê', 'Cabral', 'Alto da Glória', 'Alto da Rua XV', 'São Francisco', 'Centro Cívico', 'Prado Velho']
  },
  {
    id: 'regional-santa-felicidade',
    name: 'Regional Santa Felicidade e Cascatinha',
    deliveryTime: 'Entrega em até 24h úteis',
    deliveryRateNote: 'Rotas pelo Contorno Norte e Av. Manoel Ribas',
    description: 'Bairros nobres de Curitiba, com altíssima demanda por pinus autoclavado para decks, quiosques de lazer e pergolados residenciais.',
    neighborhoods: ['Santa Felicidade', 'Cascatinha', 'São Braz', 'Orleans', 'Santo Inácio', 'Campina do Siqueira', 'Campo Comprido', 'Mossunguê (Ecoville)', 'São João', 'Vista Alegre', 'Butiatuvinha']
  },
  {
    id: 'regional-boa-vista',
    name: 'Regional Boa Vista e Bacacheri',
    deliveryTime: 'Entrega em até 24h úteis',
    deliveryRateNote: 'Atendimento na Zona Norte de Curitiba',
    description: 'Região consolidada com constante expansão residencial e condomínios horizontais.',
    neighborhoods: ['Boa Vista', 'Bacacheri', 'Bairro Alto', 'Santa Cândida', 'Atuba', 'Tingui', 'Barreirinha', 'Abranches', 'Pilarzinho', 'São Lourenço', 'Taboão', 'Cachoeira', 'Lamenha Pequena']
  }
];

export const OFFICIAL_NEIGHBORHOODS = CURITIBA_REGIONAL_ZONES.flatMap((r) => r.neighborhoods);

export const CORE_PRIORITY_NEIGHBORHOODS: LocationItem[] = [
  {
    id: 'bairro-sitio-cercado',
    slug: 'sitio-cercado',
    name: 'Sítio Cercado',
    type: 'bairro',
    zone: 'Regional Bairro Novo (Depósito Local)',
    distanceFromDepot: '0 km (Sede da Madeireira Bairro Novo)',
    estimatedDeliveryTime: 'Entrega Imediata no mesmo dia (1 a 2 horas)',
    mainRoutes: ['Rua Cel. Joaquim Antônio de Azevedo', 'Rua Izaac Ferreira da Cruz', 'Rua Tijucas do Sul'],
    constructionProfile: 'Região com altíssimo volume de obras residenciais, sobrados, comércios e reformas diárias.',
    popularProducts: ['Tábuas de Pinus 30cm', 'Caibros 5x5cm', 'Vigas de Pinus', 'Escoras para Laje', 'Madeirite e Compensados'],
    description: 'Madeireira no Sítio Cercado, Curitiba. Loja de madeiras com entrega rápida de tábuas para caixaria, caibros, vigas de pinus, escoras para laje e compensados.',
    highlights: [
      'Depósito próprio sediado na Rua Cel. Joaquim Antônio de Azevedo, 1459',
      'Descarregamento imediato no seu canteiro de obras em até 2 horas',
      'Estoque gigantesco com os melhores preços de Curitiba',
      'Atendimento no balcão e cotações expressas por WhatsApp'
    ],
    uniqueContentHtml: `
A **Madeireira Bairro Novo** é uma madeireira localizada em Curitiba, com pátio próprio de estocagem na Rua Coronel Joaquim Antônio de Azevedo, 1459, no **Sítio Cercado**. Atendemos com extrema agilidade quem procura onde comprar madeira para construção em Curitiba com entrega rápida no canteiro de obras.

Se você procura uma madeireira próxima no Sítio Cercado com estoque à pronta entrega de tábuas de caixaria de 30cm, caibros 5x5cm, vigas para engradamento de telhado, escoras para laje e chapas de compensado resinado e plastificado, nossa equipe oferece cotação imediata via WhatsApp.
    `,
    coordinates: { latitude: -25.541258, longitude: -49.278149 }
  },
  {
    id: 'bairro-bairro-novo',
    slug: 'bairro-novo',
    name: 'Bairro Novo',
    type: 'bairro',
    zone: 'Regional Bairro Novo',
    distanceFromDepot: '1 km do depósito central',
    estimatedDeliveryTime: 'Entrega Imediata (1 a 2 horas)',
    mainRoutes: ['Rua Tijucas do Sul', 'Rua Izaac Ferreira da Cruz', 'Rua Osternack'],
    constructionProfile: 'Bairro dinâmico com grande atividade construtiva residencial e comercial na Zona Sul de Curitiba.',
    popularProducts: ['Tábuas de Caixaria', 'Caibros de Telhado', 'Ripas e Sarrafos', 'Compensados e Madeirite'],
    description: 'Madeireira no Bairro Novo em Curitiba. Fornecedora de madeira de pinus in natura, compensados, tábuas brutas e vigas para telhado com entrega expressa e preço direto de distribuidora.',
    highlights: [
      'Entrega expressa no Bairro Novo com veículos próprios',
      'Madeira de pinus alinhada de reflorestamento com nota fiscal',
      'Cotação rápida para pacotes de caixaria e engradamento',
      'Condições especiais para construtores e mestres de obras'
    ],
    uniqueContentHtml: `
A **Madeireira Bairro Novo** leva no próprio nome o compromisso histórico com esta tradicional região de Curitiba. Atendemos diariamente quem procura por compensados Bairro Novo, tábuas de caixaria, vigas e caibros de pinus com alinhamento reto e preço justo.

A Bairro Novo Madeiras é uma madeireira localizada em Curitiba, oferecendo vendas de madeira para construção em Curitiba no atacado e varejo. Para quem busca uma loja de madeiras próxima no Bairro Novo, entregamos cargas de fôrmas, escoramentos de laje e estruturas de telhado em poucos minutos.
    `,
    coordinates: { latitude: -25.548, longitude: -49.272 }
  },
  {
    id: 'bairro-umbara',
    slug: 'umbara',
    name: 'Umbará',
    type: 'bairro',
    zone: 'Regional Bairro Novo / Zona Sul',
    distanceFromDepot: '3 km do depósito central',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 3 horas)',
    mainRoutes: ['Estrada do Ganchinho', 'Rua Nicola Pellanda', 'Rua Ângelo Gai'],
    constructionProfile: 'Bairro de chácaras residenciais, casas de campo, condomínios fechados horizontais e galpões comerciais.',
    popularProducts: ['Pinus Autoclavado CCA', 'Decks para Piscina', 'Madeira para Pergolado', 'Caibros e Vigas Pesadas'],
    description: 'Madeira de Pinus e Pinus Autoclavado para decks e pergolados no Umbará, Curitiba. Entrega rápida no mesmo dia para chácaras, condomínios e residências.',
    highlights: [
      'Atendimento ágil em toda a extensão da Rua Nicola Pellanda e Estrada do Ganchinho',
      'Especialistas em Pinus Tratado em Autoclave para decks e pergolados de chácaras',
      'Entregas diretas de cargas fechadas e pedidos fracionados',
      'Suporte técnico para cálculo exato de madeiramento de telhado'
    ],
    uniqueContentHtml: `
O bairro **Umbará** destaca-se por seus amplos terrenos, chácaras de lazer e novos condomínios residenciais horizontais. Essa característica cria uma alta demanda por madeira para construção em Curitiba, especialmente o **Pinus Autoclavado CCA** para áreas externas de lazer, decks e pergolados.

A Madeireira Bairro Novo é uma madeireira localizada em Curitiba próxima ao Umbará, fornecendo desde tábuas para caixaria de fundação até réguas de deck e vigamentos para coberturas com entrega com frete reduzido pela Estrada do Ganchinho e Nicola Pellanda.
    `,
    coordinates: { latitude: -25.556, longitude: -49.288 }
  },
  {
    id: 'bairro-ganchinho',
    slug: 'ganchinho',
    name: 'Ganchinho',
    type: 'bairro',
    zone: 'Regional Bairro Novo',
    distanceFromDepot: '2 km do depósito central',
    estimatedDeliveryTime: 'Entrega Imediata (1 a 2 horas)',
    mainRoutes: ['Estrada do Ganchinho', 'Rua Eduardo Pinto da Rocha', 'Contorno Leste'],
    constructionProfile: 'Zona em forte expansão imobiliária, loteamentos residenciais novos e galpões de logística.',
    popularProducts: ['Tábuas de Pinus 25cm e 30cm', 'Sarrafos de Travamento', 'Caibros 5x5', 'Escoras de Pinus'],
    description: 'Entrega rápida de madeira de pinus para obras no Ganchinho em Curitiba. Tábuas de caixaria, caibros e madeirite com os melhores preços da região.',
    highlights: [
      'Entrega expressa pela Estrada do Ganchinho e Eduardo Pinto da Rocha',
      'Pronta entrega de madeira serrada in natura e beneficiada',
      'Cotação descomplicada pelo WhatsApp com resposta imediata',
      'Descontos progressivos para cargas completas de construção'
    ],
    uniqueContentHtml: `
No **Ganchinho**, bairro com acelerada expansão urbana e novos loteamentos residenciais, a rapidez no fornecimento de madeira para construção em Curitiba é crucial para não paralisar as frentes de trabalho.

A Madeireira Bairro Novo atende os canteiros do Ganchinho com rotas contínuas de entrega. Nossas tábuas de caixaria de 20cm, 25cm e 30cm, associadas aos sarrafos de travamento e escoras para laje, garantem fundações e concretagens perfeitas com a máxima economia por metro cúbico.
    `,
    coordinates: { latitude: -25.568, longitude: -49.262 }
  },
  {
    id: 'bairro-tatuquara',
    slug: 'tatuquara',
    name: 'Tatuquara',
    type: 'bairro',
    zone: 'Regional Tatuquara / Zona Sul',
    distanceFromDepot: '4 km do depósito central',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 3 horas)',
    mainRoutes: ['Rua Presidente João Goulart', 'Rua Enette Dubard', 'Rodovia Régis Bittencourt (BR-116)'],
    constructionProfile: 'Intensa atividade de construção civil, conjuntos habitacionais, sobrados comerciais e galpões.',
    popularProducts: ['Tábuas para Caixaria', 'Vigas Estruturais', 'Ripas e Caibros', 'Compensado e Madeirite'],
    description: 'Madeireira Tatuquara em Curitiba. Fornecimento de madeira de pinus para telhado, tábuas para caixaria, compensados e fôrmas de concreto com entrega rápida.',
    highlights: [
      'Acesso direto e entrega rápida via Linha Verde / BR-116 e Contorno',
      'Fornecimento de grande volume para construtoras e empreiteiros no Tatuquara',
      'Atendimento flexível com opções de pagamento facilitado no canteiro',
      'Madeira seca e selecionada pronta para aplicação na obra'
    ],
    uniqueContentHtml: `
Se você procura por **madeireira Tatuquara** ou onde comprar madeira para construção em Curitiba com entrega ágil no sul da cidade, a Madeireira Bairro Novo é a opção mais conveniente.

A Bairro Novo Madeiras é uma madeireira localizada em Curitiba que atende diariamente todas as vilas do Tatuquara (incluindo Moradias da Ordem, Santa Rita, Pompeia e Rio Bonito). Fornecemos tábuas de caixaria, caibros 5x5cm, vigas estruturais e chapas de compensado resinado e plastificado com preço direto de distribuidora.
    `,
    coordinates: { latitude: -25.572, longitude: -49.315 }
  },
  {
    id: 'bairro-cic',
    slug: 'cic',
    name: 'CIC (Cidade Industrial de Curitiba)',
    type: 'bairro',
    zone: 'Regional CIC',
    distanceFromDepot: '8 km via Contorno Sul',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 4 horas)',
    mainRoutes: ['Avenida Juscelino Kubitschek de Oliveira', 'Contorno Sul', 'Rua Pedro Gusso'],
    constructionProfile: 'Maior polo industrial do Paraná, com alta demanda por madeira para caixaria, pallets, embalagens industriais, barracões e reformas.',
    popularProducts: ['Tábuas de Caixaria 30cm', 'Compensados e Madeirite', 'Vigas de Pinus', 'Madeira para Pallets'],
    description: 'Madeireira na CIC (Cidade Industrial de Curitiba). Pronta entrega de tábuas de caixaria, vigas de pinus, compensados e madeira para embalagens com frete expresso.',
    highlights: [
      'Entrega diária pelo Contorno Sul e Av. Juscelino Kubitschek',
      'Atendimento a indústrias, galpões e construtoras da CIC',
      'Compensados resinados e plastificados para fôrmas pesadas',
      'Faturamento para empresas e fardos no atacado'
    ],
    uniqueContentHtml: `
Para quem procura **madeireira CIC** ou loja de madeiras na Cidade Industrial de Curitiba, a Madeireira Bairro Novo oferece atendimento especializado e entregas no mesmo dia.

A Bairro Novo Madeiras é uma madeireira localizada em Curitiba, com produtos e atendimento conforme as informações oficiais apresentadas no site. Atendemos indústrias, construtoras e empreiteiros na CIC com fornecimento contínuo de tábuas brutas de pinus de 20cm a 30cm, caibros, vigas estruturais e chapas de compensado resinado e plastificado para fôrmas de concreto.
    `,
    coordinates: { latitude: -25.512, longitude: -49.345 }
  },
  {
    id: 'bairro-gabineto',
    slug: 'gabineto',
    name: 'Jardim Gabineto (CIC)',
    type: 'bairro',
    zone: 'Regional CIC / Gabineto',
    distanceFromDepot: '10 km via Contorno Sul',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 4 horas)',
    mainRoutes: ['Rua Eduardo Sprada', 'Avenida Juscelino Kubitschek', 'BR-277'],
    constructionProfile: 'Bairro residencial e comercial em contínuo crescimento na CIC, com grande procura por materiais de construção e madeiras para reformas.',
    popularProducts: ['Tábuas de Caixaria', 'Caibros 5x5', 'Ripas e Sarrafos', 'Compensados'],
    description: 'Atendimento de madeireira para o Jardim Gabineto (CIC) em Curitiba. Entrega rápida de madeira para construção, caixarias, compensados e estruturas de telhado.',
    highlights: [
      'Entrega no Jardim Gabineto e conjunto habitacional da CIC',
      'Fornecimento direto de tábuas de caixaria e caibros',
      'Orçamento instantâneo por WhatsApp',
      'Opções de pagamento no momento da entrega'
    ],
    uniqueContentHtml: `
Procurando por **material de construção no Gabineto** ou madeireira próxima ao Jardim Gabineto na CIC? A Madeireira Bairro Novo fornece a linha completa de madeira para construção em Curitiba com frota própria de entrega.

A Bairro Novo Madeiras é uma madeireira localizada em Curitiba, atendendo o Jardim Gabineto com tábuas para caixaria de fundação, escoras para laje, caibros, ripas e compensados para reformas e obras residenciais na região.
    `,
    coordinates: { latitude: -25.468, longitude: -49.358 }
  },
  {
    id: 'bairro-boqueirao',
    slug: 'boqueirao',
    name: 'Boqueirão',
    type: 'bairro',
    zone: 'Regional Boqueirão',
    distanceFromDepot: '5 km via Av. Marechal Floriano Peixoto',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 3 horas)',
    mainRoutes: ['Av. Marechal Floriano Peixoto', 'Rua Francisco Derosso', 'Rua Desembargador Antonio de Paula'],
    constructionProfile: 'Tradicional polo comercial e residencial com marcenarias, oficinas e intensa atividade de reforma e construção.',
    popularProducts: ['Tábuas de Caixaria', 'Caibros e Vigas', 'Pinus Autoclavado', 'Compensados'],
    description: 'Madeireira no Boqueirão em Curitiba. Fornecedora de madeira de pinus, tábuas para caixaria, vigas para telhado e compensados com entrega rápida.',
    highlights: [
      'Rota diária pela Av. Marechal Floriano Peixoto e Francisco Derosso',
      'Entrega expressa no Boqueirão, Alto Boqueirão e Hauer',
      'Madeira de pinus de reflorestamento com nota fiscal',
      'Atendimento ágil para carpinteiros e mestres de obras'
    ],
    uniqueContentHtml: `
Quem busca por **madeireira Boqueirão** ou onde comprar madeira em Curitiba encontra na Madeireira Bairro Novo a parceria ideal para sua obra.

A Bairro Novo Madeiras é uma madeireira localizada em Curitiba, próxima ao Boqueirão e Alto Boqueirão. Fornecemos tábuas de caixaria, caibros 5x5cm e 5x7cm, vigas de pinus para telhado, escoras de laje e compensados com entregas no mesmo dia diretamente no canteiro.
    `,
    coordinates: { latitude: -25.508, longitude: -49.242 }
  },
  {
    id: 'bairro-xaxim',
    slug: 'xaxim',
    name: 'Xaxim',
    type: 'bairro',
    zone: 'Regional Boqueirão / Xaxim',
    distanceFromDepot: '4 km via Rua Francisco Derosso',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 3 horas)',
    mainRoutes: ['Rua Francisco Derosso', 'Rua David Tows', 'Linha Verde Sul'],
    constructionProfile: 'Bairro residencial muito adensado, com sobrados em condomínio, reformas de casas e comércios locais.',
    popularProducts: ['Tábuas para Caixaria', 'Caibros de Telhado', 'Escoras de Laje', 'Madeirite'],
    description: 'Madeireira no Xaxim em Curitiba. Distribuição de madeira de pinus para obras, tábuas de caixaria, caibros, vigas e compensados com entrega expressa.',
    highlights: [
      'Entrega rápida pela Rua Francisco Derosso e David Tows',
      'Preços imbatíveis por dúzia de tábua e m³ de madeira',
      'Atendimento receptivo no WhatsApp com orçamento na hora',
      'Pronta entrega para sobrados e reformas residenciais'
    ],
    uniqueContentHtml: `
Procurando por **madeireira Xaxim** ou loja de madeiras em Curitiba próxima do Xaxim? A Madeireira Bairro Novo é o depósito de referência na Zona Sul para fornecimento imediato de madeira de pinus.

A Bairro Novo Madeiras é uma madeireira localizada em Curitiba, entregando no Xaxim com agilidade tábuas brutas para caixaria de baldrames, caibros e vigas para coberturas, pontaletes para laje e chapas de compensado resinado.
    `,
    coordinates: { latitude: -25.518, longitude: -49.262 }
  },
  {
    id: 'bairro-pinheirinho',
    slug: 'pinheirinho',
    name: 'Pinheirinho',
    type: 'bairro',
    zone: 'Regional Pinheirinho (Zona Sul)',
    distanceFromDepot: '3 km do depósito central',
    estimatedDeliveryTime: 'Entrega Imediata no mesmo dia (1 a 2 horas)',
    mainRoutes: ['Av. Winston Churchill', 'Linha Verde Sul (BR-476)', 'Rua Izaac Ferreira da Cruz'],
    constructionProfile: 'Polo residencial e comercial de grande fluxo, sobrados em condomínio, barracões industriais e reformas diárias.',
    popularProducts: ['Tábuas de Caixaria 30cm', 'Caibros 5x5cm', 'Vigas Estruturais', 'Escoras de Laje', 'Madeirite Resinado'],
    description: 'Madeireira no Pinheirinho em Curitiba. Entrega rápida de madeira de pinus para obras, tábuas de caixaria, caibros, vigas de telhado e compensados.',
    highlights: [
      'Acesso direto pela Av. Winston Churchill e Linha Verde Sul',
      'Entrega em até 2 horas para pedidos confirmados pela manhã',
      'Preços direto de serraria para construtoras e mestres de obras do Pinheirinho',
      'Atendimento consultivo e cotação imediata por WhatsApp'
    ],
    uniqueContentHtml: `
A **Madeireira Bairro Novo** atende construtores e moradores do **Pinheirinho** com extrema agilidade logística. Pela proximidade direta com nosso pátio no Sítio Cercado e acesso pela Linha Verde, nossas entregas de tábuas de caixaria, caibros e vigas chegam em tempo recorde no seu canteiro.

Fornecemos tábuas brutas de pinus de 20cm a 30cm para formas de concreto, vigas 5x15cm para engradamento de telhados e chapas de madeirite para canteiros de obras no Pinheirinho.
    `,
    coordinates: { latitude: -25.518, longitude: -49.295 }
  },
  {
    id: 'bairro-capao-raso',
    slug: 'capao-raso',
    name: 'Capão Raso',
    type: 'bairro',
    zone: 'Regional Pinheirinho / Capão Raso',
    distanceFromDepot: '4 km do depósito central',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 3 horas)',
    mainRoutes: ['Av. República Argentina', 'Rua Pedro Gusso', 'Av. Brasília'],
    constructionProfile: 'Bairro consolidado com reformas residenciais, novos edifícios de apartamentos e condomínios de sobrados.',
    popularProducts: ['Tábuas de Caixaria', 'Vigas de Pinus', 'Caibros e Ripas', 'Compensados'],
    description: 'Madeira de Pinus no Capão Raso em Curitiba. Fornecedora de tábuas para caixaria, vigas para engradamento e compensados com entrega expressa.',
    highlights: [
      'Rota diária pela Rua Pedro Gusso e Av. República Argentina',
      'Entregas ágeis para reformas e novas construções',
      'Madeira seca e selecionada para evitar desperdícios',
      'Cotação instantânea pelo WhatsApp'
    ],
    uniqueContentHtml: `
Para construtores e empreiteiros do **Capão Raso**, a Madeireira Bairro Novo despacha pedidos com agilidade para reformas de telhados, caixarias de muros e baldrames, e escoramentos de laje com descarga no canteiro.
    `,
    coordinates: { latitude: -25.498, longitude: -49.298 }
  },
  {
    id: 'bairro-campo-de-santana',
    slug: 'campo-de-santana',
    name: 'Campo de Santana',
    type: 'bairro',
    zone: 'Regional Tatuquara / Zona Sul',
    distanceFromDepot: '6 km do depósito central',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 3 horas)',
    mainRoutes: ['Estrada Delegado Bruno de Almeida', 'Rua Ângelo Tozim', 'Linha Verde Sul'],
    constructionProfile: 'Bairro em rápida expansão com centenas de moradias unifamiliares, loteamentos populares e novos sobrados.',
    popularProducts: ['Tábuas de Pinus 30cm', 'Caibros 5x5', 'Ripas para Telha', 'Sarrafos de Gravata'],
    description: 'Madeireira atendendo o Campo de Santana em Curitiba. Pronta entrega de tábuas de caixaria, vigas, caibros e sarrafos com frete econômico.',
    highlights: [
      'Entregas frequentes pela Estrada Delegado Bruno de Almeida',
      'Preços populares e condições especiais no atacado',
      'Atendimento direto para mestres de obras e pedreiros',
      'Pagamento facilitado no recebimento da madeira'
    ],
    uniqueContentHtml: `
O **Campo de Santana** é uma das regiões que mais constrói habitações na Zona Sul de Curitiba. A Madeireira Bairro Novo atende os canteiros do bairro com tábuas brutas e vigamentos com o melhor custo-benefício.
    `,
    coordinates: { latitude: -25.589, longitude: -49.332 }
  },
  {
    id: 'bairro-hauer',
    slug: 'hauer',
    name: 'Hauer',
    type: 'bairro',
    zone: 'Regional Boqueirão / Hauer',
    distanceFromDepot: '5 km do depósito central',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 3 horas)',
    mainRoutes: ['Av. Marechal Floriano Peixoto', 'Linha Verde', 'Rua Anne Frank'],
    constructionProfile: 'Polo tradicional de comércio, marcenarias e galpões industriais, além de residências consolidadas.',
    popularProducts: ['Tábuas de Pinus 25cm e 30cm', 'Compensados e Madeirite', 'Vigas Pesadas', 'Caibros'],
    description: 'Madeireira no Hauer em Curitiba. Distribuição de madeira de pinus para fôrmas, telhados, caixarias e compensados com entrega expressa.',
    highlights: [
      'Acesso rápido pela Av. Marechal Floriano Peixoto e Linha Verde',
      'Compensados resinados e plastificados para indústrias',
      'Venda por dúzia, m³ e peça com nota fiscal',
      'Cotações rápidas para marcenarias e obras'
    ],
    uniqueContentHtml: `
No **Hauer**, fornecemos madeira de pinus in natura e compensados com entrega diária para construtoras, oficinas e reformas prediais.
    `,
    coordinates: { latitude: -25.485, longitude: -49.255 }
  },
  {
    id: 'bairro-uberaba',
    slug: 'uberaba',
    name: 'Uberaba',
    type: 'bairro',
    zone: 'Regional Cajuru / Uberaba',
    distanceFromDepot: '7 km do depósito central',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 4 horas)',
    mainRoutes: ['Av. Senador Salgado Filho', 'Av. Comendador Franco (Av. das Torres)', 'BR-277'],
    constructionProfile: 'Grande bairro com intensa construção de condomínios residenciais horizontais, sobrados e barracões comerciais.',
    popularProducts: ['Tábuas de Caixaria', 'Caibros de Telhado', 'Vigas 5x15cm', 'Compensado e Madeirite'],
    description: 'Madeireira no Uberaba em Curitiba. Venda de madeira de pinus para caixarias, vigamentos de telhado e compensados com entrega rápida.',
    highlights: [
      'Entregas pelas Avenidas das Torres e Salgado Filho',
      'Estoque completo de bitolas comerciais para sobrados',
      'Atendimento corporativo e faturamento para construtoras',
      'Orçamento imediato por WhatsApp'
    ],
    uniqueContentHtml: `
O **Uberaba** concentra dezenas de novos condomínios de sobrados. A Madeireira Bairro Novo fornece madeiramento de fundação e engradamento de telhado com pontualidade e frete rápido.
    `,
    coordinates: { latitude: -25.475, longitude: -49.225 }
  },
  {
    id: 'bairro-cajuru',
    slug: 'cajuru',
    name: 'Cajuru',
    type: 'bairro',
    zone: 'Regional Cajuru',
    distanceFromDepot: '9 km do depósito central',
    estimatedDeliveryTime: 'Entrega no mesmo dia ou em até 24h',
    mainRoutes: ['BR-277', 'Rua Maurício Fruet', 'Rua Luiz França'],
    constructionProfile: 'Bairro residencial tradicional com constante atividade de ampliação de residências, reformas e comércios.',
    popularProducts: ['Tábuas de Caixaria 30cm', 'Caibros 5x5', 'Ripas e Sarrafos', 'Escoras de Laje'],
    description: 'Madeira de Pinus no Cajuru em Curitiba. Entrega rápida de caibros, vigas, tábuas para caixaria e compensados pela BR-277.',
    highlights: [
      'Rota contínua pela BR-277 e Rua Maurício Fruet',
      'Preços diretos de serraria com qualidade garantida',
      'Suporte técnico para conferência de bitolas',
      'Entrega direta no canteiro de obras'
    ],
    uniqueContentHtml: `
No **Cajuru**, a Madeireira Bairro Novo atende carpinteiros e proprietários com materiais selecionados de pinus para telhados e fundações.
    `,
    coordinates: { latitude: -25.445, longitude: -49.225 }
  },
  {
    id: 'bairro-portao',
    slug: 'portao',
    name: 'Portão',
    type: 'bairro',
    zone: 'Regional Portão',
    distanceFromDepot: '7 km do depósito central',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 4 horas)',
    mainRoutes: ['Rua João Bettega', 'Av. República Argentina', 'Rua Carlos Dietzsch'],
    constructionProfile: 'Polo residencial e comercial verticalizado, reformas corporativas e obras residenciais de alto padrão.',
    popularProducts: ['Compensados Resinado e Plastificado', 'Tábuas de Caixaria', 'Vigas Estruturais', 'Pinus Tratado CCA'],
    description: 'Madeireira no Portão em Curitiba. Pronta entrega de compensados, madeira de pinus para formas de concreto e vigas estruturais com frete expresso.',
    highlights: [
      'Acesso pela Rua João Bettega e República Argentina',
      'Compensados para fôrmas pesadas de concreto',
      'Entrega programada para condomínios e edifícios',
      'Atendimento técnico com cálculo de cubagem'
    ],
    uniqueContentHtml: `
O **Portão** é um dos bairros mais dinâmicos de Curitiba. A Madeireira Bairro Novo fornece tábuas de caixaria e chapas de compensado para fôrmas de concreto com agilidade logística.
    `,
    coordinates: { latitude: -25.478, longitude: -49.292 }
  },
  {
    id: 'bairro-novo-mundo',
    slug: 'novo-mundo',
    name: 'Novo Mundo',
    type: 'bairro',
    zone: 'Regional Portão / Novo Mundo',
    distanceFromDepot: '5 km do depósito central',
    estimatedDeliveryTime: 'Entrega no mesmo dia (2 a 3 horas)',
    mainRoutes: ['Av. Brasília', 'Rua Pedro Gusso', 'Linha Verde Sul'],
    constructionProfile: 'Bairro residencial consolidado, condomínios fechados, reformas e pequenas indústrias.',
    popularProducts: ['Tábuas de Caixaria', 'Caibros 5x5', 'Escoras para Laje', 'Madeirite'],
    description: 'Madeireira no Novo Mundo em Curitiba. Entrega rápida de madeira de pinus serrada in natura, caibros e tábuas de caixaria pela Av. Brasília.',
    highlights: [
      'Deslocamento rápido via Linha Verde e Av. Brasília',
      'Fornecimento para reformas residenciais e novos sobrados',
      'Atendimento direto pelo WhatsApp com orçamento na hora',
      'Entrega com veículos próprios'
    ],
    uniqueContentHtml: `
No **Novo Mundo**, atendemos com entregas diárias mestres de obras e construtores que precisam de tábuas de pinus, vigas e caibros sem atrasos na concretagem.
    `,
    coordinates: { latitude: -25.488, longitude: -49.282 }
  },
  {
    id: 'bairro-agua-verde',
    slug: 'agua-verde',
    name: 'Água Verde',
    type: 'bairro',
    zone: 'Regional Portão / Água Verde',
    distanceFromDepot: '8 km do depósito central',
    estimatedDeliveryTime: 'Entrega no mesmo dia ou em até 24h úteis',
    mainRoutes: ['Av. Silva Jardim', 'Av. República Argentina', 'Av. Iguaçu'],
    constructionProfile: 'Bairro nobre com reformas residenciais de alto padrão, projetos corporativos, áreas gourmet e decks de lazer.',
    popularProducts: ['Pinus Tratado em Autoclave (CCA)', 'Decks de Madeira', 'Pergolados de Pinus', 'Compensados'],
    description: 'Madeireira atendendo o Água Verde em Curitiba. Venda de Pinus Tratado CCA para decks, pergolados, tábuas e vigas com entrega programada.',
    highlights: [
      'Logística adaptada para entrega em condomínios e edifícios',
      'Especialistas em Pinus Autoclavado CCA para áreas externas',
      'Material de primeira linha para arquitetura e interiores',
      'Faturamento facilitado e nota fiscal eletrônica'
    ],
    uniqueContentHtml: `
O **Água Verde** destaca-se pela alta exigência de acabamento em reformas de coberturas, quintais e varandas gourmet. A Madeireira Bairro Novo fornece Pinus Autoclavado CCA com retenção controlada de preservativo para máxima durabilidade.
    `,
    coordinates: { latitude: -25.452, longitude: -49.278 }
  },
  {
    id: 'bairro-batel',
    slug: 'batel',
    name: 'Batel',
    type: 'bairro',
    zone: 'Regional Matriz / Batel',
    distanceFromDepot: '10 km do depósito central',
    estimatedDeliveryTime: 'Entrega programada em até 24h úteis',
    mainRoutes: ['Av. do Batel', 'Av. Visconde de Guarapuava', 'Av. Sete de Setembro'],
    constructionProfile: 'Bairro nobre de Curitiba com arquitetura refinada, reformas de alto padrão, restaurantes e empreendimentos comerciais de luxo.',
    popularProducts: ['Pinus Autoclavado para Decks', 'Madeira para Pergolados', 'Vigas Estruturais Nobres', 'Compensados'],
    description: 'Madeira de Pinus Tratada e Estrutural para o Batel em Curitiba. Entrega programada de decks, pergolados e madeiras selecionadas para arquitetura e obras.',
    highlights: [
      'Logística com respeito às normas de tráfego e horários do Batel',
      'Peças selecionadas para decks de piscinas e pergolados',
      'Atendimento consultivo para arquitetos e decoradores',
      'Suporte técnico por especialistas'
    ],
    uniqueContentHtml: `
No **Batel**, os projetos exigem estética impecável e madeira com procedência comprovada. Fornecemos Pinus Tratado CCA para decks residenciais, painéis ripados e estruturas de pérgolas gourmet com entrega programada.
    `,
    coordinates: { latitude: -25.442, longitude: -49.288 }
  },
  {
    id: 'bairro-santa-felicidade',
    slug: 'santa-felicidade',
    name: 'Santa Felicidade',
    type: 'bairro',
    zone: 'Regional Santa Felicidade',
    distanceFromDepot: '14 km via Contorno Norte / Av. Manoel Ribas',
    estimatedDeliveryTime: 'Entrega no mesmo dia ou em até 24h úteis',
    mainRoutes: ['Av. Manoel Ribas', 'Contorno Norte', 'Via Vêneto'],
    constructionProfile: 'Polo gastronômico e residencial nobre, repleto de condomínios fechados horizontais, casas de alto padrão e restaurantes coloniais.',
    popularProducts: ['Pinus Tratado CCA para Decks e Pergolados', 'Vigas Pesadas', 'Caibros 5x7cm', 'Tábuas de Caixaria'],
    description: 'Madeireira atendendo Santa Felicidade em Curitiba. Fornecedora de Pinus Tratado CCA para decks, pergolados e madeira para telhados coloniais.',
    highlights: [
      'Entrega em condomínios fechados de Santa Felicidade e Cascatinha',
      'Madeira tratada com garantia de durabilidade para jardins',
      'Vigamentos compridos para coberturas e quiosques rústicos',
      'Cotação rápida por WhatsApp'
    ],
    uniqueContentHtml: `
Com seus famosos restaurantes e condomínios de alto padrão, **Santa Felicidade** tem forte consumo de madeira de pinus tratada em autoclave para quiosques, decks ao redor de piscinas e estruturas de pergolado.
    `,
    coordinates: { latitude: -25.405, longitude: -49.332 }
  }
];

export const RMC_CITIES_DATA: LocationItem[] = [
  {
    id: 'cidade-sao-jose-dos-pinhais',
    slug: 'sao-jose-dos-pinhais',
    name: 'São José dos Pinhais',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Leste)',
    distanceFromDepot: '12 km via Av. das Torres / Contorno Leste',
    estimatedDeliveryTime: 'Entrega no mesmo dia ou em até 24 horas úteis',
    mainRoutes: ['Av. das Torres', 'BR-277', 'Contorno Leste (BR-116/BR-376)'],
    constructionProfile: 'Polo automotivo, aeroportuário e logístico internacional, com forte construção de galpões industriais e expansão de condomínios residenciais fechados.',
    popularProducts: ['Madeira de Pinus para Embalagens e Pallets', 'Vigas 5x15cm', 'Tábuas de Caixaria 30cm', 'Madeirite Plastificado', 'Compensados'],
    description: 'Madeireira em São José dos Pinhais - PR. Venda de madeira de pinus, tábuas para caixaria, vigas, caibros, compensados e madeirite com entrega rápida.',
    highlights: [
      'Atendimento diário nos bairros Afonso Pena, Guatupê, Boneca do Bigode e São Pedro',
      'Fornecimento de compensados em São José dos Pinhais para indústrias e obras',
      'Madeireira perto de São José dos Pinhais com entrega expressa',
      'Frota própria com descarregamento ágil no canteiro de obras'
    ],
    uniqueContentHtml: `
Se você busca uma **madeireira em São José dos Pinhais** ou uma **madeireira perto de São José dos Pinhais** com entrega garantida e preço direto de distribuidora, a Madeireira Bairro Novo atende todo o município diariamente.

A Bairro Novo Madeiras é uma madeireira localizada em Curitiba, com produtos e atendimento conforme as informações oficiais apresentadas no site. Atendemos construtoras, empresas de logística e indústrias que buscam **compensados em São José dos Pinhais** (compensados Bairro Novo São José dos Pinhais), tábuas brutas de pinus para caixaria de fundação, vigas estruturais para galpões e pinus tratado CCA para decks.

Com acesso facilitado pelo Contorno Leste e Avenida das Torres, despachamos cargas com nota fiscal e agilidade.
    `,
    coordinates: { latitude: -25.534, longitude: -49.206 }
  },
  {
    id: 'cidade-araucaria',
    slug: 'araucaria',
    name: 'Araucária',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Sudoeste)',
    distanceFromDepot: '14 km via Rodovia do Xisto (BR-476) e Contorno Sul',
    estimatedDeliveryTime: 'Entrega no mesmo dia ou em até 24 horas úteis',
    mainRoutes: ['Rodovia do Xisto (BR-476)', 'PR-423', 'Av. das Araucárias'],
    constructionProfile: 'Polo petroquímico e industrial do Paraná (REPAR), com grande demanda por madeira para embalagens industriais, manutenção fabril e bairros residenciais em expansão.',
    popularProducts: ['Madeira para Construção', 'Tábuas 30cm para Caixaria', 'Vigas Pesadas', 'Compensados em Araucária'],
    description: 'Madeireira em Araucária - PR. Onde comprar madeira em Araucária com entrega rápida: tábuas de caixaria, compensados, caibros, vigas e pinus in natura e tratado.',
    highlights: [
      'Atendimento aos bairros Costeira, Cachoeira, Iguaçu, Estação, Capela Velha e Fazenda Velha',
      'Madeira para construção em Araucária com faturamento para empresas',
      'Compensados em Araucária para fôrmas pesadas de concreto',
      'Madeireira com entrega em Araucária no mesmo dia ou em até 24h'
    ],
    uniqueContentHtml: `
Procurando por **madeireira em Araucária**, **madeireira perto de Araucária** ou quer saber **onde comprar madeira em Araucária** com o melhor custo-benefício? A Madeireira Bairro Novo é a referência em fornecimento de madeira de pinus para a região de Araucária.

A Bairro Novo Madeiras é uma madeireira localizada em Curitiba, oferecendo **madeira para construção em Araucária**, **compensados em Araucária** (resinado e plastificado para fôrmas pesadas de concreto) e vigamentos estruturais de pinus.

Como uma **madeireira com entrega em Araucária**, despachamos pedidos diariamente pela Rodovia do Xisto (BR-476) e Contorno Sul, atendendo desde obras fabris na REPAR até construções residenciais nos bairros Costeira, Iguaçu e Capela Velha.
    `,
    coordinates: { latitude: -25.592, longitude: -49.405 }
  },
  {
    id: 'cidade-pinhais',
    slug: 'pinhais',
    name: 'Pinhais',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Leste)',
    distanceFromDepot: '16 km via Av. Victor Ferreira do Amaral e Rodovia Dep. João Leopoldo Jacomel',
    estimatedDeliveryTime: 'Entrega no mesmo dia ou em até 24 horas',
    mainRoutes: ['Rodovia Deputado João Leopoldo Jacomel', 'Av. Ayrton Senna da Silva', 'Av. Camilo di Lellis'],
    constructionProfile: 'Cidade consolidada com polo industrial ativo no Alphaville Graciosa, autódromo, condomínios de alto padrão e intensa construção residencial.',
    popularProducts: ['Pinus Autoclavado CCA', 'Decks de Piscina', 'Tábuas de Caixaria', 'Vigas Estruturais', 'Escoras de Laje'],
    description: 'Madeireira em Pinhais - PR. Venda de madeira de pinus, tábuas de caixaria, vigas, caibros, compensados e pinus autoclavado com entrega rápida.',
    highlights: [
      'Entregas nos bairros Centro, Weissópolis, Estância Pinhais, Pineville e Vargem Grande',
      'Madeireira perto de Pinhais para condomínios como Alphaville Graciosa',
      'Preços de distribuidora para carpinteiros, mestres de obras e empresas de engenharia',
      'Cotações instantâneas via WhatsApp com entrega pontual'
    ],
    uniqueContentHtml: `
Se você procura por **madeireira em Pinhais** ou uma **madeireira perto de Pinhais** para sua obra residencial ou comercial, a Madeireira Bairro Novo atende toda a cidade com pontualidade.

A Bairro Novo Madeiras é uma madeireira localizada em Curitiba, com produtos e atendimento conforme as informações oficiais apresentadas no site. Entregamos em Pinhais (incluindo Alphaville Graciosa, Weissópolis, Centro e Pineville) tábuas de caixaria de pinus, caibros, vigas de madeira e réguas de deck em pinus tratado em autoclave (CCA).
    `,
    coordinates: { latitude: -25.433, longitude: -49.191 }
  },
  {
    id: 'cidade-colombo',
    slug: 'colombo',
    name: 'Colombo',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Norte)',
    distanceFromDepot: '22 km via Linha Verde Norte e Rodovia da Uva (PR-417)',
    estimatedDeliveryTime: 'Entrega em até 24 horas úteis',
    mainRoutes: ['Estrada da Ribeira (BR-476)', 'Rodovia da Uva (PR-417)', 'Contorno Norte'],
    constructionProfile: 'Maior município da zona norte da RMC, com expressivo crescimento populacional, loteamentos habitacionais e chácaras rurais na região colonial.',
    popularProducts: ['Caibros de Pinus para Telhado', 'Tábuas de Caixaria 20cm e 30cm', 'Ripas e Sarrafos', 'Madeirite Resinado'],
    description: 'Madeira de Pinus em Colombo - PR com entrega expressa. Fornecedora de tábuas para formas de concreto, vigas, caibros de telhado e escoras para canteiros de Colombo.',
    highlights: [
      'Atendimento em toda a Estrada da Ribeira, Maracanã, Guaraituba, Roça Grande e Centro',
      'Grandes estoques para abastecer loteamentos habitacionais e sobrados em Colombo',
      'Descontos exclusivos por volume para compras no atacado',
      'Qualidade comprovada em madeira de pinus serrada in natura'
    ],
    uniqueContentHtml: `
Com mais de 240 mil habitantes, **Colombo** é o município mais populoso da zona norte metropolitana. A cidade apresenta duas frentes construtivas marcantes: a área urbana nos bairros Alto Maracanã, Guaraituba, Roça Grande e Rio Verde, e a área colonial.

A Madeireira Bairro Novo atende Colombo com remessas de madeira de pinus in natura e tratada. Fornecemos todo o engradamento de telhados residenciais (caibros, ripas e terças) e tábuas brutas para caixaria de alicerces e vigas baldrames com custos competitivos de frete.
    `,
    coordinates: { latitude: -25.291, longitude: -49.224 }
  },
  {
    id: 'cidade-fazenda-rio-grande',
    slug: 'fazenda-rio-grande',
    name: 'Fazenda Rio Grande',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Sul)',
    distanceFromDepot: '10 km via BR-116 Sul (Linha Direta)',
    estimatedDeliveryTime: 'Entrega Imediata no mesmo dia (2 a 3 horas)',
    mainRoutes: ['Rodovia Régis Bittencourt (BR-116)', 'Av. Brasil', 'Av. Cesar Carelli'],
    constructionProfile: 'Município com a maior taxa de crescimento habitacional da região metropolitana, com centenas de obras residenciais simultâneas e loteamentos novos.',
    popularProducts: ['Tábuas de Pinus para Caixaria', 'Caibros 5x5', 'Ripas e Sarrafos', 'Escoras de Laje 7x7cm'],
    description: 'Madeira de Pinus em Fazenda Rio Grande - PR com entrega expressa e preço baixo. Tábuas de caixaria, caibros, vigas e escoras para obras residenciais na BR-116.',
    highlights: [
      'Proximidade direta com nossa sede no Sítio Cercado pela BR-116',
      'Entregas ultra rápidas nos bairros Estados, Nações, Pioneiros, Eucaliptos e Iguaçu',
      'Preços de atacado para construtores de sobrados e casas populares',
      'Estoque constante para início imediato da sua obra'
    ],
    uniqueContentHtml: `
**Fazenda Rio Grande** é o expoente máximo do crescimento da construção civil habitacional na Grande Curitiba. Com bairros novos e milhares de sobrados e casas em fase de fundação, alvenaria e telhado nos bairros Eucaliptos, Nações, Estados, Iguaçu e Pioneiros, a velocidade na entrega de madeira é fundamental.

Pela ligação direta via BR-116 a apenas 10 km da nossa sede, a Madeireira Bairro Novo é a opção mais rápida e econômica para Fazenda Rio Grande. Entregamos cargas completas de tábuas para caixaria de fundação, caibros de telhado e escoras para laje no mesmo dia do pedido.
    `,
    coordinates: { latitude: -25.662, longitude: -49.308 }
  },
  {
    id: 'cidade-campo-largo',
    slug: 'campo-largo',
    name: 'Campo Largo',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Oeste)',
    distanceFromDepot: '28 km via BR-277 Sentido Interior',
    estimatedDeliveryTime: 'Entrega programada em até 24 horas úteis',
    mainRoutes: ['Rodovia BR-277', 'Av. Padre Natal Pigatto', 'Av. Marcelo Puppi'],
    constructionProfile: 'Capital da Louça, com expressivo polo cerâmico e mineral, além de condomínios de chácaras de lazer e casas de campo na serra.',
    popularProducts: ['Vigas de Pinus 5x15 e 6x15', 'Pinus Autoclavado CCA', 'Decks e Pergolados', 'Tábuas para Formas de Concreto'],
    description: 'Madeira de Pinus e Vigas Estruturais em Campo Largo - PR. Distribuidora especializada em tábuas de caixaria, madeirite, caibros e pinus tratado pela BR-277.',
    highlights: [
      'Atendimento aos bairros Rondinha, Itaqui, Ferraria, Águas Claras e Centro',
      'Madeira estrutural para chalés alpinos, casas de campo e pousadas rurais',
      'Fornecimento de fôrmas para fundações industriais de fábricas de louça',
      'Descontos progressivos para cargas fechadas'
    ],
    uniqueContentHtml: `
Conhecida como a Capital da Louça e por suas paisagens serranas, **Campo Largo** concentra indústrias cerâmicas de renome, além de bairros com acelerada ocupação (como Ferraria e Rondinha) e chácaras de veraneio em Bateias e arredores.

A Madeireira Bairro Novo fornece madeira de pinus in natura para as fundações e estruturas de galpões, e também pinus autoclavado CCA para a construção de chalés rústicos, pergolados e decks em Campo Largo.
    `,
    coordinates: { latitude: -25.459, longitude: -49.527 }
  },
  {
    id: 'cidade-campo-magro',
    slug: 'campo-magro',
    name: 'Campo Magro',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Noroeste)',
    distanceFromDepot: '26 km via Contorno Norte e Estrada do Cerne (PR-090)',
    estimatedDeliveryTime: 'Entrega em até 24 horas úteis',
    mainRoutes: ['Estrada do Cerne (PR-090)', 'Rua Silvestre Jarek', 'Estrada de Santa Felicidade'],
    constructionProfile: 'Região com forte vocação ecoturística, chácaras de lazer, pousadas rústicas, restaurantes coloniais e moradias sustentáveis.',
    popularProducts: ['Pinus Tratado CCA', 'Decks de Piscina', 'Pergolados de Madeira', 'Madeira para Telhado e Caibros'],
    description: 'Madeira de Pinus Tratado e Bruto em Campo Magro - PR. Madeireira fornecendo decks, mourões, pergolados e madeira para telhados na Estrada do Cerne.',
    highlights: [
      'Entregas nos bairros Jardim Cecília, Boa Vista, Passagem e rotas rurais',
      'Material ideal para restaurantes de turismo rural, pousadas e quiosques',
      'Qualidade garantida em madeira resistente à umidade e intempéries',
      'Orçamento transparente com cálculo detalhado de peças'
    ],
    uniqueContentHtml: `
Com seu circuito turístico repleto de morros, trilhas ecológicas e gastronomia rural, **Campo Magro** é um dos principais destinos para construção de casas de campo, pousadas e áreas de lazer ao ar livre.

A Madeireira Bairro Novo atende Campo Magro com uma linha completa de pinus autoclavado sob pressão, ideal para decks expostos, passarelas e pergolados.
    `,
    coordinates: { latitude: -25.369, longitude: -49.452 }
  },
  {
    id: 'cidade-quatro-barras',
    slug: 'quatro-barras',
    name: 'Quatro Barras',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Nordeste)',
    distanceFromDepot: '30 km via Contorno Leste e BR-116 Norte',
    estimatedDeliveryTime: 'Entrega em até 24 horas úteis',
    mainRoutes: ['Rodovia Régis Bittencourt (BR-116 Norte)', 'PR-410 (Graciosa)', 'Av. Dom Pedro II'],
    constructionProfile: 'Polo industrial ecológico, condomínios fechados horizontais de alto padrão (Borda do Campo / Graciosa) e residências de serra.',
    popularProducts: ['Decks de Pinus Autoclavado', 'Vigas 6x15cm', 'Madeirite Filmado', 'Caibros 5x7cm'],
    description: 'Madeira de Pinus em Quatro Barras - PR. Fornecimento de pinus tratado CCA para decks, vigas para telhado e caixaria de obras industriais e residenciais.',
    highlights: [
      'Atendimento aos condomínios da Graciosa, Jardim Menino Deus e Centro',
      'Madeira tratada com garantia de durabilidade para o clima de serra',
      'Fornecimento de vigamentos pesados para telhados coloniais',
      'Entrega programada com pontualidade garantida'
    ],
    uniqueContentHtml: `
Situada ao pé da Serra do Mar e início da histórica Estrada da Graciosa, **Quatro Barras** alia um parque industrial de ponta a condomínios fechados ecológicos de alto padrão.

A Madeireira Bairro Novo fornece para Quatro Barras o legítimo Pinus Autoclavado CCA para decks e varandas, além de vigamentos maciços para telhados com grandes inclinações em residências de montanha.
    `,
    coordinates: { latitude: -25.365, longitude: -49.076 }
  },
  {
    id: 'cidade-campina-grande-do-sul',
    slug: 'campina-grande-do-sul',
    name: 'Campina Grande do Sul',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Nordeste)',
    distanceFromDepot: '32 km via BR-116 Norte',
    estimatedDeliveryTime: 'Entrega em até 24 horas úteis',
    mainRoutes: ['Rodovia Régis Bittencourt (BR-116)', 'PR-506', 'Rua Pres. Juscelino Kubitschek'],
    constructionProfile: 'Centro regional de saúde e logística, com crescimento de loteamentos no Jardim Paulista e propriedades rurais próximas à Represa do Capivari.',
    popularProducts: ['Caibros de Telhado', 'Tábuas de Caixaria', 'Pinus Tratado para Cercas', 'Vigas Estruturais'],
    description: 'Madeireira atendendo Campina Grande do Sul - PR. Venda de madeira de pinus para construção civil, caixarias e telhados com entrega pela BR-116.',
    highlights: [
      'Entregas nos bairros Jardim Paulista, Timbu Velho, Eugênia Maria e Centro',
      'Madeira de pinus de alta qualidade para fundações e coberturas',
      'Opções de frete para chácaras nas margens das represas',
      'Atendimento consultivo e cálculo de bitolas'
    ],
    uniqueContentHtml: `
**Campina Grande do Sul** possui grande relevância logística no eixo que conecta o Paraná a São Paulo pela BR-116. Seu núcleo urbano no Jardim Paulista concentra intensa atividade comercial e residencial.

A Madeireira Bairro Novo abastece construtores e empreiteiros de Campina Grande do Sul com tábuas de caixaria, caibros 5x5cm e vigas estruturais.
    `,
    coordinates: { latitude: -25.305, longitude: -49.053 }
  },
  {
    id: 'cidade-almirante-tamandare',
    slug: 'almirante-tamandare',
    name: 'Almirante Tamandaré',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Norte)',
    distanceFromDepot: '24 km via Rodovia dos Minérios (PR-092)',
    estimatedDeliveryTime: 'Entrega em até 24 horas úteis',
    mainRoutes: ['Rodovia dos Minérios (PR-092)', 'Rua Emílio Johnson', 'Av. Vereador Wadislau Bugalski'],
    constructionProfile: 'Polo mineral e de cal/calcário, com ampla malha residencial em bairros próximos a Santa Felicidade e Lamenha Grande.',
    popularProducts: ['Tábuas de Pinus 25cm e 30cm', 'Caibros de Telhado', 'Sarrafos de Travamento', 'Escoras de Laje'],
    description: 'Madeira de Pinus em Almirante Tamandaré - PR. Madeireira com pronta entrega de tábuas de caixaria, vigas e caibros pela Rodovia dos Minérios.',
    highlights: [
      'Atendimento aos bairros Cachoeira, Lamenha Grande, Tanguá e Centro',
      'Madeira serrada in natura com preços acessíveis de distribuidora',
      'Entrega rápida para pequenas reformas e grandes canteiros',
      'Suporte direto por WhatsApp para cotações'
    ],
    uniqueContentHtml: `
Vizinha à zona norte de Curitiba e ligada pela Rodovia dos Minérios (PR-092), **Almirante Tamandaré** apresenta forte atividade construtiva, especialmente em bairros como Cachoeira, Tanguá, Lamenha Grande e São Jorge.

A Madeireira Bairro Novo entrega diariamente em Almirante Tamandaré, fornecendo tábuas de pinus para caixaria de muros e baldrames, escoras para lajes e engradamentos de madeira maciça.
    `,
    coordinates: { latitude: -25.321, longitude: -49.309 }
  },
  {
    id: 'cidade-mandirituba',
    slug: 'mandirituba',
    name: 'Mandirituba',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Sul)',
    distanceFromDepot: '34 km via BR-116 Sul (Sentido Fazenda Rio Grande)',
    estimatedDeliveryTime: 'Entrega programada em até 24 horas úteis',
    mainRoutes: ['Rodovia Régis Bittencourt (BR-116 Sul)', 'PR-419', 'Estrada da Areia Branca'],
    constructionProfile: 'Grande polo agropecuário e de turismo de chácaras, com alta demanda por mourões tratados, galpões rurais, cercas e chalés residenciais.',
    popularProducts: ['Pinus Autoclavado para Cercas e Mourões', 'Vigas para Galpão Rural', 'Tábuas 30cm', 'Caibros 5x7cm'],
    description: 'Madeira em Mandirituba - PR. Madeireira Mandirituba fornecendo pinus autoclavado, mourões tratados e madeira para construção civil pela BR-116 Sul.',
    highlights: [
      'Atendimento de madeireira para Mandirituba e zona rural',
      'Madeira em Mandirituba com tratamento CCA para cercas e chácaras',
      'Vigas de grande porte para estruturas de galpões e estábulos',
      'Entrega de cargas fechadas em toda a região de Mandirituba'
    ],
    uniqueContentHtml: `
Procurando por **madeira em Mandirituba** ou **madeireira Mandirituba** para construções rurais, galpões ou chácaras? A Madeireira Bairro Novo fornece a linha completa de madeira de pinus in natura e tratada.

A Bairro Novo Madeiras é uma madeireira localizada em Curitiba que atende Mandirituba com frete programado via BR-116 Sul. Fornecemos mourões de pinus autoclavado CCA com garantia de durabilidade contra cupins e umidade do solo, além de tábuas de caixaria, vigas e caibros para galpões e residências.
    `,
    coordinates: { latitude: -25.778, longitude: -49.328 }
  },
  {
    id: 'cidade-rio-branco-do-sul',
    slug: 'rio-branco-do-sul',
    name: 'Rio Branco do Sul',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Norte)',
    distanceFromDepot: '38 km via Rodovia dos Minérios (PR-092)',
    estimatedDeliveryTime: 'Entrega programada em até 24 a 48 horas úteis',
    mainRoutes: ['Rodovia dos Minérios (PR-092)', 'Rua Coronel Carlos Pioli', 'Av. Ermírio de Moraes'],
    constructionProfile: 'Capital do Cimento no Paraná, com parque industrial cimenteiro e construção contínua de residências e comércios locais.',
    popularProducts: ['Tábuas de Caixaria 30cm', 'Caibros 5x5', 'Vigas de Pinus', 'Madeirite Resinado'],
    description: 'Madeira de Pinus em Rio Branco do Sul - PR com entrega pela Rodovia dos Minérios. Tábuas para formas, caibros e vigas com preço direto da distribuidora.',
    highlights: [
      'Atendimento aos bairros Nodari, Santaria, Centro e áreas industriais',
      'Madeira de pinus com excelente esquadrejamento para fôrmas de concreto',
      'Parceria com construtoras e depósitos locais',
      'Cotação rápida com despacho seguro'
    ],
    uniqueContentHtml: `
Sede de importantes fábricas de cimento do Brasil, **Rio Branco do Sul** tem uma relação íntima com a construção civil. A montagem de estruturas de concreto armado e coberturas residenciais exige madeira de pinus com boa resistência e bitolas calibradas.

A Madeireira Bairro Novo atende as obras de Rio Branco do Sul com remessas de tábuas brutas, sarrafos e vigas, garantindo preço de atacado e entrega garantida.
    `,
    coordinates: { latitude: -25.191, longitude: -49.314 }
  },
  {
    id: 'cidade-balsa-nova',
    slug: 'balsa-nova',
    name: 'Balsa Nova',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Sudoeste)',
    distanceFromDepot: '42 km via BR-277 e PR-510',
    estimatedDeliveryTime: 'Entrega programada em até 24 a 48 horas úteis',
    mainRoutes: ['Rodovia BR-277', 'PR-510', 'Estrada de São Luiz do Purunã'],
    constructionProfile: 'Destino nobre de ecoturismo (São Luiz do Purunã), com hotéis-fazenda, haras, pousadas de charme e cabanas de madeira tratada.',
    popularProducts: ['Pinus Autoclavado CCA', 'Decks Rústicos', 'Vigas Pesadas de Pergolado', 'Mourões de Cerca para Haras'],
    description: 'Madeira de Pinus e Decks em Balsa Nova e São Luiz do Purunã - PR. Madeireira especializada em pinus tratado para pousadas, haras e casas de campo.',
    highlights: [
      'Atendimento a projetos turísticos e residenciais em São Luiz do Purunã e Bugre',
      'Madeira tratada com CCA de alta retenção para suportar o vento e frio da escarpa',
      'Perfeita para construções rústicas, mirantes de madeira e quiosques',
      'Atendimento personalizado com cálculo sob projeto'
    ],
    uniqueContentHtml: `
Com o famoso distrito de **São Luiz do Purunã**, **Balsa Nova** é referência em turismo de natureza e haras.

A Madeireira Bairro Novo fornece Pinus Autoclavado CCA para a construção de decks suspensos, cercas nobres e vigamentos aparentes para pousadas e casas de campo.
    `,
    coordinates: { latitude: -25.584, longitude: -49.636 }
  },
  {
    id: 'cidade-itaperucu',
    slug: 'itaperucu',
    name: 'Itaperuçu',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Norte)',
    distanceFromDepot: '36 km via Rodovia dos Minérios (PR-092)',
    estimatedDeliveryTime: 'Entrega programada em até 24 a 48 horas úteis',
    mainRoutes: ['Rodovia dos Minérios (PR-092)', 'Rua Crispim Furquim de Siqueira', 'Av. São Pedro'],
    constructionProfile: 'Polo mineral de calcário com expressiva atividade de autoconstrução e reformas comerciais.',
    popularProducts: ['Tábuas de Caixaria', 'Caibros 5x5cm', 'Ripas para Telha', 'Escoras de Laje'],
    description: 'Madeira de Pinus em Itaperuçu - PR com entrega rápida. Fornecimento de tábuas brutas, caibros, ripas e vigas de pinus com preços imbatíveis.',
    highlights: [
      'Entregas no Centro, Butieirinho, Jardim Itaú e bairros adjacentes',
      'Excelente relação custo-benefício para obras residenciais',
      'Despacho ágil com frota própria',
      'Atendimento direto pelo WhatsApp'
    ],
    uniqueContentHtml: `
Em **Itaperuçu**, a atividade mineradora e a expansão de novos bairros residenciais mantêm o mercado da construção civil aquecido.

A Madeireira Bairro Novo disponibiliza para Itaperuçu madeira de pinus serrada in natura com preços diretos de distribuidora para tábuas de caixaria, sarrafos, ripas e caibros.
    `,
    coordinates: { latitude: -25.221, longitude: -49.348 }
  },
  {
    id: 'cidade-tijucas-do-sul',
    slug: 'tijucas-do-sul',
    name: 'Tijucas do Sul',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Extremo Sul)',
    distanceFromDepot: '48 km via BR-376 Sentido Litoral',
    estimatedDeliveryTime: 'Entrega programada em até 24 a 48 horas úteis',
    mainRoutes: ['Rodovia BR-376', 'PR-281', 'Estrada de Lagoinha'],
    constructionProfile: 'Região serrana de chácaras de lazer, represas (Vossoroca), turismo ecológico e chalés alpinos (A-Frame).',
    popularProducts: ['Pinus Tratado em Autoclave', 'Vigas para Chalés A-Frame', 'Decks para Represa', 'Mourões para Chácaras'],
    description: 'Madeira de Pinus e Chalés em Tijucas do Sul - PR. Madeireira fornecendo pinus tratado CCA para decks em represas, chalés de montanha e chácaras pela BR-376.',
    highlights: [
      'Atendimento para construções nas margens da Represa de Vossoroca e Taboão',
      'Especialistas em madeira tratada CCA para decks molhados e passarelas náuticas',
      'Vigas de grande porte para estruturas de telhados alpinos',
      'Logística programada para entrega segura na zona rural'
    ],
    uniqueContentHtml: `
Com clima de serra e belezas naturais ao redor da Represa de Vossoroca, **Tijucas do Sul** destaca-se pela construção de chalés alpinos e decks.

A Madeireira Bairro Novo fornece Pinus Autoclavado CCA garantindo resistência total contra a umidade constante da serra.
    `,
    coordinates: { latitude: -25.928, longitude: -49.181 }
  },
  {
    id: 'cidade-piraquara',
    slug: 'piraquara',
    name: 'Piraquara',
    type: 'cidade',
    zone: 'Região Metropolitana de Curitiba (Leste)',
    distanceFromDepot: '22 km via Contorno Leste e Rodovia Dep. João Leopoldo Jacomel',
    estimatedDeliveryTime: 'Entrega em até 24 horas úteis',
    mainRoutes: ['Rodovia Dep. João Leopoldo Jacomel (PR-415)', 'Contorno Leste (BR-116)', 'Estrada da Barragem'],
    constructionProfile: 'Cidade dos Mananciais com crescimento residencial no Guarituba, chácaras de lazer ao redor das represas do Iraí e Piraquara e pousadas ecológicas.',
    popularProducts: ['Pinus Tratado CCA para Cercas e Decks', 'Tábuas de Caixaria 30cm', 'Caibros de Telhado', 'Escoras de Laje'],
    description: 'Madeira de Pinus em Piraquara - PR com entrega rápida. Madeireira atendendo o Guarituba, chácaras e centro com tábuas de caixaria, caibros e pinus tratado.',
    highlights: [
      'Atendimento a obras no Guarituba, Vila Macedo e Centro de Piraquara',
      'Madeira tratada CCA para trapiches, cercas e decks de chácaras',
      'Preços de atacado para construtores da RMC',
      'Despacho ágil com frota própria'
    ],
    uniqueContentHtml: `
Em **Piraquara**, município que abriga as principais represas e mananciais da Grande Curitiba, a Madeireira Bairro Novo atende desde canteiros no Guarituba até chácaras e pousadas rurais.

Fornecemos tábuas de caixaria para baldrames e alicerces, caibros e vigas de pinus para coberturas residenciais e Pinus Tratado CCA para decks e cercas resistentes à umidade das represas.
    `,
    coordinates: { latitude: -25.442, longitude: -49.062 }
  }
];

export const LOCATIONS_DATA: LocationItem[] = [
  ...CORE_PRIORITY_NEIGHBORHOODS,
  ...RMC_CITIES_DATA
];

export const RMC_CITIES = RMC_CITIES_DATA.map((c) => c.name);

export const POPULAR_COMMUNITIES = [
  'Vila Osternack',
  'Jardim Paranaense',
  'Moradias 23 de Agosto',
  'Bairro Novo A, B e C',
  'Xapinhal',
  'Vila Tecnológica',
  'Vila Autódromo',
  'Caiuá',
  'Fazendinha Vila Nossa Senhora da Luz',
  'Jardim Gabineto'
];

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function getLocationBySlug(slugOrPath: string): LocationItem | undefined {
  const clean = slugOrPath
    .replace(/^\//, '')
    .replace(/^bairro\//, '')
    .replace(/^cidade\//, '')
    .replace(/^madeireira-em-/, '')
    .replace(/^madeira-de-pinus-em-/, '')
    .replace(/\/$/, '')
    .toLowerCase();

  // Alias checks for CIC legacy URL variations
  if (
    clean === 'cic' ||
    clean === 'cic-(cidade-industrial-de-curitiba)' ||
    clean === 'cic-cidade-industrial-de-curitiba'
  ) {
    return LOCATIONS_DATA.find((l) => l.slug === 'cic');
  }

  return LOCATIONS_DATA.find((l) => l.slug === clean || slugify(l.name) === clean);
}
