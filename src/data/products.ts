import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'madeira-de-pinus',
    slug: 'madeira-de-pinus',
    name: 'Madeira de Pinus',
    category: 'Madeira de Pinus',
    shortDescription: 'Sua melhor opção em madeira sustentável, versátil e de alta durabilidade para construção civil e marcenaria em Curitiba.',
    fullDescription: 'A Madeira de Pinus é a solução líder na construção civil e marcenaria moderna. Proveniente de florestas 100% renováveis de reflorestamento, oferece excepcional relação custo-benefício, excelente trabalhabilidade, leveza estrutural e ótimo acabamento para obras, estruturas, caixarias e móveis.',
    features: [
      'Origem de reflorestamento ecologicamente sustentável',
      'Excelente aceitação de tratamentos químicos e acabamentos',
      'Facilidade de corte, lixamento e fixação por pregos e parafusos',
      'Uniformidade de veios e excelente resistência mecânica'
    ],
    dimensionsAvailable: [
      'Tábuas de 15cm, 20cm, 25cm e 30cm x 3,00m',
      'Caibros 5x5cm e 5x7cm em 3,00m e 4,00m',
      'Sarrafos de 2,5x5cm, 2,5x7cm e 2,5x10cm',
      'Vigas e barrotes sob medida'
    ],
    applications: [
      'Estruturas de telhados e caixilhos',
      'Formas de concreto e caixaria de fundação',
      'Andimes, escoramentos e estruturas temporárias',
      'Fabricação de móveis rústicos, decks e pergolados'
    ],
    advantages: [
      'Preço altamente competitivo frente a madeiras nativas',
      'Alta disponibilidade com pronta entrega em Curitiba e RMC',
      'Ecologicamente correta com certificação de origem',
      'Garantia de secagem e alinhamento do material'
    ],
    imageUrl: 'https://static.kiaga.com.br/public/kiaga/imagens/produtos/media/ripa-de-madeira-pinus-natural-para-artesanato-4x2-646deb2fa511f.jpg',
    imageAlt: 'Lote de madeira de pinus alinhada e pronta para construção',
    priceStartingFrom: 'Sob consulta com entrega rápida',
    treatmentType: 'Serrado In Natura',
    isCornerstoneProduct: true
  },
  {
    id: 'pinus-tratado',
    slug: 'pinus-tratado',
    name: 'Pinus Tratado',
    category: 'Pinus Tratado',
    shortDescription: 'Pinus com tratamento preservativo contra umidade, cupins e fungos apodrecedores.',
    fullDescription: 'O Pinus Tratado passa por processos rigorosos de proteção que impregnam o cerne e o alburno da madeira com compostos imunizantes. É ideal para aplicações em ambientes externos ou expostos à umidade, garantindo longevidade superior a 15 anos sem deterioração.',
    features: [
      'Proteção eficaz contra cupins, brocas e insetos xilófagos',
      'Resistência comprovada à ação de fungos apodrecedores e umidade',
      'Aumenta a vida útil da madeira para mais de 15 anos',
      'Pode receber pintura, verniz ou stain protetor após a secagem'
    ],
    dimensionsAvailable: [
      'Tábuas tratadas 2,5x15cm, 2,5x20cm, 2,5x30cm',
      'Ripas 2,5x5cm e Sarrafos 2,5x7cm',
      'Vigas e Caibros estruturais de várias metragens'
    ],
    applications: [
      'Decks de piscina, pergolados e varandas',
      'Fechamentos externos, cercas e portões',
      'Estruturas de telhado expostas à umidade',
      'Playgrounds e móveis de jardim'
    ],
    advantages: [
      'Durabilidade comparável a madeiras nobres com custo muito menor',
      'Processo de imunização de alta fixação',
      'Garantia contra cupins e apodrecimento'
    ],
    imageUrl: 'https://cuboguia.com/arquivos/LoginID_324/Padrao/20210826_105109-398.jpg',
    imageAlt: 'Pranchas de pinus tratado para estruturas externas',
    treatmentType: 'Autoclavado (CCA)',
    isCornerstoneProduct: true
  },
  {
    id: 'pinus-autoclavado',
    slug: 'pinus-autoclavado',
    name: 'Pinus Autoclavado',
    category: 'Pinus Tratado',
    shortDescription: 'Tratamento em autoclave sob alta pressão com CCA, proteção máxima contra intempéries.',
    fullDescription: 'O Pinus Autoclavado é submetido a um processo industrial em vácuo-pressão no autoclave, onde o preservativo CCA (Cobre, Cromo e Arsênio) penetrating nas fibras profundas da madeira. Isso torna a madeira imune a cupins, apodrecimento e agressões do tempo, mesmo em contato direto com o solo.',
    features: [
      'Tratamento industrial certificado em vácuo-pressão em autoclave',
      'Permite contato direto com solo, água e intempéries',
      'Não solta odor e pode ser manuseado com total segurança',
      'Resistência mecânica e química prolongada'
    ],
    dimensionsAvailable: [
      'Pintos e Mourões Roliços de 8cm a 20cm de diâmetro',
      'Decks e Sarrafos 2,8x10cm, 2,8x15cm',
      'Vigas estruturais 5x15cm, 5x20cm'
    ],
    applications: [
      'Estruturas de suporte de decks e pergolados',
      'Estar de jardins, cercas rurais e retenção de solo',
      'Construção de chalés, bangalôs e estruturas pesadas',
      'Pontes de madeira, trapiches e passarelas'
    ],
    advantages: [
      'Altíssima durabilidade (20+ anos de resistência)',
      'Substitui madeiras de lei de alto custo',
      'Sustentável e certificado pelo IBAMA'
    ],
    imageUrl: 'https://www.superobracasas.com.br/wp-content/uploads/2021/03/pinus-autoclavado.jpg',
    imageAlt: 'Madeira de pinus autoclavado industrializado para uso estrutural',
    treatmentType: 'Autoclavado (CCA)',
    isCornerstoneProduct: true
  },
  {
    id: 'tabuas',
    slug: 'tabuas',
    name: 'Tábuas de Pinus',
    category: 'Madeira Serrada',
    shortDescription: 'Tábuas de Pinus brutas ou aparelhadas para caixaria de concreto, prateleiras e Andaimes.',
    fullDescription: 'As Tábuas de Pinus da Bairro Novo são selecionadas para garantir alinhamento e consistência. Amplamente utilizadas em fôrmas de concreto, caixaria de vigas e colunas, bem como em andaimes de obras e fabricação de prateleiras residenciais ou industriais.',
    features: [
      'Madeira alinhada de boa densidade',
      'Opções em madeira bruta para obra ou aparelhada para marcenaria',
      'Corte preciso com espessuras padronizadas'
    ],
    dimensionsAvailable: [
      'Larguras: 15cm, 20cm, 25cm e 30cm',
      'Espessura: 2,0cm a 2,5cm',
      'Comprimento: 3,00 metros'
    ],
    applications: [
      'Caixaria de fundação, colunas e vigas',
      'Montagem de andaimes e guaritas de obra',
      'Prateleiras, caixas de embalagem e divisórias'
    ],
    advantages: [
      'Baixo custo por metro quadrado',
      'Pronta entrega para suprir canteiros de obra rapidamente',
      'Material limpo e sem defeitos comprometedores'
    ],
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_999161-MLB115526529167_082026-F-tabua-de-20-pinus-aparelhada-c-3-metros.webp',
    imageAlt: 'Empilhado de tábuas de pinus para caixaria de obra em Curitiba',
    treatmentType: 'Serrado In Natura'
  },
  {
    id: 'caibros',
    slug: 'caibros',
    name: 'Caibros de Pinus',
    category: 'Madeira para Telhado',
    shortDescription: 'Caibros de Pinus para sustentação de ripas e apoio de telhados em geral.',
    fullDescription: 'Os Caibros de Pinus são essenciais para o engradamento de telhados residenciais e comerciais. Eles recebem o peso das ripas e telhas transmitindo para as vigas e tesouras com total segurança e estanqueidade.',
    features: [
      'Excelente rigidez estrutural',
      'Corte reto que previne empenamentos no telhado',
      'Secagem adequada para montagem imediata'
    ],
    dimensionsAvailable: [
      '5 x 5 cm em 3,00m e 4,00m',
      '5 x 7 cm em 3,00m e 4,00m',
      '5 x 10 cm em 3,00m e 4,00m'
    ],
    applications: [
      'Estruturas de telhados cerâmicos, fibrocimento e metálicos',
      'Nivelamento de pisos e contrapisos de madeira',
      'Estruturação de paredes e divisórias drywall/drywood'
    ],
    advantages: [
      'Facilidade de fixação com pregos estruturais ou parafusos',
      'Preço acessível reduzindo o custo total do m² de telhado',
      'Disponibilidade em grandes volumes'
    ],
    imageUrl: 'https://images.cws.digital/produtos/gg/28/34/caibro-pinus-para-telhado-3000x55x55mm-118x22x22-polegadas-3m-madeiras-n-10573428-1744295482122.jpg',
    imageAlt: 'Caibros de pinus para engradamento de telhado em Curitiba',
    treatmentType: 'Serrado In Natura'
  },
  {
    id: 'sarrafos',
    slug: 'sarrafos',
    name: 'Sarrafos de Pinus',
    category: 'Madeira Serrada',
    shortDescription: 'Sarrafos de Pinus para amarração de fôrmas, travamentos e marcenaria leve.',
    fullDescription: 'Os Sarrafos de Pinus são peças versáteis de pequena seção transversal, muito requisitadas para o travamento de caixarias de vigas e colunas em obras, bem como para montagens estofadas e embalagens de madeira.',
    features: [
      'Madeira leve e fácil de pregar',
      'Bordas bem definidas',
      'Ótima resistência ao cisalhamento'
    ],
    dimensionsAvailable: [
      '2,5 x 5,0 cm x 3,00m',
      '2,5 x 7,0 cm x 3,00m',
      '2,5 x 10,0 cm x 3,00m'
    ],
    applications: [
      'Travamento de formas para concreto e colunas',
      'Ripamento secundário e estruturas de estofados',
      'Fabricação de caixas, paletes e engradados'
    ],
    advantages: [
      'Máxima economia em insumos de canteiro de obras',
      'Versatilidade extrema para múltiplos usos',
      'Disponível nas versões bruta e beneficiada'
    ],
    imageUrl: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/fluzaoco/catalog/api/fluzaoco_citelirr/64b93fba0d2fd.jpg',
    imageAlt: 'Sarrafos de pinus empilhados na Madeireira Bairro Novo',
    treatmentType: 'Serrado In Natura'
  },
  {
    id: 'ripas',
    slug: 'ripas',
    name: 'Ripas de Pinus',
    category: 'Madeira para Telhado',
    shortDescription: 'Ripas de Pinus para apoio direto de telhas em coberturas de todos os portes.',
    fullDescription: 'As Ripas de Pinus desempenham papel fundamental na cobertura de edificações. Fixadas sobre os caibros, criam o riipamento perfeito onde se apoiam as telhas coloniais, portuguesas, romanas ou de concreto.',
    features: [
      'Espessura uniforme que evita desalinhamento de telhas',
      'Madeira seca e resistente a cargas contínuas',
      'Ótimo rendimento em cobertura por m²'
    ],
    dimensionsAvailable: [
      '1,2 x 5,0 cm x 3,00m',
      '2,0 x 5,0 cm x 3,00m'
    ],
    applications: [
      'Sustentação direta de telhas de cerâmica ou concreto',
      'Ripado decorativo de paredes internas e painéis',
      'Artesanato e acabamentos de marcenaria'
    ],
    advantages: [
      'Encaixe preciso do telhado sem goteiras',
      'Baixíssimo custo por metro linear',
      'Entrega ágil para não parar a cobertura da sua obra'
    ],
    imageUrl: 'https://m.media-amazon.com/images/I/41FP2bDZ7QL._AC_SX569_.jpg',
    imageAlt: 'Ripas de pinus para suporte de telhados em Curitiba',
    treatmentType: 'Serrado In Natura'
  },
  {
    id: 'vigas',
    slug: 'vigas',
    name: 'Vigas de Pinus',
    category: 'Madeira para Construção',
    shortDescription: 'Vigas estruturais de Pinus para suporte de cargas pesadas, entrepisos e tesouras.',
    fullDescription: 'As Vigas de Pinus são peças robustas e encorpadas projetadas para resistir a esforços de flexão e compressão em estruturas de cobertura, entrepisos, mesaninos e pergolados.',
    features: [
      'Alta capacidade de suporte de peso mecânico',
      'Disponíveis em versões brutas e em Pinus Autoclavado',
      'Excelente estabilidade dimensional quando bem dimensionadas'
    ],
    dimensionsAvailable: [
      '5 x 15 cm (2x6 polegadas) em 3,00m a 6,00m',
      '5 x 20 cm (2x8 polegadas) em 3,00m a 6,00m',
      '7,5 x 15 cm e 7,5 x 20 cm'
    ],
    applications: [
      'Tesouras e terças de telhados de grande vão',
      'Vigamento de decks, mesaninos e varandas',
      'Estruturação de galpões e garagens'
    ],
    advantages: [
      'Permite cobrir grandes vãos com excelente estabilidade',
      'Custo reduzido em relação a vigas metálicas ou de concreto',
      'Fácil montagem e fixação com suportes metálicos'
    ],
    imageUrl: 'https://scontent.xx.fbcdn.net/v/t39.105495-1/764863184_1743858136806327_8541049091019597092_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=103&_nc_ohc=rGnjPIi8AOIQ7kNvwGPph51&sdl=0&ccb=14-4&oh=00_AQHYk20lEiCwKw1WpnhZsIcenGajfl7Vl-mpES-SobGVFw&oe=6A7883B2&_nc_sid=a21977',
    imageAlt: 'Vigas de pinus para sustentação de coberturas em obras',
    treatmentType: 'Serrado In Natura'
  },
  {
    id: 'barrotes',
    slug: 'barrotes',
    name: 'Barrotes de Pinus',
    category: 'Madeira para Construção',
    shortDescription: 'Barrotes robustos para estrutura inferior de decks, assoalhos e mesaninos.',
    fullDescription: 'Os Barrotes de Pinus servem como alicerce elevado sobre o qual se fixam as réguas de deck, tábuas de assoalho ou compensados de mezanino. Garantem o nivelamento e o escoamento de água sob o piso.',
    features: [
      'Geralmente recomendados na versão Pinus Tratado/Autoclavado',
      'Alta resistência à compressão',
      'Perfeitamente aparelhados e alinhados'
    ],
    dimensionsAvailable: [
      '5 x 7,5 cm em 3,00m e 4,00m',
      '5 x 10 cm em 3,00m e 4,00m',
      '7,5 x 7,5 cm em 3,00m e 4,00m'
    ],
    applications: [
      'Barroteamento inferior de decks residenciais e comerciais',
      'Base para assoalhos de madeira e pisos flutuantes',
      'Estruturação de palanques e palcos'
    ],
    advantages: [
      'Evita o contato direto do piso com a umidade da laje',
      'Aumenta consideravelmente a vida útil do deck',
      'Proporciona apoio rígido e sem rangidos'
    ],
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_819326-MLB32165719689_092019-O.webp',
    imageAlt: 'Barrotes de pinus autoclavado para fundação de deck',
    treatmentType: 'Autoclavado (CCA)'
  },
  {
    id: 'madeirite',
    slug: 'madeirite',
    name: 'Madeirite (Resinado e Plastificado)',
    category: 'Madeirite e Compensado',
    shortDescription: 'Chapas de Madeirite para fôrmas de concreto, tapumes de obra e barracões.',
    fullDescription: 'O Madeirite de Pinus é comercializado nas opções Resinado Rosa (para fôrmas de concreto de uso padrão e fechamento de obras) e Plastificado Preto/Marrom (para concreto aparente de reutilização múltipla). São chapas resistentes e indeformáveis.',
    features: [
      'Elevada resistência mecânica e à umidade temporária',
      'Superfície plana que garante ótimo acabamento do concreto',
      'Excelente aproveitamento por chapa (1,10m x 2,20m)'
    ],
    dimensionsAvailable: [
      '1,10m x 2,20m nas espessuras 6mm, 10mm, 12mm, 14mm, 17mm, 18mm, 20mm'
    ],
    applications: [
      'Fôrmas para lajes, vigas e colunas de concreto',
      'Fechamento de canteiro de obras (tapumes)',
      'Instalação de barracões provisórios e pisos temporários'
    ],
    advantages: [
      'Madeirite Plastificado permite até 10 a 15 reusos',
      'Madeirite Resinado garante fechamento rápido e barato',
      'Entrega imediata em grande quantidade em Curitiba'
    ],
    imageUrl: 'https://madecol.com.br/wp-content/uploads/2023/09/192740-1200-auto-1024x1024.jpg',
    imageAlt: 'Chapas de madeirite resinado e plastificado para construção civil',
    treatmentType: 'Geral'
  },
  {
    id: 'compensado',
    slug: 'compensado',
    name: 'Compensado de Pinus',
    category: 'Madeirite e Compensado',
    shortDescription: 'Painéis compensados multilaminados de Pinus para marcenaria, embalagens e divisórias.',
    fullDescription: 'O Compensado de Pinus é constituído por lâminas de madeira sobrepostas em sentidos alternados e coladas sob alta temperatura. Isso confere estabilidade dimensional única, prevenindo empenamentos e oferecendo alta resistência estrutural.',
    features: [
      'Multilaminado com colagem fenólica (resiste à água) ou uréia-formol',
      'Superfície lixada pronta para pintura ou envernizamento',
      'Leveza e facilidade de corte com ferramentas convencionais'
    ],
    dimensionsAvailable: [
      '1,22m x 2,44m nas espessuras 4mm, 6mm, 9mm, 12mm, 15mm, 18mm, 25mm'
    ],
    applications: [
      'Móveis, armários, bancadas e gavetas',
      'Divisórias de ambientes e revestimentos acústicos/decorativos',
      'Fabricação de embalagens industriais e caixas de exportação'
    ],
    advantages: [
      'Alta estabilidade contra variações de temperatura e umidade',
      'Acabamento limpo de aspecto natural',
      'Excelente custo-benefício para marcenaria'
    ],
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.RKSTWV7fzxdLsa_dY1_PawHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    imageAlt: 'Painéis de compensado de pinus para marcenaria e estrutura',
    treatmentType: 'Geral'
  },
  {
    id: 'deck',
    slug: 'deck',
    name: 'Deck de Pinus Autoclavado',
    category: 'Deck e Pergolado',
    shortDescription: 'Réguas para Decks de Pinus Autoclavado com cantos arredondados e alta durabilidade ao ar livre.',
    fullDescription: 'As réguas para Deck de Pinus Autoclavado oferecem a beleza aconchegante da madeira natural combinada com a proteção do tratamento em autoclave. Possuem frisos antiderrapantes ou superfície lisa aparelhada com bordas arredondadas para conforto térmico e tátil ao caminhar descalço.',
    features: [
      'Tratamento CCA em autoclave com garantia contra insetos e umidade',
      'Design especial com bordas arredondadas e opção antiderrapante',
      'Aceita aplicação de Stain, verniz marítimo ou óleo protetor'
    ],
    dimensionsAvailable: [
      '2,8cm x 10,0cm em comprimentos de 3,00m e 4,00m',
      '2,8cm x 14,0cm em comprimentos de 3,00m e 4,00m'
    ],
    applications: [
      'Áreas externas de piscinas, spas e saunas',
      'Sacadas, varandas gourmet e pátios residenciais',
      'Passarelas de jardim e espaços comerciais ao ar livre'
    ],
    advantages: [
      'Economia de até 60% comparado a decks de madeiras de lei (Ipê/Cumaru)',
      'Conforto térmico no verão sem aquecimento excessivo',
      'Instalação rápida e manutenção simplificada'
    ],
    imageUrl: 'https://susinescoramentos.com.br/wp-content/uploads/2019/05/deck.jpg',
    imageAlt: 'Deck de pinus autoclavado instalado em ambiente residencial',
    treatmentType: 'Autoclavado (CCA)',
    isCornerstoneProduct: true
  },
  {
    id: 'pergolado',
    slug: 'pergolado',
    name: 'Madeira para Pergolado de Pinus',
    category: 'Deck e Pergolado',
    shortDescription: 'Kits e vigas encorpadas de Pinus Autoclavado para pergolados elegantes e duráveis.',
    fullDescription: 'A estrutura de Pergolado em Pinus Autoclavado transforma jardins, garagens e espaços gourmet em ambientes sofisticados. Fornecemos vigas, pilares e caibros projetados para suportar cobertura de vidro, policarbonato, plantas trepadeiras ou palha.',
    features: [
      'Peças pesadas e reforçadas para sustentação estrutural',
      'Tratamento industrial que resiste à chuva contínua e ao sol forte',
      'Acabamento aplainado e lixado de visual rústico ou contemporâneo'
    ],
    dimensionsAvailable: [
      'Pilares 10x10cm, 15x15cm, 20x20cm (roliços ou quadrados)',
      'Vigas de apoio 5x15cm, 5x20cm e 7,5x20cm',
      'Ripas de sombreamento 3x5cm e 5x5cm'
    ],
    applications: [
      'Pergolados para jardim, garagens e varandas',
      'Gazebos e quiosques gourmet',
      'Estruturas decorativas para eventos e restaurantes'
    ],
    advantages: [
      'Beleza estética marcante com veios aparentes do Pinus',
      'Proteção completa contra cupins e podridão',
      'Custo viável para projetos de qualquer porte'
    ],
    imageUrl: 'https://tekmadbrasil.com.br/wp-content/uploads/2025/05/Tekmad-madeiras-tratadas-Pergolado-de-pinus-tratado-rolico.jpg',
    imageAlt: 'Estrutura de pergolado de pinus em jardim em Curitiba',
    treatmentType: 'Autoclavado (CCA)',
    isCornerstoneProduct: true
  },
  {
    id: 'madeira-para-telhado',
    slug: 'madeira-para-telhado',
    name: 'Madeira para Telhado (Kit Completo)',
    category: 'Madeira para Telhado',
    shortDescription: 'Vigas, caibros, ripas e pranchas selecionadas para engradamento de telhados residenciais e comerciais.',
    fullDescription: 'Trabalhamos com o Kit Completo de Madeira de Pinus para Coberturas e Telhados. Selecionamos vigas mestras, terças, tesouras, caibros e ripas com dimensionamento correto para garantir estabilidade, sem selamentos ou empenamentos.',
    features: [
      'Seleção rigorosa de peças sem nós comprometedores',
      'Opção de tratamento cupinicida para maior durabilidade',
      'Orçamento por projeto e lista de material'
    ],
    dimensionsAvailable: [
      'Vigas 5x15cm, 5x20cm',
      'Caibros 5x5cm, 5x7cm',
      'Ripas 2x5cm e Pranchas estruturais'
    ],
    applications: [
      'Telhados residenciais de telha cerâmica ou concreto',
      'Telhados comerciais e industriais com telhas termoacústicas',
      'Reforma e substituição de estruturas antigas de madeira'
    ],
    advantages: [
      'Facilidade de montagem e agilidade na entrega da obra',
      'Material seco no ponto certo para não empenar após instalado',
      'Melhor custo por m² de cobertura em Curitiba'
    ],
    imageUrl: 'https://tse1.explicit.bing.net/th/id/OIP.EwQdB0DBLD3LQSgQ_PHTywHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    imageAlt: 'Estrutura de madeira de pinus para engradamento de telhado',
    treatmentType: 'Serrado In Natura'
  },
  {
    id: 'madeira-para-construcao',
    slug: 'madeira-para-construcao',
    name: 'Madeira para Construção Civil',
    category: 'Madeira para Construção',
    shortDescription: 'Tudo em madeira bruta e beneficiada para canteiro de obras, da fundação ao acabamento.',
    fullDescription: 'Atendemos construtoras, empreiteiros e mestres de obra em Curitiba e Região Metropolitana com linha completa de Madeira de Pinus para Construção Civil. Entregamos escoras, tábuas de caixaria, sarrafos de travamento, pontaletes e madeirite no seu canteiro.',
    features: [
      'Fornecimento contínuo e em grande volume',
      'Atendimento a normas de segurança e qualidade',
      'Atendimento personalizado com faturamento para empresas'
    ],
    dimensionsAvailable: [
      'Linha completa bruta e aparelhada sob medida'
    ],
    applications: [
      'Formas para concreto armado e fundações (sapata/baldrame)',
      'Escoramento de lajes e estruturas temporárias',
      'Tapumes, guaritas e barracões de obra'
    ],
    advantages: [
      'Entrega garantida no prazo para não atrasar cronogramas',
      'Preço direto da distribuidora sem intermediários',
      'Condições especiais para compras no atacado'
    ],
    imageUrl: 'https://tse1.explicit.bing.net/th/id/OIP.NxVIAT4JHII2m8F0AlkPuQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    imageAlt: 'Canteiro de obras utilizando madeira de pinus para estruturação',
    treatmentType: 'Serrado In Natura'
  },
  {
    id: 'madeira-serrada',
    slug: 'madeira-serrada',
    name: 'Madeira Serrada de Pinus',
    category: 'Madeira Serrada',
    shortDescription: 'Peças brutas direto da serra com bitolas padronizadas para indústria e obra.',
    fullDescription: 'A Madeira Serrada de Pinus é cortada com precisão diretamente nas serrarias parceiras, mantendo a textura bruta da madeira. É ideal para usos que demandam máxima retenção mecânica e economia rápida.',
    features: [
      'Corte reto e bitolas padronizadas',
      'Alto poder de aderência com pregos e argamassas',
      'Ótima absorção de seladores e preservantes'
    ],
    dimensionsAvailable: [
      'Diversas espessuras e larguras de 10cm a 30cm'
    ],
    applications: [
      'Fabricação de paletes, caixas e engradados industriais',
      'Estruturas de forma na construção civil',
      'Projetos industriais de embalagem de carga'
    ],
    advantages: [
      'Preço mais baixo do mercado por metro cúbico',
      'Alta disponibilidade para pronta entrega',
      'Sustentabilidade garantida por manejo reflorestado'
    ],
    imageUrl: 'https://www.woodflow.com.br/storage/images/products/88/1725649918-gallery-image-2031560511_l.jpg',
    imageAlt: 'Lote de madeira serrada de pinus pronta para embarque',
    treatmentType: 'Serrado In Natura'
  },
  {
    id: 'madeira-beneficiada',
    slug: 'madeira-beneficiada',
    name: 'Madeira Beneficiada (Aparelhada)',
    category: 'Madeira Beneficiada',
    shortDescription: 'Pinus aplainado de superfícies lisas e cantos impecáveis para marcenaria e acabamentos.',
    fullDescription: 'A Madeira Beneficiada de Pinus passa por plainas industriais de quatro faces que eliminam todas as farpas e imperfeições. O resultado são peças lisas, de toque agradável e medidas exatas, prontas para receber selador, verniz ou tinta.',
    features: [
      'Acabamento liso de 4 faces (S4S)',
      'Medidas precisas com tolerância reduzida',
      'Ideal para ficar aparente em projetos decorativos'
    ],
    dimensionsAvailable: [
      'Tábuas aparelhadas de 10cm, 15cm, 20cm, 25cm e 30cm',
      'Sarrafos e pontaletes alinhados'
    ],
    applications: [
      'Móveis sob medida, prateleiras, nichos e mesas',
      'Painéis ripados de parede e revestimentos de teto',
      'Acabamentos e guarnições de portas e janelas'
    ],
    advantages: [
      'Economiza tempo de lixamento na oficina/obra',
      'Proporciona visual refinado e moderno',
      'Facilidade imediata na aplicação de tinta e verniz'
    ],
    imageUrl: 'https://scontent.xx.fbcdn.net/v/t39.105495-1/767031641_892050616913117_3088667599027889773_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=105&_nc_ohc=UXQxrjdbc9IQ7kNvwF70HqS&sdl=0&ccb=14-4&oh=00_AQFr7V_dn8X6YEoemqOj0qNTpSYLsq9QkpcqteBK8sOuzQ&oe=6A7923DB&_nc_sid=a21977',
    imageAlt: 'Pranchas de pinus beneficiado e aparelhado para marcenaria',
    treatmentType: 'Beneficiado'
  },
  {
    id: 'escoras',
    slug: 'escoras',
    name: 'Escoras de Pinus para Laje',
    category: 'Madeira para Construção',
    shortDescription: 'Pontaletes e escoras de Pinus roliços ou quadrados para escoramento de laje e vigas.',
    fullDescription: 'As Escoras de Pinus proporcionam a sustentação temporária indispensável no período de cura de lajes pré-moldadas, lajes maciças e vigas de concreto. Oferecem elevada resistência vertical ao peso do concreto armado.',
    features: [
      'Peças selecionadas para suporte de carga vertical',
      'Opção em pontalete quadrado (7,5x7,5cm ou 10x10cm) ou roliço',
      'Fácil regulagem de altura com cunhas de madeira'
    ],
    dimensionsAvailable: [
      'Diâmetros/Bitolas de 7cm a 12cm',
      'Comprimentos padronizados de 3,00m e 4,00m'
    ],
    applications: [
      'Escoramento de lajes treliçadas, rebaixadas e convencionais',
      'Apoio de formas de vigas aéreas e marquises',
      'Reforço temporário em reformas estruturais'
    ],
    advantages: [
      'Muito mais econômico que escoras metálicas para obras de pequeno e médio porte',
      'Agilidade no canteiro com reaproveitamento',
      'Entrega por lote completo'
    ],
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.rpo3y_2BYTfqjFW7QFO7xAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    imageAlt: 'Escoras e pontaletes de pinus para sustentação de laje',
    treatmentType: 'Serrado In Natura'
  },
  {
    id: 'formas-para-concreto',
    slug: 'formas-para-concreto',
    name: 'Formas para Concreto (Caixaria)',
    category: 'Madeira para Construção',
    shortDescription: 'Kits de tábuas, sarrafos e gravatas para montagem rápida de fôrmas de pilar, viga e sapata.',
    fullDescription: 'Nosso kit de Formas para Concreto é composto por tábuas de Pinus e sarrafos de travamento de dimensões casadas. Permite a montagem estanque de caixas para moldagem de peças de concreto armado, evitando vazamentos de nata de cimento.',
    features: [
      'Madeira encorpada de alta resistência à pressão interna do concreto',
      'Bordas retas que facilitam o encaixe estanque',
      'Compatível com desmoldantes residuais'
    ],
    dimensionsAvailable: [
      'Tábuas de 20cm, 25cm e 30cm x 3,00m',
      'Sarrafos 2,5x7cm para gravatas e travamentos'
    ],
    applications: [
      'Sapatas, blocos de fundação e vigas baldrames',
      'Pilares, colunas retangulares e vigas superiores',
      'Muros de arrimo e caixas d\'água enterradas'
    ],
    advantages: [
      'Garante dimensões exatas da estrutura concretada',
      'Reduz desperdício de concreto por vazamentos',
      'Montagem e desmontagem rápida'
    ],
    imageUrl: 'https://tse1.explicit.bing.net/th/id/OIP.RL35jan2kLNUDXdtOH47mQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    imageAlt: 'Formas de madeira de pinus montadas para concretagem de fundação',
    treatmentType: 'Serrado In Natura'
  }
];
