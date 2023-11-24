"use server";

import prisma from "@/lib/db";

export async function fetchLocalRunwayAssignments(icao: string) {
    return prisma.towerRunwayAssignment.findMany({
        where: {
            airportId: icao,
        },
        orderBy: {
            id: 'asc',
        },
    });
}

export async function createAssignment(icao: string, localName: string, runways: string[]) {
    return prisma.towerRunwayAssignment.create({
        data: {
            airportId: icao,
            localIdentifier: localName,
            runwayIdentifiers: runways,
        },
    });
}

export async function updateAssignment(id: string, icao: string, localName: string, runways: string[]) {
    return prisma.towerRunwayAssignment.update({
        data: {
            airportId: icao,
            localIdentifier: localName,
            runwayIdentifiers: runways,
        },
        where: {
            id,
            airportId: icao,
            localIdentifier: localName,
        },
    });
}