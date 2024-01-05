import {TraconAreaConfig} from "@/types";
import {iadAirportConfig} from "@/facility/atct/kiad";
import {hefAirportConfig} from "@/facility/atct/khef";

export const PCT_SHD: TraconAreaConfig = {
    faaIdentifier: 'SHD',
    name: 'Shenandoah',
    sop: '/sop/pct_shd_sop.pdf',
    majorFields: [iadAirportConfig],
    minorFields: [hefAirportConfig],
    areaMaps: [
        {
            name: 'SHD',
            imageUrl: '/airspace/tracon/pct/shd.png',
            notes: [],
        },
    ],
    customizableOptions: [],
}