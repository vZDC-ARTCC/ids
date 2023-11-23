import {AirportConfig} from "@/types";

export const dcaAirportConfig: AirportConfig = {
    faaIdentifier: 'DCA',
    icao: 'KDCA',
    parentTracon: 'PCT',
    parentTraconArea: 'MTV',
    availableRunways: [
        {
            id: '01',
            availableApproachTypes: ['ILS', 'RNP', 'MTV-VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '19',
            availableApproachTypes: ['ILS', 'RNP', 'RIV-VIS', 'LDA-Y', 'LDA-Z'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '33',
            availableApproachTypes: ['GPS', 'VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '15',
            availableApproachTypes: ['GPS', 'VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '04',
            availableApproachTypes: ['VIS'],
            availableDepartureTypes: ['RV', 'ROTG'],
        },
        {
            id: '22',
            availableApproachTypes: ['VIS'],
            availableDepartureTypes: ['RV'],
        },
    ],
    flows: [
        {
            name: 'NORTH VMC',
            departureRunways: [
                {
                    id: '01',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '33',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '04',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '01',
                    availableApproachTypes: ['ILS', 'RNP', 'VIS',],
                },
                {
                    id: '33',
                    availableApproachTypes: ['GPS', 'VIS'],
                },
                {
                    id: '04',
                    availableApproachTypes: ['VIS'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'NORTH IMC',
            departureRunways: [
                {
                    id: '01',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '33',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '04',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '01',
                    availableApproachTypes: ['ILS', 'RNP'],
                },
                {
                    id: '33',
                    availableApproachTypes: ['GPS'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH VMC',
            departureRunways: [
                {
                    id: '19',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '15',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19',
                    availableApproachTypes: ['ILS', 'RNP', 'RIV-VIS'],
                },
                {
                    id: '15',
                    availableApproachTypes: ['GPS', 'RIV-VIS'],
                },
            ],
            traconVisibleOptions: [],
        },
        {
            name: 'SOUTH IMC',
            departureRunways: [
                {
                    id: '19',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
                {
                    id: '15',
                    availableDepartureTypes: ['RV', 'ROTG'],
                },
            ],
            arrivalRunways: [
                {
                    id: '19',
                    availableApproachTypes: ['ILS', 'RNP'],
                },
                {
                    id: '15',
                    availableApproachTypes: ['GPS'],
                },
            ],
            traconVisibleOptions: [],
        },

    ],

    localControlPositions: ['LCE', 'LCW', 'LCN'],
    customizableOptions: [],
    sop: '/sop/dca_sop.pdf',
    sidebarOptions: [],
}