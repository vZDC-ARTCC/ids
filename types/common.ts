export type CustomizableOption = {
    name: string,
    choices: string[],
}
export type AirspaceConfig = {
    name: string,
    notes: string[],
    imageUrl: string,
}

export type LoaConfig = {
    targetFacility: string,
    link: string,
}

export type AirportChange = {
    icao: string,
    type: "atis" | "flow" | "metar",
}