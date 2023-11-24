import {TraconConfig} from "@/types";
import {ORF_ORF} from "@/facility/tracon/orf/area/orf-area";

export const ORF_CONFIG: TraconConfig = {
    faaIdentifier: 'ORF',
    name: 'Norfolk TRACON',
    departureGates: [
        '',
    ],
    sectors: [
        {
            name: 'DEPARTURE',
            frequency: '125.200',
            sectorLetter: 'G'
        },
        {
            name: 'WEST FEEDER',
            frequency: '119.450',
            sectorLetter: 'W'
        },
        {
            name: 'SOUTH FEEDER',
            frequency: '127.900',
            sectorLetter: 'S'
        },
        {
            name: 'EAST FEEDER',
            frequency: '126.050',
            sectorLetter: 'E'
        },
        {
            name: 'ARRIVAL',
            frequency: '118.900',
            sectorLetter: 'R'
        },
    ],
    areas: [
        ORF_ORF,
    ],

}