export interface MeasurementTableItem {
  id?: string;
  name: string;
  popularName: string;
  nominalMm: string;
  nominalCm: string;
  realCm: string;
  standardLengthsMeters: number[];
  volumePerPiece3mM3: number;
  volumePerPieceM3: number;
  piecesPerM3_3m: number;
  piecesPerM3: number;
  primaryApplication: string;
  lengths?: string[];
  lengthsM: string;
  nominalSize?: string;
  usage?: string;
}

export interface StandardMeasurementCategory {
  category: string;
  items: MeasurementTableItem[];
}

export const COMMERCIAL_MEASUREMENTS_DATA: MeasurementTableItem[] = [
  {
    name: 'Tábua 30cm',
    popularName: 'Tábua de 30 / Tábua de 1" x 12"',
    nominalMm: '25 x 300 mm',
    nominalCm: '2,5 x 30 cm',
    nominalSize: '2,5 x 30 cm (1" x 12")',
    realCm: '2,0 a 2,2 x 30 cm',
    standardLengthsMeters: [3.0],
    lengths: ['3,00 metros'],
    lengthsM: '3,00 m',
    volumePerPiece3mM3: 0.0225,
    volumePerPieceM3: 0.0225,
    piecesPerM3_3m: 44,
    piecesPerM3: 44,
    primaryApplication: 'Caixaria pesada de vigas, baldrames e formas de concreto',
    usage: 'Caixarias pesadas de vigas e pilares, formas de concreto'
  },
  {
    name: 'Tábua 25cm',
    popularName: 'Tábua de 25 / Tábua de 1" x 10"',
    nominalMm: '25 x 250 mm',
    nominalCm: '2,5 x 25 cm',
    nominalSize: '2,5 x 25 cm (1" x 10")',
    realCm: '2,0 a 2,2 x 25 cm',
    standardLengthsMeters: [3.0],
    lengths: ['3,00 metros'],
    lengthsM: '3,00 m',
    volumePerPiece3mM3: 0.01875,
    volumePerPieceM3: 0.01875,
    piecesPerM3_3m: 53,
    piecesPerM3: 53,
    primaryApplication: 'Caixaria de colunas, pilares e fechamento de fundação',
    usage: 'Caixaria de pilares e vigas médias'
  },
  {
    name: 'Tábua 20cm',
    popularName: 'Tábua de 20 / Tábua de 1" x 8"',
    nominalMm: '25 x 200 mm',
    nominalCm: '2,5 x 20 cm',
    nominalSize: '2,5 x 20 cm (1" x 8")',
    realCm: '2,0 a 2,2 x 20 cm',
    standardLengthsMeters: [3.0],
    lengths: ['3,00 metros'],
    lengthsM: '3,00 m',
    volumePerPiece3mM3: 0.015,
    volumePerPieceM3: 0.015,
    piecesPerM3_3m: 66,
    piecesPerM3: 66,
    primaryApplication: 'Canaletas, baldrames e andaimes provisórios',
    usage: 'Baldrames, canaletas e andaimes de obra'
  },
  {
    name: 'Tábua 15cm',
    popularName: 'Tábua de 15 / Tábua de 1" x 6"',
    nominalMm: '25 x 150 mm',
    nominalCm: '2,5 x 15 cm',
    nominalSize: '2,5 x 15 cm (1" x 6")',
    realCm: '2,0 a 2,2 x 15 cm',
    standardLengthsMeters: [3.0],
    lengths: ['3,00 metros'],
    lengthsM: '3,00 m',
    volumePerPiece3mM3: 0.01125,
    volumePerPieceM3: 0.01125,
    piecesPerM3_3m: 88,
    piecesPerM3: 88,
    primaryApplication: 'Caixarias estreitas, tabeiras de telhado e travamento',
    usage: 'Espelhos de degrau, tapumes, canaletas e travamentos'
  },
  {
    name: 'Caibro 5x5cm',
    popularName: 'Caibro 2" x 2" / Caibro quadrado',
    nominalMm: '50 x 50 mm',
    nominalCm: '5,0 x 5,0 cm',
    nominalSize: '5,0 x 5,0 cm (2" x 2")',
    realCm: '4,5 x 4,5 cm',
    standardLengthsMeters: [3.0, 4.0],
    lengths: ['3,00m e 4,00m'],
    lengthsM: '3,00m a 4,00m',
    volumePerPiece3mM3: 0.0075,
    volumePerPieceM3: 0.0075,
    piecesPerM3_3m: 133,
    piecesPerM3: 133,
    primaryApplication: 'Estruturação de telhados para apoio de ripas, montantes de fôrmas',
    usage: 'Estrutura intermediária de telhados para apoio de ripas'
  },
  {
    name: 'Caibro 5x7cm',
    popularName: 'Caibro 2" x 3"',
    nominalMm: '50 x 70 mm',
    nominalCm: '5,0 x 7,0 cm',
    nominalSize: '5,0 x 7,0 cm (2" x 3")',
    realCm: '4,5 x 6,5 cm',
    standardLengthsMeters: [3.0, 4.0],
    lengths: ['3,00m e 4,00m'],
    lengthsM: '3,00m a 4,00m',
    volumePerPiece3mM3: 0.0105,
    volumePerPieceM3: 0.0105,
    piecesPerM3_3m: 95,
    piecesPerM3: 95,
    primaryApplication: 'Telhados de maior vão, escoramentos estruturais e montantes pesados',
    usage: 'Telhados com telhas de concreto ou fibrocimento pesado'
  },
  {
    name: 'Viga 5x11cm',
    popularName: 'Viga 2" x 4,5"',
    nominalMm: '50 x 110 mm',
    nominalCm: '5,0 x 11,0 cm',
    nominalSize: '5,0 x 11,0 cm (2" x 4,5")',
    realCm: '4,5 x 10,5 cm',
    standardLengthsMeters: [3.0, 4.0, 5.0, 6.0],
    lengths: ['3,00m a 6,00m'],
    lengthsM: '3,00m a 6,00m',
    volumePerPiece3mM3: 0.0165,
    volumePerPieceM3: 0.0165,
    piecesPerM3_3m: 60,
    piecesPerM3: 60,
    primaryApplication: 'Terças de telhado, vigamentos secundários e barrotes de piso',
    usage: 'Terças de sustentação de tesouras e coberturas'
  },
  {
    name: 'Viga 5x15cm',
    popularName: 'Viga 2" x 6"',
    nominalMm: '50 x 150 mm',
    nominalCm: '5,0 x 15,0 cm',
    nominalSize: '5,0 x 15,0 cm (2" x 6")',
    realCm: '4,5 x 14,5 cm',
    standardLengthsMeters: [3.0, 4.0, 5.0, 6.0],
    lengths: ['3,00m a 6,00m'],
    lengthsM: '3,00m a 6,00m',
    volumePerPiece3mM3: 0.0225,
    volumePerPieceM3: 0.0225,
    piecesPerM3_3m: 44,
    piecesPerM3: 44,
    primaryApplication: 'Vigas mestras de telhado, cumeeiras e mezaninos provisórios',
    usage: 'Vigamento principal de telhado e barrotes reforçados'
  },
  {
    name: 'Ripa 1,2x5cm',
    popularName: 'Ripa 1/2" x 2"',
    nominalMm: '12 x 50 mm',
    nominalCm: '1,2 x 5,0 cm',
    nominalSize: '1,2 x 5,0 cm (1/2" x 2")',
    realCm: '1,0 x 4,5 cm',
    standardLengthsMeters: [3.0],
    lengths: ['3,00 metros'],
    lengthsM: '3,00 m',
    volumePerPiece3mM3: 0.0018,
    volumePerPieceM3: 0.0018,
    piecesPerM3_3m: 555,
    piecesPerM3: 555,
    primaryApplication: 'Enripamento para telhas cerâmicas, esmaltadas e concreto',
    usage: 'Enripamento de telhados para fixação e galga de telhas'
  },
  {
    name: 'Sarrafo 2,5x5cm',
    popularName: 'Sarrafo 1" x 2"',
    nominalMm: '25 x 50 mm',
    nominalCm: '2,5 x 5,0 cm',
    nominalSize: '2,5 x 5,0 cm (1" x 2")',
    realCm: '2,0 x 4,5 cm',
    standardLengthsMeters: [3.0],
    lengths: ['3,00 metros'],
    lengthsM: '3,00 m',
    volumePerPiece3mM3: 0.00375,
    volumePerPieceM3: 0.00375,
    piecesPerM3_3m: 266,
    piecesPerM3: 266,
    primaryApplication: 'Gravatas de caixaria, travamentos e gabaritos de locação',
    usage: 'Gravatas de travamento para caixarias de vigas e pilares'
  },
  {
    name: 'Pontalete 7x7cm',
    popularName: 'Pontalete 3" x 3"',
    nominalMm: '70 x 70 mm',
    nominalCm: '7,0 x 7,0 cm',
    nominalSize: '7,0 x 7,0 cm (3" x 3")',
    realCm: '6,5 x 6,5 cm',
    standardLengthsMeters: [3.0, 3.5],
    lengths: ['3,00m e 3,50m'],
    lengthsM: '3,00m e 3,50m',
    volumePerPiece3mM3: 0.0147,
    volumePerPieceM3: 0.0147,
    piecesPerM3_3m: 68,
    piecesPerM3: 68,
    primaryApplication: 'Escoramento provisório de lajes e vigas de concreto',
    usage: 'Escoramento de lajes pré-moldadas e vigas intermediárias'
  }
];

