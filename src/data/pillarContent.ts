export interface PillarSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
}

export const PILLAR_PAGE_METADATA = {
  title: 'Madeira de Pinus: Guia Completo, Medidas e Preço em Curitiba',
  description: 'Guia definitivo sobre Madeira de Pinus em Curitiba: tipos (in natura, aparelhada, tratada CCA), medidas comerciais, caixaria, telhado, preços e onde comprar.',
  h1: 'Madeira de Pinus em Curitiba: guia completo para sua obra',
  canonicalPath: '/madeira-de-pinus',
  updatedDate: '18 de Agosto de 2026',
  author: 'Equipe Técnica Madeireira Bairro Novo Curitiba'
};

export const PILLAR_SECTIONS: PillarSection[] = [
  {
    id: 'o-que-e-madeira-de-pinus',
    title: '1. O que é a madeira de pinus e por que é a mais usada na construção civil do Sul',
    subtitle: 'Origem florestal, sustentabilidade e propriedades mecânicas no Paraná',
    content: `
A **madeira de pinus** (predominantemente das espécies *Pinus elliottii* e *Pinus taeda*) é a matéria-prima mais importante e utilizada no setor da construção civil, marcenaria e embalagens na Região Sul do Brasil. Cultivada em extensas áreas de reflorestamento no estado do Paraná e em Santa Catarina, o pinus representa o equilíbrio perfeito entre sustentabilidade ambiental, disponibilidade contínua em grande escala e alta eficiência econômica.

Diferente das madeiras nativas de lei, cuja extração é rigidamente restrita e de custo proibitivo para etapas provisórias de canteiro, o pinus provém de plantios 100% renováveis com ciclos de corte manejados. Seu rápido crescimento produz toras uniformes, com veios regulares e excelente rendimento de serraria.

### Principais propriedades físico-mecânicas do pinus:
- **Densidade aparente:** Madeira de média a baixa densidade (aproximadamente 400 a 550 kg/m³ quando seca ao ar), o que confere extrema leveza estrutural e facilidade ergonômica de transporte dentro da obra.
- **Trabalhabilidade:** Elevada facilidade para corte em serras manuais e de bancada, furação, aplainamento, lixamento e colagem.
- **Retenção de fixadores:** Apresenta excelente aderência a pregos e parafusos estruturais, dispensando pré-furação na maioria das bitolas de caixaria.
- **Permeabilidade para tratamento:** O alburno do pinus possui estrutura celular aberta e altamente porosa, permitindo que preservativos industriais (como o CCA em autoclave) penetrem profundamente até o cerne, tornando a peça imune a fungos e cupins por décadas.

Em Curitiba e municípios vizinhos, o pinus é a espinha dorsal de qualquer canteiro: desde o pontalete de demarcação do gabarito até a caixaria de vigas baldrames, escoramento de lajes e engradamento de telhados residenciais.
    `
  },
  {
    id: 'tipos-de-pinus',
    title: '2. Tipos de pinus: in natura, aparelhada, tratada (imunizada) e autoclavada (CCA)',
    subtitle: 'Diferenças essenciais, processos de imunização e quando especificar cada uma',
    content: `
Compreender os diferentes processos de beneficiamento e tratamento do pinus é indispensável para garantir a durabilidade da obra sem desperdício de orçamento.

### A. Pinus In Natura (Serrado Bruto)
É a madeira recém-saída da serra fita ou circular, sem aplainamento superficial. Apresenta textura áspera e dimensões nominais cheias.
- **Uso ideal:** Caixarias e fôrmas de concreto, vigas baldrames, colunas, bandejas de proteção de edifícios, andaimes provisórios, escoramento de lajes e estruturas temporárias.
- **Vantagens:** Menor custo unitário por metro cúbico e máxima economia para etapas onde a madeira será descartada ou reaproveitada poucas vezes.

### B. Pinus Beneficiado / Aparelhado (Plainado)
Passa por plainas desengrossadeiras industriais nas 4 faces, resultando em superfícies lisas ao toque, cantos perfeitamente esquadrejados e dimensões calibradas.
- **Uso ideal:** Marcenaria, forros, móveis rústicos, estruturas aparentes, artesanato, molduras e divisórias internas secas.
- **Vantagens:** Pronta para receber pintura, verniz, stain ou seladora sem necessidade de lixamento pesado no local.

### C. Pinus Tratado / Imunizado Superficial
Madeira tratada com banhos químicos preventivos ou pulverização de inseticidas/fungicidas para retardar o surgimento do mofo e repelir insetos xilófagos durante o transporte e estocagem.
- **Uso ideal:** Obras com cronograma de montagem rápida em ambientes cobertos e secos.

### D. Pinus Autoclavado (Tratado com CCA sob Pressão)
Trata-se do pinus submetido ao processo industrial em autoclave sob vácuo e alta pressão (usando Arseniato de Cobre Cromatado - CCA-C), de acordo com as normas da ABNT NBR 9480 e NBR 6232. Os componentes ativos fixam-se quimicamente nas paredes celulares da madeira:
- O **Cobre** atua como potente fungicida contra apodrecimento.
- O **Arsênio** combate cupins, brocas e insetos subterrâneos.
- O **Cromo** fixa os elementos quimicamente na celulose, impedindo a lixiviação pela chuva.
- **Uso ideal:** Decks de piscina e varandas, pergolados, cercas, mourões de fazenda, chalés A-frame, quiosques, postes e contato direto com o solo ou intempéries.
- **Durabilidade:** Superior a 15 a 20 anos em áreas externas sujeitas a sol e chuva.
    `
  },
  {
    id: 'produtos-e-medidas-comerciais',
    title: '3. Produtos e medidas comerciais de pinus comercializadas em Curitiba',
    subtitle: 'Bitolas nominais em centímetros, espessuras e comprimentos padrão de fábrica',
    content: `
A Madeireira Bairro Novo mantém estoque permanente das principais bitolas exigidas pelas normas de engenharia e pela prática dos mestres de obras de Curitiba e RMC.

| Produto Comercial | Bitola Nominal (cm) | Bitola Real Média | Comprimentos Padrão | Aplicação Principal |
|---|---|---|---|---|
| **Tábua de Pinus 30cm** | 2,5 x 30,0 cm | 2,0 a 2,2 x 30 cm | 3,00 m | Caixaria pesada de vigas, formas de concreto e fechamentos |
| **Tábua de Pinus 25cm** | 2,5 x 25,0 cm | 2,0 a 2,2 x 25 cm | 3,00 m | Caixaria de pilares, colunas e fechamento de fundação |
| **Tábua de Pinus 20cm** | 2,5 x 20,0 cm | 2,0 a 2,2 x 20 cm | 3,00 m | Baldrames, canaletas e andaimes de obra |
| **Tábua de Pinus 15cm** | 2,5 x 15,0 cm | 2,0 a 2,2 x 15 cm | 3,00 m | Tabeiras de beiral, caixarias estreitas e travamentos |
| **Caibro de Pinus 5x5** | 5,0 x 5,0 cm | 4,5 a 4,8 x 4,5 a 4,8 cm | 3,00m e 4,00m | Coberturas cerâmicas (apoio das ripas) e pontaletes |
| **Caibro de Pinus 5x7** | 5,0 x 7,0 cm | 4,5 x 6,5 cm | 3,00m e 4,00m | Telhados de grande vão, estruturas reforçadas |
| **Viga de Pinus 5x11 / 5x12** | 5,0 x 11/12 cm | 4,8 x 11,0 cm | 3,00m, 4,00m, 5,00m | Terças de telhado, barrotes e sustentação intermediária |
| **Viga de Pinus 5x15 / 6x15** | 5,0 x 15,0 cm | 4,8 x 14,5 cm | 3,00m a 6,00m | Vigas mestras de cobertura, vigamento de mezaninos |
| **Ripa de Pinus 1,2x5** | 1,2 x 5,0 cm | 1,0 x 4,8 cm | 3,00 m | Galgamento de telhas romanas, portuguesas e esmaltadas |
| **Sarrafo de Pinus 2,5x5** | 2,5 x 5,0 cm | 2,0 x 4,8 cm | 3,00 m | Gravatas de caixaria, travamentos e guias de piso |
| **Escora de Pinus 7x7 / 8x8** | 7,0x7,0 a 8,0x8,0 cm | Corte de serra | 3,00m e 3,50m | Escoramento de lajes pré-moldadas e vigas aéreas |
| **Madeirite Resinado** | 1,10 x 2,20 m | 6, 10, 12, 14, 17 mm | Chapas padrão | Fôrmas de concreto com reaproveitamento de 2 a 4 vezes |
| **Madeirite Plastificado** | 1,10 x 2,20 m / 1,22 x 2,44 m | 12, 14, 17, 18 mm | Chapas filmadas | Fôrmas para concreto aparente com 8 a 15 usos |

*Dica técnica:* Na cotação de madeiras brutas, lembre-se de que a madeira serrada in natura passa por leve retração volumétrica natural durante a secagem, variando entre 3% e 6% na seção transversal, o que é previsto no dimensionamento padrão de engenharia.
    `
  },
  {
    id: 'aplicacoes-na-pratica',
    title: '4. Aplicações práticas: telhado, caixaria, escoramento, deck, pergolado e chalés',
    subtitle: 'Como aplicar o pinus com segurança em cada fase do seu projeto',
    content: `
A versatilidade do pinus permite sua aplicação em diversas disciplinas construtivas, desde que respeitadas as condições de umidade e proteção mecânica.

### 1. Estrutura de Telhado e Coberturas (Engradamento Completo)
O sistema tradicional de engradamento de telhados em Curitiba é composto por:
- **Terças e Cumeeiras:** Vigas de 5x11cm, 5x15cm ou 6x15cm, apoiadas em tesouras ou paredes de oitão.
- **Caibros:** Peças de 5x5cm ou 5x7cm instaladas no sentido do escoamento da água, com espaçamento máximo recomendado de 50 cm entre eixos para telhas cerâmicas.
- **Ripas:** Peças de 1,2x5cm pregadas perpendicularmente aos caibros com a distância exata da galga da telha especificada pelo fabricante.
*Recomendação:* Para telhados embutidos sob platibanda ou forros fechados sem ventilação, garanta que a madeira esteja seca e aplique cupinicida preventivo antes do fechamento.

### 2. Caixarias e Fôrmas para Concreto Armado
Para vigas baldrames, colunas de fundação e cintas superiores, as tábuas de pinus de 20cm, 25cm e 30cm associadas aos sarrafos de 2,5x5cm formam painéis rígidos e estanques.
- **Dica de montagem:** Posicione os sarrafos de gravata com espaçamento máximo de 50 cm e utilize arames recozidos ou tirantes de ferro com espaçadores plásticos para conter a pressão hidrostática do concreto vibrado.

### 3. Escoramento de Lajes e Estruturas Aéreas
As escoras de pinus 7x7cm e 8x8cm com 3,00m e 3,50m são dimensionadas para suportar cargas axiais verticais durante a concretagem e cura da laje.
- Assegure que a base das escoras esteja firmemente apoiada sobre pranchas de madeira para distribuir a carga no contrapiso e utilize sarrafos cruzados em "X" (mão-francesa) para evitar a flambagem lateral.

### 4. Decks, Pergolados e Áreas de Lazer Externas
Para estruturas submetidas a intempéries contínuas, **exija sempre o Pinus Autoclavado CCA**. Ele resiste ao sol forte, chuvas constantes do clima de Curitiba e geadas de inverno.
- Para decks, utilize barrotes inferiores espaçados a cada 40 cm e deixe juntas de dilatação de 3 a 5 mm entre as réguas para drenagem da água.
- Para pergolados, utilize vigas de 5x15cm ou 5x20cm e pilares de 10x10cm ou 15x15cm, aplicando stain hidrorrepelente com filtro UV para manter o tom dourado acetinado.

### 5. Chalés A-Frame, Galpões Rústicos e Tiny Houses
A arquitetura de chalés alpinos (A-Frame) tem forte presença na Região Metropolitana de Curitiba (Campo Largo, Tijucas do Sul, Mandirituba, São José dos Pinhais). O pinus tratado estrutural compõe tesouras inclinadas e vigamentos mestres com visual rústico acolhedor e custo acessível.
    `
  },
  {
    id: 'quanto-custa-preco-pinus',
    title: '5. Quanto custa a madeira de pinus: como o preço é formado e o que faz variar',
    subtitle: 'Metros cúbicos (m³), dúzia, peça avulsa e fatores de economia regional',
    content: `
O preço da madeira de pinus em Curitiba é tradicionalmente comercializado de três maneiras:
1. **Por Metro Cúbico (m³):** É a métrica padrão para pedidos de construtoras, depósitos e grandes cargas fechadas. 1 m³ equivale a 1.000 litros de madeira maciça.
2. **Por Dúzia:** Muito comum para tábuas de caixaria (ex: dúzia de tábua de 30cm) e fardos de caibros.
3. **Por Peça ou Metro Linear:** Prático para reformas pontuais, pequenos telhados, pergolados e decks residenciais.

### O que influencia o preço final da madeira:
- **Grau de Beneficiamento:** A madeira in natura é a mais barata. O aplainamento nas 4 faces e a secagem em estufa agregam valor pelo processo mecânico e térmico.
- **Tratamento em Autoclave (CCA):** O processo de vácuo-pressão e os sais químicos aumentam o valor da peça, porém multiplicam sua durabilidade em até 8 vezes comparada à madeira crua exposta à chuva.
- **Comprimento das Peças:** Peças de 3,00 metros são padrão de linha e têm o menor custo. Peças especiais com 4,00m, 5,00m ou 6,00m exigem toras de maior diâmetro e têm valor unitário ligeiramente superior.
- **Volume do Pedido e Frete:** Compras em carga fechada ou combinadas com ferragens e madeirite geram descontos progressivos substanciais.

Para conferir a tabela completa de referência e solicitar cotações instantâneas por peça, dúzia e m³, acesse nossa [Página de Preços Atualizada de Madeira de Pinus](/precos).
    `
  },
  {
    id: 'como-calcular-quantidade',
    title: '6. Como calcular a quantidade de madeira para seu telhado e caixaria',
    subtitle: 'Fórmulas práticas para engenheiros, mestres de obras e proprietários',
    content: `
Calcular corretamente a quantidade de madeira evita desperdícios e paralisações no canteiro de obras por falta de material.

### Fórmula para Cálculo de Volume em m³:
$$\\text{Volume (m³)} = \\frac{\\text{Espessura (cm)}}{100} \\times \\frac{\\text{Largura (cm)}}{100} \\times \\text{Comprimento (m)} \\times \\text{Quantidade de Peças}$$

*Exemplo Prático:* 50 peças de caibro 5x5cm com 3,00 metros de comprimento:
$$0,05 \\times 0,05 \\times 3,00 \\times 50 = 0,375 \\text{ m³}$$

### Regras práticas de estimativa rápida:
- **Telhado Cerâmico Tradicional:** Cada 1 m² de área de telhado demanda em média **2,1 metros lineares de caibro**, **3,2 metros lineares de ripa** e **0,45 metros de viga/terça**.
- **Caixaria de Vigas e Pilares:** Calcule o perímetro da seção da coluna vezes a altura para obter a área total de fôrma em m². Divida pela área útil de cada tábua (uma tábua de 30cm x 3m cobre 0,90 m²) e acrescente 10% para transpasse e perdas.

Utilize nossa ferramenta exclusiva com fórmulas automáticas na [Página de Medidas e Calculadora de m³](/medidas) e gere o pedido pronto para envio no WhatsApp.
    `
  },
  {
    id: 'pinus-vs-eucalipto-vs-nativas',
    title: '7. Pinus x Eucalipto x Madeira de Lei: quando cada uma compensa',
    subtitle: 'Comparativo técnico de custo, densidade, durabilidade e usabilidade',
    content: `
| Critério | Pinus In Natura / Tratado | Eucalipto Roliço / Tratado | Madeira de Lei / Nativas (Itaúba, Garapeira, Cumaru) |
|---|---|---|---|
| **Custo Relativo** | **Baixo a Moderado ($ a $$)** | **Baixo a Médio ($$)** | **Muito Alto ($$$$$)** |
| **Peso / Densidade** | Leve (400-550 kg/m³) - fácil manuseio | Pesado (650-850 kg/m³) | Muito pesado (850-1100 kg/m³) |
| **Facilidade de Pregagem** | Excelente (não racha facilmente) | Difícil (requer pré-furação para não rachar) | Requer pré-furação obrigatória |
| **Trabalhabilidade em Obra** | Altíssima - corte macio e rápido | Moderada a dura | Muito dura - desgasta ferramentas rapidamente |
| **Alinhamento e Esquadro** | Peças serradas perfeitamente retas | Roliço ou com leve empeno longitudinal | Excelente estabilidade dimensional |
| **Origem e Legalidade** | 100% reflorestamento certificado | 100% reflorestamento | Manejo florestal com DOF (Documento de Origem Florestal) |
| **Melhor Aplicação** | Caixaria, telhados residenciais, decks, pergolados e forros | Mourões de cerca, postes de energia e escoras brutas | Portas maciças de alto luxo, pisos nobres e fachadas |

*Conclusão da equipe técnica:* Para 90% das obras residenciais e comerciais em Curitiba, o Pinus oferece o melhor custo-benefício disparado. Para áreas internas, o pinus in natura ou seco é imbatível no preço. Para áreas externas, o pinus autoclavado entrega durabilidade equivalente às madeiras nobres com custo até 60% menor.
    `
  },
  {
    id: 'armazenamento-e-conservacao',
    title: '8. Como armazenar e conservar a madeira de pinus no canteiro',
    subtitle: 'Prevenção do azulamento, empenamento, umidade do solo e ação de cupins',
    content: `
A madeira de pinus in natura é um material orgânico e higroscópico. Seguir boas práticas de estocagem na obra garante que ela permaneça reta e livre de manchas fungicas.

### 1. Evite o Contato Direto com o Solo
Nunca empilhe as peças diretamente sobre a terra ou piso úmido. Utilize barrotes ou caibros de apoio com no mínimo 15 a 20 cm de altura do chão para criar um colchão de ar inferior.

### 2. Empilhamento com Tabiques / Sarrafos Separadores
Se a madeira for ficar armazenada por mais de 5 dias antes do uso, intercale sarrafos finos (tabiques) entre as camadas a cada 80 cm. Isso permite que o ar circule uniformemente entre as tábuas, acelerando a secagem homogênea e impedindo que a madeira empene.

### 3. Como Evitar o Azulamento (Mancha Azul)
O azulamento é causado por fungos manchadores (*Ceratocystis* e *Ophiostoma*) que se proliferam em ambientes quentes e abafados com umidade acima de 25%. Embora **não altere a resistência mecânica** da madeira para caixarias e telhados, o azulamento muda sua estética. Para evitar:
- Mantenha a pilha sob cobertura ventilada.
- Não cubra a madeira verde com lonas plásticas pretas totalmente lacradas no sol, pois o efeito estufa acelera a proliferação do fungo. Deixe as laterais da lona abertas para o vapor d'água escapar.

### 4. Proteção Química Adicional
Para madeiras que ficarão expostas a intempéries moderadas ou forros, aplique impermeabilizantes à base de óleo ou stain osmocolor que repelem a água da chuva e bloqueiam os raios UV do sol.
    `
  },
  {
    id: 'onde-comprar-curitiba',
    title: '9. Onde comprar madeira de pinus em Curitiba e Região Metropolitana',
    subtitle: 'Madeireira Bairro Novo: tradição, frota própria de entrega expressa e localização estratégica',
    content: `
Ao escolher um fornecedor de madeira em Curitiba, os três pilares decisivos são: **qualidade da bitola de corte**, **preço direto de distribuidora** e **velocidade de entrega**.

A **Madeireira Bairro Novo (Bairro Novo Comércio de Madeiras Ltda. - CNPJ 44.205.587/0001-40)** está estrategicamente sediada na Zona Sul de Curitiba:
- **Endereço:** Rua Coronel Joaquim Antônio de Azevedo, 1459 - Sítio Cercado (Bairro Novo), Curitiba – PR, CEP 81920-010.
- **Logística Rápida:** Posição privilegiada com acesso imediato ao Contorno Sul, Linha Verde (BR-116), Marechal Floriano Peixoto e BR-277.
- **Frota Própria:** Caminhões e utilitários equipados para descarregamento seguro no canteiro de obras, com entregas no mesmo dia ou em até 24 horas úteis.
- **Área de Atendimento:** Todos os 75 bairros oficiais de Curitiba (Sítio Cercado, Bairro Novo, Batel, Água Verde, Portão, CIC, Boqueirão, Pinheirinho, Cajuru, Santa Felicidade, etc.) e 15 cidades da Região Metropolitana (São José dos Pinhais, Pinhais, Colombo, Araucária, Fazenda Rio Grande, Campo Largo, Quatro Barras e outras).

Conheça os detalhes de prazos e taxas na nossa página de [Regiões Atendidas em Curitiba e RMC](/regioes-atendidas) ou visite nossa página institucional de [Quem Somos](/sobre).
    `
  },
  {
    id: 'faq-madeira-de-pinus',
    title: '10. Perguntas Frequentes sobre Madeira de Pinus (FAQ)',
    subtitle: 'Dúvidas técnicas e comerciais respondidas por especialistas do setor',
    content: `
Abaixo reunimos as 10 principais dúvidas formuladas por engenheiros, mestres de obras, carpinteiros e construtores de Curitiba e Região Metropolitana.
    `
  }
];

