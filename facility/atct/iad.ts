import {AirportConfig, AirportPositionType} from "@/types";

export const IAD_CONFIG: AirportConfig = {
    name: 'IAD',
    icao: 'KIAD',
    parentTracon: 'PCT',
    parentTraconArea: 'SHD',
    runways: ['01R', '01C', '01L', '19L', '19C', '19R', '30', '12',],
    flows: [
        {
            name: 'NORTH-30/NO 01L',
            departureRunways: ['30', '01C', '01R',],
            arrivalRunways: ['01C', '01R',],
        },
        {
            name: 'NORTH-30',
            departureRunways: ['30', '01C', '01R',],
            arrivalRunways: ['01L', '01C', '01R',],
        },
        {
            name: 'NORTH-30/NO 01 DEPS',
            departureRunways: ['30'],
            arrivalRunways: ['01L', '01C', '01R',],
        },
        {
            name: 'NORTH-30/NO 01 DEPS/NO 01L',
            departureRunways: ['30'],
            arrivalRunways: ['01C', '01R',],
        },
        {
            name: 'SOUTH-30/NO 19R',
            departureRunways: ['30', '19C', '19L',],
            arrivalRunways: ['19C', '19L',],
        },
        {
            name: 'SOUTH-30',
            departureRunways: ['30', '19C', '19L',],
            arrivalRunways: ['19L', '19C', '19R',],
        },
        {
            name: 'SOUTH-30/NO 19 DEPS',
            departureRunways: ['30'],
            arrivalRunways: ['19L', '19C', '19R',],
        },
        {
            name: 'SOUTH-30/NO 19 DEPS/NO 19R',
            departureRunways: ['30'],
            arrivalRunways: ['19C', '19L',],
        },
    ],
    positions: [
        {
            name: 'DEL',
            longName: 'Delivery',
            type: AirportPositionType.DELIVERY,
        },
        {
            name: 'RAMP',
            longName: 'Ramp/Metering',
            type: AirportPositionType.RAMP,
        },
        {
            name: 'GCE',
            longName: 'Ground East',
            type: AirportPositionType.GROUND,
        },
        {
            name: 'GCW',
            longName: 'Ground West',
            type: AirportPositionType.GROUND,
        },
        {
            name: 'GCN',
            longName: 'Ground North',
            type: AirportPositionType.GROUND,
        },
        {
            name: 'LCE',
            longName: 'Local East',
            type: AirportPositionType.TOWER,
        },
        {
            name: 'LCW',
            longName: 'Local West',
            type: AirportPositionType.TOWER,
        },
        {
            name: 'LCN',
            longName: 'Local North',
            type: AirportPositionType.TOWER,
        },
    ],
}