export const STANDARD_MEASUREMENTS_TABLE = COMMERCIAL_MEASUREMENTS_DATA;

export const STANDARD_MEASUREMENTS: StandardMeasurementCategory[] = [
  {
    category: 'Tábuas de Pinus para Caixaria',
    items: COMMERCIAL_MEASUREMENTS_DATA.filter((i) => i.name.startsWith('Tábua'))
  },
  {
    category: 'Caibros e Vigas Estruturais',
    items: COMMERCIAL_MEASUREMENTS_DATA.filter((i) => i.name.startsWith('Caibro') || i.name.startsWith('Viga'))
  },
  {
    category: 'Ripas e Sarrafos de Travamento',
    items: COMMERCIAL_MEASUREMENTS_DATA.filter((i) => i.name.startsWith('Ripa') || i.name.startsWith('Sarrafo'))
  },
  {
    category: 'Pontaletes e Escoras para Laje',
    items: COMMERCIAL_MEASUREMENTS_DATA.filter((i) => i.name.startsWith('Pontalete'))
  }
];

export const MEASUREMENT_FAQS = [
  {
    question: 'Como calcular o metro cúbico (m³) de madeira serrada?',
    answer:
      'Para calcular o volume em m³, converta todas as medidas para metros e multiplique: Espessura (m) × Largura (m) × Comprimento (m) × Quantidade de peças. Por exemplo: 10 tábuas de 2,5cm × 30cm × 3,00m = 0,025 × 0,30 × 3,00 × 10 = 0,225 m³.'
  },
  {
    question: 'Qual a diferença entre a bitola nominal e a bitola real?',
    answer:
      'A bitola nominal é a medida teórica declarada no pedido (ex.: tábua de 2,5 x 30 cm ou 1" x 12"). A bitola real é a medida que a peça atinge após a serra e secagem natural (com variações normais de 2 a 4mm de espessura decorrentes da perda de umidade e tolerâncias da serraria).'
  },
  {
    question: 'Quantas tábuas de 30cm por 3 metros cabem em 1 m³?',
    answer:
      'Uma tábua de pinus de 2,5 x 30 cm x 3,00m possui volume nominal de 0,0225 m³. Portanto, 1 metro cúbico (1 m³) contém aproximadamente 44 peças de 3 metros.'
  },
  {
    question: 'Qual a bitola ideal de madeira para caixaria de vigas e baldrames?',
    answer:
      'Para baldrames e canaletas de fundação, utilizam-se geralmente tábuas de 20cm e 25cm com sarrafos de 2,5x5cm como gravatas. Para vigas aéreas e pilares estruturais pesados, a mais indicada é a tábua de 30cm (1" x 12") com gravatas reforçadas a cada 50cm.'
  }
];

