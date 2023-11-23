import {AirportConfig} from "@/types";

export const rduAirportConfig: AirportConfig = {
    faaIdentifier: 'RDU',
    icao: 'KRDU',
    parentTracon: 'RDU',
    parentTraconArea: 'RDU',
    availableRunways: [
        {
            id: '05L',
            availableApproachTypes: ['VIS', 'ILS', 'GPS-Y','RNP-Z'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '05R',
            availableApproachTypes: ['VIS', 'ILS', 'GPS-Y','RNP-Z'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '23R',
            availableApproachTypes: ['VIS', 'ILS', 'GPS-Y','RNP-Z'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '23L',
            availableApproachTypes: ['VIS', 'ILS', 'GPS-Y','RNP-Z'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '14',
            availableApproachTypes: ['VIS'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '32',
            availableApproachTypes: ['VIS', 'GPS'],
            availableDepartureTypes: ['RV'],
        },

    ],
    flows: [
        {
            name: 'WEST',
            departureRunways: [
                {
                    id: '23R',
                    availableDepartureTypes: ['RV'],
                },
                {
                    id: '23L',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '23R',
                    availableApproachTypes: ['VIS', 'ILS', 'GPS-Y', 'RNP-Z'],
                },
                {
                    id: '23L',
                    availableApproachTypes: ['VIS', 'ILS', 'GPS-Y', 'RNP-Z'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'EAST',
            departureRunways: [
                {
                    id: '05L',
                    availableDepartureTypes: ['RV'],
                },
                {
                    id: '05R',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '05L',
                    availableApproachTypes: ['VIS', 'ILS', 'GPS-Y','RNP-Z'],
                },
                {
                    id: '05R',
                    availableApproachTypes: ['VIS', 'ILS', 'GPS-Y','RNP-Z'],
                },
            ],
            traconVisibleOptions: [],
        },
    ],

    localControlPositions: ['LCE', 'LCW'],
    sop: '/sop/rdu_sop.pdf',
    // Not Used as of 11-23-23
    customizableOptions: [],
    sidebarOptions: [],
}