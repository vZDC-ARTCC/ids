import {AirportConfig} from "@/types";

export const acyAirportConfig: AirportConfig = {
    faaIdentifier: 'ACY',
    icao: 'KACY',
    parentTracon: 'ACY',
    parentTraconArea: 'ACY',
    availableRunways: [
        {
            id: '13',
            availableApproachTypes: ['ILS', 'GPS-Y', 'RNP-Z', 'VOR', 'VIS',],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '31',
            availableApproachTypes: ['ILS', 'GPS-Y', 'RNP-Z', 'VOR', 'VIS',],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '22',
            availableApproachTypes: ['VOR', 'GPS', 'VIS',],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '04',
            availableApproachTypes: ['VOR', 'GPS', 'VIS',],
            availableDepartureTypes: ['RV'],
        },
    ],
    flows: [
        {
            name: 'EAST',
            departureRunways: [
                {
                    id: '13',
                    availableDepartureTypes: ['RV'],
                },
                {
                    id: '04',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '13',
                    availableApproachTypes: ['ILS', 'GPS-Y', 'RNP-Z', 'VOR', 'VIS',],
                },
                {
                    id: '04',
                    availableApproachTypes: ['VOR', 'GPS', 'VIS',],
                },

            ],
            traconVisibleOptions: [
                {
                    name: 'OTHER APP',
                    choices: ['RADAR-1 ASR'],
                },
            ],
        },
        {
            name: 'WEST',
            departureRunways: [
                {
                    id: '31',
                    availableDepartureTypes: ['RV'],
                },
                {
                    id: '22',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '31',
                    availableApproachTypes: ['ILS', 'GPS-Y', 'RNP-Z', 'VOR', 'VIS',],
                },
                {
                    id: '22',
                    availableApproachTypes: ['VOR', 'GPS', 'VIS',],
                },

            ],
            traconVisibleOptions: [
                {
                    name: 'OTHER APP',
                    choices: ['RADAR-1 ASR'],
                },
            ],
        },
    ],
    localControlPositions: ['LC'],
    customizableOptions: [],
    sop: '/sop/acy_sop.pdf',
    sidebarOptions: [],
}

