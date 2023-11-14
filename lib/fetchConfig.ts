import {AirportConfig, TraconAreaConfig, TraconConfig} from "@/types";
import {FACILITIES, FacilityType} from "@/facility/facilities";

export function getAtctConfig(id: string): AirportConfig | null {

    const atct = FACILITIES.filter((facility) => facility.type === FacilityType.ATCT && facility.config.id === id);

    if (atct.length === 0) {
        return null;
    }

    return atct[0].config as AirportConfig;

}

export function getTraconConfig(id: string): TraconConfig | null {

    const tracons = FACILITIES.filter((facility) => facility.type === FacilityType.TRACON && facility.config.id === id);

    if (tracons.length === 0) {
        return null;
    }

    return tracons[0].config as TraconConfig;

}

export function getTraconAreaConfig(traconConfig: TraconConfig, areaId: string): TraconAreaConfig | null {

    return traconConfig.areas.find((area) => area.id === areaId) || null;

}