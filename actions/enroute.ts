"use server";

import prisma from "@/lib/db";
import {EnrouteData} from "@/app/erids/page";
import {fetchEnrouteAssignments} from "@/actions/enrouteAssignment";

export async function fetchEnroute(includeLoas?: boolean, includeSectors?: boolean, includeAirspace?: boolean, includePriorityAirports?: boolean, ) {
    return prisma.enroute.findFirst({
        include: {
            sectors: includeSectors && {
                include: {
                    airspace: includeAirspace,
                },
            },
            presets: {
                include: {
                    sectors: true,
                },
            },
            airspace: includeAirspace,
            loas: includeLoas,
            priorityAirports: includePriorityAirports,
        },
    });
}

export async function fetchEnrouteData(): Promise<EnrouteData> {
    const enroute = await fetchEnroute(false, true, false, true);
    const splits = await fetchEnrouteAssignments();
    return {
        enroute,
        splits,
    } as EnrouteData;
}