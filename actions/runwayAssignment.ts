"use server";

import prisma from "@/lib/db";
import log from "@/lib/log";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

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
    const assignment = await prisma.towerRunwayAssignment.create({
        data: {
            airportId: icao,
            localIdentifier: localName,
            runwayIdentifiers: runways,
        },
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} created a local runway assigment at ${icao}: ${JSON.stringify({icao, localName, runways})}`);
    return assignment;
}

export async function updateAssignment(id: string, icao: string, localName: string, runways: string[]) {
    const assignment = await prisma.towerRunwayAssignment.update({
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
    await log(`${(await getServerSession(authOptions))?.user.cid} updated a local runway assigment at ${icao}: ${JSON.stringify({icao, localName, runways})}`);
    return assignment;
}