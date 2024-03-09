import {TraconAreaConfig} from "@/types";
import {dcaAirportConfig} from "@/facility/atct/kdca";
import {adwAirportConfig} from "@/facility/atct/kadw";
import {iadAirportConfig} from "@/facility/atct/kiad";
import {bwiAirportConfig} from "@/facility/atct/kbwi";
import {hefAirportConfig} from "@/facility/atct/khef";
import {ricAirportConfig} from "@/facility/atct/kric";
import {mtnAirportConfig} from "@/facility/atct/kmtn";
import {apgAirportConfig} from "@/facility/atct/kapg";
import {jyoAirportConfig} from "@/facility/atct/kjyo";

export const PCT_PCT: TraconAreaConfig = {
    faaIdentifier: 'PCT',
    name: 'Potomac Consolidated',
    sop: '/sop/pct_mtv_sop.pdf',
    majorFields: [dcaAirportConfig, iadAirportConfig, bwiAirportConfig],
    minorFields: [ricAirportConfig, adwAirportConfig, hefAirportConfig, mtnAirportConfig, apgAirportConfig, jyoAirportConfig],
    customizableOptions: [],
    areaMaps: [
        {
            name: 'MTV',
            imageUrl: '/airspace/tracon/pct/mtv.png',
            notes: [],
        },
        {
            name: 'SHD',
            imageUrl: '/airspace/tracon/pct/shd.png',
            notes: [],
        },
        {
            name: 'CHP',
            imageUrl: '/airspace/tracon/pct/chp.png',
            notes: [],
        },
    ],
}