import {TraconConfig} from "@/types";
import {ORF_ORF} from "@/facility/tracon/orf/area/orf-area";

export const ORF_CONFIG: TraconConfig = {
    faaIdentifier: 'ORF',
    name: 'Norfolk TRACON',
    departureGates: [
        'FAK',
        'HPW',
        'HCM',
        'ECG',
        'ORF',
        'CCV',
        'SWL',
        'SBY',
    ],
    presets: [],
    loas: [],
    sectors: [
        {
            name: 'DEPARTURE',
            frequency: '125.200',
            sectorLetter: 'G',
            airspaceData: [
                {
                    name: 'NORTHEAST',
                    imageUrl: '/airspace/tracon/orf/dr1/dr1_ne.png',
                    notes: [
                        '(1) Give hand-off to EFR climbing to 4000 ft. or requested altitude if lower.',
                        '(2) Give hand-off to PSR on shuttle traffic at 4000 ft.',
                        '(3) Give hand-off to WFR climbing to 10000 ft. or requested altitude if lower.',
                        '(4) Give hand-off to SFR climbing to 5000 ft. or requested altitude if lower. DR-1 must coordinate this with AR-1.',
                        '(5) Give hand-off to SFR climbing to 10000 ft. or requested altitude if lower.',
                        '(6) DR-1 must coordinate this with EFR.',
                        '(7) Give hand-off to AR-1 on traffic departing NGU requesting the GCA pattern at 2000 ft.',
                        '(8) Give hand-off to AR-1 on traffic landing ORF, NGU or AR-1 Satellites at 3000 ft.  NOTE: This feed not intended to supplant EFR requirements to follow normal flow and sequencing.',
                    ],
                },
                {
                    name: 'SOUTHWEST',
                    imageUrl: '/airspace/tracon/orf/dr1/dr1_sw.png',
                    notes: [
                        '(1) Give hand-off to EFR climbing to 7000 ft. or requested altitude if lower.',
                        '(2) Give hand-off to PSR on shuttle traffic at 4000 ft.',
                        '(3) Give hand-off to WFR climbing to 7000 ft. or requested altitude if lower. ',
                        '(4) Give hand-off to SFR climbing to 4000 ft. or requested altitude if lower.',
                        '(5) Give hand-off to AR-1 on aircraft landing NGU and ORF at 3000 ft. and NGU departures requesting GCA pattern at 2000 ft. This feed not intended to supplant feeder requirements to follow normal flow and sequencing.',
                        '(6) Give hand-off to AR-1 on traffic landing ORF or NGU at 3000 ft. This feed not intended to supplant SFR requirements to follow normal flow and sequencing. ',
                    ],
                },
            ],
        },
        {
            name: 'WEST FEEDER',
            frequency: '119.450',
            sectorLetter: 'W',
            airspaceData: [
                {
                    name: 'NORTHEAST',
                    imageUrl: '/airspace/tracon/orf/wfr/wfr_ne.png',
                    notes: [
                        '(1) Receive hand-off from DR1 climbing to 10000 ft. or requested altitude if lower.',
                        '(2) Receive hand-off from PSR climbing to 5000 ft. or requested altitude if lower.',
                        '(3) Give hand-off to PSR for arrival traffic received from ZDC descending to 6000 ft. Give hand-off to PSR for arrival traffic received from PCT descending to 3000 ft.',
                        '(4) Receive hand-off from EFR for PCT arrival traffic in the vicinity of New Point Comfort descending to 12000 ft.  NOTE: WFR has control of these aircraft in EFR airspace for descent and turns toward HPW.',
                        '(5) Give hand-off to SFR for southside arrival traffic at 7000 ft.  NOTE: SFR has control of these aircraft in WFR airspace for descent and turns toward ORF.',
                        '(6) Receive hand-off from SFR descending to 4000 ft. ',
                        '(7) Give hand-off to PSR descending to 4000 ft.',
                        '(8) Receive hand-off from SFR of NTU departure traffic climbing to 14000 ft. or requested altitude if lower. NOTE: WFR has control of these aircraft to turn towards the departure fix when aircraft is west of J174.',
                    ],
                },
                {
                    name: 'SOUTHWEST',
                    imageUrl: '/airspace/tracon/orf/wfr/wfr_sw.png',
                    notes: [
                        '(1) Receive hand-off from DR-1 climbing to 7000 ft. or requested altitude if lower.',
                        '(2) Receive hand-off from PSR climbing to 4000 ft. or requested altitude if lower. ',
                        '(3) Give hand-off to PSR descending to 4000 ft.',
                        '(4) Receive hand-off from EFR for PCT arrival traffic in the vicinity of New Point Comfort descending to 12000 ft.  NOTE: WFR has control of these aircraft in EFR airspace for descent and turns toward HPW.',
                        '(5) Give hand-off to DR-1 at 5000 ft. (see "JRB" AIT procedure)',
                        '(6) Give hand-off to SFR at 7000 ft. NOTE: SFR has control of these aircraft in WFR airspace for descent and turns toward ORF.',
                        '(7) Receive hand-off from SFR descending to 5000 ft.',
                        '(8) Receive hand-off from SFR of NTU departure traffic climbing to 14,000 ft. or requested altitude if lower.  NOTE: WFR has control of these aircraft to turn towards the departure fix when aircraft is west of J174.',
                    ],
                },
            ],
        },
        {
            name: 'SOUTH FEEDER',
            frequency: '127.900',
            sectorLetter: 'S',
            airspaceData: [
                {
                    name: 'NORTHEAST',
                    imageUrl: '/airspace/tracon/orf/sfr/sfr_ne.png',
                    notes: [
                        '(1) Give hand-off to AR1 descending to 4,000 ft. ',
                        '(2) Give hand-off to WFR for peninsula arrival traffic descending to 4,000 ft.',
                        '(3) Receive hand-off from DR1 climbing to 10,000 ft. or requested altitude if lower.',
                        '(4) Receive hand-off from DR1 climbing to 5,000 ft or requested altitude if lower.',
                        '(5) Receive hand-off from WFR for southside arrival traffic at 7,000 ft.  NOTE: SFR has control of these aircraft in WFR airspace for descent and turns toward ORF.',
                        '(6) Give hand-off to ZDC for NTU departure F14/F18 aircraft per ZDC/ORF LOA. Give hand-off to WFR of NTU departure traffic climbing to 14,000 ft. or requested altitude if lower.  NOTE: WFR has control of these aircraft to turn towards the departure fix when aircraft is west of J174.',
                    ],
                },
                {
                    name: 'SOUTHWEST',
                    imageUrl: '/airspace/tracon/orf/sfr/sfr_sw.png',
                    notes: [
                        '(1) Give hand-off to AR-1 descending to 5000 ft. ',
                        '(2) Give hand-off to WFR descending to 5000 ft.',
                        '(3) Receive hand-off from DR-1 climbing to 4000 ft. or requested altitude if lower.',
                        '(4) Receive hand-off from WFR for southside arrival traffic at 7000 ft.  NOTE: SFR has control of these aircraft in WFR airspace for descent and turns toward ORF.',
                        '(5) Give hand-off to ZDC of NTU departure F14/F18 aircraft per the ZDC/ORF LOA. Give hand-off to WFR of NTU departure traffic climbing to 14,000 ft. or requested altitude if lower.  NOTE: WFR has control to turn aircraft towards the departure fix when aircraft is west of J174. ',
                    ],
                },
            ],
        },
        {
            name: 'EAST FEEDER',
            frequency: '126.050',
            sectorLetter: 'E',
            airspaceData: [
                {
                    name: 'NORTHEAST',
                    imageUrl: '/airspace/tracon/orf/efr/efr_ne.png',
                    notes: [
                        '(1) Receive hand-off from DR1 climbing to 4,000 ft. or requested altitude if lower.',
                        '(2) Receive hand-off from PSR climbing to 4,000 ft. or requested altitude if lower.',
                        '(3) Give hand-off to ZDC or NHK per LOAs.',
                        '(4) Give hand-off to AR1 descending to 5,000 ft. (left or right downwind).',
                        '(5) Give hand-off to PSR descending to 5,000 ft.',
                        '(6) Give hand-off to PSR descending to 5,000 ft.',
                        'Give hand-off to WFR of PCT arrival traffic in the vicinity of New Point Comfort descending to 12,000 ft.',
                        'NOTE: WFR has control of these aircraft in EFR airspace for descent and turns toward HPW.',
                    ],
                },
                {
                    name: 'SOUTHWEST',
                    imageUrl: '/airspace/tracon/orf/efr/efr_sw.png',
                    notes: [
                        '(1) Give hand-off to AR-1 descending to 4000 ft.',
                        '(2) Receive hand-off from DR-1 climbing to 7000 ft. or requested altitude if lower.',
                        '(3) Give hand-off to PSR descending to 4000 ft.',
                        '(4) Receive hand-off from PSR climbing to 7000 ft. or requested altitude if lower.',
                        '(5) Give hand-off to WFR of PCT arrival traffic in the vicinity of New Point Comfort descending to 12,000 ft.',
                        'NOTE: WFR has control of these aircraft in EFR airspace for descent and turns toward HPW.',
                    ],
                },
            ],
        },
        {
            name: 'ARRIVAL',
            frequency: '118.900',
            sectorLetter: 'F',
            airspaceData: [
                {
                    name: 'NORTHEAST',
                    imageUrl: '/airspace/tracon/orf/ar1/ar1_ne.png',
                    notes: [
                        '(1) Receive hand-off on traffic landing NGU, ORF or AR-1 Satellites from:',
                        '(a) EFR, left or right downwind, descending to 5000 ft.',
                        '(b) DR-1, left or right downwind, at 3000 ft.',
                        '(2) Receive hand-off from PSR for shuttle traffic at 3000 ft.',
                        '(3) Receive hand-off from SFR descending to 4000 ft.',
                        '(4) Receive hand-off from DR-1 on traffic departing NGU requesting the GCA pattern at 2000 ft.',
                    ],
                },
                {
                    name: 'SOUTHWEST',
                    imageUrl: '/airspace/tracon/orf/ar1/ar1_sw.png',
                    notes: [
                        '(1) Receive hand-off from EFR descending to 4,000 ft.',
                        '(2) Receive hand-off from PSR for shuttle traffic at 3,000 ft.',
                        '(3) Receive hand-off from:',
                        '(a) SFR on aircraft landing ORF and NGU descending to 5,000 ft.',
                        '(b) DR-1 on aircraft landing ORF and NGU at 3000 ft.',
                        'NOTE: This feed not intended to supplant feeder requirements to follow normal flow and sequencing',
                        '(4) Receive hand-off from DR1 on:',
                        '(a) JRB arrivals at 5,000 ft. AR-1 has control for descent within lateral limits of AR-1 airspace. (see "JRB" AIT procedure).',
                        '(b) Aircraft landing NGU and ORF at 3000 ft. and NGU departures requesting GCA pattern at 2000 ft.',
                    ],
                },
            ],
        },
        {
            name: 'PENINSULA SECTOR',
            frequency: '118.900',
            sectorLetter: 'P',
            airspaceData: [
                {
                    name: 'NORTHEAST',
                    imageUrl: '/airspace/tracon/orf/psr/psr_ne.png',
                    notes: [
                        '(1) Give hand-off to EFR climbing to 4,000 ft. or requested altitude if lower.',
                        '(2) Give hand-off to WFR climbing to 5,000 ft. or requested altitude if lower.',
                        '(3) Give hand-off to AR1 for shuttle traffic at 3,000 ft.',
                        '(4) Receive hand-off from DR1 for shuttle traffic at 4,000 ft.',
                        '(5) Receive hand-off from SFR descending to 4,000 ft.',
                        '(6) Receive hand-off from EFR descending to 5,000 ft.',
                        '(7) Receive hand-off from WFR for ZDC HCM traffic descending to 6,000 ft. Receive hand-off from WFR for PCT HCM traffic descending to 3,000 ft.',
                        '(8) Receive hand-off from EFR descending to 5,000 ft.',
                    ],
                },
                {
                    name: 'SOUTHWEST',
                    imageUrl: '/airspace/tracon/orf/psr/psr_sw.png',
                    notes: [
                        '(1) Give hand-off to WFR climbing to 4000 ft. or requested altitude if lower.',
                        '(2) Give hand-off to EFR climbing to 7000 ft. or requested altitude if lower.',
                        '(3) Give hand-off to AR-1 for shuttle traffic at 3000 ft.',
                        '(4) Receive hand-off from WFR descending to 4000 ft. ',
                        '(5) Receive hand-off from EFR descending to 4000 ft.',
                        '(6) Receive hand-off from WFR descending to 5000 ft.',
                        '(7) Receive hand-off from DR-1 for shuttle traffic at 4000 ft.',
                    ],
                },
            ],
        },
    ],
    areas: [
        ORF_ORF,
    ],

}