import {AirportConfig} from "@/types/airport";
import {AirspaceConfig} from "@/types/common";
import {LoaConfig} from "@/types/common";

export type EnrouteConfig = {
    id: string,
    name: string,
    sopLink: string,
    sectors: EnrouteSectorConfig[],
    presets: EnroutePreset[],
    airspace: AirspaceConfig[],
    loas: LoaConfig[],
    airportListPriority: AirportConfig[],
}

export type EnrouteSectorConfig = {
    id: string,
    name: string,
    frequency: string,
    externalArtcc?: boolean,
    airspace: AirspaceConfig[],
}

export type EnroutePreset = {
    name: string,
    sectorIds: string[],
}