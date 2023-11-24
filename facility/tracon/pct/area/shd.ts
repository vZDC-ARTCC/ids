import {TraconAreaConfig} from "@/types";
import {iadAirportConfig} from "@/facility/atct/iad";

export const PCT_SHD: TraconAreaConfig = {
    id: 'Shenandoah',
    faaIdentifier: 'SHD',
    name: 'Shenandoah',
    sop: '/sop/pct_shd_sop.pdf',
    majorFields: [iadAirportConfig],
    minorFields: [],
    customizableOptions: [],
}