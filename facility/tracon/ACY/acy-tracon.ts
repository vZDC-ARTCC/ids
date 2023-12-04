import {TraconConfig} from "@/types";
import {ACY_ACY} from "@/facility/tracon/ACY/area/acy";


export const ACY_CONFIG: TraconConfig = {
    faaIdentifier: 'PCT',
    name: 'Potomac Consolidated TRACON',
    departureGates: [
        'DQO',
        'OOD',
        'ENO',
        'ATR',
        'SBY',
        'SIE',
        'VCN',
        'ACY',
        'CYN',
        'RBV',
        'COL',
    ],
    areas: [
        ACY_ACY,
    ],
    sectors: [
        {
            // Not sure what the sector letter for this is
            // This is technically ACY_APP not DEP but it shares the same freq with South APP
            name: 'DEPARTURE',
            frequency: '124.600',
            sectorLetter: 'D'
        },
        {
            name: 'SOUTH APP',
            frequency: '124.600',
            sectorLetter: 'S'
        },
        {
            name: 'NORTH APP',
            frequency: '134.425',
            sectorLetter: 'N'
        },
    ],
}