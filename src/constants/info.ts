// src/constants/info.ts
export const MAIN_NAME = "Conatumex"
export const MAIN_URL = "https://conatumex-ad03b.web.app";
type TTelephone = {
  label: string;
  num: number;
  str: string;
  formated: string;
  wa: string;
};
export const telephones: { [key: string]: TTelephone } = {
  info: { label: "main", num: 8115339028, str: "+528128927810", formated: "+52 812 892 7810", wa: "528128927810" },
  local: { label: "local", num: 83917589, str: "+5283917589", formated: "+52 839 175 89", wa: "5283917589" },
}
export const telephonesList = Object.values(telephones)
export const email = { info: "info@hoztaxsolution.com" }
export const address = {
  areaServed: [
    {
      "@type": "Country",
      "name": "México"
    },
    {
      "@type": "Place",
      "name": "Monterrey, Nuevo León, México"
    }
  ],
  street: "Enrique Rangel Meléndez #1830 Planta alta, Col. Valle de San Martín",
  locality: "Monterrey",
  region: "Nuevo León",
  country: "MX",
  map: "https://maps.app.goo.gl/waSeM2H34desQ8z26",
  geoLocation: {
    latitude: 25.786763,
    longitude: -100.377424
  },
  openingHours: "Mo-Fr 09:00-14:00",
  postalCode: "64204"
}
export const socialLinks: { [key: string]: string } = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  //   x: "https://x.com/HozTaxSolution"
}
export const listOfSocialLinks = Object.values(socialLinks);