import {AirportConfig} from "@/types";

export const jyoAirportConfig: AirportConfig = {
    faaIdentifier: 'JYO',
    icao: 'JYO',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/kjyo/kjyo.png',
            notes: [
                '',
            ],
        },
    ],
    availableRunways: [
        {
            id: '17',
            availableApproachTypes: ['LOC', 'GPS', 'ILS', 'VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '35',
            availableApproachTypes: ['VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
    ],
    flows: [
        {
            name: 'NORTH',
            departureRunways: [
                {
                    id: '35',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '35',
                    availableApproachTypes: ['VIS'],
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
            name: 'SOUTH',
            departureRunways: [
                {
                    id: '17',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '17',
                    availableApproachTypes: ['LOC', 'GPS', 'ILS', 'VIS'],
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
    sop: '/sop/pct_chp_sop.pdf',
}