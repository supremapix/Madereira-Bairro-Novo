export interface CompanyInfo {
  name: string;
  legalName: string;
  cnpj: string;
  canonicalUrl: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    formatted: string;
  };
  phones: {
    landline: string;
    landlineRaw: string;
    whatsapp: string;
    whatsappRaw: string;
  };
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  social: {
    instagram?: string;
    facebook?: string;
    googleMaps: string;
    directionsUrl: string;
    reviewUrl: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  dimensionsAvailable: string[];
  applications: string[];
  advantages: string[];
  imageUrl: string;
  imageAlt: string;
  priceStartingFrom?: string;
  treatmentType: 'Serrado In Natura' | 'Bruta de Serra' | 'Seco em Estufa' | 'Geral';
  isCornerstoneProduct?: boolean;
}

export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  type: 'bairro' | 'cidade';
  zone?: string; // e.g. "Zona Sul", "Zona Norte", "Região Metropolitana"
  cepRange?: string;
  estimatedDeliveryTime: string;
  popularLandmarks?: string[];
  description: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  relatedProducts: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
  productMentioned?: string;
}
