export type AirportConfig = {
    faaIdentifier: string,
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
    faaIdentifier: string,
    name: string,
    departureGates: string[],
    areas: TraconAreaConfig[],
    sectors: TraconSectorConfig[],
    presets: TraconPreset[],
}

export type TraconPreset = {
    name: string,
    sectorNames: string[],
}

export type TraconAreaConfig = {
    id: string,
    faaIdentifier: string,
    name: string,
    majorFields: AirportConfig[],
    minorFields: AirportConfig[],
    sop: string,
    areaMaps: AirspaceConfig[],
    customizableOptions: CustomizableOption[],
}

export type TraconSectorConfig = {
    name: string,
    frequency: string,
    sectorLetter: string,
    airspaceData: AirspaceConfig[],
}

export type AirspaceConfig = {
    name: string,
    notes: string[],
    imageUrl: string,
}

export type CustomizableOption = {
    name: string,
    choices: string[],
}

export type SidebarOption = {
    name: string,
    resourceLink: string,
}

export type Chart = {
    name: string,
    category: string,
    url: string,
}

export type PreferredRoute = {
    origin: string,
    route: string,
    destination: string,
    hours1?: string,
    hours2?: string,
    hours3?: string,
    type?: string,
    area?: string,
    altitude?: string,
    aircraft?: string,
    flow?: string,
    seq?: number,
    d_artcc: string,
    a_artcc: string,
}

export type VatsimATISConnection = {
    cid: string,
    name: string,
    callsign: string,
    frequency: string,
    facility: number,
    rating: number,
    server: string,
    visual_range: number,
    atis_code: string,
    text_atis: string[],
    last_updated: string,
    logon_time: string,
}