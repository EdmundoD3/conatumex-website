// schema/services.ts
import productService from "../../components/db/productService";
import { MAIN_NAME, MAIN_URL, telephones, email, listOfSocialLinks } from "../../constants/info";
import type { StoreServiceJsonLd, TJsonLd } from "../../types/TJsonLd";
const products = productService.getAll();

export const defaultJsonLd: StoreServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": MAIN_NAME,
  "url": MAIN_URL,
  "logo": `${MAIN_URL}/assets/big-logo.jpg`,
  "description": "Empresa de productos naturales: pomadas para los dolores, suplementos y más. Envíos a todo México.",
  "telephone": String(telephones.info.num),
  "email": email.info,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Centro",
    "addressLocality": "Monterrey",
    "addressRegion": "Nuevo León",
    "postalCode": "64000",
    "addressCountry": "MX"
  },
  "areaServed": [
    { "@type": "Country", "name": "México" }
  ],
  "sameAs": listOfSocialLinks,
  "additionalType": "https://schema.org/HealthAndBeautyBusiness"
};

// JSON-LD con @graph (Store + ItemList)
export const productosJsonLd: TJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      name: MAIN_NAME,
      url: MAIN_URL,
      logo: `${MAIN_URL}/assets/big-logo.jpg`,
      description:
        "Empresa de productos naturales: pomadas para los dolores, suplementos y más. Envíos a todo México.",
      telephone: String(telephones.info.num),
      email: email.info,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Centro",
        addressLocality: "Monterrey",
        addressRegion: "Nuevo León",
        postalCode: "64000",
        addressCountry: "MX",
      },
      areaServed: [{ "@type": "Country", name: "México" }],
      sameAs: listOfSocialLinks,
      additionalType: "https://schema.org/HealthAndBeautyBusiness",
    },
    {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${MAIN_URL}/product/${product.id}`,
        item: {
          "@type": "Product",
          name: product.title,
          description: product.shortDescription,
          image: `${MAIN_URL}${product.imgSrc}`,
          url: `${MAIN_URL}/product/${product.id}`,
          offers: {
            "@type": "Offer",
            url:
              product.linkCompras?.[0]?.url ??
              `${MAIN_URL}/product/${product.id}`,
            priceCurrency: "MXN", // Si agregas precios, pon el valor aquí
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
  ],
};

// JSON-LD con @graph (Store + ItemList)
export const jsonLd: TJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      name: MAIN_NAME,
      url: MAIN_URL,
      logo: `${MAIN_URL}/assets/big-logo.jpg`,
      description:
        "Empresa de productos naturales: pomadas para los dolores, suplementos y más. Envíos a todo México.",
      telephone: String(telephones.info.num),
      email: email.info,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Centro",
        addressLocality: "Monterrey",
        addressRegion: "Nuevo León",
        postalCode: "64000",
        addressCountry: "MX",
      },
      areaServed: [{ "@type": "Country", name: "México" }],
      sameAs: listOfSocialLinks,
      additionalType: "https://schema.org/HealthAndBeautyBusiness",
    },
    {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${MAIN_URL}/product/${product.id}`,
        item: {
          "@type": "Product",
          name: product.title,
          description: product.shortDescription,
          image: `${MAIN_URL}${product.imgSrc}`,
          url: `${MAIN_URL}/product/${product.id}`,
          offers: {
            "@type": "Offer",
            url:
              product.linkCompras?.[0]?.url ??
              `${MAIN_URL}/product/${product.id}`,
            priceCurrency: "MXN", // Si agregas precios, pon el valor aquí
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
  ],
};


export const contactJsonLd: StoreServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "additionalType": "https://schema.org/HealthAndBeautyBusiness",
  name: MAIN_NAME,
  url: MAIN_URL,
  logo: `${MAIN_URL}/assets/big-logo.jpg`,
  description: "Sucursal en Monterrey de productos naturales: pomadas, suplementos y más.",
  telephone: String(telephones.info.num),
  email: email.info,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Enrique Rangel Meléndez #1830 Planta alta, Col. Valle de San Martín",
    addressLocality: "Monterrey",
    addressRegion: "Nuevo León",
    postalCode: "64208",
    addressCountry: "MX",
  },
  openingHours: "Mo-Fr 09:00-14:00",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.786772,
    longitude: -100.379992,
  },
  hasMap: "https://www.google.com/maps/place/G%C3%A9nesis+del+Norte,+Conatumex/@25.786772,-100.379992",
  sameAs: listOfSocialLinks,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+52-81-8391-7589",
      contactType: "customer service",
      availableLanguage: ["Spanish"],
    },
    {
      "@type": "ContactPoint",
      url: "https://wa.me/528128927810",
      contactType: "WhatsApp",
      availableLanguage: ["Spanish"],
    },
    {
      "@type": "ContactPoint",
      url: "https://es-la.facebook.com/genessis.conatumex",
      contactType: "Facebook",
    },
    {
      "@type": "ContactPoint",
      url: "https://listado.mercadolibre.com.mx/_CustId_309975486",
      contactType: "Mercado Libre",
    },
  ],
};