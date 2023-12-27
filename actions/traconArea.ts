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

export async function fetchTraconAreaWithDetail(traconFaa: string, areaFaa: string) {
    const areas = await prisma.traconArea.findMany({
        where: {
            traconFaaIdentifier: traconFaa,
            faaIdentifier: areaFaa,
        },
        include: {
            areaMap: true,
            majorFields: {
                include: {
                    flows: {
                        include: {
                            departureRunways: true,
                            arrivalRunways: true,
                        },
                    },
                },
            },
            minorFields: {
                include: {
                    flows: {
                        include: {
                            departureRunways: true,
                            arrivalRunways: true,
                        },
                    },
                },
                orderBy: {
                    icao: 'asc',
                },
            },
            parentTracon: {
                include: {
                    sectors: {
                        include: {
                            airspaceData: true,
                        }
                    },
                }
            },
        }
    });
    return areas[0] || null
}

export async function fetchParentArea(icao: string) {
    const airport = await prisma.airport.findUnique({
        where: {
            icao,
        },
        include: {
            parentMajorTraconAreas: {
                include: {
                    parentTracon: {
                        include: {
                            sectors: true,
                        },
                    },
                },
            },
            parentMinorTraconAreas: {
                include: {
                    parentTracon: {
                        include: {
                            sectors: true,
                        },
                    },
                },
            },
        },
    }) || undefined;
    if (airport?.parentMajorTraconAreas && airport?.parentMajorTraconAreas.length > 0) {
        return airport?.parentMajorTraconAreas[0];
    } else {
        return airport?.parentMinorTraconAreas[0];
    }
}