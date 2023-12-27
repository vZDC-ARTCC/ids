import {TraconAreaConfig} from "@/types";
import {ricAirportConfig} from "@/facility/atct/kric";


export const PCT_JRV: TraconAreaConfig = {
    faaIdentifier: 'JRV',
    name: 'James River',
    sop: '/sop/pct_jrv_sop.pdf',
    majorFields: [ricAirportConfig],
    minorFields: [],
    customizableOptions: [],
    areaMaps: [
        {
            name: 'JRV',
            imageUrl: '/airspace/tracon/pct/jrv.png',
            notes: [],
        },
    ],
}