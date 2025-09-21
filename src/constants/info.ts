// src/constants/info.ts
export const MAIN_NAME = "Conatumex"
export const MAIN_URL = "https://conatumex.com";
type TTelephone = {
  label: string;
  num: number;
  str: string;
  formated: string;
  wa: string;
};
export const telephones: { [key: string]: TTelephone } = {
  info: { label: "main", num: 8115339028, str: "+528128927810", formated: "+52 812 892 7810", wa: "528128927810" },
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
  locality: "Monterrey",
  region: "Nuevo León",
  country: "MX"
}
export const socialLinks:{[key:string]:string} = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
//   x: "https://x.com/HozTaxSolution"
}
export const listOfSocialLinks = Object.values(socialLinks);