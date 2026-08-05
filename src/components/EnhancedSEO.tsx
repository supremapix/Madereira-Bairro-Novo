import { useEffect } from 'react';
import { COMPANY_DATA } from '../data/company';

export interface EnhancedSEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'product';
  imageUrl?: string;
  jsonLd?: Record<string, any>[];
  noIndex?: boolean;
}

export function EnhancedSEO({
  title,
  description,
  canonicalPath = '',
  keywords = [],
  type = 'website',
  imageUrl,
  jsonLd = [],
  noIndex = false,
}: EnhancedSEOProps) {
  const fullTitle = title
    ? `${title} | ${COMPANY_DATA.name}`
    : `${COMPANY_DATA.name} | Madeira de Pinus em Curitiba - PR`;

  const metaDescription =
    description ||
    'Madeireira Bairro Novo em Curitiba - PR. Distribuidora especialista em Madeira de Pinus, Pinus Tratado Autoclavado, Caibros, Vigas, Tábuas, Madeirite e Decks com entrega rápida em Curitiba e RMC.';

  const canonicalUrl = `${COMPANY_DATA.canonicalUrl}${canonicalPath}`;
  const ogImage = imageUrl || `${COMPANY_DATA.canonicalUrl}/og-image.jpg`;

  const defaultKeywords = [
    'Madeira de Pinus',
    'Madeira de Pinus Curitiba',
    'Pinus Tratado',
    'Pinus Autoclavado',
    'Madeireira Bairro Novo',
    'Caibros e Vigas Curitiba',
    'Tábuas para Caixaria',
    'Madeirite Resinado Plastificado',
    'Deck de Pinus',
    'Pergolado de Pinus',
    'Madeira para Telhado',
    'Sítio Cercado Madeireira',
    'Madeira de Construção Curitiba'
  ];

  const allKeywords = Array.from(new Set([...keywords, ...defaultKeywords])).join(', ');

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper function to create or update meta/link tags
    const setMeta = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    const setLink = (relVal: string, hrefVal: string) => {
      let element = document.querySelector(`link[rel="${relVal}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', relVal);
        document.head.appendChild(element);
      }
      element.setAttribute('href', hrefVal);
    };

    // Standard Meta Tags
    setMeta('name', 'description', metaDescription);
    setMeta('name', 'keywords', allKeywords);
    setMeta('name', 'author', COMPANY_DATA.legalName);
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'geo.region', 'BR-PR');
    setMeta('name', 'geo.placename', 'Curitiba');
    setMeta('name', 'geo.position', `${COMPANY_DATA.geo.latitude};${COMPANY_DATA.geo.longitude}`);
    setMeta('name', 'ICBM', `${COMPANY_DATA.geo.latitude}, ${COMPANY_DATA.geo.longitude}`);

    // Canonical Link
    setLink('canonical', canonicalUrl);

    // OpenGraph Meta Tags
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', metaDescription);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', COMPANY_DATA.name);
    setMeta('property', 'og:locale', 'pt_BR');

    // Twitter Card Meta Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', metaDescription);
    setMeta('name', 'twitter:image', ogImage);

    // Dynamic JSON-LD injection
    const existingJsonLdScripts = document.querySelectorAll('script[type="application/ld+json"][data-dynamic="true"]');
    existingJsonLdScripts.forEach((script) => script.remove());

    // LocalBusiness / Store Base Schema
    const baseLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Store', 'HardwareStore'],
      '@id': `${COMPANY_DATA.canonicalUrl}/#organization`,
      name: COMPANY_DATA.name,
      legalName: COMPANY_DATA.legalName,
      url: COMPANY_DATA.canonicalUrl,
      logo: `${COMPANY_DATA.canonicalUrl}/logo.png`,
      image: ogImage,
      telephone: COMPANY_DATA.phones.landline,
      email: COMPANY_DATA.email,
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
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '12:00'
        }
      ],
      sameAs: [
        COMPANY_DATA.social.googleMaps,
        COMPANY_DATA.social.instagram,
        COMPANY_DATA.social.facebook
      ].filter(Boolean),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '128',
        bestRating: '5',
        worstRating: '1'
      }
    };

    const schemasToInject = [baseLocalBusinessSchema, ...jsonLd];

    schemasToInject.forEach((schemaObj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic', 'true');
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });
  }, [fullTitle, metaDescription, canonicalUrl, ogImage, allKeywords, type, noIndex, jsonLd]);

  return null;
}
