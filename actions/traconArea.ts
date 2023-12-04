"use server";

import prisma from "@/lib/db";

export async function fetchTraconArea(traconFaa: string, areaFaa: string) {
    const areas = await prisma.traconArea.findMany({
        where: {
            traconFaaIdentifier: traconFaa,
            faaIdentifier: areaFaa,
        },
    });
    return areas[0] || null
}
export async function fetchParentArea(icao: string) {
    const airport = await prisma.airport.findUnique({
        where: {
            icao,
        },
        include: {
            parentMajorTraconArea: {
                include: {
                    parentTracon: {
                        include: {
                            sectors: true,
                        },
                    },
                }
            },
            parentMinorTraconArea: {
                include: {
                    parentTracon: {
                        include: {
                            sectors: true,
                        },
                    },
                }
            },
        },
    });
    return airport?.parentMajorTraconArea || airport?.parentMinorTraconArea;
}