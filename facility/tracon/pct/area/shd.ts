import {TraconAreaConfig} from "@/types";

export const PCT_SHD: TraconAreaConfig = {
    id: 'SHD',
    name: 'Shenandoah',
    sop: '/sop/pct_shd_sop.pdf',
    majorFieldIcao: 'KIAD',
    minorFieldsIcao: [],
    customizableOptions: [],
    sectors: [
        {
            name: 'ASPER',
            frequency: '125.050',
        },
        {
            name: 'TILLY',
            frequency: '126.650',
        },
        {
            name: 'BARIN',
            frequency: '128.525',
        },
        {
            name: 'BINNS',
            frequency: '133.000',
        },
        {
            name: 'BRSTO',
            frequency: '120.825',
        },
        {
            name: 'IADFE',
            frequency: '125.800',
        },
        {
            name: 'IADFC',
            frequency: '134.200',
        },
        {
            name: 'IADFW',
            frequency: '135.775',
        },
        {
            name: 'LUCKE',
            frequency: '126.825',
        },
        {
            name: 'MANNE',
            frequency: '120.450',
        },
        {
            name: 'MULRR',
            frequency: '126.100',
        },
        {
            name: 'RCOLA',
            frequency: '135.775',
        },
    ],
}