interface Service {
  "@type": "Service";
  name: string;
  description?: string;
  position: number;
}

export interface ItemListJsonLd {
  "@context": "https://schema.org";
  "@type": "ItemList";
  itemListElement: Service[];
}

interface ProfessionalService {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: Record<string, any>;
  areaServed?: Record<string, any>[]; // debe ser array
  sameAs?: string[];
}

export type TJsonLd = ItemListJsonLd | ProfessionalService | null;