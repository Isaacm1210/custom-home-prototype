export type Community = {
    name: string,
    num: number
}

export type lot = {
    lotNum: number | "N/A",
    price: number  | "N/A",
    status: "Available" | "Un-Available" | "N/A",
    community: string | "N/A",
    frontage: number | "N/A",
    maxSqFt: number | "N/A",
    address: string | "N/A"
}