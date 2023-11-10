export type TraconConfig = {
    name: string,
    longName: string,
    departureGates: string[],
    areas: TraconAreaConfig[],
}

export type TraconAreaConfig = {
    name: string,
    sectors: TraconSectorConfig[],
}

export type TraconSectorConfig = {
    name: string,
    frequency: string,
}

export type AirportConfig = {
    name: string,
    icao: string,
    parentTracon: string,
    parentTraconArea: string,
    runways: string[],
    flows: AirportFlowConfig[],
    positions: AirportPositionConfig[],
}

export type AirportPositionConfig = {
    name: string,
    longName: string,
    type: AirportPositionType,
}

export type AirportFlowConfig = {
    name: string,
    departureRunways: string[],
    arrivalRunways: string[],
}

export enum AirportPositionType {
    DELIVERY, METERING, RAMP, GROUND, TOWER
}