import {AirportConfig} from "@/types";

export const iadAirportConfig: AirportConfig = {
    faaIdentifier: 'IAD',
    icao: 'KIAD',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/kiad/kiad.png',
            notes: [
                'Dulles Tower is delegated 2,000 MSL and below within the AML 7 nm Class B surface area plus the area encompassed by eastward extensions from the northern and southern most points terminating at points A & B as depicted.',
            ],
        },
    ],
    availableRunways: [
        {
            id: '01L',
            availableApproachTypes: ['ILS', 'RNP', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '01C',
            availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '01R',
            availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '19L',
            availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '19C',
            availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '19R',
            availableApproachTypes: ['ILS', 'RNP', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '30',
            availableApproachTypes: ['CTL/ILS-01R', 'VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '12',
            availableApproachTypes: ['ILS', 'RNAV', 'VOR', 'VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
    ],
    flows: [
        {
            name: 'NORTH',
            departureRunways: [
                {
                    id: '01R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '01C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '01L',
                    availableApproachTypes: ['ILS', 'RNP', 'VIS',],
                },
                {
                    id: '01C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
                {
                    id: '01R',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'SFRA',
                    choices: ['WEST', 'EAST'],
                },
            ],
        },
        {
            name: 'NORTH/30',
            departureRunways: [
                {
                    id: '01R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '01C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '30',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '01L',
                    availableApproachTypes: ['ILS', 'RNP', 'VIS',],
                },
                {
                    id: '01C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
                {
                    id: '01R',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH',
            departureRunways: [
                {
                    id: '19L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '19C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19L',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
                {
                    id: '19C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
                {
                    id: '19R',
                    availableApproachTypes: ['ILS', 'RNP', 'VIS',],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH/30',
            departureRunways: [
                {
                    id: '19L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '19C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '30',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19L',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
                {
                    id: '19C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
                {
                    id: '19R',
                    availableApproachTypes: ['ILS', 'RNP', 'VIS',],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'NORTH/IMC',
            departureRunways: [
                {
                    id: '01R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '01C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '01L',
                    availableApproachTypes: ['ILS', 'RNP'],
                },
                {
                    id: '01C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
                {
                    id: '01R',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'NORTH/30/IMC',
            departureRunways: [
                {
                    id: '01R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '01C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '30',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '01L',
                    availableApproachTypes: ['ILS', 'RNP'],
                },
                {
                    id: '01C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
                {
                    id: '01R',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH/IMC',
            departureRunways: [
                {
                    id: '19L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '19C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19L',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
                {
                    id: '19C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
                {
                    id: '19R',
                    availableApproachTypes: ['ILS', 'RNP'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH/30/IMC',
            departureRunways: [
                {
                    id: '19L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '19C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '30',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19L',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
                {
                    id: '19C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
                {
                    id: '19R',
                    availableApproachTypes: ['ILS', 'RNP'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'NORTH/NO-01L',
            departureRunways: [
                {
                    id: '01R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '01C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '01C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
                {
                    id: '01R',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'NORTH/30/NO-01L',
            departureRunways: [
                {
                    id: '01R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '01C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '30',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '01C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
                {
                    id: '01R',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH/NO-19R',
            departureRunways: [
                {
                    id: '19L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '19C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19L',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
                {
                    id: '19C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH/30/NO-19R',
            departureRunways: [
                {
                    id: '19L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '19C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '30',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19L',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
                {
                    id: '19C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z', 'VIS',],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'NORTH/IMC/NO-01L',
            departureRunways: [
                {
                    id: '01R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '01C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '01C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
                {
                    id: '01R',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'NORTH/30/IMC/NO-01L',
            departureRunways: [
                {
                    id: '01R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '01C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '30',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '01C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
                {
                    id: '01R',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH/IMC/NO-19R',
            departureRunways: [
                {
                    id: '19L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '19C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
                {
                    id: '19L',
                    availableApproachTypes: ['ILS', 'RNP'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH/30/IMC/NO-19R',
            departureRunways: [
                {
                    id: '19L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '19C',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '30',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19L',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
                {
                    id: '19C',
                    availableApproachTypes: ['ILS', 'RNP-Y', 'RNP-Z'],
                },
            ],
            traconVisibleOptions: [],
        },
    ],
    localControlPositions: ['LCE', 'LCW', 'LCN'],
    sop: '/sop/iad_sop.pdf',
}