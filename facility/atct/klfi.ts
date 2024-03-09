import {AirportConfig} from "@/types";
export const lfiAirportConfig: AirportConfig = {
    faaIdentifier: 'NGU',
    icao: 'KNGU',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/klfi/klfi.png',
            notes: [
                'D GND-2500,'
            ],
        },
    ],
    availableRunways: [
        {
            id: '8',
            availableApproachTypes: ['VIS', 'ILS-Y', 'HI-ILS-Z', 'GPS', 'TACAN-Y', 'HI-TACAN-Z'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '26',
            availableApproachTypes: ['VIS', 'ILS-Y', 'HI-ILS-Z', 'GPS', 'TACAN-Y', 'HI-TACAN-Z'],
            availableDepartureTypes: ['RV'],
        },
    ],
    flows: [
        {
            name: 'EAST VMC',
            departureRunways: [
                {
                    id: '8',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '8',
                    availableApproachTypes: ['VIS', 'ILS-Y', 'HI-ILS-Z', 'GPS', 'TACAN-Y', 'HI-TACAN-Z'],
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
            name: 'WEST VMC',
            departureRunways: [
                {
                    id: '26',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '26',
                    availableApproachTypes: ['VIS', 'ILS-Y', 'HI-ILS-Z', 'GPS', 'TACAN-Y', 'HI-TACAN-Z'],
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
