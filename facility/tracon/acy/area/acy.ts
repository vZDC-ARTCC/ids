import {TraconAreaConfig} from "@/types";
import {acyAirportConfig} from "@/facility/atct/kacy";


export const ACY_ACY: TraconAreaConfig = {
    id: 'Atlantic City',
    faaIdentifier: 'ACY',
    name: 'Atlantic City',
    sop: '/sop/acy_sop.pdf',
    majorFields: [acyAirportConfig],
    minorFields: [],
    customizableOptions: [],
}