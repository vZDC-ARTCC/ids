import {TraconAreaConfig} from "@/types";
import {orfAirportConfig} from "@/facility/atct/korf";

export const ORF_ORF: TraconAreaConfig = {
    faaIdentifier: 'ORF',
    name: 'Norfolk',
    sop: '/sop/orf_sop.pdf',
    majorFields: [orfAirportConfig],
    minorFields: [],
    areaMaps: [
        {
            name: 'ORF',
            imageUrl: '/airspace/tracon/orf/orf.png',
            notes: [
                'NOTE – NTU falls under the control of ORF TRACON unless it is opened separately',
            ],
        },
    ],
    customizableOptions: [],

}