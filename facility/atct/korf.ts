import {AirportConfig} from "@/types";

export const orfAirportConfig: AirportConfig = {
    faaIdentifier: 'ORF',
    icao: 'KORF',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/korf/korf.png',
            notes: [
                'Norfolk ATCT is delegated the airspace within 5nm of the airport and up to but not including 3000’',
            ],
        },
    ],
    availableRunways: [
        {
            id: '05',
            availableApproachTypes: ['RIV-VIS', 'ILS', 'GPS-Z','RNP-Y'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '23',
            availableApproachTypes: ['VIS', 'ILS', 'GPS-Z','RNP-Y'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '14',
            availableApproachTypes: ['VIS', 'GPS','VOR'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '32',
            availableApproachTypes: ['VIS', 'GPS','VOR'],
            availableDepartureTypes: ['RV'],
        },
    ],
    flows: [
        {
            name: 'WEST VMC',
            departureRunways: [
                {
                    id: '23',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '23',
                    availableApproachTypes: ['VIS', 'ILS', 'GPS-Z','RNP-Y'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: '14/32',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
        {
            name: 'WEST IMC',
            departureRunways: [
                {
                    id: '23',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '23',
                    availableApproachTypes: ['ILS', 'GPS-Z','RNP-Y'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: '14/32',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
        {
            name: 'EAST VMC',
            departureRunways: [
                {
                    id: '05',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '05',
                    availableApproachTypes: ['RIV-VIS', 'ILS', 'GPS-Z','RNP-Y'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: '14/32',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
        {
            name: 'EAST IMC',
            departureRunways: [
                {
                    id: '05',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '05',
                    availableApproachTypes: ['ILS', 'GPS-Z','RNP-Y'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: '14/32',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
    ],
    localControlPositions: ['LC'],
    sop: '/sop/orf_sop.pdf',
}
