import {AirportConfig} from "@/types";

export const bwiAirportConfig: AirportConfig = {
    faaIdentifier: 'BWI',
    icao: 'KBWI',
    parentTracon: 'PCT',
    parentTraconArea: 'CHP',
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
                    availableApproachTypes: ['ILS', 'RNP-Z','GPS-Y', 'VIS'],
                },
                {
                    id: '15L',
                    availableApproachTypes: ['VIS'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'WEST IMC',
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
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'EAST VMC',
            departureRunways: [
                {
                    id: '28',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '33R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },

            ],
            arrivalRunways: [
                {
                    id: '33L',
                    availableApproachTypes: ['ILS', 'RNP-Z','GPS-Y', 'VIS'],
                },
                {
                    id: '33R',
                    availableApproachTypes: ['VIS'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'EAST IMC',
            departureRunways: [
                {
                    id: '28',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '33R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },

            ],
            arrivalRunways: [
                {
                    id: '33L',
                    availableApproachTypes: ['ILS', 'RNP-Z','GPS-Y', 'VIS'],
                },
            ],
            traconVisibleOptions: [],
        },
    ],


    localControlPositions: ['LCE', 'LCW'],
    customizableOptions: [],
    sop: '/sop/bwi_sop.pdf',
    sidebarOptions: [],
}