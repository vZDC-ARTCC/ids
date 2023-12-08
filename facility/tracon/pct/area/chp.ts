import {TraconAreaConfig} from "@/types";

import {bwiAirportConfig} from "@/facility/atct/kbwi";
import {mtnAirportConfig} from "@/facility/atct/kmtn";

export const PCT_CHP: TraconAreaConfig = {
    id: 'Chesapeake',
    faaIdentifier: 'CHP',
    name: 'Chesapeake',
    sop: '/sop/pct_chp_sop.pdf',
    majorFields: [bwiAirportConfig],
    minorFields: [mtnAirportConfig],
    customizableOptions: [],
}