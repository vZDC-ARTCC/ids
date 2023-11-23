import {TraconAreaConfig} from "@/types";
import {dcaAirportConfig} from "@/facility/atct/kdca";

export const PCT_MTV: TraconAreaConfig = {
    id: 'Mount Vernon',
    faaIdentifier: 'MTV',
    name: 'Mount Vernon ',
    sop: '/sop/pct_mtv_sop.pdf',
    majorFields: [dcaAirportConfig],
    minorFields: [],
    customizableOptions: [],
}