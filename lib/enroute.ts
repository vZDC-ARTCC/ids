import {Airport} from "@prisma/client";

export function sortPriorityAirports(airports: any[], priorityAirports: any[]) {
    const priorityIcaos = priorityAirports.map((pa) => pa.icao);
    const pa = airports.filter((a) => priorityIcaos.includes(a.icao));
    const npa = airports.filter((a) => !priorityIcaos.includes(a.icao));
    return [...pa, ...npa];
}