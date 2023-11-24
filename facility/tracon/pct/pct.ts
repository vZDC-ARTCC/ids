import {TraconConfig} from "@/types";
import {PCT_SHD} from "@/facility/tracon/pct/area/shd";

export const PCT_CONFIG: TraconConfig = {
    faaIdentifier: 'PCT',
    name: 'Potomac Consolidated TRACON',
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
    ],
    sectors: [
        {
            name: 'ASPER',
            frequency: '125.050',
            sectorLetter: 'A'
        },
        {
            name: 'TILLY',
            frequency: '126.650',
            sectorLetter: 'T',
        },
        {
            name: 'BARIN',
            frequency: '128.525',
            sectorLetter: 'B',
        },
        {
            name: 'BINNS',
            frequency: '133.000',
            sectorLetter: 'V',
        },
        {
            name: 'BRSTO',
            frequency: '120.825',
            sectorLetter: 'O',
        },
        {
            name: 'IADFE',
            frequency: '125.800',
            sectorLetter: 'X',
        },
        {
            name: 'IADFC',
            frequency: '134.200',
            sectorLetter: 'S'
        },
        {
            name: 'IADFW',
            frequency: '135.775',
            sectorLetter: 'U'
        },
        {
            name: 'LUCKE',
            frequency: '126.825',
            sectorLetter: 'Z',
        },
        {
            name: 'MANNE',
            frequency: '120.450',
            sectorLetter: 'N',
        },
        {
            name: 'MULRR',
            frequency: '126.100',
            sectorLetter: 'M',
        },
        {
            name: 'RCOLA',
            frequency: '135.775',
            sectorLetter: 'R',
        },
    ],
}