export interface TimberVolumeResult {
  volumePerPieceM3: number;
  unitVolumeM3: number;
  totalVolumeM3: number;
  totalDozen: number;
  totalDozens: number;
  totalLinearMeters: number;
  totalAreaM2: number;
  estimatedWeightKg: number;
}

export function calculateTimberVolume(
  thickCm: number,
  widthCm: number,
  lengthM: number,
  quantity: number
): TimberVolumeResult {
  const thickM = thickCm / 100;
  const widthM = widthCm / 100;
  const unitVol = thickM * widthM * lengthM;
  const totalVol = unitVol * quantity;
  const totalLinear = lengthM * quantity;
  const totalArea = widthM * lengthM * quantity;
  const estimatedWeight = Math.round(totalVol * 650); // ~650 kg/m³ for green/semi-dry pine

  return {
    volumePerPieceM3: Number(unitVol.toFixed(5)),
    unitVolumeM3: Number(unitVol.toFixed(5)),
    totalVolumeM3: Number(totalVol.toFixed(4)),
    totalDozen: Number((quantity / 12).toFixed(2)),
    totalDozens: Number((quantity / 12).toFixed(2)),
    totalLinearMeters: Number(totalLinear.toFixed(2)),
    totalAreaM2: Number(totalArea.toFixed(2)),
    estimatedWeightKg: estimatedWeight
  };
}

