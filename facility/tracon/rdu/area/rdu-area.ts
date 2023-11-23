import {TraconAreaConfig} from "@/types";
import {rduAirportConfig} from "@/facility/atct/krdu";

export const RDU_RDU: TraconAreaConfig = {
    id: 'Raleigh',
    faaIdentifier: 'RDU',
    name: 'Raleigh',
    sop: '/sop/rdu_sop.pdf',
    majorFields: [rduAirportConfig],
    minorFields: [],
    customizableOptions: [],
}