export const PILLAR_FAQ_ITEMS = [
  {
    question: 'A madeira de pinus in natura suporta o peso de um telhado colonial?',
    answer: 'Sim, desde que dimensionada corretamente com caibros (5x5cm ou 5x7cm a cada 50cm) e terças/vigas de sustentação (5x11cm ou 5x15cm) conforme a inclinação e peso das telhas. É a estrutura mais utilizada em residências no Paraná.'
  },
  {
    question: 'Qual a diferença prática entre pinus tratado e pinus autoclavado (CCA)?',
    answer: 'O pinus simplesmente tratado costuma receber imunização superficial contra mofo e cupim de estocagem. O pinus autoclavado passa por vácuo e alta pressão em autoclave com sais CCA (cobre, cromo e arsênio), penetrando profundamente nas fibras e garantindo durabilidade de mais de 15 anos sob sol e chuva.'
  },
  {
    question: 'O que é o fungo de azulamento no pinus e ele enfraquece a madeira?',
    answer: 'O azulamento é causado por fungos manchadores que se alimentam do amido presente na seiva da madeira verde. Ele altera a coloração (acinzentada/azulada), mas NÃO compromete a resistência mecânica nem a capacidade de carga para caixarias, vigas e telhados.'
  },
  {
    question: 'Quantas vezes é possível reaproveitar a tábua de pinus para caixaria?',
    answer: 'Tábuas de pinus in natura bem travadas e desformadas com cuidado podem ser reaproveitadas de 2 a 4 vezes na caixaria. O uso de desmoldante líquido aumenta a vida útil das tábuas.'
  },
  {
    question: 'Qual a espessura padrão de uma tábua de pinus de caixaria?',
    answer: 'A espessura nominal de corte é de 1 polegada (2,5 cm). Após a secagem natural, a espessura real varia entre 2,0 cm e 2,2 cm, garantindo ótima rigidez para suportar a pressão do concreto.'
  },
  {
    question: 'Quanto pesa 1 metro cúbico (1 m³) de madeira de pinus?',
    answer: 'O pinus in natura recém-cortado pesa aproximadamente entre 650 e 750 kg/m³. Após secagem ao ar no canteiro, seu peso estabiliza em torno de 450 a 520 kg/m³.'
  },
  {
    question: 'A Madeireira Bairro Novo entrega madeira de pinus no mesmo dia em Curitiba?',
    answer: 'Sim! Para pedidos confirmados pela manhã ou produtos com estoque imediato, realizamos entregas expressas no mesmo dia ou em no máximo 24 horas úteis com nossa frota própria.'
  },
  {
    question: 'Como calcular quantas peças de caibro de pinus cabem em 1 m³?',
    answer: 'Um caibro 5x5cm com 3 metros possui volume de 0,05 x 0,05 x 3 = 0,0075 m³. Dividindo 1 por 0,0075, obtemos aproximadamente 133 peças de caibro 5x5 em 1 m³.'
  },
  {
    question: 'Pinus tratado com CCA pode ser utilizado em hortas e contato com água potável?',
    answer: 'Para vasos de plantas e contato direto com alimentos ou reservatórios de água potável, recomenda-se aplicar verniz/vedante ou utilizar madeiras alternativas. O CCA é indicado para decks, pergolados, cercas, mourões e telhados.'
  },
  {
    question: 'Quais as formas de pagamento aceitas para compras de pinus na distribuidora?',
    answer: 'Aceitamos Pix com faturamento imediato, cartões de crédito/débito na entrega, transferência bancária e boleto bancário para construtoras e pessoas jurídicas previamente cadastradas.'
  }
];

export const PILLAR_PAGE_DATA = {
  ...PILLAR_PAGE_METADATA,
  sections: PILLAR_SECTIONS,
  faqs: PILLAR_FAQ_ITEMS
};
