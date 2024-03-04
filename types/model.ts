import { StaticImageData } from "next/image";
export type ModelDef = {
    name: string,
    URL: StaticImageData,
    bed: number,
    bath: number,
    sqft: number,
    price: number
}

export type Models = [{
    name: string,
    URL: StaticImageData,
    bed: number,
    bath: number,
    sqft: number,
    price: string
}]