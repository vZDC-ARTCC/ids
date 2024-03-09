import {TraconAreaConfig} from "@/types";

import {bwiAirportConfig} from "@/facility/atct/kbwi";
import {mtnAirportConfig} from "@/facility/atct/kmtn";
import {esnAirportConfig} from "@/facility/atct/kesn";
import {apgAirportConfig} from "@/facility/atct/kapg";

export const PCT_CHP: TraconAreaConfig = {
    faaIdentifier: 'CHP',
    name: 'Chesapeake',
    sop: '/sop/pct_chp_sop.pdf',
    majorFields: [bwiAirportConfig],
    minorFields: [mtnAirportConfig, esnAirportConfig, apgAirportConfig],
    customizableOptions: [],
    areaMaps: [
        {
            name: 'CHP',
            imageUrl: '/airspace/tracon/pct/chp.png',
            notes: [],
        },
    ],
}