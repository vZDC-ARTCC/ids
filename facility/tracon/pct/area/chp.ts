import {TraconAreaConfig} from "@/types";

import {bwiAirportConfig} from "@/facility/atct/kbwi";

export const PCT_CHP: TraconAreaConfig = {
    id: 'Chesapeake',
    faaIdentifier: 'CHP',
    name: 'Chesapeake',
    sop: '/sop/pct_chp_sop.pdf',
    majorFields: [bwiAirportConfig],
    minorFields: [],
    customizableOptions: [],
    areaMaps: [
        {
            name: 'CHP',
            imageUrl: '/airspace/pct/chp.png',
            notes: [],
        },
    ],
}