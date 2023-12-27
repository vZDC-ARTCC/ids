import {AirportConfig} from "@/types";

export const dcaAirportConfig: AirportConfig = {
    faaIdentifier: 'DCA',
    icao: 'KDCA',
    towerAirspace: [
        {
            name: 'LC',
            imageUrl: '/airspace/local/kdca/kdca.png',
            notes: [
                'When DAA Tower is closed, HC shall assume control of the portion of the Davidson Class D inside of HC airspace.',
            ],
        },
    ],
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
                    availableApproachTypes: ['LDA-Y', 'LDA-Z', 'RNP', 'MTV-VIS',],
                },
                {
                    id: '33',
                    availableApproachTypes: ['GPS', 'MTV-VIS'],
                },
                {
                    id: '04',
                    availableApproachTypes: ['MTV-VIS'],
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
                    availableApproachTypes: ['LDA-Y', 'LDA-Z', 'RNP', 'RIV-VIS'],
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
                    availableApproachTypes: ['LDA-Y', 'LDA-Z', 'RNP'],
                },
                {
                    id: '15',
                    availableApproachTypes: ['GPS'],
                },
            ],
            traconVisibleOptions: [],
        },

    ],

    localControlPositions: ['LC'],
    sop: '/sop/dca_sop.pdf',
}