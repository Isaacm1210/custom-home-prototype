import { StaticImageData } from "next/image";
export type ModelDef = {
    name: string,
    URL: StaticImageData,
    bed: number,
    bath: number,
    sqft: number,
    price: string
}

export type Models = [{
    name: string,
    URL: StaticImageData,
    bed: number,
    bath: number,
    sqft: number,
    price: string
}]