import {TraconAreaConfig} from "@/types";
import {dcaAirportConfig} from "@/facility/atct/kdca";
import {adwAirportConfig} from "@/facility/atct/kadw";

export const PCT_MTV: TraconAreaConfig = {
    faaIdentifier: 'MTV',
    name: 'Mount Vernon ',
    sop: '/sop/pct_mtv_sop.pdf',
    majorFields: [dcaAirportConfig],
    minorFields: [adwAirportConfig],
    customizableOptions: [],
    areaMaps: [
        {
            name: 'MTV',
            imageUrl: '/airspace/tracon/pct/mtv.png',
            notes: [],
        },
    ],
}