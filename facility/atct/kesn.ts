import {AirportConfig} from "@/types";

export const esnAirportConfig: AirportConfig = {
    faaIdentifier: 'ESN',
    icao: 'KESN',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/kesn/kesn.png',
            notes: [
                'At or below 2,500',
            ],
        },
    ],
    availableRunways: [
        {
            id: '15',
            availableApproachTypes: ['GPS', 'VIS'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '33',
            availableApproachTypes: ['GPS', 'VIS'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '22',
            availableApproachTypes: ['GPS', 'VIS'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '4',
            availableApproachTypes: ['ILS', 'GPS', 'VIS'],
            availableDepartureTypes: ['RV'],
        },
    ],
    flows: [
        {
            name: 'NORTH',
            departureRunways: [
                {
                    id: '4',
                    availableDepartureTypes: ['RV'],
                },
                {
                    id: '33',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '4',
                    availableApproachTypes: ['ILS', 'GPS', 'VIS'],
                },
                {
                    id: '33',
                    availableApproachTypes: ['GPS', 'VIS'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'TOWER STATUS',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
        {
            name: 'SOUTH',
            departureRunways: [
                {
                    id: '15',
                    availableDepartureTypes: ['RV'],
                },
                {
                    id: '22',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '15',
                    availableApproachTypes: ['GPS', 'VIS'],
                },
                {
                    id: '22',
                    availableApproachTypes: ['GPS', 'VIS'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'TOWER STATUS',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
    ],
    localControlPositions: ['LC'],
    sop: '/sop/pct_chp_sop.pdf',
}