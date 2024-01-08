"use server";

import prisma from "@/lib/db";

export async function fetchEnroute(includeLoas?: boolean, includeSectors?: boolean, includeAirspace?: boolean, includePriorityAirports?: boolean, ) {
    return prisma.enroute.findFirst({
        include: {
            sectors: includeSectors && {
                include: {
                    airspace: includeAirspace,
                },
            },
            airspace: includeAirspace,
            loas: includeLoas,
            priorityAirports: includePriorityAirports,
        },
    });
}