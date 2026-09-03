import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-madeira-de-pinus',
    slug: 'madeira-de-pinus',
    name: 'Madeira de Pinus em Curitiba',
    category: 'Madeira Serrada e Beneficiada',
    shortDescription: 'Linha completa de madeira de pinus in natura, aparelhada e tratada CCA para caixarias de concreto, telhados residenciais, decks e pergolados em Curitiba e RMC.',
    fullDescription: 'A Madeira de Pinus comercializada pela Madeireira Bairro Novo é originária de florestas 100% renováveis no Paraná. Disponível em bitolas brutas para caixaria de concreto e beneficiadas para engradamento de telhados, escoramento e marcenaria. Entrega expressa com frota própria em Curitiba e 15 cidades da Região Metropolitana.',
    treatmentType: 'Geral',
    isCornerstoneProduct: true,
    priceStartingFrom: 'Melhor preço de Curitiba por m³ e dúzia',
    lengthMeters: '3,00m a 6,00m',
    approximateMoisture: 'In natura (verde/seca ao ar) e autoclavada CCA',
    indicatedUse: 'Fôrmas de concreto, vigas e caibros de telhado, escoramento de lajes, decks de piscina e pergolados',
    imageUrl: 'https://img.supremasite.com.br/madeiras/pinus_timber_stack.webp',
    imageAlt: 'Lote de madeira de pinus serrada in natura selecionada no pátio da Madeireira Bairro Novo em Curitiba',
    dimensionsAvailable: [
      'Tábuas: 2,5x15cm, 2,5x20cm, 2,5x25cm, 2,5x30cm (3m)',
      'Caibros: 5x5cm e 5x7cm (3m e 4m)',
      'Vigas: 5x11cm, 5x15cm e 6x15cm (3m a 6m)',
      'Ripas: 1,2x5cm (3m) e Sarrafos: 2,5x5cm e 2,5x7cm (3m)',
      'Escoras para laje: 7x7cm e 8x8cm (3m e 3,5m)'
    ],
    features: [
      'Madeira 100% de reflorestamento certificado pelo IBAMA',
      'Excelente resistência mecânica para estruturas de canteiro',
      'Fácil pregagem sem rachar e ótimo rendimento de corte',
      'Disponível in natura ou tratada em autoclave sob pressão (CCA)',
      'Entrega expressa no mesmo dia para Curitiba e RMC'
    ],
    applications: [
      'Caixaria de vigas baldrames, pilares e colunas de concreto',
      'Engradamento de telhados cerâmicos, fibrocimento e metálicos',
      'Escoramento provisório de lajes maciças e pré-moldadas',
      'Decks de piscinas, pergolados gourmet e passarelas',
      'Fechamento de tapumes e barracões temporários de obras'
    ],
    advantages: [
      'Economia de até 70% em relação a madeiras nativas de lei',
      'Estoque constante e pronta entrega sem filas ou esperas',
      'Corte alinhado de serra fita com pouca variação de bitola',
      'Atendimento direto no balcão no Sítio Cercado e cotações no WhatsApp'
    ],
    faq: [
      {
        question: 'O pinus in natura suporta o peso de um telhado residencial?',
        answer: 'Sim, o pinus é a madeira mais utilizada no engradamento de telhados no Paraná. Quando dimensionado corretamente com caibros 5x5cm e vigas 5x11/5x15cm, oferece estabilidade e durabilidade por décadas.'
      },
      {
        question: 'Qual a diferença entre o pinus in natura e o pinus tratado CCA?',
        answer: 'O pinus in natura é serrado bruto sem aditivos químicos, ideal para caixarias e telhados cobertos. O pinus tratado CCA passa por autoclave sob vácuo e pressão com sais de cobre, cromo e arsênio, tornando-se imune ao apodrecimento em áreas externas por mais de 15 anos.'
      },
      {
        question: 'Como é calculada a quantidade de madeira necessária para a obra?',
        answer: 'A madeira pode ser calculada em metros lineares, dúzias ou em metros cúbicos (m³ = espessura em metros × largura em metros × comprimento × quantidade). Você pode usar nossa calculadora técnica na página de Medidas.'
      },
      {
        question: 'A Madeireira Bairro Novo faz entrega no mesmo dia?',
        answer: 'Sim! Pedidos confirmados no período da manhã para Curitiba e municípios mais próximos têm prioridade de entrega expressa no mesmo dia com nossa frota própria.'
      }
    ]
  },
  {
    id: 'prod-tabuas',
    slug: 'tabuas',
    name: 'Tábuas de Pinus para Caixaria e Fôrmas de Concreto',
    category: 'Caixaria e Formas',
    shortDescription: 'Tábuas de pinus de 15cm, 20cm, 25cm e 30cm brutas in natura para baldrames, pilares, colunas, vigas e fechamento de obras em Curitiba.',
    fullDescription: 'As tábuas de pinus da Madeireira Bairro Novo são indispensáveis para a etapa de fundação e estrutura de qualquer edificação. Com espessura padrão de 1 polegada (2,5 cm nominal) e comprimento de 3,00 metros, oferecem alinhamento reto de serra fita e alta rigidez para conter o empuxo do concreto armado sem estufar as fôrmas.',
    treatmentType: 'Bruta de Serra',
    isCornerstoneProduct: true,
    priceStartingFrom: 'Consulte valor por peça e dúzia fechada',
    lengthMeters: '3,00 metros padrão',
    approximateMoisture: 'In natura (verde/seca ao ar)',
    indicatedUse: 'Caixarias de vigas baldrames, colunas, canaletas, andaimes e tapumes',
    imageUrl: 'https://img.supremasite.com.br/madeiras/pine_boards_formwork_yard.webp',
    imageAlt: 'Pilha de tábuas de pinus serradas e empilhadas para caixaria de vigas, baldrames e fôrmas de concreto',
    dimensionsAvailable: [
      'Tábua de Pinus 30cm (2,5 x 30 cm x 3,00m)',
      'Tábua de Pinus 25cm (2,5 x 25 cm x 3,00m)',
      'Tábua de Pinus 20cm (2,5 x 20 cm x 3,00m)',
      'Tábua de Pinus 15cm (2,5 x 15 cm x 3,00m)'
    ],
    features: [
      'Espessura uniforme que facilita o fechamento estanque das fôrmas',
      'Boa resistência à flexão sob a carga de concreto vibrado',
      'Reaproveitamento de 2 a 4 vezes com uso de desmoldante',
      'Preços especiais para fardos de 50 a 100 peças'
    ],
    applications: [
      'Fôrmas de vigas baldrames de fundação rasa',
      'Caixaria de pilares, colunas e cintas de amarração superior',
      'Pisos de andaimes de obras e passarelas temporárias',
      'Tabeiras de acabamento de beiral em telhados'
    ],
    advantages: [
      'Menor custo por metro quadrado de fôrma de concreto',
      'Estoque imediato em todas as larguras (15, 20, 25 e 30cm)',
      'Despacho rápido no canteiro de obras'
    ],
    faq: [
      {
        question: 'Qual a largura de tábua mais indicada para viga baldrame?',
        answer: 'Para baldrames residenciais padrão, as tábuas de 20cm e 25cm são as mais utilizadas. Para vigas mais altas ou baldrames de maior porte, utiliza-se a tábua de 30cm.'
      },
      {
        question: 'As tábuas de pinus brutas podem ser reaproveitadas na obra?',
        answer: 'Sim, quando travadas com sarrafos nas distâncias corretas (a cada 50cm) e desformadas com cuidado, as tábuas de pinus podem ser reutilizadas de 2 a 4 vezes.'
      },
      {
        question: 'Qual a espessura real da tábua de pinus de 1 polegada?',
        answer: 'A bitola nominal de corte na serraria é de 25 mm (2,5 cm). Após a retração natural de secagem, a espessura real estabiliza entre 20 mm e 22 mm.'
      },
      {
        question: 'Quantas tábuas de 30cm vêm em 1 metro cúbico?',
        answer: 'Em 1 metro cúbico (1 m³) de tábua 30cm com 3 metros cabem aproximadamente 44 peças.'
      }
    ]
  },
  {
    id: 'prod-caibros',
    slug: 'caibros',
    name: 'Caibros de Pinus 5x5 e 5x7 para Telhados',
    category: 'Estrutura de Telhado',
    shortDescription: 'Caibros de pinus maciços em 5x5cm e 5x7cm com 3m e 4m de comprimento para sustentação de telhados cerâmicos, fibrocimento e metálicos.',
    fullDescription: 'Os caibros de pinus da Madeireira Bairro Novo são selecionados para garantir alta resistência à tração e flexão sob o peso do telhado e cargas de vento em Curitiba. Serrados no esquadro, facilitam a fixação das ripas e mantêm a inclinação perfeita das águas do telhado.',
    treatmentType: 'Serrado In Natura',
    isCornerstoneProduct: true,
    priceStartingFrom: 'Cotação por metro linear ou fardo fechado',
    lengthMeters: '3,00m e 4,00m',
    approximateMoisture: 'Seco ao ar / in natura',
    indicatedUse: 'Estruturação de telhados, suporte de ripas, pontaletes e escoramentos leves',
    imageUrl: 'https://img.supremasite.com.br/madeiras/pine_roof_framework.webp',
    imageAlt: 'Caibros de pinus maciços instalados no engradamento estrutural de telhado residencial',
    dimensionsAvailable: [
      'Caibro de Pinus 5x5 cm (2" x 2") em 3,00m e 4,00m',
      'Caibro de Pinus 5x7 cm (2" x 3") em 3,00m e 4,00m'
    ],
    features: [
      'Madeira selecionada com poucos nós para maior resistência',
      'Alinhamento reto que evita ondulações nas telhas',
      'Ótima penetração e fixação de pregos e parafusos',
      'Fardos amarrados para facilitar a conferência e descarregamento'
    ],
    applications: [
      'Engradamento de telhados cerâmicos com espaçamento de 50 cm',
      'Coberturas de fibrocimento e telhas termoacústicas',
      'Pontaletes de apoio para gabarito de obra',
      'Barrotes inferiores para pisos e palcos provisórios'
    ],
    advantages: [
      'Leveza estrutural que não sobrecarrega as paredes e lajes',
      'Excelente relação custo por metro linear instalado',
      'Pronta entrega em 3 e 4 metros'
    ],
    faq: [
      {
        question: 'Qual o espaçamento correto entre caibros de pinus em telhados de telha cerâmica?',
        answer: 'O espaçamento padrão recomendado pelas boas práticas de engenharia é de no máximo 50 cm entre eixos dos caibros, garantindo que as ripas não sofram flexão.'
      },
      {
        question: 'Quando devo usar o caibro 5x7 em vez do 5x5?',
        answer: 'O caibro 5x7cm é indicado quando o vão livre entre as terças de sustentação for superior a 1,50 metro ou para telhas de maior peso por m².'
      },
      {
        question: 'Quantos caibros de 5x5 cabem em 1 m³ de madeira?',
        answer: 'Em 1 metro cúbico cabem aproximadamente 133 peças de caibro 5x5cm com 3,00 metros de comprimento.'
      },
      {
        question: 'O caibro de pinus precisa de tratamento químico?',
        answer: 'Para telhados fechados e secos, o pinus in natura é amplamente utilizado. É recomendável aplicar cupinicida preventivo antes do forramento.'
      }
    ]
  },
  {
    id: 'prod-vigas',
    slug: 'vigas',
    name: 'Vigas de Pinus Estruturais para Telhado e Mezaninos',
    category: 'Vigas e Estruturas',
    shortDescription: 'Vigas de pinus de 5x11cm, 5x15cm e 6x15cm com comprimentos de 3m a 6m para terças, cumeeiras, vigamentos mestres e mezaninos em Curitiba.',
    fullDescription: 'As vigas de pinus da Madeireira Bairro Novo são cortadas de toras robustas de reflorestamento, oferecendo a robustez necessária para suportar grandes vãos livres em coberturas residenciais e comerciais. O pinus estrutural alia solidez mecânica a um peso próprio leve e fácil manipulação no alto do telhado.',
    treatmentType: 'Serrado In Natura',
    isCornerstoneProduct: true,
    priceStartingFrom: 'Consulte valores por peça e m³',
    lengthMeters: '3,00m, 4,00m, 5,00m e 6,00m',
    approximateMoisture: 'Seco ao ar',
    indicatedUse: 'Terças de telhado, vigas cumeeiras, barrotes de mezanino e travamento estrutural',
    imageUrl: 'https://img.supremasite.com.br/madeiras/pine_beams_lumberyard.webp',
    imageAlt: 'Vigas de pinus estruturais maciças para sustentação de telhados, coberturas e mezaninos',
    dimensionsAvailable: [
      'Viga 5x11 cm (3m, 4m, 5m)',
      'Viga 5x12 cm (3m, 4m, 5m)',
      'Viga 5x15 cm (3m, 4m, 5m, 6m)',
      'Viga 6x15 cm (3m, 4m, 5m, 6m)'
    ],
    features: [
      'Alta capacidade de suporte de carga estática e dinâmica',
      'Comprimentos especiais de até 6 metros sem emendas',
      'Faces planas e esquadrejadas para perfeito apoio dos caibros',
      'Madeira de alta densidade selecionada para peças estruturais'
    ],
    applications: [
      'Terças e linhas mestras em tesouras de telhado',
      'Vigas de cumeeira e espigões de coberturas complexas',
      'Estruturas de mezaninos residenciais e depósitos',
      'Barrotamento de suporte de pisos de madeira e palcos'
    ],
    advantages: [
      'Economia substancial em comparação a perfis metálicos ou vigas de lei',
      'Facilidade de fixação com parafusos passantes, estribos e pregos',
      'Pronta entrega com frota de caminhões adaptada para peças compridas'
    ],
    faq: [
      {
        question: 'Qual a distância máxima recomendada entre apoios para uma viga 5x15cm?',
        answer: 'Para telhados cerâmicos convencionais, a distância entre tesouras ou paredes de apoio para a viga 5x15cm costuma variar entre 2,50m e 3,50m, dependendo da carga e inclinação.'
      },
      {
        question: 'A Madeireira Bairro Novo fornece vigas de 5 e 6 metros?',
        answer: 'Sim, mantemos estoque de vigas de 3,00m, 4,00m, 5,00m e 6,00m para atender telhados sem necessidade de emendas estruturais.'
      },
      {
        question: 'Como proteger vigas aparentes de pinus contra fungos?',
        answer: 'Recomenda-se lixar as vigas e aplicar stain impregnante hidrorrepelente com proteção UV e inseticida incorporado.'
      },
      {
        question: 'Quanto pesa uma viga de pinus 5x15cm com 4 metros?',
        answer: 'Uma viga de pinus 5x15cm seca com 4 metros de comprimento pesa aproximadamente 15 a 18 kg, permitindo fácil manuseio por dois carpinteiros.'
      }
    ]
  },
  {
    id: 'prod-ripas',
    slug: 'ripas',
    name: 'Ripas de Pinus 1,2x5cm para Galgamento de Telhado',
    category: 'Estrutura de Telhado',
    shortDescription: 'Ripas de pinus 1,2x5cm x 3,00m para galga e encaixe direto de telhas cerâmicas esmaltadas, romanas, portuguesas e concreto em Curitiba.',
    fullDescription: 'As ripas de pinus da Madeireira Bairro Novo são produzidas com corte de precisão para garantir a uniformidade milimétrica do telhado. Indispensáveis para o galgamento das telhas, proporcionam encaixe perfeito sem vazamentos e suportam o peso dos instaladores durante a montagem.',
    treatmentType: 'Serrado In Natura',
    priceStartingFrom: 'Preço super acessível vendido em fardos',
    lengthMeters: '3,00 metros',
    approximateMoisture: 'Seco ao ar',
    indicatedUse: 'Galgamento transversal de telhados e fixação de telhas',
    imageUrl: 'https://img.supremasite.com.br/madeiras/pine_slat_bundle.webp',
    imageAlt: 'Ripas de pinus 1,2x5cm alinhadas para galgamento e fixação de telhas cerâmicas e concreto',
    dimensionsAvailable: ['Ripa 1,2 x 5,0 cm x 3,00m (fardos amarrados)'],
    features: [
      'Espessura uniforme que evita telhas desencaixadas',
      'Fardos organizados com 20 a 50 peças facilitando a subida ao telhado',
      'Madeira flexível e resistente à fixação por pregos de cabeça chata',
      'Preço extremamente competitivo por metro linear'
    ],
    applications: [
      'Apoio de telhas cerâmicas (romana, portuguesa, francesa, americana)',
      'Galgamento de telhas de concreto',
      'Painéis decorativos ripados e fechamentos vazados de jardins'
    ],
    advantages: [
      'Melhor custo-benefício de Curitiba',
      'Facilidade de manuseio e transporte',
      'Sempre disponível a pronta entrega'
    ],
    faq: [
      {
        question: 'Quantos metros lineares de ripa são necessários por metro quadrado de telhado?',
        answer: 'Para telhas cerâmicas tradicionais como a romana e a portuguesa, calculam-se em média 3,2 a 3,5 metros lineares de ripa por m² de telhado.'
      },
      {
        question: 'As ripas de pinus racham ao pregar?',
        answer: 'O pinus tem excelente maciez e flexibilidade de fibra, aceitando pregos galvanizados 15x15 ou 17x21 sem rachar as pontas.'
      },
      {
        question: 'Quantas ripas vêm em 1 fardo?',
        answer: 'Geralmente os fardos são agrupados em pacotes de 20 a 50 peças para facilitar a contagem e a movimentação no canteiro.'
      },
      {
        question: 'Posso usar ripa de pinus para fazer painel ripado na parede?',
        answer: 'Sim! Lixando as ripas e aplicando verniz ou seladora, é possível criar painéis ripados decorativos modernos com baixíssimo custo.'
      }
    ]
  },
  {
    id: 'prod-sarrafos',
    slug: 'sarrafos',
    name: 'Sarrafos de Pinus 2,5x5cm e 2,5x7cm para Travamento',
    category: 'Caixaria e Formas',
    shortDescription: 'Sarrafos de pinus brutas para gravatas de caixaria de vigas e colunas, travamento de fôrmas, guias de piso e contenções em Curitiba.',
    fullDescription: 'Os sarrafos de pinus são itens essenciais para a segurança estrutural da caixaria de concreto. Utilizados como gravatas transversais, impedem que as tábuas se abram ou deformem durante o lançamento e adensamento vibratório do concreto.',
    treatmentType: 'Bruta de Serra',
    priceStartingFrom: 'Preço baixo por peça ou pacote',
    lengthMeters: '3,00 metros',
    approximateMoisture: 'In natura',
    indicatedUse: 'Gravatas de caixaria, travamento de vigas e pilares, guias de régua para contrapiso',
    imageUrl: 'https://img.supremasite.com.br/madeiras/pine_slat_bundle.webp',
    imageAlt: 'Sarrafos de pinus aparelhados para travamento e gravatas de caixarias de concreto',
    dimensionsAvailable: [
      'Sarrafo 2,5 x 5,0 cm x 3,00m',
      'Sarrafo 2,5 x 7,0 cm x 3,00m'
    ],
    features: [
      'Espessura de 1 polegada (2,5 cm) garantindo alta firmeza',
      'Perfeito para confecção de gravatas duplas e mãos-francesas',
      'Madeira de tração firme para suporte de arames e tensores',
      'Estoque constante para início imediato da obra'
    ],
    applications: [
      'Gravatas de caixaria de vigas, pilares e sapatas',
      'Guias e réguas de nivelamento de pisos de concreto',
      'Travamento superior de tapumes e andaimes',
      'Estruturas de escoramento e mãos-francesas'
    ],
    advantages: [
      'Evita o desperdício de tábuas inteiras para cortes menores',
      'Preço promocional em fardos de 10 a 20 peças',
      'Entrega expressa junto com o lote de tábuas de caixaria'
    ],
    faq: [
      {
        question: 'Qual a distância ideal entre os sarrafos de gravata na caixaria?',
        answer: 'Recomenda-se instalar gravatas de sarrafo a cada 40cm a 50cm ao longo da viga ou coluna para suportar a pressão do concreto fresco sem abaulamento.'
      },
      {
        question: 'Posso reaproveitar os sarrafos em outras concretagens?',
        answer: 'Sim, desparafusando ou desfiando os arames com cuidado, os sarrafos de pinus podem ser reutilizados em diversos ciclos de fôrma.'
      },
      {
        question: 'Qual a diferença entre sarrafo 2,5x5 e 2,5x7?',
        answer: 'O sarrafo 2,5x7cm possui 2 cm adicionais de largura, conferindo maior resistência à flexão para pilares mais altos ou vigas de grande vão.'
      },
      {
        question: 'Quantos sarrafos de 2,5x5cm cabem em 1 m³?',
        answer: 'Em 1 metro cúbico cabem aproximadamente 266 peças de sarrafo 2,5x5cm com 3,00 metros de comprimento.'
      }
    ]
  },
  {
    id: 'prod-barrotes',
    slug: 'barrotes',
    name: 'Barrotes de Pinus 5x5 e 5x10 para Nivelamento e Pisos',
    category: 'Estruturas e Pisos',
    shortDescription: 'Barrotes de pinus maciços para nivelamento de pisos de madeira, suporte inferior de decks, assoalhos e palcos em Curitiba.',
    fullDescription: 'Os barrotes de pinus fornecem a base estrutural perfeita para o assentamento de assoalhos, tábuas de deck, pisos elevados e passarelas. Oferecem excelente planicidade e estabilidade dimensional para fixação oculta ou aparente.',
    treatmentType: 'Serrado In Natura',
    priceStartingFrom: 'Consulte valor por peça e metro linear',
    lengthMeters: '3,00 metros',
    approximateMoisture: 'Seco ao ar ou tratado CCA',
    indicatedUse: 'Barrotamento de pisos, base de decks e nivelamento de contrapisos irregulares',
    imageUrl: 'https://img.supremasite.com.br/madeiras/pine_joists_lumberyard.webp',
    imageAlt: 'Barrotes de pinus serrados para nivelamento de pisos de madeira, assoalhos e base de decks',
    dimensionsAvailable: [
      'Barrote 5x5 cm x 3,00m',
      'Barrote 5x7 cm x 3,00m',
      'Barrote 5x10 cm x 3,00m'
    ],
    features: [
      'Faces planas que garantem o alinhamento perfeito do piso superior',
      'Alta resistência à compressão e carga pontual',
      'Disponível com tratamento autoclavado CCA para áreas molhadas',
      'Fácil calçamento e fixação em lajes com parafusos e buchas'
    ],
    applications: [
      'Estrutura inferior de suporte para decks de pinus e cumaru',
      'Nivelamento de pisos de madeira em sobrados e mezaninos',
      'Palcos para eventos, tablados e passarelas provisórias'
    ],
    advantages: [
      'Agilidade no nivelamento de pisos sem necessidade de contrapiso pesado',
      'Espaço inferior livre para passagem de fiações e tubulações hidráulicas',
      'Pronta entrega imediata em Curitiba'
    ],
    faq: [
      {
        question: 'Qual o espaçamento correto entre barrotes para suporte de um deck?',
        answer: 'Para réguas de deck com espessura de 2,5 cm, o espaçamento ideal entre barrotes é de no máximo 40 cm entre eixos para evitar que o deck flexione.'
      },
      {
        question: 'Os barrotes para deck externo precisam ser tratados em autoclave?',
        answer: 'Sim, como os barrotes ficam próximos ao chão e recebem a água da chuva que drena entre as tábuas, é obrigatório utilizar pinus autoclavado CCA.'
      },
      {
        question: 'Como fixar os barrotes no contrapiso de concreto?',
        answer: 'Utilize parafusos estruturais com buchas de nylon a cada 60cm a 80cm, intercalando calços plásticos para garantir o escoamento da água.'
      },
      {
        question: 'Qual a vantagem do barrote 5x10cm sobre o 5x5cm?',
        answer: 'O barrote 5x10cm permite vencer vãos maiores entre pilaretes e oferece maior altura útil para ventilação inferior do piso.'
      }
    ]
  },
  {
    id: 'prod-escoras',
    slug: 'escoras',
    name: 'Escoras de Pinus 7x7 e 8x8 para Lajes e Vigas',
    category: 'Escoramento e Lajes',
    shortDescription: 'Escoras de pinus brutas de 7x7cm e 8x8cm com 3m e 3,5m para escoramento de lajes pré-moldadas, lajes maciças e vigas aéreas em Curitiba.',
    fullDescription: 'As escoras de pinus (pontaletes) da Madeireira Bairro Novo são selecionadas especialmente para suportar elevadas cargas axiais verticais durante a concretagem e o período de cura de lajes. Reta e sem nós quebradiços, garantem segurança total aos trabalhadores e conformidade com as normas da construção civil.',
    treatmentType: 'Bruta de Serra',
    priceStartingFrom: 'Preço super competitivo por unidade ou lote de 50/100 peças',
    lengthMeters: '3,00m e 3,50m',
    approximateMoisture: 'In natura',
    indicatedUse: 'Escoramento de lajes treliçadas, lajes maciças, vigas aéreas e reforço provisório',
    imageUrl: 'https://pinus.madeireirabairronovo.com.br/img/escoras-pinus-7x7-8x8-lajes-vigas-curitiba.jpg',
    imageAlt: 'Escoras de pinus 7x7cm e pontaletes resistentes para sustentação de lajes e fôrmas de vigas',
    dimensionsAvailable: [
      'Escora de Pinus 7x7 cm (3,00m e 3,50m)',
      'Escora de Pinus 8x8 cm (3,00m e 3,50m)'
    ],
    features: [
      'Corte de serra reforçado com grande capacidade de carga axial',
      'Comprimento de até 3,50m atendendo pés-direitos altos',
      'Madeira maciça sem emendas para máxima segurança',
      'Preços de atacado para construtoras e empreiteiros'
    ],
    applications: [
      'Sustentação temporária de lajes pré-moldadas e vigotas treliçadas',
      'Escoramento de lajes maciças de concreto armado',
      'Apoio de formas de vigas aéreas e marquises',
      'Pontaletes de travamento e demarcação de gabaritos'
    ],
    advantages: [
      'Alternativa muito mais econômica que escoras metálicas para obras residenciais',
      'Fácil ajuste de altura com cunhas de madeira no pé da escora',
      'Pronta entrega com frotas de caminhões no Sítio Cercado'
    ],
    faq: [
      {
        question: 'Qual o espaçamento recomendado entre as escoras de laje?',
        answer: 'Para lajes pré-moldadas residenciais, recomenda-se uma linha de escoramento a cada 1,20m a 1,50m no sentido transversal aos trilhos, com escoras a cada 1,00m a 1,20m na linha.'
      },
      {
        question: 'Quanto tempo as escoras de pinus devem permanecer sob a laje?',
        answer: 'Para concreto convencional, o desescoramento inicial parcial pode ocorrer após 14 dias, e o desescoramento final total com 28 dias após a concretagem.'
      },
      {
        question: 'Como evitar que as escoras afundem no solo?',
        answer: 'Sempre apoie as escoras sobre pranchas de madeira largas ou contrapiso firme e utilize pares de cunhas opostas para o nivelamento milimétrico.'
      },
      {
        question: 'Quantas escoras cabem em 1 metro cúbico?',
        answer: 'Em 1 metro cúbico cabem aproximadamente 68 peças de escora 7x7cm com 3,00 metros de comprimento.'
      }
    ]
  },
  {
    id: 'prod-madeirite',
    slug: 'madeirite',
    name: 'Madeirite Resinado e Plastificado para Fôrmas de Concreto',
    category: 'Compensados e Painéis',
    shortDescription: 'Chapas de madeirite resinado e plastificado fenólico (1,10x2,20m e 1,22x2,44m) em espessuras de 6mm a 18mm para concreto aparente e tapumes em Curitiba.',
    fullDescription: 'Os painéis de compensado / madeirite da Madeireira Bairro Novo são fabricados com lâminas de madeira de pinus sobrepostas e prensadas com resina impermeável. O madeirite resinado (cola branca/fenólica) é ideal para fôrmas convencionais e tapumes, enquanto o madeirite plastificado (filme fenólico 120g/m²) proporciona superfícies de concreto aparente perfeitamente lisas com reaproveitamento de até 15 vezes.',
    treatmentType: 'Geral',
    priceStartingFrom: 'Consulte valor por chapa ou palete fechado',
    lengthMeters: 'Chapas 1,10x2,20m e 1,22x2,44m',
    approximateMoisture: 'Compensado prensado e selado',
    indicatedUse: 'Fôrmas de lajes, vigas de concreto aparente, painéis de vedação e tapumes de obras',
    imageUrl: 'https://pinus.madeireirabairronovo.com.br/img/madeirite-resinado-plastificado-fenolico-lajes.jpg',
    imageAlt: 'Chapas de madeirite resinado e plastificado fenólico para fôrmas de lajes e concreto aparente',
    dimensionsAvailable: [
      'Madeirite Resinado: 6mm, 10mm, 12mm, 14mm, 17mm (1,10x2,20m)',
      'Madeirite Plastificado: 12mm, 14mm, 17mm, 18mm (1,10x2,20m e 1,22x2,44m)'
    ],
    features: [
      'Lâminas selecionadas com prensagem a quente de alta resistência',
      'Bordas seladas com tinta impermeável para retardar a absorção de umidade',
      'Excelente estabilidade dimensional que não deforma com a água do concreto',
      'Superfície de alto rendimento que reduz a necessidade de reboco pesado'
    ],
    applications: [
      'Painéis de fôrma para lajes maciças e nervuradas',
      'Caixaria de pilares e paredes de concreto aparente (versão plastificada)',
      'Fechamento de tapumes perimetrais e bandejas de proteção de edifícios',
      'Pisos temporários de palcos, barracões e canteiros'
    ],
    advantages: [
      'Reaproveitamento de 8 a 15 vezes com o modelo plastificado filmado',
      'Grande redução no tempo de montagem e desforma em relação a tábuas soltas',
      'Pronta entrega com descontos para paletes fechados'
    ],
    faq: [
      {
        question: 'Qual a diferença entre madeirite resinado e madeirite plastificado?',
        answer: 'O madeirite resinado possui acabamento em madeira aparente com resina básica (reaproveitamento de 2 a 4 vezes). O madeirite plastificado é revestido por um filme fenólico liso e brilhante que impede a aderência do concreto, permitindo 8 a 15 usos com acabamento perfeito de concreto aparente.'
      },
      {
        question: 'Qual a espessura de madeirite mais indicada para fôrma de laje?',
        answer: 'As espessuras mais utilizadas para lajes são 12mm e 14mm (resinado ou plastificado), combinadas com sarrafos e vigamentos de apoio espaçados a cada 50cm.'
      },
      {
        question: 'Como prolongar a vida útil das chapas de madeirite?',
        answer: 'Aplique óleo desmoldante antes de cada concretagem, evite quedas no descarregamento e repinte as bordas cortadas com tinta impermeável.'
      },
      {
        question: 'A Madeireira Bairro Novo vende madeirite para tapume de obra?',
        answer: 'Sim, fornecemos madeirite resinado de 6mm e 10mm com excelente custo para fechamento seguro de tapumes perimetrais de canteiros.'
      }
    ]
  },
  {
    id: 'prod-deck',
    slug: 'deck',
    name: 'Deck de Pinus Autoclavado (Tratado CCA) para Piscinas e Jardins',
    category: 'Madeira Tratada e Lazer',
    shortDescription: 'Réguas de deck em pinus autoclavado CCA boleadas e frisadas (2,5x10cm e 2,5x15cm) para áreas de piscina, varandas, jardins e quiosques em Curitiba.',
    fullDescription: 'O Deck de Pinus Autoclavado da Madeireira Bairro Novo une a beleza e o aconchego térmico da madeira natural a uma durabilidade superior a 15 anos contra sol e chuva. Tratado sob vácuo e pressão com sais de CCA em autoclave industrial, é imune ao ataque de cupins, brocas e fungos apodrecedores.',
    treatmentType: 'Tratado Autoclavado (CCA)',
    isCornerstoneProduct: true,
    priceStartingFrom: 'Economia de até 60% vs madeiras de lei como Itaúba e Cumaru',
    lengthMeters: '3,00 metros padrão',
    approximateMoisture: 'Autoclavado e seco',
    indicatedUse: 'Decks de piscinas, spas, varandas gourmet, caminhos de jardim, quiosques e passarelas',
    imageUrl: 'https://img.supremasite.com.br/madeiras/cca_treated_deck_pool.webp',
    imageAlt: 'Deck de pinus autoclavado tratado CCA instalado em área externa de lazer ao redor de piscina',
    dimensionsAvailable: [
      'Régua de Deck 2,5 x 10,0 cm x 3,00m (cantos boleados)',
      'Régua de Deck 2,5 x 15,0 cm x 3,00m (lisa ou frisada antiderrapante)',
      'Barrotes tratados 5x5cm e 5x10cm para estrutura inferior'
    ],
    features: [
      'Tratamento industrial em autoclave com garantia contra apodrecimento',
      'Cantos boleados para toque suave e confortável aos pés descalços',
      'Conforto térmico: não queima os pés sob sol intenso como pisos cerâmicos',
      'Fácil manutenção com aplicação periódica de stain protetor'
    ],
    applications: [
      'Entorno de piscinas de fibra, alvenaria e spas',
      'Varandas de apartamentos, coberturas e quintais',
      'Caminhos, pontes e passarelas sobre jardins e lagos',
      'Fachadas e painéis decorativos externos'
    ],
    advantages: [
      'Custo até 60% inferior ao de decks de madeira nobre (Itaúba/Garapeira)',
      'Madeira 100% de reflorestamento com apelo ecológico moderno',
      'Pronta entrega de kits completos com barrotes e réguas'
    ],
    faq: [
      {
        question: 'Quanto tempo dura um deck de pinus autoclavado sob sol e chuva em Curitiba?',
        answer: 'Com o tratamento industrial CCA em autoclave, a madeira possui durabilidade estrutural superior a 15 a 20 anos contra cupins e apodrecimento, resistindo perfeitamente às chuvas frequentes de Curitiba.'
      },
      {
        question: 'Qual acabamento deve ser aplicado no deck de pinus tratado?',
        answer: 'Recomenda-se aplicar 2 a 3 demãos de stain hidrorrepelente com filtro solar UV. O stain penetra nas fibras sem descascar como o verniz comum, facilitando futuras manutenções.'
      },
      {
        question: 'Qual o espaçamento que devo deixar entre as réguas do deck?',
        answer: 'Deve-se deixar uma junta de dilatação de 3 a 5 mm entre as réguas para garantir a drenagem livre da água da chuva e permitir a movimentação natural da madeira.'
      },
      {
        question: 'Qual o espaçamento correto dos barrotes de apoio do deck?',
        answer: 'Os barrotes inferiores devem ser instalados com espaçamento máximo de 40 cm entre eixos para garantir total firmeza sem balanço ao caminhar.'
      }
    ]
  },
  {
    id: 'prod-pergolado',
    slug: 'pergolado',
    name: 'Madeira para Pergolado de Pinus Tratado (Autoclavado CCA)',
    category: 'Madeira Tratada e Lazer',
    shortDescription: 'Pilares, vigas mestras e caibros de pinus autoclavado sob medida para construção de pergolados decorativos, gazebos e garagens abertas em Curitiba.',
    fullDescription: 'Construa pergolados elegantes e duráveis com o Pinus Autoclavado CCA da Madeireira Bairro Novo. Disponibilizamos pilares maciços de 10x10cm e 15x15cm, vigas mestras de 5x15cm e 5x20cm com cortes chanfrados decorativos e caibros aparelhados para sombreamento.',
    treatmentType: 'Tratado Autoclavado (CCA)',
    isCornerstoneProduct: true,
    priceStartingFrom: 'Kits completos com preços especiais',
    lengthMeters: '3,00m a 6,00m',
    approximateMoisture: 'Tratado sob pressão CCA',
    indicatedUse: 'Pergolados de jardim, garagens abertas para carros, gazebos gourmet, pórticos e caramanchões',
    imageUrl: 'https://img.supremasite.com.br/madeiras/greenish_pine_pergola_garden.webp',
    imageAlt: 'Estrutura de pergolado de madeira de pinus tratado CCA em jardim residencial e área externa',
    dimensionsAvailable: [
      'Pilares / Mourões: 10x10cm, 12x12cm e 15x15cm (3,00m e 4,00m)',
      'Vigas Mestras: 5x15cm e 5x20cm (3m a 6m)',
      'Caibros Superiores: 5x7cm e 5x10cm (3m e 4m)'
    ],
    features: [
      'Tratamento CCA garantindo proteção contra chuvas, sol e insetos xilófagos',
      'Peças aparelhadas e lixadas prontas para receber pintura ou stain',
      'Excelente estabilidade dimensional para encaixes precisos de marcenaria',
      'Possibilidade de cobertura com vidro temperado, policarbonato ou trepadeiras'
    ],
    applications: [
      'Pergolados para áreas de churrasqueira e piscina',
      'Garagens e coberturas sombreadas para veículos',
      'Caramanchões para plantas e orquidários',
      'Pórticos de entrada de condomínios e chácaras'
    ],
    advantages: [
      'Valoriza o imóvel com design arquitetônico rústico e sofisticado',
      'Economia de mais de 50% em comparação a estruturas de ferro ou madeira nobre',
      'Consultoria técnica gratuita para cálculo das bitolas de sustentação'
    ],
    faq: [
      {
        question: 'O pergolado de pinus tratado suporta cobertura de vidro ou policarbonato?',
        answer: 'Sim, dimensionando as vigas principais com 5x15cm ou 5x20cm e caibros a cada 50cm, a estrutura suporta com segurança o peso de vidros laminados/temperados ou placas de policarbonato alveolar.'
      },
      {
        question: 'Como fixar os pilares do pergolado no chão?',
        answer: 'Recomenda-se fixar os pilares sobre sapatas de concreto elevadas utilizando suportes metálicos de aço galvanizado (estribos/sapatas tipo U) para evitar que a base fique submersa em poças d’água.'
      },
      {
        question: 'Qual a durabilidade de um pergolado de pinus tratado CCA em Curitiba?',
        answer: 'Com manutenção periódica com stain a cada 2 anos, a estrutura de pinus autoclavado mantém sua solidez e beleza por mais de 15 a 20 anos.'
      },
      {
        question: 'A Madeireira Bairro Novo faz cortes decorativos nas vigas?',
        answer: 'Sim, podemos fornecer as pontas das vigas mestras e caibros com cortes chanfrados ou arredondados clássicos de pergolado.'
      }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS_DATA.find((p) => p.slug === slug || p.id === `prod-${slug}`);
}
