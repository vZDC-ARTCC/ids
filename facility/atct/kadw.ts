import {AirportConfig} from "@/types";

export const adwAirportConfig: AirportConfig = {
    faaIdentifier: 'ADW',
    icao: 'KADW',
    towerAirspace: [],
    availableRunways: [
        {
            id: '1L',
            availableApproachTypes: ['ILS', 'GPS-Z', 'RNP-Y', 'TACAN', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '1R',
            availableApproachTypes: ['ILS', 'GPS-Z','TACAN', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '19L',
            availableApproachTypes: ['ILS', 'GPS', 'TACAN', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '19R',
            availableApproachTypes: ['ILS', 'GPS','TACAN', 'VIS',],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
    ],
    flows: [
        {
            name: 'NORTH VMC',
            departureRunways: [
                {
                    id: '1L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '1R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '1L',
                    availableApproachTypes: ['ILS', 'GPS-Z', 'RNP-Y', 'TACAN', 'VIS',],
                },
                {
                    id: '1R',
                    availableApproachTypes: ['ILS', 'GPS-Z', 'TACAN', 'VIS',],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'RWY UNSPEC IN USE',
                    choices: ['YES', 'NO'],
                },
                {
                    name: 'RWY UNSPEC APP',
                    choices: ['GPS-A', 'TACAN-B', 'BOTH'],
                },
            ],
        },
        {
            name: 'NORTH IMC',
            departureRunways: [
                {
                    id: '1L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '1R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '1L',
                    availableApproachTypes: ['ILS', 'GPS-Z', 'RNP-Y', 'TACAN'],
                },
                {
                    id: '1R',
                    availableApproachTypes: ['ILS', 'GPS-Z', 'TACAN'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'RWY UNSPEC IN USE',
                    choices: ['YES', 'NO'],
                },
                {
                    name: 'RWY UNSPEC APP',
                    choices: ['GPS-A', 'TACAN-B', 'BOTH'],
                },
            ],
        },
        {
            name: 'SOUTH VMC',
            departureRunways: [
                {
                    id: '19L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '19R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19L',
                    availableApproachTypes: ['ILS', 'GPS', 'TACAN', 'VIS',],
                },
                {
                    id: '19R',
                    availableApproachTypes: ['ILS', 'GPS', 'TACAN', 'VIS',],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'RWY UNSPEC IN USE',
                    choices: ['YES', 'NO'],
                },
                {
                    name: 'RWY UNSPEC APP',
                    choices: ['GPS-A', 'TACAN-B', 'BOTH'],
                },
            ],
        },
        {
            name: 'SOUTH IMC',
            departureRunways: [
                {
                    id: '19L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '19R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19L',
                    availableApproachTypes: ['ILS', 'GPS', 'TACAN',],
                },
                {
                    id: '19R',
                    availableApproachTypes: ['ILS', 'GPS', 'TACAN',],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'RWY UNSPEC IN USE',
                    choices: ['YES', 'NO'],
                },
                {
                    name: 'RWY UNSPEC APP',
                    choices: ['GPS-A', 'TACAN-B', 'BOTH'],
                },
            ],
        },
    ],
    localControlPositions: ['LC'],
    sop: '/sop/pct_mtv_sop.pdf',
}



