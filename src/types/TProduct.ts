import type { ImageMetadata } from "astro";


export type TProductData = {
  id: string;
  title: string;
  name: string;
  price?: number;
  shortDescription: string;
  description: string;
  imgSrc: string;
  altText: string;
  linkCompras?: {
    shop: string;
    url: string;
  }[];
};
export type TProduct = TProductData & {imgData:ImageMetadata};

