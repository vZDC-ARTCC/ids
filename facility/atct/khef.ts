import {AirportConfig} from "@/types";

export const hefAirportConfig: AirportConfig = {
    faaIdentifier: 'HEF',
    icao: 'KHEF',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/khef/khef.png',
            notes: [
                'Standard 5NM radius',
            ],
        },
    ],
    availableRunways: [
        {
            id: '16L',
            availableApproachTypes: ['ILS', 'GPS', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '16R',
            availableApproachTypes: ['GPS', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '34L',
            availableApproachTypes: ['GPS', 'VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '34R',
            availableApproachTypes: ['GPS', 'VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
    ],
    flows: [
        {
            name: 'NORTH VMC',
            departureRunways: [
                {
                    id: '34L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '34R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '34L',
                    availableApproachTypes: ['GPS', 'VIS'],
                },
                {
                    id: '34R',
                    availableApproachTypes: ['GPS', 'VIS'],
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
            name: 'NORTH IMC',
            departureRunways: [
                {
                    id: '34L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '34R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '34L',
                    availableApproachTypes: ['GPS'],
                },
                {
                    id: '34R',
                    availableApproachTypes: ['GPS'],
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
            name: 'SOUTH VMC',
            departureRunways: [
                {
                    id: '16L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '16R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '16L',
                    availableApproachTypes: ['ILS', 'GPS', 'VIS',],
                },
                {
                    id: '16R',
                    availableApproachTypes: ['GPS', 'VIS'],
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
            name: 'SOUTH IMC',
            departureRunways: [
                {
                    id: '16L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '16R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '16L',
                    availableApproachTypes: ['ILS', 'GPS'],
                },
                {
                    id: '16R',
                    availableApproachTypes: ['GPS'],
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
    sop: '/sop/pct_shd_sop.pdf',
}