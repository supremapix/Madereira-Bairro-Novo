import { LocationItem } from '../types';

export const CURITIBA_REGIONAL_ZONES = [
  {
    id: 'regional-bairro-novo',
    name: 'Regional Bairro Novo / Sítio Cercado (Base da Empresa)',
    deliveryTime: 'Entrega Imediata (1 a 2 horas)',
    deliveryRateNote: 'Frete reduzido ou grátis para compras acima do mínimo',
    description: 'Região onde está instalado o depósito central da Madeireira Bairro Novo, garantindo agilidade recorde no fornecimento para canteiros residenciais e comerciais.',
    neighborhoods: ['Sítio Cercado', 'Ganchinho', 'Umbará']
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
    neighborhoods: ['CIC (Cidade Industrial de Curitiba)', 'Augusta', 'Riviera', 'São Miguel']
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
    popularProducts: ['Tábuas de Pinus 30cm', 'Caibros 5x5cm', 'Vigas de Pinus', 'Escoras para Laje', 'Madeirite Resinado'],
    description: 'Sede da Madeireira Bairro Novo no Sítio Cercado em Curitiba. Fornecimento direto de madeira de pinus serrada in natura, caibros, tábuas de caixaria e escoras com entrega imediata e frete grátis para obras locais.',
    highlights: [
      'Depósito próprio sediado na Rua Cel. Joaquim Antônio de Azevedo, 1459',
      'Descarregamento imediato no seu canteiro de obras em até 2 horas',
      'Estoque gigantesco com os melhores preços de Curitiba',
      'Atendimento no balcão e cotações expressas por WhatsApp'
    ],
    uniqueContentHtml: `
O **Sítio Cercado** é o coração da atuação da Madeireira Bairro Novo. Nosso pátio de estocagem está localizado estrategicamente na Rua Coronel Joaquim Antônio de Azevedo, 1459, permitindo que construtores, pedreiros, carpinteiros e proprietários de obras do bairro recebam seus pedidos de madeira com velocidade recorde.

No Sítio Cercado, atendemos tanto grandes empreendimentos de sobrados em condomínio quanto reformas particulares nos eixos das Ruas Izaac Ferreira da Cruz, Tijucas do Sul, São José dos Pinhais e David Tows. Pela proximidade direta, pedidos de caixaria, tábuas de 30cm, caibros 5x5 e escoras de laje são entregues com frota dedicada em até 2 horas, sem atrasar o cronograma de concretagem da sua equipe.

Compre direto de quem tem pátio aberto, estoque real e tradição no bairro. Convidamos você a nos visitar ou solicitar um orçamento via WhatsApp para garantir os melhores preços de Curitiba.
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
    popularProducts: ['Tábuas de Caixaria', 'Caibros de Telhado', 'Ripas e Sarrafos', 'Madeira para Laje'],
    description: 'Madeireira no Bairro Novo em Curitiba. Distribuição de madeira de pinus in natura, tábuas brutas e vigas para telhado com entrega expressa e preço direto de fábrica.',
    highlights: [
      'Entrega expressa no Bairro Novo com veículos próprios',
      'Madeira de pinus alinhada de reflorestamento com nota fiscal',
      'Cotação rápida para pacotes de caixaria e engradamento',
      'Condições especiais para construtores e mestres de obras'
    ],
    uniqueContentHtml: `
A **Madeireira Bairro Novo** leva no próprio nome o compromisso histórico com esta tradicional região de Curitiba. Atendemos diariamente construtores, marceneiros e moradores do Bairro Novo (e vilas adjacentes como Osternack e Sambaqui) que buscam madeira de pinus com alinhamento reto e preço justo.

Seja para a montagem de caixarias de baldrames na fundação, escoramento de lajes com pontaletes 7x7cm ou estruturação completa de telhados com caibros 5x5cm e ripas, nossa frota realiza entregas contínuas em questão de minutos. Elimine fretes caros e compre direto da distribuidora local.
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
O bairro **Umbará** destaca-se por seus amplos terrenos, chácaras de lazer e novos condomínios residenciais horizontais. Essa característica cria uma alta demanda por madeira de pinus estrutural e, especialmente, pelo **Pinus Autoclavado CCA** para áreas externas de lazer.

A Madeireira Bairro Novo fornece para o Umbará desde tábuas e vigas para construção civil pesada até kits completos de réguas de deck e barrotes para piscinas, quiosques gourmet e pergolados. Situados a poucos minutos pela Estrada do Ganchinho e Nicola Pellanda, entregamos sua carga com pontualidade e segurança no canteiro.
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
No **Ganchinho**, bairro com acelerada expansão urbana e novos loteamentos residenciais, a rapidez no fornecimento de madeira bruta é crucial para não paralisar as frentes de trabalho.

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
    description: 'Madeireira atendendo o Tatuquara em Curitiba. Madeira de pinus para telhado, caixaria e formas de concreto com entrega rápida e preço de distribuidora.',
    highlights: [
      'Acesso direto e entrega rápida via Linha Verde / BR-116 e Contorno',
      'Fornecimento de grande volume para construtoras e empreiteiros locais',
      'Atendimento flexível com opções de pagamento facilitado no local',
      'Madeira seca e selecionada pronta para aplicação na obra'
    ],
    uniqueContentHtml: `
O **Tatuquara** abriga um dos maiores polos residenciais e de serviços do sul de Curitiba. Com obras de infraestrutura, sobrados populares e galpões industriais constantes, o bairro necessita de um fornecedor confiável de madeira de pinus com capacidade de entrega imediata.

A Madeireira Bairro Novo atende diariamente todas as vilas do Tatuquara (incluindo Moradias da Ordem, Santa Rita, Pompeia e Rio Bonito). Oferecemos o melhor custo por dúzia de tábua e m³ de caibros e vigas, garantindo que sua obra avance dentro do prazo e do orçamento estipulado.
    `,
    coordinates: { latitude: -25.572, longitude: -49.315 }
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
    popularProducts: ['Madeira de Pinus para Embalagens e Pallets', 'Vigas 5x15cm', 'Tábuas de Caixaria 30cm', 'Madeirite Plastificado', 'Pinus Autoclavado para Decks'],
    description: 'Madeira de Pinus em São José dos Pinhais - PR com entrega rápida e preço de distribuidora. Tábuas para caixaria, caibros, vigas, madeirite e pinus autoclavado para indústrias e construtoras.',
    highlights: [
      'Atendimento diário nos bairros Afonso Pena, Guatupê, Boneca do Bigode e São Pedro',
      'Fornecimento em grande escala para fábricas, transportadoras e galpões logísticos',
      'Pinus de reflorestamento com padrão técnico de corte e documentação ambiental',
      'Frota própria com descarregamento ágil no canteiro de obras'
    ],
    uniqueContentHtml: `
**São José dos Pinhais** é o segundo maior PIB da Região Metropolitana de Curitiba, com uma economia pujante impulsionada pelo polo automotivo, pelo Aeroporto Internacional Afonso Pena e por dezenas de parques industriais e logísticos. Essa dinâmica exige fornecedores de madeira ágeis, com estoque volumoso e capacidade de faturamento para pessoas jurídicas e construtoras.

A Madeireira Bairro Novo atende diariamente todas as regiões de São José dos Pinhais (incluindo Afonso Pena, Guatupê, Costeira, Borda do Campo, Roseira e Parque da Fonte). Pelo acesso direto via Contorno Leste e Avenida das Torres, nossas cargas chegam rapidamente à sua empresa ou canteiro de obras.

Fornecemos tábuas brutas para caixaria de fundações pesadas, vigas de pinus para coberturas industriais, chapas de madeirite plastificado para acabamento de concreto aparente e pinus tratado em autoclave (CCA) para decks de lazer e pergolados residenciais.
    `,
    coordinates: { latitude: -25.534, longitude: -49.206 }
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
    description: 'Madeira de Pinus e Decks Tratados em Pinhais - PR. Madeireira com pronta entrega de tábuas, caibros, vigas e pontaletes para obras residenciais e industriais em Pinhais.',
    highlights: [
      'Entregas nos bairros Centro, Weissópolis, Estância Pinhais, Pineville e Vargem Grande',
      'Especialistas no fornecimento de madeira tratada para condomínios como Alphaville Graciosa',
      'Preços de distribuidora para carpinteiros, mestres de obras e empresas de engenharia',
      'Cotações instantâneas via WhatsApp com entrega pontual'
    ],
    uniqueContentHtml: `
**Pinhais** une um parque industrial robusto a algumas das áreas residenciais mais valorizadas da Grande Curitiba, incluindo os condomínios fechados da região do Alphaville Graciosa e bairros como Weissópolis, Vargem Grande e Pineville.

Para construtoras que executam projetos residenciais de alto padrão e reformas industriais, a Madeireira Bairro Novo é o parceiro de confiança para fornecimento de madeira de pinus. Entregamos tábuas de caixaria com bitolas precisas, caibros 5x5 e 5x7 para telhados e réguas aparelhadas de deck de pinus autoclavado para áreas gourmets e piscinas.

Nossa logística garante entrega ágil com veículos apropriados, mantendo o cronograma da sua obra sempre em dia.
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
Com mais de 240 mil habitantes, **Colombo** é o município mais populoso da zona norte metropolitana. A cidade apresenta duas frentes construtivas marcantes: a área urbana de alta densidade nos bairros Alto Maracanã, Guaraituba, Roça Grande e Rio Verde, e a área colonial com chácaras, vinhedos e turismo rural.

A Madeireira Bairro Novo atende Colombo com remessas diárias de madeira de pinus in natura e tratada. Fornecemos todo o engradamento de telhados residenciais (caibros, ripas e terças) e tábuas brutas para caixaria de alicerces e vigas baldrames com custos competitivos de frete.
    `,
    coordinates: { latitude: -25.291, longitude: -49.224 }
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
    popularProducts: ['Madeira de Pinus para Indústria', 'Tábuas 30cm para Caixaria', 'Vigas Pesadas', 'Madeirite Plastificado para Concretagem'],
    description: 'Madeireira atendendo Araucária - PR. Madeira de pinus in natura e tratada para indústrias, galpões e construção civil com entrega rápida pela Rodovia do Xisto.',
    highlights: [
      'Atendimento aos bairros Costeira, Cachoeira, Iguaçu, Estação, Capela Velha e Fazenda Velha',
      'Parceria com prestadores de serviço e montadores de formas no polo petroquímico',
      'Fornecimento de vigas, tábuas e sarrafos com dimensões padronizadas',
      'Faturamento para empresas e pagamento facilitado no canteiro'
    ],
    uniqueContentHtml: `
**Araucária** sedia a Refinaria Presidente Getúlio Vargas (REPAR) e um dos maiores parques industriais da América Latina, além de bairros residenciais em contínuo crescimento como Costeira, Iguaçu, Capela Velha e Porto Laranjeiras.

Para a construção e manutenção de galpões fabris, confecção de embalagens para máquinas e montagem de fôrmas pesadas de concreto, a Madeireira Bairro Novo é o fornecedor ideal. Com trajeto direto pelo Contorno Sul e Rodovia do Xisto (BR-476), despachamos pedidos de tábuas de 30cm, sarrafos e vigas de pinus com rapidez e notas fiscais completas.
    `,
    coordinates: { latitude: -25.592, longitude: -49.405 }
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

A Madeireira Bairro Novo fornece madeira de pinus in natura para as fundações e estruturas de galpões, e também pinus autoclavado CCA para a construção de chalés rústicos A-frame, pergolados e decks de contemplação nas propriedades de campo de Campo Largo.
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

A Madeireira Bairro Novo atende Campo Magro com uma linha completa de pinus autoclavado sob pressão, ideal para decks expostos, passarelas sobre açudes, pontes de madeira e pergolados. Também fornecemos caibros e vigas in natura para casas de alvenaria e madeira na Estrada do Cerne e Jardim Cecília.
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

O clima úmido característico da serra exige madeira com tratamento de qualidade superior. A Madeireira Bairro Novo fornece para Quatro Barras o legítimo Pinus Autoclavado CCA para decks de piscina e varandas, além de vigamentos maciços para telhados com grandes inclinações em residências de montanha.
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
**Campina Grande do Sul** possui grande relevância logística no eixo que conecta o Paraná a São Paulo pela BR-116. Seu núcleo urbano no Jardim Paulista concentra intensa atividade comercial e residencial, enquanto o interior abriga chácaras ao redor da Represa do Capivari.

A Madeireira Bairro Novo abastece construtores e empreiteiros de Campina Grande do Sul com tábuas de caixaria, caibros 5x5cm e vigas estruturais, oferecendo condições de faturamento especiais para obras completas.
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

A Madeireira Bairro Novo entrega diariamente em Almirante Tamandaré, fornecendo tábuas de pinus para caixaria de muros de arrimo e baldrames, escoras para lajes de concreto e engradamentos de madeira maciça para coberturas residenciais.
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
    description: 'Madeira de Pinus e Mourões Tratados em Mandirituba - PR. Fornecimento de pinus autoclavado e madeira para galpões rurais pela BR-116 Sul.',
    highlights: [
      'Atendimento especializado para produtores rurais, chácaras e sítios',
      'Madeira tratada com CCA resistente ao apodrecimento em solo úmido',
      'Vigas de grande porte para estruturas de galpões e estábulos',
      'Entrega de cargas fechadas em toda a zona rural de Mandirituba'
    ],
    uniqueContentHtml: `
**Mandirituba** é conhecida por sua produção agrícola de camomila, hortifrutigranjeiros e apicultura, além de centenas de sítios e chácaras de recreio. Na zona rural, a madeira precisa suportar o contato contínuo com o solo, umidade e pragas florestais.

A Madeireira Bairro Novo fornece para Mandirituba mourões de pinus autoclavado CCA com garantia de durabilidade superior a 15 anos para cercamentos de pastagens, além de vigas e caibros para galpões de implementos agrícolas e residências de campo.
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
Sede de importantes fábricas de cimento do Brasil, **Rio Branco do Sul** tem uma relação íntima com a construção civil. A montagem de estruturas de concreto armado e coberturas residenciais no relevo ondulado da cidade exige madeira de pinus com boa resistência e bitolas calibradas.

A Madeireira Bairro Novo atende as obras de Rio Branco do Sul com remessas de tábuas brutas de 20cm, 25cm e 30cm, sarrafos e vigas, garantindo preço de atacado e entrega garantida na sua porta.
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
Com o famoso distrito de **São Luiz do Purunã** e os campos da Escarpa Devoniana, **Balsa Nova** é referência em turismo de natureza, haras de cavalos crioulos e hotéis-fazenda de alto padrão.

A arquitetura rústica e sofisticada da região demanda madeira com tratamento de qualidade e apelo visual orgânico. A Madeireira Bairro Novo fornece Pinus Autoclavado CCA para a construção de decks suspensos com vista para os cânions, cercas nobres para haras e vigamentos aparentes para pousadas de campo.
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
Em **Itaperuçu**, a atividade mineradora e a expansão de novos bairros residenciais mantêm o mercado da construção civil aquecido. Para quem está construindo a casa própria ou executando reformas comerciais, o custo da madeira é decisivo.

A Madeireira Bairro Novo disponibiliza para Itaperuçu madeira de pinus serrada in natura com preços diretos de distribuidora, permitindo economizar na compra de tábuas de caixaria, sarrafos, ripas e caibros de telhado sem abrir mão da qualidade.
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
Com clima de serra e belezas naturais exuberantes ao redor da Represa de Vossoroca, **Tijucas do Sul** é um dos principais polos para a construção de chalés alpinos (A-Frame), cabanas de aluguel por temporada e decks de contemplação à beira d'água.

A Madeireira Bairro Novo é a parceira ideal para construtores em Tijucas do Sul. Nosso Pinus Autoclavado CCA oferece resistência biológica total contra a umidade constante da serra e da represa, garantindo que decks, piers e chalés mantenham sua beleza e solidez por décadas.
    `,
    coordinates: { latitude: -25.928, longitude: -49.181 }
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
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function getLocationBySlug(slugOrPath: string): LocationItem | undefined {
  const clean = slugOrPath
    .replace(/^\//, '')
    .replace(/^bairro\//, '')
    .replace(/^cidade\//, '')
    .replace(/^madeireira-em-/, '')
    .replace(/^madeira-de-pinus-em-/, '');

  return LOCATIONS_DATA.find((l) => l.slug === clean || slugify(l.name) === clean);
}
