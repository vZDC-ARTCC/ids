import {AirportConfig} from "@/types";

export const mtnAirportConfig: AirportConfig = {
    faaIdentifier: 'MTN',
    icao: 'KMTN',
    parentTracon: 'PCT',
    parentTraconArea: 'CHP',
    availableRunways: [
        {
            id: '15',
            availableApproachTypes: ['LOC', 'GPS', 'VOR', 'VIS',],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '33',
            availableApproachTypes: ['ILS', 'GPS', 'VIS',],
            availableDepartureTypes: ['RV'],
        },
    ],
    flows: [
        {
            name: 'EAST',
            departureRunways: [
                {
                    id: '15',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '15',
                    availableApproachTypes: ['LOC', 'GPS', 'VOR', 'VIS',],
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
            name: 'WEST',
            departureRunways: [
                {
                    id: '33',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '33',
                    availableApproachTypes: ['ILS', 'GPS', 'VIS',],
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
    customizableOptions: [],
    sop: '/sop/pct_chp_sop.pdf',
    sidebarOptions: [],
}