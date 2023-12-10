import {TraconAreaConfig} from "@/types";
import {ricAirportConfig} from "@/facility/atct/kric";


export const PCT_JRV: TraconAreaConfig = {
    id: 'James River',
    faaIdentifier: 'JRV',
    name: 'James River',
    sop: '/sop/pct_jrv_sop.pdf',
    majorFields: [ricAirportConfig],
    minorFields: [],
    customizableOptions: [],
}