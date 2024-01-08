import {AirspaceConfig, CustomizableOption} from "@/types/index";

export type AirportConfig = {
    faaIdentifier: string,
    icao: string,
    availableRunways: AvailableRunway[],
    flows: AirportFlowConfig[],
    localControlPositions: string[],
    towerAirspace: AirspaceConfig[],
    sop: string,
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