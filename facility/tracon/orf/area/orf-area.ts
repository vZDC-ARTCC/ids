import {TraconAreaConfig} from "@/types";
import {orfAirportConfig} from "@/facility/atct/korf";

export const ORF_ORF: TraconAreaConfig = {
    id: 'Norfolk',
    faaIdentifier: 'ORF',
    name: 'Norfolk',
    sop: '/sop/orf_sop.pdf',
    majorFields: [orfAirportConfig],
    minorFields: [],
    customizableOptions: [],

}