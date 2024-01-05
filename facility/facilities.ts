import {PCT_CONFIG} from "@/facility/tracon/pct/pct";
import {AirportConfig, TraconConfig} from "@/types";
import {RDU_CONFIG} from "@/facility/tracon/rdu/rdu-tracon";
import {ORF_CONFIG} from "@/facility/tracon/orf/orf-tracon";
import {ACY_CONFIG} from "@/facility/tracon/acy/acy-tracon";
import {dcaAirportConfig} from "@/facility/atct/kdca";
import {iadAirportConfig} from "@/facility/atct/kiad";
import {bwiAirportConfig} from "@/facility/atct/kbwi";
import {adwAirportConfig} from "@/facility/atct/kadw";
import {acyAirportConfig} from "@/facility/atct/kacy";
import {hefAirportConfig} from "@/facility/atct/khef";
import {mtnAirportConfig} from "@/facility/atct/kmtn";
import {orfAirportConfig} from "@/facility/atct/korf";
import {rduAirportConfig} from "@/facility/atct/krdu";
import {ricAirportConfig} from "@/facility/atct/kric";

export const IDS_TRACON_FACILITIES: TraconConfig[] = [
    PCT_CONFIG,
    RDU_CONFIG,
    ORF_CONFIG,
    ACY_CONFIG,
];

export const IDS_ATCT_FACILITIES: AirportConfig[] = [
    dcaAirportConfig,
    iadAirportConfig,
    bwiAirportConfig,
    adwAirportConfig,
    acyAirportConfig,
    hefAirportConfig,
    mtnAirportConfig,
    orfAirportConfig,
    rduAirportConfig,
    ricAirportConfig,
];




