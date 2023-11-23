import {TraconConfig} from "@/types";
import {RDU_RDU} from "@/facility/tracon/rdu/area/rdu-area";

export const RDU_CONFIG: TraconConfig = {
    faaIdentifier: 'RDU',
    name: 'Raleigh–Durham TRACON',
    areas: [
        RDU_RDU,
    ],
    sectors: [
        {
        name: 'North Departure',
        frequency: '132.350',
        sectorLetter: 'N'
        },
        {
            name: 'South Departure',
            frequency: '125.300',
            sectorLetter: 'S'
        },
        {
            name: 'East Arrival',
            frequency: '124.950',
            sectorLetter: 'E'
        },
        {
            name: 'West Arrival',
            frequency: '128.300',
            sectorLetter: 'W'
        },
        {
            name: 'East Final',
            frequency: '124.800',
            sectorLetter: 'U'
        },
        {
            name: 'West Final',
            frequency: '135.150',
            sectorLetter: 'Y'
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