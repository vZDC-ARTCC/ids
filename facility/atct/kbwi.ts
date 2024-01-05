import {AirportConfig} from "@/types";

export const bwiAirportConfig: AirportConfig = {
    faaIdentifier: 'BWI',
    icao: 'KBWI',
    towerAirspace: [
        {
            name: 'WEST',
            imageUrl: '/airspace/local/kbwi/kbwi_w',
            notes: [],
        },
        {
            name: 'EAST',
            imageUrl: '/airspace/local/kbwi/kbwi_e',
            notes: [],
        },
    ],
    availableRunways: [
        {
            id: '33L',
            availableApproachTypes: ['ILS', 'RNP-Z','GPS-Y', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '33R',
            availableApproachTypes: ['VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '28',
            availableApproachTypes: ['ILS', 'RNP-Z','GPS-Y', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '15L',
            availableApproachTypes: ['VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '15R',
            availableApproachTypes: ['ILS', 'RNP-Z','GPS-Y', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '10',
            availableApproachTypes: ['ILS', 'RNP-Z','GPS-Y', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
    ],
    flows: [
        {
            name: 'WEST VMC',
            departureRunways: [
                {
                    id: '33R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '33L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },

            ],
            arrivalRunways: [
                {
                    id: '33R',
                    availableApproachTypes: ['VIS'],
                },
                {
                    id: '33L',
                    availableApproachTypes: ['VIS'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'WEST IMC',
            departureRunways: [
                {
                    id: '33R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '33L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },

            ],
            arrivalRunways: [
                {
                    id: '33R',
                    availableApproachTypes: ['ILS', 'RNP-Z','GPS-Y'],
                },
                {
                    id: '33L',
                    availableApproachTypes: ['ILS', 'RNP-Z','GPS-Y'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'EAST VMC',
            departureRunways: [
                {
                    id: '15R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '15L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },

            ],
            arrivalRunways: [
                {
                    id: '15L',
                    availableApproachTypes: ['VIS'],
                },
                {
                    id: '10',
                    availableApproachTypes: ['VIS'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'EAST IMC',
            departureRunways: [
                {
                    id: '15R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '15L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },

            ],
            arrivalRunways: [
                {
                    id: '10',
                    availableApproachTypes: ['ILS', 'RNP-Z','GPS-Y'],
                },
                {
                    id: '15L',
                    availableApproachTypes: ['ILS','GPS'],
                },
            ],
            traconVisibleOptions: [],
        },
    ],


    localControlPositions: ['LCE', 'LCW'],
    sop: '/sop/bwi_sop.pdf',
}
