import type {Props as THero} from "../../components/Hero.astro";
import type { TJsonLd } from "../../types/TJsonLd";
import { heroImg } from "../images";
import { address, MAIN_URL, telephones } from "../info";
import { logoChico } from "../logoUrl";

export const heroHome:THero ={
  title:"¡Bienvenidos a nuestra tienda!",
  description:"En Génesis del Norte, Conatumex, tenemos una amplia experiencia en la comercialización de productos naturistas.",
  img:heroImg.home.img,
  btn:{
    text: "Ver productos",
    href: "/productos",
  }
};
export const homeJsonLd:TJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${MAIN_URL}#organization`,
      "name": "Génesis del Norte, Conatumex",
      "url": MAIN_URL,
      "logo": logoChico,
      "sameAs": [
        "https://es-la.facebook.com/genessis.conatumex",
        "https://wa.me/528128927810"
      ]
    },
    {
      "@type": "WebSite",
      "url": MAIN_URL,
      "name": "Génesis del Norte, Conatumex",
      "publisher": {
        "@id": `${MAIN_URL}#organization`
      }
    },
    {
      "@type": "Store",
      "name": "Sucursal Monterrey - Génesis del Norte",
      "image": `${MAIN_URL}/${heroImg.home.src}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.street,
        "addressLocality": address.locality,
        "addressRegion": address.region,
        "postalCode": address.postalCode,
        "addressCountry": address.country
      },
      "telephone": `(81) ${telephones.local.num}`,
      "openingHours": address.openingHours,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": address.geoLocation.latitude,
        "longitude": address.geoLocation.longitude
      },
      "hasMap": address.map
    }
  ]
};
