export type Community = {
    name: string,
    num: number
}

export type lot = {
    lotNum: number,
    price: number,
    status: "Available" | "Un-Available",
    community: string,
    frontage: number,
    maxSqFt: number,
    address: string
}