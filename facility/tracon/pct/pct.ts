import {TraconConfig} from "@/types";
import {PCT_SHD} from "@/facility/tracon/pct/area/shd";

export const PCT_CONFIG: TraconConfig = {
    name: 'PCT',
    longName: 'Potomac Consolidated TRACON',
    departureGates: [
        'SWANN',
        'SOOKI',
        'PALEO',
        'AGARD',
        'WHINO',
        'COLIN',
        'JCOBY',
        'RAZZA',
        'WOOLY',
        'JERES',
        'MCRAY',
        'BUFFR',
        'MRB',
        'BUNZZ',
        'RAMAY',
        'RNLDI',
        'OTTTO',
        'LDN',
        'CSN',
        'HANEY',
        'FLUKY',
        'MOL',
        'HAFNR',
        'GVE',
        'BRV',
        'BUTRZ',
        'POOCH'
    ],
    areas: [
        PCT_SHD,
    ]
}