import {AirportConfig, TraconConfig} from "@/types";
import {PCT_CONFIG} from "@/facility/tracon/pct/pct";
import {IAD_CONFIG} from "@/facility/atct/iad";

export enum FacilityType {
    ATCT, TRACON
}

export type FacilityListItem = {
    name: string,
    type: FacilityType,
    config: AirportConfig | TraconConfig,
}

export const FACILITIES: FacilityListItem[] = [
    {
        name: 'PCT',
        type: FacilityType.TRACON,
        config: PCT_CONFIG,
    },
    {
        name: 'IAD',
        type: FacilityType.ATCT,
        config: IAD_CONFIG,
    }
]




