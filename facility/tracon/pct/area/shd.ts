import {TraconAreaConfig} from "@/types";
import {iadAirportConfig} from "@/facility/atct/iad";

export const PCT_SHD: TraconAreaConfig = {
    id: 'Shenandoah',
    faaIdentifier: 'SHD',
    name: 'Shenandoah',
    sop: '/sop/pct_shd_sop.pdf',
    majorField: iadAirportConfig,
    minorFields: [],
    customizableOptions: [],
    sectors: [
        {
            name: 'ASPER',
            frequency: '125.050',
            sectorLetter: 'A'
        },
        {
            name: 'TILLY',
            frequency: '126.650',
            sectorLetter: 'T',
        },
        {
            name: 'BARIN',
            frequency: '128.525',
            sectorLetter: 'B',
        },
        {
            name: 'BINNS',
            frequency: '133.000',
            sectorLetter: 'V',
        },
        {
            name: 'BRSTO',
            frequency: '120.825',
            sectorLetter: 'O',
        },
        {
            name: 'IADFE',
            frequency: '125.800',
            sectorLetter: 'X',
        },
        {
            name: 'IADFC',
            frequency: '134.200',
            sectorLetter: 'S'
        },
        {
            name: 'IADFW',
            frequency: '135.775',
            sectorLetter: 'U'
        },
        {
            name: 'LUCKE',
            frequency: '126.825',
            sectorLetter: 'Z',
        },
        {
            name: 'MANNE',
            frequency: '120.450',
            sectorLetter: 'N',
        },
        {
            name: 'MULRR',
            frequency: '126.100',
            sectorLetter: 'M',
        },
        {
            name: 'RCOLA',
            frequency: '135.775',
            sectorLetter: 'R',
        },
    ],
}