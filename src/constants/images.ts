import homeHeroImg from "../../public/assets/img/icons/hero.jpg"
export const src = {};
type TImageInfo = {src:string,alt:string,img:ImageMetadata}
export const heroImg:{[key:string]:TImageInfo} = {
    home:{
        src:"/assets/img/icons/hero.jpg",
        alt:"",
        img:homeHeroImg
    }
}