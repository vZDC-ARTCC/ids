import {TraconConfig} from "@/types";
import {PCT_SHD} from "@/facility/tracon/pct/area/shd";
import {PCT_MTV} from "@/facility/tracon/pct/area/mtv";
import {PCT_CHP} from "@/facility/tracon/pct/area/chp";
import {PCT_JRV} from "@/facility/tracon/pct/area/jrv";
import {PCT_PCT} from "@/facility/tracon/pct/area/pct";

export const PCT_CONFIG: TraconConfig = {
    faaIdentifier: 'PCT',
    name: 'Potomac Consolidated TRACON',
    departureGates: [
        'SWANN',
        'SOOKI',
        'PALEO',
        'AGARD',
        'WHINO',
        'COLIN',
        'JCOBY',
        'RAZZA',
        'WOOLY',
        'JERES',
        'MCRAY',
        'BUFFR',
        'MRB',
        'BUNZZ',
        'RAMAY',
        'RNLDI',
        'OTTTO',
        'LDN',
        'CSN',
        'HANEY',
        'FLUKY',
        'MOL',
        'HAFNR',
        'GVE',
        'BRV',
        'BUTRZ',
        'POOCH'
    ],
    areas: [
        PCT_PCT,
        PCT_SHD,
        PCT_MTV,
        PCT_CHP,
        PCT_JRV,
    ],
    loas: [
        {
            targetFacility: 'ZNY',
            link: '/loa/pct/zny.pdf'
        },
        {
            targetFacility: 'PHL',
            link: '/loa/pct/phl.pdf'
        },
    ],
    presets: [
        {
            name: 'Shenandoah',
            sectorNames: [
                'ASPER',
                'TILLY',
                'BARIN',
                'BINNS',
                'BRSTO',
                'IADFE',
                'IADFC',
                'IADFW',
                'LUCKE',
                'MANNE',
                'MULRR',
                'RCOLA',
            ],
        },
        {
            name: 'Mount Vernon',
            sectorNames: [
                'OJAAY',
                'ENSUE',
                'DEALE',
                'LURAY',
                'DCAFR',
                'FLUKY',
                'TYSON',
                'KRANT',
                'ADWAR',
            ],
        },
        {
            name: 'Chesapeake',
            sectorNames: [
                'GRACO',
                'WOOLY',
                'BELAY',
                'BUFFR',
                'PALEO',
                'BWIFS',
                'BWIFN',
            ],
        },
        {
            name: 'James River',
            sectorNames: [
                'CHOWE',
                'CHOEA',
                'FLTRK',
                'RICFR',
                'TAPPA',
                'CSIDE',
                'CSIDW',
            ],
        },
        {
            name: 'PACMAN',
            sectorNames: [
                'ASPER',
                'TILLY',
                'BARIN',
                'BINNS',
                'BRSTO',
                'IADFE',
                'IADFC',
                'IADFW',
                'LUCKE',
                'MANNE',
                'MULRR',
                'RCOLA',
                'GRACO',
                'WOOLY',
                'BELAY',
                'BUFFR',
                'PALEO',
                'BWIFS',
                'BWIFN',
                'CHOWE',
                'CHOEA',
                'FLTRK',
                'RICFR',
                'TAPPA',
                'CSIDE',
                'CSIDW',
            ],
        },
    ],
    sectors: [
        {
            name: 'ASPER',
            frequency: '125.050',
            sectorLetter: 'A',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/asper/asper_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/asper/asper_s_30.png',
                    notes: [],
                },
                {
                    name: 'SOUTH/30',
                    imageUrl: '/airspace/tracon/pct/asper/asper_s_30.png',
                    notes: [],
                },
                {
                    name: 'SOUTH/12',
                    imageUrl: '/airspace/tracon/pct/asper/asper_s_12.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'TILLY',
            frequency: '126.650',
            sectorLetter: 'T',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/tilly/tilly_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/tilly/tilly_s_30.png',
                    notes: [],
                },
                {
                    name: 'SOUTH/30',
                    imageUrl: '/airspace/tracon/pct/tilly/tilly_s_30.png',
                    notes: [],
                },
                {
                    name: 'SOUTH/12',
                    imageUrl: '/airspace/tracon/pct/tilly/tilly_s_12.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'BARIN',
            frequency: '128.525',
            sectorLetter: 'B',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/barin/barin_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/barin/barin_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'BINNS',
            frequency: '133.000',
            sectorLetter: 'V',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/pct/binns/binns.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'BRSTO',
            frequency: '120.825',
            sectorLetter: 'O',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/brsto/brsto_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/brsto/brsto_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'IADFE',
            frequency: '125.800',
            sectorLetter: 'X',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/iadfe/iadfe_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/iadfe/iadfe_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'IADFC',
            frequency: '134.200',
            sectorLetter: 'S',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/pct/iadfc/iadfc.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'IADFW',
            frequency: '135.775',
            sectorLetter: 'U',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/iadfw/iadfw_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/iadfw/iadfw_s.png',
                    notes: [],
                },
                {
                    name: '19/30',
                    imageUrl: '/airspace/tracon/pct/iadfw/iadfw_19_30.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'LUCKE',
            frequency: '126.825',
            sectorLetter: 'Z',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/lucke/lucke_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/lucke/lucke_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'MANNE',
            frequency: '120.450',
            sectorLetter: 'N',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/manne/manne_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH/12',
                    imageUrl: '/airspace/tracon/pct/manne/manne_s_12.png',
                    notes: [],
                },
                {
                    name: 'SOUTH/19/30',
                    imageUrl: '/airspace/tracon/pct/manne/manne_s_19_30.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'MULRR',
            frequency: '126.100',
            sectorLetter: 'M',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/mulrr/mulrr_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/mulrr/mulrr_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'RCOLA',
            frequency: '135.775',
            sectorLetter: 'R',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/pct/rcola/rcola.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'OJAAY',
            frequency: '119.850',
            sectorLetter: 'J',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/ojaay/ojaay_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/ojaay/ojaay_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'ENSUE',
            frequency: '124.200',
            sectorLetter: 'E',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/ensue/ensue_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/ensue/ensue_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'DEALE',
            frequency: '128.350',
            sectorLetter: 'D',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/deale/deale_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/deale/deale_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'LURAY',
            frequency: '118.675',
            sectorLetter: 'L',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/pct/luray/luray.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'DCAFR',
            frequency: '124.700',
            sectorLetter: 'V',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/dcafr/dcafr_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/dcafr/dcafr_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'FLUKY',
            frequency: '121.050',
            sectorLetter: 'F',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/fluky/fluky_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/fluky/fluky_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'TYSON',
            frequency: '118.950',
            sectorLetter: 'Y',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/tyson/tyson_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/tyson/tyson_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'KRANT',
            frequency: '125.650',
            sectorLetter: 'K',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/krant/krant_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/krant/krant_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'ADWAR',
            frequency: '128.000',
            sectorLetter: 'A',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/adwar/adwar_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/adwar/adwar_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'GRACO',
            frequency: '124.550',
            sectorLetter: 'G',
            airspaceData: [
                {
                    name: 'WEST',
                    imageUrl: '/airspace/tracon/pct/graco/graco_w.png',
                    notes: [],
                },
                {
                    name: 'EAST',
                    imageUrl: '/airspace/tracon/pct/graco/graco_e.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'WOOLY',
            frequency: '128.700',
            sectorLetter: 'W',
            airspaceData: [
                {
                    name: 'WEST',
                    imageUrl: '/airspace/tracon/pct/wooly/wooly_w.png',
                    notes: [],
                },
                {
                    name: 'EAST',
                    imageUrl: '/airspace/tracon/pct/wooly/wooly_e.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'BELAY',
            frequency: '125.525',
            sectorLetter: 'B',
            airspaceData: [
                {
                    name: 'WEST',
                    imageUrl: '/airspace/tracon/pct/belay/belay_w.png',
                    notes: [],
                },
                {
                    name: 'EAST',
                    imageUrl: '/airspace/tracon/pct/belay/belay_e.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'BUFFR',
            frequency: '133.850',
            sectorLetter: 'H',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/pct/buffr/buffr.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'PALEO',
            frequency: '133.750',
            sectorLetter: 'P',
            airspaceData: [
                {
                    name: 'WEST',
                    imageUrl: '/airspace/tracon/pct/paleo/paleo_w.png',
                    notes: [],
                },
                {
                    name: 'EAST',
                    imageUrl: '/airspace/tracon/pct/paleo/paleo_e.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'BWIFS',
            frequency: '119.700',
            sectorLetter: 'S',
            airspaceData: [
                {
                    name: 'WEST',
                    imageUrl: '/airspace/tracon/pct/bwifs/bwifs_w.png',
                    notes: [],
                },
                {
                    name: 'EAST',
                    imageUrl: '/airspace/tracon/pct/bwifs/bwifs_e.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'BWIFN',
            frequency: '119.000',
            sectorLetter: 'N',
            airspaceData: [
                {
                    name: 'WEST',
                    imageUrl: '/airspace/tracon/pct/bwifn/bwifn_w.png',
                    notes: [],
                },
                {
                    name: 'EAST',
                    imageUrl: '/airspace/tracon/pct/bwifn/bwifn_e.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'CHOWE',
            frequency: '132.850',
            sectorLetter: '2W',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/pct/chowe/chowe.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'CHOEA',
            frequency: '120.525',
            sectorLetter: '2E',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/pct/choea/choea.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'FLTRK',
            frequency: '126.750',
            sectorLetter: '2L',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/fltrk/fltrk_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/fltrk/fltrk_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'RICFR',
            frequency: '118.200',
            sectorLetter: '2F',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/ricfr/ricfr_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/ricfr/ricfr_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'TAPPA',
            frequency: '126.400',
            sectorLetter: '2P',
            airspaceData: [
                {
                    name: 'NORTH',
                    imageUrl: '/airspace/tracon/pct/tappa/tappa_n.png',
                    notes: [],
                },
                {
                    name: 'SOUTH',
                    imageUrl: '/airspace/tracon/pct/tappa/tappa_s.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'CSIDE',
            frequency: '127.200',
            sectorLetter: '2X',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/pct/cside/cside.png',
                    notes: [],
                },
            ],
        },
        {
            name: 'CSIDW',
            frequency: '135.625',
            sectorLetter: '2M',
            airspaceData: [
                {
                    name: 'ALL',
                    imageUrl: '/airspace/tracon/pct/csidw/csidw.png',
                    notes: [],
                },
            ],
        },
    ]
}