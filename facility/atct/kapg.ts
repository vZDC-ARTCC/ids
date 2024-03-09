import {AirportConfig} from "@/types";

export const apgAirportConfig: AirportConfig = {
    faaIdentifier: 'APG',
    icao: 'KAPG',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/kapg/kapg.png',
            // Testing Attendance format
            notes: ['At or Below 2,600 Attendance: MON-FRI 1100-0200Z++, EXCP HOL'],
        },
    ],
    availableRunways: [
        {
            id: '22',
            availableApproachTypes: ['VIS', 'GPS'],
            availableDepartureTypes: ['RV'],
        },
        {
            id: '4',
            availableApproachTypes: ['VIS',],
            availableDepartureTypes: ['RV'],
        },
    ],
    flows: [
        {
            name: 'EAST',
            departureRunways: [
                {
                    id: '4',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '4',
                    availableApproachTypes: ['VIS', 'GPS'],
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
                    id: '22',
                    availableDepartureTypes: ['RV'],
                },
            ],
            arrivalRunways: [
                {
                    id: '22',
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
    ],
    localControlPositions: ['LC'],
    sop: '/sop/pct_chp_sop.pdf',
}