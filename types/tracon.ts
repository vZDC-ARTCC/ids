import {AirportConfig} from "@/types/airport";
import {AirspaceConfig, CustomizableOption, LoaConfig} from "@/types/common";

export type TraconConfig = {
    faaIdentifier: string,
    name: string,
    departureGates: string[],
    areas: TraconAreaConfig[],
    sectors: TraconSectorConfig[],
    presets: TraconPreset[],
    loas: LoaConfig[],
}

export type TraconAreaConfig = {
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

export type TraconPreset = {
    name: string,
    sectorNames: string[],
}