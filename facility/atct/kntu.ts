import {AirportConfig} from "@/types";

export const ntuAirportConfig: AirportConfig = {
    faaIdentifier: 'NTU',
    icao: 'KNTU',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/kntu/kntu.png',
            notes: [
                '',
            ],
        },
    ],
    availableRunways: [
        {
            id: '5R',
            availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '5L',
            availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '23R',
            availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '23L',
            availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '32R',
            availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '32L',
            availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
    ],
    flows: [
        {
            name: 'EAST W/14 VMC',
            departureRunways: [
                {
                    id: '5L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '5R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '14L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '14R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '5L',
                    availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
                },
                {
                    id: '5R',
                    availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
                },
                {
                    id: '14L',
                    availableApproachTypes: ['VIS'],
                },
                {
                    id: '14R',
                    availableApproachTypes: ['VIS'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'TOWER',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
        {
            name: 'EAST VMC',
            departureRunways: [
                {
                    id: '5L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '5R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '5L',
                    availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
                },
                {
                    id: '5R',
                    availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'TOWER',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
        {
            name: 'WEST W/32 VMC',
            departureRunways: [
                {
                    id: '23L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '23R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '32L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '32R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '23L',
                    availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
                },
                {
                    id: '23R',
                    availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
                },
                {
                    id: '32L',
                    availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
                },
                {
                    id: '32R',
                    availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'TOWER',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
        {
            name: 'WEST VMC',
            departureRunways: [
                {
                    id: '23L',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '23R',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '23L',
                    availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
                },
                {
                    id: '23R',
                    availableApproachTypes: ['VIS','GPS','TACAN-Y', 'HI-TACAN-Z'],
                },
            ],
            traconVisibleOptions: [
                {
                    name: 'TOWER',
                    choices: ['OPEN', 'CLOSED'],
                },
            ],
        },
    ],
    localControlPositions: ['LC'],
    sop: '/sop/orf_sop.pdf',
}
