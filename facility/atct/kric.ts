import {AirportConfig} from "@/types";

export const ricAirportConfig: AirportConfig = {
    faaIdentifier: 'RIC',
    icao: 'KRIC',
    towerAirspace: [
        {
            name: 'NORTH',
            imageUrl: '/airspace/local/kric/kric_n.png',
            notes: [],
        },
        {
            name: 'SOUTH',
            imageUrl: '/airspace/local/kric/kric_s.png',
            notes: [],
        },
    ],
    availableRunways: [
        {
            id: '16',
            availableApproachTypes: ['ILS', 'GPS-Z', 'RNP-Y', 'VOR', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '34',
            availableApproachTypes: ['ILS', 'GPS-Z', 'RNP-Y', 'VOR', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '20',
            availableApproachTypes: ['GPS-Z', 'RNP-Y', 'VOR', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '02',
            availableApproachTypes: ['ILS', 'GPS-Z', 'RNP-Y', 'VOR', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
    ],
    flows: [
        {
            name: 'NORTH',
            departureRunways: [
                {
                    id: '02',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '34',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '02',
                    availableApproachTypes: ['ILS', 'GPS-Z', 'RNP-Y', 'VOR', 'VIS',],
                },
                {
                    id: '34',
                    availableApproachTypes: ['ILS', 'GPS-Z', 'RNP-Y', 'VOR', 'VIS',],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH',
            departureRunways: [
                {
                    id: '20',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '16',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '20',
                    availableApproachTypes: ['GPS-Z', 'RNP-Y', 'VOR', 'VIS',],
                },
                {
                    id: '16',
                    availableApproachTypes: ['ILS', 'GPS-Z', 'RNP-Y', 'VOR', 'VIS',],
                },
            ],
            traconVisibleOptions: [],
        },
    ],
    localControlPositions: ['LC'],
    sop: '/sop/ric_sop.pdf',
}