export interface CaixariaCalculationResult {
  boardsNeeded: number;
  totalBoardsPieces: number;
  dozensNeeded: number;
  totalBoardsDozens: number;
  sarrafosNeeded: number;
  totalSarrafosPieces: number;
  estimatedVolumeM3: number;
  totalVolumeM3: number;
  totalLinearMeters: number;
  boardWidthSelectedCm: number;
  recommendedBoardType: string;
}

export function calculateCaixariaTimber(
  beamLengthM: number,
  beamHeightCm: number,
  hasBothSides: boolean = true
): CaixariaCalculationResult {
  const effectiveSides = hasBothSides ? 2 : 1;
  const totalLinearLength = beamLengthM * effectiveSides;

  // Each standard board has 3.0 meters
  const rawBoardCount = totalLinearLength / 3.0;
  const totalBoardsPieces = Math.ceil(rawBoardCount * 1.1); // 10% safety/waste

  // Gravatas (sarrafos 2.5x5cm) spaced every 50cm along the beam
  const numGravatasPositions = Math.ceil(beamLengthM / 0.5);
  // Each gravata uses 2 vertical pieces of length beamHeight + horizontal ties
  const sarrafoMetersNeeded = numGravatasPositions * ((beamHeightCm / 100) * 2 + 0.3);
  const totalSarrafosPieces = Math.ceil((sarrafoMetersNeeded / 3.0) * 1.15); // 15% waste

  // Calculate volume
  const boardVol = totalBoardsPieces * (0.025 * (beamHeightCm / 100) * 3.0);
  const sarrafoVol = totalSarrafosPieces * (0.025 * 0.05 * 3.0);
  const totalVolumeM3 = Number((boardVol + sarrafoVol).toFixed(4));
  const dozens = Number((totalBoardsPieces / 12).toFixed(2));

  return {
    boardsNeeded: totalBoardsPieces,
    totalBoardsPieces,
    dozensNeeded: dozens,
    totalBoardsDozens: dozens,
    sarrafosNeeded: totalSarrafosPieces,
    totalSarrafosPieces,
    estimatedVolumeM3: totalVolumeM3,
    totalVolumeM3,
    totalLinearMeters: totalLinearLength,
    boardWidthSelectedCm: beamHeightCm,
    recommendedBoardType: `Tábua de Pinus ${beamHeightCm}cm (3,00m)`
  };
}

export interface CalculationResult {
  mode: string;
  title: string;
  totalPieces: number;
  totalVolumeM3: number;
  totalDozen: number;
  itemsBreakdown: {
    description: string;
    quantity: number;
    unit: string;
    volumeM3: number;
  }[];
  notes: string[];
}

