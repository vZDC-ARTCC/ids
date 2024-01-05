import {TraconAreaConfig} from "@/types";
import {rduAirportConfig} from "@/facility/atct/krdu";

export const RDU_RDU: TraconAreaConfig = {
    faaIdentifier: 'RDU',
    name: 'Raleigh',
    sop: '/sop/rdu_sop.pdf',
    majorFields: [rduAirportConfig],
    minorFields: [],
    areaMaps: [],
    customizableOptions: [],
}