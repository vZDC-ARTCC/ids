import {AirportConfig} from "@/types";
export const phfAirportConfig: AirportConfig = {
    faaIdentifier: 'PHF',
    icao: 'KPHF',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/kphf/kphf.png',
            notes: [
                'D GND-2500,'
            ],
        },
    ],
    availableRunways: [
        {
            id: '7',
            availableApproachTypes: ['VIS', 'ILS', 'GPS'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '25',
            availableApproachTypes: ['VIS', 'ILS', 'GPS'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '2',
            availableApproachTypes: ['VIS','GPS'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '20',
            availableApproachTypes: ['VIS', 'ILS', 'GPS'],
            availableDepartureTypes: ['RV'],
        },
    ],
    flows: [
        {
            name: 'NORTH VMC',
            departureRunways: [
                {
                    id: '2',
                    availableDepartureTypes: ['RV'],
                },
                {
                    id: '7',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '2',
                    availableApproachTypes: ['VIS','GPS'],
                },
                {
                    id: '7',
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
        {
            name: 'SOUTH VMC',
            departureRunways: [
                {
                    id: '20',
                    availableDepartureTypes: ['RV'],
                },
                {
                    id: '25',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '20',
                    availableApproachTypes: ['VIS', 'ILS', 'GPS'],
                },
                {
                    id: '25',
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