export function calculateRoofTimberEngradamento(
  roofAreaM2: number,
  tileType: 'ceramica' | 'concreto' | 'fibrocimento'
): CalculationResult {
  const caibrosCount = Math.ceil((roofAreaM2 * 2.2) / 3.0);
  const ripasCount = tileType === 'fibrocimento' ? 0 : Math.ceil((roofAreaM2 * 3.5) / 3.0);
  const vigasPieces = Math.ceil((roofAreaM2 * 0.6) / 3.0);

  const caibroVol = caibrosCount * (0.05 * 0.05 * 3.0);
  const ripaVol = ripasCount * (0.012 * 0.05 * 3.0);
  const vigaVol = vigasPieces * (0.05 * 0.12 * 3.0);

  const totalVol = Number((caibroVol + ripaVol + vigaVol).toFixed(4));
  const totalPieces = caibrosCount + ripasCount + vigasPieces;

  return {
    mode: 'roof',
    title: `Estimativa para Engradamento de Telhado (${roofAreaM2} m²) - Telha ${tileType}`,
    totalPieces,
    totalVolumeM3: totalVol,
    totalDozen: Number((totalPieces / 12).toFixed(2)),
    itemsBreakdown: [
      {
        description: 'Caibros de Pinus 5x5cm x 3,00m',
        quantity: caibrosCount,
        unit: 'peças',
        volumeM3: Number(caibroVol.toFixed(4))
      },
      ...(ripasCount > 0
        ? [
            {
              description: 'Ripas de Pinus 1,2x5cm x 3,00m (amarrilhos)',
              quantity: ripasCount,
              unit: 'peças',
              volumeM3: Number(ripaVol.toFixed(4))
            }
          ]
        : []),
      {
        description: 'Vigas / Terças de Pinus 5x12cm (barras de 3,00m a 4,00m)',
        quantity: vigasPieces,
        unit: 'peças',
        volumeM3: Number(vigaVol.toFixed(4))
      }
    ],
    notes: [
      'Estimativa calculada com 10% de margem técnica para recortes e sobreposições.',
      'Espaçamento padrão considerado: caibros a cada 50cm e terças a cada 1,50m a 2,00m.',
      'Para telhas de fibrocimento ou metálicas, a necessidade de ripas finas é substituída por terças de maior bitola.'
    ]
  };
}

export function calculateFormworkMaterials(
  formworkAreaM2: number,
  boardWidthCm: 30 | 25 | 20 | 15
): CalculationResult {
  const boardAreaM2 = (boardWidthCm / 100) * 3.0;
  const rawBoardCount = formworkAreaM2 / boardAreaM2;
  const boardCount = Math.ceil(rawBoardCount * 1.1); // 10% waste

  const sarrafoCount = Math.ceil(boardCount * 0.5);

  const boardVol = boardCount * (0.025 * (boardWidthCm / 100) * 3.0);
  const sarrafoVol = sarrafoCount * (0.025 * 0.05 * 3.0);

  const totalVol = Number((boardVol + sarrafoVol).toFixed(4));
  const totalPieces = boardCount + sarrafoCount;

  return {
    mode: 'formwork',
    title: `Estimativa para Caixaria e Fôrmas de Concreto (${formworkAreaM2} m²)`,
    totalPieces,
    totalVolumeM3: totalVol,
    totalDozen: Number((totalPieces / 12).toFixed(2)),
    itemsBreakdown: [
      {
        description: `Tábuas de Pinus ${boardWidthCm}cm x 3,00m para fôrma`,
        quantity: boardCount,
        unit: 'peças',
        volumeM3: Number(boardVol.toFixed(4))
      },
      {
        description: 'Sarrafos de Pinus 2,5x5cm x 3,00m para gravatas e travamento',
        quantity: sarrafoCount,
        unit: 'peças',
        volumeM3: Number(sarrafoVol.toFixed(4))
      }
    ],
    notes: [
      'Incluso margem de segurança de 10% para transpasse e recortes.',
      'Recomenda-se o uso de desmoldante ou lona plástica se desejar reaproveitar as tábuas para outras etapas da obra.',
      'Gravatas de travamento espaçadas a cada 50cm a 60cm para suportar a pressão do concreto fresco.'
    ]
  };
}
