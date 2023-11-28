import {TraconConfig} from "@/types";
import {PCT_SHD} from "@/facility/tracon/pct/area/shd";
import {PCT_MTV} from "@/facility/tracon/pct/area/mtv";
import {PCT_CHP} from "@/facility/tracon/pct/area/chp";

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
        PCT_MTV,
        PCT_CHP,
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
        {
            name: 'OJAAY',
            frequency: '119.850',
            sectorLetter: 'J',
        },
        {
            name: 'ENSUE',
            frequency: '124.200',
            sectorLetter: 'E',
        },
        {
            name: 'DEALE',
            frequency: '128.350',
            sectorLetter: 'D',
        },
        {
            name: 'LURAY',
            frequency: '118.675',
            sectorLetter: 'L',
        },
        {
            name: 'DCAFR',
            frequency: '124.700',
            sectorLetter: 'V',
        },
        {
            name: 'FLUKY',
            frequency: '121.050',
            sectorLetter: 'F',
        },
        {
            name: 'TYSON',
            frequency: '118.950',
            sectorLetter: 'Y',
        },
        {
            name: 'KRANT',
            frequency: '125.650',
            sectorLetter: 'K',
        },
        {
            name: 'ADWAR',
            frequency: '128.000',
            sectorLetter: 'A',
        },
        {
            name: 'GRACO',
            frequency: '124.550',
            sectorLetter: 'G',
        },
        {
            name: 'WOOLY',
            frequency: '128.700',
            sectorLetter: 'W',
        },
        {
            name: 'BELAY',
            frequency: '125.525',
            sectorLetter: 'B',
        },
        {
            name: 'BUFFR',
            frequency: '133.850',
            sectorLetter: 'H',
        },
        {
            name: 'PALEO',
            frequency: '133.750',
            sectorLetter: 'P',
        },
        {
            name: 'BWIFS',
            frequency: '119.700',
            sectorLetter: 'S',
        },
        {
            name: 'BWIFN',
            frequency: '119.000',
            sectorLetter: 'N',
        },


    ],
}