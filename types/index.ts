export type AirportConfig = {
    id: string,
    icao: string,
    parentTracon: string,
    parentTraconArea: string,
    availableRunways: AvailableRunway[],
    customizableOptions: CustomizableOption[],
    flows: AirportFlowConfig[],
    localControlPositions: string[],
    sop: string,
    sidebarOptions: SidebarOption[],
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
    departureGates: string[],
    areas: TraconAreaConfig[],
}

export type TraconAreaConfig = {
    id: string,
    name: string,
    majorFieldIcao: string,
    minorFieldsIcao: string[],
    sop: string,
    sectors: TraconSectorConfig[],
    customizableOptions: CustomizableOption[],

}

export type TraconSectorConfig = {
    name: string,
    frequency: string,
}

export type CustomizableOption = {
    name: string,
    choices: string[],
}

export type SidebarOption = {
    name: string,
    resourceLink: string,
}