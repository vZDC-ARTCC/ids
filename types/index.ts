export type AirportConfig = {
    id: string,
    icao: string,
    parentTracon: string,
    parentTraconArea: string,
    availableRunways: AvailableRunway[],
    customizableOptions: CustomizableOption[],
    flows: AirportFlowConfig[],
    localControlPositions: string[],
}

export type AirportFlowConfig = {
    name: string,
    arrivalRunways: AvailableRunway[],
    departureRunways: AvailableRunway[],
    traconVisibleOptions: CustomizableOption[],
}

export type AvailableRunway = {
    id: string,
    availableApproachTypes?: string[],
    availableDepartureTypes?: string[],
}

export type TraconConfig = {
    id: string,
    name: string,

}

export type TraconAreaConfig = {
    id: string,
    name: string,
    majorFieldIcao: string,
    minorFieldsIcao: string[],
    customizableOptions: CustomizableOption[],
}

export type CustomizableOption = {
    name: string,
    choices: string[],
}