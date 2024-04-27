import {AirportConfig} from "@/types";

export const nguAirportConfig: AirportConfig = {
    faaIdentifier: 'NGU',
    icao: 'KNGU',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/kngu/kngu.png',
            notes: [
                'D GND-1999,'
            ],
        },
    ],
    availableRunways: [
        {
            id: '10',
            availableApproachTypes: ['VIS', 'ILS', 'GPS'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '28',
            availableApproachTypes: ['VIS','GPS'],
            availableDepartureTypes: ['RV'],
        },
    ],
    flows: [
        {
            name: 'WEST VMC',
            departureRunways: [
                {
                    id: '28',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '28',
                    availableApproachTypes: ['VIS','GPS'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'TOWER',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
        {
            name: 'EAST VMC',
            departureRunways: [
                {
                    id: '10',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '10',
                    availableApproachTypes: ['VIS', 'ILS', 'GPS'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'TOWER',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
    ],
    localControlPositions: ['LC'],
    sop: '/sop/orf_sop.pdf',
}
