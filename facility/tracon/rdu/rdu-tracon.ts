import {TraconConfig} from "@/types";
import {RDU_RDU} from "@/facility/tracon/rdu/area/rdu-area";

export const RDU_CONFIG: TraconConfig = {
    faaIdentifier: 'RDU',
    name: 'Raleigh–Durham TRACON',
    areas: [
        RDU_RDU,
    ],
    presets: [],
    loas: [],
    sectors: [
        {
            name: 'North Departure',
            frequency: '132.350',
            sectorLetter: 'N',
            airspaceData: [
                {
                    name: 'SW',
                    imageUrl: '/airspace/tracon/rdu/dep_n/dep_n_sw.png',
                    notes: [],
                },
                {
                    name: 'NE',
                    imageUrl: '/airspace/tracon/rdu/dep_n/dep_n_ne.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'South Departure',
            frequency: '125.300',
            sectorLetter: 'S',
            airspaceData: [
                {
                    name: 'SW',
                    imageUrl: '/airspace/tracon/rdu/dep_s/dep_s_sw.png',
                    notes: [],
                },
                {
                    name: 'NE',
                    imageUrl: '/airspace/tracon/rdu/dep_s/dep_s_ne.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'East Arrival',
            frequency: '124.950',
            sectorLetter: 'E',
            airspaceData: [
                {
                    name: 'SW',
                    imageUrl: '/airspace/tracon/rdu/arr_e/arr_e_sw.png',
                    notes: [],
                },
                {
                    name: 'NE',
                    imageUrl: '/airspace/tracon/rdu/arr_e/arr_e_ne.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'West Arrival',
            frequency: '128.300',
            sectorLetter: 'W',
            airspaceData: [
                {
                    name: 'SW',
                    imageUrl: '/airspace/tracon/rdu/arr_w/arr_w_sw.png',
                    notes: [],
                },
                {
                    name: 'NE',
                    imageUrl: '/airspace/tracon/rdu/arr_w/arr_w_ne.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'East Final',
            frequency: '124.800',
            sectorLetter: 'U',
            airspaceData: [
                {
                    name: 'SW',
                    imageUrl: '/airspace/tracon/rdu/fin_e/fin_e_sw.png',
                    notes: [],
                },
                {
                    name: 'NE',
                    imageUrl: '/airspace/tracon/rdu/fin_e/fin_e_ne.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'West Final',
            frequency: '135.150',
            sectorLetter: 'Y',
            airspaceData: [
                {
                    name: 'SW',
                    imageUrl: '/airspace/tracon/rdu/fin_w/fin_w_sw.png',
                    notes: [],
                },
                {
                    name: 'NE',
                    imageUrl: '/airspace/tracon/rdu/fin_w/fin_w_ne.png',
                    notes: [],
                },
            ],
        },
    ],
    departureGates: [
        'AIMHI',
        'EPOCH',
        'OXFRD',
        'LIB',
        'JAYRR',
        'CATAR',
        'FITON',
        'STRMY',
        'EVIGY',
        'EAGER',
    ],
}