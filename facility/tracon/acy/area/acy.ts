import {TraconAreaConfig} from "@/types";
import {acyAirportConfig} from "@/facility/atct/kacy";


export const ACY_ACY: TraconAreaConfig = {
    faaIdentifier: 'ACY',
    name: 'Atlantic City',
    sop: '/sop/acy_sop.pdf',
    majorFields: [acyAirportConfig],
    minorFields: [],
    areaMaps: [
        {
            name: 'ACY',
            imageUrl: '/airspace/tracon/acy/acy.png',
            notes: [],
        },
    ],
    customizableOptions: [],
}