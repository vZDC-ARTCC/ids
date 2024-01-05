import {TraconConfig} from "@/types";
import {ACY_ACY} from "@/facility/tracon/acy/area/acy";


export const ACY_CONFIG: TraconConfig = {
    faaIdentifier: 'ACY',
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
    presets: [],
    loas: [
        {
            targetFacility: 'ZNY',
            link: '/loa/acy/zny.pdf'
        },
    ],
    sectors: [
        {
            // Not sure what the sector letter for this is
            // This is technically ACY_APP not DEP but it shares the same freq with South APP
            name: 'DEPARTURE',
            frequency: '124.600',
            sectorLetter: 'D',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/acy/acy.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'SOUTH APP',
            frequency: '124.600',
            sectorLetter: 'S',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/acy/acy.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'NORTH APP',
            frequency: '134.425',
            sectorLetter: 'N',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/acy/acy.png',
                    notes: [],
                },
            ],
        },
    ],
}